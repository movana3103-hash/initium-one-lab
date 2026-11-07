/* INITIUM ONE LAB UX shell v1.
 * Reorganiza el Módulo 1 en cuatro etapas sin tocar los 23 prompts profesionales.
 * Estado local provisional; pendiente persistencia autenticada multi-dispositivo. */
"use strict";
const INITIUM_UX_STEPS=[
 {id:"learn",label:"Aprender",hint:"Escucha o lee"},
 {id:"simulate",label:"Practicar",hint:"Decide y comprende"},
 {id:"apply",label:"Aplicar",hint:"Tu negocio real"},
 {id:"results",label:"Resultados",hint:"Hallazgos y evaluación"}
];
let initiumUXStep="learn";
function initiumUXNav(label){
 return '<div class="iux-brand-row"><span class="iux-brand-mark" aria-hidden="true"></span><span class="iux-brand-label">INITIUM Academy · Aula inteligente</span></div>'
 +'<div class="iux-brief">Una etapa a la vez. Aprende el concepto, resuelve un caso, aplica el análisis a tu empresa y revisa lo que encontraste.</div>'
 +'<div class="iux-toolbar" role="navigation" aria-label="Etapas del Módulo 1">'
 +INITIUM_UX_STEPS.map(function(x,i){
   return '<button class="iux-tab" type="button" data-iux-step="'+x.id+'" onclick="initiumUXGo(\''+x.id+'\')">'
   +'<span class="iux-num">0'+(i+1)+'</span><span><strong>'+x.label+'</strong><small>'+x.hint+'</small></span></button>';
 }).join("")+'</div>';
}
function initiumUXBuild(){
 const app=document.getElementById("pg-app"),middle=document.getElementById("col-mid"),right=document.getElementById("cr-inner");
 if(!app||!middle||!right)return;
 app.classList.add("iux-mode");
 if(!document.getElementById("iux-toolbar-container")){
   let wrap=document.createElement("div");wrap.id="iux-toolbar-container";wrap.innerHTML=initiumUXNav();
   const subtitle=middle.querySelector(".mbdg");
   if(subtitle)subtitle.insertAdjacentElement("afterend",wrap);
   else middle.prepend(wrap);
 }
 const aula=middle.querySelector(".initium-aula");
 if(aula){
   const caseFeedback=aula.querySelector("#initium-aula-feedback");
   if(caseFeedback){
     const caseParent=caseFeedback.parentElement;
     if(caseParent && caseParent.parentElement===aula)caseParent.id="initium-case-view";
     [...aula.children].forEach(function(e){
       if(e!==caseParent)e.setAttribute("data-iux-learn","true");
     });
   }
 }
 const tutor=middle.querySelector(".initium-tutor");
 if(tutor&&!tutor.querySelector(".iux-tutor-note")){
   const msg=document.createElement("div");msg.className="iux-tutor-note";
   msg.textContent="Tu acompañante pedagógica de IA. La representación editorial de Nat se incorporará con fotografía autorizada. No es atención personal en vivo.";
   tutor.appendChild(msg);
 }
 // El contenido de la práctica existente se conserva en su totalidad, sin cambiar sus IDs ni handlers.
 const children=[...middle.children];
 let applicationStarted=false;
 for(const el of children){
   if(el.id==="iux-toolbar-container"||el.classList.contains("ey")||el.classList.contains("mt")||el.classList.contains("mbdg"))continue;
   if(el.classList.contains("initium-aula")||el.classList.contains("initium-tutor"))continue;
   el.classList.add("iux-application");
   applicationStarted=true;
 }
 const header=document.getElementById("iux-result-header")||document.createElement("div");
 if(!header.id){header.id="iux-result-header";header.className="iux-result-header";header.textContent="Tu diagnóstico · Hallazgos y resultados";right.prepend(header);}
 initiumUXActivate();
}
function initiumUXGo(step){
 if(!INITIUM_UX_STEPS.some(function(s){return s.id===step;}))return;
 if(step==="apply"&&!initiumAulaReady()){
   alert("Primero completa las seis microlecciones y sus casos de decisión.");return;
 }
 initiumUXStep=step;initiumUXActivate();
 const host=document.getElementById("pg-app");
 if(host&&typeof host.scrollIntoView==="function")host.scrollIntoView({behavior:"smooth",block:"start"});
}
function initiumUXActivate(){
 const app=document.getElementById("pg-app"),middle=document.getElementById("col-mid");
 if(!app||!middle||!app.classList.contains("iux-mode"))return;
 INITIUM_UX_STEPS.forEach(function(step){app.classList.toggle("iux-"+step.id,initiumUXStep===step.id);});
 for(const tab of middle.querySelectorAll(".iux-tab")){
   const selected=tab.getAttribute("data-iux-step")===initiumUXStep;
   if(selected)tab.setAttribute("aria-current","step");else tab.removeAttribute("aria-current");
 }
 for(const el of middle.querySelectorAll(".iux-application"))el.style.display=initiumUXStep==="apply"?"":"none";
 for(const el of middle.querySelectorAll("#initium-case-view")){
   el.style.display=initiumUXStep==="simulate"?"":"none";
 }
 const aula=middle.querySelector(".initium-aula"),tutor=middle.querySelector(".initium-tutor");
 if(aula)aula.style.display=(initiumUXStep==="learn"||initiumUXStep==="simulate")?"":"none";
 if(tutor)tutor.style.display=(initiumUXStep==="learn"||initiumUXStep==="simulate")?"":"none";
 if(aula)for(const el of aula.querySelectorAll("[data-iux-learn]")){
   el.style.display=initiumUXStep==="simulate"?"none":"";
 }
 // El tutor se mantiene disponible en Aprender y Practicar y no interrumpe el análisis.
 if(initiumUXStep==="results"){
   const title=document.getElementById("iux-result-header");
   if(title)title.textContent="Tu diagnóstico · Hallazgos y resultados";
 }
}
function initiumUXReset(){const app=document.getElementById("pg-app");if(app)app.classList.remove("iux-mode","iux-learn","iux-simulate","iux-apply","iux-results");}
