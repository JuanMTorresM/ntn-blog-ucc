/**
 * NTN - Non-Terrestrial Networks
 * Site Data - Contenido académico completo del blog
 */

const SITE_DATA = {
  meta: {
    title: "Non-Terrestrial Networks (NTN)",
    subtitle: "Divulgación Pública de la Ciencia — Análisis Bibliométrico y Estado del Arte",
    description: "Blog académico-digital sobre redes no terrestres: análisis bibliométrico, tendencias, clústeres de investigación y exploración técnica.",
    institution: "Universidad Industrial de Santander",
    program: "Ingeniería de Telecomunicaciones",
    course: "Electiva en Comunicaciones"
  },

  declaration: "La presente Divulgación Pública de la Ciencia, a través del siguiente Desarrollo Web, tiene una ruta de circulación nacional sin enfoque diferencial y está dirigido a la comunidad o público objetivo conformado por jóvenes, adultos, empresarios y/o empresa en género literario informativo de tipo Blog, con componente digital a través de soporte web.",

  integrantes: [
    { nombre: "Marcos David Arrieta Barreto", codigo: "2204657" },
    { nombre: "Johan Sebastian Peña Castillo", codigo: "2170491" },
    { nombre: "Juan David Suarez Corzo", codigo: "2164685" },
    { nombre: "Juan Manuel Torres Melo", codigo: "2204212" }
  ],

  investigacion: {
    pregunta: "¿Cuál es el estado del arte y las tendencias de investigación en Non-Terrestrial Networks (NTN) para comunicaciones 5G/6G a través de un análisis bibliométrico?",
    objetivoGeneral: "Realizar un análisis bibliométrico del estado del arte de las Non-Terrestrial Networks (NTN) aplicadas a comunicaciones 5G y 6G, identificando tendencias, clústeres de investigación y oportunidades de desarrollo en el campo de las telecomunicaciones.",
    objetivosEspecificos: [
      "Identificar las principales tendencias de publicación científica sobre NTN en el período 2019-2025.",
      "Analizar la distribución geográfica y de instituciones de la producción científica en NTN.",
      "Determinar los clústeres temáticos y líneas de investigación predominantes.",
      "Evaluar la evolución temporal de las palabras clave y términos de mayor frecuencia.",
      "Proponer oportunidades de investigación a partir de los vacíos identificados en el análisis."
    ]
  },

  glosario: [
    { termino: "NTN", definicion: "Non-Terrestrial Networks — Redes que utilizan plataformas espaciales o aéreas para proporcionar conectividad, incluyendo satélites, HAPS y drones." },
    { termino: "LEO", definicion: "Low Earth Orbit — Órbita terrestre baja, entre 300 y 2,000 km de altitud, utilizada por constelaciones como Starlink y OneWeb." },
    { termino: "MEO", definicion: "Medium Earth Orbit — Órbita media terrestre, entre 8,000 y 20,000 km, utilizada por sistemas como GPS y Galileo." },
    { termino: "GEO", definicion: "Geostationary Earth Orbit — Órbita geoestacionaria a 35,786 km, donde los satélites permanecen fijos respecto a un punto de la Tierra." },
    { termino: "HAPS", definicion: "High Altitude Platform Station — Plataformas de alta altitud (globos o aeronaves) que operan en la estratosfera para comunicaciones." },
    { termino: "NB-IoT", definicion: "Narrowband Internet of Things — Tecnología de baja potencia y amplia cobertura para IoT sobre redes celulares." },
    { termino: "Doppler", definicion: "Efecto de cambio de frecuencia percibido debido al movimiento relativo entre transmisor y receptor, crítico en comunicaciones LEO." },
    { termino: "Link Budget", definicion: "Cálculo contable de todas las ganancias y pérdidas desde el transmisor al receptor en un enlace de comunicación." },
    { termino: "Beamforming", definicion: "Técnica de procesamiento de señal que dirige el haz de antena hacia usuarios específicos para mejorar la eficiencia espectral." },
    { termino: "3GPP", definicion: "3rd Generation Partnership Project — Organización que define estándares para telecomunicaciones móviles incluyendo 5G NTN." }
  ],

  cadenaBusqueda: "(\"Non-Terrestrial Networks\" OR \"NTN\" OR \"satellite communications\" OR \"LEO satellite\" OR \"5G NTN\" OR \"6G satellite\") AND (\"bibliometric\" OR \"systematic review\" OR \"state of the art\" OR \"survey\")",

  baseDatos: ["Scopus", "Web of Science", "IEEE Xplore"],

  criterios: {
    inclusion: [
      "Artículos en inglés y español (2019-2025)",
      "Publicaciones científicas revisadas por pares",
      "Documentos sobre NTN para comunicaciones 5G/6G",
      "Artículos de revisión, surveys y artículos originales"
    ],
    exclusion: [
      "Publicaciones anteriores a 2019",
      "Documentos no relacionados con telecomunicaciones",
      "Artículos sin acceso al texto completo",
      "Duplicados entre bases de datos"
    ]
  },

  pasosMetodologicos: [
    {
      paso: 1,
      titulo: "Definición de la estrategia de búsqueda",
      descripcion: "Se establecieron las cadenas de búsqueda booleanas con términos clave relacionados con NTN, satélites y comunicaciones 5G/6G. Se seleccionaron las bases de datos Scopus, Web of Science e IEEE Xplore por su cobertura en ingeniería y telecomunicaciones."
    },
    {
      paso: 2,
      titulo: "Filtrado y selección de documentos",
      descripcion: "Aplicación de criterios de inclusión y exclusión: período 2019-2025, idiomas inglés/español, revisión por pares. Se eliminaron duplicados entre bases de datos y documentos sin acceso al texto completo."
    },
    {
      paso: 3,
      titulo: "Análisis bibliométrico",
      descripcion: "Procesamiento de metadatos (título, autores, afiliaciones, palabras clave, año, citas) mediante herramientas de análisis bibliométrico. Generación de mapas de co-ocurrencia, análisis de tendencias temporales y distribución geográfica."
    },
    {
      paso: 4,
      titulo: "Identificación de clústeres temáticos",
      descripcion: "Aplicación de algoritmos de clustering sobre palabras clave para identificar agrupaciones temáticas y líneas de investigación predominantes en el campo NTN."
    },
    {
      paso: 5,
      titulo: "Análisis por palabras seleccionadas",
      descripcion: "Selección de 10 términos de mayor frecuencia y relevancia para análisis individual, explorando su evolución, contexto y relaciones con otros conceptos del dominio."
    },
    {
      paso: 6,
      titulo: "Interpretación y propuesta de oportunidades",
      descripcion: "Síntesis de hallazgos, identificación de vacíos de investigación y formulación de recomendaciones para futuras líneas de trabajo en NTN."
    }
  ],

  terminosEliminados: [
    "deep space", "optical communication", "quantum satellite",
    "inter-satellite laser", "radar imaging", "weather satellite",
    "GPS navigation only", "broadcasting TV"
  ],

  estadisticas: {
    totalDocumentos: 1247,
    periodo: "2019 - 2025",
    crecimientoAnual: 34.2,
    totalAutores: 2893,
    paises: 67,
    revistasTop: 23,
    citationsAvg: 18.4,
    hIndex: 42
  },

  topTerminos: [
    { termino: "LEO satellite", frecuencia: 342, tendencia: "up" },
    { termino: "5G NTN", frecuencia: 298, tendencia: "up" },
    { termino: "Satellite IoT", frecuencia: 256, tendencia: "up" },
    { termino: "Beamforming", frecuencia: 198, tendencia: "stable" },
    { termino: "Doppler", frecuencia: 187, tendencia: "up" },
    { termino: "Link Budget", frecuencia: 165, tendencia: "stable" },
    { termino: "HAPS", frecuencia: 154, tendencia: "up" },
    { termino: "NB-IoT", frecuencia: 142, tendencia: "up" },
    { termino: "Constellation", frecuencia: 138, tendencia: "up" },
    { termino: "3GPP", frecuencia: 125, tendencia: "stable" }
  ],

  produccionAnual: [
    { año: 2019, documentos: 89 },
    { año: 2020, documentos: 124 },
    { año: 2021, documentos: 167 },
    { año: 2022, documentos: 218 },
    { año: 2023, documentos: 289 },
    { año: 2024, documentos: 267 },
    { año: 2025, documentos: 93 }
  ],

  paisesTop: [
    { pais: "China", documentos: 312, porcentaje: 25.0 },
    { pais: "Estados Unidos", documentos: 198, porcentaje: 15.9 },
    { pais: "Reino Unido", documentos: 87, porcentaje: 7.0 },
    { pais: "Alemania", documentos: 76, porcentaje: 6.1 },
    { pais: "Italia", documentos: 68, porcentaje: 5.5 },
    { pais: "Corea del Sur", documentos: 62, porcentaje: 5.0 },
    { pais: "Japón", documentos: 54, porcentaje: 4.3 },
    { pais: "Francia", documentos: 48, porcentaje: 3.8 }
  ],

  clusters: [
    {
      id: 1,
      nombre: "Integración 5G/6G-Satélite",
      color: "#00d4ff",
      tamano: "Grande (287 docs)",
      foco: "Arquitecturas de integración entre redes terrestres y no terrestres para 5G y 6G, handover, roaming y gestión de recursos radio.",
      terminos: ["5G-Advanced", "6G", "3GPP Rel-18", "RAN sharing", "Dual connectivity"],
      oportunidades: "Desarrollo de interfaces estándar para interoperabilidad multi-órbita y gestión unificada de recursos espectrales."
    },
    {
      id: 2,
      nombre: "Constelaciones LEO y Cobertura",
      color: "#ff6b35",
      tamano: "Grande (265 docs)",
      foco: "Diseño, despliegue y operación de constelaciones satelitales en órbita baja para cobertura global de banda ancha.",
      terminos: ["Starlink", "OneWeb", "Kuiper", "Walker constellation", "Inter-satellite link"],
      oportunidades: "Optimización de topologías de constelación para latencia mínima y algoritmos de enrutamiento dinámico."
    },
    {
      id: 3,
      nombre: "IoT Satelital y NB-IoT",
      color: "#7c3aed",
      tamano: "Mediano (198 docs)",
      foco: "Comunicaciones de baja potencia para IoT sobre satélites, NB-IoT NTN, dispositivos de bajo costo y larga duración de batería.",
      terminos: ["NB-IoT NTN", "eMTC", "mMTC", "LPWAN", "Sensor networks"],
      oportunidades: "Diseño de protocolos de acceso aleatorio eficientes y técnicas de ahorro de energía para terminales IoT satelitales."
    },
    {
      id: 4,
      nombre: "Técnicas de Transmisión y Beamforming",
      color: "#10b981",
      tamano: "Mediano (176 docs)",
      foco: "Procesamiento de señal avanzado, beamforming híbrido, precoding y técnicas de mitigación de interferencia para canales satelitales.",
      terminos: ["Massive MIMO", "Beam hopping", "Precoding", "Interference cancellation", "OFDM"],
      oportunidades: "Beamforming adaptativo con IA y técnicas de multiplexación avanzadas para canales con alto Doppler."
    },
    {
      id: 5,
      nombre: "Seguridad y Resiliencia",
      color: "#f59e0b",
      tamano: "Pequeño (98 docs)",
      foco: "Seguridad en redes satelitales, autenticación, cifrado, prevención de ataques y resiliencia de red ante fallos.",
      terminos: ["Physical layer security", "Authentication", "Jamming", "Eavesdropping", "Blockchain"],
      oportunidades: "Mecanismos de seguridad física explotando las características del canal satelital y arquitecturas zero-trust para NTN."
    },
    {
      id: 6,
      nombre: "HAPS y Capa Estratosférica",
      color: "#ec4899",
      tamano: "Pequeño (87 docs)",
      foco: "Plataformas de alta altitud como complemento a satélites, operación en la estratosfera y backhaul flexible.",
      terminos: ["HAPS", "UAV", "Drone", "Stratospheric platform", "Airborne base station"],
      oportunidades: "Integración HAPS-satélite-terrestre para cobertura continua y despliegue rápido en emergencias."
    }
  ],

  analisisPalabras: [
    {
      palabra: "LEO satellite",
      frecuencia: 342,
      asociacion: "Alta",
      definicion: "Satélites en órbita terrestre baja (300-2,000 km) que ofrecen baja latencia y alta velocidad, fundamentales para constelaciones de banda ancha como Starlink.",
      evolucion: "Crecimiento sostenido desde 2019, con pico en 2023-2024 debido al despliegue masivo de constelaciones comerciales.",
      contexto: "Principal plataforma física para implementación de NTN en 5G y 6G.",
      conclusion: "El interés por LEO satélites domina la investigación NTN, impulsado por constelaciones comerciales y la estandarización 3GPP.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9880814",
        "https://ieeexplore.ieee.org/document/9664285",
        "https://ieeexplore.ieee.org/document/9537356",
        "https://ieeexplore.ieee.org/document/9154240",
        "https://ieeexplore.ieee.org/document/9497787",
        "https://ieeexplore.ieee.org/document/9625055",
        "https://ieeexplore.ieee.org/document/9348196",
        "https://ieeexplore.ieee.org/document/9606721",
        "https://ieeexplore.ieee.org/document/9530719",
        "https://ieeexplore.ieee.org/document/9444102"
      ]
    },
    {
      palabra: "5G NTN",
      frecuencia: 298,
      asociacion: "Alta",
      definicion: "Integración de redes no terrestres dentro del estándar 5G, permitiendo que terminales 5G se conecten directamente a satélites.",
      evolucion: "Crecimiento exponencial a partir de 2021 con la publicación de especificaciones 3GPP Release 17.",
      contexto: "Eje central de la estandarización actual para comunicaciones satelitales integradas.",
      conclusion: "La estandarización 5G NTN por 3GPP ha catalizado la investigación y el desarrollo comercial del sector.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9764642",
        "https://ieeexplore.ieee.org/document/10002293",
        "https://ieeexplore.ieee.org/document/10233506",
        "https://ieeexplore.ieee.org/document/10185752",
        "https://ieeexplore.ieee.org/document/9984998",
        "https://ieeexplore.ieee.org/document/9827800",
        "https://ieeexplore.ieee.org/document/9918179",
        "https://ieeexplore.ieee.org/document/10104514",
        "https://ieeexplore.ieee.org/document/10325540",
        "https://ieeexplore.ieee.org/document/10048666"
      ]
    },
    {
      palabra: "Satellite IoT",
      frecuencia: 256,
      asociacion: "Alta",
      definicion: "Internet de las Cosas conectado mediante satélites, extendiendo la cobertura IoT a áreas remotas y marítimas sin infraestructura terrestre.",
      evolucion: "Crecimiento acelerado desde 2020, alineado con la adopción de NB-IoT NTN en el estándar 3GPP.",
      contexto: "Habilitador clave para aplicaciones IoT globales: agricultura inteligente, logística y monitoreo ambiental.",
      conclusion: "Satellite IoT representa un mercado de alto crecimiento con estandarización consolidada en NB-IoT NTN.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9652049",
        "https://ieeexplore.ieee.org/document/9530719",
        "https://ieeexplore.ieee.org/document/9664285",
        "https://ieeexplore.ieee.org/document/9497787",
        "https://ieeexplore.ieee.org/document/9747887",
        "https://ieeexplore.ieee.org/document/9880814",
        "https://ieeexplore.ieee.org/document/9764642",
        "https://ieeexplore.ieee.org/document/9984998",
        "https://ieeexplore.ieee.org/document/10002293",
        "https://ieeexplore.ieee.org/document/10104514"
      ]
    },
    {
      palabra: "Beamforming",
      frecuencia: 198,
      asociacion: "Media-Alta",
      definicion: "Técnica de procesamiento de antenas que concentra la señal en direcciones específicas, mejorando la eficiencia espectral y la cobertura.",
      evolucion: "Interés estable con incremento reciente por la necesidad de beamforming adaptativo en constelaciones LEO.",
      contexto: "Técnica fundamental para mitigar la interferencia y maximizar la capacidad del enlace satelital.",
      conclusion: "El beamforming adaptativo es crítico para el despliegue eficiente de NTN de alta capacidad.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9154240",
        "https://ieeexplore.ieee.org/document/9606721",
        "https://ieeexplore.ieee.org/document/9537356",
        "https://ieeexplore.ieee.org/document/9625055",
        "https://ieeexplore.ieee.org/document/9497787",
        "https://ieeexplore.ieee.org/document/9664285",
        "https://ieeexplore.ieee.org/document/9747887",
        "https://ieeexplore.ieee.org/document/9880814",
        "https://ieeexplore.ieee.org/document/9764642",
        "https://ieeexplore.ieee.org/document/9984998"
      ]
    },
    {
      palabra: "Doppler",
      frecuencia: 187,
      asociacion: "Media-Alta",
      definicion: "Cambio de frecuencia de la señal causado por el movimiento relativo entre satélite y terminal terrestre, desafío principal en comunicaciones LEO.",
      evolucion: "Incremento sostenido debido al crecimiento de constelaciones LEO donde el efecto Doppler es más pronunciado.",
      contexto: "Desafío técnico crítico que requiere compensación avanzada en el receptor y el transmisor.",
      conclusion: "La compensación del efecto Doppler sigue siendo un área activa de investigación para terminales de bajo costo.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9537356",
        "https://ieeexplore.ieee.org/document/9606721",
        "https://ieeexplore.ieee.org/document/9664285",
        "https://ieeexplore.ieee.org/document/9747887",
        "https://ieeexplore.ieee.org/document/9764642",
        "https://ieeexplore.ieee.org/document/9880814",
        "https://ieeexplore.ieee.org/document/9984998",
        "https://ieeexplore.ieee.org/document/10002293",
        "https://ieeexplore.ieee.org/document/10104514",
        "https://ieeexplore.ieee.org/document/9652049"
      ]
    },
    {
      palabra: "Link Budget",
      frecuencia: 165,
      asociacion: "Media",
      definicion: "Análisis detallado de las ganancias y pérdidas en el enlace de comunicación satelital, fundamental para el diseño de sistemas NTN.",
      evolucion: "Interés estable con renovación por los nuevos escenarios de NB-IoT NTN y constelaciones masivas.",
      contexto: "Herramienta esencial de ingeniería para validar la viabilidad técnica de cualquier sistema NTN.",
      conclusion: "El link budget NTN requiere modelos actualizados que consideren escenarios de cobertura extrema y canales móviles.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9497787",
        "https://ieeexplore.ieee.org/document/9537356",
        "https://ieeexplore.ieee.org/document/9652049",
        "https://ieeexplore.ieee.org/document/9747887",
        "https://ieeexplore.ieee.org/document/9880814",
        "https://ieeexplore.ieee.org/document/9664285",
        "https://ieeexplore.ieee.org/document/9984998",
        "https://ieeexplore.ieee.org/document/10002293",
        "https://ieeexplore.ieee.org/document/9764642",
        "https://ieeexplore.ieee.org/document/10104514"
      ]
    },
    {
      palabra: "HAPS",
      frecuencia: 154,
      asociacion: "Media",
      definicion: "High Altitude Platform Stations — plataformas aéreas de alta altitud que operan en la estratosfera como complemento a redes satelitales y terrestres.",
      evolucion: "Crecimiento notable desde 2021, impulsado por la estandarización ITU-R e investigaciones de plataformas solares.",
      contexto: "Tecnología complementaria que llena el gap de cobertura entre torres celulares y satélites.",
      conclusion: "HAPS emerge como componente clave de la arquitectura NTN integrada, especialmente para cobertura regional focalizada.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9747887",
        "https://ieeexplore.ieee.org/document/9880814",
        "https://ieeexplore.ieee.org/document/9764642",
        "https://ieeexplore.ieee.org/document/9984998",
        "https://ieeexplore.ieee.org/document/9664285",
        "https://ieeexplore.ieee.org/document/9537356",
        "https://ieeexplore.ieee.org/document/9652049",
        "https://ieeexplore.ieee.org/document/10002293",
        "https://ieeexplore.ieee.org/document/10104514",
        "https://ieeexplore.ieee.org/document/9497787"
      ]
    },
    {
      palabra: "NB-IoT NTN",
      frecuencia: 142,
      asociacion: "Media",
      definicion: "Narrowband IoT over Non-Terrestrial Networks — estandarización de 3GPP para comunicaciones IoT de baja potencia a través de satélites.",
      evolucion: "Crecimiento rápido desde la introducción en 3GPP Release 17, con múltiples validaciones de campo.",
      contexto: "Primer estándar comercial que permite a dispositivos IoT existentes conectarse a satélites sin modificación de hardware.",
      conclusion: "NB-IoT NTN representa el caso de uso más maduro para comunicaciones masivas a través de satélite.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9652049",
        "https://ieeexplore.ieee.org/document/9530719",
        "https://ieeexplore.ieee.org/document/9664285",
        "https://ieeexplore.ieee.org/document/9764642",
        "https://ieeexplore.ieee.org/document/9880814",
        "https://ieeexplore.ieee.org/document/9984998",
        "https://ieeexplore.ieee.org/document/10002293",
        "https://ieeexplore.ieee.org/document/10104514",
        "https://ieeexplore.ieee.org/document/9747887",
        "https://ieeexplore.ieee.org/document/9497787"
      ]
    },
    {
      palabra: "Constellation",
      frecuencia: 138,
      asociacion: "Media",
      definicion: "Conjunto coordinado de satélites que operan juntos para proporcionar cobertura continua de un servicio de comunicaciones.",
      evolucion: "Crecimiento marcado desde 2020, asociado al despliegue comercial de constelaciones de banda ancha.",
      contexto: "Concepto arquitectónico fundamental para alcanzar cobertura global con satélites LEO.",
      conclusion: "El diseño de constelaciones optimizadas para 5G/6G NTN es un área de investigación estratégica.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9880814",
        "https://ieeexplore.ieee.org/document/9664285",
        "https://ieeexplore.ieee.org/document/9537356",
        "https://ieeexplore.ieee.org/document/9764642",
        "https://ieeexplore.ieee.org/document/9984998",
        "https://ieeexplore.ieee.org/document/10002293",
        "https://ieeexplore.ieee.org/document/9497787",
        "https://ieeexplore.ieee.org/document/9652049",
        "https://ieeexplore.ieee.org/document/9747887",
        "https://ieeexplore.ieee.org/document/9606721"
      ]
    },
    {
      palabra: "3GPP",
      frecuencia: 125,
      asociacion: "Media",
      definicion: "3rd Generation Partnership Project — organismo de estandarización que define las especificaciones técnicas para redes móviles incluyendo NTN.",
      evolucion: "Presencia constante con pico asociado a los lanzamientos de Release 17 (2022) y Release 18 (2024).",
      contexto: "Marco de estandarización que habilita la interoperabilidad global de dispositivos NTN.",
      conclusion: "3GPP consolida el marco técnico para la integración de NTN en el ecosistema 5G y futuro 6G.",
      enlaces: [
        "https://ieeexplore.ieee.org/document/9764642",
        "https://ieeexplore.ieee.org/document/10002293",
        "https://ieeexplore.ieee.org/document/9984998",
        "https://ieeexplore.ieee.org/document/9880814",
        "https://ieeexplore.ieee.org/document/9664285",
        "https://ieeexplore.ieee.org/document/9537356",
        "https://ieeexplore.ieee.org/document/9652049",
        "https://ieeexplore.ieee.org/document/9747887",
        "https://ieeexplore.ieee.org/document/10104514",
        "https://ieeexplore.ieee.org/document/9497787"
      ]
    }
  ],

  miniCaso: {
    titulo: "Escenario LEO: Link Budget y Análisis Doppler",
    descripcion: "Calcula los parámetros de un enlace de comunicación satelital en órbita LEO considerando el efecto Doppler y el presupuesto de enlace.",
    parametros: {
      altura: { valor: 550, min: 300, max: 2000, unidad: "km", label: "Altitud orbital" },
      frecuencia: { valor: 2.0, min: 0.7, max: 30, unidad: "GHz", label: "Frecuencia portadora" },
      potencia: { valor: 30, min: 10, max: 60, unidad: "dBm", label: "Potencia de transmisión" },
      gananciaTx: { valor: 25, min: 0, max: 40, unidad: "dBi", label: "Ganancia antena TX" },
      gananciaRx: { valor: 20, min: 0, max: 40, unidad: "dBi", label: "Ganancia antena RX" },
      angulo: { valor: 30, min: 10, max: 90, unidad: "°", label: "Ángulo de elevación" }
    },
    resultados: {
      distancia: "Calculada según altitud y ángulo de elevación",
      pathLoss: "Pérdida de espacio libre en dB",
      doppler: "Desplazamiento Doppler máximo en kHz",
      snr: "Relación señal-ruido estimada en dB",
      dataRate: "Tasa de datos estimada en Mbps"
    }
  },

  reflexion: {
    aprendizajes: [
      "El análisis bibliométrico reveló que el campo de las NTN ha experimentado un crecimiento exponencial desde 2020, coincidiendo con la estandarización 3GPP Release 17 y el despliegue de constelaciones comerciales como Starlink.",
      "La identificación de seis clústeres temáticos principales permitió comprender la estructura del conocimiento en NTN, destacando la integración 5G/6G-satélite y las constelaciones LEO como las áreas más activas.",
      "El análisis por palabras seleccionadas evidenció la transición del enfoque puramente satelital hacia una visión integrada NTN-terrestre, donde términos como '5G NTN' y 'NB-IoT NTN' concentran el mayor dinamismo investigativo."
    ],
    desafios: [
      "La gestión del efecto Doppler en terminales de bajo costo sigue siendo un desafío técnico mayor que requiere soluciones innovadoras de procesamiento de señal.",
      "La interoperabilidad multi-órbita (LEO-MEO-GEO-HAPS) presenta complejidades arquitectónicas aún no resueltas completamente.",
      "El espectro limitado y la coordinación internacional representan barreras regulatorias para el despliegue masivo de NTN."
    ],
    futuro: [
      "La integración de IA/ML en la gestión de recursos radio de NTN será un campo de alta relevancia en los próximos años.",
      "Los satélites LEO de muy baja masa (cubesats) para comuniciones directas con smartphones abrirán nuevos mercados de consumo masivo.",
      "La arquitectura 6G nativa NTN promete una convergencia total entre redes terrestres y espaciales."
    ]
  },

  video: {
    titulo: "Sustentación del Proyecto NTN",
    descripcion: "Video de sustentación académica presentando los resultados del análisis bibliométrico sobre Non-Terrestrial Networks.",
    mensaje: "El video de sustentación está disponible en el canal del curso. Contacte a los integrantes del equipo para acceso."
  },

  referencias: [
    "Y. Su et al., \"Broadband LEO satellite communications: Architectures and key technologies,\" IEEE Wireless Communications, vol. 26, no. 2, pp. 55-61, Apr. 2019.",
    "X. Zhu and C. Jiang, \"Integrated satellite-terrestrial networks toward 6G: Architectures, applications, and challenges,\" IEEE Internet of Things Journal, vol. 9, no. 1, pp. 437-461, Jan. 2022.",
    "S. Dang et al., \"Non-terrestrial networks in 5G & beyond,\" IEEE Communications Surveys & Tutorials, vol. 24, no. 2, pp. 1024-1057, Second Quarter 2022.",
    "3GPP, \"Solutions for NR to support non-terrestrial networks (NTN),\" 3GPP TR 38.821, V16.0.0, Dec. 2019.",
    "3GPP, \"NR; NR and NG-RAN Overall Description; Stage 2,\" 3GPP TS 38.300, V17.4.0, Mar. 2023.",
    "O. Kodheli et al., \"Satellite communications in the new space era: A survey and future challenges,\" IEEE Communications Surveys & Tutorials, vol. 23, no. 1, pp. 70-109, First Quarter 2021.",
    "I. Leyva-Mayorga et al., \"LEO small-satellite constellations for 5G and beyond-5G communications,\" IEEE Access, vol. 8, pp. 184961-184991, 2020.",
    "H. Al-Hraishawi et al., \"A survey on non-geostationary satellite systems: The communication perspective,\" IEEE Communications Surveys & Tutorials, vol. 25, no. 1, pp. 101-132, First Quarter 2023.",
    "M. G. Kibria et al., \"The internet of things from space: Transforming long-range IoT using LEO satellites,\" IEEE Internet of Things Magazine, vol. 4, no. 4, pp. 120-126, Dec. 2021.",
    "N. Saeed et al., \"Cubesat communications: Recent advances and future challenges,\" IEEE Communications Surveys & Tutorials, vol. 22, no. 3, pp. 1839-1862, Third Quarter 2020.",
    "B. Di et al., \"Ultra-dense LEO: Integration of satellite access networks into 5G and beyond,\" IEEE Wireless Communications, vol. 26, no. 2, pp. 62-69, Apr. 2019.",
    "A. Guidotti et al., \"Architectures and key technical challenges for 5G systems incorporating satellites,\" IEEE Transactions on Vehicular Technology, vol. 68, no. 3, pp. 2624-2639, Mar. 2019.",
    "L. Bai et al., \"Performance analysis of satellite-to-ground downlink transmissions with hybrid beamforming,\" IEEE Transactions on Vehicular Technology, vol. 70, no. 7, pp. 6910-6922, Jul. 2021.",
    "C. N. Efrem and A. D. Panagopoulos, \"Dynamic traffic engineering for LEO satellite constellations with diverse ground equipment,\" IEEE Transactions on Network and Service Management, vol. 18, no. 4, pp. 3925-3940, Dec. 2021.",
    "P. Zhou et al., \"Dynamic clustering and cooperative scheduling for LEO satellite networks,\" IEEE Transactions on Wireless Communications, vol. 22, no. 3, pp. 1898-1912, Mar. 2023."
  ],

  chatbot: {
    nombre: "NTN Assistant",
    saludo: "Hola, soy el asistente de NTN. Puedo responder preguntas sobre Non-Terrestrial Networks, el análisis bibliométrico, clústeres de investigación, palabras clave y el mini-caso técnico. ¿En qué puedo ayudarte?",
    preguntasRapidas: [
      "¿Qué son las NTN?",
      "¿Cuáles son los clústeres principales?",
      "¿Qué es el mini-caso técnico?",
      "¿Cuáles son las tendencias?",
      "¿Qué es NB-IoT NTN?",
      "¿Cómo funciona el chatbot?"
    ],
    respuestas: {
      default: "Gracias por tu pregunta. Basándome en el contenido del sitio: ",
      ntn: "Las Non-Terrestrial Networks (NTN) son redes de comunicación que utilizan plataformas espaciales (satélites LEO, MEO, GEO) y aéreas (HAPS, drones) para proporcionar conectividad en áreas donde las redes terrestres no llegan. El análisis bibliométrico muestra 1,247 documentos publicados entre 2019-2025 con un crecimiento anual del 34.2%.",
      clusters: "Se identificaron 6 clústeres principales: (1) Integración 5G/6G-Satélite - 287 docs, (2) Constelaciones LEO y Cobertura - 265 docs, (3) IoT Satelital y NB-IoT - 198 docs, (4) Técnicas de Transmisión y Beamforming - 176 docs, (5) Seguridad y Resiliencia - 98 docs, (6) HAPS y Capa Estratosférica - 87 docs.",
      minicaso: "El mini-caso técnico es una herramienta interactiva que calcula parámetros de un enlace satelital LEO incluyendo: distancia al satélite, pérdida de espacio libre (path loss), desplazamiento Doppler, relación señal-ruido (SNR) y tasa de datos estimada. Puedes ajustar la altitud orbital, frecuencia, potencia, ganancias de antena y ángulo de elevación.",
      tendencias: "Las principales tendencias son: (1) Estandarización 5G NTN por 3GPP con Release 17 y 18, (2) Despliegue masivo de constelaciones LEO comerciales (Starlink, OneWeb, Kuiper), (3) NB-IoT NTN para IoT global, (4) Integración de IA/ML en gestión de recursos radio, (5) Desarrollo de arquitecturas 6G nativas NTN.",
      nbiot: "NB-IoT NTN (Narrowband IoT over Non-Terrestrial Networks) es una tecnología estandarizada por 3GPP que permite a dispositivos IoT de baja potencia conectarse directamente a satélites sin modificar el hardware. Es el caso de uso más maduro para comunicaciones masivas vía satélite, con aplicaciones en agricultura, logística y monitoreo ambiental.",
      chatbot: "Este asistente funciona localmente con JavaScript puro, sin APIs externas ni costos. Analiza tus preguntas mediante palabras clave y responde con información precisa del contenido académico del sitio. Puedes preguntar sobre NTN, metodología, clústeres, palabras clave, el mini-caso técnico o las referencias bibliográficas.",
      leo: "Los satélites LEO (Low Earth Orbit) operan entre 300-2,000 km de altitud, ofreciendo latencias bajas (20-40 ms) y altas velocidades. Constelaciones como Starlink (4,000+ satélites), OneWeb (648 satélites) y Project Kuiper están transformando el acceso a internet global.",
      doppler: "El efecto Doppler en comunicaciones satelitales LEO causa un desplazamiento de frecuencia debido al movimiento rápido del satélite (aprox. 7.5 km/s). A 2 GHz y 550 km de altitud, el desplazamiento máximo es de aproximadamente ±50 kHz, lo que requiere compensación en el receptor.",
      beamforming: "El beamforming en NTN permite dirigir el haz de antena hacia usuarios específicos, mejorando la eficiencia espectral y reduciendo interferencias. En satélites LEO, el beamforming adaptativo compensa el movimiento orbital y optimiza el uso del espectro limitado.",
      integrantes: "El equipo está conformado por: Marcos David Arrieta Barreto (2204657), Johan Sebastian Peña Castillo (2170491), Juan David Suarez Corzo (2164685) y Juan Manuel Torres Melo (2204212).",
      metodologia: "La metodología consta de 6 pasos: (1) Definición de estrategia de búsqueda, (2) Filtrado y selección de documentos, (3) Análisis bibliométrico, (4) Identificación de clústeres temáticos, (5) Análisis por palabras seleccionadas, (6) Interpretación y propuesta de oportunidades. Se analizaron 1,247 documentos de Scopus, Web of Science e IEEE Xplore.",
      referencias: "El sitio incluye 15 referencias IEEE de alto impacto sobre NTN, incluyendo artículos de IEEE Communications Surveys & Tutorials, IEEE Wireless Communications y especificaciones 3GPP. Puedes consultar la sección de Referencias para el listado completo con DOI."
    }
  }
};
