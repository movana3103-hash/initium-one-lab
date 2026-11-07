# INITIUM ONE LAB — auditoría de plataforma y ruta de implementación
**Estado:** auditoría estática del `index.html` de `main` (2,734 líneas) y primer piloto en rama independiente.
**Regla:** conservar los 23 prompts profesionales validados, sin resumirlos ni sustituirlos. La IA no inventa información; distingue datos, hipótesis, estimaciones y pendientes.

## Hallazgos confirmados en código

| Prioridad | Área | Hallazgo | Ruta técnica |
|---|---|---|---|
| Alta | Diagnóstico integrado | El módulo 10.9 lee solo las primeras 16 posiciones con nombres de una secuencia antigua. | Recorrer módulos mediante sus códigos reales `M[i].c` y utilizar todos los resultados pertinentes. |
| Alta | Documentos | `generatePlan` analiza 19 posiciones y trunca cada resultado a 500–700 caracteres. | Expediente por alumno con referencias a evidencia y fragmentación semántica controlada; no truncamiento silencioso. |
| Alta | Documentos | Plan completo en una sola llamada de 4,000 tokens; diagnóstico en 3,500. | Redacción por secciones, validación de completitud, reintentos limitados, ensamblaje y revisión. |
| Alta | Hallazgos | `extractHallazgo` limita la captura a un máximo aproximado de 300–600 caracteres. | Resultado estructurado o extracción sin límite arbitrario; salida completa accesible. |
| Alta | Avance | `marcarComp` no comprueba globalmente el estado real de lecciones, resultados y evaluación. | Sistema de progresión por etapas con reglas verificables en servidor. |
| Alta | Datos personales | Progreso en `localStorage`, sin sincronización multi-dispositivo en código público. | Identidad del alumno, persistencia privada y restauración de progreso desde backend. |
| Alta | Certificado | `showCert` requiere 92/115, pero hay referencias antiguas en FAQ a 20 módulos y 80/100. | Cálculo central desde 23 módulos y 115 puntos; umbral documentado y controles de completitud. |
| Media | Descargas | `downloadAllZip` no genera ZIP real; abre ventanas para imprimir. | Crear descargas PDF auténticas, y paquete ZIP opcional mediante backend. |
| Media | Parrilla/Gantt | Generación y lectura con límites fijos de 15 y 18 filas. | Generar estructura justificada según estrategia y requisitos del entregable. |
| Media | UX | Interfaz muestra simultáneamente aprendizaje, práctica, campos, respuesta y evaluación; requiere copiado manual. | Tres vistas: Aprender, Practicar, Resultados, y guardado automático del resultado. |
| Media | Confianza del resultado | `detectSem` infiere estado por frecuencia de emojis y palabras. | Respuesta JSON validada: semáforo por área, evidencia, incertidumbre y nivel. |
| Media | Analítica/seguridad | Hay código y datos de usuario concatenados en HTML; necesita revisión de escape y sanitización. | Sanitización de texto; auditoría de interpolaciones y esquema de respuesta. |
| Media | Audio | El campus carecía de contenido pedagógico audible. | Narración de navegador para piloto; evaluar audios preproducidos de mayor calidad. |

## Primer piloto implementado en esta rama
- `aula-initium.js`: seis microlecciones del Módulo 1, narración opcional y decisiones autoevaluadas.
- `index.html`: integración del aula del Módulo 1; prompts originales intactos; bloqueo de avance del Módulo 1 hasta terminar aula y actividad; resultado de análisis guardado automáticamente.
- `preview-aula.html`: versión pedagógica autónoma, sin API ni datos empresariales.
- No se ha modificado `main`; no hay nueva facturación activada.

## Siguientes etapas
1. **Validación del piloto:** prueba en móvil/escritorio, audios y navegación. Probar negocio en marcha, lanzamiento y marca desde cero. Corregir fallas antes de mezclar cambios en `main`.
2. **Diseño de expediente empresarial:** registrar datos, origen, fecha, evidencia, versión, hipótesis y límites de confianza. Evitar que casos ficticios contaminen expedientes reales.
3. **Motor de resultados:** respuesta estructurada, hallazgos completos, autoguardado y semáforos por evidencia.
4. **Motor de documentos:** capítulos separados, cobertura de secciones, revisión de cálculos, plantillas marca Nat Moreno & Co., PDF real y exportación coherente.
5. **OpenAI:** mantener `Cloudflare Worker` como servidor proxy, pero sustituir el proveedor de forma controlada. La clave de OpenAI permanece como secreto en Cloudflare; crear entorno staging y límites de gasto. No cambiar servicios de producción sin pruebas ni aprobación.
6. **Escalar pedagogía:** validar 1.5, 2, 3 etc. Reutilizar componentes, no repetir código en cada módulo.
7. **Comercialización:** autenticar usuarios, permisos por pago, progreso remoto, privacidad y pruebas de certificación.

## Pruebas obligatorias antes de venta
- Ningún alumno completa un módulo sin demostrar comprensión y completar los requisitos, con recuperación ante interrupciones.
- Ningún hallazgo aparece recortado, omitido o alterado al entrar en diagnóstico integrado o plan final.
- Todo dato de negocio mostrado debe estar vinculado a evidencia o identificado como supuesto/estimación.
- Los documentos deben incluir secciones completas y fechas/plazos coherentes; nunca inventar cifras de ventas o ROI.
- Pruebas de salida larga, pérdida de conexión, límites del modelo, reinicio y recuperación.
- Revisar diferenciación de los tres recorridos, uso en móviles y accesibilidad.
- Validar que ningún alumno pueda acceder a expedientes ajenos.
- Comprobar costos de API por escenario y presupuesto máximo por cuenta.
- No declarar certificación aprobada sin puntaje y actividades completas.

## Restricciones de esta auditoría
Se revisó código del repositorio, **no** credenciales o configuración interna de Cloudflare, facturación de API, bases de datos existentes fuera del código ni todos los flujos de extremo a extremo en navegador. Las mejoras de la rama son piloto y no equivalen a un campus listo para venta.
