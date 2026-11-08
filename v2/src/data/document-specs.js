/* INITIUM ONE LAB V2 — contrato de documentos. No es generación de IA ni exportación. */
export const DOCUMENTS = Object.freeze([
  {
    id:"diagnostico", name:"Diagnóstico INITIUM",
    sections:[
      ["portada","Portada y ficha del negocio"],["resumen","Resumen ejecutivo"],
      ["situacion","Situación actual y plan existente"],["datos","Información confirmada, hipótesis y vacíos"],
      ["hallazgos","Hallazgos empresariales con evidencia"],["cuellos","Cuellos de botella y causas por validar"],
      ["riesgos","Riesgos, fortalezas y oportunidades"],["soluciones","Soluciones y prioridades"],
      ["plan_validacion","Plan de recuperación de datos"],["anexos","Fuentes y anexos"]
    ]
  },
  {
    id:"matriz_hallazgos", name:"Matriz de hallazgos y soluciones",
    sections:[["inventario","Inventario consolidado"],["evidencia","Evidencia y grado de confianza"],["causas","Causas confirmadas e hipótesis"],["prioridades","Orden de atención"],["acciones","Soluciones y acciones de validación"],["seguimiento","Indicadores y responsables"]]
  },
  {
    id:"plan_12m",name:"Plan Estratégico de Marketing a 12 meses",
    sections:[
      ["portada","Portada y control documental"],["resumen","Resumen ejecutivo"],["diagnostico","Síntesis del diagnóstico integrado"],
      ["mercado","Mercado y consumidor"],["competencia","Competidores y posicionamiento"],["modelo","Modelo, oferta y portafolio"],
      ["cliente","Clientes, segmentos y recorrido"],["objetivos","Objetivos sustentados"],["estrategias","Estrategias por objetivo"],
      ["comercial","Arquitectura comercial y ventas"],["experiencia","Experiencia, retención y recompra"],
      ["canales","Rol estratégico de canales"],["inversion","Inversión, riesgos y rentabilidad"],
      ["indicadores","KPIs y sistema de medición"],["prioridades","Hoja de ruta trimestral"],["dependencias","Supuestos y validaciones"],["anexos","Fuentes y anexos"]
    ]
  },
  {
    id:"operativo_6m",name:"Plan Operativo de Ejecución a 6 meses",
    sections:[["alcance","Objetivos y alcance"],["workstreams","Frentes de trabajo"],["actividades","Actividades y entregables"],["responsables","Responsables y coordinación"],["cronograma","Cronograma y dependencias"],["costos","Presupuesto"],["control","Indicadores, riesgos y seguimiento"]]
  },
  {
    id:"creativa",name:"Estrategia Creativa y de Comunicación",
    sections:[["insumos","Conexión con el plan"],["audiencias","Audiencias"],["concepto","Concepto rector y mensaje madre"],["mensajes","Mensajes por línea"],["pruebas","Pruebas, objeciones y argumentos"],["voz","Tono y lenguaje"],["visual","Dirección visual"],["materiales","Materiales de comunicación"],["produccion","Ruta de producción y aprobación"]]
  },
  {
    id:"canales",name:"Mapa de Canales Derivados",
    sections:[["seleccion","Canales por objetivo"],["funcion","Función por etapa del cliente"],["piezas","Piezas, mensajes y conexiones"],["medicion","Indicadores y atribución"],["prioridades","Prioridad de activación"],["no_activar","Canales aún no recomendados y razones"]]
  },
  {
    id:"parrilla_30d",name:"Parrilla Estratégica Multicanal — 30 días",
    sections:[["objetivo","Objetivo y periodo"],["reglas","Pilares, audiencias y mensajes"],["calendario","Calendario de 30 días"],["piezas","Ficha de piezas y responsables"],["produccion","Orden de producción"],["metricas","Métricas y seguimiento"]]
  }
]);
export const DOCUMENT_BY_ID = Object.freeze(Object.fromEntries(DOCUMENTS.map(x=>[x.id,x])));
export function evaluateDocumentSections(docId,sectionRecords){
  const spec=DOCUMENT_BY_ID[docId]; if(!spec)throw new Error("Tipo de documento no reconocido");
  const records=Array.isArray(sectionRecords)?sectionRecords:[];
  const latest=new Map();
  for(const s of records){
    if(!s||typeof s.section_code!=="string")continue;
    const prev=latest.get(s.section_code);
    if(!prev||(Number(s.version)||0)>(Number(prev.version)||0))latest.set(s.section_code,s);
  }
  const sections=spec.sections.map(([code,title])=>{
    const r=latest.get(code);
    const text=typeof r?.body_text==="string"?r.body_text.trim():"";
    const complete=!!(r&&r.status==="verified"&&text.length>0);
    return {code,title,status:r?.status||"pending",complete,characters:text.length};
  });
  return {docId,expected:sections.length,complete:sections.filter(x=>x.complete).length,ready:sections.every(x=>x.complete),sections};
}
export function classifyEvidence(input){
  const allowed=["verified","declared","estimated","hypothetical","missing","scenario"];
  const status=typeof input?.status==="string"?input.status:"missing";
  if(!allowed.includes(status))throw new Error("Estado de evidencia inválido");
  if(status==="verified"&&!input?.source_ref)throw new Error("No se puede declarar verificado sin referencia de fuente");
  return {status,value:status==="missing"?null:(input?.value??null),source_ref:input?.source_ref??null,validation_required:["declared","estimated","hypothetical","missing","scenario"].includes(status)};
}
