/* INITIUM ONE LAB V2 — Adjuntos locales del Módulo 1.
 * IndexedDB almacena archivos enteros en este dispositivo para una DEMO sin backend.
 * No analiza archivos ni los sube a servidores ni confirma evidencia documental.
 * Al borrar datos del sitio se pierden. No introducir documentación empresarial sensible.
 */
(function(global){
"use strict";
const DB_NAME="initium-v2-evidence-local-v1",STORE="attachments",PROJECT="module-1-demo";
const ACCEPT=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.png,.jpg,.jpeg,.webp,.heic,.heif";
const EXT=new Set(ACCEPT.split(",").map(x=>x.slice(1)));
const FILE_LIMIT=15*1024*1024,TOTAL_LIMIT=80*1024*1024,COUNT_LIMIT=40;
let db=null,records=[],lastError="",ready=false,backend="pending";
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const clone=x=>JSON.parse(JSON.stringify(x));
const filesize=n=>n>=1048576?(n/1048576).toFixed(1)+" MB":(n/1024).toFixed(0)+" KB";
const format=n=>new Date(n).toLocaleDateString("es-MX",{year:"numeric",month:"short",day:"numeric"});
const typeOf=f=>(f.name||"").split(".").pop().toLowerCase();
const labelType=t=>(["png","jpg","jpeg","webp","heic","heif"].includes(t)?"Imagen":t==="pdf"?"PDF":["doc","docx"].includes(t)?"Word":["xls","xlsx","csv"].includes(t)?"Excel / datos":["ppt","pptx"].includes(t)?"PowerPoint":"Texto");
const safeUUID=()=>global.crypto?.randomUUID?.()||"a"+Date.now()+"_"+Math.random().toString(36).slice(2);
function metadata(){return clone(records.map(({id,fieldId,moduleCode,name,type,size,modified,addedAt})=>({id,fieldId,moduleCode:moduleCode||"1",name,type,size,modified,addedAt,analyzed:false,storage:"local_browser_only"})));}
function status(){return {ready,backend,lastError,count:records.length,totalBytes:records.reduce((n,x)=>n+x.size,0)};}
function openDB(){
 return new Promise((resolve,reject)=>{
  if(!global.indexedDB){reject(Error("Este navegador no permite almacenamiento de archivos local"));return;}
  const req=global.indexedDB.open(DB_NAME,1);
  req.onupgradeneeded=()=>{const d=req.result;if(!d.objectStoreNames.contains(STORE))d.createObjectStore(STORE,{keyPath:"id"});};
  req.onerror=()=>reject(req.error||Error("No fue posible abrir la biblioteca"));
  req.onsuccess=()=>resolve(req.result);
 });
}
function transaction(action,record){
 return new Promise((resolve,reject)=>{
  const tx=db.transaction(STORE,"readwrite"),store=tx.objectStore(STORE);
  if(action==="put")store.put(record);else if(action==="delete")store.delete(record);
  else throw Error("Operación inválida");
  tx.oncomplete=()=>resolve(true);
  tx.onerror=()=>reject(tx.error||Error("No se pudieron guardar archivos"));
  tx.onabort=()=>reject(tx.error||Error("Almacenamiento interrumpido"));
 });
}
function readAll(){
 return new Promise((resolve,reject)=>{
  const req=db.transaction(STORE,"readonly").objectStore(STORE).getAll();
  req.onsuccess=()=>resolve(req.result||[]);
  req.onerror=()=>reject(req.error||Error("No se pudo leer la biblioteca"));
 });
}
function readOne(id){
 return new Promise((resolve,reject)=>{
  const req=db.transaction(STORE,"readonly").objectStore(STORE).get(id);
  req.onsuccess=()=>resolve(req.result||null);
  req.onerror=()=>reject(req.error||Error("Archivo no encontrado"));
 });
}
async function init(){
 try{db=await openDB();records=(await readAll()).filter(x=>x.project===PROJECT).map(({blob,...x})=>x);backend="indexeddb";ready=true;lastError="";}
 catch(e){backend="unavailable";ready=false;lastError=String(e?.message||e);}
 dispatch();return status();
}
function dispatch(){try{global.dispatchEvent(new CustomEvent("initium-attachments-changed",{detail:status()}));}catch{}}
async function add(files,fieldId,moduleCode="1"){
 if(!ready||!db)throw Error("No está disponible el almacenamiento local. No se guardaron archivos");
 if(moduleCode==="1"){if(typeof fieldId!=="string"||!global.INITIUM_M1?.FIELDS?.some(f=>f.id===fieldId))throw Error("Apartado de diagnóstico inválido");}else if(!/^\d+(\.\d+)?$/.test(moduleCode)||fieldId!=="_module")throw Error("Módulo o apartado inválido");
 const items=Array.from(files||[]);if(!items.length)return {added:0,skipped:0};
 let added=0,skipped=0;const rejected=[];
 for(const file of items){
  const t=typeOf(file);
  if(!EXT.has(t)){rejected.push(file.name+": extensión no admitida");continue;}
  if(!(file.size>0)){rejected.push(file.name+": archivo vacío");continue;}
  if(file.size>FILE_LIMIT){rejected.push(file.name+": supera 15 MB por archivo");continue;}
  if(records.length>=COUNT_LIMIT){rejected.push("Límite local de 40 archivos alcanzado");break;}
  if(records.reduce((n,x)=>n+x.size,0)+file.size>TOTAL_LIMIT){rejected.push("Límite local total de 80 MB alcanzado");break;}
  if(records.some(x=>(x.moduleCode||"1")===moduleCode&&x.fieldId===fieldId&&x.name===file.name&&x.size===file.size&&x.modified===file.lastModified)){skipped++;continue;}
  const record={id:safeUUID(),project:PROJECT,fieldId,moduleCode,name:String(file.name),type:t,size:file.size,modified:file.lastModified||0,addedAt:Date.now(),blob:file};
  await transaction("put",record);
  const {blob,...meta}=record;records.push(meta);added++;
 }
 dispatch();return {added,skipped,rejected};
}
async function remove(id){
 if(!ready)throw Error("No se puede modificar la biblioteca local");
 const match=records.find(x=>x.id===id);if(!match)throw Error("Adjunto no encontrado");
 await transaction("delete",id);records=records.filter(x=>x.id!==id);dispatch();return true;
}
async function download(id){
 if(!ready)throw Error("Biblioteca no disponible");
 const item=await readOne(id);if(!item||!item.blob)throw Error("Archivo no encontrado en este navegador");
 const url=URL.createObjectURL(item.blob);
 const a=document.createElement("a");a.href=url;a.download=item.name;document.body.appendChild(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),5000);
}
function fileList(fieldId,moduleCode="1"){
 const list=metadata().filter(x=>x.fieldId===fieldId&&(x.moduleCode||"1")===moduleCode);
 return list.length?'<ul class="m1-file-list">'+list.map(x=>'<li><div class="m1-file-icon" aria-hidden="true">'+(labelType(x.type)==="Imagen"?"▧":"▤")+'</div><div class="m1-file-name"><b title="'+esc(x.name)+'">'+esc(x.name)+'</b><small>'+esc(labelType(x.type))+' · '+filesize(x.size)+' · guardado local · sin analizar</small></div><div class="m1-file-controls"><button type="button" data-m1-file-download="'+esc(x.id)+'" title="Descargar archivo" aria-label="Descargar '+esc(x.name)+'">↓</button><button type="button" data-m1-file-delete="'+esc(x.id)+'" title="Eliminar archivo" aria-label="Eliminar '+esc(x.name)+'">×</button></div></li>').join("")+'</ul>':'<p class="m1-empty-file">Todavía no hay archivos en este apartado.</p>';
}
function uploader(fieldId,moduleCode="1"){
 return '<div class="m1-attachment-box"><div class="m1-attachment-top"><span class="m1-attach-icon">＋</span><div><b>Documentos y evidencias</b><p>Puedes adjuntar uno o varios archivos, además de escribir o pegar información.</p></div></div>'
 +'<label class="m1-drop-zone" data-m1-drop="'+esc(fieldId)+'" data-m1-module="'+esc(moduleCode)+'"><input class="m1-file-input" type="file" multiple accept="'+ACCEPT+'" data-m1-file="'+esc(fieldId)+'" data-m1-module="'+esc(moduleCode)+'"><strong>＋ Seleccionar archivos o fotos</strong><span>PDF · Word · Excel · PowerPoint · CSV · imágenes</span><small>Hasta 15 MB por archivo, 80 MB y 40 archivos por navegador. También puedes arrastrarlos aquí.</small></label>'
 +'<label class="m1-camera-button">▣ Tomar foto con el móvil<input type="file" accept="image/*" capture="environment" data-m1-file="'+esc(fieldId)+'" data-m1-module="'+esc(moduleCode)+'"></label><div class="m1-upload-list" data-m1-list="'+esc(fieldId)+'" data-m1-module="'+esc(moduleCode)+'">'+fileList(fieldId,moduleCode)+'</div><p class="m1-attach-disclaimer">Guardados solo en este dispositivo. El Analista INITIUM todavía no puede leer estos adjuntos; falta habilitar procesamiento y almacenamiento privado.</p></div>';
}
function refresh(){
 if(!global.document?.querySelectorAll)return;
 for(const el of global.document.querySelectorAll("[data-m1-list]"))el.innerHTML=fileList(el.dataset.m1List,el.dataset.m1Module||"1");
}
global.INITIUM_ATTACH=Object.freeze({ACCEPT,FILE_LIMIT,TOTAL_LIMIT,COUNT_LIMIT,init,status,metadata,add,remove,download,fileList,uploader,refresh});
})(window);