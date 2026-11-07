# TUTOR INITIUM — Integración y pruebas de aceptación
**Fecha:** 7 de noviembre de 2026
**Estado:** componente y código de servidor preparados en rama de pruebas; **servicio en vivo no desplegado**.

## Archivos creados
- `tutor-initium.js`: interfaz del tutor pedagógico reutilizable. Permite abrir/cerrar, explicación didáctica local, chat con entrada validada y hook a un endpoint seguro.
- `worker-tutor-openai.js`: Worker de referencia con API OpenAI Responses. No sustituye todavía el Worker Claude publicado. Rechaza peticiones sin origen autorizado, sin un JWT HS256 válido, sin configuración o sin rate limiter.
- `aula-initium.js`: seis microlecciones y ejercicios del Módulo 1, con narración del navegador.
- `preview-aula.html`: vista independiente de las microlecciones y tutor en **modo demostración**. No utiliza datos privados ni API.
- `index.html`: carga tutor y aula del Módulo 1. Los 23 prompts validados permanecen intactos.

## Diseño de la experiencia
**Aprender:** microlecciones por pasos; escuchar opcionalmente; cero videos.
**Comprender:** ejercicio de decisión y tutor pedagógico contextual.
**Aplicar:** prompt profesional intacto, generación de análisis de negocio.
**Interpretar:** hallazgo íntegro, semáforo y nivel de problema; análisis guardado automáticamente.
**Evaluar:** avance real, en vez de simular una clase vista. La política completa todavía está pendiente en los otros 22 módulos.

El tutor **no** ejecuta diagnósticos empresariales ni obtiene datos sensibles del expediente. En el piloto solo usa el contexto didáctico de la lección y preguntas del alumno. No muestra la respuesta correcta de ejercicios cerrados.

## Distinción de modos
**Modo demostración (implementado):** la interfaz del tutor abre, cierra y proporciona un texto pedagógico revisado de cada lección, **sin API ni costo**. No es IA conversacional real.
**Modo IA real (código de servidor preparado, no activado):** requiere autenticación de alumnos, JWT firmado por backend, configuración de Worker de staging, clave OpenAI en secreto, binding de rate limiting y presupuestos por alumno. No hay credenciales en el repositorio.
**Audio:** usa `speechSynthesis` del navegador; las voces, calidad y disponibilidad dependen del equipo.

## Checklist antes de habilitar el tutor real
1. Implementar inicio de sesión/identidad en el campus. No confiar en nombre escrito en formulario como identidad.
2. Implementar emisión segura de JWT HS256, claims `sub`, `aud=initium-one-lab`, `exp`, y refresh/revocación según política definida; no colocar el secreto de firma en el frontend.
3. Desplegar Worker bajo URL de staging; configurar `OPENAI_API_KEY`, `SESSION_HMAC_SECRET`, `ALLOWED_ORIGIN`, `TUTOR_MODEL`, `TUTOR_LIMITER` mediante configuración segura; ajustar límites por usuario y coste.
4. Configurar endpoint de tutor en frontend de staging: atributo `endpoint` de `INITIUM_TUTOR_CONFIG` y `window.initiumGetSessionToken` del mecanismo de sesión. Ninguno está conectado hoy.
5. Revisar CORS y dominios permitidos, límites de tamaño y consentimiento/privacidad, cuotas por alumno, antiabuso y revisión de logs sin datos sensibles.
6. Probar que el endpoint no contesta sin sesión o con JWT inválido/expirado, desde origen externo o cuando se excede la cuota.
7. Hacer pruebas de conversación, cambios de lección, interrupciones, explicación errónea y redirección correcta al material didáctico.
8. Medir tokens y costo real por alumno; establecer alertas de presupuesto sin cortar silenciosamente el aprendizaje.
9. No tocar `main` hasta contar con pruebas y aprobación.

## Pendientes de calidad y arquitectura
- Hacer tutor disponible en 23 módulos con contenidos pedagógicos aprobados, no solo M1.
- Sustituir por completo flujos antiguos de copiar/pegar, semáforos por palabras y uso exclusivo de `localStorage`.
- Documentos por capítulos, sin recortes y con identidad editorial Nat Moreno & Co.
- Auditoría accesibilidad móvil, privacidad y seguridad de usuario (no usar el prototipo como login o servicio de pago).
- Pruebas de extremo a extremo con tres rutas de negocio.
- Configuración real de OpenAI no realizada; Claude continúa siendo el motor de `main`.
