import { DOCUMENT_BY_ID, evaluateDocumentSections } from "../data/document-specs.js";

function esc(value){
  return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function paragraphs(raw){
  return String(raw??"").trim().split(/\n\s*\n/).map(p=>"<p>"+esc(p).replace(/\n/g,"<br>")+"</p>").join("\n");
}
export function assembleDocumentHTML({documentId,sections,projectName,ownerName,createdAt}){
  const spec=DOCUMENT_BY_ID[documentId];if(!spec)throw new Error("Documento desconocido");
  const result=evaluateDocumentSections(documentId,sections);
  if(!result.ready)throw new Error("No es posible exportar: "+result.complete+" de "+result.expected+" secciones revisadas");
  const byCode=new Map(sections.map(s=>[s.section_code,s]));
  const intro=`<header class="cover"><div class="brand"><img src="./assets/nat-logo-horizontal.svg" alt="Nat Moreno &amp; Co." width="240"></div><span>INITIUM ACADEMY · ONE LAB</span><h1>${esc(spec.name)}</h1><p>${esc(projectName)}</p><p>Elaborado para: ${esc(ownerName)}</p><small>${esc(createdAt)}</small></header>`;
  const index=`<nav class="index" aria-label="Índice del documento"><h2>Contenido</h2><ol>${spec.sections.map((s,i)=>`<li>${i+1}. ${esc(s[1])}</li>`).join("")}</ol></nav>`;
  const body=spec.sections.map(([code,title],i)=>`<section class="chapter"><div class="chapter-num">CAPÍTULO ${String(i+1).padStart(2,"0")}</div><h2>${esc(title)}</h2><div class="content">${paragraphs(byCode.get(code)?.body_text)}</div></section>`).join("\n");
  const stylesheet=`<style>
  @page{size:A4;margin:22mm 19mm}*{box-sizing:border-box}
  body{margin:0;color:#111;font:12pt/1.65 Arial,Helvetica,sans-serif;background:#fff}
  .cover{min-height:240mm;page-break-after:always;padding-top:20mm}
  .cover .brand{background:#332239;padding:16px 24px;display:inline-block;margin-bottom:34mm}
  .cover span,.chapter-num{color:#774c8a;font-size:9pt;font-weight:700;letter-spacing:2px;text-transform:uppercase}
  .cover h1{font-size:30pt;line-height:1.2;font-weight:700;border-bottom:3px solid #d3bc8d;padding-bottom:14mm;margin-top:12mm}
  .cover p{color:#5f5957;margin-top:8mm}.cover small{color:#777}
  .index{page-break-after:always}.index h2,.chapter h2{font-size:21pt;line-height:1.25;border-bottom:1px solid #d3bc8d;padding-bottom:6mm}
  .index li{padding:4mm 0;border-bottom:1px solid #eee7f2}
  .chapter{page-break-before:always}.chapter h2{margin:6mm 0 10mm}.chapter .content{overflow-wrap:anywhere;white-space:normal}
  .chapter p{margin:0 0 6mm}.chapter strong{font-weight:bold}
  @media screen{body{background:#f7f4ee;max-width:830px;margin:20px auto;padding:36px;box-shadow:0 8px 28px #3332}.cover{min-height:700px}}
  </style>`;
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(spec.name)} · INITIUM</title>${stylesheet}</head><body>${intro}${index}${body}<footer><small>INITIUM ONE LAB · Nat Moreno &amp; Co.</small></footer></body></html>`;
}
