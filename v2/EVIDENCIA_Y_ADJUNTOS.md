# INITIUM ONE LAB V2 — Adjuntos y evidencia documental (23 módulos)

**Fecha de implementación:** 2026-11-08. **Estado:** biblioteca de adjuntos **local demostrativa** funcional; la ingesta segura y la extracción empresarial **no están conectadas**.

## Experiencia del alumno programada en V2

En cada campo del Módulo 1 se puede:
1. Escribir o pegar el texto completo.
2. Adjuntar varios archivos PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, CSV, TXT, PNG, JPG, JPEG, WEBP, HEIC o HEIF.
3. Tomar una fotografía con la cámara desde móviles compatibles.
4. Arrastrar y soltar archivos en navegadores compatibles.
5. Ver nombre, formato, tamaño y estado («local · sin analizar»); descargar originales o eliminar adjuntos.
6. Desplegar «Clasificar dato y añadir fuente» únicamente cuando se necesite distinguir documento, declaración, estimación, hipótesis o pendiente.

En los **otros 22 módulos** está ya disponible la misma biblioteca de adjuntos en la etapa **Aplicar**, vinculada al código de cada módulo. Su formulario profesional y analista todavía se integrarán de forma independiente.

La biblioteca usa `IndexedDB` y guarda los **archivos enteros**, no únicamente sus nombres. Los datos se limitan a **15 MB por archivo, 80 MB por navegador y 40 adjuntos por biblioteca** para evitar cargas locales descontroladas. Estos límites son del prototipo y deberán reconsiderarse tras medir costos y capacidad de almacenamiento comercial. Los datos son locales y podrían perderse al limpiar el sitio, usar modo privado o cambiar de dispositivo.

## Alcance verificado
- Los archivos y sus metadatos quedan asociados con `moduleCode` y `fieldId` (p. ej. `1/sales`, `4/_module`).
- La ficha exportable de M1 muestra el **inventario** de adjuntos, expresamente indicando que NO están contenidos en el HTML exportado ni han sido leídos por IA.
- El traspaso preliminar M1 → M1.5 lleva los metadatos, pero NO transfiere los binarios ni ejecuta extracción.
- Las pruebas en GitHub Actions revisan selección múltiple, compatibilidad de extensiones, deduplicación, asociación, descarga, eliminación y navegación. **Falta verificar interacciones visuales en navegadores reales** y especialmente permisos de cámara en iOS.

## Cómo lograremos hallazgos sustentados en archivos en el campus comercial

**Proceso obligatorio futuro:**
1. Alumno autenticado, consentimiento informado y autorización de uso de documentación empresarial.
2. Carga de archivos a almacenamiento privado por proyecto y campo (Cloudflare R2 u otro equivalente), con tipos y tamaños validados en servidor.
3. Antivirus/revisión de archivo, aislamiento del procesador y detección de formatos peligrosos, incluido contenido activo de Office.
4. Extracción y normalización de tablas, texto, hojas, páginas y fotos (con OCR cuando se requiera); si el archivo no se puede extraer, informar «requiere revisión manual», nunca inventar datos.
5. Guardar fuente exacta: nombre del archivo, pestaña/página, periodo, unidad, divisa, fecha y datos extraídos.
6. Contrastar contradicciones entre fuentes. Distinguir «documento aportado» de «dato contrastado» y solicitar aclaración cuando no haya concordancia.
7. Entregar al Analista INITIUM **solo contenido procesado y ligado a las áreas del módulo**; nunca ejecutar instrucciones incrustadas en documentos como órdenes del sistema.
8. Presentar hallazgos, hipótesis de causas, acciones y semáforos justificando la evidencia utilizada y citando fuentes. Los datos no disponibles deben figurar como vacíos de diagnóstico.
9. Conservar versiones, trazabilidad, permisos por alumno, borrado y plazo de retención. Los adjuntos no deben estar en un repositorio público ni en el navegador compartido como sistema comercial.

**Base del esquema:** `v2/backend/migrations/0002_evidence_attachments.sql`. Distingue `uploaded`, `extracting`, `extracted`, `failed`, `manual_review` y referencias de cada conclusión a su ubicación documental.

**No estamos vendiendo una funcionalidad que no existe.** El campus comercial no está listo hasta que se pruebe el circuito completo de carga → extracción → confirmación → análisis profesional → ficha → expediente persistente → entrega final.

## Prueba local del prototipo
Abrir Campus V2 → Módulo 1 → Aplicar → ingresar texto de ejemplo no sensible → seleccionar PDF, Word, Excel, PowerPoint o foto → comprobar inventario y que persiste al recargar en el mismo navegador → eliminar o descargar → Resultados → descargar ficha y comprobar que contiene el manifiesto documental. En los otros módulos, abrir Aplicar para encontrar el cargador modular.

**Aviso de privacidad:** la V2 es un prototipo público sin acceso por alumno; no introducir datos privados, secretos comerciales ni documentos reales de clientes.
