import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import {readFileSync} from "node:fs";
const src=readFileSync(new URL("../app.js",import.meta.url),"utf8");
function boot(){
 const handlers={};const nodes=new Map();
 const get=id=>{if(id==="modal-backdrop"||id==="chat-feed")return null;if(!nodes.has(id))nodes.set(id,{innerHTML:"",textContent:"",classList:{add(){},remove(){},toggle(){}},addEventListener(ev,fn){handlers["id:"+ev]=fn},scrollIntoView(){}});return nodes.get(id)};
 const doc={getElementById:get,addEventListener(ev,fn){handlers[ev]=fn},querySelector(){return null},body:{insertAdjacentHTML(){}}};
 const voice={cancel(){},speak(u){this.last=u;}};
 const win={scrollTo(){},open(){},speechSynthesis:voice,SpeechSynthesisUtterance:function(text){this.text=text;this.lang="";this.rate=1;},addEventListener(){}};
 const ctx=vm.createContext({document:doc,window:win,localStorage:{getItem(){return null},setItem(){}},setTimeout(){},clearTimeout(){}});
 vm.runInContext(src,ctx);
 const click=(sel,data)=>handlers.click({target:{closest(s){return s===sel?{dataset:data}:null;}}});
 return {get,click,voice};
}
test("las 6 lecciones tienen ideas completas, pregunta, opciones y explicación",()=>{
 const a=boot();a.click("[data-module]",{module:"1"});
 for(let i=0;i<6;i++){
  a.click("[data-lesson]",{lesson:String(i)});
  const content=a.get("view").innerHTML;
  assert.match(content,/Lo que debes comprender/);
  assert.match(content,/TRES IDEAS QUE DEBES RECORDAR/);
  assert.equal((content.match(/class="idea"/g)||[]).length,3);
  assert.match(content,/EJEMPLO EMPRESARIAL/);
  assert.match(content,/Responder la pregunta de esta clase/);
  assert.doesNotMatch(content,/<b>[A-Z]<\/b><p>[a-z]<\/p>/);
  a.click("[data-action]",{action:"next-practice"});
  const question=a.get("view").innerHTML;
  assert.match(question,/¿Qué harías en esta situación?/);
  assert.equal((question.match(/class="option /g)||[]).length,3);
  assert.match(question,/data-option="1"/);
  a.click("[data-stage]",{stage:"learn"});
 }
});
test("la narración lee lección y tres conceptos sin borrar el aula",()=>{
 const a=boot();a.click("[data-module]",{module:"1"});
 const before=a.get("view").innerHTML;
 a.click("[data-action]",{action:"audio"});
 assert.ok(a.voice.last.text.includes("Diagnóstico real"));
 assert.ok(a.voice.last.text.includes("Síntoma y causa"));
 assert.ok(a.voice.last.text.includes("Decisión estratégica"));
 assert.ok(a.get("view").innerHTML.includes("TRES IDEAS QUE DEBES RECORDAR"));
 assert.ok(before.includes("Responder la pregunta de esta clase"));
});
