/* INITIUM ONE LAB V2 — static contract checks, run: node --test v2/tests/contracts.test.mjs
 * Estos tests no sustituyen la inspección del campus en un navegador real. */
import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createRequire} from "node:module";
const base=new URL("../",import.meta.url);
const js=readFileSync(new URL("app.js",base),"utf8");
const css=readFileSync(new URL("styles.css",base),"utf8");
const html=readFileSync(new URL("index.html",base),"utf8");
const validatedCodes=["0","1","1.5","2","3","4","4.5","5","6","7","8","9","9.5","10","10.5","10.8","10.9","11","11.5","11.6","11.7","11.8","12"];
const findModules=()=>[...js.matchAll(/\["([\d.]+)","([^"]+)"\]/g)].slice(0,23);
test("la interfaz incluye los 23 módulos correctos y en su orden",()=>{
 const m=findModules();
 assert.equal(m.length,23);
 assert.deepEqual(m.map(x=>x[1]),validatedCodes);
});
test("Módulo 1 cuenta con seis lecciones y simulaciones",()=>{
 assert.equal((js.match(/\bcase:"/g)||[]).length,6);
 assert.match(js,/function simulateView/);
 assert.match(js,/function learnView/);
});
test("el campus diferencia las cuatro etapas educativas",()=>{
 for(const step of ["learn","simulate","apply","results"]){
  assert.ok(js.includes('["'+step+'"')||js.includes(',"'+step+'"'),"falta "+step);
 }
});
test("narración opcional y Tutor INITIUM presentes",()=>{
 assert.match(js,/speechSynthesis/);
 assert.match(js,/function tutorView/);
 assert.match(js,/function tutorReply/);
 assert.match(js,/IA.*en vivo/);
});
test("la demo no incluye conexión directa ni secretos de API",()=>{
 assert.doesNotMatch(js,/fetch\s*\(/);
 assert.doesNotMatch(js,/OPENAI_API_KEY|sk-proj-|x-api-key/i);
 assert.doesNotMatch(html,/OPENAI_API_KEY|sk-proj-|x-api-key/i);
});
test("el diseño incluye la paleta editorial aprobada",()=>{
 for(const color of ["#d3bc8d","#f7f4ee","#774c8a","#eee7f2"])assert.ok(css.toLowerCase().includes(color),"falta "+color);
});
test("no se presenta un diagnóstico ficticio como si fuera real",()=>{
 assert.match(js,/todavía no se conecta con ninguna API/);
 assert.match(js,/Sin evaluación/);
 assert.match(js,/Pendiente del diagnóstico/);
});
test("los archivos CSS y JS de entrada están ligados",()=>{
 assert.match(html,/href="\.\/styles\.css"/);
 assert.match(html,/src="\.\/app\.js"/);
});
