/* Módulo 1 V2: enseñanza, expediente preliminar y ficha de resultados. Sin IA activa. */
(function(global){
"use strict";
const M=global.INITIUM_M1;
if(!M)throw Error("Falta el núcleo del Módulo 1");
const escapeHTML=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const evidenceStatus=s=>({"verified":"Documentado (fuente aportada)","declared":"Declarado","estimated":"Estimación","hypothetical":"Hipótesis","missing":"Pendiente"})[s]||"Pendiente";
const draftBar=()=>{const rows=M.evidence(),count=rows.filter(x=>x.has&&x.status!=="missing").length;return '<div class="m1-draft-status">Borrador local · '+count+'/'+rows.length+' campos · Analista OpenAI sin conectar</div>';};
function moduleApply(){
 const s=M.snapshot(),rows=M.evidence(),active=M.GROUPS.find(g=>g.id===s.group)||M.GROUPS[0];
 let out='<div class="eyebrow violet">APLICAR · DIAGNÓSTICO REAL DEL NEGOCIO</div><h2 class="sec-title">Recupera la realidad de tu negocio</h2><p class="sec-sub">Completa el diagnóstico por áreas. No inventes información: los vacíos también son hallazgos.</p>'+draftBar()+'<div class="callout">El formulario guarda un borrador en este navegador, no en una cuenta privada. No introduzcas datos confidenciales. El analista profesional todavía no está conectado.</div>';
 out+='<div class="m1-project-grid"><label class="data-label">Nombre de tu negocio<input class="field" id="m1-project" value="'+escapeHTML(s.projectName)+'" placeholder="Nombre del proyecto"></label><label class="data-label">Tipo de negocio<select class="field" id="m1-track">'+M.TRACKS.map(x=>'<option value="'+x[0]+'" '+(s.track===x[0]?'selected':'')+'>'+escapeHTML(x[1])+'</option>').join('')+'</select></label></div>';
 out+='<div class="m1-area-nav">'+M.GROUPS.map(g=>'<button type="button" class="m1-area-tab '+(g.id===active.id?'active':'')+'" data-m1-group="'+g.id+'"><span>'+g.icon+'</span><strong>'+escapeHTML(g.title)+'</strong></button>').join('')+'</div>';
 out+='<div class="m1-area-body"><div class="eyebrow violet">'+escapeHTML(active.title)+'</div><p class="sec-sub">'+escapeHTML(active.desc)+'</p>';
 for(const f of M.FIELDS.filter(x=>x.group===active.id)){
   const e=rows.find(x=>x.id===f.id);
   out+='<section class="m1-field-card"><div class="m1-field-heading"><b>'+escapeHTML(f.title)+'</b><span class="status-chip">'+evidenceStatus(e.status)+'</span></div><p class="m1-help">'+escapeHTML(f.hint)+'</p><textarea class="field m1-entry" data-m1-id="'+f.id+'" data-m1-property="value">'+escapeHTML(e.value)+'</textarea>'+((global.INITIUM_ATTACH&&global.INITIUM_ATTACH.uploader(f.id))||'')+'<details class="m1-evidence-details"><summary>Clasificar dato y añadir fuente <span aria-hidden="true">⌄</span></summary><div class="m1-field-controls"><label>Calidad del dato<select class="field" data-m1-id="'+f.id+'" data-m1-property="status">'+M.STATUSES.map(([v,label])=>'<option value="'+v+'" '+(e.status===v?'selected':'')+'>'+escapeHTML(label)+'</option>').join('')+'</select></label><label>Fuente o referencia<input class="field" data-m1-id="'+f.id+'" data-m1-property="source" value="'+escapeHTML(e.source)+'" placeholder="Ej. reporte de ventas, mes, responsable"></label></div></details></section>';
 }
 out+='</div><div class="stage-foot"><small>Guardado en el dispositivo. Sin sincronización ni verificación documental.</small><button class="btn btn-plum" data-m1-action="results">Ver mis tres resultados →</button></div>';
 return out;
}
function moduleResults(){
 const r=M.analyze(),s=M.snapshot(),filled=r.verified+r.unverified,files=r.attachments||[];
 let out='<div class="eyebrow violet">MÓDULO 1 · TRES RESULTADOS</div><h2 class="sec-title">Tu diagnóstico inicial</h2><p class="sec-sub">Aprendizaje, lectura preliminar de los datos y ficha exportable. No es un diagnóstico generado por IA.</p>'+draftBar();
 out+='<div class="m1-three-results"><article><small>01 · APRENDIZAJE</small><h3>'+ (s.quiz.passed?'Evaluación aprobada':'Evaluación pendiente')+'</h3><p>'+r.learning.sixLessonsCompleted+' de 6 microlecciones practicadas y evaluación de cierre validada.</p><b>'+(s.quiz.passed?'5 / 5 puntos':'0 / 5 puntos')+'</b></article>';
 out+='<article><small>02 · RESULTADO DEL NEGOCIO</small><h3>'+filled+' de '+r.total+' campos registrados</h3><p>'+r.verified+' documentados con referencia aportada · '+r.unverified+' sin verificar · '+r.missing+' pendientes.</p><b>Sin causas confirmadas · '+files.length+' adjunto(s) locales sin analizar</b></article>';
 out+='<article><small>03 · ENTREGABLE</small><h3>Ficha de Diagnóstico Inicial</h3><p>Información completa y sin recortar; observaciones preliminares, fuentes y acciones de validación.</p><b>Archivo HTML local</b></article></div>';
 out+='<div class="m1-results-heading"><h3>Qué encontramos en tu captura</h3><span class="status-chip">Información insuficiente para determinar causas</span></div>';
 out+='<div class="m1-findings">'+r.findings.map((f,i)=>'<article><span class="m1-finding-number">'+String(i+1).padStart(2,"0")+'</span><div><h4>'+escapeHTML(f.statement)+'</h4><p><b>Fundamento:</b> '+escapeHTML(f.basis)+'</p><p><b>Acción inicial:</b> '+escapeHTML(f.action)+'</p><small>'+escapeHTML(f.confidence)+'</small></div></article>').join('')+'</div>';
 out+='<section class="m1-evaluation"><div class="eyebrow violet">EVALUACIÓN ORIGINAL · 5 PUNTOS</div><h3>'+escapeHTML(M.QUIZ.question)+'</h3><div class="m1-quiz-options">'+M.QUIZ.options.map((option,i)=>'<button class="m1-quiz-option" data-m1-answer="'+i+'" '+(s.quiz.passed?'disabled':'')+'><b>'+String.fromCharCode(65+i)+'.</b> '+escapeHTML(option)+'</button>').join('')+'</div>'+(s.quiz.answer!==null?'<div class="feedback">'+(s.quiz.passed?'✓ Aprobada. ':'Vuelve a intentarlo. ')+escapeHTML(M.QUIZ.explanation)+'</div>':'')+'</section>';
 out+='<section class="m1-transfer"><h3>Qué se lleva al siguiente módulo</h3><p>Objetivos y plan existente, información declarada, datos faltantes y problemas observados. La transferencia automática a otros módulos requiere el expediente privado que aún no está desplegado.</p></section>';
 out+='<div class="stage-foot"><button class="btn btn-line" data-m1-action="apply">← Revisar respuestas</button><div class="internal-tools"><button class="btn btn-line" data-m1-action="json">Exportar datos JSON</button><button class="btn btn-gold" data-m1-action="export">Exportar ficha inicial ↗</button></div></div><p class="m1-disclosure">Ficha preliminar local, no análisis estratégico definitivo. No acredita certificación del programa.</p>';
 return out;
}
async function handleAttachmentChange(e,notify){
 const input=e.target;
 if(!input?.dataset?.m1File)return false;
 const library=global.INITIUM_ATTACH;
 if(!library){notify("Los adjuntos no están disponibles en este navegador.");return true;}
 try{
  const result=await library.add(input.files,input.dataset.m1File,input.dataset.m1Module||"1");
  library.refresh();
  notify(result.rejected.length?result.rejected.slice(0,2).join(" · "):result.added+" archivo(s) guardado(s) en el navegador.");
 }catch(err){notify("Error al guardar: "+String(err?.message||err));}
 input.value="";return true;
}
async function handleAttachmentClick(e,notify){
 const button=e.target.closest("[data-m1-file-delete],[data-m1-file-download]");
 if(!button)return false;
 try{
  const library=global.INITIUM_ATTACH;
  if(button.dataset.m1FileDelete){await library.remove(button.dataset.m1FileDelete);library.refresh();notify("Adjunto eliminado.");}
  else await library.download(button.dataset.m1FileDownload);
 }catch(err){notify("No fue posible completar la operación: "+String(err?.message||err));}
 return true;
}
function handleFileDrop(e,notify){
 const target=e.target.closest("[data-m1-drop]");
 if(!target)return false;
 e.preventDefault();
 if(e.type==="dragover"){target.classList.add("dragging");return true;}
 if(e.type==="dragleave"){target.classList.remove("dragging");return true;}
 if(e.type==="drop"){
  target.classList.remove("dragging");
  const library=global.INITIUM_ATTACH;
  if(library)library.add(e.dataTransfer.files,target.dataset.m1Drop,target.dataset.m1Module||"1").then(r=>{library.refresh();notify(r.rejected.length?r.rejected.join(" · "):r.added+" archivo(s) guardado(s) localmente.");}).catch(err=>notify("Error al guardar: "+String(err?.message||err)));
  return true;
 }
 return false;
}
function downloadJSON(){
 const text=JSON.stringify({type:"initium-m1-preliminary",module:1,snapshot:M.snapshot(),preliminary:M.analyze()},null,2);
 const blob=new Blob([text],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download="INITIUM_M1_Expediente_Preliminar.json";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
}
function click(e,stageTo,toast){
 if(e.target.closest("[data-m1-file-delete],[data-m1-file-download]")){void handleAttachmentClick(e,toast);return true;}
 const el=e.target.closest("[data-m1-group],[data-m1-action],[data-m1-answer]");if(!el)return false;
 if(el.dataset.m1Group){M.setGroup(el.dataset.m1Group);stageTo("apply");return true;}
 if(el.dataset.m1Answer!==undefined){const res=M.takeQuiz(el.dataset.m1Answer);toast(res.correct?"Evaluación de cierre aprobada: 5/5.":"Revisa la explicación y vuelve a intentar.");stageTo("results");return true;}
 if(el.dataset.m1Action==="results"){stageTo("results");return true;}
 if(el.dataset.m1Action==="apply"){stageTo("apply");return true;}
 if(el.dataset.m1Action==="export"){M.exportHTML();toast("Ficha preliminar descargada.");return true;}
 if(el.dataset.m1Action==="json"){downloadJSON();toast("Copia JSON descargada. No sustituye una cuenta privada.");return true;}
 return false;
}
function input(e){
 const x=e.target;if(x.id==="m1-project"){M.updateMeta("projectName",x.value);return true;}
 if(x.dataset.m1Id&&x.dataset.m1Property){M.updateField(x.dataset.m1Id,x.dataset.m1Property,x.value);return true;}
 return false;
}
function change(e){
 const x=e.target;if(x.id==="m1-track"){M.updateMeta("track",x.value);return true;}
 if(x.dataset.m1Id&&x.dataset.m1Property){M.updateField(x.dataset.m1Id,x.dataset.m1Property,x.value);return true;}
 return false;
}
global.INITIUM_M1_UI=Object.freeze({moduleApply,moduleResults,click,input,change,handleAttachmentChange,handleFileDrop});
})(window);