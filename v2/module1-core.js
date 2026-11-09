/* INITIUM ONE LAB — Módulo 1: expediente preliminar de aprendizaje.
   Capa funcional sin API. NO equivale a diagnóstico del Analista OpenAI.
   Guarda temporalmente en el navegador y permite exportación local HTML.
*/
(function(global){
"use strict";
const KEY="initium-v2-module1-draft-v1";
const FIELDS=[
{id:"plan",title:"Plan estratégico actual",hint:"¿Existe un plan documentado? Copia sus objetivos, prioridades y responsables o escribe «no existe».",group:"direction",label:"Dirección"},
{id:"objectives",title:"Objetivos actuales",hint:"Escribe los objetivos, metas y acciones que hoy guían el negocio.",group:"direction",label:"Dirección"},
{id:"offer",title:"Qué vende el negocio",hint:"Describe productos o servicios, beneficios y principales líneas de ingresos.",group:"business",label:"Negocio"},
{id:"lines",title:"Líneas de producto o servicio",hint:"Lista las líneas y qué diferencia a cada una.",group:"business",label:"Negocio"},
{id:"customer",title:"Clientes actuales",hint:"¿Quién compra, por qué y cómo lo sabes?",group:"business",label:"Negocio"},
{id:"market",title:"Mercado y competencia",hint:"Datos o referencias que conoces sobre alternativas y demanda.",group:"business",label:"Negocio"},
{id:"channels",title:"Canales actuales",hint:"Dónde te encuentran, consultan y compran; separa canales de venta y comunicación.",group:"marketing",label:"Marketing"},
{id:"communication",title:"Comunicación y contenido",hint:"Qué comunicas, a quién y con qué objetivo.",group:"marketing",label:"Marketing"},
{id:"salesProcess",title:"Proceso de venta",hint:"Cómo se recibe, atiende, cotiza, da seguimiento y cierra cada oportunidad.",group:"commercial",label:"Ventas"},
{id:"experience",title:"Experiencia del cliente",hint:"Atención, entrega, devoluciones, seguimiento y retención.",group:"commercial",label:"Ventas"},
{id:"sales",title:"Ventas mensuales aproximadas",hint:"Importe, moneda, periodo y si se trata de ventas brutas o netas.",group:"commercial",label:"Ventas"},
{id:"ticket",title:"Ticket promedio",hint:"Importe, moneda, periodo y cómo se calculó.",group:"commercial",label:"Ventas"},
{id:"margins",title:"Márgenes y costos",hint:"Costos, comisiones, descuentos, devoluciones, envíos y margen si lo conoces.",group:"commercial",label:"Ventas"},
{id:"providers",title:"Proveedores, agencias y campañas",hint:"Qué se ha ejecutado, con qué inversión, responsables y resultados medidos.",group:"marketing",label:"Marketing"},
{id:"metrics",title:"Métricas y reportes",hint:"Qué indicadores se registran y con qué fuentes.",group:"marketing",label:"Marketing"},
{id:"problem",title:"Problema principal percibido",hint:"Describe el problema como lo vives, sin asumir todavía cuál es la causa.",group:"direction",label:"Dirección"}
];
const GROUPS=[
{id:"direction",title:"01 · Dirección y plan actual",desc:"Primero recupera la estrategia que existe, incluso si hoy está dispersa.",icon:"◎"},
{id:"business",title:"02 · Modelo, oferta y clientes",desc:"Qué vendes, a quién y en qué contexto.",icon:"◈"},
{id:"commercial",title:"03 · Ventas, experiencia y rentabilidad",desc:"Recorrido comercial, importes y estructura de margen.",icon:"▥"},
{id:"marketing",title:"04 · Marketing, canales y medición",desc:"Acciones actuales, comunicación, agencias y resultados.",icon:"◉"}
];
const QUIZ=Object.freeze({
question:"Un negocio recibe visitas, likes y ventas por marketplace, pero el dueño 'no ve la caja'. ¿Qué revisarías primero?",
options:[
"Aumentar las ventas para que el volumen compense los costos",
"Hacer más descuentos para mover el inventario más rápido",
"Calcular ventas netas reales: descontar comisiones de marketplace, devoluciones, envíos y descuentos dados",
"Cambiar a otro marketplace con menos competencia"
],
correct:2,points:5,
explanation:"Las ventas brutas en marketplace no son lo mismo que las ventas netas. Hay que descontar comisiones (16-20% típicamente), devoluciones, envíos y descuentos. Muchos negocios descubren que su margen real es mínimo o negativo después de este cálculo."
});
const TRACKS=[["marcha","Negocio en marcha"],["lanzamiento","Producto o servicio en lanzamiento"],["cero","Idea de negocio desde cero"]];
const STATUSES=[["verified","Documentado y verificable"],["declared","Declarado (sin comprobante)"],["estimated","Estimación"],["hypothetical","Hipótesis"],["missing","No disponible"]];
function initial(){return {schema:1,track:"marcha",projectName:"",entries:{},group:"direction",quiz:{answer:null,attempts:0,passed:false},updatedAt:null};}
let state=initial();
function cleanText(v,max=null){const text=String(v??"");return max===null?text:text.slice(0,max);}
function safeEntry(o){const status=STATUSES.some(x=>x[0]===o?.status)?o.status:"missing";return {value:cleanText(o?.value),status,source:cleanText(o?.source,800)};}
function load(){try{const raw=localStorage.getItem(KEY);if(!raw)return;const v=JSON.parse(raw);if(!v||v.schema!==1||typeof v.entries!=="object")return;const p=initial();p.projectName=cleanText(v.projectName,180);p.track=TRACKS.some(x=>x[0]===v.track)?v.track:"marcha";p.entries={};for(const f of FIELDS){p.entries[f.id]=safeEntry(v.entries[f.id]||{})}p.group=GROUPS.some(g=>g.id===v.group)?v.group:"direction";p.quiz={answer:Number.isInteger(v.quiz?.answer)&&v.quiz.answer>=0&&v.quiz.answer<4?v.quiz.answer:null,attempts:Math.max(0,Number(v.quiz?.attempts)||0),passed:Boolean(v.quiz?.passed)};p.updatedAt=v.updatedAt||null;state=p;}catch{}}
function save(){state.updatedAt=new Date().toISOString();try{localStorage.setItem(KEY,JSON.stringify(state));return true}catch{return false}}
function snapshot(){return JSON.parse(JSON.stringify(state));}
function updateMeta(name,value){if(name==="projectName")state.projectName=cleanText(value,180);if(name==="track"&&TRACKS.some(x=>x[0]===value))state.track=value;save();}
function setGroup(g){if(GROUPS.some(x=>x.id===g)){state.group=g;save();}}
function updateField(id,property,value){const f=FIELDS.find(x=>x.id===id);if(!f||!["value","status","source"].includes(property))return;const current=safeEntry(state.entries[id]||{});current[property]=property==="status"?(STATUSES.some(x=>x[0]===value)?value:"missing"):cleanText(value,property==="source"?800:null);if(property==="value"&&current.status==="missing"&&current.value.trim())current.status="declared";state.entries[id]=current;save();}
function takeQuiz(answer){const a=Number(answer);if(!Number.isInteger(a)||a<0||a>3)return {ok:false};state.quiz.answer=a;state.quiz.attempts++;state.quiz.passed=state.quiz.passed||a===QUIZ.correct;save();return {ok:true,correct:a===QUIZ.correct,passed:state.quiz.passed,points:state.quiz.passed?QUIZ.points:0};}
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function evidence(){return FIELDS.map(f=>{const v=safeEntry(state.entries[f.id]||{});const has=v.value.trim().length>0;const status=has?v.status:"missing";const needsProof=status==="verified"&&!v.source.trim();return {...f,...v,status:needsProof?"declared":status,has,needsProof,usable:has&&status!=="missing"};});}
function analyze(){
 const entries=evidence();
 const missing=entries.filter(x=>x.status==="missing");
 const unverified=entries.filter(x=>x.usable&&x.status!=="verified");
 const verified=entries.filter(x=>x.usable&&x.status==="verified"&&!x.needsProof);
 const plan=entries.find(x=>x.id==="plan");
 const findings=[];
 if(plan.status==="missing")findings.push({type:"gap",statement:"No hay información suficiente sobre el plan estratégico actual.",basis:"No se registró el plan en el formulario.",action:"Recupera el plan que exista o declara expresamente que no existe, identificando objetivos, responsables y acciones.",confidence:"brecha de información"});
 else if(/no (existe|tengo|hay)|sin plan|no contamos/i.test(plan.value))findings.push({type:"declared",statement:"Se declara la ausencia de un plan estratégico actual.",basis:"Declaración del alumno; no equivale a auditoría documental.",action:"Documenta objetivos existentes y valida con la dirección qué decisiones están vigentes.",confidence:"declaración por contrastar"});
 if(missing.length)findings.push({type:"gap",statement:"Existen "+missing.length+" campos de diagnóstico sin información suficiente.",basis:missing.slice(0,6).map(x=>x.title).join("; ")+(missing.length>6?" y otros.":""),action:"Recupera primero los datos que afectan ventas, márgenes, objetivos y seguimiento.",confidence:"vacío de información observado"});
 if(unverified.length)findings.push({type:"uncertainty",statement:unverified.length+" campos contienen información declarada, estimada o hipotética.",basis:"Clasificación proporcionada en la captura; se requiere contrastar fuentes.",action:"Prioriza la verificación de los datos utilizados para decisiones de inversión.",confidence:"evidencia no confirmada"});
 if(!findings.length)findings.push({type:"observation",statement:"Se registró información en las áreas solicitadas.",basis:"Contenido capturado en el borrador; el sistema no verificó su veracidad.",action:"Ejecutar el análisis profesional del Método INITIUM para contrastar relaciones, causas y prioridades.",confidence:"revisión profesional pendiente"});
 return {
  version:1,projectName:state.projectName||"Proyecto sin nombre",track:state.track,createdAt:new Date().toISOString(),
  verified:verified.length,unverified:unverified.length,missing:missing.length,total:entries.length,
  findings,entries,
  handoff:{fromModule:"1",toModule:"1.5",projectName:state.projectName||"Proyecto sin nombre",track:state.track,findings:findings.map(x=>({statement:x.statement,action:x.action,confidence:x.confidence})),information:entries.map(x=>({field:x.id,value:x.value,status:x.status,source:x.source}))},
  learning:{sixLessons:null,finalQuizPassed:state.quiz.passed,finalQuizScore:state.quiz.passed?5:0,finalQuizMax:5,quizAttempts:state.quiz.attempts},
  severity:"insufficient",severityLabel:"Sin evaluación profesional suficiente",
  limitations:["Resultado preliminar automatizado a partir de lo escrito por el alumno; no existe análisis de IA activo.","No se ha confirmado ninguna causa raíz ni la veracidad de los registros.","Este borrador está en el navegador; todavía no está almacenado en una cuenta privada."]
 };
}
function documentHTML(result){
 const rows=result.entries.map(x=>'<tr><th>'+esc(x.title)+'</th><td>'+esc(x.value||"No disponible").replace(/\n/g,"<br>")+'</td><td>'+esc(STATUSES.find(z=>z[0]===x.status)?.[1]||x.status)+'</td><td>'+esc(x.source||"Sin referencia")+'</td></tr>').join("");
 const find=result.findings.map((f,i)=>'<article><h3>'+esc((i+1)+". "+f.statement)+'</h3><p><b>Fundamento:</b> '+esc(f.basis)+'</p><p><b>Próxima acción:</b> '+esc(f.action)+'</p><small>'+esc(f.confidence)+'</small></article>').join("");
 return '<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Ficha de diagnóstico inicial · INITIUM ONE LAB</title><style>@page{size:A4;margin:18mm}*{box-sizing:border-box}body{font:12px/1.6 Arial,Helvetica,sans-serif;color:#211724;margin:40px auto;max-width:880px;padding:25px}header{background:#2e1b35;color:#d3bc8d;padding:38px}header h1{color:white;font-size:28px;margin:12px 0 0}h2{border-bottom:2px solid #d3bc8d;padding-bottom:8px;margin-top:34px}h3{font-size:15px}table{border-collapse:collapse;width:100%;table-layout:fixed}td,th{border:1px solid #e9dce7;padding:8px;vertical-align:top;overflow-wrap:anywhere}th{background:#efe4f2;text-align:left;width:23%}td{width:25%}article{background:#faf6fb;padding:12px 15px;margin:10px 0;border-left:3px solid #774c8a}footer{margin-top:36px;color:#796b7a;font-size:10px}@media print{body{margin:0;padding:0;max-width:none}header{-webkit-print-color-adjust:exact;print-color-adjust:exact}article,table tr{break-inside:avoid}}</style></head><body>'
 +'<header><b>NAT MORENO & CO. · INITIUM ACADEMY</b><h1>Ficha de Diagnóstico Inicial</h1><p>Módulo 1 · INITIUM ONE LAB</p></header>'
 +'<p><b>Negocio:</b> '+esc(result.projectName)+' &nbsp; <b>Ruta:</b> '+esc(TRACKS.find(x=>x[0]===result.track)?.[1])+'</p><p><b>Fecha de exportación:</b> '+esc(result.createdAt)+'</p>'
 +'<h2>01 · Resultado del aprendizaje</h2><p>Evaluación de cierre: '+(result.learning.finalQuizPassed?"Aprobada, 5/5 puntos":"Pendiente o no aprobada")+'. Microlecciones: progreso de demostración, no acreditación certificada.</p>'
 +'<h2>02 · Lectura preliminar de información</h2><p>'+result.verified+' campos documentados con referencia, '+result.unverified+' datos por validar, '+result.missing+' vacíos. <b>'+esc(result.severityLabel)+'.</b></p>'+find
 +'<h2>03 · Información utilizada</h2><table><thead><tr><th>Área</th><th>Respuesta</th><th>Estado</th><th>Fuente</th></tr></thead><tbody>'+rows+'</tbody></table>'
 +'<h2>04 · Qué llevar al siguiente módulo</h2><p>Trasladar la realidad del negocio, el plan existente, los datos declarados, las hipótesis y las áreas por verificar. No presentar las hipótesis como causas confirmadas.</p>'
 +'<h2>05 · Límites del resultado</h2><ul>'+result.limitations.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul><footer>Ficha preliminar · No sustituye al diagnóstico profesional del Analista INITIUM. Documento generado localmente por el alumno.</footer></body></html>';
}
function exportHTML(){const r=analyze(),html=documentHTML(r);const blob=new Blob([html],{type:"text/html;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="INITIUM_Modulo_1_Ficha_Diagnostico_Inicial.html";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);return r;}
load();
global.INITIUM_M1=Object.freeze({FIELDS,GROUPS,QUIZ,TRACKS,STATUSES,snapshot,updateMeta,setGroup,updateField,takeQuiz,evidence,analyze,documentHTML,exportHTML});
})(window);