# INITIUM ONE LAB — Arquitectura educativa objetivo (decisión 2026-11-07)

**Estatus:** especificación de producto definida; no implica que las funciones estén desplegadas ni configuradas. **Rama:** `feature/aula-interactiva-modulo-1`. **Producción:** no modificar `main` antes de pruebas.

## Decisión de producto

INITIUM ONE LAB será una formación empresarial autónoma en **23 módulos**, sin videos obligatorios. Cada módulo tendrá:
1. **Aprender:** microlecciones estructuradas, lectura de baja fricción, visualizaciones y audio opcional (reproducción con control de pausa y velocidad cuando el navegador lo permita).
2. **Comprender:** Tutor INITIUM de IA contextual al módulo, para preguntas, reformulaciones, ejemplos y recuperación de comprensión. No da por comprobadas hipótesis.
3. **Decidir:** simulaciones empresariales con escenarios, alternativas, explicación de efectos y evaluación de comprensión. Simulaciones deterministas primero; apoyo de IA en ejercicios abiertos cuando aporte valor.
4. **Aplicar:** prompt profesional original validado para el análisis real del negocio, según tipo de alumno (negocio en marcha, lanzamiento, idea desde cero).
5. **Interpretar:** dashboard de resultados, hallazgos íntegros, evidencia, semáforo razonado, prioridades y soluciones.
6. **Consolidar:** evaluación y guardado estructurado para los módulos posteriores, hasta entregables finales.

**Regla de diseño:** el alumno debe poder completar actividades en orden sin aprender a utilizar un chatbot, ni ver simultáneamente tres columnas saturadas. Vista principal con pestañas/etapas Aprender, Practicar y Resultados. Tutor disponible de forma no invasiva en contexto. Audio y texto equivalentes, sin exigir escuchar para aprobar. Controles accesibles y móviles.

## Roles de IA, separación obligatoria
- **Tutor pedagógico:** `gpt-5.4-mini` como referencia inicial. Fuente: contenidos pedagógicos revisados del módulo y resumen aprobado del contexto. Preguntas y ejemplos; nunca inserta hipótesis en el expediente real como datos. Prohibido sustituir evaluaciones, responder por alumno o inventar cifras.
- **Analista profesional:** `gpt-5.4` como referencia inicial para análisis estratégicos complejos. Mantener INTACTOS los 23 prompts validados y la identidad profesional de cada uno. Entregar datos estructurados con evidencia, nivel de verificación, incertidumbre, semáforos y prioridades.
- **Ensamblador/revisor documental:** generación por capítulos, validación de coherencia, control de capítulos completos y conversión a PDF corporativo. No rehacer una sola respuesta gigantesca con cortes. Utilizar expediente documentado como fuente única de datos.
- **Simulaciones:** preguntas y ejercicios de decisión programados sin costo por intento; llamadas a tutor cuando hay dudas que necesitan explicación contextual.

## Arquitectura de software
- **Frontend:** campus web de GitHub; componentes pedagógicos reutilizables. Nada de dependencia de un LMS externo, avatares o video para la primera versión.
- **Backend:** Cloudflare Worker, a verificar y adaptar. El navegador NUNCA recibe la clave de OpenAI. Uso de secretos del servidor, control de autenticación, límites de solicitudes y registros de costo por alumno.
- **Alumnos:** autenticación y persistencia remota del progreso; seguridad por usuario con aislamiento de expedientes. No utilizar `localStorage` como único registro de avance. Posible almacén D1 u otro proveedor, previa verificación técnica.
- **Datos:** expediente empresarial con observaciones y fuentes, estimación, hipótesis, datos faltantes, hallazgos, decisiones y módulos. Versiones, timestamps, acceso restringido y política de privacidad.
- **Documentos:** salida por secciones, revisión de integridad, exportación PDF legible con identidad corporativa de Nat Moreno & Co.; evitar recortes y duplicaciones.
- **Audio fase de lanzamiento:** `speechSynthesis` del navegador, sin gasto de API y sin prometer una misma voz en todos los equipos. Incluir alternativa de lectura y avisar indisponibilidad. Evaluar narración preproducida después de pruebas de calidad.
- **Voz conversacional:** fuera del alcance inicial: no es indispensable y aumenta costo y complejidad.
- **Preparación para ventas:** pagos, derechos de acceso, protección de cuentas, recuperación y cumplimiento de privacidad, todos pendientes de implementación/pruebas.

## Política de aprendizaje
- Se aprueba por comprensión y aplicación, no por reproducción de audio ni por marcar casillas.
- Alumnos sin datos no quedan bloqueados por falta de información empresarial: continúan con hallazgo y tareas de validación; las cifras simuladas quedan siempre identificadas.
- El tutor no llena respuestas de las evaluaciones ni modifica resultados profesionales.
- Los ejercicios se adaptan a cada perfil y no confunden práctica educativa con información real.
- La formación no promete ventas, ROI, mejoría o aprendizaje garantizados.

## Costos estimados de API de texto (USD), tarifas comprobadas 2026-11-07
Fuentes:
- https://developers.openai.com/api/docs/models/gpt-5.4-mini: entrada $0.75 / millón de tokens, salida $4.50 / millón.
- https://developers.openai.com/api/docs/models/gpt-5.4: entrada $2.50 / millón, salida $15.00 / millón.

Escenario MODERADO por curso completo:
- Mini: 1,200,000 tokens entrada * $0.75/1M = $0.90; 180,000 salida * $4.50/1M = $0.81; subtotal $1.71.
- Avanzado: 350,000 entrada * $2.50/1M = $0.875; 90,000 salida * $15/1M = $1.35; subtotal $2.225.
- TOTAL = **$3.935 ≈ US$3.94** por alumno.

Escenario INTENSIVO:
- Mini: 3,000,000 entrada * $0.75/1M = $2.25; 500,000 salida * $4.50/1M = $2.25; subtotal $4.50.
- Avanzado: 1,000,000 entrada * $2.50/1M = $2.50; 250,000 salida * $15/1M = $3.75; subtotal $6.25.
- TOTAL = **US$10.75** por alumno.

**Presupuesto inicial de diseño:** reservar US$15 por alumno para texto y monitoreo. NO es un límite automático que produzca documentos cortados; definir políticas de uso, alertas, cuotas razonables, costo de reintentos y manejo de abuso. Costos NO medidos; requieren piloto completo. No incluye impuestos, infraestructura, persistencia, pasarela de pagos, almacenamiento, voz premium ni herramientas adicionales.

**No depender del TTS anterior:** documentación de OpenAI indica retiro de `tts-1`, `tts-1-hd` y `gpt-4o-mini-tts` el 2027-01-06. Fuente: https://developers.openai.com/api/docs/deprecations. No invertir en nueva integración con modelos en retiro. La primera versión usará voz del navegador.

## Roadmap de implementación
1. Esquema de datos, navegación y guards, más prototipo M1 y prueba de experiencia.
2. Tutor conectado a OpenAI en ambiente de staging, con reglas pedagógicas y medición por alumno.
3. Simulaciones y audio opcional disponibles para todos los módulos, desarrollo del contenido de los 23.
4. Motor documental por capítulos con control de calidad editorial, trazabilidad y exportación real.
5. Persistencia privada, pagos, pruebas con tres perfiles, costos y evaluación de lanzamiento.
6. Publicación solo después de validación y aprobación.

## Condiciones de aceptación
- Los 23 prompts originales se preservan textualmente; cambiar dependencias técnicas solo cuando sea imprescindible y documentar.
- En cada módulo, probar lector, audio cuando sea compatible, simulación, tutor, análisis, resultados, evaluación y avance.
- Ningún hallazgo o documento se corta silenciosamente; revisar `max_output_tokens`, fin por límite y completitud.
- Costos reales medidos en los tres perfiles y dos intensidades de uso; prueba del máximo por alumno antes de precio final.
- Integridad del expediente, privacidad, permisos y recuperación de sesión.
- Entregables estratégicos y creativos coherentes entre sí, con plantilla corporativa única y descargas reales.
- La nueva versión no toca producción sin revisión de cambios y pruebas de funcionamiento.
