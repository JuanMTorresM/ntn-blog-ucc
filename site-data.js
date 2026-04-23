window.SITE_DATA = {
  "meta": {
    "title": "NTN Research Atlas",
    "subtitle": "Exploración bibliométrica interactiva sobre Non-Terrestrial Networks con mapa VOSviewer, análisis por pestañas y mini-caso técnico.",
    "declaration": "La presente Divulgación Pública de la Ciencia, a través del siguiente Desarrollo Web, tiene una ruta de circulación nacional sin enfoque diferencial y está dirigido a la comunidad o público objetivo conformado por jóvenes, adultos, empresarios y/o empresa en género literario informativo de tipo Blog, con componente digital a través de soporte web."
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
    "question": "¿Cómo se estructuran las tendencias recientes de NTN cuando se combinan integración 5G/6G, operación LEO, plataformas aéreas y gestión de calidad de servicio?",
    "general_objective": "Caracterizar la agenda reciente de investigación en Non-Terrestrial Networks a partir del nuevo CSV de Scopus y del JSON exportado por VOSviewer, y traducir ese aprendizaje a un mini-caso técnico de enlace LEO con Doppler.",
    "specific_objectives": [
      "Identificar la evolución temporal y los términos líderes del corpus NTN cargado desde Scopus.",
      "Visualizar el mapa bibliométrico exportado por VOSviewer como grafo interactivo dentro del sitio.",
      "Interpretar cinco clústeres temáticos y ocho palabras clave con sus vínculos de asociación destacados.",
      "Aplicar los hallazgos a un mini-caso técnico de link budget simplificado con efecto Doppler."
    ]
  },
  "kpis": [
    {
      "label": "Documentos analizados",
      "value": "2.036",
      "note": "CSV de Scopus actualizado"
    },
    {
      "label": "Ventana temporal visible",
      "value": "2017-2026",
      "note": "El volumen crece con fuerza desde 2021"
    },
    {
      "label": "Conference papers",
      "value": "1.085",
      "note": "Predominan en el corpus"
    },
    {
      "label": "Articles",
      "value": "788",
      "note": "Base fuerte de papers de revista"
    },
    {
      "label": "Término líder VOSviewer",
      "value": "non terrestrial network",
      "note": "958 ocurrencias en el JSON"
    },
    {
      "label": "Nodo operacional",
      "value": "leo",
      "note": "494 ocurrencias en el JSON"
    }
  ],
  "dashboardHighlights": [
    "El corpus combina 2.036 documentos, con predominio de conference papers y artículos de revista.",
    "La agenda NTN se organiza en cinco clústeres temáticos bien diferenciados.",
    "Las variantes léxicas 'non terrestrial network', 'ntn' y 'non terrestrial networks' ocupan posiciones centrales distintas dentro del mapa.",
    "LEO, handover y Doppler conectan la visión bibliométrica con retos reales de ingeniería."
  ],
  "glossary": [
    {
      "term": "NTN",
      "definition": "Conjunto de redes no terrestres que integran satélites, plataformas aéreas o nodos no convencionales con la infraestructura terrestre."
    },
    {
      "term": "LEO",
      "definition": "Low Earth Orbit. Órbita baja con ventajas de latencia, pero con movilidad orbital y handover frecuentes."
    },
    {
      "term": "HAPS",
      "definition": "High Altitude Platform Station. Plataforma estratosférica que actúa como apoyo de cobertura y capacidad."
    },
    {
      "term": "Doppler shift",
      "definition": "Corrimiento de frecuencia causado por el movimiento relativo entre transmisor y receptor; muy relevante en NTN."
    },
    {
      "term": "RAN",
      "definition": "Radio Access Network. Parte de la red que conecta al usuario con la infraestructura radio."
    },
    {
      "term": "QoS",
      "definition": "Conjunto de métricas de calidad de servicio como latencia, estabilidad, priorización y continuidad."
    }
  ],
  "method": {
    "search_query": "\"non-terrestrial networks\" OR NTN OR \"satellite 5G\"",
    "filters": [
      "Tema guía: NTN (Non-Terrestrial Networks).",
      "Cadena base tomada del Anexo A del curso.",
      "Corpus actualizado con el nuevo CSV subido por el equipo.",
      "Complemento visual con el JSON exportado por VOSviewer para el mapa interactivo."
    ],
    "steps": [
      "Carga del CSV actualizado y revisión de metadatos bibliográficos.",
      "Explosión y conteo de Index Keywords para reconocer la base terminológica dominante.",
      "Lectura del JSON de VOSviewer como fuente del mapa y de las fuerzas de asociación entre nodos.",
      "Síntesis por clúster y selección de palabras con vínculos destacados para lectura cualitativa.",
      "Transferencia de los hallazgos a un mini-caso de enlace LEO con Doppler."
    ],
    "doc_types": [
      {
        "name": "Conference paper",
        "value": 1085
      },
      {
        "name": "Article",
        "value": 788
      },
      {
        "name": "Review",
        "value": 63
      },
      {
        "name": "Book chapter",
        "value": 50
      },
      {
        "name": "Conference review",
        "value": 27
      }
    ],
    "top_keywords": [
      {
        "term": "terrestrial networks",
        "count": 1492
      },
      {
        "term": "non-terrestrial network",
        "count": 873
      },
      {
        "term": "satellite communication systems",
        "count": 772
      },
      {
        "term": "orbits",
        "count": 558
      },
      {
        "term": "5g mobile communication systems",
        "count": 552
      },
      {
        "term": "communication satellites",
        "count": 474
      },
      {
        "term": "low earth orbit satellites",
        "count": 307
      },
      {
        "term": "satellites",
        "count": 286
      },
      {
        "term": "mobile telecommunication systems",
        "count": 271
      },
      {
        "term": "6g",
        "count": 254
      }
    ],
    "top_sources": [
      {
        "name": "IEEE Open Journal of the Communications Society",
        "count": 67
      },
      {
        "name": "IEEE Access",
        "count": 61
      },
      {
        "name": "International Conference on ICT Convergence",
        "count": 59
      },
      {
        "name": "IEEE Vehicular Technology Conference",
        "count": 54
      },
      {
        "name": "IEEE Transactions on Vehicular Technology",
        "count": 42
      },
      {
        "name": "IEEE Wireless Communications and Networking Conference, WCNC",
        "count": 35
      },
      {
        "name": "IEEE Network",
        "count": 35
      },
      {
        "name": "IEEE Internet of Things Journal",
        "count": 34
      }
    ],
    "year_series": [
      {
        "year": 2017,
        "count": 1
      },
      {
        "year": 2018,
        "count": 2
      },
      {
        "year": 2019,
        "count": 13
      },
      {
        "year": 2020,
        "count": 49
      },
      {
        "year": 2021,
        "count": 110
      },
      {
        "year": 2022,
        "count": 172
      },
      {
        "year": 2023,
        "count": 316
      },
      {
        "year": 2024,
        "count": 478
      },
      {
        "year": 2025,
        "count": 680
      },
      {
        "year": 2026,
        "count": 214
      }
    ]
  },
  "resultsCards": [
    {
      "title": "Crecimiento del corpus",
      "text": "El nuevo CSV concentra el mayor volumen entre 2023 y 2026, señal de aceleración reciente del tema NTN dentro de comunicaciones digitales."
    },
    {
      "title": "Núcleo semántico",
      "text": "El JSON de VOSviewer sitúa a 'non terrestrial network', 'ntn', 'network', 'terrestrial network' y 'leo' como nodos dominantes del mapa."
    },
    {
      "title": "Lectura temática",
      "text": "Los cinco clústeres separan con claridad arquitectura 5G/6G, capa física, plataformas aéreas, operación LEO y gestión de QoS/recursos."
    },
    {
      "title": "Valor didáctico",
      "text": "El sitio combina mapa interactivo, análisis por palabras y mini-caso para transformar bibliometría en exploración aplicada."
    }
  ],
  "clusters": [
    {
      "id": 1,
      "name": "Arquitectura e integración 5G/6G",
      "color": "#6EA8FE",
      "focus": "Integración NTN/TN, requisitos, RAN y arquitectura",
      "summary": "Este clúster reúne el lenguaje de integración entre NTN y la red terrestre: aparecen términos de estandarización 3GPP, requisitos de arquitectura, RAN y cobertura ubicua. Funciona como el puente entre la visión de sistema y la incorporación de NTN en 5G-Advanced y 6G.",
      "top_terms": [
        "ntn",
        "network",
        "terrestrial network",
        "terrestrial networks",
        "requirement",
        "platform"
      ],
      "lead_occurrence": 892,
      "node_count": 25
    },
    {
      "id": 2,
      "name": "Capa física y sincronización",
      "color": "#63E6BE",
      "focus": "Canal, sincronización, Doppler y transmisión",
      "summary": "Aquí dominan la capa física, el canal y la sincronización: beam, channel, CSI, doppler shift, downlink e interferencia aparecen juntos. Es el clúster más cercano a la viabilidad radio y a los problemas prácticos de transmisión sobre enlaces no estacionarios.",
      "top_terms": [
        "transmission",
        "interference",
        "channel",
        "beam",
        "ntn system",
        "synchronization"
      ],
      "lead_occurrence": 222,
      "node_count": 23
    },
    {
      "id": 3,
      "name": "Plataformas aéreas y capacidad",
      "color": "#FFB86C",
      "focus": "UAV/HAPS, capacidad, seguridad y acceso múltiple",
      "summary": "Este clúster concentra plataformas aéreas, capacidad y técnicas avanzadas: UAV, HAPS, NOMA, BER, seguridad física y data rate. La lectura temática sugiere que NTN no se investiga solo como cobertura, sino también como red de alto desempeño con retos de seguridad y capacidad.",
      "top_terms": [
        "non terrestrial network",
        "system",
        "uav",
        "capacity",
        "node",
        "haps"
      ],
      "lead_occurrence": 958,
      "node_count": 16
    },
    {
      "id": 4,
      "name": "Operación LEO y movilidad",
      "color": "#FF8FAB",
      "focus": "LEO, handover, delay y operación dinámica",
      "summary": "El clúster operativo gira alrededor de LEO, handover, delay, orbit e internet. Representa el problema de continuidad de servicio y desempeño en constelaciones dinámicas, donde movilidad orbital y latencia deben administrarse con cuidado.",
      "top_terms": [
        "ntns",
        "leo",
        "internet",
        "delay",
        "orbit",
        "handover"
      ],
      "lead_occurrence": 563,
      "node_count": 14
    },
    {
      "id": 5,
      "name": "QoS, recursos y cobertura ubicua",
      "color": "#C084FC",
      "focus": "QoS, recursos, estrategia y cobertura ubicua",
      "summary": "Aquí se agrupan calidad, recursos, estrategia, QoS y conectividad ubicua. Se relaciona con la gestión de servicios, asignación de recursos y evaluación del valor práctico de NTN cuando se integra a escenarios terrestres heterogéneos.",
      "top_terms": [
        "non terrestrial networks",
        "resource",
        "quality",
        "strategy",
        "constraint",
        "state"
      ],
      "lead_occurrence": 329,
      "node_count": 21
    }
  ],
  "wordAnalyses": [
    {
      "id": 146,
      "term": "network",
      "cluster": "Arquitectura e integración 5G/6G",
      "occurrences": 816,
      "total_link_strength": 12692,
      "links": [
        {
          "id": 154,
          "label": "non terrestrial network",
          "cluster": 3,
          "strength": 408
        },
        {
          "id": 158,
          "label": "ntn",
          "cluster": 1,
          "strength": 345
        },
        {
          "id": 161,
          "label": "ntns",
          "cluster": 4,
          "strength": 207
        },
        {
          "id": 190,
          "label": "requirement",
          "cluster": 1,
          "strength": 140
        },
        {
          "id": 155,
          "label": "non terrestrial networks",
          "cluster": 5,
          "strength": 134
        },
        {
          "id": 192,
          "label": "resource",
          "cluster": 5,
          "strength": 134
        },
        {
          "id": 181,
          "label": "quality",
          "cluster": 5,
          "strength": 120
        },
        {
          "id": 191,
          "label": "research",
          "cluster": 1,
          "strength": 89
        },
        {
          "id": 151,
          "label": "node",
          "cluster": 3,
          "strength": 88
        },
        {
          "id": 164,
          "label": "operation",
          "cluster": 1,
          "strength": 73
        }
      ],
      "analysis": "El término funciona como eje integrador del mapa. Sus vínculos más fuertes con 'non terrestrial network' y 'ntn' muestran que la literatura ya no trata a NTN como concepto periférico, sino como extensión explícita de la noción de red. La presencia simultánea de 'requirement', 'resource', 'quality' y 'operation' indica que la discusión se mueve desde la arquitectura hacia la gestión de servicio y operación.",
      "conclusion": "La red aparece como el contenedor conceptual que conecta terminología NTN, requisitos y desempeño; por eso es un término de articulación más que de especialización."
    },
    {
      "id": 154,
      "term": "non terrestrial network",
      "cluster": "Plataformas aéreas y capacidad",
      "occurrences": 958,
      "total_link_strength": 14272,
      "links": [
        {
          "id": 146,
          "label": "network",
          "cluster": 1,
          "strength": 408
        },
        {
          "id": 190,
          "label": "requirement",
          "cluster": 1,
          "strength": 143
        },
        {
          "id": 192,
          "label": "resource",
          "cluster": 5,
          "strength": 122
        },
        {
          "id": 181,
          "label": "quality",
          "cluster": 5,
          "strength": 102
        },
        {
          "id": 172,
          "label": "platform",
          "cluster": 1,
          "strength": 96
        },
        {
          "id": 191,
          "label": "research",
          "cluster": 1,
          "strength": 92
        },
        {
          "id": 158,
          "label": "ntn",
          "cluster": 1,
          "strength": 50
        },
        {
          "id": 194,
          "label": "ris",
          "cluster": 3,
          "strength": 49
        },
        {
          "id": 180,
          "label": "qos",
          "cluster": 5,
          "strength": 42
        },
        {
          "id": 179,
          "label": "promising solution",
          "cluster": 4,
          "strength": 30
        }
      ],
      "analysis": "La forma singular 'non terrestrial network' aparece como uno de los núcleos conceptuales más densos del mapa. Se conecta con 'requirement', 'resource', 'quality' y 'platform', lo que sugiere que el tema se estudia tanto desde la visión de sistema como desde sus restricciones prácticas de implementación. La cercanía con 'ris' y 'promising solution' evidencia además una línea de investigación orientada a técnicas habilitadoras.",
      "conclusion": "La forma singular fija el núcleo semántico más técnico del mapa y lo vincula con restricciones, plataformas y calidad de servicio."
    },
    {
      "id": 158,
      "term": "ntn",
      "cluster": "Arquitectura e integración 5G/6G",
      "occurrences": 892,
      "total_link_strength": 13951,
      "links": [
        {
          "id": 146,
          "label": "network",
          "cluster": 1,
          "strength": 345
        },
        {
          "id": 161,
          "label": "ntns",
          "cluster": 4,
          "strength": 185
        },
        {
          "id": 190,
          "label": "requirement",
          "cluster": 1,
          "strength": 145
        },
        {
          "id": 172,
          "label": "platform",
          "cluster": 1,
          "strength": 103
        },
        {
          "id": 181,
          "label": "quality",
          "cluster": 5,
          "strength": 94
        },
        {
          "id": 164,
          "label": "operation",
          "cluster": 1,
          "strength": 83
        },
        {
          "id": 165,
          "label": "opportunity",
          "cluster": 1,
          "strength": 54
        },
        {
          "id": 145,
          "label": "nb iot",
          "cluster": 4,
          "strength": 52
        },
        {
          "id": 154,
          "label": "non terrestrial network",
          "cluster": 3,
          "strength": 50
        },
        {
          "id": 166,
          "label": "orbit",
          "cluster": 4,
          "strength": 46
        }
      ],
      "analysis": "La sigla 'ntn' condensa la agenda más transversal del corpus. Su enlace dominante con 'network' y su fuerza con 'requirement', 'platform', 'quality' y 'operation' muestran que NTN sirve como etiqueta paraguas para arquitectura, desempeño y despliegue. La aparición de 'nb iot' y 'orbit' en sus vínculos destacados refuerza la conexión entre NTN, IoT masivo y dinámica orbital.",
      "conclusion": "La sigla opera como paraguas transversal: resume arquitectura, operación y aplicaciones concretas dentro del ecosistema NTN."
    },
    {
      "id": 121,
      "term": "leo",
      "cluster": "Operación LEO y movilidad",
      "occurrences": 494,
      "total_link_strength": 8726,
      "links": [
        {
          "id": 241,
          "label": "terrestrial network",
          "cluster": 1,
          "strength": 188
        },
        {
          "id": 232,
          "label": "system",
          "cluster": 3,
          "strength": 165
        },
        {
          "id": 242,
          "label": "terrestrial networks",
          "cluster": 1,
          "strength": 91
        },
        {
          "id": 228,
          "label": "strategy",
          "cluster": 5,
          "strength": 75
        },
        {
          "id": 158,
          "label": "ntn",
          "cluster": 1,
          "strength": 43
        },
        {
          "id": 122,
          "label": "leo constellation",
          "cluster": 4,
          "strength": 26
        },
        {
          "id": 154,
          "label": "non terrestrial network",
          "cluster": 3,
          "strength": 26
        },
        {
          "id": 231,
          "label": "synchronization",
          "cluster": 2,
          "strength": 24
        },
        {
          "id": 226,
          "label": "state",
          "cluster": 5,
          "strength": 21
        },
        {
          "id": 238,
          "label": "terrestrial",
          "cluster": 5,
          "strength": 17
        }
      ],
      "analysis": "El término 'leo' concentra la dimensión operativa de las constelaciones. Sus relaciones con 'terrestrial network', 'system', 'strategy' y 'synchronization' indican que la literatura aborda a LEO no solo como órbita, sino como problema de integración con el sistema y con la red terrestre. El enlace con 'leo constellation' y 'third generation partnership project' refleja una transición desde el concepto orbital hacia la estandarización y el diseño de red.",
      "conclusion": "LEO sintetiza la dimensión operativa del problema NTN: movilidad, sincronización, estrategia de red e integración con la infraestructura terrestre."
    },
    {
      "id": 122,
      "term": "leo constellation",
      "cluster": "Operación LEO y movilidad",
      "occurrences": 53,
      "total_link_strength": 957,
      "links": [
        {
          "id": 121,
          "label": "leo",
          "cluster": 4,
          "strength": 26
        },
        {
          "id": 158,
          "label": "ntn",
          "cluster": 1,
          "strength": 26
        },
        {
          "id": 154,
          "label": "non terrestrial network",
          "cluster": 3,
          "strength": 23
        },
        {
          "id": 155,
          "label": "non terrestrial networks",
          "cluster": 5,
          "strength": 9
        },
        {
          "id": 164,
          "label": "operation",
          "cluster": 1,
          "strength": 8
        },
        {
          "id": 166,
          "label": "orbit",
          "cluster": 4,
          "strength": 8
        },
        {
          "id": 172,
          "label": "platform",
          "cluster": 1,
          "strength": 8
        },
        {
          "id": 161,
          "label": "ntns",
          "cluster": 4,
          "strength": 7
        },
        {
          "id": 165,
          "label": "opportunity",
          "cluster": 1,
          "strength": 5
        },
        {
          "id": 157,
          "label": "novel approach",
          "cluster": 5,
          "strength": 4
        }
      ],
      "analysis": "La expresión 'leo constellation' aparece como término puente entre la visión orbital y la visión de arquitectura. Se conecta casi por igual con 'leo' y 'ntn', y luego con variantes léxicas de 'non terrestrial network'. Esto sugiere que las constelaciones LEO se estudian como implementación concreta de NTN más que como fenómeno aislado.",
      "conclusion": "Las constelaciones LEO aparecen como materialización práctica de NTN y como espacio donde convergen arquitectura, operación y visión orbital."
    },
    {
      "id": 7,
      "term": "5g nr",
      "cluster": "Capa física y sincronización",
      "occurrences": 37,
      "total_link_strength": 542,
      "links": [
        {
          "id": 158,
          "label": "ntn",
          "cluster": 1,
          "strength": 25
        },
        {
          "id": 154,
          "label": "non terrestrial network",
          "cluster": 3,
          "strength": 17
        },
        {
          "id": 121,
          "label": "leo",
          "cluster": 4,
          "strength": 13
        },
        {
          "id": 146,
          "label": "network",
          "cluster": 1,
          "strength": 8
        },
        {
          "id": 155,
          "label": "non terrestrial networks",
          "cluster": 5,
          "strength": 7
        },
        {
          "id": 161,
          "label": "ntns",
          "cluster": 4,
          "strength": 4
        },
        {
          "id": 164,
          "label": "operation",
          "cluster": 1,
          "strength": 4
        },
        {
          "id": 122,
          "label": "leo constellation",
          "cluster": 4,
          "strength": 2
        },
        {
          "id": 159,
          "label": "ntn scenario",
          "cluster": 2,
          "strength": 2
        },
        {
          "id": 172,
          "label": "platform",
          "cluster": 1,
          "strength": 2
        }
      ],
      "analysis": "El término '5g nr' deja ver la puerta de entrada terrestre hacia NTN. Sus enlaces con 'ntn', 'non terrestrial network' y 'leo' muestran que la nueva radio 5G sigue siendo uno de los anclajes técnicos para trasladar NTN al plano de compatibilidad e interoperabilidad. Las conexiones menores con 'platform' y 'operation' sugieren un foco aún más radio que sistémico.",
      "conclusion": "5G NR funciona como interfaz de compatibilidad entre el mundo terrestre y la evolución NTN hacia estándares más maduros."
    },
    {
      "id": 145,
      "term": "nb iot",
      "cluster": "Operación LEO y movilidad",
      "occurrences": 70,
      "total_link_strength": 1213,
      "links": [
        {
          "id": 158,
          "label": "ntn",
          "cluster": 1,
          "strength": 52
        },
        {
          "id": 154,
          "label": "non terrestrial network",
          "cluster": 3,
          "strength": 24
        },
        {
          "id": 161,
          "label": "ntns",
          "cluster": 4,
          "strength": 21
        },
        {
          "id": 155,
          "label": "non terrestrial networks",
          "cluster": 5,
          "strength": 17
        },
        {
          "id": 164,
          "label": "operation",
          "cluster": 1,
          "strength": 16
        },
        {
          "id": 170,
          "label": "performance evaluation",
          "cluster": 4,
          "strength": 8
        },
        {
          "id": 67,
          "label": "doppler shift",
          "cluster": 2,
          "strength": 7
        },
        {
          "id": 179,
          "label": "promising solution",
          "cluster": 4,
          "strength": 7
        },
        {
          "id": 166,
          "label": "orbit",
          "cluster": 4,
          "strength": 6
        },
        {
          "id": 169,
          "label": "performance analysis",
          "cluster": 4,
          "strength": 6
        }
      ],
      "analysis": "El término 'nb iot' conecta las NTN con aplicaciones de cobertura extendida y conectividad de bajo consumo. La fuerza con 'ntn', 'non terrestrial network' y 'ntns' indica que la literatura ve a NB-IoT como caso de uso concreto para ampliar alcance, mientras que 'performance evaluation', 'doppler shift' y 'orbit' revelan la necesidad de adaptar estas soluciones al entorno satelital y de movilidad.",
      "conclusion": "NB-IoT representa una ruta aplicada para NTN en escenarios de cobertura amplia, bajo consumo y adaptación a Doppler y órbita."
    },
    {
      "id": 181,
      "term": "quality",
      "cluster": "QoS, recursos y cobertura ubicua",
      "occurrences": 224,
      "total_link_strength": 3829,
      "links": [
        {
          "id": 146,
          "label": "network",
          "cluster": 1,
          "strength": 120
        },
        {
          "id": 154,
          "label": "non terrestrial network",
          "cluster": 3,
          "strength": 102
        },
        {
          "id": 158,
          "label": "ntn",
          "cluster": 1,
          "strength": 94
        },
        {
          "id": 241,
          "label": "terrestrial network",
          "cluster": 1,
          "strength": 84
        },
        {
          "id": 232,
          "label": "system",
          "cluster": 3,
          "strength": 68
        },
        {
          "id": 228,
          "label": "strategy",
          "cluster": 5,
          "strength": 41
        },
        {
          "id": 246,
          "label": "transmission",
          "cluster": 2,
          "strength": 37
        },
        {
          "id": 242,
          "label": "terrestrial networks",
          "cluster": 1,
          "strength": 35
        },
        {
          "id": 245,
          "label": "tns",
          "cluster": 5,
          "strength": 15
        },
        {
          "id": 226,
          "label": "state",
          "cluster": 5,
          "strength": 14
        }
      ],
      "analysis": "La palabra 'quality' se ubica en el clúster de gestión y servicio. Sus enlaces con 'network', 'non terrestrial network', 'ntn', 'strategy' y 'transmission' indican que la discusión bibliométrica ya está conectando calidad de servicio con decisiones de arquitectura, recursos y desempeño de enlace. La relación con 'state' y 'tns' refuerza una lectura de NTN como red que debe mantener niveles de servicio bajo integración heterogénea.",
      "conclusion": "La calidad de servicio emerge como criterio de cierre entre arquitectura, estrategia y transmisión dentro de NTN."
    }
  ],
  "miniCase": {
    "title": "Mini-caso técnico: enlace LEO a gateway urbano",
    "description": "La calculadora aproxima un escenario de enlace NTN en banda S/Ka desde un satélite LEO hacia un gateway urbano. El objetivo es observar cómo frecuencia, altitud, pérdidas y umbral requerido alteran el margen del enlace y el indicador de Doppler.",
    "assumptions": [
      "Velocidad orbital aproximada: 7.5 km/s.",
      "Pérdidas libres estimadas mediante FSPL en función de frecuencia y distancia.",
      "Ganancia total simplificada como agregado Tx/Rx.",
      "El umbral requerido resume sensibilidad, codificación y margen objetivo del receptor."
    ],
    "insights": [
      "Frecuencias mayores incrementan la pérdida libre y exigen más ganancia o menor distancia efectiva.",
      "La altitud LEO influye tanto en atenuación como en la gestión dinámica de handover.",
      "El indicador de Doppler crece con la frecuencia, por lo que la sincronización se vuelve más crítica.",
      "Un margen positivo sostenido es condición mínima para pensar en continuidad de servicio."
    ],
    "defaults": {
      "frequencyGHz": 2.0,
      "altitudeKm": 650,
      "txPowerDbm": 33,
      "totalGainDb": 38,
      "extraLossDb": 8,
      "thresholdDbm": -101
    }
  },
  "reflection": {
    "summary": "La combinación del nuevo CSV con el JSON de VOSviewer mostró que el valor real de la bibliometría no está solo en contar términos, sino en entender cómo se conectan arquitectura, capa física y operación. El mapa interactivo deja ver que NTN no es una sola línea de investigación, sino un sistema de subproblemas que se cruzan: estandarización, desempeño radio, movilidad LEO, plataformas aéreas y calidad de servicio.",
    "cards": [
      "Una revisión bibliométrica útil no termina en contar palabras: debe conducir a decisiones de diseño, simulación o validación.",
      "El acrónimo NTN exige control de calidad sobre la búsqueda porque arrastra ruido interdisciplinario si no se normaliza con criterio.",
      "Las relaciones entre términos permiten priorizar qué conceptos merecen atención antes de profundizar en artículos completos.",
      "La práctica profesional se beneficia de combinar exploración bibliográfica, criterio ingenieril y herramientas reproducibles."
    ],
    "points": [
      "La búsqueda por siglas como NTN produce mucho ruido interdisciplinario; por eso fue necesario combinar filtrado temático con normalización manual.",
      "La combinación entre bibliometría y mini-caso técnico ayuda a pasar de un mapa descriptivo a decisiones de ingeniería concretas.",
      "Las palabras con alta fuerza de asociación suelen representar temas consolidados; las conexiones débiles revelan nichos emergentes para futuros trabajos.",
      "Para validar calidad, se priorizaron artículos de survey, revistas IEEE y títulos con relación explícita a 5G-Advanced, 6G, satélites o integración TN/NTN.",
      "En próximos ciclos conviene contrastar este sitio con la exportación directa de VOSviewer y conservar una bitácora de términos excluidos desde el primer día."
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
    "prompts": [
      "¿Qué muestra el mapa VOSviewer?",
      "Resume los cinco clústeres",
      "¿Qué significa LEO en el contexto NTN?",
      "¿Qué relación hay entre NTN y 5G NR?",
      "Explícame el mini-caso técnico",
      "¿Qué términos dominan el corpus?"
    ]
  },
  "vosMap": {
    "clusters": {
      "1": {
        "name": "Arquitectura e integración 5G/6G",
        "color": "#6EA8FE"
      },
      "2": {
        "name": "Capa física y sincronización",
        "color": "#63E6BE"
      },
      "3": {
        "name": "Plataformas aéreas y capacidad",
        "color": "#FFB86C"
      },
      "4": {
        "name": "Operación LEO y movilidad",
        "color": "#FF8FAB"
      },
      "5": {
        "name": "QoS, recursos y cobertura ubicua",
        "color": "#C084FC"
      }
    },
    "nodes": [
      {
        "id": 1,
        "label": "3gpp",
        "x": 0.969,
        "y": -0.3208,
        "cluster": 1,
        "occ": 98,
        "tls": 1494
      },
      {
        "id": 2,
        "label": "3gpp release",
        "x": 0.9887,
        "y": -0.4875,
        "cluster": 1,
        "occ": 61,
        "tls": 928
      },
      {
        "id": 3,
        "label": "3rd generation partnership project",
        "x": 0.9335,
        "y": -0.1977,
        "cluster": 1,
        "occ": 92,
        "tls": 1514
      },
      {
        "id": 4,
        "label": "5g network",
        "x": 0.6568,
        "y": -0.7755,
        "cluster": 1,
        "occ": 79,
        "tls": 1284
      },
      {
        "id": 5,
        "label": "5g new radio",
        "x": 0.9259,
        "y": 0.2269,
        "cluster": 2,
        "occ": 54,
        "tls": 892
      },
      {
        "id": 7,
        "label": "5g nr",
        "x": 0.918,
        "y": 0.6477,
        "cluster": 2,
        "occ": 37,
        "tls": 542
      },
      {
        "id": 8,
        "label": "5g ntn",
        "x": 1.0047,
        "y": -0.5441,
        "cluster": 1,
        "occ": 44,
        "tls": 607
      },
      {
        "id": 10,
        "label": "6g era",
        "x": -0.4289,
        "y": -0.8269,
        "cluster": 1,
        "occ": 36,
        "tls": 553
      },
      {
        "id": 11,
        "label": "6g network",
        "x": -0.5459,
        "y": -0.5926,
        "cluster": 1,
        "occ": 101,
        "tls": 1634
      },
      {
        "id": 12,
        "label": "6g non terrestrial network",
        "x": -0.248,
        "y": 0.3583,
        "cluster": 2,
        "occ": 40,
        "tls": 559
      },
      {
        "id": 13,
        "label": "6g non terrestrial networks",
        "x": -0.5662,
        "y": 0.1168,
        "cluster": 5,
        "occ": 45,
        "tls": 697
      },
      {
        "id": 14,
        "label": "6g system",
        "x": 0.1978,
        "y": -0.4361,
        "cluster": 1,
        "occ": 39,
        "tls": 614
      },
      {
        "id": 34,
        "label": "beam",
        "x": 0.5737,
        "y": 0.568,
        "cluster": 2,
        "occ": 117,
        "tls": 1997
      },
      {
        "id": 36,
        "label": "ber",
        "x": -0.364,
        "y": 1.0837,
        "cluster": 3,
        "occ": 27,
        "tls": 427
      },
      {
        "id": 37,
        "label": "capacity",
        "x": -0.1915,
        "y": 0.0803,
        "cluster": 3,
        "occ": 225,
        "tls": 3913
      },
      {
        "id": 40,
        "label": "cellular network",
        "x": 0.3113,
        "y": -0.5112,
        "cluster": 5,
        "occ": 73,
        "tls": 1262
      },
      {
        "id": 41,
        "label": "channel",
        "x": 0.1389,
        "y": 0.7839,
        "cluster": 2,
        "occ": 203,
        "tls": 3201
      },
      {
        "id": 42,
        "label": "channel condition",
        "x": -0.4819,
        "y": 0.7592,
        "cluster": 2,
        "occ": 53,
        "tls": 921
      },
      {
        "id": 43,
        "label": "channel estimation",
        "x": -0.2557,
        "y": 0.8514,
        "cluster": 2,
        "occ": 31,
        "tls": 467
      },
      {
        "id": 44,
        "label": "channel model",
        "x": -0.1903,
        "y": 0.8536,
        "cluster": 2,
        "occ": 57,
        "tls": 941
      },
      {
        "id": 55,
        "label": "constraint",
        "x": -0.51,
        "y": 0.0294,
        "cluster": 5,
        "occ": 187,
        "tls": 3188
      },
      {
        "id": 57,
        "label": "coverage area",
        "x": 0.5666,
        "y": 0.4378,
        "cluster": 2,
        "occ": 45,
        "tls": 896
      },
      {
        "id": 58,
        "label": "csi",
        "x": -0.3536,
        "y": 0.8321,
        "cluster": 2,
        "occ": 42,
        "tls": 724
      },
      {
        "id": 59,
        "label": "data rate",
        "x": -0.2841,
        "y": 0.1513,
        "cluster": 3,
        "occ": 103,
        "tls": 1841
      },
      {
        "id": 64,
        "label": "delay",
        "x": 0.6244,
        "y": 0.0747,
        "cluster": 4,
        "occ": 229,
        "tls": 3847
      },
      {
        "id": 67,
        "label": "doppler shift",
        "x": 0.8094,
        "y": 0.6217,
        "cluster": 2,
        "occ": 58,
        "tls": 1012
      },
      {
        "id": 68,
        "label": "downlink",
        "x": 0.5931,
        "y": 0.7835,
        "cluster": 2,
        "occ": 53,
        "tls": 871
      },
      {
        "id": 97,
        "label": "handover",
        "x": 0.6333,
        "y": -0.4751,
        "cluster": 4,
        "occ": 115,
        "tls": 1942
      },
      {
        "id": 98,
        "label": "hap",
        "x": -0.8362,
        "y": 0.5552,
        "cluster": 3,
        "occ": 72,
        "tls": 1422
      },
      {
        "id": 99,
        "label": "haps",
        "x": -0.5883,
        "y": 0.4416,
        "cluster": 3,
        "occ": 134,
        "tls": 2378
      },
      {
        "id": 100,
        "label": "high altitude platform",
        "x": -0.7697,
        "y": 0.4541,
        "cluster": 3,
        "occ": 90,
        "tls": 1728
      },
      {
        "id": 101,
        "label": "high altitude platform station",
        "x": -0.7137,
        "y": 0.4417,
        "cluster": 3,
        "occ": 120,
        "tls": 1999
      },
      {
        "id": 109,
        "label": "integrated terrestrial",
        "x": -0.311,
        "y": -0.9069,
        "cluster": 5,
        "occ": 53,
        "tls": 876
      },
      {
        "id": 110,
        "label": "inter satellite link",
        "x": 0.5467,
        "y": -0.8431,
        "cluster": 4,
        "occ": 35,
        "tls": 521
      },
      {
        "id": 111,
        "label": "interference",
        "x": 0.0726,
        "y": 0.7424,
        "cluster": 2,
        "occ": 216,
        "tls": 3757
      },
      {
        "id": 112,
        "label": "internet",
        "x": -0.0175,
        "y": -0.5526,
        "cluster": 4,
        "occ": 245,
        "tls": 4120
      },
      {
        "id": 118,
        "label": "ka band",
        "x": 0.6115,
        "y": 0.7628,
        "cluster": 2,
        "occ": 30,
        "tls": 462
      },
      {
        "id": 119,
        "label": "key technology",
        "x": 0.166,
        "y": -0.5524,
        "cluster": 1,
        "occ": 43,
        "tls": 652
      },
      {
        "id": 120,
        "label": "knowledge",
        "x": -0.178,
        "y": 0.2522,
        "cluster": 5,
        "occ": 38,
        "tls": 602
      },
      {
        "id": 121,
        "label": "leo",
        "x": 0.7672,
        "y": 0.14,
        "cluster": 4,
        "occ": 494,
        "tls": 8726
      },
      {
        "id": 122,
        "label": "leo constellation",
        "x": 0.9022,
        "y": -0.048,
        "cluster": 4,
        "occ": 53,
        "tls": 957
      },
      {
        "id": 145,
        "label": "nb iot",
        "x": 1.1617,
        "y": 0.003,
        "cluster": 4,
        "occ": 70,
        "tls": 1213
      },
      {
        "id": 146,
        "label": "network",
        "x": -0.3029,
        "y": -0.3188,
        "cluster": 1,
        "occ": 816,
        "tls": 12692
      },
      {
        "id": 147,
        "label": "network architecture",
        "x": -0.2266,
        "y": -0.8622,
        "cluster": 1,
        "occ": 85,
        "tls": 1372
      },
      {
        "id": 148,
        "label": "network performance",
        "x": -0.6111,
        "y": -0.3587,
        "cluster": 5,
        "occ": 45,
        "tls": 820
      },
      {
        "id": 149,
        "label": "network slicing",
        "x": -0.1595,
        "y": -1.0113,
        "cluster": 1,
        "occ": 28,
        "tls": 458
      },
      {
        "id": 150,
        "label": "next generation",
        "x": -0.4527,
        "y": -0.2819,
        "cluster": 1,
        "occ": 45,
        "tls": 727
      },
      {
        "id": 151,
        "label": "node",
        "x": -0.437,
        "y": -0.0541,
        "cluster": 3,
        "occ": 170,
        "tls": 2887
      },
      {
        "id": 152,
        "label": "noma",
        "x": -0.8154,
        "y": 0.6784,
        "cluster": 3,
        "occ": 45,
        "tls": 831
      },
      {
        "id": 153,
        "label": "non orthogonal multiple access",
        "x": -0.9238,
        "y": 0.6106,
        "cluster": 3,
        "occ": 42,
        "tls": 787
      },
      {
        "id": 154,
        "label": "non terrestrial network",
        "x": -0.1083,
        "y": 0.0881,
        "cluster": 3,
        "occ": 958,
        "tls": 14272
      },
      {
        "id": 155,
        "label": "non terrestrial networks",
        "x": 0.1754,
        "y": -0.3634,
        "cluster": 5,
        "occ": 329,
        "tls": 5073
      },
      {
        "id": 156,
        "label": "nonterrestrial network",
        "x": -0.0663,
        "y": 0.2365,
        "cluster": 4,
        "occ": 53,
        "tls": 889
      },
      {
        "id": 157,
        "label": "novel approach",
        "x": -0.7094,
        "y": -0.3196,
        "cluster": 5,
        "occ": 26,
        "tls": 411
      },
      {
        "id": 158,
        "label": "ntn",
        "x": 0.3441,
        "y": -0.0041,
        "cluster": 1,
        "occ": 892,
        "tls": 13951
      },
      {
        "id": 159,
        "label": "ntn scenario",
        "x": 0.6189,
        "y": 0.4707,
        "cluster": 2,
        "occ": 40,
        "tls": 623
      },
      {
        "id": 160,
        "label": "ntn system",
        "x": 0.4076,
        "y": 0.2108,
        "cluster": 2,
        "occ": 68,
        "tls": 1154
      },
      {
        "id": 161,
        "label": "ntns",
        "x": -0.0398,
        "y": -0.0514,
        "cluster": 4,
        "occ": 563,
        "tls": 9266
      },
      {
        "id": 163,
        "label": "open radio access network",
        "x": -0.0594,
        "y": -1.1271,
        "cluster": 1,
        "occ": 23,
        "tls": 377
      },
      {
        "id": 164,
        "label": "operation",
        "x": 0.075,
        "y": -0.3979,
        "cluster": 1,
        "occ": 179,
        "tls": 2969
      },
      {
        "id": 169,
        "label": "performance analysis",
        "x": 0.2878,
        "y": 0.8292,
        "cluster": 4,
        "occ": 51,
        "tls": 873
      },
      {
        "id": 170,
        "label": "performance evaluation",
        "x": 0.6672,
        "y": 0.2974,
        "cluster": 4,
        "occ": 68,
        "tls": 1111
      },
      {
        "id": 171,
        "label": "physical layer security",
        "x": -0.9995,
        "y": 0.291,
        "cluster": 3,
        "occ": 23,
        "tls": 360
      },
      {
        "id": 172,
        "label": "platform",
        "x": -0.1194,
        "y": -0.2592,
        "cluster": 1,
        "occ": 216,
        "tls": 3518
      },
      {
        "id": 173,
        "label": "pnt",
        "x": 1.0958,
        "y": 0.7454,
        "cluster": 2,
        "occ": 24,
        "tls": 511
      },
      {
        "id": 178,
        "label": "proceeding",
        "x": -0.7608,
        "y": -0.1287,
        "cluster": 5,
        "occ": 28,
        "tls": 329
      },
      {
        "id": 179,
        "label": "promising solution",
        "x": 0.0819,
        "y": 0.0539,
        "cluster": 4,
        "occ": 73,
        "tls": 1268
      },
      {
        "id": 180,
        "label": "qos",
        "x": -0.4616,
        "y": -0.5962,
        "cluster": 5,
        "occ": 99,
        "tls": 1757
      },
      {
        "id": 181,
        "label": "quality",
        "x": -0.4697,
        "y": -0.4591,
        "cluster": 5,
        "occ": 224,
        "tls": 3829
      },
      {
        "id": 182,
        "label": "radio access network",
        "x": 0.2489,
        "y": -0.9647,
        "cluster": 1,
        "occ": 54,
        "tls": 936
      },
      {
        "id": 190,
        "label": "requirement",
        "x": -0.0023,
        "y": -0.5901,
        "cluster": 1,
        "occ": 333,
        "tls": 5460
      },
      {
        "id": 191,
        "label": "research",
        "x": -0.1364,
        "y": -0.4255,
        "cluster": 1,
        "occ": 202,
        "tls": 3151
      },
      {
        "id": 192,
        "label": "resource",
        "x": -0.3881,
        "y": -0.4792,
        "cluster": 5,
        "occ": 263,
        "tls": 4362
      },
      {
        "id": 193,
        "label": "resource utilization",
        "x": -0.1809,
        "y": -0.8432,
        "cluster": 5,
        "occ": 42,
        "tls": 671
      },
      {
        "id": 194,
        "label": "ris",
        "x": -1.1806,
        "y": 0.3377,
        "cluster": 3,
        "occ": 73,
        "tls": 1305
      },
      {
        "id": 229,
        "label": "superior performance",
        "x": -0.8106,
        "y": 0.5857,
        "cluster": 5,
        "occ": 23,
        "tls": 387
      },
      {
        "id": 230,
        "label": "superiority",
        "x": 0.1443,
        "y": 0.8602,
        "cluster": 2,
        "occ": 26,
        "tls": 404
      },
      {
        "id": 231,
        "label": "synchronization",
        "x": 0.9746,
        "y": 0.2889,
        "cluster": 2,
        "occ": 64,
        "tls": 1020
      },
      {
        "id": 232,
        "label": "system",
        "x": -0.0645,
        "y": 0.2832,
        "cluster": 3,
        "occ": 686,
        "tls": 11111
      },
      {
        "id": 233,
        "label": "system architecture",
        "x": 0.5604,
        "y": -0.5493,
        "cluster": 1,
        "occ": 35,
        "tls": 524
      },
      {
        "id": 238,
        "label": "terrestrial",
        "x": -0.2905,
        "y": -0.5847,
        "cluster": 5,
        "occ": 111,
        "tls": 1747
      },
      {
        "id": 239,
        "label": "terrestrial base station",
        "x": -0.4265,
        "y": 0.5905,
        "cluster": 5,
        "occ": 38,
        "tls": 697
      },
      {
        "id": 240,
        "label": "terrestrial infrastructure",
        "x": -0.2461,
        "y": -0.433,
        "cluster": 5,
        "occ": null,
        "tls": null
      },
      {
        "id": 241,
        "label": "terrestrial network",
        "x": 0.3433,
        "y": -0.1616,
        "cluster": 1,
        "occ": 674,
        "tls": 10698
      },
      {
        "id": 242,
        "label": "terrestrial networks",
        "x": 0.3762,
        "y": -0.0843,
        "cluster": 1,
        "occ": 342,
        "tls": 5470
      },
      {
        "id": 243,
        "label": "third generation partnership project",
        "x": 1.0191,
        "y": 0.179,
        "cluster": 2,
        "occ": 35,
        "tls": 612
      },
      {
        "id": 244,
        "label": "timing",
        "x": 1.0507,
        "y": 0.7419,
        "cluster": 2,
        "occ": 43,
        "tls": 826
      },
      {
        "id": 245,
        "label": "tns",
        "x": 0.2146,
        "y": -0.6157,
        "cluster": 5,
        "occ": 86,
        "tls": 1491
      },
      {
        "id": 246,
        "label": "transmission",
        "x": 0.0357,
        "y": 0.534,
        "cluster": 2,
        "occ": 222,
        "tls": 3792
      },
      {
        "id": 247,
        "label": "transmitter",
        "x": 0.1075,
        "y": 0.9488,
        "cluster": 2,
        "occ": 29,
        "tls": 492
      },
      {
        "id": 248,
        "label": "uav",
        "x": -0.9629,
        "y": 0.3261,
        "cluster": 3,
        "occ": 248,
        "tls": 4290
      },
      {
        "id": 249,
        "label": "uavs",
        "x": -0.9949,
        "y": 0.2182,
        "cluster": 3,
        "occ": 110,
        "tls": 1903
      },
      {
        "id": 250,
        "label": "ubiquitous connectivity",
        "x": -0.2854,
        "y": -0.4874,
        "cluster": 5,
        "occ": 79,
        "tls": 1396
      },
      {
        "id": 251,
        "label": "ubiquitous coverage",
        "x": 0.0318,
        "y": -0.5138,
        "cluster": 1,
        "occ": 41,
        "tls": 670
      },
      {
        "id": 165,
        "label": "opportunity",
        "x": 0.2633,
        "y": -0.4469,
        "cluster": 1,
        "occ": 131,
        "tls": 2040
      },
      {
        "id": 166,
        "label": "orbit",
        "x": 0.6909,
        "y": -0.0642,
        "cluster": 4,
        "occ": 116,
        "tls": 2054
      },
      {
        "id": 226,
        "label": "state",
        "x": -0.4671,
        "y": -0.226,
        "cluster": 5,
        "occ": 118,
        "tls": 1934
      },
      {
        "id": 227,
        "label": "stochastic geometry",
        "x": 0.1235,
        "y": 1.0924,
        "cluster": 4,
        "occ": 24,
        "tls": 367
      },
      {
        "id": 228,
        "label": "strategy",
        "x": -0.4202,
        "y": -0.1719,
        "cluster": 5,
        "occ": 221,
        "tls": 3703
      }
    ],
    "edges": [
      {
        "source": 7,
        "target": 121,
        "strength": 13
      },
      {
        "source": 7,
        "target": 122,
        "strength": 2
      },
      {
        "source": 7,
        "target": 146,
        "strength": 8
      },
      {
        "source": 7,
        "target": 154,
        "strength": 17
      },
      {
        "source": 7,
        "target": 155,
        "strength": 7
      },
      {
        "source": 7,
        "target": 158,
        "strength": 25
      },
      {
        "source": 7,
        "target": 159,
        "strength": 2
      },
      {
        "source": 7,
        "target": 160,
        "strength": 1
      },
      {
        "source": 7,
        "target": 161,
        "strength": 4
      },
      {
        "source": 7,
        "target": 164,
        "strength": 4
      },
      {
        "source": 7,
        "target": 172,
        "strength": 2
      },
      {
        "source": 67,
        "target": 145,
        "strength": 7
      },
      {
        "source": 67,
        "target": 146,
        "strength": 15
      },
      {
        "source": 67,
        "target": 154,
        "strength": 27
      },
      {
        "source": 67,
        "target": 155,
        "strength": 12
      },
      {
        "source": 67,
        "target": 158,
        "strength": 31
      },
      {
        "source": 67,
        "target": 159,
        "strength": 4
      },
      {
        "source": 67,
        "target": 160,
        "strength": 3
      },
      {
        "source": 67,
        "target": 161,
        "strength": 19
      },
      {
        "source": 67,
        "target": 172,
        "strength": 2
      },
      {
        "source": 121,
        "target": 122,
        "strength": 26
      },
      {
        "source": 121,
        "target": 154,
        "strength": 26
      },
      {
        "source": 121,
        "target": 158,
        "strength": 43
      },
      {
        "source": 121,
        "target": 226,
        "strength": 21
      },
      {
        "source": 121,
        "target": 227,
        "strength": 7
      },
      {
        "source": 121,
        "target": 228,
        "strength": 75
      },
      {
        "source": 121,
        "target": 229,
        "strength": 9
      },
      {
        "source": 121,
        "target": 230,
        "strength": 5
      },
      {
        "source": 121,
        "target": 231,
        "strength": 24
      },
      {
        "source": 121,
        "target": 232,
        "strength": 165
      },
      {
        "source": 121,
        "target": 238,
        "strength": 17
      },
      {
        "source": 121,
        "target": 239,
        "strength": 13
      },
      {
        "source": 121,
        "target": 240,
        "strength": 13
      },
      {
        "source": 121,
        "target": 241,
        "strength": 188
      },
      {
        "source": 121,
        "target": 242,
        "strength": 91
      },
      {
        "source": 121,
        "target": 243,
        "strength": 15
      },
      {
        "source": 122,
        "target": 154,
        "strength": 23
      },
      {
        "source": 122,
        "target": 155,
        "strength": 9
      },
      {
        "source": 122,
        "target": 157,
        "strength": 4
      },
      {
        "source": 122,
        "target": 158,
        "strength": 26
      },
      {
        "source": 122,
        "target": 159,
        "strength": 3
      },
      {
        "source": 122,
        "target": 160,
        "strength": 1
      },
      {
        "source": 122,
        "target": 161,
        "strength": 7
      },
      {
        "source": 122,
        "target": 164,
        "strength": 8
      },
      {
        "source": 122,
        "target": 165,
        "strength": 5
      },
      {
        "source": 122,
        "target": 166,
        "strength": 8
      },
      {
        "source": 122,
        "target": 169,
        "strength": 3
      },
      {
        "source": 122,
        "target": 172,
        "strength": 8
      },
      {
        "source": 122,
        "target": 173,
        "strength": 4
      },
      {
        "source": 122,
        "target": 179,
        "strength": 1
      },
      {
        "source": 145,
        "target": 154,
        "strength": 24
      },
      {
        "source": 145,
        "target": 155,
        "strength": 17
      },
      {
        "source": 145,
        "target": 158,
        "strength": 52
      },
      {
        "source": 145,
        "target": 160,
        "strength": 5
      },
      {
        "source": 145,
        "target": 161,
        "strength": 21
      },
      {
        "source": 145,
        "target": 164,
        "strength": 16
      },
      {
        "source": 145,
        "target": 165,
        "strength": 3
      },
      {
        "source": 145,
        "target": 166,
        "strength": 6
      },
      {
        "source": 145,
        "target": 169,
        "strength": 6
      },
      {
        "source": 145,
        "target": 170,
        "strength": 8
      },
      {
        "source": 145,
        "target": 172,
        "strength": 5
      },
      {
        "source": 145,
        "target": 179,
        "strength": 7
      },
      {
        "source": 145,
        "target": 180,
        "strength": 1
      },
      {
        "source": 146,
        "target": 147,
        "strength": 39
      },
      {
        "source": 146,
        "target": 148,
        "strength": 30
      },
      {
        "source": 146,
        "target": 149,
        "strength": 18
      },
      {
        "source": 146,
        "target": 150,
        "strength": 20
      },
      {
        "source": 146,
        "target": 151,
        "strength": 88
      },
      {
        "source": 146,
        "target": 152,
        "strength": 24
      },
      {
        "source": 146,
        "target": 153,
        "strength": 21
      },
      {
        "source": 146,
        "target": 154,
        "strength": 408
      },
      {
        "source": 146,
        "target": 155,
        "strength": 134
      },
      {
        "source": 146,
        "target": 156,
        "strength": 21
      },
      {
        "source": 146,
        "target": 157,
        "strength": 11
      },
      {
        "source": 146,
        "target": 158,
        "strength": 345
      },
      {
        "source": 146,
        "target": 159,
        "strength": 13
      },
      {
        "source": 146,
        "target": 160,
        "strength": 29
      },
      {
        "source": 146,
        "target": 161,
        "strength": 207
      },
      {
        "source": 146,
        "target": 163,
        "strength": 13
      },
      {
        "source": 146,
        "target": 164,
        "strength": 73
      },
      {
        "source": 146,
        "target": 165,
        "strength": 47
      },
      {
        "source": 146,
        "target": 166,
        "strength": 48
      },
      {
        "source": 146,
        "target": 179,
        "strength": 27
      },
      {
        "source": 146,
        "target": 180,
        "strength": 53
      },
      {
        "source": 146,
        "target": 181,
        "strength": 120
      },
      {
        "source": 146,
        "target": 182,
        "strength": 30
      },
      {
        "source": 146,
        "target": 190,
        "strength": 140
      },
      {
        "source": 146,
        "target": 191,
        "strength": 89
      },
      {
        "source": 146,
        "target": 192,
        "strength": 134
      },
      {
        "source": 146,
        "target": 193,
        "strength": 18
      },
      {
        "source": 146,
        "target": 194,
        "strength": 26
      },
      {
        "source": 154,
        "target": 158,
        "strength": 50
      },
      {
        "source": 154,
        "target": 161,
        "strength": 29
      },
      {
        "source": 154,
        "target": 166,
        "strength": 8
      },
      {
        "source": 154,
        "target": 171,
        "strength": 17
      },
      {
        "source": 154,
        "target": 172,
        "strength": 96
      },
      {
        "source": 154,
        "target": 178,
        "strength": 26
      },
      {
        "source": 154,
        "target": 179,
        "strength": 30
      },
      {
        "source": 154,
        "target": 180,
        "strength": 42
      },
      {
        "source": 154,
        "target": 181,
        "strength": 102
      },
      {
        "source": 154,
        "target": 182,
        "strength": 25
      },
      {
        "source": 154,
        "target": 190,
        "strength": 143
      },
      {
        "source": 154,
        "target": 191,
        "strength": 92
      },
      {
        "source": 154,
        "target": 192,
        "strength": 122
      },
      {
        "source": 154,
        "target": 193,
        "strength": 18
      },
      {
        "source": 154,
        "target": 194,
        "strength": 49
      },
      {
        "source": 158,
        "target": 159,
        "strength": 26
      },
      {
        "source": 158,
        "target": 160,
        "strength": 44
      },
      {
        "source": 158,
        "target": 161,
        "strength": 185
      },
      {
        "source": 158,
        "target": 163,
        "strength": 11
      },
      {
        "source": 158,
        "target": 164,
        "strength": 83
      },
      {
        "source": 158,
        "target": 165,
        "strength": 54
      },
      {
        "source": 158,
        "target": 166,
        "strength": 46
      },
      {
        "source": 158,
        "target": 169,
        "strength": 28
      },
      {
        "source": 158,
        "target": 170,
        "strength": 37
      },
      {
        "source": 158,
        "target": 172,
        "strength": 103
      },
      {
        "source": 158,
        "target": 180,
        "strength": 40
      },
      {
        "source": 158,
        "target": 181,
        "strength": 94
      },
      {
        "source": 158,
        "target": 190,
        "strength": 145
      },
      {
        "source": 181,
        "target": 226,
        "strength": 14
      },
      {
        "source": 181,
        "target": 227,
        "strength": 2
      },
      {
        "source": 181,
        "target": 228,
        "strength": 41
      },
      {
        "source": 181,
        "target": 230,
        "strength": 2
      },
      {
        "source": 181,
        "target": 232,
        "strength": 68
      },
      {
        "source": 181,
        "target": 238,
        "strength": 9
      },
      {
        "source": 181,
        "target": 239,
        "strength": 4
      },
      {
        "source": 181,
        "target": 240,
        "strength": 4
      },
      {
        "source": 181,
        "target": 241,
        "strength": 84
      },
      {
        "source": 181,
        "target": 242,
        "strength": 35
      },
      {
        "source": 181,
        "target": 243,
        "strength": 6
      },
      {
        "source": 181,
        "target": 244,
        "strength": 1
      },
      {
        "source": 181,
        "target": 245,
        "strength": 15
      },
      {
        "source": 181,
        "target": 246,
        "strength": 37
      },
      {
        "source": 241,
        "target": 242,
        "strength": 110
      }
    ],
    "summary": "El grafo interactivo usa coordenadas y asociaciones recuperadas del JSON exportado por VOSviewer. Los nodos se escalan por ocurrencias y los enlaces por fuerza de asociación."
  }
};