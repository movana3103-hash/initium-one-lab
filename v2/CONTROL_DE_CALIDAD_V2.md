# INITIUM ONE LAB V2 — Control de implementación y validación
Fecha: 2026-11-07. Rama: `feature/initium-campus-v2-rebuild`. Producción: rama `main` sin fusionar.

## 1. Cambios YA REGISTRADOS en GitHub
- `v2/assets/nat-logo-vertical.svg`: reproducción raster optimizada del logo vertical original que adjuntó Nat; no redibujado.
- `v2/assets/nat-logo-horizontal.svg`: reproducción raster optimizada del logo horizontal original.
- `v2/assets/tutor-nat-reference.svg`: foto real recortada, eliminando el pie de la noticia. **Es un retrato provisional; falta la ilustración editorial final.**
- `v2/index.html`, `v2/styles.css`, `v2/app.js`: nuevas referencias gráficas y estilos adaptados. El logo horizontal tiene contraste reforzado en barra clara.
- `v2/app.js`: progreso de las seis microlecciones **de demostración** guardado en este navegador; NO se almacena el expediente empresarial ni se representa como progreso certificado.
- `v2/src/data/validated-module-prompts.js`: copia textual idéntica del catálogo de 23 módulos del index legacy, preservada como fuente de migración; aún no está conectada a la interfaz V2.
- `v2/backend/migrations/0001_schema.sql`: modelo propuesto para identidad, empresa, evidencia, hallazgos, avance, secciones documentales y consumo de IA; NO ejecutado en Cloudflare D1.
- `v2/backend/worker-tutor-openai.js`: código de servidor de referencia con claves secretas, identidad JWT y limitador; NO desplegado ni conectado.
- `v2/src/data/document-specs.js`: contratos de siete entregables; rechaza afirmar completitud con capítulos pendientes y datos «verificados» sin fuente.
- `v2/src/core/document-renderer.js`: ensamblador de HTML corporativo que exige capítulos revisados, sin recortes por caracteres, pero aún sin exportación final a PDF real.
- `v2/document-preview.html`: vista real del formato editorial sin datos empresariales inventados; enlazada desde Entregables.
- `v2/tests/contracts.test.mjs`, `v2/tests/documents.test.mjs`: pruebas de contrato para rutas, estructura, documentos y branding.

## 2. Validaciones REALIZADAS (limitadas)
- 23 identificadores de módulos verificados contra el catálogo existente.
- Sintaxis del JavaScript de `v2/app.js` comprobada por intérprete V8 después de cambios.
- Archivo de catálogo de 23 prompts extraído directamente de `main/index.html` y compilado; no modificado manualmente.
- SVGs de activos corporativos comprobados por estructura y cabecera binaria PNG/JPEG embebida.
- Contrato de documentos probado en memoria: un documento sin secciones verificadas no se declara completo; un dato «verificado» sin fuente se rechaza.
- Se preserva la rama principal de producción; no se activaron cuentas ni costos de OpenAI.

## 3. Validaciones PENDIENTES (NO SUPONER COMPLETADAS)
- Comparación de pantallas V2 renderizadas con la imagen de referencia en navegador desktop y móvil, incluidas accesibilidad y estados de error.
- Prueba del logo, retrato y diagramas en Chrome, Safari y navegadores móviles.
- Integración de ilustración editorial de Nat con fidelidad reconocible; solo existe recorte fotográfico.
- Prueba del flujo de seis microlecciones y simulaciones, recuperación tras cierre y navegación de ida/vuelta en navegador real.
- Implementación y prueba de autenticación, protección de cuentas, privacidad, persistencia remota, recuperación de progreso y control por pago.
- Migración de prompts al servidor privado con protección de propiedad intelectual. **Riesgo actual:** el repositorio raíz es público y ya expone prompts históricos en `index.html`; no ampliar innecesariamente esa exposición en producción.
- Tutor conversacional real con OpenAI, flujo de error, control de costo/abusos, no divulgación de respuestas de exámenes.
- Analista profesional de los 23 módulos con salida estructurada, evidencias y hallazgos completos.
- Expansión de enseñanza autónoma al resto de 22 módulos y matriz pedagógica revisada.
- Motor documental: generación por capítulos con OpenAI, revisión factual/cálculos, control de integridad, PDF real, almacenamiento, descarga segura y versiones.
- Certificación sustentada por evaluación y aplicación; compra, acceso e impuestos/políticas comerciales.
- Costos reales de tokens por alumno y duración del programa bajo las tres rutas (marcha/lanzamiento/cero).

## 4. Criterio de aprobación
**No se puede vender ni fusionar V2 hasta que existan pruebas integrales de compra → cuenta → lección/audio → simulación → tutor → diagnóstico → expediente guardado → plan corporativo → certificado.** El presupuesto estimado previo de API no reemplaza una medición del curso completo.

## 5. Próximas tareas por dependencia técnica
1. Revisión visual real del Home y Módulo 1 con activos integrados; pulir detalles frente a la imagen aprobada.
2. Separar componentes y configurar un esquema persistente privado con sesiones autenticadas.
3. Migrar los 23 prompts a backend protegido y desarrollar analista con salidas estructuradas.
4. Conectar tutor IA y controles de presupuesto, luego pruebas con tres perfiles.
5. Implementar ensamblado y verificación de documentos, PDF y descarga.
6. Desarrollar las aulas completas y evaluaciones restantes; certificar progreso, pagos y pruebas de lanzamiento.
