import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const root=new URL("../",import.meta.url);
const docSrc=readFileSync(new URL("src/data/document-specs.js",root),"utf8");
const v2app=readFileSync(new URL("app.js",root),"utf8");
const html=readFileSync(new URL("index.html",root),"utf8");
const css=readFileSync(new URL("styles.css",root),"utf8");
const source=docSrc.replace(/^export /gm,"");
const funcs=new Function(source+";return {DOCUMENTS,evaluateDocumentSections,classifyEvidence};")();
test("los 7 entregables tienen un contrato de secciones",()=>{
 assert.equal(funcs.DOCUMENTS.length,7);
 assert.ok(funcs.DOCUMENTS.every(d=>d.sections.length>=6));
});
test("un documento con capítulos pendientes no se marca listo",()=>{
 const r=funcs.evaluateDocumentSections("plan_12m",[]);
 assert.equal(r.ready,false);
 assert.equal(r.complete,0);
 assert.ok(r.expected>=15);
});
test("solamente capítulos con texto y revisión cuentan como completos",()=>{
 const r=funcs.evaluateDocumentSections("diagnostico",[
 {section_code:"portada",status:"verified",body_text:"Portada institucional",version:1},
 {section_code:"resumen",status:"generated",body_text:"Sección no revisada",version:1}
 ]);
 assert.equal(r.complete,1);
 assert.equal(r.ready,false);
});
test("ninguna cifra vacía o hipotética se presenta como dato verificado",()=>{
 assert.equal(funcs.classifyEvidence({status:"missing",value:100000}).value,null);
 assert.throws(()=>funcs.classifyEvidence({status:"verified",value:100000}));
 assert.equal(funcs.classifyEvidence({status:"estimated",value:100000}).validation_required,true);
});
test("los logos originales figuran como activos de la V2",()=>{
 assert.match(html,/nat-logo-vertical\.svg/);
 assert.match(html,/nat-logo-horizontal\.svg/);
 assert.match(v2app,/tutor-nat-reference\.svg/);
 assert.match(css,/mentor-portrait/);
});
test("el análisis de datos no se confunde con la demostración",()=>{
 assert.match(v2app,/todavía no se conecta con ninguna API/);
 assert.match(v2app,/No introduzcas información confidencial/);
});
