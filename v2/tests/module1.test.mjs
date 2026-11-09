import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import vm from "node:vm";

const root=new URL("../",import.meta.url);
const files=["module1-core.js","module1-ui.js","app.js"];
const source=Object.fromEntries(files.map(f=>[f,readFileSync(new URL(f,root),"utf8")]));
function start(){
 const store=new Map(), handlers={}, elements=new Map(), downloads=[];
 const get=id=>{
  if(["modal-backdrop","chat-feed","tutor-question"].includes(id))return null;
  if(!elements.has(id))elements.set(id,{
   innerHTML:"",textContent:"",remove(){},scrollIntoView(){},
   classList:{add(){},remove(){},toggle(){}},
   addEventListener(event,fn){handlers["id:"+event]=fn},
   querySelector(){return null}
  });
  return elements.get(id);
 };
 const doc={getElementById:get,addEventListener(name,fn){handlers[name]=fn},
  querySelector(){return null},createElement(){return {click(){downloads.push(this.download)},remove(){}}},
  body:{appendChild(){},insertAdjacentHTML(){}}};
 const win={scrollTo(){},open(){},speechSynthesis:{cancel(){},speak(){}}};
 const storage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
 const exported=[];
 const context=vm.createContext({
  window:win,document:doc,localStorage:storage,
  SpeechSynthesisUtterance:function(){},setTimeout(){},clearTimeout(){},
  Blob:function(parts){exported.push(parts.join(""))},
  URL:{createObjectURL(){return "blob:test"},revokeObjectURL(){}}
 });
 for(const file of files)vm.runInContext(source[file],context,{filename:file});
 const click=(attribute,dataset)=>handlers.click({target:{closest(q){return q.includes(attribute)?{dataset}:null}}});
 const input=(id,value,other={})=>handlers.input({target:{id,value,dataset:other}});
 const change=(id,value,other={})=>handlers.change({target:{id,value,dataset:other}});
 return {store,downloads,exported,get,click,input,change,M:win.INITIUM_M1,UI:win.INITIUM_M1_UI};
}
test("las pantallas aplicadas de M1 muestran captura en 4 áreas y 3 resultados",()=>{
 const a=start();
 a.click("data-module",{module:"1"});a.click("data-stage",{stage:"apply"});
 assert.match(a.get("view").innerHTML,/Recupera la realidad de tu negocio/);
 assert.equal(a.M.GROUPS.length,4);
 assert.equal(a.M.FIELDS.length,16);
 a.click("data-m1-action",{m1Action:"results"});
 const h=a.get("view").innerHTML;
 for(const heading of ["APRENDIZAJE","RESULTADO DEL NEGOCIO","ENTREGABLE"])assert.ok(h.includes(heading));
});
test("los registros locales conservan fuentes y diferencian estimación de verificado",()=>{
 const a=start();a.click("data-module",{module:"1"});a.click("data-stage",{stage:"apply"});
 a.input("m1-project","Negocio de prueba");
 a.input("sample","Ventas aproximadas 3000",{m1Id:"sales",m1Property:"value"});
 a.change("sample","estimated",{m1Id:"sales",m1Property:"status"});
 const entry=a.M.evidence().find(x=>x.id==="sales");
 assert.equal(entry.status,"estimated");
 assert.equal(entry.value,"Ventas aproximadas 3000");
 assert.ok(a.store.has("initium-v2-module1-draft-v1"));
 assert.equal(a.M.analyze().severity,"insufficient");
});
test("no hay truncamiento de la información extensa y se exporta la ficha",()=>{
 const a=start();
 a.click("data-module",{module:"1"});a.click("data-stage",{stage:"apply"});
 const large="Una descripción real extensa. ".repeat(800);
 a.input("field",large,{m1Id:"offer",m1Property:"value"});
 a.click("data-m1-action",{m1Action:"results"});
 a.click("data-m1-action",{m1Action:"export"});
 assert.equal(a.downloads[0],"INITIUM_Modulo_1_Ficha_Diagnostico_Inicial.html");
 assert.ok(a.exported[0].includes(large));
 assert.match(a.exported[0],/No sustituye al diagnóstico profesional/);
});
test("la evaluación de cierre conserva exactamente la pregunta original",()=>{
 const a=start();
 assert.equal(a.M.QUIZ.question,"Un negocio recibe visitas, likes y ventas por marketplace, pero el dueño 'no ve la caja'. ¿Qué revisarías primero?");
 assert.equal(a.M.QUIZ.options[2],"Calcular ventas netas reales: descontar comisiones de marketplace, devoluciones, envíos y descuentos dados");
 a.click("data-module",{module:"1"});
 a.click("data-stage",{stage:"results"});
 a.click("data-m1-answer",{m1Answer:"2"});
 assert.equal(a.M.snapshot().quiz.passed,true);
 assert.equal(a.M.snapshot().quiz.attempts,1);
 assert.equal(a.M.analyze().learning.finalQuizScore,5);
});
test("la ficha preliminar también está accesible desde Resultados y Entregables",()=>{
 const a=start();
 a.click("data-page",{page:"results"});
 assert.match(a.get("view").innerHTML,/ficha de diagnóstico inicial/i);
 a.click("data-page",{page:"deliverables"});
 assert.match(a.get("view").innerHTML,/Ficha de Diagnóstico Inicial/);
});
test("las entradas textuales se escapan para evitar inyectar código en el HTML",()=>{
 const a=start();
 a.M.updateMeta("projectName","<script>alert(9)</script>");
 const h=a.M.documentHTML(a.M.analyze());
 assert.ok(h.includes("&lt;script&gt;alert(9)&lt;/script&gt;"));
 assert.ok(!h.includes("<script>alert(9)</script>"));
});
