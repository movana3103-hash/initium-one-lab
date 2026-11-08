/* Fuente canónica copiada sin modificaciones de la versión legacy de INITIUM ONE LAB.
 * NO alterar ni resumir los prompts validados: para nuevos requerimientos crear capas externas.
 * Fuente origen: index.html@main; 23 módulos completos, prompts, evaluaciones y metadatos.
 * Fecha de extracción: 2026-11-07.
 */
const M=[
  {
    c:"0",
    t:"Bienvenida y uso de IA",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 0: Si el alumno eligió 'marca desde cero', trabaja con caso de negocio hipotético pero marca todo como supuesto de trabajo. Si eligió 'negocio en marcha', exige datos reales y convierte vacíos en lista inicial de información pendiente. Advierte que el curso no avanza inventando respuestas; avanza identificando qué falta medir.

Actúa como estratega senior de marketing, ventas y planeación empresarial. Quiero iniciar una formación llamada INITIUM ONE LAB para construir mi propio diagnóstico y Plan Estratégico de Marketing aplicado a mi negocio real.

No me des respuestas genéricas. Primero ayúdame a ordenar la información base de mi negocio.

Mi negocio es: [describir negocio].
Mis productos o servicios son: [listar].
Mis ventas mensuales aproximadas son: [dato].
Mi ticket promedio es: [dato].
Mis canales actuales son: [Instagram, Facebook, WhatsApp, TikTok, YouTube, Google, LinkedIn, marketplace, ecommerce, tienda física, distribuidores, eventos, referidos, etc.].
Mi principal frustración de marketing, ventas o crecimiento es: [describir].
He trabajado antes con agencias, freelancers, marketplace, pauta, contenido o proveedores en: [describir].
Lo que quiero lograr con este curso es: [describir].

Necesito que me entregues un Dashboard Inicial INITIUM con:
1. Resumen del negocio.
2. Situación actual.
3. Problema aparente.
4. Preguntas clave antes de invertir más en marketing.
5. Señales de improvisación actual.
6. Riesgos de seguir ejecutando sin diagnóstico.
7. Información que me falta recopilar.
8. Primeras prioridades de claridad.
9. Cómo debo usar este dashboard durante el curso.

No inventes información. Si algo no está claro, márcalo como pendiente.`,
    f:`Mi negocio es: [describir negocio].
Mis productos o servicios son: [listar].
Mis ventas mensuales aproximadas son: [dato].
Mi ticket promedio es: [dato].
Mis canales actuales son: [listar].
Mi principal frustración de marketing, ventas o crecimiento es: [describir].
He trabajado antes con agencias, freelancers, marketplace, pauta, contenido o proveedores en: [describir].
Lo que quiero lograr con este programa es: [describir].`,
    fr:"arrancaste. La mayoría nunca llega aquí. El diagnóstico empieza ahora.",
    ha:"Antes de avanzar, necesitas tener claridad sobre tu negocio base. Si no completaste el módulo, los análisis siguientes no tendrán raíz real.",
    qp:"Un dueño de empresa con ventas regulares pero sin crecimiento contrata a una agencia. ¿Qué debería haber hecho ANTES de contratar?",
    qo:["Tener más seguidores en redes sociales","Haber definido su cliente ideal y su propuesta de valor con claridad","Invertir en pauta para generar más visibilidad","Cambiar el diseño de su marca para verse más profesional"],
    qc:1,
    qe:"El Método INITIUM establece que antes de invertir en ejecución, el negocio necesita claridad estratégica. Sin diagnóstico, cualquier ejecución es improvisación.",
    ps:5
  },
  {
    c:"1",
    t:"Diagnóstico real del negocio",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 1: Solicita y analiza el plan estratégico actual del alumno si existe. Si no existe, registra 'ausencia de plan estratégico' como hallazgo. Clasifica los objetivos actuales como objetivo real, meta, deseo, táctica o acción suelta. Desnuda el estado real del negocio sin culpar automáticamente a proveedores externos. Cuando menciones posibles fallas de agencia o proveedor, aclara si hay evidencia o si es hipótesis. Identifica qué acciones actuales son estrategia, táctica, canal, comunicación, medición o gasto.

Actúa como consultor estratégico de marketing, ventas, rentabilidad y planeación empresarial. Haz un diagnóstico real de mi negocio en estas 10 áreas:
1. Oferta. 2. Cliente. 3. Mercado. 4. Marca. 5. Canales. 6. Contenido/comunicación. 7. Venta. 8. Experiencia del cliente. 9. Métricas. 10. Rentabilidad.

Mi negocio vende: [describir].
Mis líneas de producto o servicio son: [listar].
Mis ventas mensuales aproximadas son: [dato].
Mi ticket promedio es: [dato].
Mis márgenes aproximados son: [dato si lo sé].
Mis canales actuales son: [listar].
Mi proceso de venta actual es: [describir].
He trabajado con agencias, freelancers, pauta, marketplace o proveedores en: [describir].
Mi principal problema actual es: [describir].

Necesito que identifiques: qué sí funciona, qué está desgastando resultados, dónde se pierde foco, dónde se pierde dinero o rentabilidad, qué decisiones se han tomado sin suficiente claridad, qué errores pueden ser míos como dueño, qué errores pueden venir de ejecución externa, señales de humo, información faltante y qué debería ordenar antes de invertir más.

Entrégame un Dashboard de Diagnóstico INITIUM con diagnóstico breve, hallazgos, cuello de botella aparente, errores internos posibles, errores externos posibles, señales de humo, riesgos de seguir igual, información faltante, prioridades de corrección, decisión recomendada antes de invertir más, semáforo por área (🟢🟡🔴) y nivel de problema.

No recomiendes más publicidad hasta revisar si oferta, cliente, canal, mensaje, venta, experiencia, margen y medición tienen sentido. No inventes datos. Distingue síntomas de causas.`,
    f:`Mi negocio vende: [describir].
Mis líneas de producto o servicio son: [listar].
Mis ventas mensuales aproximadas son: [dato].
Mi ticket promedio es: [dato].
Mis márgenes aproximados son: [dato si lo sé].
Mis canales actuales son: [listar].
Mi proceso de venta actual es: [describir].
He trabajado con agencias, freelancers, pauta, marketplace o proveedores en: [describir].
Mi principal problema actual es: [describir].`,
    fr:"ya tienes tu primer diagnóstico real. Eso vale más que meses de publicidad sin dirección.",
    ha:"El diagnóstico detecta síntomas y causas. Si hay áreas en rojo, son las que deben corregirse antes de invertir más en marketing.",
    qp:"Un negocio recibe visitas, likes y ventas por marketplace, pero el dueño 'no ve la caja'. ¿Qué revisarías primero?",
    qo:["Aumentar las ventas para que el volumen compense los costos","Hacer más descuentos para mover el inventario más rápido","Calcular ventas netas reales: descontar comisiones de marketplace, devoluciones, envíos y descuentos dados","Cambiar a otro marketplace con menos competencia"],
    qc:2,
    qe:"Las ventas brutas en marketplace no son lo mismo que las ventas netas. Hay que descontar comisiones (16-20% típicamente), devoluciones, envíos y descuentos. Muchos negocios descubren que su margen real es mínimo o negativo después de este cálculo.",
    ps:5
  },
  {
    c:"1.5",
    t:"Hallazgos iniciales: problema / solución",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 1.5: No cierres todavía el diagnóstico final. Solo identifica lo que ya se puede observar y lo que debe validarse. Para cada hallazgo indica si es dato faltante, contradicción, riesgo, error interno, posible error externo, oportunidad o debilidad. La salida de este módulo alimenta el árbol de objetivos del Módulo 10.5 y el diagnóstico integrado del 10.8.

Actúa como analista de hallazgos INITIUM. Usa mi Dashboard de Diagnóstico del Módulo 1: [pegar resultado].

Necesito que conviertas el diagnóstico en una Matriz de Hallazgos Iniciales.

Entrégame:
1. Hallazgos principales.
2. Tipo de hallazgo: dato faltante, contradicción, riesgo, error interno, posible error externo, oportunidad o debilidad.
3. Evidencia disponible.
4. Qué parte es dato real.
5. Qué parte es hipótesis.
6. Qué falta para confirmarlo.
7. Impacto probable en ventas, margen, cliente, canal, experiencia o medición.
8. Solución preliminar.
9. Qué no debo hacer todavía.
10. Prioridad: alta, media o baja.
11. Semáforo por hallazgo (🟢🟡🔴).`,
    f:`Mi Dashboard de Diagnóstico del Módulo 1 es: [pegar resultado completo].
Mis objetivos actuales del negocio son: [describir].
Lo que más me preocupa de mi negocio ahora mismo es: [describir].`,
    fr:"identificar el problema real es el primer acto de inteligencia estratégica. Ya lo hiciste.",
    ha:"Los hallazgos iniciales son el mapa de lo que debe corregirse antes de ejecutar. Si hay hallazgos en rojo, esos son los que frenan el negocio hoy.",
    qp:"Un negocio detecta 6 hallazgos en su diagnóstico inicial. Tres son datos faltantes y tres son riesgos reales. ¿Cuál debe ser el primer paso?",
    qo:["Resolver primero los riesgos reales porque representan problemas activos que ya están afectando el negocio","Resolver primero los datos faltantes porque sin información no se puede tomar ninguna decisión estratégica confiable","Contratar a alguien para que resuelva todos los hallazgos simultáneamente y no perder tiempo","Ignorar los datos faltantes y ejecutar el plan con la información disponible"],
    qc:1,
    qe:"Los datos faltantes son la base de cualquier decisión. Si no sabes tu margen real, tu costo de adquisición o de dónde vienen tus clientes, cualquier acción sobre los riesgos puede ir en la dirección equivocada. El Método INITIUM prioriza primero tener datos confiables antes de ejecutar soluciones.",
    ps:5
  },
  {
    c:"2",
    t:"Mercado, competencia y consumidor",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 2: No asumas mercado, competencia o consumidor si el alumno no entrega datos; formula hipótesis y rutas de validación. Diferencia cliente ideal, cliente actual, cliente rentable y cliente no conveniente. Incluye preguntas de investigación de bajo costo para validar el mercado antes de invertir.

Actúa como estratega de mercado, competencia, consumidor y comportamiento de compra. Ayúdame a entender el contexto real donde compite mi negocio.

Mi negocio vende: [describir]. Mi categoría o industria es: [describir]. Mis competidores directos son: [listar si los conozco]. Mis clientes actuales son: [describir]. Mis precios aproximados son: [listar]. Mis canales actuales son: [listar]. Mi modelo es: [B2B / B2C / B2P / mixto]. Lo que descubrí en mi diagnóstico del Módulo 1 es: [pegar resumen].

Analiza todos los canales posibles, no solo redes sociales. Considera canales digitales, offline, B2B, B2C, B2P, marketplace, buscadores, contenido largo, pauta, referidos, eventos, PR, aliados, distribuidores y ventas directas.

Construye un Dashboard de Mercado, Competencia y Consumidor con: lectura general de la categoría, competidores directos e indirectos, qué compara el cliente antes de comprar, objeciones, señales de confianza que necesita, dónde descubre soluciones, dónde busca con intención, dónde compara, dónde valida confianza, dónde prefiere comprar, dónde puede recomprar, qué canal sería un error priorizar, qué canal puede parecer atractivo por moda pero no necesariamente rentable, por qué sí pagaría, por qué no pagaría, hipótesis a validar, datos que no debo inventar, prioridades para entender mejor mi mercado, semáforo por área y nivel de problema.

No asumas que Instagram, TikTok, Google, LinkedIn o marketplace sirven para todo. Si algo es hipótesis, márcalo como hipótesis y dime cómo validarlo.`,
    f:`Mi negocio vende: [describir]. Mi categoría o industria es: [describir].
Mis competidores directos son: [listar si los conozco].
Mis competidores indirectos o sustitutos pueden ser: [listar].
Mis clientes actuales son: [describir].
Mis precios aproximados son: [listar].
Mi modelo es: [B2B / B2C / B2P / mixto].
Lo que descubrí en mi diagnóstico del Módulo 1 es: [pegar resumen].`,
    fr:"conocer tu mercado real es la ventaja que muy pocos tienen. Vas adelante.",
    ha:"El análisis de mercado muestra dónde está realmente el cliente y por qué canal conviene llegar a él. No todos los mercados viven en redes sociales.",
    qp:"Tu cliente ideal 'ya fue defraudado por promesas de marketing'. ¿Cuál es el primer paso para comunicarte con él?",
    qo:["Hacer más contenido de valor para ganarte su confianza antes de vender","Entender exactamente qué lo defraudó, qué busca ahora y cómo toma decisiones hoy","Invertir en pauta segmentada para llegar a él con mayor frecuencia","Ofrecer garantías y descuentos para eliminar su resistencia a comprar"],
    qc:1,
    qe:"Antes de comunicar, hay que comprender. El Método INITIUM parte del diagnóstico del cliente real, no de supuestos. Cada producto tiene un cliente que decide distinto.",
    ps:5
  },
  {
    c:"3",
    t:"Esencia de marca y posicionamiento",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 3: Distingue entre diferenciadores reales y diferenciadores no comprobados. No inventes atributos de marca; si la marca no ha demostrado algo, clasifícalo como promesa no validada. La salida de este módulo es la base para la estrategia creativa del Módulo 11.6.

Actúa como estratega senior de marca, posicionamiento y planeación empresarial. Ayúdame a definir la esencia estratégica de mi marca antes de construir contenido, campañas, pauta, marketplace o presencia multicanal.

No quiero una definición decorativa ni frases genéricas. Quiero una base clara que pueda sostener mi comunicación, propuesta de valor, experiencia de cliente y venta.

Mi negocio es: [describir]. Mis productos o servicios son: [listar]. Mi cliente ideal es: [describir]. Mis competidores principales son: [listar]. Mis precios son: [describir]. Mi forma actual de comunicar es: [describir]. Lo que quiero que el cliente piense de mi marca es: [describir]. Lo que NO quiero que mi marca parezca es: [describir]. Lo que sí puedo prometer y cumplir es: [describir]. Lo que descubrí en Módulo 1 y Módulo 2: [pegar resúmenes].

Construye un Dashboard de Esencia de Marca con: diagnóstico de marca actual, esencia en una frase, razón de ser, promesa central, propuesta de valor clara, diferenciadores reales, territorio de posicionamiento, qué lugar debe ocupar en la mente del cliente, tono de voz recomendado, palabras que sí puede usar, palabras que debe evitar, dirección visual recomendada, errores actuales de branding, riesgos si sigue comunicando sin esta claridad, cómo la esencia debe reflejarse en todos los canales, qué incoherencias pueden existir, qué debe corregir antes de construir parrillas o campañas, semáforo por área y nivel de problema.`,
    f:`Mi negocio es: [describir]. Mis productos o servicios son: [listar].
Mi cliente ideal es: [describir].
Mis competidores principales son: [listar].
Mis precios son: [describir].
Mi forma actual de comunicar es: [describir].
Lo que quiero que el cliente piense de mi marca es: [describir].
Lo que NO quiero que mi marca parezca es: [describir].
Lo que descubrí en Módulo 1 y Módulo 2: [pegar resúmenes].`,
    fr:"tu marca ya tiene una base estratégica. Ahora todo lo que comuniques tiene dirección.",
    ha:"La esencia de marca es la base de toda comunicación. Sin ella, el contenido puede ser bonito pero no estratégico.",
    qp:"Una empresa vende lo mismo que sus competidores al mismo precio. ¿Cuál es el primer paso estratégico para diferenciarse?",
    qo:["Bajar el precio para ser más competitiva en el mercado","Invertir en diseño y branding para verse más profesional","Identificar qué hace diferente su proceso, su resultado o su experiencia del cliente y comunicarlo con claridad","Abrir más canales de venta para llegar a más personas"],
    qc:2,
    qe:"La diferenciación no está en el precio ni en el diseño: está en el valor real que el negocio entrega y en cómo lo comunica. El posicionamiento surge de la claridad estratégica, no de la estética.",
    ps:5
  },
  {
    c:"4",
    t:"Oferta y líneas de negocio",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 4: No asumas margen si el alumno no lo conoce; marca 'margen desconocido' como hallazgo crítico. Identifica si la oferta está ordenada por negocio o solo por costumbre operativa. Distingue producto más vendido, producto más rentable, producto que posiciona y producto que drena recursos.

Actúa como estratega de oferta, arquitectura comercial y rentabilidad. Ayúdame a ordenar mis productos o servicios por función comercial.

Mi negocio vende: [describir]. Mis líneas de producto o servicio son: [listar]. Mis precios aproximados son: [listar]. Mis márgenes aproximados son: [si los sé]. Mis productos más vendidos son: [listar]. Mis más rentables son: [listar]. Los que más consumen tiempo u operación son: [listar]. Mis canales actuales de venta son: [listar]. Lo descubierto en Módulos 1, 2 y 3: [pegar resúmenes].

Clasifica cada línea según su función: entrada, margen, recurrencia, autoridad/posicionamiento, recompra, volumen, no conviene empujar, necesita ajuste antes de vender más.

Construye un Dashboard de Oferta y Líneas de Negocio con: función comercial, precio, margen estimado, cliente ideal por línea, propuesta de valor por línea, canal sugerido, mensaje principal, CTA recomendado, métrica principal a observar, riesgo de vender esa línea sin ajuste, relación con la esencia de marca, qué línea fortalece el posicionamiento, cuál puede debilitarlo, cuál priorizar en los próximos 30 días, cuál pausar o dejar en segundo plano, información faltante, semáforo por línea y nivel de problema.

No asumas que lo más vendido es lo más rentable. No confundas volumen con crecimiento.`,
    f:`Mi negocio vende: [describir].
Mis líneas de producto o servicio son: [listar con precios y márgenes si los sé].
Mis productos más vendidos son: [listar].
Mis productos más rentables son: [listar].
Los que más consumen tiempo u operación son: [listar].
Mis canales actuales de venta son: [listar].
Lo descubierto en Módulos 1, 2 y 3: [pegar resúmenes].`,
    fr:"ya sabes qué vender, a quién y con qué margen. Eso cambia las decisiones para siempre.",
    ha:"La oferta ordenada por función comercial revela qué línea impulsar y cuál revisar antes de invertir más.",
    qp:"Un negocio tiene un producto que vende mucho pero con margen del 8%. ¿Qué decisión estratégica tomarías?",
    qo:["Venderlo más para generar mayor volumen de ingresos","Subirle el precio inmediatamente sin analizar el mercado","Analizar si el margen puede mejorarse reduciendo costos o reposicionando el precio, y evaluar si conviene seguir empujándolo o reemplazarlo por una línea más rentable","Descontinuarlo para enfocarse solo en productos con margen alto"],
    qc:2,
    qe:"No todo lo que vende mucho conviene escalarlo. El Método INITIUM analiza la función comercial de cada línea: si no tiene margen suficiente, hay que corregirlo antes de invertir más en esa dirección.",
    ps:5
  },
  {
    c:"4.5",
    t:"Portafolio y Matriz BCG INITIUM",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 4.5: Si faltan datos de rentabilidad o demanda, clasifica la línea como 'incógnita' o 'hipótesis BCG', no como verdad. No recomiendes inversión fuerte en un producto si su margen no está confirmado. Indica qué dato mínimo convertiría una clasificación supuesta en clasificación real.

Actúa como estratega de portafolio y marketing, dentro de la metodología INITIUM ONE LAB. Mi objetivo no es elegir un solo producto para vender, sino entender mi portafolio completo y el papel de cada producto, para luego decidir con criterio cuánta inversión y qué canal merece cada uno.

Mi negocio es: [describir]. Mis líneas de negocio y productos son: [pegar resultado del Módulo 4].

Para cada producto:
- Rentabilidad real o margen aproximado: [dato o 'no lo sé'].
- Qué tanto se vende o lo buscan (demanda/tracción): [alta/media/baja].
- Tipo de cliente que lo compra: [describir].
- Precio y tipo de decisión de compra: [describir].

Construye un DASHBOARD DE PORTAFOLIO Y BCG INITIUM con:
1. Clasificación BCG adaptada (rentabilidad vs demanda): estrella, vaca lechera, interrogante o hueso.
2. Papel estratégico de cada producto.
3. Advertencia sobre productos que facturan mucho pero pueden ser huesos por baja rentabilidad.
4. Prioridad de inversión de marketing por producto, con su porqué.
5. Orientación de canal por producto: por dónde SÍ conviene venderlo y por dónde NO.
6. Qué información falta para afinar esta clasificación.

Para cada decisión de canal, explica el criterio en términos de dónde está el cliente, qué tipo de decisión tiene el producto y cómo afecta el margen. No clasifiques por facturación sino por rentabilidad real.`,
    f:`Mi negocio es: [describir].
Mis líneas de negocio y productos son: [pegar resultado del Módulo 4].
Para cada producto:
- Rentabilidad real o margen aproximado: [dato o 'no lo sé'].
- Qué tanto se vende o lo buscan: [alta/media/baja].
- Tipo de cliente que lo compra: [describir].
- Precio y tipo de decisión de compra: [describir].`,
    fr:"ya sabes qué productos merecen inversión y cuáles necesitan revisión primero.",
    ha:"La Matriz BCG adaptada revela qué productos son estrellas, vacas, interrogantes o huesos. Sin esto, la inversión en marketing puede ir al producto equivocado.",
    qp:"Un producto factura el 40% de los ingresos de una empresa pero tiene un margen neto del 5% después de costos operativos. ¿Cómo lo clasificarías en la Matriz BCG adaptada?",
    qo:["Estrella, porque genera el mayor volumen de ventas","Vaca lechera, porque da flujo constante aunque sea poco rentable","Hueso, porque factura mucho pero no genera rentabilidad real para el negocio","Interrogante, porque el mercado aún no lo conoce suficientemente"],
    qc:2,
    qe:"En la BCG adaptada al contexto PYME, un producto con alta facturación pero baja rentabilidad real es un hueso: consume recursos, tiempo y atención sin generar utilidad suficiente. La decisión es corregir el margen o reducir su protagonismo.",
    ps:5
  },
  {
    c:"5",
    t:"Cliente, intención y canales",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 5: Los canales son preliminares en esta etapa — se leen por intención y función, no como decisión final de parrilla. Señala qué canal parece atractivo por moda pero no necesariamente sirve al modelo. Indica qué debe existir antes de activar o escalar cada canal: mensaje, landing, seguimiento, medición, margen o contenido. Esta matriz alimenta los canales derivados del Módulo 11.7.

Actúa como estratega senior de growth marketing, canales y dirección de ventas. Necesito identificar qué canales realmente tienen sentido para mi negocio según cliente, línea de negocio, intención de compra, ticket, margen, ciclo de venta y capacidad de medición.

Mi negocio es: [describir]. Mis líneas de negocio son: [pegar Módulo 4]. Mi cliente ideal por línea es: [describir si ya lo sé]. Mi ticket promedio es: [dato]. Mi margen aproximado es: [dato si lo sé]. Mi ciclo de venta es: [inmediato / días / semanas / meses]. Mis canales actuales son: [listar]. Mis ventas actuales vienen de: [describir]. Lo descubierto en Módulos 2, 3 y 4: [pegar resúmenes].

Analiza todos los canales posibles: Instagram, Facebook, WhatsApp, TikTok, YouTube, Google Ads, Google Search, SEO, blog, email marketing, LinkedIn, marketplace, ecommerce, afiliados, influencers, PR, eventos, ferias, distribuidores, referidos, punto físico, prospección directa, alianzas, webinars y canales offline.

Para cada línea de negocio, entrega una Matriz Canal-Cliente-Intención con: cliente ideal, ticket, margen, ciclo de venta, intención (descubrimiento/comparación/decisión/compra/recompra), canal de descubrimiento, confianza, conversión, cierre y recompra recomendados, canal que NO priorizar, canal atractivo por moda pero que puede no convenir, riesgo de elegir mal, métrica principal, qué debe estar listo antes de invertir en ese canal, recomendación de prioridad 30 días, semáforo y nivel de problema.`,
    f:`Mi negocio es: [describir].
Mis líneas de negocio son: [pegar Módulo 4].
Mi cliente ideal por línea es: [describir].
Mi ticket promedio es: [dato].
Mi margen aproximado es: [dato si lo sé].
Mi ciclo de venta es: [inmediato / días / semanas / meses].
Mis canales actuales son: [listar].
Mis ventas actuales vienen de: [describir].
Lo descubierto en Módulos 2, 3 y 4: [pegar resúmenes].`,
    fr:"ya sabes dónde está tu cliente y qué canal conviene. Eso elimina el gasto a ciegas.",
    ha:"La matriz cliente-canal-intención revela por dónde realmente conviene llegar al cliente — que no siempre es por redes sociales.",
    qp:"Una empresa B2B de servicios profesionales quiere conseguir clientes nuevos. ¿Cuál canal priorizarías PRIMERO?",
    qo:["Instagram con contenido de valor diario para generar comunidad","TikTok para llegar a audiencias más jóvenes con potencial de viralidad","LinkedIn con contenido de autoridad + prospección directa a tomadores de decisión","Google Ads para capturar demanda activa de búsqueda"],
    qc:2,
    qe:"En B2B de servicios, el cliente decide por confianza y autoridad. LinkedIn permite posicionamiento de pensamiento + acceso directo a tomadores de decisión. Instagram puede complementar más tarde, pero no es el canal primario para convertir en servicios B2B de alto ticket.",
    ps:5
  },
  {
    c:"6",
    t:"Auditoría de redes sociales",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 6 — Auditoría de redes: Audita redes como evidencia de ejecución actual, no como centro del marketing. No generes parrilla todavía. Solo detecta brechas entre lo que existe y lo que el negocio necesita corregir. Si no hay métricas, convierte esa ausencia en hallazgo de medición. Identifica qué piezas se pueden conservar, ajustar o pausar.

Actúa como auditor estratégico de redes sociales y contenido, dentro de la metodología INITIUM ONE LAB. No vas a hacer una auditoría de vanidad ni una lista de 'mejores prácticas' genéricas. Vas a comparar lo que existe hoy en mis redes contra lo que ya definí: mi esencia de marca, mi posicionamiento y mi cliente ideal.

Mi negocio es: [describir]. Mi esencia de marca es: [pegar Módulo 3]. Mi cliente ideal es: [pegar Módulo 5]. Mi línea de negocio prioritaria es: [pegar Módulo 4].

Mis redes sociales activas son: [usuario o URL de Instagram, Facebook, TikTok, LinkedIn, YouTube, etc.].

Datos disponibles: Seguidores actuales, publicaciones por semana, alcance promedio, engagement rate, 3 publicaciones con mejor desempeño reciente, 3 con peor desempeño, mensajes o consultas por mes, ventas atribuibles a redes, inversión en pauta, lo que sientes que no funciona.

Construye un Dashboard de Auditoría de Redes INITIUM con: estado actual por red (bio, link, destino, coherencia visual), coherencia entre lo publicado y mi esencia/cliente/línea prioritaria, qué porcentaje del contenido corresponde a la línea prioritaria, tipo de contenido predominante, qué falta por completo, uso de CTA, lectura de métricas sin vanidad, brecha principal entre lo que existe y lo que el negocio necesita, posibles causas de la brecha, riesgo de seguir sin corregir, tres oportunidades de mejora concretas, qué no conviene pautar todavía, información faltante, semáforo por red y nivel de problema de ejecución.`,
    f:`Mi negocio es: [describir].
Mi esencia de marca es: [pegar Módulo 3].
Mi cliente ideal es: [pegar Módulo 5].
Mi línea de negocio prioritaria es: [pegar Módulo 4].
Mis redes sociales activas son: [usuario o URL].
Seguidores actuales: [dato]. Publicaciones por semana: [dato].
Alcance promedio: [dato]. Engagement rate: [dato].
3 publicaciones con mejor desempeño: [describir].
3 con peor desempeño: [describir].
Inversión en pauta: [dato]. Ventas atribuibles a redes: [dato].`,
    fr:"ya auditaste lo que existe. Ahora sabes qué mejorar y qué no repetir.",
    ha:"La auditoría revela la brecha entre lo que se publica y lo que el negocio necesita comunicar. Sin esto, producir más contenido es solo más ruido.",
    qp:"Una cuenta de Instagram tiene 15k seguidores, alto alcance pero 0 ventas directas atribuibles. ¿Cuál es el primer paso?",
    qo:["Hacer más reels para aumentar el alcance y llegar a más personas potenciales","Auditar si el contenido tiene CTA claro, si el perfil tiene link funcional y si lo que se comunica conecta con la intención de compra","Invertir en pauta para monetizar la audiencia existente","Cambiar el tipo de contenido a videos más cortos y dinámicos"],
    qc:1,
    qe:"El alcance sin conversión indica una brecha entre contenido y venta. Antes de pautar o producir más, hay que revisar si existe un camino claro desde el contenido hasta la compra: CTA, link funcional, oferta visible y mensaje alineado con intención.",
    ps:5
  },
  {
    c:"7",
    t:"Métricas que sí importan",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 7 — Métricas: Conecta cada métrica con un objetivo posible. Si no hay objetivo claro, marca la medición como incompleta. Distingue métrica de vanidad, señal intermedia y resultado de negocio. Indica qué métricas debe comenzar a registrar desde hoy para poder evaluar mejor el plan posterior.

Actúa como estratega de medición de marketing y negocios, dentro de la metodología INITIUM ONE LAB. Tu tarea no es darme una lista de métricas genéricas: es ayudarme a entender cuáles métricas específicas son las que realmente indican si mi marketing está funcionando para mi tipo de negocio, mis canales y mis líneas de negocio.

Mi negocio es: [describir]. Mis canales actuales son: [listar]. Mis líneas de negocio son: [pegar Módulo 4]. Mi tipo de negocio es: [B2B / B2C / B2P / retail / servicios / ecommerce / mixto]. Lo que actualmente mido es: [listar o 'nada'].

Construye un Dashboard de Métricas INITIUM con:
1. Qué tipo de negocio soy y qué métricas le corresponden realmente.
2. Las 5 métricas más importantes para mi negocio.
3. Métricas de vanidad que debo dejar de usar como indicador de éxito.
4. Qué herramientas mínimas necesito para medir bien.
5. Cómo armar un tablero de control simple para revisar semanalmente.
6. Qué métrica indica que mi contenido está funcionando para venta.
7. Qué métrica indica que mi canal de venta está fallando.
8. Qué debo medir antes de invertir más en pauta.
9. Semáforo de medición actual.
10. Nivel de problema de medición.`,
    f:`Mi negocio es: [describir].
Mis canales actuales son: [listar].
Mis líneas de negocio son: [pegar Módulo 4].
Mi tipo de negocio es: [B2B / B2C / B2P / retail / servicios / ecommerce / mixto].
Lo que actualmente mido es: [listar o 'nada'].`,
    fr:"ya sabes qué números importan. La mayoría mide lo que se ve, no lo que decide.",
    ha:"Medir las métricas correctas protege la inversión. Medir solo likes y alcance es como medir el nivel de aceite del carro con el velocímetro.",
    qp:"Una empresa invierte $10,000 MXN en pauta y obtiene 50,000 impresiones y 2,000 clics. ¿Cuál es la métrica más importante para evaluar si la pauta funcionó?",
    qo:["Las impresiones totales obtenidas, porque muestran el alcance de la campaña","Los clics totales, porque indican que la gente se interesó en el anuncio","El costo por resultado relevante: cuántas ventas, leads o conversiones generó la inversión y a qué costo cada una","El engagement rate del anuncio, porque indica si el contenido resonó con la audiencia"],
    qc:2,
    qe:"Las impresiones y los clics son indicadores intermedios, no resultados de negocio. La métrica que importa es cuántas conversiones reales generó la inversión y a qué costo. Sin eso, no puedes saber si la pauta funcionó.",
    ps:5
  },
  {
    c:"8",
    t:"Ecosistema conectado",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 8: El análisis debe demostrar dónde se pierde trazabilidad: contenido, canal, conversación, venta, margen, recompra o aprendizaje comercial. Si no hay GA4, Search Console, GTM, Pixel, CRM o registro de origen, no lo inventes: márcalo como punto de conexión pendiente. Define qué debe pedir el alumno a programador, agencia, trafficker, community, vendedor o equipo interno para medir mejor.

Actúa como arquitecto de ecosistema de marketing y ventas multicanal. Ayúdame a revisar cómo deben conectarse mis canales para atraer, convertir, vender, medir y mejorar rentabilidad.

Mi negocio vende: [describir]. Mis líneas de negocio son: [listar]. Mis canales actuales son: [listar todos]. Actualmente los clientes llegan por: [describir]. Actualmente vendo por: [WhatsApp, web, marketplace, llamada, tienda, DM, formulario, distribuidor, etc.]. Actualmente mido: [ventas, leads, clics, ROAS, ROI, margen, nada, etc.]. Mi línea prioritaria es: [pegar Módulo 4]. Mi matriz cliente-canal-intención es: [pegar Módulo 5].

Construye un Dashboard de Ecosistema Comercial con: función de cada canal, cuáles no están conectados correctamente, qué información debe estar en mi web/landing/ecommerce/ficha marketplace, cómo debe estar configurado WhatsApp o CRM, qué CTA debe tener cada canal, qué debo medir en cada punto, cómo registrar de dónde vino cada cliente, errores que pueden impedir medir retorno, errores que pueden impedir medir margen real, qué debo pedirle a una agencia/freelance/equipo, qué ajustes básicos debo hacer antes de pautar o escalar, prioridades de conexión para los próximos 30 días, semáforo por canal y nivel de problema.

No asumas que publicar basta. El contenido debe llevar a un lugar y ese lugar debe poder convertir, medir y sostener experiencia.`,
    f:`Mi negocio vende: [describir].
Mis canales actuales son: [listar todos].
Actualmente los clientes llegan por: [describir].
Actualmente vendo por: [describir].
Actualmente mido: [ventas, leads, clics, ROAS, ROI, margen, nada, etc.].
Mi línea prioritaria es: [pegar Módulo 4].
Mi matriz cliente-canal-intención es: [pegar Módulo 5].`,
    fr:"tu ecosistema ya tiene lógica. Los canales conectados venden más que los canales solos.",
    ha:"Un ecosistema desconectado impide saber qué canal convierte y cuál drena el dinero.",
    qp:"Una empresa tiene Instagram activo, WhatsApp Business y una página web. Los tres trabajan de forma independiente sin conectarse. ¿Cuál es el riesgo principal?",
    qo:["Que el cliente se confunda y no sepa por dónde contactar a la empresa","Que no pueda rastrear de dónde vienen sus clientes ni medir qué canal convierte realmente","Que los tres canales compitan entre sí y generen mensajes inconsistentes","Que el gasto operativo de mantener tres canales sea difícil de justificar financieramente"],
    qc:1,
    qe:"Un ecosistema desconectado impide la medición real. Si no sabes de dónde vienen tus clientes, no puedes saber qué canal invierte bien, qué canal falla y dónde debe ir el próximo peso de marketing.",
    ps:5
  },
  {
    c:"9",
    t:"Ventas, seguimiento y experiencia",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 9: Distingue lead malo de proceso comercial débil. Si no existe registro de fuente, seguimiento o motivo de pérdida, márcalo como hallazgo comercial. No uses urgencia falsa ni manipulación. Conecta postventa con recompra, testimonio y referido.

Actúa como estratega de ventas, conversación, seguimiento y experiencia del cliente. Ayúdame a construir un flujo de venta y experiencia para cada línea de negocio y canal.

Mi negocio es: [describir]. Mis líneas de negocio son: [pegar Módulo 4]. Mi cliente ideal por línea es: [pegar Módulo 5]. Mis canales de venta son: [WhatsApp, DM, llamada, web, ecommerce, marketplace, tienda física, distribuidor, formulario, reunión, email, etc.]. Mis clientes suelen preguntar: [listar]. Mis objeciones frecuentes son: [precio, tiempo, confianza, comparación, urgencia, garantía, resultados, etc.]. Mi proceso actual después del pago es: [describir]. Mi postventa actual es: [describir]. Mi principal problema es: [describir].

Construye un Dashboard de Venta, Seguimiento y Experiencia con: mensaje de bienvenida por canal, preguntas de diagnóstico, parámetros para recomendar una opción, explicación de valor, respuestas a objeciones de precio/confianza/tiempo/comparación, CTA de cierre, seguimientos a 24h y 48h, cierre amable si no compra, datos a registrar de cada prospecto, confirmación después del pago, mensaje de bienvenida como cliente, instrucciones postventa, momento para pedir testimonio, preguntas para buen testimonio, oportunidad de recompra y referido, errores de experiencia que pueden estar afectando ventas, semáforo y nivel de problema.

No uses manipulación, urgencia falsa ni presión agresiva.`,
    f:`Mi negocio es: [describir].
Mis líneas de negocio son: [pegar Módulo 4].
Mi cliente ideal por línea es: [pegar Módulo 5].
Mis canales de venta son: [listar].
Mis clientes suelen preguntar: [listar].
Mis objeciones frecuentes son: [listar].
Mi proceso actual después del pago es: [describir].
Mi principal problema de ventas es: [describir].`,
    fr:"ya tienes un flujo de venta real. Eso convierte más sin invertir más.",
    ha:"El proceso de venta define cuántos prospectos se convierten en clientes. Sin proceso, el problema no es el canal sino la conversión.",
    qp:"Un negocio tiene muchos prospectos que preguntan por WhatsApp pero pocos cierran. ¿Cuál es el primer paso del diagnóstico?",
    qo:["Bajar el precio para reducir la fricción en la decisión de compra","Revisar si el proceso de respuesta tiene diagnóstico, propuesta de valor clara y seguimiento estructurado después de la primera respuesta","Invertir en más pauta para traer mayor volumen de prospectos que compensen la baja conversión","Cambiar el canal de venta a uno donde el cliente ya llegue más decidido a comprar"],
    qc:1,
    qe:"La mayoría de los cierres perdidos no son de precio: son de proceso. Antes de bajar precios o traer más leads, hay que diagnosticar si existe un script de respuesta, si se hace seguimiento y si la propuesta de valor se comunica con claridad en la conversación.",
    ps:5
  },
  {
    c:"9.5",
    t:"ROAS, ROI y madurez de datos",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 9.5: Audita si el alumno calculó ROAS o ROI correctamente. Si usa ventas brutas como si fueran utilidad, corrígelo. Si no hay atribución de ventas a pauta, marca el ROAS como estimado o no calculable. Si faltan costos de producto, descuentos, devoluciones, comisiones, envíos, equipo o herramientas, marca el ROI como incompleto. Entrega Ruta A si hay datos reales y Ruta B si debe aprender con caso ejemplo mientras construye medición.

Actúa como asesor financiero y de medición de marketing, dentro de la metodología INITIUM ONE LAB. Tu trabajo aquí no es calcular todavía mi rentabilidad, sino ayudarme a entender si de verdad puedo medir mi marketing.

Mi negocio es: [describir]. Mi tipo de negocio es: [retail físico / ecommerce / mixto / B2B / servicios]. Mi situación es: [negocio establecido con histórico de ventas / producto en lanzamiento sin histórico]. Mis líneas de negocio son: [pegar Módulo 4].

Responde mi test de madurez de datos (sí o no para cada punto):
1. Registro el origen de cada venta o lead.
2. Sé cuánto invierto en publicidad por canal y por periodo.
3. Conozco el costo real de mi producto o servicio por línea.
4. Conozco mis costos comerciales (comisiones, envíos, devoluciones, descuentos).
5. Puedo separar ventas brutas de ventas netas.
6. Tengo forma de saber qué campaña generó qué venta.
7. Reviso estos números de forma periódica.

Entrega un DASHBOARD DE MADUREZ DE MEDICIÓN INITIUM con: explicación breve de ROAS y ROI para mi tipo de negocio, ejemplo numérico donde ROAS se ve bien pero ROI puede no serlo, mi nivel de madurez (verde/amarillo/rojo), qué datos sí tengo para medir, qué datos me faltan en orden de importancia, ruta recomendada (A: analizar con datos reales / B: aprender con caso ejemplo y construir plan de medición), plan de implementación de medición, qué NO debo hacer hasta tener estos datos.`,
    f:`Mi negocio es: [describir].
Mi tipo de negocio es: [retail físico / ecommerce / mixto / B2B / servicios].
Mis líneas de negocio son: [pegar Módulo 4].
Test de madurez de datos:
1. Registro el origen de cada venta o lead: [sí/no].
2. Sé cuánto invierto en publicidad por canal: [sí/no].
3. Conozco el costo real de mi producto por línea: [sí/no].
4. Conozco mis costos comerciales: [sí/no].
5. Puedo separar ventas brutas de ventas netas: [sí/no].
6. Sé qué campaña generó qué venta: [sí/no].
7. Reviso estos números periódicamente: [sí/no].`,
    fr:"entiendes ROAS y ROI. Eso te protege de invertir a ciegas y de caer en promesas vacías.",
    ha:"Sin datos confiables, cualquier cálculo de ROAS o ROI es una ilusión. Este módulo revela si puedes medir o si necesitas construir esa capacidad primero.",
    qp:"Una campaña de publicidad tiene un ROAS de 4x. ¿Significa que la campaña fue rentable?",
    qo:["Sí, porque generó 4 veces lo invertido, lo que siempre es positivo para el negocio","Depende: el ROAS mide ingresos sobre inversión publicitaria, pero no descuenta costo del producto, operación, logística ni otros gastos. Puede haber ROAS alto con ROI negativo","No, porque un ROAS rentable para cualquier negocio debe ser mínimo de 6x o más","Sí, mientras la campaña supere el 3x de ROAS siempre es rentable independientemente del margen"],
    qc:1,
    qe:"ROAS y ROI no son lo mismo. ROAS mide el retorno sobre la inversión publicitaria sin descontar costos del producto ni operación. Un negocio con margen del 20% necesita un ROAS mucho mayor al de uno con margen del 60% para ser rentable. Siempre calcula ambos.",
    ps:5
  },
  {
    c:"10",
    t:"Inversión y rentabilidad real",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 10: Valida cada cálculo antes de usarlo para decidir. Si el alumno calcula mal PVP, PDV, markup, margen, ROAS o ROI, indica dónde está el error y cómo corregirlo. Distingue ventas brutas, ventas netas, utilidad bruta, utilidad neta aproximada y caja real. En marketplace, revisa comisiones, descuentos, publicidad interna, envíos, devoluciones, empaque y tiempo operativo antes de recomendar escalar.

Actúa como estratega senior de rentabilidad, pauta, marketplace, pricing, ventas y medición.

No confundas ventas con utilidad. No confundas ROAS con ROI. No confundas volumen con crecimiento real.

Mi negocio es: [describir]. Mis líneas de negocio son: [pegar Módulo 4]. Mis canales actuales de venta son: [listar]. Mis precios de venta al público (PVP) son: [listar por línea]. Mi costo de producto o prestación por línea es: [dato]. Mi margen bruto aproximado por línea es: [dato si lo sé]. Mis ventas brutas y netas por canal son: [dato si lo sé]. Mis descuentos, devoluciones, costos de envío, comisiones marketplace o pasarela son: [datos]. Mi inversión en pauta, contenido/producción/agencia, equipo comercial, herramientas son: [datos]. Mi principal problema actual es: [describir].

Construye un Dashboard de Inversión y Rentabilidad INITIUM con análisis por línea y canal, riesgo de caja, canal que parece funcionar pero puede estar drenando margen, canal rentable, canal a pausar/optimizar/escalar con condiciones, información faltante, decisiones a no tomar sin más datos, qué pedirle a agencia/freelance/marketplace manager, parámetros para pausar/ajustar/escalar, semáforo y nivel de problema.

Fórmulas: Ventas netas = brutas - descuentos - devoluciones. Markup = (precio - costo) / costo. Margen bruto = (precio - costo) / precio. ROAS = ingresos atribuidos / inversión publicitaria. ROI aproximado = utilidad neta / inversión total.`,
    f:`Mi negocio es: [describir].
Mis líneas de negocio son: [pegar Módulo 4].
Mis precios de venta al público son: [listar por línea].
Mi costo de producto o prestación por línea es: [dato].
Mis ventas brutas y netas por canal son: [dato si lo sé].
Mis descuentos, devoluciones, costos de envío, comisiones marketplace o pasarela son: [datos].
Mi inversión en pauta, producción/agencia, equipo y herramientas son: [datos].
Mi principal problema actual es: [describir].`,
    fr:"ya sabes si tu inversión es rentable. Eso es lo que más duele ver — y lo más valioso de saber.",
    ha:"La rentabilidad real revela si el negocio gana o solo factura. Muchos negocios con ventas altas tienen utilidad mínima o negativa.",
    qp:"Una empresa gasta $20,000 MXN/mes en pauta y genera $80,000 en ventas brutas. Su margen bruto es del 25%. ¿El negocio está ganando o perdiendo con esa pauta?",
    qo:["Ganando, porque el ROAS de 4x supera la inversión publicitaria con creces","Necesita más información: hay que descontar costo del producto, costos operativos y otros gastos para saber si hay utilidad real","Perdiendo, porque el 25% de margen en $80,000 da solo $20,000 que es exactamente lo que invirtió en pauta","Ganando, porque cualquier ROAS mayor a 3x es considerado exitoso en marketing digital"],
    qc:1,
    qe:"Con margen del 25% sobre $80,000 en ventas, la utilidad bruta es $20,000 — exactamente lo que se gastó en pauta. Antes de sumar costos operativos, el negocio está en cero. El ROAS de 4x no garantiza rentabilidad.",
    ps:5
  },
  {
    c:"10.5",
    t:"Objetivos reales sugeridos",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 10.5: Si el alumno dice 'quiero vender más', tradúcelo en objetivos reales y separa deseo, meta, objetivo y táctica. No definas metas numéricas si no hay datos suficientes; marca esas metas como pendientes de validación. Construye árbol de objetivos conectado al diagnóstico, hallazgos, rentabilidad, canal y capacidad real de ejecución.

Actúa como arquitecto de objetivos de marketing y planeación empresarial.

Insumos:
Diagnóstico inicial: [pegar Módulo 1].
Hallazgos iniciales: [pegar Módulo 1.5].
Mercado: [pegar Módulo 2].
Marca: [pegar Módulo 3].
Oferta y portafolio: [pegar Módulos 4 y 4.5].
Canales, redes, métricas, ecosistema, ventas y rentabilidad: [pegar Módulos 5 a 10].
Mis objetivos actuales, tal como los decía antes del curso: [describir].

Entrégame un Árbol de Objetivos INITIUM con:
1. Qué objetivos actuales en realidad son deseos, metas, tácticas o acciones.
2. Objetivo empresarial sugerido.
3. Objetivos estratégicos.
4. Objetivos de marketing.
5. Objetivos de venta.
6. Objetivos de comunicación.
7. Objetivos de medición.
8. Metas cuantitativas posibles, solo si hay datos.
9. Metas que no deben definirse todavía por falta de información.
10. Objetivos SMART formulados con base real.
11. Tácticas que podrían servir a cada objetivo.
12. Métrica principal por objetivo.
13. Riesgos de perseguir objetivos mal formulados.
14. Semáforo de claridad de objetivos.`,
    f:`Mis objetivos actuales, tal como los decía antes del curso: [describir].
Diagnóstico: [pegar Módulo 1]. Hallazgos: [pegar Módulo 1.5].
Mercado: [pegar Módulo 2]. Marca: [pegar Módulo 3].
Oferta y portafolio: [pegar Módulos 4 y 4.5].
Canales, métricas, ecosistema, ventas y rentabilidad: [pegar Módulos 5 a 10].`,
    fr:"ya tienes objetivos reales. La mayoría persigue deseos disfrazados de metas. Tú ya no.",
    ha:"Sin objetivos claros, el plan de marketing no tiene norte. Este módulo convierte los deseos en objetivos reales y accionables.",
    qp:"Un dueño de empresa dice 'mi objetivo es vender más este año'. ¿Qué problema estratégico tiene ese objetivo?",
    qo:["Ninguno — es un objetivo claro y motivador que cualquier empresa debería tener","No es un objetivo: es un deseo. No tiene métrica, plazo, punto de partida ni define qué línea, canal o cliente se va a priorizar","Es demasiado conservador — un objetivo bien formulado debería tener un porcentaje de crecimiento específico","El problema es que no menciona el canal por el que se van a generar esas ventas adicionales"],
    qc:1,
    qe:"Un objetivo sin métrica, sin plazo y sin contexto es un deseo. El Método INITIUM construye objetivos SMART conectados al diagnóstico real: qué línea, qué cliente, por qué canal, con qué recurso y en cuánto tiempo. Sin esos elementos, el plan no puede medir su propio éxito.",
    ps:5
  },
  {
    c:"10.8",
    t:"Tu Diagnóstico INITIUM",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 10.8: Integra los módulos en el nuevo orden: diagnóstico, hallazgos iniciales, mercado, marca, oferta, portafolio, canales, auditoría de redes, métricas, ecosistema, ventas, medición, rentabilidad y objetivos. No copies módulos: interpreta, depura y jerarquiza. El cuello de botella debe presentarse como confirmado solo si hay datos suficientes; si no, como probable. Incluye qué no debe seguir pagando el alumno sin corregir antes.

Actúa como consultor estratégico senior que está en la junta final de diagnóstico con tu cliente, dentro de la metodología INITIUM ONE LAB.

Aquí está todo lo que hemos trabajado en los módulos anteriores: [pegar o resumir los resultados de los módulos 1 al 10.5].

Construye el Diagnóstico INITIUM siguiendo esta lógica:
1. RADIOGRAFÍA: muestra lo bueno y lo malo con la misma honestidad.
2. Clasifica las áreas en SANO (🟢), EN RIESGO (🟡) y ENFERMO (🔴).
3. Identifica el problema raíz, distinguiendo síntoma de causa.
4. Señala las fortalezas reales del negocio.
5. Evalúa si el negocio tiene objetivos claros más allá de 'vender más'.
6. Da un nivel de problema general (1, 2 o 3) con su justificación.
7. Cierra recordando que este diagnóstico es la base del Plan de Marketing.

INSTRUCCIÓN DE FORMATO CRÍTICA: Consultoría estratégica de Nat Moreno & Co., NO copia de módulos. No copies y pegues. Interpreta, depura, jerarquiza. Cada hallazgo debe decir: qué se detectó, por qué importa, qué puede pasar si no se corrige y cómo mejorar.`,
    f:`Diagnóstico: [pegar Módulo 1]. Hallazgos: [pegar Módulo 1.5].
Mercado: [pegar Módulo 2]. Marca: [pegar Módulo 3].
Oferta: [pegar Módulo 4]. Portafolio: [pegar Módulo 4.5].
Canales: [pegar Módulo 5]. Auditoría de redes: [pegar Módulo 6].
Métricas: [pegar Módulo 7]. Ecosistema: [pegar Módulo 8].
Ventas: [pegar Módulo 9]. ROAS/ROI: [pegar Módulo 9.5].
Rentabilidad: [pegar Módulo 10]. Objetivos: [pegar Módulo 10.5].`,
    fr:"tienes la radiografía real de tu negocio. Con esto ya puedes decidir con claridad.",
    ha:"El Diagnóstico INITIUM es la radiografía completa. Verde es fortaleza, amarillo es riesgo y rojo es lo que está costando dinero hoy.",
    qp:"Un negocio tiene producto sólido, marca bien posicionada, pero ventas estancadas por tercer trimestre consecutivo. ¿Cuál es el diagnóstico más probable según el Método INITIUM?",
    qo:["El producto necesita rediseño o actualización para seguir siendo relevante en el mercado","El problema puede estar en el canal, el proceso de venta o la comunicación — no necesariamente en el producto o la marca","La marca necesita un rebranding para refrescarse y volver a captar la atención del mercado","Es necesario bajar el precio para reactivar la demanda y recuperar el crecimiento"],
    qc:1,
    qe:"Un producto sólido con marca bien posicionada y ventas estancadas generalmente indica un problema en el canal, la conversión o la comunicación. El Método INITIUM separa síntoma de causa antes de recomendar cualquier acción.",
    ps:5
  },
  {
    c:"10.9",
    t:"Consolidación de hallazgos, causa raíz y solución",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 10.9: La salida debe llamarse Matriz de Hallazgos, Causa Raíz y Solución. Para cada hallazgo, indica evidencia, tipo de información, causa raíz probable, impacto, gravedad, solución, primera acción, acción de mediano plazo y qué no debe hacerse todavía. Prioriza los tres hallazgos maestros que deben resolverse antes del plan.

Actúa como consultor estratégico senior dentro de la metodología INITIUM ONE LAB.

Tu trabajo ahora es consolidar TODOS los hallazgos reales detectados módulo a módulo y, para cada uno, dar una solución estratégica concreta.

REGLAS OBLIGATORIAS:
1. Solo incluye módulos donde hubo hallazgos reales (amarillo o rojo).
2. Para cada hallazgo: nombra el problema exacto con el lenguaje del negocio del alumno.
3. Para cada hallazgo da: (a) Qué está pasando exactamente, (b) Por qué importa y qué le está costando al negocio, (c) La solución estratégica concreta.
4. Al final, prioriza los 3 Hallazgos Maestros que el alumno debe resolver ANTES de ejecutar el plan de marketing.
5. Cierra recordándole que estos hallazgos son la base del Plan Estratégico de Marketing del Módulo 11.

Resultados acumulados de todos los módulos: [el sistema tomará automáticamente los resultados pegados en los paneles de cada módulo completado].`,
    f:`Pega aquí los resultados de los módulos que tengan hallazgos en amarillo o rojo. El sistema tomará automáticamente los análisis completados.`,
    fr:"tus hallazgos son tu mapa. Saber qué corregir es ya la mitad del camino.",
    ha:"La consolidación de hallazgos revela los 3 problemas maestros que deben resolverse antes de ejecutar cualquier plan.",
    qp:"Un dueño de negocio termina el diagnóstico con 8 hallazgos detectados. ¿Cuál es el primer paso correcto?",
    qo:["Contratar una agencia para que resuelva todos los hallazgos a la vez","Ignorar los hallazgos menores y enfocarse solo en ventas inmediatas","Priorizar los 2 o 3 hallazgos de mayor impacto en rentabilidad y canal, resolverlos primero y luego avanzar por fases","Esperar a tener presupuesto para resolver todos los hallazgos antes de ejecutar"],
    qc:2,
    qe:"La priorización es la clave. Intentar resolver 8 hallazgos a la vez paraliza el negocio. El Método INITIUM establece que primero se atacan los hallazgos que más afectan la rentabilidad, el canal y la conversión.",
    ps:5
  },
  {
    c:"11",
    t:"Plan de Marketing a 1 año",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 11: Antes de construir el plan, usa el Árbol de Objetivos del Módulo 10.5. El plan debe ser de complejidad intermedia: suficientemente completo para pyme o emprendimiento, sin volverse plan corporativo inmanejable. El plan debe nacer de diagnóstico y hallazgos, no de ocurrencias, canales o parrilla. Separa lo ejecutable ya de lo que depende de validar información.

Actúa como director estratégico senior de marketing, ventas, crecimiento, rentabilidad y planeación empresarial.

INSTRUCCIÓN DE FORMATO CRÍTICA: Este documento debe ser consultoría estratégica de Nat Moreno & Co. — NO una copia acumulada de módulos. NO copies y pegues los módulos completos. Interpreta, depura, jerarquiza y convierte la información en un documento ejecutivo de alto nivel.

ESTRUCTURA OBLIGATORIA DEL PLAN ESTRATÉGICO:
1. Portada ejecutiva. 2. Aviso de uso y derechos reservados. 3. Índice ejecutivo. 4. Resumen ejecutivo. 5. Situación actual del negocio. 6. Diagnóstico estratégico. 7. Hallazgos prioritarios. 8. Cliente ideal y mercado. 9. Posicionamiento y esencia de marca. 10. Oferta y líneas de negocio. 11. Canales prioritarios. 12. Narrativa comercial. 13. Estrategia de contenido. 14. Estrategia de ventas y seguimiento. 15. Métricas, ROAS, ROI y rentabilidad. 16. Plan Estratégico a 12 meses por trimestre (T1: Validación y posicionamiento / T2: Tracción y prueba social / T3: Escalamiento / T4: Optimización y consolidación). 17. Plan Operativo de Ejecución a 6 meses. 18. Recomendaciones de contratación o delegación. 19. Prioridades inmediatas. 20. Cierre estratégico.

REGLAS OBLIGATORIAS: No uses lenguaje genérico. No inventes datos. No prometas ventas garantizadas. Tono ejecutivo, sobrio, estratégico, profesional, sin humo.

Información acumulada: [pegar dashboards de todos los módulos anteriores].`,
    f:`Diagnóstico INITIUM: [pegar Módulo 10.8].
Consolidación de hallazgos: [pegar Módulo 10.9].
Objetivos reales: [pegar Módulo 10.5].
Todos los módulos anteriores: [pegar resúmenes de Módulos 1 a 10].`,
    fr:"ya tienes el plan táctico. Ahora sabes qué hacer, quién lo hace y cómo medirlo.",
    ha:"El plan estratégico es la respuesta al diagnóstico. Sin diagnóstico previo, cualquier plan es solo intención sin base.",
    qp:"Un plan estratégico de marketing se construye correctamente cuando: ¿cuál es el punto de partida correcto?",
    qo:["Definir primero los canales y formatos de contenido más efectivos para el tipo de negocio","Partir del diagnóstico real del negocio: qué funciona, qué no funciona, dónde está el problema de raíz y qué debe corregirse antes de ejecutar","Establecer primero el presupuesto disponible y luego adaptar la estrategia a ese presupuesto","Analizar qué están haciendo los competidores exitosos y replicar las mejores prácticas del sector"],
    qc:1,
    qe:"El Método INITIUM establece que el plan estratégico es la respuesta al diagnóstico: no puede construirse bien sin haber entendido primero qué está frenando al negocio, cuál es el problema de raíz y qué debe corregirse antes de invertir más.",
    ps:5
  },
  {
    c:"11.5",
    t:"Plan de Ejecución a 6 meses",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 11.5: No inventes costos exactos; da rangos y márcalos como estimación a validar. No asumas que hay equipo o presupuesto que no se mencionó. Distingue lo que puede ejecutar el alumno de lo que requiere un especialista. Si una tarea no tiene responsable, recurso o métrica posible, señálalo como vacío operativo a resolver antes de avanzar.

Actúa como director de operaciones de marketing y project manager senior, dentro de la metodología INITIUM ONE LAB.

Mi Plan Estratégico de Marketing a un año es: [pegar resultado del Módulo 11]. Mi nivel de problema es: [Nivel 1, 2 o 3 del Módulo 11]. Recursos con los que cuento hoy: equipo interno [describir], presupuesto mensual aproximado para marketing [dato], herramientas actuales [describir], tiempo propio disponible [dato]. Lo que prefiero hacer yo mismo es: [describir]. Lo que prefiero delegar o contratar es: [describir].

Construye el PLAN OPERATIVO DE EJECUCIÓN INITIUM ONE LAB con:
1. Lista de iniciativas por fase (Mes 1 / Meses 2-3 / Meses 4-6).
2. Desglose de cada iniciativa en tareas concretas y verificables.
3. Responsable sugerido por tarea.
4. Recurso necesario por tarea.
5. Costo estimado o rango de costo.
6. Tiempo estimado de ejecución.
7. Dependencias entre tareas.
8. Prioridad: alta, media o baja.
9. Para tareas a contratar: qué perfil buscar, qué pedir en el brief, qué entregable exigir.
10. Cómo dirigir y supervisar a ese proveedor sin ser experto.
11. Métrica de cumplimiento por tarea.
12. Cronograma general en formato de hoja de ruta.
13. Riesgos de ejecución y cómo mitigarlos.
14. Presupuesto operativo total estimado por fase.`,
    f:`Mi Plan Estratégico a 1 año es: [pegar Módulo 11].
Mi nivel de problema es: [Nivel 1 / 2 / 3].
Equipo interno con el que cuento: [describir o 'solo yo'].
Presupuesto mensual aproximado para marketing: [dato].
Herramientas actuales: [describir].
Tiempo propio disponible por semana: [dato].
Lo que prefiero hacer yo: [describir].
Lo que prefiero delegar o contratar: [describir].`,
    fr:"lo lograste. Tienes diagnóstico, estrategia y plan. Muy pocos llegan hasta aquí — tú sí.",
    ha:"El plan operativo convierte la estrategia en tareas con responsable, fecha y métrica. Sin esos tres elementos, el plan sigue siendo solo intención.",
    qp:"Un plan operativo de ejecución es efectivo cuando cumple con: ¿cuál de estas condiciones es la más crítica?",
    qo:["Tiene el mayor número de iniciativas posibles para maximizar la oportunidad de resultados","Cada tarea tiene responsable nombrado, recurso asignado, fecha de entrega y métrica de cumplimiento; sin eso, el plan queda como intención, no como ejecución","Está construido con las mejores prácticas del sector y las tendencias actuales del marketing digital","El presupuesto asignado es el mayor posible para garantizar que las iniciativas se ejecuten con calidad"],
    qc:1,
    qe:"Un plan operativo sin responsable, sin fecha y sin métrica es solo una lista de deseos. El Método INITIUM exige que cada tarea tenga: quién la hace, con qué recurso, para cuándo y cómo se sabe que se hizo bien.",
    ps:5
  },
  {
    c:"11.6",
    t:"Estrategia creativa y comunicación",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 11.6: Este módulo reemplaza la narrativa temprana y la ubica donde corresponde — después del plan de marketing. La comunicación debe traducir la estrategia: concepto rector, mensaje madre, mensajes por línea, objeciones, pruebas, CTAs, materiales, guía visual y verbal. Define qué requiere material real y qué puede apoyarse con metodología sin volverse genérico. La salida de este módulo alimenta directamente los Módulos 11.7 y 11.8.

Actúa como director creativo senior con experiencia en publicidad, estrategia de marca y comunicación comercial, dentro de la metodología INITIUM ONE LAB.

Tu trabajo es tomar el Plan de Marketing y convertirlo en la estrategia creativa y de comunicación que define cómo el negocio le habla a su cliente. No es un ejercicio estético: es decisión estratégica de comunicación.

Insumos obligatorios:
Plan de Marketing a 1 año: [pegar Módulo 11].
Plan de Ejecución a 6 meses: [pegar Módulo 11.5].
Diagnóstico y hallazgos: [pegar Módulos 10.8 y 10.9].
Esencia de marca y posicionamiento: [pegar Módulo 3].
Cliente ideal por línea: [pegar Módulo 5].
Rentabilidad y línea prioritaria: [pegar Módulo 10].

Construye la Estrategia Creativa y de Comunicación INITIUM con:

1. A QUIÉN LE HABLO — Perfil del cliente por línea o producto: quién es, qué siente, qué busca, qué le frena, qué lo convence.
2. CÓMO LE HABLO — Tono y manera de comunicación: voz de marca, estilo narrativo, lo que debe transmitir, lo que nunca debe parecer.
3. POR DÓNDE LE HABLO — Canal real derivado del diagnóstico y del cliente: puede ser redes sociales, pero también Google Ads, prospección directa, relaciones públicas, activaciones, eventos, alianzas, marketplace, email, WhatsApp, ferias u otros. El canal lo define el cliente y la oferta, no la moda.
4. QUÉ LE DIGO — Concepto rector de comunicación, mensaje madre, mensajes por línea de negocio, objeciones que debe responder, pruebas necesarias, argumentos de valor, promesas responsables, lenguaje que debe evitarse, CTA principal y secundarios.
5. MATERIALES NECESARIOS — Landing, catálogo, presentación, piezas gráficas, videos, guiones, emails, WhatsApp, casos, testimonios, materiales de venta. Indicar qué requiere producción real y qué puede apoyarse metodológicamente.
6. GUÍA VISUAL Y VERBAL — Paleta de decisiones de comunicación: colores, tipografía, tono visual, estilo fotográfico, referencias de estilo.
7. REQUERIMIENTOS DE PRODUCCIÓN REAL — Qué debe producirse antes de ejecutar cualquier canal.
8. RIESGOS DE COMUNICACIÓN GENÉRICA — Qué puede salir mal si se comunica sin esta estrategia.
9. SEMÁFORO DE ESTRATEGIA CREATIVA — Verde: listo para ejecutar. Amarillo: requiere ajuste. Rojo: no debe ejecutarse sin corrección.`,
    f:`Plan de Marketing a 1 año: [pegar Módulo 11].
Plan de Ejecución a 6 meses: [pegar Módulo 11.5].
Diagnóstico y hallazgos: [pegar Módulos 10.8 y 10.9].
Esencia de marca: [pegar Módulo 3].
Cliente ideal por línea: [pegar Módulo 5].
Rentabilidad y línea prioritaria: [pegar Módulo 10].`,
    fr:"ahora sabes a quién le hablas, cómo, por dónde y qué le dices. Eso es lo que convierte comunicación en estrategia.",
    ha:"La estrategia creativa sin plan de marketing es decoración. Con el plan, se convierte en el puente entre la estrategia y el mercado.",
    qp:"Una marca comunica 'somos los mejores del mercado' como mensaje principal. ¿Cuál es el problema estratégico de ese mensaje?",
    qo:["Es un mensaje muy directo y puede generar rechazo en el consumidor moderno","No dice qué hace diferente a la marca ni por qué el cliente debería creerle o importarle","Puede generar comparaciones con competidores que tengan más reconocimiento de marca","El tono es muy agresivo y puede alejar a clientes potenciales más conservadores"],
    qc:1,
    qe:"Un mensaje efectivo no dice que eres el mejor: demuestra por qué importas para el cliente específico. 'Somos los mejores' no tiene ancla en el cliente, no resuelve su problema y no se diferencia de lo que dicen todos los competidores.",
    ps:5
  },
  {
    c:"11.7",
    t:"Canales derivados de la estrategia",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 11.7: Los canales finales deben derivarse del plan y de la estrategia creativa, no de moda o preferencia personal. Para cada canal, indica función, pieza, conexión técnica, métrica y fase de activación. Si un canal no debe activarse todavía, explica qué falta antes. Recuerda que el canal puede ser redes sociales, pero también puede ser Google Ads, prospección directa, PR, activaciones, eventos, alianzas, ferias, marketplace u otros — lo que define el canal es el cliente, la oferta y el objetivo, no la tendencia del momento.

Actúa como estratega de canales y distribución de comunicación, dentro de la metodología INITIUM ONE LAB.

Insumos obligatorios:
Plan de Marketing: [pegar Módulo 11].
Plan de Ejecución: [pegar Módulo 11.5].
Estrategia Creativa y de Comunicación: [pegar Módulo 11.6].
Ecosistema conectado: [pegar Módulo 8].
Matriz cliente-canal-intención: [pegar Módulo 5].

Entrégame un Mapa de Canales Derivados de la Estrategia con:
1. Canal recomendado y objetivo que debe cumplir.
2. Qué pieza o mensaje debe vivir en ese canal.
3. Función de cada canal: descubrimiento, confianza, conversión, cierre o recompra.
4. Qué canal no se activa todavía y por qué (qué falta antes).
5. Qué conexión técnica o comercial necesita cada canal para funcionar bien.
6. Qué métrica debe observarse por canal.
7. Prioridad de activación por fase del plan de ejecución.
8. Riesgo de usar el canal fuera de estrategia.
9. Costo estimado de activación por canal (rango, no cifra exacta).
10. Semáforo por canal: verde (listo), amarillo (requiere ajuste), rojo (no activar todavía).

IMPORTANTE: Los canales pueden incluir — según lo que el diagnóstico y la estrategia creativa revelen — redes sociales orgánicas, pauta en redes, Google Ads, SEO, email marketing, WhatsApp, prospección directa, relaciones públicas, activaciones, eventos, ferias, alianzas estratégicas, marketplace, distribuidores, referidos u otros. No asumas que todos los negocios necesitan redes sociales pagas.`,
    f:`Plan de Marketing: [pegar Módulo 11].
Estrategia Creativa y de Comunicación: [pegar Módulo 11.6].
Ecosistema conectado: [pegar Módulo 8].
Matriz cliente-canal-intención: [pegar Módulo 5].`,
    fr:"ya sabes exactamente por dónde llegar a tu cliente. No todos los caminos pasan por las redes.",
    ha:"Los canales deben derivarse de la estrategia, no de la moda. Activar el canal equivocado es gastar en el lugar donde el cliente no está.",
    qp:"Una empresa de servicios B2B con tickets altos decide invertir todo su presupuesto de marketing en TikTok porque 'está muy de moda'. ¿Cuál es el error estratégico?",
    qo:["Ninguno — TikTok tiene audiencias muy amplias que pueden incluir tomadores de decisión empresarial","El canal no se eligió porque el cliente esté ahí ni porque la oferta lo requiera, sino porque está de moda — eso desconecta la inversión del resultado","El error es no tener presencia también en Instagram y LinkedIn al mismo tiempo para maximizar el alcance","TikTok es muy nuevo y todavía no tiene el nivel de confianza necesario para servicios de alto ticket"],
    qc:1,
    qe:"El canal correcto no es el que está de moda: es el que corresponde al cliente, la oferta y el objetivo. Un servicio B2B de alto ticket necesita un canal donde el cliente tome decisiones de negocio — LinkedIn, prospección directa, eventos o relaciones públicas son más efectivos que TikTok para ese perfil.",
    ps:5
  },
  {
    c:"11.8",
    t:"Parrilla estratégica multicanal",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 11.8: Este módulo conserva el prompt validado de parrilla, pero se ubica al final como consecuencia del plan — no como origen del marketing. La parrilla debe estar conectada al Plan de Marketing, Plan de Ejecución, Estrategia Creativa y Canales derivados. Ya no es solo redes sociales: incluye TODOS los canales derivados del Módulo 11.7 que apliquen. Indica qué piezas no deben hacerse solo con metodología porque requieren material real.

Actúa como estratega senior de contenido, comunicación multicanal y producción, dentro de la metodología INITIUM ONE LAB.

Insumos obligatorios:
Plan de Marketing: [pegar Módulo 11].
Plan de Ejecución: [pegar Módulo 11.5].
Estrategia Creativa y de Comunicación: [pegar Módulo 11.6].
Canales derivados de la estrategia: [pegar Módulo 11.7].
Auditoría de redes: [pegar Módulo 6].

Construye una Parrilla Estratégica Multicanal de 30 días que sea consecuencia del plan, no el inicio del marketing.

Columnas obligatorias:
1. Día. 2. Objetivo que sirve al plan. 3. Línea de negocio. 4. Etapa del cliente. 5. Tipo de contenido: autoridad, educación, objeción, prueba, venta, experiencia, recompra. 6. Tema. 7. Idea central. 8. Formato recomendado: reel, historia, post, carrusel, video, live, artículo, email, WhatsApp, LinkedIn, YouTube, Google Business, ficha marketplace, catálogo, presentación, pieza de activación, material de PR, material de evento u otro canal derivado. 9. Canal. 10. Justificación del formato. 11. Copy base o guion base. 12. CTA. 13. Hashtags o keywords si aplica. 14. Métrica. 15. Relación con la estrategia creativa. 16. Requerimiento de producción. 17. Fotos necesarias. 18. Videos necesarios. 19. Testimonios, casos o pruebas requeridas. 20. Qué puede apoyarse metodológicamente. 21. Qué requiere material real y no puede hacerse sin él. 22. Responsable. 23. Complejidad: baja, media, alta. 24. Riesgo si se publica sin ajuste. 25. Semáforo de preparación.

Además, entrega:
1. Lista de fotos a producir.
2. Lista de videos a grabar.
3. Lista de piezas comerciales a diseñar.
4. Lista de pruebas a recopilar.
5. Qué debe estar listo antes de pautar.
6. Qué piezas deben revisarse por congruencia de marca.

No propongas formatos por moda. Cada formato debe tener objetivo, canal, etapa, CTA y métrica.`,
    f:`Plan de Marketing: [pegar Módulo 11].
Estrategia Creativa y de Comunicación: [pegar Módulo 11.6].
Canales derivados: [pegar Módulo 11.7].
Mi línea prioritaria para los próximos 30 días es: [describir].
Mis recursos actuales de producción son: [describir].
Mi objetivo del mes es: [describir].
Mis pruebas disponibles son: [testimonios, casos, fotos, reseñas, etc.].`,
    fr:"tienes un plan de comunicación con dirección real. Cada pieza tiene un porqué conectado a tu estrategia.",
    ha:"La parrilla sin estrategia es contenido. La parrilla con estrategia es comunicación con dirección y propósito.",
    qp:"Una empresa publica contenido diario en Instagram durante 3 meses sin ver resultados en ventas. ¿Cuál es el diagnóstico más probable?",
    qo:["Necesita publicar más frecuentemente o en más plataformas para aumentar su alcance","El contenido no está conectado con la etapa de decisión del cliente ni con un CTA que lleve a la venta","Debe invertir en pauta para amplificar el contenido orgánico que ya produce","El problema es que Instagram no es el canal correcto para su tipo de negocio"],
    qc:1,
    qe:"El contenido sin dirección estratégica genera presencia pero no ventas. La parrilla INITIUM conecta cada pieza con una etapa de decisión, un objetivo, un canal correcto y un CTA. Sin esa estructura, publicar más solo genera más ruido.",
    ps:5
  },
  {
    c:"12",
    t:"Cierre e implementación",
    p:`Antes de responder, aplica el Protocolo Transversal INITIUM sin sustituir el rol profesional solicitado en este módulo:
- Mantén exactamente el rol del módulo: si se pide actuar como consultor, auditor, estratega, arquitecto, director o asesor, conserva ese enfoque profesional.
- No inventes datos que el alumno no entregó.
- No completes vacíos como si fueran información real.
- Separa de forma visible: dato real, información incompleta, hipótesis, supuesto razonable, estimación y recomendación preliminar.
- Si falta información, conviértela en hallazgo; no la ocultes ni la maquilles.
- Cuando una conclusión dependa de información incompleta, márcala como supuesto y explica qué dato debe recopilarse para validarla.
- Detecta el cuello de botella probable, pero no lo presentes como confirmado si faltan datos.
- Sugiere soluciones en orden de prioridad: qué corregir primero, qué no hacer todavía, qué medir, qué validar y qué puede esperar.
- No prometas ventas garantizadas, viralidad, éxito automático ni resultados mágicos.
- No recomiendes invertir más si antes debe corregirse oferta, canal, mensaje, venta, experiencia, margen, datos o medición.
- Personaliza el análisis con los productos, canales, situación y lenguaje del negocio del alumno.
- Incluye hallazgo específico, semáforo y nivel de problema cuando el módulo lo requiera.

Al final del análisis, incluye una sección llamada 'Dato real vs supuesto' con tres columnas: información confirmada, información incompleta y decisión que no debe tomarse todavía.

Adición específica Módulo 12: La certificación no se libera por ver videos, sino por completar el proyecto metodológico completo. Define ruta posterior por nivel: implementación propia, revisión estratégica o acompañamiento INITIUM Strategy. Presenta el siguiente nivel como consecuencia del nivel de problema detectado, no como venta forzada.

Actúa como asesor estratégico de implementación y seguimiento para mi Plan Estratégico INITIUM ONE LAB.

Ya tengo mi Diagnóstico, mi Plan Estratégico de Marketing a un año, mi Plan Operativo de Ejecución, mi Estrategia Creativa, mis Canales derivados y mi Parrilla Estratégica. Necesito convertirlo en una ruta de implementación realista, priorizada y medible.

Problema real principal: [pegar resultado del Módulo 11]. Nivel de problema: [Nivel 1 / 2 / 3]. Línea de negocio prioritaria: [pegar]. Cliente prioritario: [pegar]. Canal prioritario: [pegar]. Mensaje principal: [pegar]. CTA principal: [pegar]. Plan Estratégico a 6 meses por fases: [pegar]. Plan Operativo: [pegar Módulo 11.5]. Estrategia Creativa: [pegar Módulo 11.6]. Canales derivados: [pegar Módulo 11.7]. Métricas por fase: [pegar]. Recursos disponibles: [tiempo, equipo, presupuesto, herramientas, fotos, videos, web, WhatsApp, CRM, marketplace, ecommerce, etc.]. Limitaciones actuales: [describir].

Entrega un Cierre Estratégico INITIUM ONE LAB con: resumen del diagnóstico final en 5 líneas, prioridad número 1 para los próximos 7 días, tres prioridades principales para los próximos 30 días, qué pausar de inmediato, qué ejecutar primero, qué medir semanalmente, qué recursos preparar antes de ejecutar, qué errores evitar para no volver a improvisar, señales de avance / señales de necesidad de ajuste / señales de que no debes invertir más todavía, checklist días 7, 15 y 30, perfiles a contratar según plan, cómo dirigir proveedores sin ser experto, señales de mala ejecución de un proveedor, qué NO aceptar pagar sin claridad estratégica.

TONO: Consultoría estratégica de Nat Moreno & Co. Sobrio, directo, accionable. Sin humo. Sin promesas mágicas. Sin motivación vacía.`,
    f:`Problema real principal: [pegar Módulo 11].
Nivel de problema: [Nivel 1 / 2 / 3].
Plan Estratégico: [pegar Módulo 11]. Plan Operativo: [pegar Módulo 11.5].
Estrategia Creativa: [pegar Módulo 11.6]. Canales: [pegar Módulo 11.7].
Recursos disponibles: [tiempo, equipo, presupuesto, herramientas].
Limitaciones actuales: [describir].`,
    fr:"sigue adelante. Cada módulo completado es una decisión que ya no tomarás a ciegas.",
    ha:"El cierre es la ruta de implementación. Sin ella, el plan más completo del mundo queda en un documento.",
    qp:"Terminaste el programa. ¿Cuál es el primer paso REAL de implementación según el Método INITIUM?",
    qo:["Contratar inmediatamente todos los proveedores identificados en el plan para empezar a ejecutar","Ejecutar primero las prioridades de corrección identificadas en el diagnóstico, antes de activar cualquier canal o invertir en pauta","Lanzar las redes sociales y el contenido de la parrilla para generar presencia inmediata","Presentar el plan a potenciales inversores para conseguir financiamiento y escalar más rápido"],
    qc:1,
    qe:"El Método INITIUM establece que antes de activar canales o invertir en ejecución, el negocio debe corregir los hallazgos prioritarios identificados en el diagnóstico. Ejecutar sobre una base con problemas no resueltos amplifica los errores, no los resultados.",
    ps:5
  }
];

export { M as VALIDATED_MODULES };
