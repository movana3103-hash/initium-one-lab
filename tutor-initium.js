/* INITIUM ONE LAB — Tutor pedagógico, componente reutilizable.
   La IA real se habilita solo con un endpoint privado y sesión autenticada.
   Esta capa nunca envía prompts profesionales ni el expediente empresarial. */
"use strict";
const INITIUM_TUTOR_CONFIG=Object.freeze({
  endpoint:"", // Configurar solo después de desplegar el Worker y la autenticación.
  maxQuestionLength:700,
  maxHistoryTurns:4
});
const initiumTutorState={history:[],busy:false,moduleCode:null,lessonIndex:0};
const INITIUM_TUTOR_GUIDE=[
  "Un síntoma no demuestra su causa. Primero recupera evidencia sobre mercado, oferta, cliente, ventas y medición.",
  "Si no existe un plan estratégico formal, se registra su ausencia. No se presenta un calendario de publicaciones como una estrategia empresarial.",
  "Distingue síntoma observado, explicación hipotética y causa que cuenta con evidencia suficiente.",
  "Separa datos comprobados, estimaciones, hipótesis y vacíos; nunca se sustituyen números faltantes por valores inventados.",
  "Cada hallazgo debe asociarse con evidencia, impacto probable y corrección o validación priorizada.",
  "El semáforo requiere justificación; la ausencia de datos nunca justifica automáticamente un resultado verde."
];
function initiumTutorEsc(v){return String(v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function initiumTutorEndpointAvailable(){
  return !!(INITIUM_TUTOR_CONFIG.endpoint&&/^https:\/\//.test(INITIUM_TUTOR_CONFIG.endpoint));
}
function initiumTutorPanel(moduleCode,lessonIndex){
  initiumTutorState.moduleCode=String(moduleCode);
  initiumTutorState.lessonIndex=lessonIndex||0;
  const real=initiumTutorEndpointAvailable();
  return "<section id='initium-tutor' class='initium-tutor' style='background:#FDFAF5;border:1px solid #E8E2D8;border-radius:6px;padding:18px;margin-bottom:16px'>"
  +"<div style='display:flex;align-items:center;justify-content:space-between;gap:10px'>"
  +"<div><div style='font-size:10px;letter-spacing:1px;color:#9B7B40;font-weight:800'>TUTOR INITIUM</div><div style='font-size:15px;font-weight:800;color:#111;margin-top:5px'>¿Hay algo que quieras comprender mejor?</div></div>"
  +"<button type='button' onclick='initiumTutorToggle()' id='initium-tutor-toggle' aria-expanded='false' aria-controls='initium-tutor-body' style='background:#111;color:#D3BC8D;border:0;border-radius:4px;padding:10px 12px;cursor:pointer'>Abrir tutor</button></div>"
  +"<div id='initium-tutor-body' style='display:none;margin-top:14px'>"
  +"<p style='font-size:12px;line-height:1.6;color:#5F5957'>"
  +(real?"Pregúntame por los conceptos de esta lección. No resolveré tus evaluaciones por ti.":"Vista pedagógica de prueba: puedes consultar una explicación preparada de la lección. El chat de IA se activará al conectar el servicio seguro y las cuentas del alumnado.")
  +"</p><div id='initium-tutor-chat' role='log' aria-label='Conversación con el Tutor INITIUM' aria-live='polite' style='background:#fff;border:1px solid #E8E2D8;border-radius:4px;min-height:70px;max-height:230px;overflow-y:auto;padding:12px;margin:10px 0'></div>"
  +(real?"<label for='initium-tutor-question' style='display:block;font-size:11px;font-weight:700;margin:10px 0 5px'>Tu pregunta</label><textarea id='initium-tutor-question' maxlength='700' rows='2' placeholder='Ejemplo: ¿cómo identifico una causa raíz?' style='width:100%;min-height:64px;border:1px solid #DDD5C6;border-radius:4px;padding:10px;font:inherit;font-size:12px'></textarea><button type='button' onclick='initiumTutorAsk()' id='initium-tutor-submit' style='background:#111;color:#D3BC8D;border:0;border-radius:4px;padding:10px 14px;margin-top:8px;cursor:pointer'>Preguntar al tutor</button>"
  :"<button type='button' onclick='initiumTutorExplain()' style='background:#111;color:#D3BC8D;border:0;border-radius:4px;padding:10px 14px;cursor:pointer'>Explicarme esta lección</button>")
  +"<p id='initium-tutor-status' role='status' style='font-size:11px;margin:8px 0 0;color:#5F5957'></p></div></section>";
}
function initiumTutorToggle(){
  const b=document.getElementById("initium-tutor-body"),t=document.getElementById("initium-tutor-toggle");
  if(!b||!t)return;const open=b.style.display==="none";b.style.display=open?"block":"none";t.setAttribute("aria-expanded",String(open));t.textContent=open?"Cerrar tutor":"Abrir tutor";
}
function initiumTutorAppend(who,txt){
  const box=document.getElementById("initium-tutor-chat");if(!box)return;
  const div=document.createElement("div");
  div.style.cssText="font-size:12px;line-height:1.75;padding:9px 10px;margin:5px 0;border-radius:4px;white-space:pre-wrap;overflow-wrap:anywhere;background:"+(who==="alumno"?"#F0EDE6":"#FDFAF5")+";color:#111";
  const tag=document.createElement("strong");tag.textContent=who==="alumno"?"Tú: ":"Tutor INITIUM: ";div.appendChild(tag);
  div.appendChild(document.createTextNode(String(txt)));box.appendChild(div);box.scrollTop=box.scrollHeight;
}
function initiumTutorExplain(){
  const i=Math.min(initiumTutorState.lessonIndex,INITIUM_TUTOR_GUIDE.length-1);
  initiumTutorAppend("tutor",INITIUM_TUTOR_GUIDE[Math.max(0,i)]+"\n\nEn el ejercicio, analiza la evidencia antes de decidir. Esta explicación es contenido pedagógico revisado, no una respuesta de IA en vivo.");
}
async function initiumTutorAsk(){
  if(initiumTutorState.busy)return;
  const field=document.getElementById("initium-tutor-question"),btn=document.getElementById("initium-tutor-submit"),status=document.getElementById("initium-tutor-status");
  if(!field||!btn||!status)return;
  const question=field.value.trim();if(question.length<5||question.length>INITIUM_TUTOR_CONFIG.maxQuestionLength){status.textContent="Escribe una pregunta entre 5 y 700 caracteres.";return;}
  if(!initiumTutorEndpointAvailable()){status.textContent="El tutor con IA aún no está conectado. Usa la explicación guiada.";return;}
  const getToken=window.initiumGetSessionToken;
  const token=typeof getToken==="function"?await getToken():null;
  if(!token){status.textContent="Para usar el tutor de IA necesitas iniciar sesión en el campus con tu cuenta de alumno.";return;}
  initiumTutorState.busy=true;btn.disabled=true;status.textContent="Preparando una explicación…";
  try{
    const payload={moduleCode:initiumTutorState.moduleCode,lessonIndex:initiumTutorState.lessonIndex,question,history:initiumTutorState.history.slice(-INITIUM_TUTOR_CONFIG.maxHistoryTurns)};
    const response=await fetch(INITIUM_TUTOR_CONFIG.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},body:JSON.stringify(payload)});
    const data=await response.json();
    if(!response.ok||typeof data.answer!=="string")throw new Error(data&&data.error?data.error:"El tutor no respondió correctamente.");
    initiumTutorAppend("alumno",question);initiumTutorAppend("tutor",data.answer);
    initiumTutorState.history.push({role:"user",content:question},{role:"assistant",content:data.answer});initiumTutorState.history=initiumTutorState.history.slice(-8);
    field.value="";status.textContent="Explicación recibida.";
  }catch(e){status.textContent="No se pudo consultar el tutor: "+(e&&e.message?e.message:"Error de conexión")+". Intenta nuevamente.";}
  finally{initiumTutorState.busy=false;btn.disabled=false;}
}
