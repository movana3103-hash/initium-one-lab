import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import vm from "node:vm";
const root=new URL("../",import.meta.url);
const js=readFileSync(new URL("app.js",root),"utf8");
const css=readFileSync(new URL("styles.css",root),"utf8");
const html=readFileSync(new URL("index.html",root),"utf8");
const EXPECTED=["0","1","1.5","2","3","4","4.5","5","6","7","8","9","9.5","10","10.5","10.8","10.9","11","11.5","11.6","11.7","11.8","12"];
function makeCampus(){
 const elements=new Map(), handlers={};
 const get=id=>{
  if(id==="modal-backdrop"||id==="chat-feed"||id==="tutor-question")return null;
  if(!elements.has(id))elements.set(id,{
   innerHTML:"",textContent:"",classList:{add(){},remove(){},toggle(){}},
   addEventListener(event,cb){handlers[id+":"+event]=cb;},remove(){},
   querySelector(){return null},scrollIntoView(){}
  });
  return elements.get(id);
 };
 const doc={getElementById:get,addEventListener(event,cb){handlers[event]=cb;},querySelector(){return null},
  body:{insertAdjacentHTML(){}}};
 const storage={getItem(){return null},setItem(){}};
 const win={scrollTo(){},open(){},speechSynthesis:{cancel(){},speak(){}}};
 const context=vm.createContext({document:doc,localStorage:storage,window:win,
  SpeechSynthesisUtterance:function(){},setTimeout(){return 1},clearTimeout(){}});
 vm.runInContext(js,context);
 const click=(selector,dataset)=>handlers.click({target:{closest(name){return name===selector?{dataset}:null;}}});
 return {get,click,context};
}
test("los 23 módulos conservan su secuencia exacta",()=>{
 const codes=[...js.matchAll(/^\["([\d.]+)","/gm)].map(x=>x[1]);
 assert.deepEqual(codes,EXPECTED);
});
test("logos vectoriales originales y escenas originales en el shell",()=>{
 assert.match(html,/nat-logo-vertical\.svg/);
 assert.match(html,/nat-logo-horizontal\.svg/);
 assert.match(html,/mountain-scene\.svg/);
 assert.match(css,/hero-scene\.svg/);
});
test("todas las pantallas principales son navegables y generan HTML",()=>{
 const a=makeCampus();assert.match(a.get("view").innerHTML,/INITIUM ONE LAB/);
 for(const page of ["route","modules","simulations","results","deliverables","resources","home"]){
  a.click("[data-page]",{page});
  assert.ok(a.get("view").innerHTML.length>500,page);
 }
});
test("el aula ofrece las cuatro etapas y el tutor",()=>{
 const a=makeCampus();a.click("[data-module]",{module:"1"});
 for(const stage of ["learn","practice","apply","results"]){
  a.click("[data-stage]",{stage});
  assert.ok(a.get("view").innerHTML.length>1000,stage);
 }
 assert.match(a.get("view").innerHTML,/Tutor<br>INITIUM/);
});
test("los datos no se representan como análisis real",()=>{
 const a=makeCampus();a.click("[data-page]",{page:"results"});
 assert.match(a.get("view").innerHTML,/Sin resultados empresariales todavía/);
 assert.doesNotMatch(js,/fetch\s*\(/);
 assert.doesNotMatch(js,/sk-proj-|OPENAI_API_KEY/);
});
test("la interfaz tiene estilos responsivos y estados de foco",()=>{
 assert.match(css,/@media\(max-width:750px\)/);
 assert.match(css,/:focus-visible/);
 assert.match(css,/#d3bc8d/i);
 assert.match(css,/#774c8a/i);
});
