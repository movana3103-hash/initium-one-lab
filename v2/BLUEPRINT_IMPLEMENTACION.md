# INITIUM ONE LAB V2 — BLUEPRINT DE IMPLEMENTACIÓN POR BLOQUES
**Fecha:** 2026-11-07  
**Estado:** dirección de producto aprobada por Nat Moreno; especificación de implementación y aceptación.  
**Repositorio:** `movana3103-hash/initium-one-lab`  
**Rama protegida de trabajo:** `feature/initium-campus-v2-rebuild`  
**Producción:** `main` intacta; no publicar V2 sin aprobación y QA.
**Diseño de referencia:** imagen suministrada de campus visual premium con sidebar violeta, aula central, reproductor, tutor femenino a la derecha y tarjetas pedagógicas. Debe respetarse como meta de composición, no como sustituto de funcionalidad real.

## 0. ALCANCE, PRIORIDADES E INVARIANTES
- **Reconstrucción de frontend desde cero:** sí; no seguir injertando funciones en el `index.html` anterior.
- **Conservar metodología, contenido conceptual, 23 nombres y códigos y 23 prompts validados:** sí, textualmente como fuente de verdad en código legacy, hasta migración probada y cotejada.
- **No suponer que V2 ya es curso:** actual `v2/` es prototipo de interfaz con seis lecciones y tutor de respuestas programadas. No hay OpenAI live, no hay login real, no hay expediente persistente, no hay diagnóstico real y no hay PDF final.
- **Experiencia obligatoria en cada módulo:** Aprender (texto visual/audio) → Practicar (simulación/feedback) → Aplicar (datos/analista profesional) → Resultados (hallazgo completo/evidencia/acciones) → evaluación, guardado y desbloqueo.
- **Aislamiento pedagógico:** tutor explica; analista hace consultoría a partir del prompt validado; motor documental produce y verifica documentos; ninguna ficción de simulación pasa al expediente como dato real.
- **No generar cifras ni hallazgos sin datos.** Toda hipótesis se distingue de causa confirmada. Vacíos de información generan hallazgos y una acción de verificación, no respuestas inventadas.
- **Branding:** logos originales que Nat adjuntó en la conversación (vertical y horizontal); no redibujarlos. Usar retrato editorial femenino reconocible de Nat y avisar que el Tutor es IA, no Nat en vivo.
- **Colores:** blanco roto `#F7F4EE`, negro `#111111`, dorado claro `#D3BC8D`, gris cálido `#5F5957`, violeta oscuro INITIUM `#774C8A`, lavanda claro propuesto `#EEE7F2`.
- **Presupuesto:** diseñar sin LMS, voz en tiempo real o avatar hablante como dependencia. Audio con voz del navegador en fase 1; OpenAI API por servidor con medición de costos reales. Reserva de trabajo US$15 por alumno para IA textual, todavía NO validada.

## 1. ESTRUCTURA DE CÓDIGO OBJETIVO

Actualmente existen:
- `v2/index.html`: documento del prototipo.
- `v2/styles.css`: estilos monolíticos iniciales.
- `v2/app.js`: estado, rutas y contenido de muestra, mezclados.
- `v2/README.md`: estado del prototipo, restricciones y pendientes.
- `index.html` (raíz): sistema anterior de producción, preservar como referencia.

Migración incremental recomendada (archivos por crear al implementar; no marcarlos como existentes):
```text
v2/
  index.html
  src/
    app.js                     # arranque/router; sin secreto ni prompt incrustado
    design/
      tokens.css               # paleta/tipografía/espaciado/estados
      components.css           # botones, cards, formularios
      layout.css               # sidebar, topbar, grids y breakpoints
      print.css                # previsualización editorial
    assets/
      nat-logo-vertical.png    # archivo original autorizado, SIN recreación
      nat-logo-horizontal.png  # archivo original autorizado, SIN recreación
      tutor-nat-editorial.webp # retrato editorial basado en foto autorizada
      hero-initium.webp        # imagen editorial propia o ilustración licenciada
    data/
      module-manifest.js       # 23 ids/nombres/orden/dependencias
      pedagogical-content/     # lecciones, ejemplos, simulaciones, feedback
      learning-rubrics.js      # habilidades, criterios de aprobación
    components/
      BrandShell.js            # encabezado/menú/responsive
      JourneyMap.js            # 23 módulos, acceso y seguimiento real
      ModuleShell.js           # 4 etapas y evaluación
      LessonPlayer.js          # audio/lectura y accesibilidad
      DecisionSimulator.js     # escenarios de decisión
      TutorPanel.js            # chat y sugerencias contextuales
      DataCollection.js        # captura y clasificación de evidencia
      FindingsDashboard.js     # hallazgos completos/semáforos/acciones
      DeliverableLibrary.js    # estados, previsualización y descargas
    screens/
      CampusHome.js
      LearningRoute.js
      ModuleClassroom.js
      GlobalResults.js
      Deliverables.js
      AccountAccess.js
    services/
      apiClient.js             # fetch autenticado al Worker
      progress.js              # persistencia remota; no localStorage exclusivo
      dossier.js               # normalización/versionado de expediente
      costMeter.js             # mostrar límites de uso cuando corresponda
    tests/
      modules.test.js
      learning.test.js
      evidence.test.js
      documents.test.js
  backend/
    worker/
      router.js                # rutas autenticadas
      auth.js                  # validación identidad/sesiones
      tutor.js                 # preguntas educativas → OpenAI
      analyst.js               # prompts validados → OpenAI
      document-builder.js      # capítulos, revisión y ensamble
      storage.js               # registros aislados por alumno
      usage.js                 # cuotas, alertas y medición de tokens
    migrations/
      0001_schema.sql         # alumnos, progreso, expedientes, versiones
```
**Nota:** no se adoptará framework ni bundler complejo sin necesidad. Módulos ES y CSS separados bastan para iniciar; pruebas y build se incorporarán cuando el proyecto lo amerite.

## 2. MAPA DE PANTALLAS Y FUNCIONES
| Pantalla | Archivo destino | Debe mostrar | Acción principal | Gate de calidad |
|---|---|---|---|---|
| Acceso y cuenta | `screens/AccountAccess.js` | identidad / inscripción / recuperar progreso | Entrar a mi campus | permisos reales y acceso exclusivo |
| Campus/Home | `screens/CampusHome.js` | logo original, hero editorial, 4 dinámicas de aprendizaje, tutor, estado real | Continuar donde quedé | < 1 acción dominante, sin porcentajes ficticios |
| Mi ruta | `screens/LearningRoute.js` | 23 módulos completos, situación de avance y dependencia | Abrir siguiente módulo | id/orden iguales a fuente validada |
| Aula | `screens/ModuleClassroom.js` | 4 etapas, progreso, instructor, evaluación | Siguiente paso permitido | guardas verificadas, sin marcar "visto" |
| Simulador | `components/DecisionSimulator.js` | caso, alternativas, feedback, nuevo intento | Elegir y justificar | puntuación coherente, caso no contamina datos reales |
| Tutor IA | `components/TutorPanel.js` | retrato autorizado, prompts rápidos, preguntas, explicación, audio opcional | Preguntar | identificado como IA, no responde examen |
| Aplicar | `components/DataCollection.js` | datos/documentos/estado de verificación | Analizar con Método INITIUM | fuente, categoría y límite de confianza |
| Resultados módulo | `components/FindingsDashboard.js` | síntesis, hallazgo completo, evidencia, semáforo, soluciones | Comprender y confirmar datos | jamás truncar silenciosamente |
| Mis resultados | `screens/GlobalResults.js` | historial de hallazgos, pendientes, evolución, prioridades | Revisar expediente | todas las versiones aisladas por alumno |
| Entregables | `screens/Deliverables.js` | diagnóstico, 12 meses, ejecución, creativo, canales, 30 días y certificado | Ver / descargar (si existe) | salida completa + identidad visual |
| Ayuda | en shell/contextual | dudas pedagógicas vs soporte técnico claramente separado | Obtener ayuda | no confundir IA con soporte humano |

## 3. MÓDULO UNIVERSAL
**Estado educativo por módulo (persistido remotamente, no UI):**
`locked` → `learning` → `practice` → `application` → `review` → `assessment` → `complete`.
- El botón siguiente valida que la acción necesaria se completó.
- **No exigir dato empresarial inexistente**: aceptar y registrar ausencia, no inventar.
- En lectura/audio se acredita comprensión mediante ejercicio, **no por dar clic Play**.
- Tutor siempre disponible de forma expandible, sin ocupar continuamente un tercio en móviles.
- Microlección con 1 idea, 1 recurso visual real, 1 ejemplo, 1 aplicación o pregunta, 1 CTA.
- El alumno puede volver a revisar lecciones sin perder respuestas.
- Evaluación no puede ser contestada por Tutor; historial de intentos y retroalimentación claros.

## 4. TUTOR INITIUM Y RETRATO DE NAT
**Identidad visual:** ilustración editorial femenina basada en la fotografía proporcionada (sonrisa, cabello oscuro, apariencia adulta), con vestuario reinterpretado sobrio y paleta de marca. Evitar caricatura, rostro genérico, reclamo de transmisión personal en vivo. Rotulación: «Tutor INITIUM · Asistente pedagógica con IA basada en el Método INITIUM de Nat Moreno & Co.».
**Audio:** TTS navegador para microlecciones; si falta voz española adecuada, fallback lectura. No clonación de voz sin permiso independiente.
**Tutor real:** modelo de menor costo para explicación, contexto restringido a módulo/lección, historial breve y consentimiento. Las preguntas no autorizan alterar prompts ni análisis del alumno.
**Contrato servidor:** `POST /api/tutor` → `{ moduleId,lessonId,question }` → `{ answer,usage,teachingObjective }`. Sesión y alumno se verifican en backend. No enviar token de API desde GitHub Pages.
**Diseño visual del chat:** preguntas rápidas y mensajes breves. Si falla API, informar falla y ofrecer contenido pedagógico estático, no fingir respuesta.

## 5. ANALISTA E INFORMACIÓN
**Contrato:** `POST /api/analyze` con `moduleId`, expediente y fuentes pertinentes. El servidor recupera el prompt profesional original del módulo (no fiarse del prompt enviado desde navegador), valida entrada, ejecuta análisis y almacena resultado íntegro.
**Salida estructurada:** `{moduleId,findings:[{statement,evidence,verification_status,root_cause_status,impact,priority,recommendation,missing_data}],risk_status,confidence,summary,full_analysis,dependencies}`. Semáforo basado en estado estructurado y evidencia, no conteo de emojis/palabras.
**Niveles:** `verified | declared | estimated | hypothetical | missing`. En casos de lanzamiento y simulación, marcar `scenario` y no mezclar con `verified`.
**Expediente:** identificador de alumno, empresa, versión, fuente, fecha, trazabilidad, módulo. Actualizaciones no destruyen información anterior.

## 6. MOTOR DOCUMENTAL
**No generar un plan completo de una sola llamada.** Flujo:
1. Consolidar expediente sin `substring` arbitrarios ni límites tipo 500–700 caracteres por módulo.
2. Armar índice/capítulos obligatorios del entregable.
3. Generar **cada sección** con datos relevantes y fuente, comprobando límite de salida e integridad.
4. Revisar contradicciones, cifras, dependencias, hipótesis y alcance.
5. Si faltan datos, mostrar secciones pendientes con preguntas, no inventar.
6. Ensamblar HTML semántico, plantilla corporativa de Nat Moreno & Co., tablas/índices/paginación; producir PDF real y versión editable si se aprueba.
7. Verificar que archivo descargado tenga secciones completas y ninguna página cortada.
**Entregables:** Diagnóstico INITIUM; Matriz de hallazgos y soluciones; Plan Estratégico de Marketing 12 meses; Plan Operativo 6 meses; Estrategia Creativa; Mapa de canales; Parrilla multicanal 30 días; Certificado sujeto a progreso y evaluación. Ajustar lista final con especificación de origen antes de prometer 8 PDFs separados.
**Calidad:** evidencia visible, lenguaje empresarial aplicable, recomendaciones con responsables/plazos/KPIs cuando existan datos. Identidad: logo original, colores, tipografía legalmente usable.

## 7. SECUENCIA DE TRABAJO, SIN CABOS SUELTOS
| Etapa | Entrega | Dependencia | Validación |
|---|---|---|---|
| 0 | Baseline `main` y export de prompts exactos | acceso a repo | SHA y checksum; nunca sobrescribir original |
| 1 | Marca y UX de `v2/`: logo real, retrato autorizado, home y M1 visual | assets adjuntos | comparación visual con referencia en desktop y móvil |
| 2 | Refactor componentes, manifest 23 módulos, estado de lecciones y auditoría | etapa 1 | navegación, progreso, accesibilidad |
| 3 | Aula M1 con contenido, audio, simulación y evaluación | etapa 2 | prueba 3 perfiles + recuperación tras reiniciar |
| 4 | Expediente persistente y login real | etapa 2 | aislamiento, restauración, privacidad |
| 5 | Tutor real OpenAI + analista profesional | etapas 3–4 | contratos, seguridad, costos, calidad de respuestas |
| 6 | Motor documental por capítulos, QA y plantilla | etapa 5 | documentos completos y verificados |
| 7 | Expandir pedagogía y simuladores a los otros 22 módulos | etapas 3–6 | prueba de cadena y dependencias |
| 8 | Certificación, pagos, soporte, despliegue | etapa 7 | compra→acceso→aprendizaje→PDF→certificado |
| 9 | Validación final y publicación | etapa 8 | pruebas E2E + aceptación de Nat |

## 8. DEFINITION OF DONE PARA CADA PANTALLA
Cada pieza se considerará terminada solo si:
- Sirve en escritorio, tablet y móvil; contraste, foco y teclado verificados.
- Utiliza branding original y escala tipográfica coherente.
- Tiene estado de carga, vacío, error, éxito y recuperación.
- Emplea una CTA principal inequívoca.
- No aparenta conexión a IA/documentos cuando se trata de demo.
- Usa datos reales o ficticios **expresamente** diferenciados.
- Guarda progreso, permite retomarlo y no pierde las respuestas.
- No elimina información de módulos previos.
- Tiene prueba funcional y no solo validación de sintaxis.
- Está revisada por Nat antes de integración a `main`.

## 9. ACTIVOS
**Entregados por Nat en esta conversación:** logo vertical PNG, logo horizontal PNG y fotografía de referencia para retrato. El archivo recortado de la foto contiene texto de medio, que se debe eliminar o sustituir en un retrato editorial, no incluir como elemento del campus.
**Acceso técnico:** aunque las imágenes están presentes en la conversación, aún deben transferirse de forma verificable al repositorio `v2/src/assets` mediante acceso seguro. No afirmar integración hasta confirmar el commit de binarios.
**Dependiente de generación editorial:** retrato ilustrado con semejanza de Nat, hero/ilustraciones y permisos de imagen. No inventar que la persona del avatar es Nat en vivo.

## 10. RIESGOS DE LANZAMIENTO Y ESTADO
- Prompts original existentes, **NO conectados a V2**.
- Tutor UI preparado como demo, **NO IA en vivo**.
- Audio navegador, depende de voz/dispositivo.
- Progreso demo en memoria, **NO cuenta real**.
- Datos de formulario de demo sin privacidad contractual, **NO usar para información sensible**.
- Documentos sin exportación real, **NO vender como terminados**.
- Diseño V2 aproximado visual, **NO paridad exacta con mockup sin assets y QA**.
- Costo de IA de US$15/alumno = reserva hipotética, **NO margen comercial medido**.

## 11. PRÓXIMA TAREA EJECUTABLE EN REPO
Convertir `v2/app.js` en componentes/manifest sin perder interacción existente, integrar logo vertical y horizontal oficiales en assets, usar retrato ilustrado autorizado para Tutor, y verificar visualmente la pantalla Home y Aula M1 en varios anchos. Debe incluir prueba de regresión al extraer funciones.
