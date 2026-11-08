/* INITIUM ONE LAB V2 — visual interactive prototype, intentionally standalone.
 * No access to paid APIs, no private student accounts, no claims of real diagnosis.
 * Production methods and validated prompts live untouched on main until deliberate migration. */
"use strict";
const MODULES=[
["0","Bienvenida y uso de IA"],["1","Diagnóstico real del negocio"],["1.5","Hallazgos iniciales: problema / solución"],
["2","Mercado, competencia y consumidor"],["3","Esencia de marca y posicionamiento"],["4","Oferta y líneas de negocio"],
["4.5","Portafolio y Matriz BCG INITIUM"],["5","Cliente, intención y canales"],["6","Auditoría de redes sociales"],
["7","Métricas que sí importan"],["8","Ecosistema conectado"],["9","Ventas, seguimiento y experiencia"],
["9.5","ROAS, ROI y madurez de datos"],["10","Inversión y rentabilidad real"],["10.5","Objetivos reales sugeridos"],
["10.8","Tu Diagnóstico INITIUM"],["10.9","Consolidación de hallazgos, causa raíz y solución"],
["11","Plan de Marketing a 1 año"],["11.5","Plan de Ejecución a 6 meses"],["11.6","Estrategia creativa y comunicación"],
["11.7","Canales derivados de la estrategia"],["11.8","Parrilla estratégica multicanal"],["12","Cierre e implementación"]
];
const LESSONS=[
{title:"Antes de invertir, aprende a diagnosticar",detail:"Cuando las ventas bajan, no sabemos automáticamente si la causa está en la publicidad, la oferta o el proceso comercial. Un diagnóstico estudia el sistema completo para evitar decisiones precipitadas.",facts:[["Diagnóstico real","Observa la situación del negocio sin inventar datos."],["Síntoma y causa","El resultado observado no demuestra por sí solo su origen."],["Decisión estratégica","Primero identifica qué medir, validar y corregir."]],case:"Una empresa recibe muchas consultas, pero convierte pocas en ventas. No hay registros del seguimiento. ¿Cuál es la primera decisión adecuada?",answers:["Duplicar la pauta para obtener más consultas.","Revisar calidad de consultas, tiempos de respuesta y seguimiento antes de invertir.","Cambiar de agencia y rediseñar las redes sociales."],correct:1,feedback:"El volumen de consultas es un dato; la causa de la baja conversión todavía es una hipótesis. Recuperar evidencia permite decidir con más fundamento."},
{title:"Reconoce el plan que realmente existe",detail:"Para conocer cómo se dirige un negocio, reúne los objetivos, clientes, oferta, presupuesto, responsables, canales, ventas y resultados que ya utiliza. Si no existe un plan, regístralo como hallazgo: no lo inventes.",facts:[["Plan existente","Recupera decisiones actuales, aunque estén dispersas."],["Acción no es estrategia","Un calendario de publicaciones no basta como plan empresarial."],["Vacío de dirección","No tener plan puede ser un hallazgo útil."]],case:"Una empresa publica diariamente, pero no tiene objetivos estratégicos documentados. ¿Qué corresponde hacer?",answers:["Presentar la parrilla como plan estratégico completo.","Registrar el vacío de dirección y recopilar objetivos y decisiones existentes.","Suponer que su estrategia fue aprobada por el consejo."],correct:1,feedback:"La actividad de comunicación no demuestra que exista estrategia. La ausencia es un hallazgo que debe hacerse visible."},
{title:"Distingue síntoma, hipótesis y evidencia",detail:"Un síntoma describe algo observable; una hipótesis propone una explicación posible; una causa confirmada requiere registros que permitan contrastar explicaciones.",facts:[["Síntoma","Observación verificable."],["Hipótesis","Explicación que aún debe comprobarse."],["Causa confirmada","Conclusión sustentada por evidencia relevante."]],case:"Hay muchas consultas y pocos cierres, pero no se registran motivos de pérdida. ¿Qué podemos afirmar?",answers:["Que el equipo de ventas es incompetente.","Que el canal publicitario es el responsable.","Que existe una brecha de conversión cuya causa debe investigarse."],correct:2,feedback:"Los datos permiten describir el resultado, pero todavía no permiten atribuir su origen."},
{title:"Identifica datos reales y lo que falta saber",detail:"Separa cifras verificadas, declaraciones, estimaciones, hipótesis y datos que todavía no existen. Una simulación didáctica jamás debe aparecer como resultado real de una empresa.",facts:[["Hechos","Documentos y registros verificables."],["Supuestos","Declaraciones o estimaciones identificadas."],["Pendientes","Datos a recopilar antes de decidir."]],case:"Una empresa desconoce el margen de cada línea de producto. ¿Cuál es una respuesta responsable?",answers:["Asignar el margen promedio de empresas similares como cifra real.","Registrarlo como dato faltante y definir cómo calcularlo.","Concluir que el producto más vendido es el más rentable."],correct:1,feedback:"Sin costos y precios consistentes no se puede confirmar el margen."},
{title:"Convierte hallazgos en acciones",detail:"Un hallazgo puede ser una fortaleza, contradicción, riesgo o vacío de medición. Debe incorporar evidencia, relevancia y una solución preliminar, priorizada de acuerdo con su impacto.",facts:[["Hallazgo","Qué observaste y con qué evidencia."],["Prioridad","Qué exige atención antes de invertir."],["Solución","Qué corregir, medir o validar primero."]],case:"No sabes qué canal aporta ventas. ¿Qué solución es defendible?",answers:["Inventar porcentajes de atribución.","Registrar origen, seguimiento y cierre de cada oportunidad.","Eliminar todas las redes."],correct:1,feedback:"La solución recupera trazabilidad sin afirmar que un canal funciona o fracasa sin evidencia."},
{title:"Prepara tu diagnóstico profesional",detail:"El semáforo orienta decisiones, pero requiere evidencia. Verde exige datos favorables; amarillo señala riesgos o información insuficiente; rojo indica intervención prioritaria sustentada. Reúne plan, ventas, costos, oferta, canales y preguntas pendientes.",facts:[["Verde","Señales favorables sustentadas."],["Amarillo","Riesgos o información insuficiente."],["Rojo","Problema prioritario con evidencia."]],case:"No hay datos para saber si la publicidad es rentable. ¿Cómo debes clasificar el problema?",answers:["Verde, porque no se probaron pérdidas.","Como información insuficiente y prioridad de validación.","Rojo automáticamente, porque toda pauta es negativa."],correct:1,feedback:"Falta evidencia para asegurar ganancias o pérdidas: la prioridad es recuperar información."}
];
// Solo los avances de las microlecciones de DEMOSTRACIÓN se recuerdan en este navegador.
// No usar este almacenamiento para expedientes ni información confidencial de alumnos.
const DEMO_LESSONS=(()=>{try{const v=JSON.parse(localStorage.getItem("initium-v2-lessons-demo")||"[]");return Array.isArray(v)?v.filter(x=>Number.isInteger(x)&&x>=0&&x<6):[];}catch{return [];}})();
const INITIAL_LESSON=[0,1,2,3,4,5].find(i=>!DEMO_LESSONS.includes(i))??5;
const state={page:"home",module:1,step:"learn",lesson:INITIAL_LESSON,completedLessons:new Set(DEMO_LESSONS),picked:null,feedback:"",tutorOpen:true,tutorMessages:[{who:"tutor",text:"Soy la demostración del Tutor INITIUM. Puedo explicar los conceptos del Módulo 1. La conversación real de IA se conectará más adelante."}],speaking:false,rate:1,trialText:"",dataQuality:"pending"};
const main=document.getElementById("main");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function element(tag,klass,text){const e=document.createElement(tag);if(klass)e.className=klass;if(text!==undefined)e.textContent=text;return e;}
function icon(i){return ["◧","◈","♟","▤"][i]||"◇";}
function badge(x){return '<span class="lesson-pill">'+esc(x)+'</span>';}
function render(){
 document.querySelectorAll("[data-page]").forEach(btn=>btn.classList.toggle("active",btn.dataset.page===state.page));
 const views={home:homeView,route:routeView,module:moduleView,results:resultsView,deliverables:deliverablesView};
 main.innerHTML=(views[state.page]||homeView)()+footer();
 bindEvents();
}
function go(page){if(page!=="module")stopAudio();state.page=page;render();main.focus({preventScroll:true});window.scrollTo({top:0,behavior:"smooth"});}
function header(title,subtitle){return '<div class="page-header"><div><div class="section-tag">INITIUM ONE LAB · PROGRAMA ESTRATÉGICO</div><h1>'+esc(title)+'</h1><p>'+esc(subtitle)+'</p></div></div>';}
function homeView(){
 return '<div class="home-grid"><div class="home-main"><section class="hero"><div class="hero-copy"><span class="kicker">BIENVENIDA A TU CAMPUS</span><h1>INITIUM<br>ONE LAB</h1><p>Aprende a leer tu negocio, tomar mejores decisiones y construir una estrategia que puedas llevar a la práctica.</p><button class="btn-primary" data-action="go-module">▶ &nbsp;Comenzar Módulo 1 &nbsp; →</button></div><div class="hero-scene" aria-hidden="true"><div class="hero-arch"></div><div class="hero-mountains"></div><div class="hero-table"></div><div class="hero-laptop"></div><div class="hero-plant">✧</div></div></section>'
 +'<h2 class="block-title">Tu sistema de aprendizaje INITIUM <span class="gold-line"></span></h2><p class="block-subtitle">Cuatro experiencias conectadas. Cada una tiene una función.</p>'
 +'<div class="four-cards">'
 +'<article class="mode-card"><span class="mode-icon">♬</span><h3>Escuchar o leer</h3><p>Microlecciones claras, a tu ritmo.</p><div class="decor" aria-hidden="true">◉</div><button class="mode-next" data-action="go-learn" aria-label="Ir a lección">→</button></article>'
 +'<article class="mode-card purple"><span class="mode-icon">☏</span><h3>Preguntar al tutor</h3><p>Explicaciones y ejemplos a demanda.</p><div class="decor" aria-hidden="true">◌</div><button class="mode-next" data-action="go-learn" aria-label="Ir al tutor">→</button></article>'
 +'<article class="mode-card"><span class="mode-icon">♧</span><h3>Simular decisiones</h3><p>Casos, alternativas y retroalimentación.</p><div class="decor chess" aria-hidden="true">♛</div><button class="mode-next" data-action="go-sim" aria-label="Ir a simulación">→</button></article>'
 +'<article class="mode-card purple"><span class="mode-icon">▤</span><h3>Aplicar al negocio</h3><p>Diagnóstico, hallazgos y plan real.</p><div class="decor" aria-hidden="true">▥</div><button class="mode-next" data-action="go-apply" aria-label="Ir a aplicación">→</button></article>'
 +'</div><h2 class="block-title">Continúa tu recorrido</h2><div class="surface resume-card"><div class="resume-thumb"></div><div><div class="section-tag">MÓDULO 1 · DIAGNÓSTICO</div><h3>Diagnóstico real del negocio</h3><p>6 microlecciones · 6 casos de decisión · 1 aplicación al negocio</p></div><div class="resume-progress"><strong>'+state.completedLessons.size+' de 6 lecciones</strong><div><span style="--progress:'+(state.completedLessons.size/6*100)+'%"></span></div><button class="btn-dark" data-action="go-module">Continuar →</button></div></div></div>'
 +'<aside class="home-aside"><div class="surface surface-pad"><div class="progress-copy"><h3>Mi progreso general</h3><div class="stat-card" style="padding:0"><div class="donut" style="--percent:0deg"><div class="donut-inner">0%</div></div><ul class="progress-list"><li><b>0 de 23</b> módulos certificados</li><li>'+state.completedLessons.size+' microlecciones ensayadas</li><li>Primera práctica en preparación</li></ul></div></div></div>'
 +'<div class="surface surface-pad"><h3 style="font-family:Georgia,serif;font-size:19px;font-weight:400;margin:0 0 15px">Acciones rápidas</h3><div class="quick-grid"><button class="quick-btn" data-action="go-module"><span class="quick-ico">▷</span> Continuar aula</button><button class="quick-btn" data-action="go-route"><span class="quick-ico">▤</span> Ver mi ruta</button><button class="quick-btn" data-action="go-results"><span class="quick-ico">▥</span> Resultados</button><button class="quick-btn" data-action="go-deliverables"><span class="quick-ico">⇩</span> Entregables</button></div></div>'
 +'<div class="surface tutor-home"><div class="tutor-top"><div><h3>Tutor<br>INITIUM</h3><p>Tu acompañante pedagógica de IA durante el curso.</p></div>'+mentor()+'</div><div class="tutor-bottom"><ul><li>Te ayuda a comprender</li><li>Explica otros ejemplos</li><li>Te orienta durante la práctica</li></ul><button class="btn-dark" data-action="go-learn">Conocer al tutor →</button></div></div></aside></div>';
}
function mentor(){return '<div class="mentor-portrait"><img src="./assets/tutor-nat-reference.svg" alt="Fotografía de Nat Moreno, creadora de la metodología INITIUM" width="120" height="130" loading="lazy"><span class="mentor-photo-label">REFERENCIA REAL</span></div>';}
function moduleView(){
 const l=LESSONS[state.lesson],lessonDone=state.completedLessons.has(state.lesson);
 let h='<div class="page-header"><div><div class="section-tag">PROGRAMA · EL AULA INTELIGENTE INITIUM</div><h1>Módulo 1 · Diagnóstico real del negocio</h1><p>Identifica la situación de tu negocio con una mirada estratégica y basada en evidencia.</p></div><div class="module-progress"><div><strong>Lecciones del módulo</strong><div class="progress-track" style="margin-top:10px"><span class="progress-fill" style="--progress:'+(state.completedLessons.size/6*100)+'%"></span></div><div class="metric">'+state.completedLessons.size+' de 6 lecciones completadas</div></div><b>'+Math.round(state.completedLessons.size/6*100)+'%</b></div></div>'
 +'<div class="module-layout"><div class="workspace"><nav class="stepper" aria-label="Etapas educativas">';
 const steps=[["learn","Aprender","Microlección"],["simulate","Practicar","Caso y decisión"],["apply","Aplicar","Tu empresa"],["results","Resultados","Hallazgos"]];
 steps.forEach((x,i)=>{h+='<button class="step '+(state.step===x[0]?'active ':'')+(state.completedLessons.size===6&&i<2?'done':'')+'" data-step="'+x[0]+'" aria-current="'+(state.step===x[0]?'step':'false')+'"><span class="step-n">0'+(i+1)+'</span><span><strong>'+x[1]+'</strong><small>'+x[2]+'</small></span></button>';});
 h+='</nav><section class="surface workspace-card" id="workspace" aria-live="polite">';
 if(state.step==="learn")h+=learnView(l,lessonDone);
 if(state.step==="simulate")h+=simulateView(l,lessonDone);
 if(state.step==="apply")h+=applyView();
 if(state.step==="results")h+=resultModuleView();
 h+='</section></div>'+tutorView()+'</div>';return h;
}
function learnView(l,done){
 const bars=[9,15,20,12,24,11,19,10,17,23,12,18,16,9,20,11,17,10,20,15,11,21,13,18,8,16];
 return '<div class="lesson-top"><div><div class="lesson-pills">'+badge('◉ MICROLECCIÓN '+(state.lesson+1)+' DE 6')+badge('AUDIO OPCIONAL')+'</div><h2>'+esc(l.title)+'</h2><p>'+esc(l.detail)+'</p><div class="audio-row"><button class="audio-play" data-action="toggle-audio" aria-label="'+(state.speaking?'Detener audio':'Escuchar lección')+'">'+(state.speaking?'■':'▶')+'</button><div class="audio-bars" aria-hidden="true">'+bars.map(v=>'<b style="--h:'+v+'px"></b>').join('')+'</div><button class="audio-speed" data-action="change-speed" aria-label="Cambiar velocidad de narración">'+state.rate.toFixed(1)+'×</button></div></div><div class="lesson-art"><strong>LEER · ORDENAR · DECIDIR</strong><span class="art-axis" aria-hidden="true"></span></div></div>'
 +'<h3 class="section-tag" style="margin:23px 0 4px">IDEAS CLAVE DE LA LECCIÓN</h3><div class="concept-grid">'+l.facts.map((x,i)=>'<div class="concept"><div class="symbol" aria-hidden="true">'+icon(i)+'</div><h4>'+esc(x[0])+'</h4><p>'+esc(x[1])+'</p></div>').join('')+'</div>'
 +'<div class="panel-footer"><span style="font-size:12px;color:#7c707c">'+(done?'✓ Esta microlección ya fue completada.':'Completa el caso para avanzar a la siguiente lección.')+'</span><button class="btn-primary" data-step="simulate">Siguiente: Practicar →</button></div>';
}
function simulateView(l,done){
 const selected=state.picked;
 let h='<div class="section-tag">LABORATORIO · CASO '+(state.lesson+1)+' DE 6</div><h2 class="block-title" style="margin:12px 0">¿Qué decisión tomarías?</h2>'
 +'<p class="section-copy">Una empresa necesita dirección antes que recetas. Analiza la situación y selecciona la decisión mejor sustentada.</p>'
 +'<div class="case-scene"><div class="case-label">CASO EMPRESARIAL</div><h3>'+esc(l.case)+'</h3></div><div class="choices">';
 l.answers.forEach((a,i)=>{let cls=selected===i?' selected':'';if(selected!==null){if(i===l.correct)cls+=' correct';else if(i===selected)cls+=' incorrect';}h+='<button class="choice'+cls+'" data-choice="'+i+'" '+(selected!==null?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+esc(a)+'</button>';});
 h+='</div>';
 if(state.feedback)h+='<div class="feedback" role="status">'+esc(state.feedback)+'</div>';
 h+='<div class="panel-footer"><button class="btn-outline" data-step="learn">← Volver a la explicación</button>'
 +(selected!==null&&selected!==l.correct?'<button class="btn-primary" data-action="retry-case">Volver a intentar →</button>':'')
 +(selected===l.correct?'<button class="btn-primary" data-action="next-lesson">'+(state.lesson===5?'Continuar: Aplicar →':'Siguiente microlección →')+'</button>':'')
 +'</div>';
 if(done)h+='<div class="notice">Esta lección ya fue completada. Puedes volver a practicar sin perder los demás avances de esta demostración.</div>';
 return h;
}
function applyView(){
 return '<div class="section-tag">LABORATORIO · TU EMPRESA</div><h2 class="block-title" style="margin:12px 0">Ahora observa tu negocio real</h2><p class="section-copy">Aquí irá la aplicación profesional INITIUM con los datos de tu empresa, recuperados de forma segura. En esta V2 mostramos la estructura del formulario; todavía no se conecta con ninguna API ni genera un diagnóstico.</p>'
 +'<div class="notice important"><strong>Regla INITIUM:</strong> puedes escribir “No lo sé” o “No dispongo del dato”. Eso también será un hallazgo. No inventes información para avanzar.</div>'
 +'<div class="data-grid"><div class="data-box"><strong>01. Plan actual</strong><p>Objetivos, estrategia, canales y responsables.</p></div><div class="data-box"><strong>02. Realidad comercial</strong><p>Ventas, clientes, costos y márgenes.</p></div><div class="data-box"><strong>03. Ejecución</strong><p>Acciones actuales, proveedores y resultados.</p></div><div class="data-box"><strong>04. Vacíos</strong><p>Información pendiente y supuestos.</p></div></div>'
 +'<label class="field-label" for="quality">¿Qué tan verificable es la información que vas a anotar?</label><select id="quality" class="field"><option value="pending" '+(state.dataQuality==="pending"?'selected':'')+'>Información pendiente de verificar</option><option value="confirmed" '+(state.dataQuality==="confirmed"?'selected':'')+'>Datos documentados y verificables</option><option value="declared" '+(state.dataQuality==="declared"?'selected':'')+'>Declaraciones sin evidencia adjunta</option><option value="estimate" '+(state.dataQuality==="estimate"?'selected':'')+'>Estimación identificada como tal</option></select>'
 +'<label class="field-label" for="business-text">Tu situación actual</label><textarea id="business-text" class="field text-area" placeholder="Ejemplo: tenemos 2 canales de venta; no medimos margen por producto; nuestro objetivo actual es…">'+esc(state.trialText)+'</textarea><p class="field-help">Demostración local. No introduzcas información confidencial; la autenticación y el servidor seguro siguen pendientes.</p>'
 +'<div class="panel-footer"><button class="btn-outline" data-step="learn">← Volver a aprender</button><button class="btn-dark" data-step="results">Ver cómo se presentarían los resultados →</button></div>';
}
function resultModuleView(){
 const has=state.trialText.trim().length>0;
 return '<div class="section-tag">RESULTADOS · DIAGNÓSTICO ESTRATÉGICO</div><h2 class="block-title" style="margin:12px 0">Tu resultado debe ser claro y profundo</h2><p class="section-copy">En el campus completo, estos espacios se alimentarán del análisis real y del expediente acumulativo. Ninguna tarjeta debe inventar hallazgos ni recortar evidencia.</p>'
 +'<div class="result-grid"><div class="result-item"><small>HALLAZGO PRINCIPAL</small><h3>Por determinar</h3><p>El resultado se completará cuando exista un análisis profesional conectado, con información del alumno.</p></div>'
 +'<div class="result-item"><small>SEMÁFORO Y EVIDENCIA</small><h3>Sin evaluación</h3><p>No es correcto asignar verde, amarillo o rojo sin un análisis que sustente esa clasificación.</p></div>'
 +'<div class="result-item"><small>QUÉ CORREGIR PRIMERO</small><h3>Pendiente del diagnóstico</h3><p>Las acciones se priorizarán por impacto, urgencia y datos comprobados.</p></div>'
 +'<div class="result-item"><small>DATOS POR VALIDAR</small><h3>'+ (has?'Borrador local disponible':'Sin captura todavía')+'</h3><p>'+(has?'El texto capturado se mantiene únicamente durante esta demostración en memoria del navegador.':'El formulario mostrará explícitamente qué información falta antes de tomar decisiones.')+'</p></div>'
 +'<div class="result-item full"><small>ENTREGABLE PROFESIONAL</small><h3>Diagnóstico INITIUM</h3><p>La versión comercial elaborará capítulos verificables, hallazgos íntegros, matriz de soluciones y documento con identidad corporativa. Actualmente no hay diagnóstico ni PDF para descargar.</p></div></div>'
 +'<div class="panel-footer"><button class="btn-outline" data-step="apply">← Revisar mis datos</button><button class="btn-dark" data-page="deliverables">Conocer los entregables →</button></div>';
}
function tutorView(){
 return '<aside class="surface tutor-panel"><div class="tutor-hero"><div><div class="section-tag">✦ ASISTENCIA EDUCATIVA</div><h2>Tutor<br>INITIUM</h2><p>Aprende acompañada, aplica con autonomía.</p></div>'+mentor()+'</div><div class="tutor-details">'
 +'<div class="section-tag" style="margin-bottom:9px">PREGUNTAS RÁPIDAS</div>'
 +'<button class="prompt-chip" data-tutor="¿Cómo distingo síntoma de causa?">¿Cómo distingo síntoma de causa?</button>'
 +'<button class="prompt-chip" data-tutor="¿Qué datos necesito para el diagnóstico?">¿Qué datos necesito para el diagnóstico?</button>'
 +'<button class="prompt-chip" data-tutor="¿Cómo priorizo los hallazgos?">¿Cómo priorizo los hallazgos?</button>'
 +'<div class="section-tag" style="margin:17px 0 10px">TU CONVERSACIÓN</div><div class="chat-log" id="chat-log" role="log" aria-label="Conversación didáctica demostrativa">'+state.tutorMessages.map(x=>'<div class="chat-bubble '+x.who+'"><strong>'+(x.who==="tutor"?"Tutor INITIUM":"Tú")+': </strong>'+esc(x.text)+'</div>').join('')+'</div>'
 +'<form class="chat-compose" id="chat-form"><input id="chat-question" maxlength="300" aria-label="Tu pregunta al tutor" placeholder="Escribe tu pregunta…" required><button type="submit" aria-label="Enviar pregunta">➜</button></form>'
 +'<p class="tutor-disclosure">Vista de prueba con respuestas pedagógicas preparadas, sin OpenAI en vivo. La fotografía de Nat aparece como referencia temporal; su retrato editorial definitivo todavía está en producción.</p></div></aside>';
}
function tutorReply(q){
 const v=q.toLowerCase();
 if(v.includes("causa")||v.includes("síntoma"))return "Un síntoma es lo que observas: pocas ventas. Una hipótesis es lo que podría explicarlo: seguimiento insuficiente. La causa debe confirmarse con registros. ¿Qué información revisarías primero?";
 if(v.includes("datos")||v.includes("diagnóstico"))return "Recupera plan actual, objetivos, productos, ventas, costos, canales, acciones y resultados. Si falta un dato, regístralo como pendiente: el curso no debe inventarlo.";
 if(v.includes("priori")||v.includes("hallazgo"))return "Prioriza lo que afecta la decisión, la rentabilidad o el cliente. Distingue impacto probable, evidencia disponible y corrección necesaria. No confundas urgencia con certeza.";
 if(v.includes("margen")||v.includes("rentab"))return "Para evaluar el margen necesitas comparar ingresos y costos pertinentes. Si aún no están documentados, señala la limitación antes de recomendar inversión.";
 return "Puedo explicarte síntomas, causas, datos de diagnóstico y hallazgos. Esta es una guía pedagógica programada para el prototipo; el Tutor INITIUM conversacional con IA se conectará al servidor seguro después.";
}
function routeView(){
 return header("Tu ruta de aprendizaje","23 módulos conectados para pasar de entender el negocio a construir una estrategia y un plan de ejecución.")
 +'<div class="surface surface-pad"><div class="notice">La estructura académica de 23 módulos está preservada. El contenido interactivo completo y las validaciones se desarrollarán por módulo.</div>'
 +MODULES.map((m,i)=>'<div class="module-card"><span class="module-index">'+esc(m[0])+'</span><div><h3>'+esc(m[1])+'</h3><p>'+(i===1?'Aula V2 en desarrollo · microlecciones y simulación':'Contenido académico preservado · aula por integrar')+'</p></div>'+(i===1?'<button class="btn-outline module-go" data-action="go-module">Abrir aula</button>':'<span style="margin-left:auto;font-size:10px;color:#927e91">Próximamente</span>')+'</div>').join('')+'</div>';
}
function resultsView(){return header("Mis resultados","Todo lo importante debe ser fácil de entender: hallazgo, evidencia, prioridad y siguiente decisión.")
 +'<div class="surface surface-pad"><div class="empty-state"><div style="font-size:43px;color:#7d638c">▥</div><h3>Aún no hay resultados profesionales</h3><p>Los dashboards reales se conectarán al expediente empresarial de cada alumno, con información verificable y sin recortes.</p><button class="btn-dark" data-action="go-module">Ir al Módulo 1 →</button></div></div>';}
function deliverablesView(){
 const docs=[["Diagnóstico INITIUM","Radiografía empresarial, fuentes y hallazgos estructurados."],["Matriz de hallazgos y soluciones","Evidencia, causa probable, prioridad y recomendaciones."],["Plan Estratégico de Marketing · 12 meses","Objetivos, estrategia, prioridades, acciones y medición."],["Plan de Ejecución · 6 meses","Responsables, secuencia, fechas, entregables e indicadores."],["Estrategia Creativa y de Comunicación","Mensajes, canales derivados, piezas y criterios de activación."],["Parrilla estratégica multicanal","Calendario de 30 días sustentado por la estrategia final."]];
 return header("Tus entregables estratégicos","No una colección de respuestas: documentos integrados, con capítulos completos y la identidad visual de Nat Moreno & Co.")
 +'<div class="notice important">La exportación profesional V2 todavía no está conectada. Los botones de descarga se habilitarán únicamente cuando los documentos reales puedan generarse y verificarse.</div><div class="btn-row" style="margin:0 0 22px"><a class="btn-outline" href="./document-preview.html" target="_blank" rel="noopener noreferrer">Ver el formato editorial de los documentos ↗</a></div>'
 +docs.map((d,i)=>'<div class="surface doc-card"><div class="doc-ico">▤</div><div><h3>'+esc(d[0])+'</h3><p>'+esc(d[1])+'</p></div><button class="btn-outline" disabled title="Generación pendiente de implementar">Pendiente</button></div>').join('');}
function footer(){return '<footer class="pilot-footer">INITIUM ONE LAB · Versión visual V2 de desarrollo · Sin pagos, sin datos privados, sin análisis de IA en vivo. © Nat Moreno &amp; Co.</footer>';}
function stopAudio(){if("speechSynthesis" in window)window.speechSynthesis.cancel();state.speaking=false;}
function audioToggle(){
 if(!("speechSynthesis" in window)){alert("Este navegador no admite narración automática.");return;}
 if(state.speaking){stopAudio();render();return;}
 const l=LESSONS[state.lesson],u=new SpeechSynthesisUtterance(l.title+". "+l.detail+". Ideas clave: "+l.facts.map(x=>x.join(". ")).join(". "));
 u.lang="es-MX";u.rate=state.rate;u.onend=()=>{state.speaking=false;render()};u.onerror=()=>{state.speaking=false;render()};
 window.speechSynthesis.cancel();state.speaking=true;window.speechSynthesis.speak(u);render();
}
function bindEvents(){
 main.querySelectorAll("[data-page]").forEach(x=>x.addEventListener("click",()=>go(x.dataset.page)));
 main.querySelectorAll("[data-step]").forEach(x=>x.addEventListener("click",()=>{stopAudio();state.step=x.dataset.step;state.picked=null;state.feedback="";render()}));
 main.querySelectorAll("[data-action]").forEach(x=>x.addEventListener("click",()=>{
  const a=x.dataset.action;
  if(a==="go-module"||a==="go-learn"){state.step="learn";go("module");}
  if(a==="go-sim"){state.step="simulate";go("module");}
  if(a==="go-apply"){state.step="apply";go("module");}
  if(a==="go-route")go("route");if(a==="go-results")go("results");if(a==="go-deliverables")go("deliverables");
  if(a==="toggle-audio")audioToggle();
  if(a==="change-speed"){state.rate=state.rate>=1.5?0.8:Math.round((state.rate+.2)*10)/10;render();}
  if(a==="retry-case"){state.picked=null;state.feedback="";render();}
  if(a==="next-lesson"){
    state.completedLessons.add(state.lesson);
    try{localStorage.setItem("initium-v2-lessons-demo",JSON.stringify([...state.completedLessons]));}catch(e){}
    if(state.lesson<5){state.lesson++;state.step="learn";}else state.step="apply";
    state.picked=null;state.feedback="";stopAudio();render();
  }
 }));
 main.querySelectorAll("[data-choice]").forEach(x=>x.addEventListener("click",()=>{
  const choice=Number(x.dataset.choice),correct=LESSONS[state.lesson].correct;
  state.picked=choice;state.feedback=(choice===correct?"✓ Bien razonado. ":"Revisa la explicación y vuelve a intentarlo. ")+LESSONS[state.lesson].feedback;
  render();
 }));
 main.querySelectorAll("[data-tutor]").forEach(x=>x.addEventListener("click",()=>{const q=x.dataset.tutor;state.tutorMessages.push({who:"user",text:q},{who:"tutor",text:tutorReply(q)});render();const box=document.getElementById("chat-log");if(box)box.scrollTop=box.scrollHeight;}));
 const form=document.getElementById("chat-form");if(form)form.addEventListener("submit",e=>{e.preventDefault();const input=document.getElementById("chat-question");if(!input)return;const q=input.value.trim();if(q.length<3)return;state.tutorMessages.push({who:"user",text:q},{who:"tutor",text:tutorReply(q)});render();const box=document.getElementById("chat-log");if(box)box.scrollTop=box.scrollHeight;});
 const area=document.getElementById("business-text");if(area)area.addEventListener("input",e=>state.trialText=e.target.value);
 const select=document.getElementById("quality");if(select)select.addEventListener("change",e=>state.dataQuality=e.target.value);
}
document.querySelectorAll(".nav-link").forEach(btn=>btn.addEventListener("click",()=>go(btn.dataset.page)));
render();
