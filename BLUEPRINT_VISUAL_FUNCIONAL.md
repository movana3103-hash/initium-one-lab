# INITIUM ONE LAB — Blueprint visual y funcional definitivo
**Versión:** 1.0 | **Fecha:** 2026-11-07 | **Estado:** especificación de diseño para implementar; NO implica despliegue ni aprobación de la identidad de personaje.

## 0. Jerarquía de fuentes y decisiones
1. `Manual_de_Identidad_Universo_Nat_Moreno_Co.docx` (biblioteca personal): fuente autoritativa para marca, color, tipografía, tono y dirección visual.
2. Arquitectura educativa INITIUM ONE LAB y 23 prompts profesionales validados en repositorio.
3. Solicitud de la fundadora: lavanda claro y oscuro adicionales a blanco roto, negro, gris cálido y dorado.
4. Mockups generados en la conversación: **inspiración funcional solamente**. No copiar literalmente los logos inventados, tipografía serif, degradados, redondeos excesivos o funciones inexistentes (comunidad, eventos, notificaciones).

**Hallazgo de reconciliación:** el manual de identidad prohíbe convertir el campus en una interfaz de lujo beige/gradientes, serif decorativa y tarjetas exageradamente redondeadas. La versión real conservará diseño editorial geométrico, asimetría contenida y fondos sobrios, incorporando lavanda **como señal pedagógica**.

## 1. Sistema cromático (tokens)
| Rol | Valor | Procedencia |
|---|---|---|
| `--brand-ivory` | `#F7F4EE` | Manual: blanco cálido |
| `--brand-black` | `#111111` | Manual: negro profundo |
| `--brand-gray` | `#5F5957` | Manual: gris cálido |
| `--brand-gold` | `#D3BC8D` | Manual: tierra/dorado |
| `--brand-violet` | `#774C8A` | Manual: violeta estratégico INITIUM. Función: lavanda oscuro |
| `--brand-lavender-light` | `#EEE7F2` | **Propuesta pendiente de aprobación**, fondo pedagógico, no manual |
| `--brand-night` | `#172244` | Manual: azul-violeta noche, uso ocasional |
| `--brand-white` | `#FFFFFF` | Superficie clara operacional |
| `--brand-border` | `#DED8D0` | Propuesta operacional |
| `--state-warn` | `#8A6D2B` | Código de campus actual, comprobar contraste |
| `--state-danger` | `#A8453A` | Código de campus actual, comprobar contraste |

Regla: 80–90% base común; 10–20% acento de línea, como indica el manual. No usar dorado como texto pequeño sobre blanco. No usar rojo/verde para navegar; solo para comunicar estados, complementados con palabras e iconos.

## 2. Tipografía
- Títulos: Neue Montreal del manual cuando exista licencia y archivo corporativo autorizado; alternativa operativa Inter Tight.
- Cuerpo: Inter Regular (o sans legible disponible en sistema mientras se integra tipografía licenciada).
- Microetiquetas: Inter 600, mayúsculas, espaciado discreto.
- **No usar serif decorativa de mockup.** No descargar ni distribuir fuentes propietarias sin licencia.
- Texto cuerpo 16–18 px en lecciones largas, máximo 65–75 caracteres por línea, acceso a tamaño ampliado.

## 3. Marca y logo ORIGINAL (no recrear)
Archivo verificado en biblioteca personal: `/INITIUM INTELITEAM/logo Nat Moreno & Co. Vertical.png` (PNG corporativo real, visto visualmente). También existe versión idéntica `logo Nat Moreno & Co. Vertical(1).png`.
- Colocar archivo **original** en sidebar institucional y pantalla de bienvenida, conservando proporción, contraste y área de protección. No rasterizar en estilos inventados ni generar sustitutos.
- Antes de integrarlo al repositorio, copiar el activo con autorización de uso de su archivo original desde biblioteca a los assets del proyecto y verificar legibilidad sobre fondo negro.
- Header textual subordinado: INITIUM / INITIUM Academy / INITIUM ONE LAB siguiendo jerarquía del manual. El logo original no se vuelve a dibujar como texto ficticio.
- Ni la marca matriz ni el tutor deben absorber la prominencia del alumno o el trabajo de aula.

## 4. UX navegación global (desplegable desktop, compacta móvil)
**Barra institucional**: logo vertical real a la izquierda, nombre producto, módulo actual y menú de cuenta **solo cuando exista autenticación real**.
**Menú principal**: Mi ruta; Aprender; Laboratorios; Mis resultados; Mis entregables; Ayuda. No mostrar secciones inútiles de eventos/comunidad/campanas sin funcionalidad real.
**Ruta del alumno**: 23 módulos exactos, cada uno conserva identificador inmutable y relaciones correctas; progreso basado en estado verificable. Listar solo bloque actual y próximos 2 módulos, con opción 'Ver la ruta completa'.
**Pantalla de inicio**: una única acción principal «Continuar donde me quedé»; vista de avance, siguiente objetivo y cuatro componentes didácticos ilustrados. Nada de cifras de progreso inventadas.
**Móvil**: menú reducido, una sola columna, botones accesibles, barra de progreso fija en cabecera del módulo, tutor en panel expandible.
**Accesibilidad**: contraste AA, foco visible, navegación por teclado, roles de estado, no depender solo de iconos, audio siempre opcional.

## 5. Shell universal de módulo
Cabecera: código y título correcto, qué aprenderás (1 frase), progreso real (n lecciones / práctica / resultados).
**Etapas del aula**:
1. **Aprender**: microlección visual; escuchar o leer; 1 idea dominante; 1 diagrama o ejemplo; 1 acción.
2. **Practicar**: caso de decisión interactivo, respuesta razonada y simulación; niveles de ayuda graduados.
3. **Aplicar**: datos reales del negocio, con clasificación explícita (confirmado, declarado, hipótesis, estimado, pendiente); ejecutar prompt profesional validado, sin copia manual.
4. **Resultados**: síntesis visual, semáforo justificado, hallazgo completo expandible, matriz de recomendaciones y contribución al expediente.
La evaluación aparece al concluir la lección y práctica. Puede reexplicar sin dar respuestas por adelantado.
**Microcopy**: verbo y siguiente acción; sin instrucciones kilométricas. Ejemplo: «Qué aprenderás» → «Escucha o lee» → «Ponlo a prueba» → «Aplícalo a tu negocio» → «Entiende tu resultado».

## 6. Visualización educativa
- Visuales de utilidad: árboles de causa, mapas cliente–canal, matrices de oferta, embudos, flujos de venta, cálculos de margen/ROI, barras de prioridad; todos con etiquetas y leyenda, no ilustración decorativa repetitiva.
- Diagramas implementables en HTML/CSS/SVG accesibles; su contenido parte de cálculos y datos estructurados.
- Ilustración editorial reservada a portada, transición y Tutor INITIUM. No videos obligatorios ni escenas fotográficas genéricas.

## 7. Tutor INITIUM: recomendación visual y ética
**Recomendación:** crear una **representación editorial ilustrada de Nat como autora del método**, NO otra mujer genérica, siempre que Nat lo apruebe. La diferenciación comercial viene de la autoría; evita sugerir que cada respuesta la está dando Nat en vivo.
- El alumno ve: «Tutor INITIUM · IA pedagógica basada en la metodología de Nat Moreno & Co.».
- Avatar: retrato editorial sobrio y de tamaño moderado; rostro femenino adulto, ropa profesional, expresión cálida, no figura infantil ni bot robótico.
- **Identidad real**: si se desea parecido reconocible, utilizar fotografías de Nat suministradas/autorizadas para esta aplicación. No afirmar semejanza, ni construirla desde un mockup generado de una mujer genérica.
- La voz podrá ser voz sintética neutra inicialmente. **No clonar voz de Nat** sin autorización explícita y muestras autorizadas; nunca representar tutor automático como llamada o atención personal en vivo.
- Opción B: avatar femenino editorial distinto y explícitamente ficticio, si Nat prioriza separar su imagen de la IA.
- Comportamiento: enseña conceptos, muestra ejemplos, pregunta y refuerza comprensión. No diagnostica ni firma decisiones, no responde exámenes, no inventa datos.
- Visualmente: ficha pequeña en un lateral o botón fijo «Preguntar al Tutor»; ventana expandible bajo demanda, no ocupar un tercio de la pantalla todo el tiempo.

## 8. Resultados con profundidad
**Vista rápida**: «Qué encontré», «Por qué importa», «Qué hacer primero» y «Qué falta confirmar».
**Vista completa**: hallazgos sin truncamientos, evidencias, impactos, posibles causas, confianza, responsables, plazos, métricas y riesgos.
**No equiparar ausencia de hallazgos con sano.**
**Expediente**: preservar resultados íntegros, estado de verificación y versiones; nunca recortar silenciosamente.
**Documentos**: portada, índice, capítulos consistentes, tablas legibles, notas de evidencia, objetivos y cronograma, identidad corporativa única; QA automatizada por secciones.
**Costos**: tutor y documentos medidos por tokens, con presupuesto de referencia US$15/alumno para IA textual sujeto a piloto; audio web inicialmente sin costo API, voz premium opcional.

## 9. Componentes reutilizables (implementación)
1. `brand-shell`: header, sidebar, responsive navigation, logo.
2. `module-route`: progreso real, lista compacta, continuar.
3. `learning-stepper`: etapas Aprender/Practicar/Aplicar/Resultados.
4. `lesson-card`: material didáctico, audio, ayudas, mini gráficos.
5. `simulation-card`: decisiones y feedback, estado individual por módulo.
6. `tutor-panel`: sugerencias de pregunta y chat con contexto, no evaluación automatizada.
7. `data-entry`: captura guiada, etiquetado de calidad de dato y fuentes.
8. `analysis-result`: hallazgos completos, trazabilidad, semáforos, recomendaciones.
9. `deliverable-viewer`: capítulos, índice, revisión, PDF real.
10. `feedback-state`: errores, guardado, carga, tareas incompletas.

## 10. Secuencia de implementación en rama protegida
1. Auditar identidad real y preparar assets. Crear tokens CSS reales.
2. Implementar shell de campus y módulo con **contenido existente**, sin alterar prompts.
3. Aplicar al Módulo 1, usar tutor de demostración y audio del navegador, validar tablet/móvil/escritorio.
4. Validar pasos y seguimiento con datos reales/simulados claramente separados.
5. Activar expediente y motor documental por capítulos en staging.
6. Integrar backend OpenAI con autenticación/limites en staging, probar 3 rutas y presupuesto.
7. Escalar a 23 módulos, pruebas del curso completo, certificación, descargas y pagos.
8. Integrar a `main` únicamente tras controles y aprobación.

## 11. Condiciones de aceptación para visual/UX
- 23 módulos en orden exacto; títulos no ficticios ni simplificados sin aprobación.
- En cada vista hay **una acción primaria**, y el alumno sabe qué hacer sin manual.
- Tutor presente pero nunca intrusivo, identificado como IA.
- Contenido no diluido por visuales; curso enseña, no solo entretiene.
- Branding correcto, logo original, reglas tipográficas y paleta basadas en manual.
- Contraste, móvil y teclado comprobados con pruebas.
- Resultados completos, evidencia y referencias entre módulos.
- Demo sin facturación ni exposición de secretos; producción sin cambios hasta QA.

## Primera implementación visual en rama de pruebas (2026-11-07)
- CSS de marca y navegación: `initium-ui.css` (base corporativa + violeta INITIUM + lavanda claro propuesto).
- Motor UX de cuatro etapas: `initium-ux.js`, ejecutado al renderizar Módulo 1.
- Campus actualizado para cargar CSS y JS y mostrar Aprender / Practicar / Aplicar / Resultados de forma progresiva sin cambiar prompts.
- Progreso general corregido para calcular porcentaje sobre 23 módulos, sin el divisor antiguo 19.
- Vista previa autónoma: `preview-campus.html`. No usa cuentas, expedientes reales ni API, así que es únicamente validación visual y pedagógica.
- El logo vertical original fue localizado visualmente en biblioteca, pero la biblioteca no permitió materializar el archivo binario para incorporarlo a GitHub. **Bloqueado hasta disponer de bytes autorizados.** El código no lo sustituye por un logo generado.
- El retrato editorial de Nat está aprobado como dirección visual, pero pendiente de una fotografía de referencia autorizada; el tutor se presenta textualmente y no finge ser Nat en persona.
- Verificación efectuada: sintaxis de scripts principales y externos; comparación del bloque de 23 prompts exactamente igual entre `main` y la rama. No se han ejecutado pruebas de navegador real ni end-to-end, ni se ha publicado a `main`.
