# INITIUM ONE LAB V2 — Módulo 1 · Entrega funcional y pruebas

**Fecha:** 2026-11-08  
**Rama:** `feature/initium-campus-v2-rebuild`  
**Producción:** sin cambios; `main` continúa publicando el campus anterior.  
**Estado:** M1 completo como **prototipo local de aprendizaje y ficha preliminar**. El **diagnóstico profesional OpenAI, el expediente privado y la acreditación comercial todavía no están activados**.

## 1. Tres resultados del Módulo 1

**A · Aprendizaje:** seis microlecciones y seis casos de decisión con feedback y audio opcional del navegador. Evaluación original del M1 de la versión de Claude: pregunta, cuatro opciones, respuesta correcta (índice 2), explicación validada y 5 puntos. La calificación del cuestionario y el avance de las microlecciones se guardan como demostración local. No equivalen a certificación de todo el programa.

**B · Resultado empresarial preliminar:** captura guiada de **16 campos** organizados en dirección y plan, modelo/oferta/clientes, ventas/experiencia/rentabilidad y marketing/canales/medición. Cada campo conserva texto íntegro, categoría de evidencia y referencia opcional (obligatoria para clasificarse como documentado). Se muestra estado de información, vacíos, declaraciones, posibles prioridades de recuperación y límites. **Esto es un análisis determinístico de la captura, NO un diagnóstico de causas raíz**. El semáforo se mantiene en «información insuficiente» mientras no se ejecute el Analista INITIUM.

**C · Entregable del módulo:** **Ficha de Diagnóstico Inicial** exportable como **HTML imprimible**, con datos completos, hallazgos preliminares, acciones de recuperación, puntuación de evaluación, fuentes aportadas, limitaciones y traspaso al siguiente módulo. La copia de datos también se puede exportar como JSON; incluye estructura `handoff` con destino M1.5, todavía sin sincronización automática.

## 2. Código de implementación real
- `v2/module1-core.js`: campos y criterios, almacenamiento local, evaluación original, lectura preliminar, objeto de traspaso al M1.5, exportación HTML.
- `v2/module1-ui.js`: formulario por áreas y pantallas de tres resultados, evaluación final y exportaciones.
- `v2/index.html`: carga módulos M1 antes del frontend principal.
- `v2/app.js`: conecta Aprender/Practicar/Aplicar/Resultados con los nuevos componentes, y añade acceso desde Mis resultados / Entregables.
- `v2/styles.css`: componentes del formulario, dashboard de tres resultados, evaluación y responsive.
- `v2/tests/module1.test.mjs`: pruebas reproducibles de captura, evidencia, evaluación original, exportación, HTML seguro y ausencia de truncamiento.
- `v2/backend/worker-m1-openai.js`: **Worker de staging sin desplegar** que importa el prompt profesional M1 íntegro, verifica sesión, dueño de proyecto, cuotas y modelo, solicita respuesta estructurada a OpenAI y guarda análisis/evidencias/hallazgos en D1.
- `v2/backend/migrations/0001_schema.sql`: base de datos preparada, NO migrada ni activada.

## 3. Pruebas ejecutadas en el entorno de desarrollo
- Carga de `module1-core.js`, `module1-ui.js` y `app.js` mediante intérprete V8 con simulación de DOM.
- Navegación al Módulo 1 → Aplicar; edición de nombre del negocio y varios campos; selección de estado estimado.
- Navegación por áreas → Resultados, sin pérdida del texto capturado.
- Evaluación original: selección de tercera opción, puntaje 5/5 y persistencia local del resultado.
- Exportación de ficha HTML y verificación del contenido capturado.
- Acceso a M1 desde «Mis resultados» y «Entregables».
- Worker: respuestas 403 a origen no permitido, 503 si faltan configuraciones y 401 ante sesión ausente.
- La batería de **17 pruebas automatizadas** de navegación, integridad documental y Módulo 1 pasó en GitHub Actions el 8 de noviembre de 2026 (commits previos a la última actualización documental). **Aún falta inspección gráfica real en Chrome/Safari móvil**.

## 4. Lo que no se debe declarar terminado
1. **Análisis real de OpenAI:** sin autenticación, secretos en Cloudflare, binding D1 activo ni Worker publicado. El frontend no enviará datos sensibles ni llamará API hasta aprobar seguridad y presupuesto.
2. **Guardado permanente del alumno:** el borrador del M1 está en `localStorage` del navegador; se puede perder si se borra el historial o se cambia de dispositivo. La copia JSON facilita respaldo manual.
3. **Entrega final profesional:** hoy es ficha preliminar HTML imprimible, no diagnóstico de 10 áreas generado y contrastado con IA, ni PDF acabado del programa.
4. **Transferencia automática a M1.5:** se prepara el objeto `handoff`, pero aún no se incorpora a otro módulo porque falta el expediente privado.
5. **Certificación del curso:** la evaluación original guarda 5 puntos locales, pero la certificación oficial y el consolidado 115 puntos siguen pendientes de integrar en servidor.
6. **Verificación de fuentes:** una referencia escrita por el alumno no equivale a una auditoría independiente; no convertir declaración en dato contrastado por el sistema.
7. **Diseño final de exportación:** la ficha usa paleta y denominación editorial; la generación final en PDF deberá incorporar logotipo vectorial, plantilla completa y QA documental.

## 5. Pasos para probar en la rama V2
1. Abrir `v2/index.html` en la rama de desarrollo.
2. Campus → Continuar Módulo 1 → Aprender/Practicar (seis lecciones).
3. Aplicar → completar datos en las 4 áreas, indicar calidad y fuente; nunca datos privados reales en esta demo.
4. Resultados → revisar tres resultados, información insuficiente, acciones y evaluación validada.
5. Exportar HTML/JSON, revisar que aparecen las respuestas enteras; navegar a «Mis resultados» y «Entregables».
6. Cerrar y volver a abrir en el mismo navegador para confirmar persistencia de prueba; no es sincronización entre dispositivos.

**Criterio de aceptación final para M1 comercial:** usuario autenticado, lecciones y evaluaciones persistidas por alumno, análisis íntegro ejecutado en OpenAI con prompt original, información y hallazgos guardados en D1, traspaso real a M1.5 y PDF exportado con identidad de Nat Moreno & Co. Todo ello probado en navegador y móvil.
