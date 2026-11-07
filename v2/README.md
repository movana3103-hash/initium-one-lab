# INITIUM ONE LAB V2 — Reconstrucción de campus

**Estado:** primera experiencia visual interactiva desde cero, implementada en directorio `/v2/` de la rama `feature/initium-campus-v2-rebuild`. **NO corresponde al campus comercial listo para venta.** `main` mantiene la plataforma anterior y su contenido.

## Dirección de diseño aprobada
Campus premium, visual, intuitivo y orientado a aprender haciendo. Referencia: imagen de UI aprobada en conversación: sidebar morado oscuro; aula central con ilustración editorial, microlecciones, reproductor, tarjetas de conceptos; Tutor INITIUM a la derecha con presencia visual; pestañas de Aprender / Practicar / Aplicar / Resultados. Dorado claro, negro, blanco roto, lavanda claro y oscuro. La ejecución busca una aproximación funcional, no una captura idéntica píxel a píxel; las ilustraciones finales son activos pendientes de aprobación.

El manual de identidad real proporciona los colores originales `#F7F4EE`, `#111111`, `#5F5957`, `#D3BC8D` y `#774C8A`. El lavanda claro `#EEE7F2` es una ampliación propuesta.

## Decisión técnica importante
Se construye **un frontend independiente en `v2/`** para evitar modificar el gran archivo `index.html` de producción. El código V2 es semántico, separado por responsabilidades y con módulos reusables. No se copiarán los 23 prompts profesionales a la nueva interfaz hasta definir el backend seguro y la persistencia.

## Archivos reales
- `v2/index.html`: shell HTML, marca textual provisional, navegación y aplicación.
- `v2/styles.css`: identidad visual, grids, componentes premium, tarjetas, responsividad, contraste básico y accesibilidad.
- `v2/app.js`: interfaz con inicio, ruta completa de 23 módulos, Módulo 1 por cuatro etapas, seis microlecciones y simulaciones, Tutor de demostración, captura de datos local temporal, resultados y entregables marcados correctamente como pendientes.

## Qué es funcional hoy
- Navegación SPA entre Campus, Mi ruta, Módulos, Mis resultados, Entregables.
- Paso al Módulo 1 desde portada, tarjetas o ruta.
- Seis microlecciones y seis preguntas de decisión con retroalimentación, siguiente lección y avance de muestra (solo durante sesión; no certifica módulos).
- Narración opcional utilizando `speechSynthesis` y velocidad configurable; depende del navegador.
- Tutor guiado con preguntas rápidas y respuesta programada: **NO es OpenAI en vivo**.
- Formulario de muestra con selección de calidad del dato y texto no confidencial; no se envía a backend ni persiste en servidor.
- Resultados y documentos aparecen en estado **pendiente**, sin inventar diagnóstico ni ofrecer descargas inexistentes.
- Ruta de los 23 módulos con nombres y códigos exactos verificados en fuente anterior.

## Qué no está listo
1. **Marca gráfica real:** El archivo `logo Nat Moreno & Co. Vertical.png` fue localizado y visualizado en biblioteca, pero su exportación de bytes al repositorio fue denegada. No se ha incrustado un sustituto; el wordmark de la V2 es texto temporal. Se necesita el PNG o SVG original con acceso de archivo.
2. **Retrato de Nat para Tutor:** la dirección visual está aprobada, pero faltan fotografías autorizadas para elaborar una ilustración reconocible. El panel utiliza un marcador de posición explícito.
3. **Tutor OpenAI real:** se necesita autenticación, proxy Cloudflare, secreto de API, límites por alumno y prueba de costos. No conectar directamente desde cliente.
4. **Prompts profesionales:** conservados en `main` original; aún NO migrados ni conectados en V2.
5. **Expediente empresarial:** requiere persistencia servidor, tipado, trazabilidad, versiones y segregación por alumno.
6. **Motor documental:** generación por capítulos, revisión de integridad, cálculos, plantillas corporativas y PDF real aún pendientes.
7. **Evaluaciones/certificados:** el progreso de microlecciones es demostrativo y NO acredita ni certifica. Los otros 22 módulos requieren contenido pedagógico.
8. **Acceso comercial:** identidad, compra, control de acceso, privacidad y recuperación pendiente.
9. **QA real:** falta ejecutar pruebas responsive/móviles, accesibilidad, navegación de extremo a extremo y flujo integral con OpenAI.

## Próximas etapas de construcción
### A. Cerrar identidad gráfica y diseño visual
Integrar logos originales autorizados, retrato ilustrado de Nat, ilustración editorial de aula y pulir spacing; revisar en escritorio y móvil real. Hasta entonces no proclamar paridad visual absoluta con el mockup aprobado.

### B. Componentes y modelo de datos
Separar la aplicación en componentes y módulos con configuración: `moduleId`, `lessons`, `simulations`, `validatedPromptId`, `requirements`, `resultSchema`; crear expediente con fuentes y clasificación de evidencia.

### C. Backend y analista
Conservar sin recortes la intención de prompts originales, migrar a OpenAI con controles y pruebas de resultados estructurados, sin inventar datos. Tutor separado del motor estratégico y del validador documental.

### D. Entregables y certificación
Construir diagnósticos y planes por secciones, guardado real, control de integridad, exportación PDF/dossier, y evaluación objetiva de aprendizaje. Pasar tests de tres rutas de negocio.

### E. Comercialización y publicación
Probar pagos, acceso privado, persistencia, límites por usuario, consumo de IA y privacidad. Mergear a producción solo después de QA y aprobación.

## Pruebas de aceptación antes de incorporar a main
- Mantener 23 módulos y nombres originales.
- No inventar resultados de una empresa o asistencia IA en vivo.
- Un paso primario por vista; explicaciones legibles con audio opcional.
- Tutor contextual identificable como IA y no como Nat en atención personal.
- Logo vertical original e ilustración de Nat autorizados integrados correctamente.
- Prompts profesionales sin alteraciones de sustancia y con dependencia de datos correcta.
- Guardado persistente por alumno y aislamiento de datos.
- Documentos completos, con evidencia, sin recortes arbitrarios y formato de marca.
- No vender antes de verificar flujo completo, privacidad y soporte.

## Inspección de código
Se validó sintaxis JavaScript mediante parser V8 sobre `v2/app.js`. **Esto NO sustituye pruebas de navegador real.** La rama se mantiene separada de producción. El demo no genera costos de OpenAI.
