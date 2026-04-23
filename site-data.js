window.SITE_DATA = {
  "meta": {
    "title": "NTN en 5G-Advanced y 6G",
    "subtitle": "Arquitecturas orbitales, integración satelital y decisiones de enlace explicadas mediante bibliometría, visualización y exploración interactiva.",
    "declaration": "La presente Divulgación Pública de la Ciencia, a través del siguiente Desarrollo Web, tiene una ruta de circulación nacional sin enfoque diferencial y está dirigido a la comunidad o público objetivo conformado por jóvenes, adultos, empresarios y/o empresa en género literario informativo de tipo Blog, con componente digital a través de soporte web.",
    "hero_metrics": [
      {
        "label": "Registros iniciales",
        "value": "4022"
      },
      {
        "label": "Documentos filtrados",
        "value": "1960"
      },
      {
        "label": "Términos del mapa",
        "value": "78"
      },
      {
        "label": "Análisis por palabra",
        "value": "20"
      }
    ],
    "highlights": [
      "La conversación académica sobre NTN se organiza alrededor de arquitectura 5G/6G, segmento espacial y optimización inteligente.",
      "El mapa final concentra 78 términos manuales con relaciones fuertes entre NTN, comunicación satelital, 5G y satélites LEO.",
      "El mini-caso técnico conecta la revisión bibliométrica con decisiones concretas de margen de enlace, retardo y Doppler.",
      "La navegación por pestañas permite explorar resultados, clústeres, palabras y laboratorio sin convertir el sitio en una pared de texto."
    ],
    "video_path": "assets/video/ntn_showcase.mp4",
    "video_poster": "assets/video/video_poster.png"
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
    ],
    "scope_cards": [
      {
        "title": "Propósito",
        "text": "Caracterizar tendencias recientes en redes no terrestres y vincularlas con decisiones técnicas replicables."
      },
      {
        "title": "Cobertura",
        "text": "Se trabaja sobre literatura 2016–2025 filtrada desde la exportación Scopus proporcionada por el equipo."
      },
      {
        "title": "Transferencia",
        "text": "Los hallazgos temáticos se trasladan a un escenario LEO con análisis de potencia recibida, margen y Doppler."
      }
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
      }
    ],
    "workflow_cards": [
      {
        "title": "Búsqueda",
        "text": "Consulta base en Scopus centrada en NTN, 5G satelital e integración no terrestre."
      },
      {
        "title": "Depuración",
        "text": "Normalización de variantes y exclusión de ruido semántico provocado por coincidencias del acrónimo NTN."
      },
      {
        "title": "Mapa",
        "text": "Construcción de la red de co-ocurrencias con umbral mínimo de frecuencia y lectura de vínculos temáticos."
      },
      {
        "title": "Aplicación",
        "text": "Traslado del análisis a un mini-caso técnico para observar implicaciones de diseño físico y operación."
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
  "results": {
    "insight_cards": [
      {
        "title": "Arquitectura integrada",
        "text": "El núcleo conceptual asocia NTN con evolución 5G/6G, beamforming, MIMO y diseño de capa física."
      },
      {
        "title": "Enlace satelital",
        "text": "LEO, GEO, feeder links, sincronización y Doppler forman una segunda zona de alta densidad temática."
      },
      {
        "title": "Gestión inteligente",
        "text": "IA, aprendizaje por refuerzo y offloading aparecen como capa emergente para control dinámico de recursos."
      }
    ],
    "gallery": [
      {
        "label": "Mapa de co-ocurrencias",
        "image": "assets/charts/network_overview.png",
        "caption": "Vista general del espacio temático NTN depurado."
      },
      {
        "label": "Términos principales",
        "image": "assets/charts/top_terms.png",
        "caption": "Relación entre frecuencia y relevancia conceptual."
      },
      {
        "label": "Balance de clústeres",
        "image": "assets/charts/cluster_share.png",
        "caption": "Distribución del mapa final entre arquitectura, segmento espacial e IA."
      },
      {
        "label": "Foco terminológico",
        "image": "assets/charts/focus_terms.png",
        "caption": "Ocho términos destacados según frecuencia en el conjunto depurado."
      }
    ]
  },
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
  "featured_terms": [
    "NTN",
    "comunicación satelital",
    "5G",
    "satélite LEO",
    "6G",
    "enlace satelital",
    "UAV",
    "asignación de recursos",
    "red satelital",
    "aprendizaje por refuerzo"
  ],
  "word_analyses": [
    {
      "word": "ntn",
      "display": "NTN",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 818,
      "total_strength": 1539,
      "analysis": "La palabra clave NTN aparece 818 veces en el conjunto depurado y se conecta con comunicación satelital, 5G, communication satellite, satélite LEO. Su relación más fuerte es con comunicación satelital (fuerza 360), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como aprendizaje por refuerzo (fuerza 63) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, NTN cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "comunicación satelital",
          "strength": 360,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5G",
          "strength": 271,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 192,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satélite LEO",
          "strength": 175,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6G",
          "strength": 161,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "IoT",
          "strength": 92,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav (uav)",
          "strength": 85,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "enlace satelital",
          "strength": 73,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "HAPS",
          "strength": 67,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje por refuerzo",
          "strength": 63,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "image": "assets/words/ntn.png"
    },
    {
      "word": "5g",
      "display": "5G",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 601,
      "total_strength": 1097,
      "analysis": "La palabra clave 5G aparece 601 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, communication satellite, satélite LEO. Su relación más fuerte es con NTN (fuerza 271), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como red satelital (fuerza 44) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, 5G cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "NTN",
          "strength": 271,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "comunicación satelital",
          "strength": 253,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "communication satellite",
          "strength": 109,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satélite LEO",
          "strength": 107,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6G",
          "strength": 101,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "IoT",
          "strength": 65,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "enlace satelital",
          "strength": 52,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "strength": 49,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite GEO",
          "strength": 46,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "red satelital",
          "strength": 44,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "image": "assets/words/5g.png"
    },
    {
      "word": "6g",
      "display": "6G",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 231,
      "total_strength": 570,
      "analysis": "La palabra clave 6G aparece 231 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, 5G, communication satellite. Su relación más fuerte es con NTN (fuerza 161), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como IoT (fuerza 19) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, 6G cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "NTN",
          "strength": 161,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "comunicación satelital",
          "strength": 104,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5G",
          "strength": 101,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 54,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satélite LEO",
          "strength": 44,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "red satelital",
          "strength": 24,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "strength": 22,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "HAPS",
          "strength": 21,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "beamforming",
          "strength": 20,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "IoT",
          "strength": 19,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "image": "assets/words/6g.png"
    },
    {
      "word": "uav",
      "display": "UAV",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 145,
      "total_strength": 351,
      "analysis": "La palabra clave UAV aparece 145 veces en el conjunto depurado y se conecta con uav (uav), NTN, 5G, comunicación satelital. Su relación más fuerte es con uav (uav) (fuerza 121), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como satélite LEO (fuerza 15) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, UAV cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "uav (uav)",
          "strength": 121,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "NTN",
          "strength": 62,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5G",
          "strength": 38,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "comunicación satelital",
          "strength": 23,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "HAPS",
          "strength": 22,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje por refuerzo",
          "strength": 21,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "aprendizaje profundo",
          "strength": 18,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "6G",
          "strength": 16,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "IoT",
          "strength": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite LEO",
          "strength": 15,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "image": "assets/words/uav.png"
    },
    {
      "word": "haps",
      "display": "HAPS",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 112,
      "total_strength": 255,
      "analysis": "La palabra clave HAPS aparece 112 veces en el conjunto depurado y se conecta con NTN, 5G, uav (uav), comunicación satelital. Su relación más fuerte es con NTN (fuerza 67), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como asignación de recursos (fuerza 10) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, HAPS cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "NTN",
          "strength": 67,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5G",
          "strength": 35,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav (uav)",
          "strength": 28,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "comunicación satelital",
          "strength": 26,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "UAV",
          "strength": 22,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6G",
          "strength": 21,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 16,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "FSO",
          "strength": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite LEO",
          "strength": 15,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "asignación de recursos",
          "strength": 10,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "image": "assets/words/haps.png"
    },
    {
      "word": "beamforming",
      "display": "beamforming",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 75,
      "total_strength": 183,
      "analysis": "La palabra clave beamforming aparece 75 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, 6G, communication satellite. Su relación más fuerte es con NTN (fuerza 38), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como HAPS (fuerza 9) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, beamforming cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "NTN",
          "strength": 38,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "comunicación satelital",
          "strength": 27,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6G",
          "strength": 20,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 17,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satélite LEO",
          "strength": 17,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5G",
          "strength": 16,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "uav (uav)",
          "strength": 14,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "MIMO",
          "strength": 13,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "UAV",
          "strength": 12,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "HAPS",
          "strength": 9,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "image": "assets/words/beamforming.png"
    },
    {
      "word": "ran",
      "display": "RAN",
      "cluster": "Arquitectura NTN y evolución 5G/6G",
      "frequency": 70,
      "total_strength": 162,
      "analysis": "La palabra clave RAN aparece 70 veces en el conjunto depurado y se conecta con 5G, NTN, comunicación satelital, Open RAN. Su relación más fuerte es con 5G (fuerza 42), lo que sugiere que la literatura la usa como eje para discutir arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres. En contraste, enlaces como aprendizaje profundo (fuerza 5) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, RAN cumple un papel central dentro del clúster “Arquitectura NTN y evolución 5G/6G”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "5G",
          "strength": 42,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "NTN",
          "strength": 36,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "comunicación satelital",
          "strength": 18,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "Open RAN",
          "strength": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite LEO",
          "strength": 11,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "asignación de recursos",
          "strength": 11,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "6G",
          "strength": 9,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 8,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "machine learning",
          "strength": 7,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje profundo",
          "strength": 5,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "image": "assets/words/ran.png"
    },
    {
      "word": "satellite communication",
      "display": "comunicación satelital",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 747,
      "total_strength": 1736,
      "analysis": "La palabra clave comunicación satelital aparece 747 veces en el conjunto depurado y se conecta con communication satellite, NTN, satélite LEO, 5G. Su relación más fuerte es con communication satellite (fuerza 362), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como FSO (fuerza 46) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, comunicación satelital cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "communication satellite",
          "strength": 362,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "NTN",
          "strength": 360,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite LEO",
          "strength": 263,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5G",
          "strength": 253,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6G",
          "strength": 104,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "enlace satelital",
          "strength": 103,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "red satelital",
          "strength": 96,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "IoT",
          "strength": 89,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite GEO",
          "strength": 60,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "FSO",
          "strength": 46,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "image": "assets/words/satellitecommunication.png"
    },
    {
      "word": "leo satellite",
      "display": "satélite LEO",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 363,
      "total_strength": 989,
      "analysis": "La palabra clave satélite LEO aparece 363 veces en el conjunto depurado y se conecta con comunicación satelital, communication satellite, NTN, 5G. Su relación más fuerte es con comunicación satelital (fuerza 263), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como aprendizaje por refuerzo (fuerza 31) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, satélite LEO cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "comunicación satelital",
          "strength": 263,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "communication satellite",
          "strength": 190,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "NTN",
          "strength": 175,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5G",
          "strength": 107,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "enlace satelital",
          "strength": 51,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite constellations",
          "strength": 46,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6G",
          "strength": 44,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "IoT",
          "strength": 43,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "red satelital",
          "strength": 39,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "aprendizaje por refuerzo",
          "strength": 31,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "image": "assets/words/leosatellite.png"
    },
    {
      "word": "satellite link",
      "display": "enlace satelital",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 152,
      "total_strength": 441,
      "analysis": "La palabra clave enlace satelital aparece 152 veces en el conjunto depurado y se conecta con comunicación satelital, NTN, communication satellite, 5G. Su relación más fuerte es con comunicación satelital (fuerza 103), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como satellite constellations (fuerza 18) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, enlace satelital cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "comunicación satelital",
          "strength": 103,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "NTN",
          "strength": 73,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 65,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5G",
          "strength": 52,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite LEO",
          "strength": 51,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "enlace intersatelital",
          "strength": 23,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "red satelital",
          "strength": 20,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6G",
          "strength": 18,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite GEO",
          "strength": 18,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satellite constellations",
          "strength": 18,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "image": "assets/words/satellitelink.png"
    },
    {
      "word": "satellite network",
      "display": "red satelital",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 128,
      "total_strength": 350,
      "analysis": "La palabra clave red satelital aparece 128 veces en el conjunto depurado y se conecta con comunicación satelital, communication satellite, 5G, NTN. Su relación más fuerte es con comunicación satelital (fuerza 96), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como asignación de recursos (fuerza 8) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, red satelital cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "comunicación satelital",
          "strength": 96,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "communication satellite",
          "strength": 55,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5G",
          "strength": 44,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "NTN",
          "strength": 40,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite LEO",
          "strength": 39,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6G",
          "strength": 24,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "enlace satelital",
          "strength": 20,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "IoT",
          "strength": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje por refuerzo",
          "strength": 9,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "asignación de recursos",
          "strength": 8,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "image": "assets/words/satellitenetwork.png"
    },
    {
      "word": "geo satellite",
      "display": "satélite GEO",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 84,
      "total_strength": 277,
      "analysis": "La palabra clave satélite GEO aparece 84 veces en el conjunto depurado y se conecta con comunicación satelital, NTN, 5G, communication satellite. Su relación más fuerte es con comunicación satelital (fuerza 60), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como gateways (computer networks) (fuerza 6) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, satélite GEO cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "comunicación satelital",
          "strength": 60,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "NTN",
          "strength": 56,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5G",
          "strength": 46,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 34,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satélite LEO",
          "strength": 25,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "enlace satelital",
          "strength": 18,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "6G",
          "strength": 13,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "IoT",
          "strength": 12,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satellite constellations",
          "strength": 7,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "gateways (computer networks)",
          "strength": 6,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "image": "assets/words/geosatellite.png"
    },
    {
      "word": "positioning",
      "display": "posicionamiento",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 61,
      "total_strength": 197,
      "analysis": "La palabra clave posicionamiento aparece 61 veces en el conjunto depurado y se conecta con communication satellite, comunicación satelital, 5G, NTN. Su relación más fuerte es con communication satellite (fuerza 40), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como efecto Doppler (fuerza 7) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, posicionamiento cumple un papel central dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "communication satellite",
          "strength": 40,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "comunicación satelital",
          "strength": 39,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5G",
          "strength": 24,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "NTN",
          "strength": 24,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite LEO",
          "strength": 21,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "positioning navigation and timings",
          "strength": 15,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "IoT",
          "strength": 12,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "tracking (position)",
          "strength": 8,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6G",
          "strength": 7,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "efecto Doppler",
          "strength": 7,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "image": "assets/words/positioning.png"
    },
    {
      "word": "feeder link",
      "display": "feeder link",
      "cluster": "Segmento espacial y enlaces satelitales",
      "frequency": 24,
      "total_strength": 78,
      "analysis": "La palabra clave feeder link aparece 24 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, satélite LEO, enlace satelital. Su relación más fuerte es con NTN (fuerza 15), lo que sugiere que la literatura la usa como eje para discutir segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio. En contraste, enlaces como enlace intersatelital (fuerza 4) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, feeder link cumple un papel relevante dentro del clúster “Segmento espacial y enlaces satelitales”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "NTN",
          "strength": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "comunicación satelital",
          "strength": 12,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satélite LEO",
          "strength": 10,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "enlace satelital",
          "strength": 8,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "communication satellite",
          "strength": 7,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "gateways (computer networks)",
          "strength": 7,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "HAPS",
          "strength": 6,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6G",
          "strength": 5,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "5G",
          "strength": 4,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "enlace intersatelital",
          "strength": 4,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "image": "assets/words/feederlink.png"
    },
    {
      "word": "reinforcement learning",
      "display": "aprendizaje por refuerzo",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 117,
      "total_strength": 382,
      "analysis": "La palabra clave aprendizaje por refuerzo aparece 117 veces en el conjunto depurado y se conecta con NTN, aprendizaje profundo, aprendizaje profundo por refuerzo, comunicación satelital. Su relación más fuerte es con NTN (fuerza 63), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como UAV (fuerza 21) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, aprendizaje por refuerzo cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "NTN",
          "strength": 63,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje profundo",
          "strength": 61,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "aprendizaje profundo por refuerzo",
          "strength": 56,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "comunicación satelital",
          "strength": 43,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "asignación de recursos",
          "strength": 35,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "satélite LEO",
          "strength": 31,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "strength": 25,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 24,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5G",
          "strength": 23,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "UAV",
          "strength": 21,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "image": "assets/words/reinforcementlearning.png"
    },
    {
      "word": "resource allocation",
      "display": "asignación de recursos",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 130,
      "total_strength": 300,
      "analysis": "La palabra clave asignación de recursos aparece 130 veces en el conjunto depurado y se conecta con NTN, comunicación satelital, aprendizaje por refuerzo, satélite LEO. Su relación más fuerte es con NTN (fuerza 60), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como UAV (fuerza 15) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, asignación de recursos cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "NTN",
          "strength": 60,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "comunicación satelital",
          "strength": 45,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "aprendizaje por refuerzo",
          "strength": 35,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "satélite LEO",
          "strength": 30,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "aprendizaje profundo",
          "strength": 28,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "aprendizaje profundo por refuerzo",
          "strength": 25,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "5G",
          "strength": 22,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 22,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "strength": 18,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "UAV",
          "strength": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "image": "assets/words/resourceallocation.png"
    },
    {
      "word": "deep learning",
      "display": "aprendizaje profundo",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 94,
      "total_strength": 298,
      "analysis": "La palabra clave aprendizaje profundo aparece 94 veces en el conjunto depurado y se conecta con aprendizaje por refuerzo, NTN, aprendizaje profundo por refuerzo, asignación de recursos. Su relación más fuerte es con aprendizaje por refuerzo (fuerza 61), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como 6G (fuerza 15) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, aprendizaje profundo cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "aprendizaje por refuerzo",
          "strength": 61,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "NTN",
          "strength": 48,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje profundo por refuerzo",
          "strength": 39,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "asignación de recursos",
          "strength": 28,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "comunicación satelital",
          "strength": 25,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "satélite LEO",
          "strength": 23,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "strength": 23,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 18,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "UAV",
          "strength": 18,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6G",
          "strength": 15,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "image": "assets/words/deeplearning.png"
    },
    {
      "word": "edge computing",
      "display": "edge computing",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 54,
      "total_strength": 128,
      "analysis": "La palabra clave edge computing aparece 54 veces en el conjunto depurado y se conecta con NTN, offloading computacional, comunicación satelital, 5G. Su relación más fuerte es con NTN (fuerza 23), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como satélite LEO (fuerza 8) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, edge computing cumple un papel central dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "NTN",
          "strength": 23,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "offloading computacional",
          "strength": 18,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "comunicación satelital",
          "strength": 17,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "5G",
          "strength": 14,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "communication satellite",
          "strength": 11,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "strength": 11,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje por refuerzo",
          "strength": 9,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "UAV",
          "strength": 9,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6G",
          "strength": 8,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite LEO",
          "strength": 8,
          "cluster": "Segmento espacial y enlaces satelitales"
        }
      ],
      "image": "assets/words/edgecomputing.png"
    },
    {
      "word": "computation offloading",
      "display": "offloading computacional",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 25,
      "total_strength": 84,
      "analysis": "La palabra clave offloading computacional aparece 25 veces en el conjunto depurado y se conecta con edge computing, NTN, aprendizaje por refuerzo, comunicación satelital. Su relación más fuerte es con edge computing (fuerza 18), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como aprendizaje profundo (fuerza 4) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, offloading computacional cumple un papel relevante dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "edge computing",
          "strength": 18,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "NTN",
          "strength": 14,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje por refuerzo",
          "strength": 8,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "comunicación satelital",
          "strength": 8,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "strength": 8,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "satélite LEO",
          "strength": 7,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "asignación de recursos",
          "strength": 7,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "IoT",
          "strength": 5,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "UAV",
          "strength": 5,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje profundo",
          "strength": 4,
          "cluster": "IA, optimización y gestión de recursos"
        }
      ],
      "image": "assets/words/computationoffloading.png"
    },
    {
      "word": "federated learning",
      "display": "aprendizaje federado",
      "cluster": "IA, optimización y gestión de recursos",
      "frequency": 22,
      "total_strength": 49,
      "analysis": "La palabra clave aprendizaje federado aparece 22 veces en el conjunto depurado y se conecta con NTN, 6G, aprendizaje profundo, machine learning. Su relación más fuerte es con NTN (fuerza 10), lo que sugiere que la literatura la usa como eje para discutir automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN. En contraste, enlaces como uav (uav) (fuerza 3) muestran asociaciones más específicas o emergentes, útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos.",
      "conclusion": "En síntesis, aprendizaje federado cumple un papel relevante dentro del clúster “IA, optimización y gestión de recursos”, porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, comparar soluciones o justificar el mini-caso técnico del proyecto.",
      "links": [
        {
          "term": "NTN",
          "strength": 10,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "6G",
          "strength": 6,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje profundo",
          "strength": 6,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "machine learning",
          "strength": 5,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje por refuerzo",
          "strength": 5,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "comunicación satelital",
          "strength": 4,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "UAV",
          "strength": 4,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        },
        {
          "term": "aprendizaje profundo por refuerzo",
          "strength": 3,
          "cluster": "IA, optimización y gestión de recursos"
        },
        {
          "term": "satélite LEO",
          "strength": 3,
          "cluster": "Segmento espacial y enlaces satelitales"
        },
        {
          "term": "uav (uav)",
          "strength": 3,
          "cluster": "Arquitectura NTN y evolución 5G/6G"
        }
      ],
      "image": "assets/words/federatedlearning.png"
    }
  ],
  "mini_case": {
    "title": "Escenario LEO a gateway urbano",
    "description": "El laboratorio compara dos configuraciones de enlace en una órbita baja de 600 km y expone cómo la frecuencia, las pérdidas y la elevación modifican la potencia recibida, el margen de enlace y el indicador Doppler.",
    "assumptions": [
      "Órbita LEO de 600 km con visibilidad hacia gateway urbano.",
      "Dos configuraciones representativas: S-band IoT y feeder link en Ka-band.",
      "Pérdidas agrupadas de implementación, atmósfera y márgenes operativos.",
      "La elevación se usa como variable resumida para distancia, retardo y Doppler."
    ],
    "findings": [
      "En S-band IoT el margen se vuelve positivo a partir de elevaciones moderadas y alcanza valores robustos cerca del cénit.",
      "En Ka-band el enlace exige mayor disciplina de potencia y control de pérdidas, aunque también mejora con elevación creciente.",
      "El Doppler decrece conforme se acorta la distancia aparente, pero sigue siendo una variable crítica de diseño para sincronización y seguimiento."
    ],
    "defaults": {
      "frequency_ghz": 20.0,
      "altitude_km": 600.0,
      "tx_power_dbm": 23.0,
      "total_gain_db": 70.0,
      "extra_losses_db": 5.0,
      "required_threshold_db": -92.0
    },
    "chart_margin": "assets/charts/mini_case_margin.png",
    "chart_doppler": "assets/charts/doppler_profile.png"
  },
  "reflection": {
    "points": [
      "La búsqueda por siglas como NTN produce mucho ruido interdisciplinario; por eso fue necesario combinar filtrado temático con normalización manual.",
      "La combinación entre bibliometría y mini-caso técnico ayuda a pasar de un mapa descriptivo a decisiones de ingeniería concretas.",
      "Las palabras con alta fuerza de asociación suelen representar temas consolidados; las conexiones débiles revelan nichos emergentes para futuros trabajos.",
      "Para validar calidad, se priorizaron artículos de survey, revistas IEEE y títulos con relación explícita a 5G-Advanced, 6G, satélites o integración TN/NTN.",
      "En próximos ciclos conviene contrastar este sitio con la exportación directa de VOSviewer y conservar una bitácora de términos excluidos desde el primer día."
    ],
    "professional_lessons": [
      "Una revisión bibliométrica útil no termina en contar palabras: debe conducir a decisiones de diseño, simulación o validación.",
      "El acrónimo NTN exige control de calidad sobre la búsqueda porque arrastra ruido interdisciplinario si no se normaliza con criterio.",
      "Las relaciones entre términos permiten priorizar qué conceptos merecen atención antes de profundizar en artículos completos.",
      "La práctica profesional se beneficia de combinar exploración bibliográfica, criterio ingenieril y herramientas reproducibles."
    ]
  },
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
  "assistant": {
    "welcome": "Hola. Soy el asistente NTN del blog. Puedes preguntarme por conceptos, metodología, clústeres, palabras seleccionadas o el mini-caso.",
    "prompts": [
      "¿Qué significa LEO en NTN?",
      "Resume los clústeres del mapa",
      "¿Qué encontró el mini-caso técnico?",
      "¿Cómo se depuró la búsqueda?"
    ]
  }
};
