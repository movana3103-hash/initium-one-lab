/* INITIUM M1 — Worker de análisis empresarial profesional (staging, NO desplegado).
 * Requiere: OPENAI_API_KEY, SESSION_HMAC_SECRET, ANALYST_MODEL, ALLOWED_ORIGIN,
 * DB (D1 con esquema 0001_schema.sql), ANALYST_LIMITER y emisor de JWT autenticado.
 * El catálogo VALIDATED_MODULES se importa literal: no se cambia el prompt original.
 */
import {VALIDATED_MODULES} from "../src/data/validated-module-prompts.js";
const M1=VALIDATED_MODULES.find(x=>x.c==="1");
if(!M1||!M1.p)throw Error("No se ha localizado el prompt profesional M1");
const STATUS=new Set(["verified","declared","estimated","hypothetical","missing","scenario"]);
const FIELDS=new Set(["plan","objectives","offer","lines","customer","market","channels","communication","salesProcess","experience","sales","ticket","margins","providers","metrics","problem"]);
const findingsSchema={type:"object",additionalProperties:false,required:["summary","area_analysis","findings","limitations","next_module_handoff"],properties:{
summary:{type:"string"},
area_analysis:{type:"array",items:{type:"object",additionalProperties:false,required:["area","what_we_know","what_we_cannot_confirm","recommended_next_action"],properties:{area:{type:"string"},what_we_know:{type:"string"},what_we_cannot_confirm:{type:"string"},recommended_next_action:{type:"string"}}}},
findings:{type:"array",items:{type:"object",additionalProperties:false,required:["statement","basis","evidence_keys","cause_status","severity","priority","recommendation","verification_action"],properties:{
statement:{type:"string"},basis:{type:"string"},evidence_keys:{type:"array",items:{type:"string"}},cause_status:{type:"string",enum:["verified","hypothesis","unknown"]},severity:{type:"string",enum:["green","yellow","red","insufficient"]},priority:{type:"integer"},recommendation:{type:"string"},verification_action:{type:"string"}
}}},
limitations:{type:"array",items:{type:"string"}},next_module_handoff:{type:"string"}
}};
function response(value,status,origin){return new Response(JSON.stringify(value),{status,headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff","Access-Control-Allow-Origin":origin,"Vary":"Origin"}});}
function decode64(v){const s=v.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-v.length%4)%4);const raw=atob(s);return Uint8Array.from(raw,c=>c.charCodeAt(0));}
async function auth(header,secret){
 if(!header?.startsWith("Bearer ")||!secret)return null;const t=header.slice(7),p=t.split(".");if(p.length!==3||t.length>4096)return null;
 let head,claims;try{head=JSON.parse(new TextDecoder().decode(decode64(p[0])));claims=JSON.parse(new TextDecoder().decode(decode64(p[1])));}catch{return null;}
 if(head.alg!=="HS256"||head.typ!=="JWT"||claims.aud!=="initium-one-lab"||typeof claims.sub!=="string"||!Number.isInteger(claims.exp)||claims.exp<=Math.floor(Date.now()/1000))return null;
 const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(secret),{name:"HMAC",hash:"SHA-256"},false,["verify"]);
 try{return await crypto.subtle.verify("HMAC",key,decode64(p[2]),new TextEncoder().encode(p[0]+"."+p[1]))?claims:null;}catch{return null;}
}
function cleanDraft(body){
 if(!body||typeof body!=="object"||Array.isArray(body))throw Error("Cuerpo inválido");
 const entries=body.entries;if(!entries||typeof entries!=="object"||Array.isArray(entries))throw Error("Falta expediente");
 const normalized=[];
 for(const [key,entry] of Object.entries(entries)){
   if(!FIELDS.has(key)||typeof entry!=="object"||!entry)throw Error("Campo no reconocido");
   const status=entry.status, val=entry.value??"",source=entry.source??"";
   if(!STATUS.has(status)||typeof val!=="string"||typeof source!=="string")throw Error("Clasificación de dato inválida");
   if(val.length>80000||source.length>1500)throw Error("Campo demasiado extenso; guarda un documento de apoyo por separado");
   if(status==="verified"&&!source.trim())throw Error("No es posible declarar información verificada sin referencia");
   normalized.push({key,value:val,status,source});
 }
 return normalized;
}
function extractText(o){
 if(typeof o.output_text==="string"&&o.output_text.trim())return o.output_text;
 return (o.output||[]).flatMap(x=>x.content||[]).filter(x=>x.type==="output_text").map(x=>x.text||"").join("");
}
export default {async fetch(request,env){
 const origin=request.headers.get("Origin")||"";
 if(!env.ALLOWED_ORIGIN||origin!==env.ALLOWED_ORIGIN)return response({error:"Origen no permitido"},403,env.ALLOWED_ORIGIN||"");
 if(request.method==="OPTIONS")return new Response(null,{status:204,headers:{"Access-Control-Allow-Origin":origin,"Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Authorization, Content-Type","Vary":"Origin"}});
 if(new URL(request.url).pathname!=="/api/m1/analyze")return response({error:"Ruta desconocida"},404,origin);
 if(request.method!=="POST")return response({error:"Método no permitido"},405,origin);
 if(!env.OPENAI_API_KEY||!env.SESSION_HMAC_SECRET||!env.DB||!env.ANALYST_MODEL||!env.ANALYST_LIMITER)return response({error:"Analista no configurado"},503,origin);
 const identity=await auth(request.headers.get("Authorization"),env.SESSION_HMAC_SECRET);
 if(!identity)return response({error:"Sesión no autorizada"},401,origin);
 const limit=await env.ANALYST_LIMITER.limit({key:"analyst-m1:"+identity.sub});if(!limit.success)return response({error:"Límite de análisis alcanzado"},429,origin);
 let body;try{body=await request.json();}catch{return response({error:"JSON inválido"},400,origin);}
 const projectId=typeof body.projectId==="string"?body.projectId:"";
 if(!/^[a-zA-Z0-9_-]{8,128}$/.test(projectId))return response({error:"Proyecto inválido"},400,origin);
 const owner=await env.DB.prepare("SELECT projects.id FROM projects JOIN students ON students.id=projects.student_id WHERE projects.id=? AND students.auth_subject=?").bind(projectId,identity.sub).first();
 if(!owner)return response({error:"El proyecto no pertenece a esta sesión"},403,origin);
 let records;try{records=cleanDraft(body);}catch(e){return response({error:e.message},422,origin);}
 if(!records.some(x=>x.value.trim()))return response({error:"Necesitamos información del negocio antes del análisis"},422,origin);
 const input={projectId,moduleCode:"1",track:body.track,entries:records,sourcePolicy:"Los valores son declaraciones del alumno; las fuentes aportadas no han sido auditadas independientemente."};
 const instructions=M1.p+"\n\nCONTRATO DE RESPUESTA DEL MÓDULO 1: devuelve un diagnóstico en las 10 áreas originales, sin inventar cifras, causas ni evidencia. Trata registros sin comprobación como declaraciones. Si falta evidencia, usa estado 'insufficient' y prioriza su recuperación. Distingue hallazgos preliminares y causas verificadas. La respuesta íntegra debe seguir el JSON Schema indicado.";
 let upstream;
 try{upstream=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Authorization":"Bearer "+env.OPENAI_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:env.ANALYST_MODEL,instructions,input:JSON.stringify(input),text:{format:{type:"json_schema",name:"initium_m1_diagnostic",strict:true,schema:findingsSchema}},max_output_tokens:14000,store:false}),signal:AbortSignal.timeout(60000)});}catch{return response({error:"Servicio de IA no disponible"},503,origin);}
 if(!upstream.ok)return response({error:"OpenAI no pudo completar el análisis"},502,origin);
 let payload,analysis;try{payload=await upstream.json();if(payload.status==="incomplete")throw Error("Salida incompleta");analysis=JSON.parse(extractText(payload));}catch{return response({error:"El análisis no se completó; no se guardó un resultado parcial"},502,origin);}
 if(!analysis?.summary||!Array.isArray(analysis.findings)||!Array.isArray(analysis.area_analysis))return response({error:"Formato de respuesta inválido"},502,origin);
 const outcomeId=crypto.randomUUID(),stamp=new Date().toISOString();
 const statements=[
  env.DB.prepare("INSERT INTO module_outcomes(id,project_id,module_code,status,summary,analysis_json,prompt_revision,version,created_at) VALUES(?,?,?,?,?,?,?,?,?)").bind(outcomeId,projectId,"1","review",analysis.summary,JSON.stringify(analysis),"legacy-m1-verbatim",1,stamp)
 ];
 for(const r of records){statements.push(env.DB.prepare("INSERT INTO evidence(id,project_id,module_code,field_key,value_json,evidence_status,source_kind,source_ref,version,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)").bind(crypto.randomUUID(),projectId,"1",r.key,JSON.stringify(r.value),r.status,"student_statement",r.source||null,1,stamp));}
 for(const f of analysis.findings){statements.push(env.DB.prepare("INSERT INTO findings(id,outcome_id,statement,evidence_ids_json,cause_status,severity,recommendation,priority,confidence_note,validation_action) VALUES(?,?,?,?,?,?,?,?,?,?)").bind(crypto.randomUUID(),outcomeId,f.statement,JSON.stringify(f.evidence_keys),f.cause_status,f.severity,f.recommendation,f.priority,f.basis,f.verification_action));}
 try{await env.DB.batch(statements);}catch{return response({error:"No se pudo guardar el análisis. No se confirma persistencia"},503,origin);}
 return response({outcomeId,moduleCode:"1",status:"review",analysis,usage:{input_tokens:payload.usage?.input_tokens||0,output_tokens:payload.usage?.output_tokens||0}},200,origin);
}};
