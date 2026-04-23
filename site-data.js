window.SITE_DATA = {
  "meta": {
    "title": "NTN en 5G-Advanced y 6G: análisis bibliométrico, mini-caso técnico y asistente conversacional",
    "subtitle": "Blog académico-digital sobre redes no terrestres, integración satelital y tendencias de investigación en comunicaciones digitales.",
    "declaration": "La presente Divulgación Pública de la Ciencia, a través del siguiente Desarrollo Web, tiene una ruta de circulación nacional sin enfoque diferencial y está dirigido a la comunidad o público objetivo conformado por jóvenes, adultos, empresarios y/o empresa en género literario informativo de tipo Blog, con componente digital a través de soporte web.",
    "highlights": [
      "Tema asignado: Non-Terrestrial Networks (NTN)",
      "Cadena base en Scopus: \"non-terrestrial networks\" OR NTN OR \"satellite 5G\"",
      "Términos manuales en el mapa: 78",
      "Incluye chatbot local gratuito, calculadora de mini-caso y secciones listas para publicar."
    ]
  },
  "team": [
    {
      "name": "Marcos David Arrieta Barreto",
      "id": "2204657"
    },
    {
      "name": "Johan Sebastian Peña Castillo",
      "id": "2170491"
    },
    {
      "name": "Juan David Suarez Corzo",
      "id": "2164685"
    },
    {
      "name": "Juan Manuel Torres Melo",
      "id": "2204212"
    }
  ],
  "research": {
    "question": "¿Qué líneas de investigación dominan hoy las NTN y cómo se conectan la integración 5G/6G, el segmento espacial y las técnicas de optimización inteligente?",
    "general_objective": "Caracterizar las tendencias recientes en Non-Terrestrial Networks mediante análisis bibliométrico y transferir el aprendizaje a un mini-caso técnico de link budget con Doppler para un enlace LEO.",
    "specific_objectives": [
      "Depurar una exportación de Scopus para identificar términos, enlaces y clústeres relevantes en NTN.",
      "Interpretar 20 palabras seleccionadas con 10 enlaces por palabra y fuerza de asociación descendente.",
      "Traducir los hallazgos bibliométricos en un mini-caso técnico replicable con supuestos explícitos.",
      "Reflexionar sobre estrategias de aprendizaje, sesgos de búsqueda y criterios de calidad de la información."
    ]
  },
  "glossary": [
    {
      "term": "NTN",
      "definition": "Redes no terrestres que integran satélites, HAPS o plataformas aéreas con infraestructura terrestre."
    },
    {
      "term": "LEO",
      "definition": "Órbita terrestre baja; usada por constelaciones que mejoran latencia pero exigen handover frecuente."
    },
    {
      "term": "HAPS",
      "definition": "High Altitude Platform Station; plataforma estratosférica que amplía cobertura y flexibilidad de despliegue."
    },
    {
      "term": "RAN",
      "definition": "Radio Access Network; conjunto de funciones que conecta el usuario con la red de acceso radio."
    },
    {
      "term": "Doppler",
      "definition": "Corrimiento de frecuencia causado por el movimiento relativo satélite-receptor, muy relevante en LEO."
    },
    {
      "term": "Feeder link",
      "definition": "Enlace entre el satélite y la pasarela terrestre que soporta el backhaul de la red."
    }
  ],
  "method": {
    "search_query": "\"non-terrestrial networks\" OR NTN OR \"satellite 5G\"",
    "steps": [
      "Se tomó la exportación CSV de Scopus cargada por el equipo en esta conversación.",
      "Se restringió el análisis al rango 2016–2025, en línea con la recomendación metodológica del curso.",
      "Se aplicó un filtrado temático por título y resumen para eliminar coincidencias no relacionadas con comunicaciones NTN.",
      "Se normalizaron variantes léxicas de palabras clave: NTN, non-terrestrial network, 5G NR, satellite communications, LEO satellites, entre otras.",
      "Se descartaron términos biomédicos, geográficos o genéricos producidos por el ruido del acrónimo NTN.",
      "Se construyó una red de co-ocurrencias con términos de frecuencia mínima 12 y se interpretaron clústeres y enlaces.",
      "Finalmente se diseñó un mini-caso técnico sobre margen de enlace y Doppler para un enlace LEO a gateway urbano."
    ],
    "removed_terms": [
      {
        "term": "terrestrial networks",
        "count": 1295,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "orbits",
        "count": 514,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "satellites",
        "count": 289,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "mobile telecommunication systems",
        "count": 226,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "antennas",
        "count": 209,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "network architecture",
        "count": 186,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "earth orbits",
        "count": 138,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "quality of service",
        "count": 112,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "network layers",
        "count": 99,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "wireless networks",
        "count": 93,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "tropics",
        "count": 87,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      },
      {
        "term": "satellite antennas",
        "count": 85,
        "reason": "Ruido general o coincidencia acronímica ajena a NTN"
      }
    ]
  },
  "stats": [
    {
      "label": "Documentos iniciales en CSV",
      "value": "4022",
      "note": "Registros presentes en la exportación cargada"
    },
    {
      "label": "Documentos filtrados 2016–2025",
      "value": "1960",
      "note": "Tras depuración temática automática"
    },
    {
      "label": "Palabras clave únicas iniciales",
      "value": "21688",
      "note": "Index Keywords crudos de Scopus"
    },
    {
      "label": "Términos manuales usados en el mapa",
      "value": "78",
      "note": "Frecuencia mínima 12 en el conjunto depurado"
    }
  ],
  "clusters": [
    {
      "name": "Arquitectura NTN y evolución 5G/6G",
      "color": "#2563eb",
      "node_count": 49,
      "edge_strength": 3095,
      "top_terms": [
        "NTN",
        "5G",
        "6G",
        "IoT",
        "uav (uav)",
        "UAV",
        "HAPS",
        "FSO"
      ],
      "summary": "Agrupa el núcleo conceptual de la bibliografía: NTN como arquitectura, su acople con 5G/6G, y temas de capa física como beamforming, MIMO, estimación de canal y seguridad.",
      "opportunities": "Movilidad 5G-Advanced, diseño físico para enlaces variables y convergencia con Open RAN e ISAC."
    },
    {
      "name": "Segmento espacial y enlaces satelitales",
      "color": "#0f766e",
      "node_count": 17,
      "edge_strength": 2024,
      "top_terms": [
        "comunicación satelital",
        "communication satellite",
        "satélite LEO",
        "enlace satelital",
        "red satelital",
        "satélite GEO",
        "posicionamiento",
        "efecto Doppler"
      ],
      "summary": "Concentra la literatura sobre satélites LEO/GEO, feeder links, posicionamiento, sincronización y continuidad del enlace.",
      "opportunities": "Modelos de Doppler, multiconectividad, handover predictivo y gestión de constelaciones."
    },
    {
      "name": "IA, optimización y gestión de recursos",
      "color": "#7c3aed",
      "node_count": 12,
      "edge_strength": 417,
      "top_terms": [
        "asignación de recursos",
        "aprendizaje por refuerzo",
        "aprendizaje profundo",
        "aprendizaje profundo por refuerzo",
        "edge computing",
        "learning algorithms",
        "offloading computacional",
        "sagin"
      ],
      "summary": "Reúne trabajos donde la optimización se apoya en IA: aprendizaje por refuerzo, edge computing, federated learning y offloading.",
      "opportunities": "Automatización de recursos, slicing inteligente y control distribuido de NTN para servicios críticos e IoT."
    }
  ],
  "word_analyses": [
    {
      "word": "ntn",
      "display": "NTN",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 818,
      "links": [
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 360,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 271,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 192,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 175,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 161,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 92,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 85,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite link",
          "display": "enlace satelital",
          "weight": 73,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "haps",
          "display": "HAPS",
          "weight": 67,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "reinforcement learning",
          "display": "aprendizaje por refuerzo",
          "weight": 63,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "analysis": "La palabra clave NTN aparece 818 veces en el conjunto depurado y se conecta con comunicación satelital, 5G, communication satellite, satélite LEO. Su relación más fuerte es con comunicación satelital (fuerza 360), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como aprendizaje por refuerzo (fuerza 63) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, NTN cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/ntn.png"
    },
    {
      "word": "5g",
      "display": "5G",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 601,
      "links": [
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 271,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 253,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 109,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 107,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 101,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 65,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite link",
          "display": "enlace satelital",
          "weight": 52,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 49,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "geo satellite",
          "display": "satélite GEO",
          "weight": 46,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite network",
          "display": "red satelital",
          "weight": 44,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "analysis": "La palabra clave 5G aparece 601 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, communication satellite, satélite LEO. Su relación más fuerte es con NTN (fuerza 271), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como red satelital (fuerza 44) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, 5G cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/5g.png"
    },
    {
      "word": "6g",
      "display": "6G",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 231,
      "links": [
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 161,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 104,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 101,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 54,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 44,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite network",
          "display": "red satelital",
          "weight": 24,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 22,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "haps",
          "display": "HAPS",
          "weight": 21,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "beamforming",
          "display": "beamforming",
          "weight": 20,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 19,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "analysis": "La palabra clave 6G aparece 231 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, 5G, communication satellite. Su relación más fuerte es con NTN (fuerza 161), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como IoT (fuerza 19) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, 6G cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/6g.png"
    },
    {
      "word": "uav",
      "display": "UAV",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 145,
      "links": [
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 121,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 62,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 38,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 23,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "haps",
          "display": "HAPS",
          "weight": 22,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "reinforcement learning",
          "display": "aprendizaje por refuerzo",
          "weight": 21,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "deep learning",
          "display": "aprendizaje profundo",
          "weight": 18,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 16,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 15,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "analysis": "La palabra clave UAV aparece 145 veces en el conjunto depurado y se conecta con uav (uav), NTN, 5G, comunicación satelital. Su relación más fuerte es con uav (uav) (fuerza 121), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como satélite LEO (fuerza 15) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, UAV cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/uav.png"
    },
    {
      "word": "haps",
      "display": "HAPS",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 112,
      "links": [
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 67,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 35,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 28,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 26,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav",
          "display": "UAV",
          "weight": 22,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 21,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 16,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "fso",
          "display": "FSO",
          "weight": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 15,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "resource allocation",
          "display": "asignación de recursos",
          "weight": 10,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "analysis": "La palabra clave HAPS aparece 112 veces en el conjunto depurado y se conecta con NTN, 5G, uav (uav), comunicación satelital. Su relación más fuerte es con NTN (fuerza 67), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como asignación de recursos (fuerza 10) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, HAPS cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/haps.png"
    },
    {
      "word": "beamforming",
      "display": "beamforming",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 75,
      "links": [
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 38,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 27,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 20,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 17,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 17,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 16,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 14,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "mimo",
          "display": "MIMO",
          "weight": 13,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav",
          "display": "UAV",
          "weight": 12,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "haps",
          "display": "HAPS",
          "weight": 9,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "analysis": "La palabra clave beamforming aparece 75 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, 6G, communication satellite. Su relación más fuerte es con NTN (fuerza 38), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como HAPS (fuerza 9) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, beamforming cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/beamforming.png"
    },
    {
      "word": "ran",
      "display": "RAN",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 70,
      "links": [
        {
          "term": "5g",
          "display": "5G",
          "weight": 42,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 36,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 18,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "open ran",
          "display": "Open RAN",
          "weight": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 11,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "resource allocation",
          "display": "asignación de recursos",
          "weight": 11,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 9,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 8,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "machine learning",
          "display": "machine learning",
          "weight": 7,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "deep learning",
          "display": "aprendizaje profundo",
          "weight": 5,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "analysis": "La palabra clave RAN aparece 70 veces en el conjunto depurado y se conecta con 5G, NTN, comunicación satelital, Open RAN. Su relación más fuerte es con 5G (fuerza 42), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como aprendizaje profundo (fuerza 5) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, RAN cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/ran.png"
    },
    {
      "word": "satellite communication",
      "display": "comunicación satelital",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 747,
      "links": [
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 362,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 360,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 263,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 253,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 104,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite link",
          "display": "enlace satelital",
          "weight": 103,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite network",
          "display": "red satelital",
          "weight": 96,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 89,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "geo satellite",
          "display": "satélite GEO",
          "weight": 60,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "fso",
          "display": "FSO",
          "weight": 46,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "analysis": "La palabra clave comunicación satelital aparece 747 veces en el conjunto depurado y se conecta con communication satellite, NTN, satélite LEO, 5G. Su relación más fuerte es con communication satellite (fuerza 362), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como FSO (fuerza 46) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, comunicación satelital cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/satellitecommunication.png"
    },
    {
      "word": "leo satellite",
      "display": "satélite LEO",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 363,
      "links": [
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 263,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 190,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 175,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 107,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite link",
          "display": "enlace satelital",
          "weight": 51,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite constellations",
          "display": "satellite constellations",
          "weight": 46,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 44,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 43,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite network",
          "display": "red satelital",
          "weight": 39,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "reinforcement learning",
          "display": "aprendizaje por refuerzo",
          "weight": 31,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "analysis": "La palabra clave satélite LEO aparece 363 veces en el conjunto depurado y se conecta con comunicación satelital, communication satellite, NTN, 5G. Su relación más fuerte es con comunicación satelital (fuerza 263), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como aprendizaje por refuerzo (fuerza 31) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, satélite LEO cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/leosatellite.png"
    },
    {
      "word": "satellite link",
      "display": "enlace satelital",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 152,
      "links": [
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 103,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 73,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 65,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 52,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 51,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "intersatellite link",
          "display": "enlace intersatelital",
          "weight": 23,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite network",
          "display": "red satelital",
          "weight": 20,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 18,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "geo satellite",
          "display": "satélite GEO",
          "weight": 18,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite constellations",
          "display": "satellite constellations",
          "weight": 18,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "analysis": "La palabra clave enlace satelital aparece 152 veces en el conjunto depurado y se conecta con comunicación satelital, NTN, communication satellite, 5G. Su relación más fuerte es con comunicación satelital (fuerza 103), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como satellite constellations (fuerza 18) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, enlace satelital cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/satellitelink.png"
    },
    {
      "word": "satellite network",
      "display": "red satelital",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 128,
      "links": [
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 96,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 55,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 44,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 40,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 39,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 24,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite link",
          "display": "enlace satelital",
          "weight": 20,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "reinforcement learning",
          "display": "aprendizaje por refuerzo",
          "weight": 9,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "resource allocation",
          "display": "asignación de recursos",
          "weight": 8,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "analysis": "La palabra clave red satelital aparece 128 veces en el conjunto depurado y se conecta con comunicación satelital, communication satellite, 5G, NTN. Su relación más fuerte es con comunicación satelital (fuerza 96), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como asignación de recursos (fuerza 8) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, red satelital cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/satellitenetwork.png"
    },
    {
      "word": "geo satellite",
      "display": "satélite GEO",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 84,
      "links": [
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 60,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 56,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 46,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 34,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 25,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite link",
          "display": "enlace satelital",
          "weight": 18,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 13,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 12,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite constellations",
          "display": "satellite constellations",
          "weight": 7,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "gateways (computer networks)",
          "display": "gateways (computer networks)",
          "weight": 6,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "analysis": "La palabra clave satélite GEO aparece 84 veces en el conjunto depurado y se conecta con comunicación satelital, NTN, 5G, communication satellite. Su relación más fuerte es con comunicación satelital (fuerza 60), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como gateways (computer networks) (fuerza 6) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, satélite GEO cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/geosatellite.png"
    },
    {
      "word": "positioning",
      "display": "posicionamiento",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 61,
      "links": [
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 40,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 39,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 24,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 24,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 21,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "positioning navigation and timings",
          "display": "positioning navigation and timings",
          "weight": 15,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 12,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "tracking (position)",
          "display": "tracking (position)",
          "weight": 8,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 7,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "doppler effect",
          "display": "efecto Doppler",
          "weight": 7,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "analysis": "La palabra clave posicionamiento aparece 61 veces en el conjunto depurado y se conecta con communication satellite, comunicación satelital, 5G, NTN. Su relación más fuerte es con communication satellite (fuerza 40), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como efecto Doppler (fuerza 7) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, posicionamiento cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/positioning.png"
    },
    {
      "word": "feeder link",
      "display": "feeder link",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 24,
      "links": [
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 12,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 10,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite link",
          "display": "enlace satelital",
          "weight": 8,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 7,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "gateways (computer networks)",
          "display": "gateways (computer networks)",
          "weight": 7,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "haps",
          "display": "HAPS",
          "weight": 6,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 5,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 4,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "intersatellite link",
          "display": "enlace intersatelital",
          "weight": 4,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "analysis": "La palabra clave feeder link aparece 24 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, satélite LEO, enlace satelital. Su relación más fuerte es con NTN (fuerza 15), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como enlace intersatelital (fuerza 4) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, feeder link cumple un papel relevante dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/feederlink.png"
    },
    {
      "word": "reinforcement learning",
      "display": "aprendizaje por refuerzo",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 117,
      "links": [
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 63,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "deep learning",
          "display": "aprendizaje profundo",
          "weight": 61,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "deep reinforcement learning",
          "display": "aprendizaje profundo por refuerzo",
          "weight": 56,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 43,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "resource allocation",
          "display": "asignación de recursos",
          "weight": 35,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 31,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 25,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 24,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 23,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav",
          "display": "UAV",
          "weight": 21,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "analysis": "La palabra clave aprendizaje por refuerzo aparece 117 veces en el conjunto depurado y se conecta con NTN, aprendizaje profundo, aprendizaje profundo por refuerzo, comunicación satelital. Su relación más fuerte es con NTN (fuerza 63), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como UAV (fuerza 21) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, aprendizaje por refuerzo cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/reinforcementlearning.png"
    },
    {
      "word": "resource allocation",
      "display": "asignación de recursos",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 130,
      "links": [
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 60,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 45,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "reinforcement learning",
          "display": "aprendizaje por refuerzo",
          "weight": 35,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 30,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "deep learning",
          "display": "aprendizaje profundo",
          "weight": 28,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "deep reinforcement learning",
          "display": "aprendizaje profundo por refuerzo",
          "weight": 25,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 22,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 22,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 18,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav",
          "display": "UAV",
          "weight": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "analysis": "La palabra clave asignación de recursos aparece 130 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, aprendizaje por refuerzo, satélite LEO. Su relación más fuerte es con NTN (fuerza 60), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como UAV (fuerza 15) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, asignación de recursos cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/resourceallocation.png"
    },
    {
      "word": "deep learning",
      "display": "aprendizaje profundo",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 94,
      "links": [
        {
          "term": "reinforcement learning",
          "display": "aprendizaje por refuerzo",
          "weight": 61,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 48,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "deep reinforcement learning",
          "display": "aprendizaje profundo por refuerzo",
          "weight": 39,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "resource allocation",
          "display": "asignación de recursos",
          "weight": 28,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 25,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 23,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 23,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 18,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav",
          "display": "UAV",
          "weight": 18,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "analysis": "La palabra clave aprendizaje profundo aparece 94 veces en el conjunto depurado y se conecta con aprendizaje por refuerzo, NTN, aprendizaje profundo por refuerzo, asignación de recursos. Su relación más fuerte es con aprendizaje por refuerzo (fuerza 61), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como 6G (fuerza 15) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, aprendizaje profundo cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/deeplearning.png"
    },
    {
      "word": "edge computing",
      "display": "edge computing",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 54,
      "links": [
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 23,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "computation offloading",
          "display": "offloading computacional",
          "weight": 18,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 17,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5g",
          "display": "5G",
          "weight": 14,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "display": "communication satellite",
          "weight": 11,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 11,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "reinforcement learning",
          "display": "aprendizaje por refuerzo",
          "weight": 9,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "uav",
          "display": "UAV",
          "weight": 9,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 8,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 8,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "analysis": "La palabra clave edge computing aparece 54 veces en el conjunto depurado y se conecta con NTN, offloading computacional, comunicación satelital, 5G. Su relación más fuerte es con NTN (fuerza 23), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como satélite LEO (fuerza 8) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, edge computing cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/edgecomputing.png"
    },
    {
      "word": "computation offloading",
      "display": "offloading computacional",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 25,
      "links": [
        {
          "term": "edge computing",
          "display": "edge computing",
          "weight": 18,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 14,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "reinforcement learning",
          "display": "aprendizaje por refuerzo",
          "weight": 8,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 8,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 8,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 7,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "resource allocation",
          "display": "asignación de recursos",
          "weight": 7,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "iot",
          "display": "IoT",
          "weight": 5,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav",
          "display": "UAV",
          "weight": 5,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "deep learning",
          "display": "aprendizaje profundo",
          "weight": 4,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "analysis": "La palabra clave offloading computacional aparece 25 veces en el conjunto depurado y se conecta con edge computing, NTN, aprendizaje por refuerzo, comunicación satelital. Su relación más fuerte es con edge computing (fuerza 18), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como aprendizaje profundo (fuerza 4) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, offloading computacional cumple un papel relevante dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/computationoffloading.png"
    },
    {
      "word": "federated learning",
      "display": "aprendizaje federado",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 22,
      "links": [
        {
          "term": "ntn",
          "display": "NTN",
          "weight": 10,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6g",
          "display": "6G",
          "weight": 6,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "deep learning",
          "display": "aprendizaje profundo",
          "weight": 6,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "machine learning",
          "display": "machine learning",
          "weight": 5,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "reinforcement learning",
          "display": "aprendizaje por refuerzo",
          "weight": 5,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "satellite communication",
          "display": "comunicación satelital",
          "weight": 4,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav",
          "display": "UAV",
          "weight": 4,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "deep reinforcement learning",
          "display": "aprendizaje profundo por refuerzo",
          "weight": 3,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "leo satellite",
          "display": "satélite LEO",
          "weight": 3,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "display": "uav (uav)",
          "weight": 3,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "analysis": "La palabra clave aprendizaje federado aparece 22 veces en el conjunto depurado y se conecta con NTN, 6G, aprendizaje profundo, machine learning. Su relación más fuerte es con NTN (fuerza 10), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como uav (uav) (fuerza 3) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, aprendizaje federado cumple un papel relevante dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "image": "assets/words/federatedlearning.png"
    }
  ],
  "mini_case": {
    "objective": "Comparar cómo cambian el margen de enlace, el retardo y el Doppler cuando un gateway urbano opera un enlace LEO en dos perfiles simplificados: S-band IoT (2 GHz) y Ka-band feeder (20 GHz).",
    "hypothesis": "Si la elevación aumenta, el enlace mejora por menor distancia oblicua; sin embargo, en frecuencias altas el Doppler y la pérdida de espacio libre obligan a usar mayor ganancia, compensación predictiva y control de handover.",
    "assumptions": [
      "Órbita LEO fija de 600 km para mantener comparabilidad entre escenarios.",
      "Evaluación simplificada con propagación de espacio libre, pérdidas agregadas y sin lluvia ni desvanecimiento dinámico detallado.",
      "Perfil S-band IoT: 2 GHz, EIRP 43 dBm, ganancia receptora 15 dBi y BW de 1 MHz.",
      "Perfil Ka-band feeder: 20 GHz, EIRP 58 dBm, ganancia receptora 35 dBi y BW de 20 MHz.",
      "Velocidad orbital equivalente de 7.56 km/s para el cálculo aproximado del Doppler radial."
    ],
    "findings": [
      "El margen mejora conforme la elevación crece porque la distancia oblicua baja y disminuye la FSPL.",
      "El perfil Ka-band ofrece mayor capacidad potencial, pero su Doppler y pérdida por frecuencia son mucho más severos.",
      "En elevaciones bajas, la planificación de handover y la compensación Doppler tienen más impacto que una simple subida de potencia.",
      "Para un despliegue real conviene fijar una máscara de elevación y activar conmutación de feeder links o diversidad de gateway."
    ],
    "raw": {
      "altitude_km": 600.0,
      "results": {
        "S-band IoT (2 GHz)": {
          "elevations": [
            10,
            15,
            20,
            25,
            30,
            35,
            40,
            45,
            50,
            55,
            60,
            65,
            70,
            75,
            80
          ],
          "distance_km": [
            1931.6,
            1625.8,
            1392.2,
            1213.2,
            1075.1,
            967.3,
            882.3,
            814.8,
            760.8,
            717.6,
            683.2,
            655.9,
            634.9,
            619.3,
            608.4
          ],
          "fspl_db": [
            164.19,
            162.69,
            161.34,
            160.15,
            159.1,
            158.18,
            157.38,
            156.69,
            156.1,
            155.59,
            155.16,
            154.81,
            154.52,
            154.31,
            154.15
          ],
          "prx_dbm": [
            -109.19,
            -107.69,
            -106.34,
            -105.15,
            -104.1,
            -103.18,
            -102.38,
            -101.69,
            -101.1,
            -100.59,
            -100.16,
            -99.81,
            -99.52,
            -99.31,
            -99.15
          ],
          "snr_db": [
            1.81,
            3.31,
            4.66,
            5.85,
            6.9,
            7.82,
            8.62,
            9.31,
            9.9,
            10.41,
            10.84,
            11.19,
            11.48,
            11.69,
            11.85
          ],
          "margin_db": [
            -0.19,
            1.31,
            2.66,
            3.85,
            4.9,
            5.82,
            6.62,
            7.31,
            7.9,
            8.41,
            8.84,
            9.19,
            9.48,
            9.69,
            9.85
          ],
          "delay_ms": [
            6.443,
            5.423,
            4.644,
            4.047,
            3.586,
            3.227,
            2.943,
            2.718,
            2.538,
            2.394,
            2.279,
            2.188,
            2.118,
            2.066,
            2.03
          ],
          "doppler_hz": [
            49668.7,
            48716.4,
            47393.3,
            45709.5,
            43677.9,
            41313.8,
            38635.4,
            35662.9,
            32418.9,
            28928.3,
            25217.4,
            21314.7,
            17249.7,
            13053.5,
            8757.9
          ],
          "ber_bpsk": [
            0.04075,
            0.01924,
            0.007822,
            0.002772,
            0.0008741,
            0.0002519,
            6.844e-05,
            1.815e-05,
            4.871e-06,
            1.372e-06,
            4.203e-07,
            1.449e-07,
            5.79e-08,
            2.756e-08,
            1.597e-08
          ],
          "config": {
            "freq": 2.0,
            "eirp": 43.0,
            "grx": 15.0,
            "losses": 3.0,
            "bandwidth": 1000000.0,
            "nf": 3.0,
            "req_snr": 2.0
          }
        },
        "Ka-band feeder (20 GHz)": {
          "elevations": [
            10,
            15,
            20,
            25,
            30,
            35,
            40,
            45,
            50,
            55,
            60,
            65,
            70,
            75,
            80
          ],
          "distance_km": [
            1931.6,
            1625.8,
            1392.2,
            1213.2,
            1075.1,
            967.3,
            882.3,
            814.8,
            760.8,
            717.6,
            683.2,
            655.9,
            634.9,
            619.3,
            608.4
          ],
          "fspl_db": [
            184.19,
            182.69,
            181.34,
            180.15,
            179.1,
            178.18,
            177.38,
            176.69,
            176.1,
            175.59,
            175.16,
            174.81,
            174.52,
            174.31,
            174.15
          ],
          "prx_dbm": [
            -96.19,
            -94.69,
            -93.34,
            -92.15,
            -91.1,
            -90.18,
            -89.38,
            -88.69,
            -88.1,
            -87.59,
            -87.16,
            -86.81,
            -86.52,
            -86.31,
            -86.15
          ],
          "snr_db": [
            0.8,
            2.3,
            3.65,
            4.84,
            5.89,
            6.81,
            7.61,
            8.3,
            8.89,
            9.4,
            9.83,
            10.18,
            10.46,
            10.68,
            10.83
          ],
          "margin_db": [
            -5.2,
            -3.7,
            -2.35,
            -1.16,
            -0.11,
            0.81,
            1.61,
            2.3,
            2.89,
            3.4,
            3.83,
            4.18,
            4.46,
            4.68,
            4.83
          ],
          "delay_ms": [
            6.443,
            5.423,
            4.644,
            4.047,
            3.586,
            3.227,
            2.943,
            2.718,
            2.538,
            2.394,
            2.279,
            2.188,
            2.118,
            2.066,
            2.03
          ],
          "doppler_hz": [
            496686.7,
            487163.6,
            473933.0,
            457095.3,
            436779.0,
            413138.4,
            386353.7,
            356628.5,
            324189.2,
            289282.7,
            252174.5,
            213147.1,
            172497.5,
            130535.1,
            87579.3
          ],
          "ber_bpsk": [
            0.06048,
            0.03271,
            0.01571,
            0.006774,
            0.002666,
            0.0009782,
            0.0003432,
            0.0001183,
            4.122e-05,
            1.495e-05,
            5.804e-06,
            2.477e-06,
            1.191e-06,
            6.582e-07,
            4.256e-07
          ],
          "config": {
            "freq": 20.0,
            "eirp": 58.0,
            "grx": 35.0,
            "losses": 5.0,
            "bandwidth": 20000000.0,
            "nf": 4.0,
            "req_snr": 6.0
          }
        }
      }
    }
  },
  "video": {
    "youtube_id": "VIDEO_ID_AQUI"
  },
  "reflection": [
    "La búsqueda por siglas como NTN produce mucho ruido interdisciplinario; por eso fue necesario combinar filtrado temático con normalización manual.",
    "La combinación entre bibliometría y mini-caso técnico ayuda a pasar de un mapa descriptivo a decisiones de ingeniería concretas.",
    "Las palabras con alta fuerza de asociación suelen representar temas consolidados; las conexiones débiles revelan nichos emergentes para futuros trabajos.",
    "Para validar calidad, se priorizaron artículos de survey, revistas IEEE y títulos con relación explícita a 5G-Advanced, 6G, satélites o integración TN/NTN.",
    "En próximos ciclos conviene contrastar este sitio con la exportación directa de VOSviewer y conservar una bitácora de términos excluidos desde el primer día."
  ],
  "references": [
    "Giordani M.; Zorzi M., \"Non-Terrestrial Networks in the 6G Era: Challenges and Opportunities,\" IEEE Network, vol. 35, no. 2, pp. 244-251, 2021. doi: 10.1109/MNET.011.2000493.",
    "Azari M.M.; Solanki S.; Chatzinotas S.; Kodheli O.; Sallouha H.; Colpaert A.; Mendoza Montoya J.F.; Pollin S.; Haqiqatnejad A.; Mostaani A.; Lagunas E.; Ottersten B., \"Evolution of Non-Terrestrial Networks from 5G to 6G: A Survey,\" IEEE Communications Surveys and Tutorials, vol. 24, no. 4, pp. 2633-2672, 2022. doi: 10.1109/COMST.2022.3199901.",
    "Lin X.; Rommer S.; Euler S.; Yavuz E.A.; Karlsson R.S., \"5G from Space: An Overview of 3GPP Non-Terrestrial Networks,\" IEEE Communications Standards Magazine, vol. 5, no. 4, pp. 147-153, 2021. doi: 10.1109/MCOMSTD.011.2100038.",
    "Rinaldi F.; Määttänen H.-L.; Torsner J.; Pizzi S.; Andreev S.; Iera A.; Koucheryavy Y.; Araniti G., \"Non-terrestrial networks in 5G & beyond: A survey,\" IEEE Access, vol. 8, pp. 165178-165200, 2020. doi: 10.1109/ACCESS.2020.3022981.",
    "Vaezi M.; Azari A.; Khosravirad S.R.; Shirvanimoghaddam M.; Azari M.M.; Chasaki D.; Popovski P., \"Cellular, Wide-Area, and Non-Terrestrial IoT: A Survey on 5G Advances and the Road Toward 6G,\" IEEE Communications Surveys and Tutorials, vol. 24, no. 2, pp. 1117-1174, 2022. doi: 10.1109/COMST.2022.3151028.",
    "Kodheli O.; Lagunas E.; Maturo N.; Sharma S.K.; Shankar B.; Montoya J.F.M.; Duncan J.C.M.; Spano D.; Chatzinotas S.; Kisseleff S.; Querol J.; Lei L.; Vu T.X.; Goussetis G., \"Satellite Communications in the New Space Era: A Survey and Future Challenges,\" IEEE Communications Surveys and Tutorials, vol. 23, no. 1, pp. 70-109, 2021. doi: 10.1109/COMST.2020.3028247.",
    "Al-Hraishawi H.; Chougrani H.; Kisseleff S.; Lagunas E.; Chatzinotas S., \"A Survey on Nongeostationary Satellite Systems: The Communication Perspective,\" IEEE Communications Surveys and Tutorials, vol. 25, no. 1, pp. 101-132, 2023. doi: 10.1109/COMST.2022.3197695.",
    "Giambene G.; Kota S.; Pillai P., \"Satellite-5G Integration: A Network Perspective,\" IEEE Network, vol. 32, no. 5, pp. 25-31, 2018. doi: 10.1109/MNET.2018.1800037.",
    "Guidotti A.; Vanelli-Coralli A.; Conti M.; Andrenacci S.; Chatzinotas S.; Maturo N.; Evans B.; Awoseyila A.; Ugolini A.; Foggi T.; Gaudio L.; Alagha N.; Cioni S., \"Architectures and key technical challenges for 5G systems incorporating satellites,\" IEEE Transactions on Vehicular Technology, vol. 68, no. 3, pp. 2624-2639, 2019. doi: 10.1109/TVT.2019.2895263.",
    "Mahboob S.; Liu L., \"Revolutionizing Future Connectivity: A Contemporary Survey on AI-Empowered Satellite-Based Non-Terrestrial Networks in 6G,\" IEEE Communications Surveys and Tutorials, vol. 26, no. 2, pp. 1279-1321, 2024. doi: 10.1109/COMST.2023.3347145.",
    "Araniti G.; Iera A.; Pizzi S.; Rinaldi F., \"Toward 6G Non-Terrestrial Networks,\" IEEE Network, vol. 36, no. 1, pp. 113-120, 2022. doi: 10.1109/MNET.011.2100191.",
    "Cui H.; Zhang J.; Geng Y.; Xiao Z.; Sun T.; Zhang N.; Liu J.; Wu Q.; Cao X., \"Space-air-ground integrated network (SAGIN) for 6G: Requirements, architecture and challenges,\" China Communications, vol. 19, no. 2, pp. 90-108, 2022. doi: 10.23919/JCC.2022.02.008."
  ],
  "chatbot": {
    "knowledge": [
      {
        "title": "Presentación",
        "text": "Este blog analiza Non-Terrestrial Networks, o NTN, como tendencia de comunicaciones digitales en 5G-Advanced y 6G."
      },
      {
        "title": "Metodología",
        "text": "La cadena de búsqueda base del proyecto fue \"non-terrestrial networks\" OR NTN OR \"satellite 5G\" y el rango recomendado se fijó entre 2016 y 2025."
      },
      {
        "title": "Depuración",
        "text": "El CSV inicial contenía 4022 documentos y 21688 palabras clave únicas. Tras el filtrado temático quedaron 1960 documentos y 78 términos con frecuencia suficiente para el mapa."
      },
      {
        "title": "Clúster arquitectura",
        "text": "El clúster de arquitectura NTN y evolución 5G/6G concentra términos como NTN, 5G, 6G, UAV, HAPS, beamforming y RAN."
      },
      {
        "title": "Clúster espacial",
        "text": "El clúster de segmento espacial y enlaces satelitales reúne comunicación satelital, satélite LEO, feeder link, posicionamiento, Doppler y sincronización."
      },
      {
        "title": "Clúster IA",
        "text": "El clúster de IA, optimización y gestión de recursos agrupa reinforcement learning, edge computing, offloading computacional y federated learning."
      },
      {
        "title": "Mini-caso",
        "text": "El mini-caso compara un enlace S-band IoT a 2 GHz y un enlace Ka-band feeder a 20 GHz. El resultado principal es que la elevación mejora el margen, mientras que el Doppler crece con la frecuencia y exige compensación."
      },
      {
        "title": "Video",
        "text": "El sitio ya tiene la sección para incrustar el video de sustentación de YouTube. Solo hace falta reemplazar VIDEO_ID_AQUI por el identificador real del video."
      },
      {
        "title": "Análisis de NTN",
        "text": "La palabra clave NTN aparece 818 veces en el conjunto depurado y se conecta con comunicación satelital, 5G, communication satellite, satélite LEO. Su relación más fuerte es con comunicación satelital (fuerza 360), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como aprendizaje por refuerzo (fuerza 63) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, NTN cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de 5G",
        "text": "La palabra clave 5G aparece 601 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, communication satellite, satélite LEO. Su relación más fuerte es con NTN (fuerza 271), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como red satelital (fuerza 44) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, 5G cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de 6G",
        "text": "La palabra clave 6G aparece 231 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, 5G, communication satellite. Su relación más fuerte es con NTN (fuerza 161), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como IoT (fuerza 19) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, 6G cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de UAV",
        "text": "La palabra clave UAV aparece 145 veces en el conjunto depurado y se conecta con uav (uav), NTN, 5G, comunicación satelital. Su relación más fuerte es con uav (uav) (fuerza 121), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como satélite LEO (fuerza 15) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, UAV cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de HAPS",
        "text": "La palabra clave HAPS aparece 112 veces en el conjunto depurado y se conecta con NTN, 5G, uav (uav), comunicación satelital. Su relación más fuerte es con NTN (fuerza 67), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como asignación de recursos (fuerza 10) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, HAPS cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de beamforming",
        "text": "La palabra clave beamforming aparece 75 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, 6G, communication satellite. Su relación más fuerte es con NTN (fuerza 38), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como HAPS (fuerza 9) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, beamforming cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de RAN",
        "text": "La palabra clave RAN aparece 70 veces en el conjunto depurado y se conecta con 5G, NTN, comunicación satelital, Open RAN. Su relación más fuerte es con 5G (fuerza 42), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como aprendizaje profundo (fuerza 5) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, RAN cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de comunicación satelital",
        "text": "La palabra clave comunicación satelital aparece 747 veces en el conjunto depurado y se conecta con communication satellite, NTN, satélite LEO, 5G. Su relación más fuerte es con communication satellite (fuerza 362), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como FSO (fuerza 46) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, comunicación satelital cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de satélite LEO",
        "text": "La palabra clave satélite LEO aparece 363 veces en el conjunto depurado y se conecta con comunicación satelital, communication satellite, NTN, 5G. Su relación más fuerte es con comunicación satelital (fuerza 263), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como aprendizaje por refuerzo (fuerza 31) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, satélite LEO cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de enlace satelital",
        "text": "La palabra clave enlace satelital aparece 152 veces en el conjunto depurado y se conecta con comunicación satelital, NTN, communication satellite, 5G. Su relación más fuerte es con comunicación satelital (fuerza 103), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como satellite constellations (fuerza 18) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, enlace satelital cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de red satelital",
        "text": "La palabra clave red satelital aparece 128 veces en el conjunto depurado y se conecta con comunicación satelital, communication satellite, 5G, NTN. Su relación más fuerte es con comunicación satelital (fuerza 96), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como asignación de recursos (fuerza 8) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, red satelital cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de satélite GEO",
        "text": "La palabra clave satélite GEO aparece 84 veces en el conjunto depurado y se conecta con comunicación satelital, NTN, 5G, communication satellite. Su relación más fuerte es con comunicación satelital (fuerza 60), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como gateways (computer networks) (fuerza 6) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, satélite GEO cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de posicionamiento",
        "text": "La palabra clave posicionamiento aparece 61 veces en el conjunto depurado y se conecta con communication satellite, comunicación satelital, 5G, NTN. Su relación más fuerte es con communication satellite (fuerza 40), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como efecto Doppler (fuerza 7) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, posicionamiento cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de feeder link",
        "text": "La palabra clave feeder link aparece 24 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, satélite LEO, enlace satelital. Su relación más fuerte es con NTN (fuerza 15), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como enlace intersatelital (fuerza 4) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, feeder link cumple un papel relevante dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de aprendizaje por refuerzo",
        "text": "La palabra clave aprendizaje por refuerzo aparece 117 veces en el conjunto depurado y se conecta con NTN, aprendizaje profundo, aprendizaje profundo por refuerzo, comunicación satelital. Su relación más fuerte es con NTN (fuerza 63), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como UAV (fuerza 21) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, aprendizaje por refuerzo cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de asignación de recursos",
        "text": "La palabra clave asignación de recursos aparece 130 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, aprendizaje por refuerzo, satélite LEO. Su relación más fuerte es con NTN (fuerza 60), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como UAV (fuerza 15) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, asignación de recursos cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de aprendizaje profundo",
        "text": "La palabra clave aprendizaje profundo aparece 94 veces en el conjunto depurado y se conecta con aprendizaje por refuerzo, NTN, aprendizaje profundo por refuerzo, asignación de recursos. Su relación más fuerte es con aprendizaje por refuerzo (fuerza 61), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como 6G (fuerza 15) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, aprendizaje profundo cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de edge computing",
        "text": "La palabra clave edge computing aparece 54 veces en el conjunto depurado y se conecta con NTN, offloading computacional, comunicación satelital, 5G. Su relación más fuerte es con NTN (fuerza 23), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como satélite LEO (fuerza 8) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, edge computing cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de offloading computacional",
        "text": "La palabra clave offloading computacional aparece 25 veces en el conjunto depurado y se conecta con edge computing, NTN, aprendizaje por refuerzo, comunicación satelital. Su relación más fuerte es con edge computing (fuerza 18), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como aprendizaje profundo (fuerza 4) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, offloading computacional cumple un papel relevante dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      },
      {
        "title": "Análisis de aprendizaje federado",
        "text": "La palabra clave aprendizaje federado aparece 22 veces en el conjunto depurado y se conecta con NTN, 6G, aprendizaje profundo, machine learning. Su relación más fuerte es con NTN (fuerza 10), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como uav (uav) (fuerza 3) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos. En síntesis, aprendizaje federado cumple un papel relevante dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto."
      }
    ],
    "stopwords": [
      "a",
      "al",
      "and",
      "based",
      "between",
      "como",
      "con",
      "de",
      "del",
      "el",
      "en",
      "es",
      "for",
      "from",
      "in",
      "into",
      "la",
      "las",
      "los",
      "mas",
      "más",
      "o",
      "of",
      "on",
      "or",
      "para",
      "por",
      "que",
      "se",
      "sobre",
      "su",
      "sus",
      "the",
      "through",
      "to",
      "toward",
      "towards",
      "un",
      "una",
      "using",
      "with",
      "y"
    ]
  }
};
