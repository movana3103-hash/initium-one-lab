import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import vm from "node:vm";
const base=new URL("../",import.meta.url);
const src=readFileSync(new URL("module1-attachments.js",base),"utf8");
function setup(){
 const records=new Map();
 const fakeDB={
  objectStoreNames:{contains:()=>false},
  createObjectStore(){return {};},
  transaction(){
   const tx={oncomplete:null,onerror:null,onabort:null};
   tx.objectStore=()=>({
    getAll(){const r={};queueMicrotask(()=>{r.result=[...records.values()];r.onsuccess?.();});return r;},
    get(id){const r={};queueMicrotask(()=>{r.result=records.get(id);r.onsuccess?.();});return r;},
    put(item){records.set(item.id,item);queueMicrotask(()=>tx.oncomplete?.());},
    delete(id){records.delete(id);queueMicrotask(()=>tx.oncomplete?.());}
   });
   return tx;
  }
 };
 const indexedDB={open(){const req={result:fakeDB};queueMicrotask(()=>{req.onupgradeneeded?.();req.onsuccess?.();});return req;}};
 const bus=[];
 const win={
  indexedDB,crypto:{randomUUID:()=>String(records.size+1)+"-faux-id"},
  INITIUM_M1:{FIELDS:[{id:"plan"},{id:"sales"}]},
  dispatchEvent(x){bus.push(x.type);},
 };
 const created=[];
 const dom={createElement(){return {click(){created.push(this.download)},remove(){}}},body:{appendChild(){}},querySelectorAll(){return []}};
 const URLmock={createObjectURL(){return "blob:test"},revokeObjectURL(){}};
 const CEvent=class {constructor(type,o){this.type=type;this.detail=o?.detail;}};
 const ctx=vm.createContext({window:win,document:dom,URL:URLmock,CustomEvent:CEvent,setTimeout(){}});
 vm.runInContext(src,ctx);
 return {store:records,A:win.INITIUM_ATTACH,created,bus};
}
test("admite PDF Word Excel PowerPoint imágenes y CSV",()=>{
 const {A}=setup();
 for(const ext of [".pdf",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".csv",".png",".jpg",".jpeg",".webp",".heic",".heif",".txt"]){
  assert.ok(A.ACCEPT.includes(ext),ext);
 }
});
test("adjuntos se vinculan al campo y no se anuncian como analizados",async()=>{
 const {A}=setup();await A.init();
 const r=await A.add([{name:"estado-resultados.xlsx",size:800,lastModified:12}],"sales");
 assert.equal(r.added,1);
 assert.equal(A.metadata()[0].fieldId,"sales");
 assert.equal(A.metadata()[0].analyzed,false);
 assert.equal(A.status().count,1);
 assert.match(A.uploader("sales"),/estado-resultados.xlsx/);
 assert.match(A.uploader("sales"),/sin analizar/);
});
test("duplicados, formatos prohibidos y archivos grandes no se agregan",async()=>{
 const {A}=setup();await A.init();
 const file={name:"brief.pdf",size:1200,lastModified:100};
 assert.equal((await A.add([file],"plan")).added,1);
 assert.equal((await A.add([file],"plan")).skipped,1);
 assert.equal((await A.add([{name:"malware.exe",size:100}],"plan")).added,0);
 assert.equal((await A.add([{name:"demasiado.pdf",size:16*1024*1024}],"plan")).added,0);
 assert.equal(A.status().count,1);
});
test("permite descargar y eliminar un archivo sin tocar los otros",async()=>{
 const {A,created}=setup();await A.init();
 await A.add([{name:"uno.pdf",size:100,lastModified:0},{name:"dos.docx",size:200,lastModified:0}],"plan");
 const list=A.metadata();assert.equal(list.length,2);
 await A.download(list[0].id);
 assert.equal(created.length,1);
 await A.remove(list[0].id);
 assert.equal(A.status().count,1);
 assert.equal(A.metadata()[0].name,"dos.docx");
});
