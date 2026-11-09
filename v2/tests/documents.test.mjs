import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const root=new URL("../",import.meta.url);
const js=readFileSync(new URL("app.js",root),"utf8");
const html=readFileSync(new URL("index.html",root),"utf8");
const docs=await import("../src/data/document-specs.js");
const renderer=await import("../src/core/document-renderer.js");
test("7 entregables estratégicos con capítulos definidos",()=>{
 assert.equal(docs.DOCUMENTS.length,7);
 assert.ok(docs.DOCUMENTS.every(x=>x.sections.length>=6));
});
test("un entregable incompleto nunca se declara listo",()=>{
 const d=docs.evaluateDocumentSections("plan_12m",[]);
 assert.equal(d.complete,0);assert.equal(d.ready,false);
 assert.throws(()=>renderer.assembleDocumentHTML({documentId:"plan_12m",sections:[]}));
});
test("un documento completo conserva texto extenso y escapa HTML",()=>{
 const d=docs.DOCUMENTS.find(x=>x.id==="diagnostico");
 const text="Contenido de prueba ".repeat(1000);
 const sections=d.sections.map(([code])=>({section_code:code,status:"verified",body_text:text,version:1}));
 const report=renderer.assembleDocumentHTML({documentId:"diagnostico",sections,projectName:"Negocio <demo>",ownerName:"Persona de prueba",createdAt:"2026-11-07"});
 assert.ok(report.includes(text.trim()));assert.ok(report.includes("&lt;demo&gt;"));assert.equal(docs.evaluateDocumentSections("diagnostico",sections).ready,true);
});
test("la evidencia pendiente o hipotética no se convierte en dato real",()=>{
 assert.equal(docs.classifyEvidence({status:"missing",value:123}).value,null);
 assert.throws(()=>docs.classifyEvidence({status:"verified",value:123}));
 assert.equal(docs.classifyEvidence({status:"estimated",value:123}).validation_required,true);
});
test("el campus remite solo a formatos de ejemplo y no inventa resultados",()=>{
 assert.match(js,/Sin resultados empresariales todavía/);
 assert.match(html,/INITIUM ONE LAB/);
 assert.doesNotMatch(js,/api\.openai\.com/);
});
