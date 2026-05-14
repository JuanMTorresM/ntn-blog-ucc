window.NTN_SITE_DATA = {
  "meta": {
    "title": "Non-Terrestrial Networks (NTN)",
    "subtitle": "Reto ABET SO7 - Comunicaciones II",
    "statement": "La presente Divulgación Pública de la Ciencia, a través del siguiente Desarrollo Web, tiene una ruta de circulación nacional sin enfoque diferencial y está dirigido a la comunidad o público objetivo conformado por jóvenes, adultos, empresarios y/o empresa en género literario informativo de tipo Blog, con componente digital a través de soporte web.",
    "searchQuery": "\"non-terrestrial networks\" OR NTN OR \"satellite 5G\"",
    "publications": 2036,
    "yearMin": 2013,
    "yearMax": 2026,
    "rawKeywords": 7955,
    "semiThreshold": 9,
    "semiTerms": 526,
    "manualTerms": 95,
    "clusters": 5,
    "selectedTerms": 20,
    "mapNodes": 95,
    "mapLinks": 520
  },
  "team": [
    {
      "name": "Marcos David Arrieta Barreto",
      "code": "2204657",
      "role": "Coordinación de análisis bibliométrico",
      "photo": "assets/images/team/marcos-arrieta.jpg",
      "contribution": "Organizó la lectura del mapa, validó clústeres y apoyó la síntesis técnica de tendencias NTN."
    },
    {
      "name": "Johan Sebastian Peña Castillo",
      "code": "2170491",
      "role": "Diseño del mini-caso técnico",
      "photo": "assets/images/team/johan-pena.jpg",
      "contribution": "Relacionó los conceptos de LEO, Doppler, margen de enlace y decisión técnica del gateway urbano."
    },
    {
      "name": "Juan David Suarez Corzo",
      "code": "2164685",
      "role": "Revisión académica y fuentes IEEE",
      "photo": "assets/images/team/juan-suarez.jpg",
      "contribution": "Apoyó la selección de literatura, la depuración de términos y la organización de referencias consultadas."
    },
    {
      "name": "Juan Manuel Torres Melo",
      "code": "2204212",
      "role": "Integración web e interactividad",
      "photo": "assets/images/team/juan-torres.jpg",
      "contribution": "Estructuró la experiencia por pestañas, el mapa interactivo y el asistente local del BlogDPC."
    }
  ],
  "clusters": [
    {
      "name": "Arquitectura satelital y continuidad LEO",
      "short": "LEO y continuidad",
      "color": "#37d5ff",
      "explanation": "Agrupa conceptos relacionados con satélites LEO, órbitas, constelaciones, gateway y continuidad del servicio NTN.",
      "focus": "Arquitectura espacial, enlaces feeder/user, movilidad orbital, cobertura de haz y coordinación con estaciones terrestres.",
      "meaning": "Dentro de NTN representa la base física de la red: plataformas no terrestres que extienden cobertura más allá de las celdas convencionales.",
      "importance": "Es clave porque la geometría orbital define retardo, Doppler, handover y disponibilidad del enlace.",
      "terms": [
        "satellite",
        "LEO",
        "orbits",
        "constellation",
        "earth orbits",
        "gateway"
      ],
      "id": 1,
      "selectedCount": 6
    },
    {
      "name": "Integración 5G/6G y red terrestre",
      "short": "5G/6G + TN",
      "color": "#a78bfa",
      "explanation": "Reúne términos de 5G NR, 6G, arquitectura de red, red terrestre y convergencia TN/NTN.",
      "focus": "Interoperabilidad, arquitectura de acceso, continuidad entre red terrestre y no terrestre, y evolución hacia 5G-Advanced/6G.",
      "meaning": "Muestra cómo NTN no reemplaza la red terrestre, sino que la complementa para ampliar servicio y resiliencia.",
      "importance": "Permite analizar movilidad, handover y calidad de servicio como problemas de integración de red.",
      "terms": [
        "terrestrial network",
        "non terrestrial network",
        "NTN",
        "5G NR",
        "6G",
        "network architecture",
        "mobile telecommunication system",
        "mobility",
        "handover",
        "network layers"
      ],
      "id": 2,
      "selectedCount": 59
    },
    {
      "name": "Gestión de recursos, QoS y optimización",
      "short": "Recursos y QoS",
      "color": "#fbbf24",
      "explanation": "Concentra términos asociados con asignación de recursos, QoS, caching, optimización y aprendizaje automático.",
      "focus": "Uso eficiente de espectro, energía, backhaul y capacidad para cumplir requisitos de servicio.",
      "meaning": "Dentro de NTN representa las decisiones de control que convierten la conectividad satelital en servicio usable.",
      "importance": "Es importante porque los enlaces NTN tienen recursos limitados y condiciones cambiantes.",
      "terms": [
        "resource",
        "machine learning",
        "security",
        "reinforcement learning",
        "QoS",
        "energy efficiency",
        "backhaul",
        "reinforcement learnings",
        "edge computing",
        "machine-learning"
      ],
      "id": 3,
      "selectedCount": 11
    },
    {
      "name": "Plataformas aéreas, IoT y cobertura extendida",
      "short": "UAV/HAPS/IoT",
      "color": "#34d399",
      "explanation": "Incluye UAV, HAPS, IoT, NB-IoT, cobertura y aplicaciones de conectividad extendida.",
      "focus": "Redes aire-espacio-tierra para zonas rurales, marítimas, emergencias, sensores y servicios de baja potencia.",
      "meaning": "Representa las aplicaciones y plataformas que conectan usuarios fuera del alcance de infraestructura fija.",
      "importance": "Es clave para cerrar brechas de conectividad y habilitar servicios resilientes en escenarios remotos.",
      "terms": [
        "coverage",
        "platform",
        "UAV",
        "IoT",
        "HAPS",
        "aerial vehicle",
        "NB-IoT",
        "user equipments"
      ],
      "id": 4,
      "selectedCount": 8
    },
    {
      "name": "Canal, interferencia y desempeño físico",
      "short": "Canal y PHY",
      "color": "#fb7185",
      "explanation": "Agrupa canal, interferencia, SNR, BER, outage y efectos físicos como Doppler.",
      "focus": "Capa física: presupuesto de enlace, propagación, pérdidas, variabilidad del canal y confiabilidad.",
      "meaning": "Explica las limitaciones técnicas que condicionan la transmisión digital en enlaces LEO.",
      "importance": "Conecta directamente la bibliometría con el mini-caso técnico de link budget y Doppler.",
      "terms": [
        "delay",
        "channel",
        "interference",
        "antennas",
        "beamforming",
        "Doppler shift",
        "signal to noise ratio",
        "outage probability",
        "bit error rate",
        "signal receivers"
      ],
      "id": 5,
      "selectedCount": 11
    }
  ],
  "selectedTerms": [
    {
      "term": "non terrestrial network",
      "cluster": 2,
      "occurrences": 1936,
      "totalLinkStrength": 17867,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 1935,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 1325,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 1297,
          "cluster": 1
        },
        {
          "term": "6G",
          "strength": 799,
          "cluster": 2
        },
        {
          "term": "5G NR",
          "strength": 776,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 693,
          "cluster": 1
        },
        {
          "term": "coverage",
          "strength": 638,
          "cluster": 4
        },
        {
          "term": "delay",
          "strength": 562,
          "cluster": 5
        },
        {
          "term": "orbits",
          "strength": 544,
          "cluster": 1
        },
        {
          "term": "channel",
          "strength": 497,
          "cluster": 5
        }
      ],
      "interpretation": "Actúa como concepto integrador: conecta arquitectura, satélites LEO, red terrestre, QoS y aplicaciones. Su fuerza de enlace muestra que el tema se estudia como convergencia entre infraestructura espacial y comunicaciones móviles.",
      "conclusion": "El término confirma que NTN es el eje conceptual del trabajo y permite unir bibliometría, arquitectura y mini-caso técnico."
    },
    {
      "term": "NTN",
      "cluster": 2,
      "occurrences": 1338,
      "totalLinkStrength": 13067,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 1332,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 1325,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 944,
          "cluster": 1
        },
        {
          "term": "5G NR",
          "strength": 588,
          "cluster": 2
        },
        {
          "term": "6G",
          "strength": 569,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 504,
          "cluster": 1
        },
        {
          "term": "coverage",
          "strength": 490,
          "cluster": 4
        },
        {
          "term": "delay",
          "strength": 415,
          "cluster": 5
        },
        {
          "term": "orbits",
          "strength": 401,
          "cluster": 1
        },
        {
          "term": "network architecture",
          "strength": 353,
          "cluster": 2
        }
      ],
      "interpretation": "Funciona como etiqueta abreviada de la tendencia. Sus enlaces muestran que la literatura la relaciona con 5G-Advanced, satélites, movilidad y redes terrestres, lo cual confirma el enfoque de integración.",
      "conclusion": "La abreviatura muestra la consolidación del tema en literatura reciente y estándares de comunicaciones móviles."
    },
    {
      "term": "LEO",
      "cluster": 1,
      "occurrences": 723,
      "totalLinkStrength": 7650,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 703,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 699,
          "cluster": 1
        },
        {
          "term": "non terrestrial network",
          "strength": 693,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 504,
          "cluster": 2
        },
        {
          "term": "orbits",
          "strength": 494,
          "cluster": 1
        },
        {
          "term": "5G NR",
          "strength": 291,
          "cluster": 2
        },
        {
          "term": "coverage",
          "strength": 261,
          "cluster": 4
        },
        {
          "term": "6G",
          "strength": 260,
          "cluster": 2
        },
        {
          "term": "delay",
          "strength": 245,
          "cluster": 5
        },
        {
          "term": "constellation",
          "strength": 240,
          "cluster": 1
        }
      ],
      "interpretation": "Aparece asociado con satélites, órbitas, constelaciones, retardo y Doppler. Esto indica que LEO es una plataforma central para reducir latencia frente a órbitas más altas, aunque introduce movilidad rápida.",
      "conclusion": "LEO es clave porque mejora retardo, pero exige manejar Doppler y handover con más cuidado."
    },
    {
      "term": "satellite",
      "cluster": 1,
      "occurrences": 1377,
      "totalLinkStrength": 13165,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 1321,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 1297,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 944,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 699,
          "cluster": 1
        },
        {
          "term": "5G NR",
          "strength": 614,
          "cluster": 2
        },
        {
          "term": "orbits",
          "strength": 550,
          "cluster": 1
        },
        {
          "term": "6G",
          "strength": 509,
          "cluster": 2
        },
        {
          "term": "coverage",
          "strength": 472,
          "cluster": 4
        },
        {
          "term": "delay",
          "strength": 425,
          "cluster": 5
        },
        {
          "term": "network architecture",
          "strength": 338,
          "cluster": 2
        }
      ],
      "interpretation": "Es uno de los nodos más transversales. Su relación con red terrestre, comunicación móvil y arquitectura evidencia que NTN se entiende como extensión satelital de los sistemas celulares.",
      "conclusion": "El nodo satelital es el soporte principal para ampliar cobertura y crear continuidad con redes terrestres."
    },
    {
      "term": "terrestrial network",
      "cluster": 2,
      "occurrences": 1965,
      "totalLinkStrength": 18083,
      "topLinks": [
        {
          "term": "non terrestrial network",
          "strength": 1935,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 1332,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 1321,
          "cluster": 1
        },
        {
          "term": "6G",
          "strength": 808,
          "cluster": 2
        },
        {
          "term": "5G NR",
          "strength": 794,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 703,
          "cluster": 1
        },
        {
          "term": "coverage",
          "strength": 642,
          "cluster": 4
        },
        {
          "term": "delay",
          "strength": 567,
          "cluster": 5
        },
        {
          "term": "orbits",
          "strength": 549,
          "cluster": 1
        },
        {
          "term": "channel",
          "strength": 502,
          "cluster": 5
        }
      ],
      "interpretation": "Conecta la infraestructura celular tradicional con NTN. Su presencia muestra que los retos no son solo espaciales, sino de interoperabilidad, handover y continuidad del servicio.",
      "conclusion": "La red terrestre sigue siendo parte esencial del sistema porque NTN debe interoperar con infraestructura celular existente."
    },
    {
      "term": "Doppler shift",
      "cluster": 5,
      "occurrences": 127,
      "totalLinkStrength": 1437,
      "topLinks": [
        {
          "term": "non terrestrial network",
          "strength": 124,
          "cluster": 2
        },
        {
          "term": "terrestrial network",
          "strength": 124,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 106,
          "cluster": 1
        },
        {
          "term": "NTN",
          "strength": 104,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 80,
          "cluster": 1
        },
        {
          "term": "5G NR",
          "strength": 72,
          "cluster": 2
        },
        {
          "term": "channel",
          "strength": 68,
          "cluster": 5
        },
        {
          "term": "orbits",
          "strength": 65,
          "cluster": 1
        },
        {
          "term": "delay",
          "strength": 62,
          "cluster": 5
        },
        {
          "term": "coverage",
          "strength": 45,
          "cluster": 4
        }
      ],
      "interpretation": "Su valor técnico está en la capa física. En enlaces LEO, el movimiento relativo genera desplazamiento de frecuencia que debe compensarse para mantener sincronización y calidad.",
      "conclusion": "El Doppler justifica la calculadora del mini-caso, ya que afecta directamente frecuencia y sincronización."
    },
    {
      "term": "handover",
      "cluster": 2,
      "occurrences": 163,
      "totalLinkStrength": 1724,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 161,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 160,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 134,
          "cluster": 1
        },
        {
          "term": "NTN",
          "strength": 117,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 105,
          "cluster": 1
        },
        {
          "term": "mobility",
          "strength": 81,
          "cluster": 2
        },
        {
          "term": "5G NR",
          "strength": 74,
          "cluster": 2
        },
        {
          "term": "orbits",
          "strength": 71,
          "cluster": 1
        },
        {
          "term": "coverage",
          "strength": 61,
          "cluster": 4
        },
        {
          "term": "6G",
          "strength": 60,
          "cluster": 2
        }
      ],
      "interpretation": "Representa continuidad de servicio cuando cambian satélites, haces o celdas. En NTN, el handover es más exigente por movilidad orbital y cobertura dinámica.",
      "conclusion": "El handover permite conectar el análisis bibliométrico con movilidad y continuidad real de servicio."
    },
    {
      "term": "5G NR",
      "cluster": 2,
      "occurrences": 841,
      "totalLinkStrength": 7864,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 794,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 776,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 614,
          "cluster": 1
        },
        {
          "term": "NTN",
          "strength": 588,
          "cluster": 2
        },
        {
          "term": "6G",
          "strength": 360,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 291,
          "cluster": 1
        },
        {
          "term": "coverage",
          "strength": 260,
          "cluster": 4
        },
        {
          "term": "delay",
          "strength": 250,
          "cluster": 5
        },
        {
          "term": "network architecture",
          "strength": 238,
          "cluster": 2
        },
        {
          "term": "orbits",
          "strength": 235,
          "cluster": 1
        }
      ],
      "interpretation": "Relaciona NTN con la evolución estandarizada de acceso radio. Permite entender cómo se adaptan procedimientos terrestres a propagación satelital.",
      "conclusion": "5G NR muestra que NTN se está integrando a estándares móviles, no solo a comunicaciones satelitales tradicionales."
    },
    {
      "term": "QoS",
      "cluster": 3,
      "occurrences": 177,
      "totalLinkStrength": 1932,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 172,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 165,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 119,
          "cluster": 1
        },
        {
          "term": "NTN",
          "strength": 116,
          "cluster": 2
        },
        {
          "term": "resource",
          "strength": 77,
          "cluster": 3
        },
        {
          "term": "5G NR",
          "strength": 75,
          "cluster": 2
        },
        {
          "term": "6G",
          "strength": 74,
          "cluster": 2
        },
        {
          "term": "coverage",
          "strength": 68,
          "cluster": 4
        },
        {
          "term": "delay",
          "strength": 62,
          "cluster": 5
        },
        {
          "term": "LEO",
          "strength": 60,
          "cluster": 1
        }
      ],
      "interpretation": "Conecta decisiones de red con experiencia de servicio. En NTN, QoS depende de retardo, capacidad, disponibilidad y asignación de recursos.",
      "conclusion": "QoS permite evaluar si el enlace NTN sirve para aplicaciones reales y no solo para cobertura básica."
    },
    {
      "term": "resource",
      "cluster": 3,
      "occurrences": 493,
      "totalLinkStrength": 5002,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 481,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 472,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 333,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 329,
          "cluster": 1
        },
        {
          "term": "6G",
          "strength": 218,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 176,
          "cluster": 1
        },
        {
          "term": "coverage",
          "strength": 171,
          "cluster": 4
        },
        {
          "term": "delay",
          "strength": 170,
          "cluster": 5
        },
        {
          "term": "5G NR",
          "strength": 162,
          "cluster": 2
        },
        {
          "term": "network architecture",
          "strength": 134,
          "cluster": 2
        }
      ],
      "interpretation": "Resume el problema de administrar espectro, potencia, backhaul y tiempo de transmisión en redes con enlaces variables y capacidad limitada.",
      "conclusion": "La administración de recursos determina capacidad, estabilidad y eficiencia de una red NTN."
    },
    {
      "term": "coverage",
      "cluster": 4,
      "occurrences": 658,
      "totalLinkStrength": 6915,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 642,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 638,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 490,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 472,
          "cluster": 1
        },
        {
          "term": "6G",
          "strength": 302,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 261,
          "cluster": 1
        },
        {
          "term": "5G NR",
          "strength": 260,
          "cluster": 2
        },
        {
          "term": "delay",
          "strength": 220,
          "cluster": 5
        },
        {
          "term": "orbits",
          "strength": 206,
          "cluster": 1
        },
        {
          "term": "platform",
          "strength": 178,
          "cluster": 4
        }
      ],
      "interpretation": "Muestra el objetivo social y técnico de NTN: extender conectividad a zonas rurales, marítimas, de emergencia e IoT fuera de infraestructura convencional.",
      "conclusion": "La cobertura resume el valor social y técnico de NTN: llegar donde la red terrestre no alcanza."
    },
    {
      "term": "delay",
      "cluster": 5,
      "occurrences": 587,
      "totalLinkStrength": 6161,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 567,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 562,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 425,
          "cluster": 1
        },
        {
          "term": "NTN",
          "strength": 415,
          "cluster": 2
        },
        {
          "term": "6G",
          "strength": 254,
          "cluster": 2
        },
        {
          "term": "5G NR",
          "strength": 250,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 245,
          "cluster": 1
        },
        {
          "term": "coverage",
          "strength": 220,
          "cluster": 4
        },
        {
          "term": "orbits",
          "strength": 185,
          "cluster": 1
        },
        {
          "term": "resource",
          "strength": 170,
          "cluster": 3
        }
      ],
      "interpretation": "Es una variable crítica porque la propagación espacial aumenta latencia y afecta servicios interactivos, sincronización y control.",
      "conclusion": "El retardo es una limitación decisiva que debe considerarse en diseño y selección de aplicaciones."
    },
    {
      "term": "interference",
      "cluster": 5,
      "occurrences": 286,
      "totalLinkStrength": 3024,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 281,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 276,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 204,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 192,
          "cluster": 1
        },
        {
          "term": "6G",
          "strength": 114,
          "cluster": 2
        },
        {
          "term": "channel",
          "strength": 114,
          "cluster": 5
        },
        {
          "term": "coverage",
          "strength": 114,
          "cluster": 4
        },
        {
          "term": "LEO",
          "strength": 104,
          "cluster": 1
        },
        {
          "term": "resource",
          "strength": 91,
          "cluster": 3
        },
        {
          "term": "5G NR",
          "strength": 84,
          "cluster": 2
        }
      ],
      "interpretation": "Aparece como reto de coexistencia entre haces, usuarios, satélites y redes terrestres. Su control es esencial para capacidad y confiabilidad.",
      "conclusion": "La interferencia condiciona la reutilización de espectro y la calidad final del enlace."
    },
    {
      "term": "channel",
      "cluster": 5,
      "occurrences": 510,
      "totalLinkStrength": 5165,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 502,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 497,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 337,
          "cluster": 1
        },
        {
          "term": "NTN",
          "strength": 335,
          "cluster": 2
        },
        {
          "term": "6G",
          "strength": 188,
          "cluster": 2
        },
        {
          "term": "5G NR",
          "strength": 177,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 172,
          "cluster": 1
        },
        {
          "term": "delay",
          "strength": 157,
          "cluster": 5
        },
        {
          "term": "coverage",
          "strength": 153,
          "cluster": 4
        },
        {
          "term": "orbits",
          "strength": 137,
          "cluster": 1
        }
      ],
      "interpretation": "Concentra la descripción física de propagación, fading, atenuación y condiciones radioeléctricas que afectan el desempeño del enlace.",
      "conclusion": "El canal define pérdidas, variación y confiabilidad; por eso debe modelarse antes de decidir parámetros."
    },
    {
      "term": "network architecture",
      "cluster": 2,
      "occurrences": 509,
      "totalLinkStrength": 5143,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 490,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 481,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 353,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 338,
          "cluster": 1
        },
        {
          "term": "6G",
          "strength": 274,
          "cluster": 2
        },
        {
          "term": "5G NR",
          "strength": 238,
          "cluster": 2
        },
        {
          "term": "coverage",
          "strength": 178,
          "cluster": 4
        },
        {
          "term": "delay",
          "strength": 157,
          "cluster": 5
        },
        {
          "term": "LEO",
          "strength": 151,
          "cluster": 1
        },
        {
          "term": "platform",
          "strength": 146,
          "cluster": 4
        }
      ],
      "interpretation": "Organiza la red en plataformas, enlaces, funciones, gateways y mecanismos de integración TN/NTN.",
      "conclusion": "La arquitectura muestra cómo se conectan satélite, gateway, usuario y núcleo de red."
    },
    {
      "term": "platform",
      "cluster": 4,
      "occurrences": 433,
      "totalLinkStrength": 4768,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 425,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 421,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 301,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 281,
          "cluster": 1
        },
        {
          "term": "HAPS",
          "strength": 242,
          "cluster": 4
        },
        {
          "term": "6G",
          "strength": 213,
          "cluster": 2
        },
        {
          "term": "coverage",
          "strength": 178,
          "cluster": 4
        },
        {
          "term": "5G NR",
          "strength": 176,
          "cluster": 2
        },
        {
          "term": "network architecture",
          "strength": 146,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 144,
          "cluster": 1
        }
      ],
      "interpretation": "Explica que NTN no depende de una sola tecnología: incluye satélites, HAPS y UAV, cada uno con cobertura, movilidad y latencia diferentes.",
      "conclusion": "La diversidad de plataformas confirma que NTN es un ecosistema, no una única solución."
    },
    {
      "term": "HAPS",
      "cluster": 4,
      "occurrences": 258,
      "totalLinkStrength": 3021,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 254,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 251,
          "cluster": 2
        },
        {
          "term": "platform",
          "strength": 242,
          "cluster": 4
        },
        {
          "term": "NTN",
          "strength": 177,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 161,
          "cluster": 1
        },
        {
          "term": "6G",
          "strength": 132,
          "cluster": 2
        },
        {
          "term": "coverage",
          "strength": 107,
          "cluster": 4
        },
        {
          "term": "UAV",
          "strength": 99,
          "cluster": 4
        },
        {
          "term": "5G NR",
          "strength": 92,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 82,
          "cluster": 1
        }
      ],
      "interpretation": "Representa plataformas de gran altitud que pueden complementar satélites y redes terrestres con menor retardo y cobertura regional.",
      "conclusion": "HAPS aparece como alternativa intermedia para cobertura regional con menor distancia que LEO."
    },
    {
      "term": "UAV",
      "cluster": 4,
      "occurrences": 349,
      "totalLinkStrength": 3835,
      "topLinks": [
        {
          "term": "terrestrial network",
          "strength": 341,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 335,
          "cluster": 2
        },
        {
          "term": "NTN",
          "strength": 205,
          "cluster": 2
        },
        {
          "term": "antennas",
          "strength": 175,
          "cluster": 5
        },
        {
          "term": "aerial vehicle",
          "strength": 173,
          "cluster": 4
        },
        {
          "term": "satellite",
          "strength": 170,
          "cluster": 1
        },
        {
          "term": "6G",
          "strength": 145,
          "cluster": 2
        },
        {
          "term": "platform",
          "strength": 128,
          "cluster": 4
        },
        {
          "term": "coverage",
          "strength": 127,
          "cluster": 4
        },
        {
          "term": "channel",
          "strength": 114,
          "cluster": 5
        }
      ],
      "interpretation": "Se asocia con cobertura flexible, emergencias, despliegue temporal y redes aire-tierra para complementar el acceso satelital.",
      "conclusion": "UAV aporta flexibilidad para despliegues temporales y apoyo en emergencia."
    },
    {
      "term": "constellation",
      "cluster": 1,
      "occurrences": 326,
      "totalLinkStrength": 3473,
      "topLinks": [
        {
          "term": "satellite",
          "strength": 316,
          "cluster": 1
        },
        {
          "term": "terrestrial network",
          "strength": 316,
          "cluster": 2
        },
        {
          "term": "non terrestrial network",
          "strength": 307,
          "cluster": 2
        },
        {
          "term": "LEO",
          "strength": 240,
          "cluster": 1
        },
        {
          "term": "NTN",
          "strength": 223,
          "cluster": 2
        },
        {
          "term": "orbits",
          "strength": 199,
          "cluster": 1
        },
        {
          "term": "coverage",
          "strength": 130,
          "cluster": 4
        },
        {
          "term": "6G",
          "strength": 127,
          "cluster": 2
        },
        {
          "term": "5G NR",
          "strength": 126,
          "cluster": 2
        },
        {
          "term": "delay",
          "strength": 111,
          "cluster": 5
        }
      ],
      "interpretation": "Describe el uso coordinado de múltiples satélites LEO para continuidad de cobertura, capacidad y reducción del tiempo sin servicio.",
      "conclusion": "La constelación es necesaria para continuidad de servicio en órbitas bajas."
    },
    {
      "term": "NB-IoT",
      "cluster": 4,
      "occurrences": 80,
      "totalLinkStrength": 887,
      "topLinks": [
        {
          "term": "IoT",
          "strength": 80,
          "cluster": 4
        },
        {
          "term": "non terrestrial network",
          "strength": 77,
          "cluster": 2
        },
        {
          "term": "terrestrial network",
          "strength": 77,
          "cluster": 2
        },
        {
          "term": "satellite",
          "strength": 67,
          "cluster": 1
        },
        {
          "term": "NTN",
          "strength": 66,
          "cluster": 2
        },
        {
          "term": "narrow bands",
          "strength": 45,
          "cluster": 2
        },
        {
          "term": "5G NR",
          "strength": 42,
          "cluster": 2
        },
        {
          "term": "coverage",
          "strength": 38,
          "cluster": 4
        },
        {
          "term": "LEO",
          "strength": 37,
          "cluster": 1
        },
        {
          "term": "delay",
          "strength": 28,
          "cluster": 5
        }
      ],
      "interpretation": "Relaciona NTN con sensores de baja potencia y conectividad masiva, especialmente útil en monitoreo remoto y cobertura extendida.",
      "conclusion": "NB-IoT evidencia la aplicación de NTN en sensores y servicios de bajo consumo."
    }
  ],
  "map": {
    "nodes": [
      {
        "id": "non terrestrial network",
        "label": "non terrestrial network",
        "cluster": 2,
        "x": 569.74,
        "y": 396.61,
        "occurrences": 1936,
        "totalLinkStrength": 17867,
        "highlight": true,
        "size": 28
      },
      {
        "id": "NTN",
        "label": "NTN",
        "cluster": 2,
        "x": 584.44,
        "y": 394.27,
        "occurrences": 1338,
        "totalLinkStrength": 13067,
        "highlight": true,
        "size": 28
      },
      {
        "id": "LEO",
        "label": "LEO",
        "cluster": 1,
        "x": 634.48,
        "y": 426.41,
        "occurrences": 723,
        "totalLinkStrength": 7650,
        "highlight": true,
        "size": 28
      },
      {
        "id": "satellite",
        "label": "satellite",
        "cluster": 1,
        "x": 605.33,
        "y": 407.02,
        "occurrences": 1377,
        "totalLinkStrength": 13165,
        "highlight": true,
        "size": 28
      },
      {
        "id": "terrestrial network",
        "label": "terrestrial network",
        "cluster": 2,
        "x": 570.52,
        "y": 394.19,
        "occurrences": 1965,
        "totalLinkStrength": 18083,
        "highlight": true,
        "size": 28
      },
      {
        "id": "Doppler shift",
        "label": "Doppler shift",
        "cluster": 5,
        "x": 767.88,
        "y": 477.29,
        "occurrences": 127,
        "totalLinkStrength": 1437,
        "highlight": true,
        "size": 17.83
      },
      {
        "id": "handover",
        "label": "handover",
        "cluster": 2,
        "x": 777.62,
        "y": 368.34,
        "occurrences": 163,
        "totalLinkStrength": 1724,
        "highlight": true,
        "size": 19.41
      },
      {
        "id": "5G NR",
        "label": "5G NR",
        "cluster": 2,
        "x": 639.77,
        "y": 378.75,
        "occurrences": 841,
        "totalLinkStrength": 7864,
        "highlight": true,
        "size": 28
      },
      {
        "id": "QoS",
        "label": "QoS",
        "cluster": 3,
        "x": 609.7,
        "y": 284.63,
        "occurrences": 177,
        "totalLinkStrength": 1932,
        "highlight": true,
        "size": 19.97
      },
      {
        "id": "resource",
        "label": "resource",
        "cluster": 3,
        "x": 535.01,
        "y": 341.16,
        "occurrences": 493,
        "totalLinkStrength": 5002,
        "highlight": true,
        "size": 28
      },
      {
        "id": "coverage",
        "label": "coverage",
        "cluster": 4,
        "x": 549.18,
        "y": 394.32,
        "occurrences": 658,
        "totalLinkStrength": 6915,
        "highlight": true,
        "size": 28
      },
      {
        "id": "delay",
        "label": "delay",
        "cluster": 5,
        "x": 623.35,
        "y": 380.67,
        "occurrences": 587,
        "totalLinkStrength": 6161,
        "highlight": true,
        "size": 28
      },
      {
        "id": "interference",
        "label": "interference",
        "cluster": 5,
        "x": 493.32,
        "y": 455.49,
        "occurrences": 286,
        "totalLinkStrength": 3024,
        "highlight": true,
        "size": 23.76
      },
      {
        "id": "channel",
        "label": "channel",
        "cluster": 5,
        "x": 548.5,
        "y": 447.58,
        "occurrences": 510,
        "totalLinkStrength": 5165,
        "highlight": true,
        "size": 28
      },
      {
        "id": "network architecture",
        "label": "network architecture",
        "cluster": 2,
        "x": 597.98,
        "y": 346.57,
        "occurrences": 509,
        "totalLinkStrength": 5143,
        "highlight": true,
        "size": 28
      },
      {
        "id": "platform",
        "label": "platform",
        "cluster": 4,
        "x": 488.58,
        "y": 410.25,
        "occurrences": 433,
        "totalLinkStrength": 4768,
        "highlight": true,
        "size": 27.85
      },
      {
        "id": "HAPS",
        "label": "HAPS",
        "cluster": 4,
        "x": 439.92,
        "y": 424.57,
        "occurrences": 258,
        "totalLinkStrength": 3021,
        "highlight": true,
        "size": 22.87
      },
      {
        "id": "UAV",
        "label": "UAV",
        "cluster": 4,
        "x": 440.02,
        "y": 379.08,
        "occurrences": 349,
        "totalLinkStrength": 3835,
        "highlight": true,
        "size": 25.62
      },
      {
        "id": "constellation",
        "label": "constellation",
        "cluster": 1,
        "x": 700.57,
        "y": 438.45,
        "occurrences": 326,
        "totalLinkStrength": 3473,
        "highlight": true,
        "size": 24.96
      },
      {
        "id": "NB-IoT",
        "label": "NB-IoT",
        "cluster": 4,
        "x": 877.63,
        "y": 440.67,
        "occurrences": 80,
        "totalLinkStrength": 887,
        "highlight": true,
        "size": 15.39
      },
      {
        "id": "6G",
        "label": "6G",
        "cluster": 2,
        "x": 540.44,
        "y": 371.32,
        "occurrences": 822,
        "totalLinkStrength": 8298,
        "highlight": false,
        "size": 28
      },
      {
        "id": "orbits",
        "label": "orbits",
        "cluster": 1,
        "x": 636.06,
        "y": 432.77,
        "occurrences": 558,
        "totalLinkStrength": 6183,
        "highlight": false,
        "size": 28
      },
      {
        "id": "IoT",
        "label": "IoT",
        "cluster": 4,
        "x": 655.0,
        "y": 343.75,
        "occurrences": 316,
        "totalLinkStrength": 3380,
        "highlight": false,
        "size": 24.67
      },
      {
        "id": "mobile telecommunication system",
        "label": "mobile telecommunication system",
        "cluster": 2,
        "x": 573.06,
        "y": 472.73,
        "occurrences": 271,
        "totalLinkStrength": 2966,
        "highlight": false,
        "size": 23.29
      },
      {
        "id": "mobility",
        "label": "mobility",
        "cluster": 2,
        "x": 705.23,
        "y": 377.16,
        "occurrences": 267,
        "totalLinkStrength": 2936,
        "highlight": false,
        "size": 23.16
      },
      {
        "id": "antennas",
        "label": "antennas",
        "cluster": 5,
        "x": 425.32,
        "y": 360.19,
        "occurrences": 251,
        "totalLinkStrength": 2892,
        "highlight": false,
        "size": 22.64
      },
      {
        "id": "machine learning",
        "label": "machine learning",
        "cluster": 3,
        "x": 492.51,
        "y": 292.08,
        "occurrences": 223,
        "totalLinkStrength": 2463,
        "highlight": false,
        "size": 21.68
      },
      {
        "id": "security",
        "label": "security",
        "cluster": 3,
        "x": 424.69,
        "y": 309.36,
        "occurrences": 192,
        "totalLinkStrength": 1879,
        "highlight": false,
        "size": 20.55
      },
      {
        "id": "reinforcement learning",
        "label": "reinforcement learning",
        "cluster": 3,
        "x": 520.03,
        "y": 272.14,
        "occurrences": 178,
        "totalLinkStrength": 2085,
        "highlight": false,
        "size": 20.01
      },
      {
        "id": "aerial vehicle",
        "label": "aerial vehicle",
        "cluster": 4,
        "x": 340.08,
        "y": 376.55,
        "occurrences": 174,
        "totalLinkStrength": 2064,
        "highlight": false,
        "size": 19.85
      },
      {
        "id": "earth orbits",
        "label": "earth orbits",
        "cluster": 1,
        "x": 704.31,
        "y": 517.94,
        "occurrences": 149,
        "totalLinkStrength": 1660,
        "highlight": false,
        "size": 18.82
      },
      {
        "id": "beamforming",
        "label": "beamforming",
        "cluster": 5,
        "x": 370.31,
        "y": 485.98,
        "occurrences": 139,
        "totalLinkStrength": 1447,
        "highlight": false,
        "size": 18.38
      },
      {
        "id": "energy efficiency",
        "label": "energy efficiency",
        "cluster": 3,
        "x": 334.56,
        "y": 426.21,
        "occurrences": 132,
        "totalLinkStrength": 1520,
        "highlight": false,
        "size": 18.06
      },
      {
        "id": "signal to noise ratio",
        "label": "signal to noise ratio",
        "cluster": 5,
        "x": 613.14,
        "y": 551.07,
        "occurrences": 121,
        "totalLinkStrength": 1314,
        "highlight": false,
        "size": 17.55
      },
      {
        "id": "network layers",
        "label": "network layers",
        "cluster": 2,
        "x": 719.24,
        "y": 294.19,
        "occurrences": 116,
        "totalLinkStrength": 1271,
        "highlight": false,
        "size": 17.31
      },
      {
        "id": "wireless networks",
        "label": "wireless networks",
        "cluster": 2,
        "x": 338.29,
        "y": 316.49,
        "occurrences": 115,
        "totalLinkStrength": 1329,
        "highlight": false,
        "size": 17.26
      },
      {
        "id": "backhaul",
        "label": "backhaul",
        "cluster": 3,
        "x": 413.18,
        "y": 249.79,
        "occurrences": 108,
        "totalLinkStrength": 1093,
        "highlight": false,
        "size": 16.91
      },
      {
        "id": "reinforcement learnings",
        "label": "reinforcement learnings",
        "cluster": 3,
        "x": 581.31,
        "y": 224.74,
        "occurrences": 105,
        "totalLinkStrength": 1333,
        "highlight": false,
        "size": 16.76
      },
      {
        "id": "edge computing",
        "label": "edge computing",
        "cluster": 3,
        "x": 505.57,
        "y": 195.5,
        "occurrences": 97,
        "totalLinkStrength": 1042,
        "highlight": false,
        "size": 16.34
      },
      {
        "id": "synchronization",
        "label": "synchronization",
        "cluster": 2,
        "x": 836.16,
        "y": 520.21,
        "occurrences": 94,
        "totalLinkStrength": 994,
        "highlight": false,
        "size": 16.18
      },
      {
        "id": "outage probability",
        "label": "outage probability",
        "cluster": 5,
        "x": 495.97,
        "y": 584.42,
        "occurrences": 88,
        "totalLinkStrength": 908,
        "highlight": false,
        "size": 15.85
      },
      {
        "id": "optical communication",
        "label": "optical communication",
        "cluster": 2,
        "x": 593.71,
        "y": 609.45,
        "occurrences": 85,
        "totalLinkStrength": 786,
        "highlight": false,
        "size": 15.68
      },
      {
        "id": "mobile communications",
        "label": "mobile communications",
        "cluster": 2,
        "x": 684.19,
        "y": 200.97,
        "occurrences": 83,
        "totalLinkStrength": 899,
        "highlight": false,
        "size": 15.57
      },
      {
        "id": "integrated networks",
        "label": "integrated networks",
        "cluster": 2,
        "x": 415.88,
        "y": 560.46,
        "occurrences": 80,
        "totalLinkStrength": 856,
        "highlight": false,
        "size": 15.39
      },
      {
        "id": "queueing networks",
        "label": "queueing networks",
        "cluster": 2,
        "x": 834.01,
        "y": 238.07,
        "occurrences": 80,
        "totalLinkStrength": 753,
        "highlight": false,
        "size": 15.39
      },
      {
        "id": "reconfigurable",
        "label": "reconfigurable",
        "cluster": 2,
        "x": 215.91,
        "y": 418.14,
        "occurrences": 76,
        "totalLinkStrength": 860,
        "highlight": false,
        "size": 15.15
      },
      {
        "id": "user equipments",
        "label": "user equipments",
        "cluster": 4,
        "x": 893.68,
        "y": 323.01,
        "occurrences": 73,
        "totalLinkStrength": 778,
        "highlight": false,
        "size": 14.97
      },
      {
        "id": "radio access networks",
        "label": "radio access networks",
        "cluster": 2,
        "x": 768.12,
        "y": 189.33,
        "occurrences": 70,
        "totalLinkStrength": 722,
        "highlight": false,
        "size": 14.78
      },
      {
        "id": "gateway",
        "label": "gateway",
        "cluster": 1,
        "x": 938.09,
        "y": 374.49,
        "occurrences": 68,
        "totalLinkStrength": 699,
        "highlight": false,
        "size": 14.66
      },
      {
        "id": "aircraft communication",
        "label": "aircraft communication",
        "cluster": 2,
        "x": 254.91,
        "y": 515.21,
        "occurrences": 65,
        "totalLinkStrength": 701,
        "highlight": false,
        "size": 14.47
      },
      {
        "id": "spectrum efficiency",
        "label": "spectrum efficiency",
        "cluster": 2,
        "x": 209.48,
        "y": 349.21,
        "occurrences": 63,
        "totalLinkStrength": 734,
        "highlight": false,
        "size": 14.33
      },
      {
        "id": "next generation networks",
        "label": "next generation networks",
        "cluster": 2,
        "x": 326.28,
        "y": 556.22,
        "occurrences": 62,
        "totalLinkStrength": 729,
        "highlight": false,
        "size": 14.27
      },
      {
        "id": "budget control",
        "label": "budget control",
        "cluster": 2,
        "x": 735.67,
        "y": 624.88,
        "occurrences": 59,
        "totalLinkStrength": 634,
        "highlight": false,
        "size": 14.07
      },
      {
        "id": "economic and social effects",
        "label": "economic and social effects",
        "cluster": 2,
        "x": 422.95,
        "y": 644.15,
        "occurrences": 57,
        "totalLinkStrength": 587,
        "highlight": false,
        "size": 13.93
      },
      {
        "id": "base stations",
        "label": "base stations",
        "cluster": 2,
        "x": 280.98,
        "y": 216.71,
        "occurrences": 57,
        "totalLinkStrength": 651,
        "highlight": false,
        "size": 13.93
      },
      {
        "id": "millimeter waves",
        "label": "millimeter waves",
        "cluster": 2,
        "x": 190.23,
        "y": 229.75,
        "occurrences": 56,
        "totalLinkStrength": 553,
        "highlight": false,
        "size": 13.86
      },
      {
        "id": "machine-learning",
        "label": "machine-learning",
        "cluster": 3,
        "x": 426.29,
        "y": 137.51,
        "occurrences": 56,
        "totalLinkStrength": 602,
        "highlight": false,
        "size": 13.86
      },
      {
        "id": "frequency allocation",
        "label": "frequency allocation",
        "cluster": 2,
        "x": 968.64,
        "y": 548.32,
        "occurrences": 55,
        "totalLinkStrength": 593,
        "highlight": false,
        "size": 13.79
      },
      {
        "id": "wireless communications",
        "label": "wireless communications",
        "cluster": 2,
        "x": 337.29,
        "y": 151.54,
        "occurrences": 55,
        "totalLinkStrength": 591,
        "highlight": false,
        "size": 13.79
      },
      {
        "id": "optimisations",
        "label": "optimisations",
        "cluster": 2,
        "x": 184.93,
        "y": 284.46,
        "occurrences": 54,
        "totalLinkStrength": 592,
        "highlight": false,
        "size": 13.72
      },
      {
        "id": "bandwidth",
        "label": "bandwidth",
        "cluster": 2,
        "x": 702.42,
        "y": 128.75,
        "occurrences": 54,
        "totalLinkStrength": 545,
        "highlight": false,
        "size": 13.72
      },
      {
        "id": "global positioning system",
        "label": "global positioning system",
        "cluster": 2,
        "x": 839.79,
        "y": 615.66,
        "occurrences": 54,
        "totalLinkStrength": 609,
        "highlight": false,
        "size": 13.72
      },
      {
        "id": "narrow bands",
        "label": "narrow bands",
        "cluster": 2,
        "x": 988.18,
        "y": 488.05,
        "occurrences": 53,
        "totalLinkStrength": 594,
        "highlight": false,
        "size": 13.64
      },
      {
        "id": "3gpp",
        "label": "3gpp",
        "cluster": 2,
        "x": 982.09,
        "y": 263.72,
        "occurrences": 53,
        "totalLinkStrength": 544,
        "highlight": false,
        "size": 13.64
      },
      {
        "id": "multiple access",
        "label": "multiple access",
        "cluster": 2,
        "x": 140.87,
        "y": 504.0,
        "occurrences": 52,
        "totalLinkStrength": 583,
        "highlight": false,
        "size": 13.57
      },
      {
        "id": "3rd generation",
        "label": "3rd generation",
        "cluster": 2,
        "x": 1049.29,
        "y": 368.25,
        "occurrences": 51,
        "totalLinkStrength": 505,
        "highlight": false,
        "size": 13.5
      },
      {
        "id": "mimo systems",
        "label": "mimo systems",
        "cluster": 2,
        "x": 170.22,
        "y": 464.49,
        "occurrences": 51,
        "totalLinkStrength": 599,
        "highlight": false,
        "size": 13.5
      },
      {
        "id": "radio broadcasting",
        "label": "radio broadcasting",
        "cluster": 2,
        "x": 1030.35,
        "y": 421.73,
        "occurrences": 50,
        "totalLinkStrength": 535,
        "highlight": false,
        "size": 13.42
      },
      {
        "id": "4g mobile communication system",
        "label": "4g mobile communication system",
        "cluster": 2,
        "x": 922.02,
        "y": 203.16,
        "occurrences": 50,
        "totalLinkStrength": 527,
        "highlight": false,
        "size": 13.42
      },
      {
        "id": "internet protocols",
        "label": "internet protocols",
        "cluster": 2,
        "x": 902.0,
        "y": 573.54,
        "occurrences": 49,
        "totalLinkStrength": 539,
        "highlight": false,
        "size": 13.35
      },
      {
        "id": "radio communication",
        "label": "radio communication",
        "cluster": 2,
        "x": 1018.25,
        "y": 318.01,
        "occurrences": 49,
        "totalLinkStrength": 509,
        "highlight": false,
        "size": 13.35
      },
      {
        "id": "random access",
        "label": "random access",
        "cluster": 2,
        "x": 1050.75,
        "y": 507.93,
        "occurrences": 49,
        "totalLinkStrength": 499,
        "highlight": false,
        "size": 13.35
      },
      {
        "id": "vehicle to vehicle communications",
        "label": "vehicle to vehicle communications",
        "cluster": 2,
        "x": 248.88,
        "y": 163.8,
        "occurrences": 48,
        "totalLinkStrength": 566,
        "highlight": false,
        "size": 13.27
      },
      {
        "id": "reconfigurable intelligent surface",
        "label": "reconfigurable intelligent surface",
        "cluster": 2,
        "x": 65.81,
        "y": 432.62,
        "occurrences": 47,
        "totalLinkStrength": 556,
        "highlight": false,
        "size": 13.2
      },
      {
        "id": "earth (planet)",
        "label": "earth (planet)",
        "cluster": 2,
        "x": 672.68,
        "y": 682.15,
        "occurrences": 47,
        "totalLinkStrength": 527,
        "highlight": false,
        "size": 13.2
      },
      {
        "id": "stochastic systems",
        "label": "stochastic systems",
        "cluster": 2,
        "x": 328.87,
        "y": 669.5,
        "occurrences": 47,
        "totalLinkStrength": 472,
        "highlight": false,
        "size": 13.2
      },
      {
        "id": "complex networks",
        "label": "complex networks",
        "cluster": 2,
        "x": 819.49,
        "y": 146.38,
        "occurrences": 47,
        "totalLinkStrength": 521,
        "highlight": false,
        "size": 13.2
      },
      {
        "id": "air grounds",
        "label": "air grounds",
        "cluster": 2,
        "x": 502.5,
        "y": 662.45,
        "occurrences": 47,
        "totalLinkStrength": 547,
        "highlight": false,
        "size": 13.2
      },
      {
        "id": "multi agent systems",
        "label": "multi agent systems",
        "cluster": 2,
        "x": 519.2,
        "y": 112.56,
        "occurrences": 44,
        "totalLinkStrength": 549,
        "highlight": false,
        "size": 12.96
      },
      {
        "id": "energy",
        "label": "energy",
        "cluster": 2,
        "x": 60.0,
        "y": 371.75,
        "occurrences": 42,
        "totalLinkStrength": 486,
        "highlight": false,
        "size": 12.8
      },
      {
        "id": "orthogonal frequency division multiplexing",
        "label": "orthogonal frequency division multiplexing",
        "cluster": 2,
        "x": 794.97,
        "y": 688.94,
        "occurrences": 42,
        "totalLinkStrength": 455,
        "highlight": false,
        "size": 12.8
      },
      {
        "id": "bit error rate",
        "label": "bit error rate",
        "cluster": 5,
        "x": 476.76,
        "y": 734.31,
        "occurrences": 40,
        "totalLinkStrength": 426,
        "highlight": false,
        "size": 12.64
      },
      {
        "id": "non-orthogonal",
        "label": "non-orthogonal",
        "cluster": 2,
        "x": 227.4,
        "y": 642.08,
        "occurrences": 40,
        "totalLinkStrength": 473,
        "highlight": false,
        "size": 12.64
      },
      {
        "id": "decision making",
        "label": "decision making",
        "cluster": 2,
        "x": 417.56,
        "y": 70.58,
        "occurrences": 40,
        "totalLinkStrength": 435,
        "highlight": false,
        "size": 12.64
      },
      {
        "id": "energy utilization",
        "label": "energy utilization",
        "cluster": 2,
        "x": 65.3,
        "y": 295.3,
        "occurrences": 39,
        "totalLinkStrength": 434,
        "highlight": false,
        "size": 12.56
      },
      {
        "id": "quality-of-service",
        "label": "quality-of-service",
        "cluster": 3,
        "x": 690.87,
        "y": 60.0,
        "occurrences": 39,
        "totalLinkStrength": 461,
        "highlight": false,
        "size": 12.56
      },
      {
        "id": "beam forming networks",
        "label": "beam forming networks",
        "cluster": 2,
        "x": 87.34,
        "y": 555.79,
        "occurrences": 37,
        "totalLinkStrength": 419,
        "highlight": false,
        "size": 12.39
      },
      {
        "id": "signal receivers",
        "label": "signal receivers",
        "cluster": 5,
        "x": 615.76,
        "y": 740.0,
        "occurrences": 37,
        "totalLinkStrength": 417,
        "highlight": false,
        "size": 12.39
      },
      {
        "id": "global connectivity",
        "label": "global connectivity",
        "cluster": 2,
        "x": 936.59,
        "y": 121.74,
        "occurrences": 37,
        "totalLinkStrength": 376,
        "highlight": false,
        "size": 12.39
      },
      {
        "id": "spectrum sharing",
        "label": "spectrum sharing",
        "cluster": 2,
        "x": 553.11,
        "y": 71.77,
        "occurrences": 36,
        "totalLinkStrength": 404,
        "highlight": false,
        "size": 12.3
      },
      {
        "id": "antenna grounds",
        "label": "antenna grounds",
        "cluster": 5,
        "x": 135.38,
        "y": 614.68,
        "occurrences": 35,
        "totalLinkStrength": 397,
        "highlight": false,
        "size": 12.21
      },
      {
        "id": "routings",
        "label": "routings",
        "cluster": 2,
        "x": 1140.0,
        "y": 400.39,
        "occurrences": 35,
        "totalLinkStrength": 385,
        "highlight": false,
        "size": 12.21
      },
      {
        "id": "communications systems",
        "label": "communications systems",
        "cluster": 2,
        "x": 1090.38,
        "y": 222.86,
        "occurrences": 35,
        "totalLinkStrength": 354,
        "highlight": false,
        "size": 12.21
      },
      {
        "id": "radio links",
        "label": "radio links",
        "cluster": 2,
        "x": 960.7,
        "y": 663.35,
        "occurrences": 35,
        "totalLinkStrength": 380,
        "highlight": false,
        "size": 12.21
      },
      {
        "id": "distributed computer systems",
        "label": "distributed computer systems",
        "cluster": 2,
        "x": 79.57,
        "y": 197.75,
        "occurrences": 34,
        "totalLinkStrength": 358,
        "highlight": false,
        "size": 12.12
      }
    ],
    "links": [
      {
        "source": "non terrestrial network",
        "target": "terrestrial network",
        "strength": 1935
      },
      {
        "source": "NTN",
        "target": "terrestrial network",
        "strength": 1332
      },
      {
        "source": "NTN",
        "target": "non terrestrial network",
        "strength": 1325
      },
      {
        "source": "satellite",
        "target": "terrestrial network",
        "strength": 1321
      },
      {
        "source": "non terrestrial network",
        "target": "satellite",
        "strength": 1297
      },
      {
        "source": "NTN",
        "target": "satellite",
        "strength": 944
      },
      {
        "source": "6G",
        "target": "terrestrial network",
        "strength": 808
      },
      {
        "source": "6G",
        "target": "non terrestrial network",
        "strength": 799
      },
      {
        "source": "5G NR",
        "target": "terrestrial network",
        "strength": 794
      },
      {
        "source": "5G NR",
        "target": "non terrestrial network",
        "strength": 776
      },
      {
        "source": "LEO",
        "target": "terrestrial network",
        "strength": 703
      },
      {
        "source": "LEO",
        "target": "satellite",
        "strength": 699
      },
      {
        "source": "LEO",
        "target": "non terrestrial network",
        "strength": 693
      },
      {
        "source": "coverage",
        "target": "terrestrial network",
        "strength": 642
      },
      {
        "source": "coverage",
        "target": "non terrestrial network",
        "strength": 638
      },
      {
        "source": "5G NR",
        "target": "satellite",
        "strength": 614
      },
      {
        "source": "5G NR",
        "target": "NTN",
        "strength": 588
      },
      {
        "source": "6G",
        "target": "NTN",
        "strength": 569
      },
      {
        "source": "delay",
        "target": "terrestrial network",
        "strength": 567
      },
      {
        "source": "delay",
        "target": "non terrestrial network",
        "strength": 562
      },
      {
        "source": "orbits",
        "target": "satellite",
        "strength": 550
      },
      {
        "source": "orbits",
        "target": "terrestrial network",
        "strength": 549
      },
      {
        "source": "non terrestrial network",
        "target": "orbits",
        "strength": 544
      },
      {
        "source": "6G",
        "target": "satellite",
        "strength": 509
      },
      {
        "source": "LEO",
        "target": "NTN",
        "strength": 504
      },
      {
        "source": "channel",
        "target": "terrestrial network",
        "strength": 502
      },
      {
        "source": "channel",
        "target": "non terrestrial network",
        "strength": 497
      },
      {
        "source": "LEO",
        "target": "orbits",
        "strength": 494
      },
      {
        "source": "NTN",
        "target": "coverage",
        "strength": 490
      },
      {
        "source": "network architecture",
        "target": "terrestrial network",
        "strength": 490
      },
      {
        "source": "resource",
        "target": "terrestrial network",
        "strength": 481
      },
      {
        "source": "network architecture",
        "target": "non terrestrial network",
        "strength": 481
      },
      {
        "source": "non terrestrial network",
        "target": "resource",
        "strength": 472
      },
      {
        "source": "coverage",
        "target": "satellite",
        "strength": 472
      },
      {
        "source": "delay",
        "target": "satellite",
        "strength": 425
      },
      {
        "source": "platform",
        "target": "terrestrial network",
        "strength": 425
      },
      {
        "source": "non terrestrial network",
        "target": "platform",
        "strength": 421
      },
      {
        "source": "NTN",
        "target": "delay",
        "strength": 415
      },
      {
        "source": "NTN",
        "target": "orbits",
        "strength": 401
      },
      {
        "source": "5G NR",
        "target": "6G",
        "strength": 360
      },
      {
        "source": "NTN",
        "target": "network architecture",
        "strength": 353
      },
      {
        "source": "UAV",
        "target": "terrestrial network",
        "strength": 341
      },
      {
        "source": "network architecture",
        "target": "satellite",
        "strength": 338
      },
      {
        "source": "channel",
        "target": "satellite",
        "strength": 337
      },
      {
        "source": "NTN",
        "target": "channel",
        "strength": 335
      },
      {
        "source": "UAV",
        "target": "non terrestrial network",
        "strength": 335
      },
      {
        "source": "NTN",
        "target": "resource",
        "strength": 333
      },
      {
        "source": "resource",
        "target": "satellite",
        "strength": 329
      },
      {
        "source": "constellation",
        "target": "satellite",
        "strength": 316
      },
      {
        "source": "constellation",
        "target": "terrestrial network",
        "strength": 316
      },
      {
        "source": "IoT",
        "target": "terrestrial network",
        "strength": 308
      },
      {
        "source": "constellation",
        "target": "non terrestrial network",
        "strength": 307
      },
      {
        "source": "IoT",
        "target": "non terrestrial network",
        "strength": 304
      },
      {
        "source": "6G",
        "target": "coverage",
        "strength": 302
      },
      {
        "source": "NTN",
        "target": "platform",
        "strength": 301
      },
      {
        "source": "5G NR",
        "target": "LEO",
        "strength": 291
      },
      {
        "source": "interference",
        "target": "terrestrial network",
        "strength": 281
      },
      {
        "source": "platform",
        "target": "satellite",
        "strength": 281
      },
      {
        "source": "interference",
        "target": "non terrestrial network",
        "strength": 276
      },
      {
        "source": "6G",
        "target": "network architecture",
        "strength": 274
      },
      {
        "source": "mobile telecommunication system",
        "target": "terrestrial network",
        "strength": 266
      },
      {
        "source": "mobility",
        "target": "terrestrial network",
        "strength": 264
      },
      {
        "source": "mobile telecommunication system",
        "target": "non terrestrial network",
        "strength": 263
      },
      {
        "source": "mobility",
        "target": "non terrestrial network",
        "strength": 261
      },
      {
        "source": "LEO",
        "target": "coverage",
        "strength": 261
      },
      {
        "source": "6G",
        "target": "LEO",
        "strength": 260
      },
      {
        "source": "5G NR",
        "target": "coverage",
        "strength": 260
      },
      {
        "source": "6G",
        "target": "delay",
        "strength": 254
      },
      {
        "source": "HAPS",
        "target": "terrestrial network",
        "strength": 254
      },
      {
        "source": "HAPS",
        "target": "non terrestrial network",
        "strength": 251
      },
      {
        "source": "5G NR",
        "target": "delay",
        "strength": 250
      },
      {
        "source": "antennas",
        "target": "terrestrial network",
        "strength": 246
      },
      {
        "source": "LEO",
        "target": "delay",
        "strength": 245
      },
      {
        "source": "antennas",
        "target": "non terrestrial network",
        "strength": 242
      },
      {
        "source": "HAPS",
        "target": "platform",
        "strength": 242
      },
      {
        "source": "LEO",
        "target": "constellation",
        "strength": 240
      },
      {
        "source": "5G NR",
        "target": "network architecture",
        "strength": 238
      },
      {
        "source": "5G NR",
        "target": "orbits",
        "strength": 235
      },
      {
        "source": "IoT",
        "target": "NTN",
        "strength": 226
      },
      {
        "source": "NTN",
        "target": "constellation",
        "strength": 223
      },
      {
        "source": "IoT",
        "target": "satellite",
        "strength": 221
      },
      {
        "source": "coverage",
        "target": "delay",
        "strength": 220
      },
      {
        "source": "6G",
        "target": "resource",
        "strength": 218
      },
      {
        "source": "machine learning",
        "target": "terrestrial network",
        "strength": 218
      },
      {
        "source": "machine learning",
        "target": "non terrestrial network",
        "strength": 214
      },
      {
        "source": "6G",
        "target": "platform",
        "strength": 213
      },
      {
        "source": "coverage",
        "target": "orbits",
        "strength": 206
      },
      {
        "source": "NTN",
        "target": "UAV",
        "strength": 205
      },
      {
        "source": "NTN",
        "target": "interference",
        "strength": 204
      },
      {
        "source": "NTN",
        "target": "mobility",
        "strength": 202
      },
      {
        "source": "6G",
        "target": "orbits",
        "strength": 200
      },
      {
        "source": "constellation",
        "target": "orbits",
        "strength": 199
      },
      {
        "source": "NTN",
        "target": "mobile telecommunication system",
        "strength": 195
      },
      {
        "source": "interference",
        "target": "satellite",
        "strength": 192
      },
      {
        "source": "mobility",
        "target": "satellite",
        "strength": 188
      },
      {
        "source": "6G",
        "target": "channel",
        "strength": 188
      },
      {
        "source": "security",
        "target": "terrestrial network",
        "strength": 187
      },
      {
        "source": "delay",
        "target": "orbits",
        "strength": 185
      },
      {
        "source": "non terrestrial network",
        "target": "security",
        "strength": 183
      },
      {
        "source": "mobile telecommunication system",
        "target": "satellite",
        "strength": 182
      },
      {
        "source": "coverage",
        "target": "platform",
        "strength": 178
      },
      {
        "source": "coverage",
        "target": "network architecture",
        "strength": 178
      },
      {
        "source": "HAPS",
        "target": "NTN",
        "strength": 177
      },
      {
        "source": "5G NR",
        "target": "channel",
        "strength": 177
      },
      {
        "source": "LEO",
        "target": "resource",
        "strength": 176
      },
      {
        "source": "reinforcement learning",
        "target": "terrestrial network",
        "strength": 176
      },
      {
        "source": "5G NR",
        "target": "platform",
        "strength": 176
      },
      {
        "source": "UAV",
        "target": "antennas",
        "strength": 175
      },
      {
        "source": "non terrestrial network",
        "target": "reinforcement learning",
        "strength": 174
      },
      {
        "source": "UAV",
        "target": "aerial vehicle",
        "strength": 173
      },
      {
        "source": "aerial vehicle",
        "target": "terrestrial network",
        "strength": 173
      },
      {
        "source": "QoS",
        "target": "terrestrial network",
        "strength": 172
      },
      {
        "source": "LEO",
        "target": "channel",
        "strength": 172
      },
      {
        "source": "coverage",
        "target": "resource",
        "strength": 171
      },
      {
        "source": "UAV",
        "target": "satellite",
        "strength": 170
      },
      {
        "source": "delay",
        "target": "resource",
        "strength": 170
      },
      {
        "source": "aerial vehicle",
        "target": "non terrestrial network",
        "strength": 168
      },
      {
        "source": "QoS",
        "target": "non terrestrial network",
        "strength": 165
      },
      {
        "source": "5G NR",
        "target": "resource",
        "strength": 162
      },
      {
        "source": "handover",
        "target": "terrestrial network",
        "strength": 161
      },
      {
        "source": "HAPS",
        "target": "satellite",
        "strength": 161
      },
      {
        "source": "handover",
        "target": "non terrestrial network",
        "strength": 160
      },
      {
        "source": "channel",
        "target": "delay",
        "strength": 157
      },
      {
        "source": "delay",
        "target": "network architecture",
        "strength": 157
      },
      {
        "source": "channel",
        "target": "coverage",
        "strength": 153
      },
      {
        "source": "LEO",
        "target": "network architecture",
        "strength": 151
      },
      {
        "source": "NTN",
        "target": "antennas",
        "strength": 150
      },
      {
        "source": "LEO",
        "target": "earth orbits",
        "strength": 149
      },
      {
        "source": "network architecture",
        "target": "platform",
        "strength": 146
      },
      {
        "source": "6G",
        "target": "UAV",
        "strength": 145
      },
      {
        "source": "earth orbits",
        "target": "terrestrial network",
        "strength": 145
      },
      {
        "source": "earth orbits",
        "target": "satellite",
        "strength": 144
      },
      {
        "source": "LEO",
        "target": "platform",
        "strength": 144
      },
      {
        "source": "earth orbits",
        "target": "non terrestrial network",
        "strength": 142
      },
      {
        "source": "channel",
        "target": "orbits",
        "strength": 137
      },
      {
        "source": "5G NR",
        "target": "IoT",
        "strength": 137
      },
      {
        "source": "beamforming",
        "target": "terrestrial network",
        "strength": 136
      },
      {
        "source": "NTN",
        "target": "machine learning",
        "strength": 136
      },
      {
        "source": "beamforming",
        "target": "non terrestrial network",
        "strength": 135
      },
      {
        "source": "handover",
        "target": "satellite",
        "strength": 134
      },
      {
        "source": "network architecture",
        "target": "resource",
        "strength": 134
      },
      {
        "source": "6G",
        "target": "HAPS",
        "strength": 132
      },
      {
        "source": "IoT",
        "target": "coverage",
        "strength": 130
      },
      {
        "source": "constellation",
        "target": "coverage",
        "strength": 130
      },
      {
        "source": "orbits",
        "target": "resource",
        "strength": 129
      },
      {
        "source": "energy efficiency",
        "target": "terrestrial network",
        "strength": 129
      },
      {
        "source": "energy efficiency",
        "target": "non terrestrial network",
        "strength": 128
      },
      {
        "source": "UAV",
        "target": "platform",
        "strength": 128
      },
      {
        "source": "6G",
        "target": "constellation",
        "strength": 127
      },
      {
        "source": "UAV",
        "target": "coverage",
        "strength": 127
      },
      {
        "source": "antennas",
        "target": "satellite",
        "strength": 127
      },
      {
        "source": "6G",
        "target": "IoT",
        "strength": 127
      },
      {
        "source": "5G NR",
        "target": "constellation",
        "strength": 126
      },
      {
        "source": "6G",
        "target": "mobile telecommunication system",
        "strength": 125
      },
      {
        "source": "Doppler shift",
        "target": "non terrestrial network",
        "strength": 124
      },
      {
        "source": "Doppler shift",
        "target": "terrestrial network",
        "strength": 124
      },
      {
        "source": "delay",
        "target": "platform",
        "strength": 123
      },
      {
        "source": "machine learning",
        "target": "satellite",
        "strength": 121
      },
      {
        "source": "network architecture",
        "target": "orbits",
        "strength": 121
      },
      {
        "source": "QoS",
        "target": "satellite",
        "strength": 119
      },
      {
        "source": "LEO",
        "target": "mobility",
        "strength": 119
      },
      {
        "source": "non terrestrial network",
        "target": "signal to noise ratio",
        "strength": 118
      },
      {
        "source": "signal to noise ratio",
        "target": "terrestrial network",
        "strength": 118
      },
      {
        "source": "6G",
        "target": "antennas",
        "strength": 118
      },
      {
        "source": "NTN",
        "target": "handover",
        "strength": 117
      },
      {
        "source": "earth orbits",
        "target": "orbits",
        "strength": 117
      },
      {
        "source": "orbits",
        "target": "platform",
        "strength": 117
      },
      {
        "source": "network layers",
        "target": "terrestrial network",
        "strength": 116
      },
      {
        "source": "NTN",
        "target": "QoS",
        "strength": 116
      },
      {
        "source": "6G",
        "target": "machine learning",
        "strength": 116
      },
      {
        "source": "NTN",
        "target": "reinforcement learning",
        "strength": 115
      },
      {
        "source": "UAV",
        "target": "channel",
        "strength": 114
      },
      {
        "source": "network layers",
        "target": "non terrestrial network",
        "strength": 114
      },
      {
        "source": "6G",
        "target": "interference",
        "strength": 114
      },
      {
        "source": "channel",
        "target": "interference",
        "strength": 114
      },
      {
        "source": "coverage",
        "target": "interference",
        "strength": 114
      },
      {
        "source": "terrestrial network",
        "target": "wireless networks",
        "strength": 113
      },
      {
        "source": "IoT",
        "target": "delay",
        "strength": 112
      },
      {
        "source": "reinforcement learning",
        "target": "satellite",
        "strength": 112
      },
      {
        "source": "IoT",
        "target": "LEO",
        "strength": 112
      },
      {
        "source": "LEO",
        "target": "mobile telecommunication system",
        "strength": 111
      },
      {
        "source": "6G",
        "target": "mobility",
        "strength": 111
      },
      {
        "source": "non terrestrial network",
        "target": "wireless networks",
        "strength": 111
      },
      {
        "source": "constellation",
        "target": "delay",
        "strength": 111
      },
      {
        "source": "channel",
        "target": "resource",
        "strength": 110
      },
      {
        "source": "NTN",
        "target": "security",
        "strength": 108
      },
      {
        "source": "channel",
        "target": "platform",
        "strength": 108
      },
      {
        "source": "5G NR",
        "target": "mobility",
        "strength": 107
      },
      {
        "source": "satellite",
        "target": "security",
        "strength": 107
      },
      {
        "source": "HAPS",
        "target": "coverage",
        "strength": 107
      },
      {
        "source": "UAV",
        "target": "delay",
        "strength": 106
      },
      {
        "source": "NTN",
        "target": "aerial vehicle",
        "strength": 106
      },
      {
        "source": "Doppler shift",
        "target": "satellite",
        "strength": 106
      },
      {
        "source": "coverage",
        "target": "mobility",
        "strength": 105
      },
      {
        "source": "reinforcement learnings",
        "target": "terrestrial network",
        "strength": 105
      },
      {
        "source": "LEO",
        "target": "handover",
        "strength": 105
      },
      {
        "source": "backhaul",
        "target": "terrestrial network",
        "strength": 104
      },
      {
        "source": "LEO",
        "target": "interference",
        "strength": 104
      },
      {
        "source": "non terrestrial network",
        "target": "reinforcement learnings",
        "strength": 104
      },
      {
        "source": "platform",
        "target": "resource",
        "strength": 104
      },
      {
        "source": "Doppler shift",
        "target": "NTN",
        "strength": 104
      },
      {
        "source": "antennas",
        "target": "platform",
        "strength": 104
      },
      {
        "source": "6G",
        "target": "security",
        "strength": 103
      },
      {
        "source": "mobile telecommunication system",
        "target": "orbits",
        "strength": 103
      },
      {
        "source": "aerial vehicle",
        "target": "antennas",
        "strength": 103
      },
      {
        "source": "NTN",
        "target": "earth orbits",
        "strength": 103
      },
      {
        "source": "reinforcement learning",
        "target": "reinforcement learnings",
        "strength": 102
      },
      {
        "source": "backhaul",
        "target": "non terrestrial network",
        "strength": 101
      },
      {
        "source": "machine learning",
        "target": "reinforcement learning",
        "strength": 100
      },
      {
        "source": "coverage",
        "target": "mobile telecommunication system",
        "strength": 100
      },
      {
        "source": "IoT",
        "target": "network architecture",
        "strength": 99
      },
      {
        "source": "mobility",
        "target": "orbits",
        "strength": 99
      },
      {
        "source": "HAPS",
        "target": "UAV",
        "strength": 99
      },
      {
        "source": "channel",
        "target": "network architecture",
        "strength": 98
      },
      {
        "source": "constellation",
        "target": "network architecture",
        "strength": 98
      },
      {
        "source": "machine learning",
        "target": "resource",
        "strength": 95
      },
      {
        "source": "delay",
        "target": "mobile telecommunication system",
        "strength": 94
      },
      {
        "source": "reinforcement learning",
        "target": "resource",
        "strength": 93
      },
      {
        "source": "non terrestrial network",
        "target": "synchronization",
        "strength": 92
      },
      {
        "source": "synchronization",
        "target": "terrestrial network",
        "strength": 92
      },
      {
        "source": "5G NR",
        "target": "HAPS",
        "strength": 92
      },
      {
        "source": "5G NR",
        "target": "UAV",
        "strength": 92
      },
      {
        "source": "satellite",
        "target": "signal to noise ratio",
        "strength": 91
      },
      {
        "source": "interference",
        "target": "resource",
        "strength": 91
      },
      {
        "source": "UAV",
        "target": "resource",
        "strength": 91
      },
      {
        "source": "edge computing",
        "target": "terrestrial network",
        "strength": 91
      },
      {
        "source": "5G NR",
        "target": "mobile telecommunication system",
        "strength": 89
      },
      {
        "source": "edge computing",
        "target": "non terrestrial network",
        "strength": 88
      },
      {
        "source": "NTN",
        "target": "beamforming",
        "strength": 87
      },
      {
        "source": "IoT",
        "target": "orbits",
        "strength": 87
      },
      {
        "source": "antennas",
        "target": "coverage",
        "strength": 87
      },
      {
        "source": "outage probability",
        "target": "terrestrial network",
        "strength": 86
      },
      {
        "source": "non terrestrial network",
        "target": "optical communication",
        "strength": 85
      },
      {
        "source": "optical communication",
        "target": "terrestrial network",
        "strength": 85
      },
      {
        "source": "beamforming",
        "target": "satellite",
        "strength": 85
      },
      {
        "source": "non terrestrial network",
        "target": "outage probability",
        "strength": 84
      },
      {
        "source": "NTN",
        "target": "synchronization",
        "strength": 84
      },
      {
        "source": "delay",
        "target": "mobility",
        "strength": 84
      },
      {
        "source": "mobile telecommunication system",
        "target": "network architecture",
        "strength": 84
      },
      {
        "source": "5G NR",
        "target": "interference",
        "strength": 84
      },
      {
        "source": "NTN",
        "target": "energy efficiency",
        "strength": 84
      },
      {
        "source": "NTN",
        "target": "signal to noise ratio",
        "strength": 82
      },
      {
        "source": "IoT",
        "target": "resource",
        "strength": 82
      },
      {
        "source": "HAPS",
        "target": "LEO",
        "strength": 82
      },
      {
        "source": "HAPS",
        "target": "network architecture",
        "strength": 82
      },
      {
        "source": "handover",
        "target": "mobility",
        "strength": 81
      },
      {
        "source": "satellite",
        "target": "synchronization",
        "strength": 81
      },
      {
        "source": "network layers",
        "target": "satellite",
        "strength": 81
      },
      {
        "source": "interference",
        "target": "orbits",
        "strength": 81
      },
      {
        "source": "Doppler shift",
        "target": "LEO",
        "strength": 80
      },
      {
        "source": "IoT",
        "target": "NB-IoT",
        "strength": 80
      },
      {
        "source": "mobile communications",
        "target": "terrestrial network",
        "strength": 80
      },
      {
        "source": "5G NR",
        "target": "antennas",
        "strength": 80
      },
      {
        "source": "mobile communications",
        "target": "non terrestrial network",
        "strength": 79
      },
      {
        "source": "6G",
        "target": "reinforcement learning",
        "strength": 77
      },
      {
        "source": "6G",
        "target": "wireless networks",
        "strength": 77
      },
      {
        "source": "QoS",
        "target": "resource",
        "strength": 77
      },
      {
        "source": "HAPS",
        "target": "delay",
        "strength": 77
      },
      {
        "source": "NB-IoT",
        "target": "non terrestrial network",
        "strength": 77
      },
      {
        "source": "NB-IoT",
        "target": "terrestrial network",
        "strength": 77
      },
      {
        "source": "constellation",
        "target": "resource",
        "strength": 76
      },
      {
        "source": "integrated networks",
        "target": "non terrestrial network",
        "strength": 76
      },
      {
        "source": "integrated networks",
        "target": "terrestrial network",
        "strength": 76
      },
      {
        "source": "queueing networks",
        "target": "terrestrial network",
        "strength": 76
      },
      {
        "source": "non terrestrial network",
        "target": "reconfigurable",
        "strength": 75
      },
      {
        "source": "reconfigurable",
        "target": "terrestrial network",
        "strength": 75
      },
      {
        "source": "5G NR",
        "target": "QoS",
        "strength": 75
      },
      {
        "source": "NTN",
        "target": "network layers",
        "strength": 74
      },
      {
        "source": "5G NR",
        "target": "handover",
        "strength": 74
      },
      {
        "source": "IoT",
        "target": "channel",
        "strength": 74
      },
      {
        "source": "NTN",
        "target": "reinforcement learnings",
        "strength": 74
      },
      {
        "source": "6G",
        "target": "QoS",
        "strength": 74
      },
      {
        "source": "6G",
        "target": "aerial vehicle",
        "strength": 74
      },
      {
        "source": "antennas",
        "target": "channel",
        "strength": 74
      },
      {
        "source": "UAV",
        "target": "network architecture",
        "strength": 74
      },
      {
        "source": "channel",
        "target": "mobile telecommunication system",
        "strength": 73
      },
      {
        "source": "delay",
        "target": "machine learning",
        "strength": 73
      },
      {
        "source": "non terrestrial network",
        "target": "user equipments",
        "strength": 73
      },
      {
        "source": "terrestrial network",
        "target": "user equipments",
        "strength": 73
      },
      {
        "source": "LEO",
        "target": "UAV",
        "strength": 73
      },
      {
        "source": "non terrestrial network",
        "target": "queueing networks",
        "strength": 73
      },
      {
        "source": "delay",
        "target": "reinforcement learning",
        "strength": 72
      },
      {
        "source": "antennas",
        "target": "delay",
        "strength": 72
      },
      {
        "source": "5G NR",
        "target": "Doppler shift",
        "strength": 72
      },
      {
        "source": "5G NR",
        "target": "queueing networks",
        "strength": 72
      },
      {
        "source": "coverage",
        "target": "machine learning",
        "strength": 71
      },
      {
        "source": "NTN",
        "target": "wireless networks",
        "strength": 71
      },
      {
        "source": "LEO",
        "target": "reinforcement learning",
        "strength": 71
      },
      {
        "source": "HAPS",
        "target": "channel",
        "strength": 71
      },
      {
        "source": "mobile telecommunication system",
        "target": "resource",
        "strength": 71
      },
      {
        "source": "handover",
        "target": "orbits",
        "strength": 71
      },
      {
        "source": "channel",
        "target": "mobility",
        "strength": 70
      },
      {
        "source": "HAPS",
        "target": "resource",
        "strength": 70
      },
      {
        "source": "non terrestrial network",
        "target": "radio access networks",
        "strength": 70
      },
      {
        "source": "radio access networks",
        "target": "terrestrial network",
        "strength": 70
      },
      {
        "source": "HAPS",
        "target": "antennas",
        "strength": 70
      },
      {
        "source": "delay",
        "target": "interference",
        "strength": 69
      },
      {
        "source": "machine learning",
        "target": "reinforcement learnings",
        "strength": 68
      },
      {
        "source": "reinforcement learnings",
        "target": "satellite",
        "strength": 68
      },
      {
        "source": "Doppler shift",
        "target": "channel",
        "strength": 68
      },
      {
        "source": "QoS",
        "target": "coverage",
        "strength": 68
      },
      {
        "source": "6G",
        "target": "energy efficiency",
        "strength": 68
      },
      {
        "source": "integrated networks",
        "target": "satellite",
        "strength": 68
      },
      {
        "source": "energy efficiency",
        "target": "satellite",
        "strength": 67
      },
      {
        "source": "gateway",
        "target": "terrestrial network",
        "strength": 67
      },
      {
        "source": "NB-IoT",
        "target": "satellite",
        "strength": 67
      },
      {
        "source": "backhaul",
        "target": "satellite",
        "strength": 66
      },
      {
        "source": "UAV",
        "target": "machine learning",
        "strength": 66
      },
      {
        "source": "NB-IoT",
        "target": "NTN",
        "strength": 66
      },
      {
        "source": "NTN",
        "target": "backhaul",
        "strength": 65
      },
      {
        "source": "delay",
        "target": "security",
        "strength": 65
      },
      {
        "source": "mobility",
        "target": "resource",
        "strength": 65
      },
      {
        "source": "gateway",
        "target": "non terrestrial network",
        "strength": 65
      },
      {
        "source": "Doppler shift",
        "target": "orbits",
        "strength": 65
      },
      {
        "source": "constellation",
        "target": "platform",
        "strength": 65
      },
      {
        "source": "antennas",
        "target": "network architecture",
        "strength": 65
      },
      {
        "source": "UAV",
        "target": "reinforcement learning",
        "strength": 64
      },
      {
        "source": "6G",
        "target": "earth orbits",
        "strength": 64
      },
      {
        "source": "aerial vehicle",
        "target": "platform",
        "strength": 64
      },
      {
        "source": "aerial vehicle",
        "target": "coverage",
        "strength": 63
      },
      {
        "source": "antennas",
        "target": "resource",
        "strength": 63
      },
      {
        "source": "constellation",
        "target": "earth orbits",
        "strength": 63
      },
      {
        "source": "edge computing",
        "target": "satellite",
        "strength": 63
      },
      {
        "source": "5G NR",
        "target": "security",
        "strength": 63
      },
      {
        "source": "channel",
        "target": "signal to noise ratio",
        "strength": 62
      },
      {
        "source": "QoS",
        "target": "delay",
        "strength": 62
      },
      {
        "source": "interference",
        "target": "platform",
        "strength": 62
      },
      {
        "source": "aircraft communication",
        "target": "terrestrial network",
        "strength": 62
      },
      {
        "source": "LEO",
        "target": "machine learning",
        "strength": 62
      },
      {
        "source": "Doppler shift",
        "target": "delay",
        "strength": 62
      },
      {
        "source": "5G NR",
        "target": "machine learning",
        "strength": 62
      },
      {
        "source": "spectrum efficiency",
        "target": "terrestrial network",
        "strength": 62
      },
      {
        "source": "HAPS",
        "target": "orbits",
        "strength": 62
      },
      {
        "source": "next generation networks",
        "target": "terrestrial network",
        "strength": 61
      },
      {
        "source": "mobility",
        "target": "network architecture",
        "strength": 61
      },
      {
        "source": "coverage",
        "target": "handover",
        "strength": 61
      },
      {
        "source": "5G NR",
        "target": "wireless networks",
        "strength": 61
      },
      {
        "source": "non terrestrial network",
        "target": "spectrum efficiency",
        "strength": 61
      },
      {
        "source": "IoT",
        "target": "platform",
        "strength": 61
      },
      {
        "source": "UAV",
        "target": "mobility",
        "strength": 60
      },
      {
        "source": "aircraft communication",
        "target": "non terrestrial network",
        "strength": 60
      },
      {
        "source": "LEO",
        "target": "QoS",
        "strength": 60
      },
      {
        "source": "next generation networks",
        "target": "non terrestrial network",
        "strength": 60
      },
      {
        "source": "6G",
        "target": "handover",
        "strength": 60
      },
      {
        "source": "5G NR",
        "target": "mobile communications",
        "strength": 60
      },
      {
        "source": "aerial vehicle",
        "target": "channel",
        "strength": 59
      },
      {
        "source": "aerial vehicle",
        "target": "satellite",
        "strength": 59
      },
      {
        "source": "channel",
        "target": "machine learning",
        "strength": 59
      },
      {
        "source": "mobile telecommunication system",
        "target": "platform",
        "strength": 58
      },
      {
        "source": "6G",
        "target": "beamforming",
        "strength": 58
      },
      {
        "source": "IoT",
        "target": "UAV",
        "strength": 58
      },
      {
        "source": "outage probability",
        "target": "satellite",
        "strength": 58
      },
      {
        "source": "antennas",
        "target": "orbits",
        "strength": 58
      },
      {
        "source": "mobility",
        "target": "platform",
        "strength": 58
      },
      {
        "source": "5G NR",
        "target": "earth orbits",
        "strength": 58
      },
      {
        "source": "budget control",
        "target": "non terrestrial network",
        "strength": 57
      },
      {
        "source": "budget control",
        "target": "terrestrial network",
        "strength": 57
      },
      {
        "source": "coverage",
        "target": "reinforcement learning",
        "strength": 57
      },
      {
        "source": "IoT",
        "target": "mobile telecommunication system",
        "strength": 57
      },
      {
        "source": "satellite",
        "target": "user equipments",
        "strength": 57
      },
      {
        "source": "LEO",
        "target": "antennas",
        "strength": 57
      },
      {
        "source": "NTN",
        "target": "radio access networks",
        "strength": 57
      },
      {
        "source": "NTN",
        "target": "user equipments",
        "strength": 57
      },
      {
        "source": "mobile communications",
        "target": "satellite",
        "strength": 57
      },
      {
        "source": "LEO",
        "target": "signal to noise ratio",
        "strength": 56
      },
      {
        "source": "optical communication",
        "target": "satellite",
        "strength": 56
      },
      {
        "source": "network architecture",
        "target": "security",
        "strength": 56
      },
      {
        "source": "economic and social effects",
        "target": "non terrestrial network",
        "strength": 55
      },
      {
        "source": "economic and social effects",
        "target": "terrestrial network",
        "strength": 55
      },
      {
        "source": "base stations",
        "target": "terrestrial network",
        "strength": 55
      },
      {
        "source": "5G NR",
        "target": "network layers",
        "strength": 55
      },
      {
        "source": "machine-learning",
        "target": "non terrestrial network",
        "strength": 55
      },
      {
        "source": "machine-learning",
        "target": "terrestrial network",
        "strength": 55
      },
      {
        "source": "NTN",
        "target": "edge computing",
        "strength": 55
      },
      {
        "source": "delay",
        "target": "edge computing",
        "strength": 55
      },
      {
        "source": "frequency allocation",
        "target": "non terrestrial network",
        "strength": 54
      },
      {
        "source": "frequency allocation",
        "target": "terrestrial network",
        "strength": 54
      },
      {
        "source": "base stations",
        "target": "non terrestrial network",
        "strength": 54
      },
      {
        "source": "constellation",
        "target": "mobility",
        "strength": 54
      },
      {
        "source": "non terrestrial network",
        "target": "wireless communications",
        "strength": 54
      },
      {
        "source": "terrestrial network",
        "target": "wireless communications",
        "strength": 54
      },
      {
        "source": "queueing networks",
        "target": "satellite",
        "strength": 54
      },
      {
        "source": "LEO",
        "target": "beamforming",
        "strength": 53
      },
      {
        "source": "reinforcement learnings",
        "target": "resource",
        "strength": 53
      },
      {
        "source": "edge computing",
        "target": "resource",
        "strength": 53
      },
      {
        "source": "machine learning",
        "target": "orbits",
        "strength": 53
      },
      {
        "source": "narrow bands",
        "target": "non terrestrial network",
        "strength": 53
      },
      {
        "source": "narrow bands",
        "target": "terrestrial network",
        "strength": 53
      },
      {
        "source": "delay",
        "target": "handover",
        "strength": 53
      },
      {
        "source": "IoT",
        "target": "constellation",
        "strength": 53
      },
      {
        "source": "3gpp",
        "target": "terrestrial network",
        "strength": 53
      },
      {
        "source": "QoS",
        "target": "network architecture",
        "strength": 53
      },
      {
        "source": "satellite",
        "target": "wireless networks",
        "strength": 53
      },
      {
        "source": "NTN",
        "target": "mobile communications",
        "strength": 53
      },
      {
        "source": "5G NR",
        "target": "backhaul",
        "strength": 53
      },
      {
        "source": "NTN",
        "target": "queueing networks",
        "strength": 53
      },
      {
        "source": "non terrestrial network",
        "target": "optimisations",
        "strength": 52
      },
      {
        "source": "optimisations",
        "target": "terrestrial network",
        "strength": 52
      },
      {
        "source": "5G NR",
        "target": "synchronization",
        "strength": 52
      },
      {
        "source": "channel",
        "target": "constellation",
        "strength": 52
      },
      {
        "source": "beamforming",
        "target": "channel",
        "strength": 52
      },
      {
        "source": "budget control",
        "target": "satellite",
        "strength": 52
      },
      {
        "source": "UAV",
        "target": "interference",
        "strength": 52
      },
      {
        "source": "constellation",
        "target": "mobile telecommunication system",
        "strength": 52
      },
      {
        "source": "gateway",
        "target": "satellite",
        "strength": 52
      },
      {
        "source": "global positioning system",
        "target": "non terrestrial network",
        "strength": 52
      },
      {
        "source": "global positioning system",
        "target": "satellite",
        "strength": 52
      },
      {
        "source": "global positioning system",
        "target": "terrestrial network",
        "strength": 52
      },
      {
        "source": "millimeter waves",
        "target": "terrestrial network",
        "strength": 52
      },
      {
        "source": "NTN",
        "target": "optical communication",
        "strength": 51
      },
      {
        "source": "coverage",
        "target": "security",
        "strength": 51
      },
      {
        "source": "multiple access",
        "target": "terrestrial network",
        "strength": 51
      },
      {
        "source": "orbits",
        "target": "reinforcement learning",
        "strength": 51
      },
      {
        "source": "delay",
        "target": "earth orbits",
        "strength": 51
      },
      {
        "source": "millimeter waves",
        "target": "non terrestrial network",
        "strength": 51
      },
      {
        "source": "3gpp",
        "target": "non terrestrial network",
        "strength": 51
      },
      {
        "source": "machine learning",
        "target": "network architecture",
        "strength": 51
      },
      {
        "source": "channel",
        "target": "security",
        "strength": 50
      },
      {
        "source": "NTN",
        "target": "reconfigurable",
        "strength": 50
      },
      {
        "source": "multiple access",
        "target": "non terrestrial network",
        "strength": 50
      },
      {
        "source": "bandwidth",
        "target": "non terrestrial network",
        "strength": 50
      },
      {
        "source": "bandwidth",
        "target": "terrestrial network",
        "strength": 50
      },
      {
        "source": "5G NR",
        "target": "radio access networks",
        "strength": 50
      },
      {
        "source": "IoT",
        "target": "narrow bands",
        "strength": 50
      },
      {
        "source": "3rd generation",
        "target": "non terrestrial network",
        "strength": 50
      },
      {
        "source": "3rd generation",
        "target": "terrestrial network",
        "strength": 50
      },
      {
        "source": "6G",
        "target": "mobile communications",
        "strength": 50
      },
      {
        "source": "mimo systems",
        "target": "terrestrial network",
        "strength": 50
      },
      {
        "source": "interference",
        "target": "mobile telecommunication system",
        "strength": 49
      },
      {
        "source": "UAV",
        "target": "aircraft communication",
        "strength": 49
      },
      {
        "source": "6G",
        "target": "reinforcement learnings",
        "strength": 49
      },
      {
        "source": "LEO",
        "target": "reinforcement learnings",
        "strength": 49
      },
      {
        "source": "6G",
        "target": "edge computing",
        "strength": 49
      },
      {
        "source": "NTN",
        "target": "gateway",
        "strength": 49
      },
      {
        "source": "4g mobile communication system",
        "target": "terrestrial network",
        "strength": 49
      },
      {
        "source": "HAPS",
        "target": "interference",
        "strength": 49
      },
      {
        "source": "non terrestrial network",
        "target": "random access",
        "strength": 49
      },
      {
        "source": "random access",
        "target": "terrestrial network",
        "strength": 49
      },
      {
        "source": "resource",
        "target": "security",
        "strength": 48
      },
      {
        "source": "6G",
        "target": "network layers",
        "strength": 48
      },
      {
        "source": "channel",
        "target": "reinforcement learning",
        "strength": 48
      },
      {
        "source": "machine learning",
        "target": "platform",
        "strength": 48
      },
      {
        "source": "coverage",
        "target": "energy efficiency",
        "strength": 48
      },
      {
        "source": "UAV",
        "target": "orbits",
        "strength": 48
      },
      {
        "source": "NTN",
        "target": "global positioning system",
        "strength": 48
      },
      {
        "source": "non terrestrial network",
        "target": "radio communication",
        "strength": 48
      },
      {
        "source": "radio communication",
        "target": "terrestrial network",
        "strength": 48
      },
      {
        "source": "4g mobile communication system",
        "target": "non terrestrial network",
        "strength": 48
      },
      {
        "source": "LEO",
        "target": "synchronization",
        "strength": 48
      },
      {
        "source": "coverage",
        "target": "wireless networks",
        "strength": 48
      },
      {
        "source": "NTN",
        "target": "integrated networks",
        "strength": 48
      },
      {
        "source": "non terrestrial network",
        "target": "radio broadcasting",
        "strength": 47
      },
      {
        "source": "radio broadcasting",
        "target": "terrestrial network",
        "strength": 47
      },
      {
        "source": "NTN",
        "target": "frequency allocation",
        "strength": 47
      },
      {
        "source": "aerial vehicle",
        "target": "delay",
        "strength": 47
      },
      {
        "source": "non terrestrial network",
        "target": "reconfigurable intelligent surface",
        "strength": 47
      },
      {
        "source": "reconfigurable",
        "target": "reconfigurable intelligent surface",
        "strength": 47
      },
      {
        "source": "reconfigurable intelligent surface",
        "target": "terrestrial network",
        "strength": 47
      },
      {
        "source": "earth (planet)",
        "target": "non terrestrial network",
        "strength": 47
      },
      {
        "source": "earth (planet)",
        "target": "terrestrial network",
        "strength": 47
      },
      {
        "source": "NTN",
        "target": "narrow bands",
        "strength": 47
      },
      {
        "source": "complex networks",
        "target": "non terrestrial network",
        "strength": 47
      },
      {
        "source": "complex networks",
        "target": "terrestrial network",
        "strength": 47
      },
      {
        "source": "machine learning",
        "target": "machine-learning",
        "strength": 47
      },
      {
        "source": "constellation",
        "target": "handover",
        "strength": 47
      },
      {
        "source": "HAPS",
        "target": "aerial vehicle",
        "strength": 47
      },
      {
        "source": "coverage",
        "target": "integrated networks",
        "strength": 47
      },
      {
        "source": "mimo systems",
        "target": "non terrestrial network",
        "strength": 47
      },
      {
        "source": "energy efficiency",
        "target": "network architecture",
        "strength": 46
      },
      {
        "source": "internet protocols",
        "target": "non terrestrial network",
        "strength": 46
      },
      {
        "source": "internet protocols",
        "target": "terrestrial network",
        "strength": 46
      },
      {
        "source": "UAV",
        "target": "energy efficiency",
        "strength": 46
      },
      {
        "source": "non terrestrial network",
        "target": "vehicle to vehicle communications",
        "strength": 46
      },
      {
        "source": "terrestrial network",
        "target": "vehicle to vehicle communications",
        "strength": 46
      },
      {
        "source": "6G",
        "target": "queueing networks",
        "strength": 46
      },
      {
        "source": "3rd generation",
        "target": "NTN",
        "strength": 46
      },
      {
        "source": "air grounds",
        "target": "non terrestrial network",
        "strength": 46
      },
      {
        "source": "air grounds",
        "target": "terrestrial network",
        "strength": 46
      },
      {
        "source": "beamforming",
        "target": "coverage",
        "strength": 45
      },
      {
        "source": "machine learning",
        "target": "mobility",
        "strength": 45
      },
      {
        "source": "earth (planet)",
        "target": "satellite",
        "strength": 45
      },
      {
        "source": "QoS",
        "target": "orbits",
        "strength": 45
      },
      {
        "source": "stochastic systems",
        "target": "terrestrial network",
        "strength": 45
      },
      {
        "source": "narrow bands",
        "target": "satellite",
        "strength": 45
      },
      {
        "source": "Doppler shift",
        "target": "coverage",
        "strength": 45
      },
      {
        "source": "3gpp",
        "target": "NTN",
        "strength": 45
      },
      {
        "source": "5G NR",
        "target": "energy efficiency",
        "strength": 45
      },
      {
        "source": "NTN",
        "target": "spectrum efficiency",
        "strength": 45
      },
      {
        "source": "NB-IoT",
        "target": "narrow bands",
        "strength": 45
      },
      {
        "source": "NTN",
        "target": "outage probability",
        "strength": 44
      },
      {
        "source": "beamforming",
        "target": "interference",
        "strength": 44
      },
      {
        "source": "NTN",
        "target": "budget control",
        "strength": 44
      },
      {
        "source": "UAV",
        "target": "security",
        "strength": 44
      },
      {
        "source": "frequency allocation",
        "target": "satellite",
        "strength": 44
      },
      {
        "source": "mobile telecommunication system",
        "target": "mobility",
        "strength": 44
      },
      {
        "source": "multi agent systems",
        "target": "non terrestrial network",
        "strength": 44
      },
      {
        "source": "multi agent systems",
        "target": "terrestrial network",
        "strength": 44
      },
      {
        "source": "network architecture",
        "target": "radio access networks",
        "strength": 44
      },
      {
        "source": "non terrestrial network",
        "target": "stochastic systems",
        "strength": 44
      },
      {
        "source": "coverage",
        "target": "earth orbits",
        "strength": 44
      },
      {
        "source": "orbits",
        "target": "signal to noise ratio",
        "strength": 44
      },
      {
        "source": "3gpp",
        "target": "5G NR",
        "strength": 44
      },
      {
        "source": "3rd generation",
        "target": "satellite",
        "strength": 44
      },
      {
        "source": "platform",
        "target": "security",
        "strength": 44
      },
      {
        "source": "backhaul",
        "target": "coverage",
        "strength": 44
      },
      {
        "source": "LEO",
        "target": "security",
        "strength": 43
      },
      {
        "source": "delay",
        "target": "energy efficiency",
        "strength": 43
      },
      {
        "source": "delay",
        "target": "synchronization",
        "strength": 43
      },
      {
        "source": "interference",
        "target": "network architecture",
        "strength": 43
      },
      {
        "source": "antennas",
        "target": "mobility",
        "strength": 42
      },
      {
        "source": "energy",
        "target": "non terrestrial network",
        "strength": 42
      },
      {
        "source": "energy",
        "target": "terrestrial network",
        "strength": 42
      },
      {
        "source": "internet protocols",
        "target": "satellite",
        "strength": 42
      },
      {
        "source": "IoT",
        "target": "antennas",
        "strength": 42
      },
      {
        "source": "5G NR",
        "target": "NB-IoT",
        "strength": 42
      },
      {
        "source": "channel",
        "target": "outage probability",
        "strength": 41
      },
      {
        "source": "interference",
        "target": "signal to noise ratio",
        "strength": 41
      },
      {
        "source": "aerial vehicle",
        "target": "machine learning",
        "strength": 41
      },
      {
        "source": "aerial vehicle",
        "target": "resource",
        "strength": 41
      },
      {
        "source": "antennas",
        "target": "interference",
        "strength": 41
      }
    ]
  },
  "references": [
    {
      "text": "[1] You X., Wang C.-X., Huang J., Gao X., Zhang Z., Wang M., Huang Y., Zhang C., Jiang Y., Wang J., Zhu M., Sheng B., Wang D., Pan Z., Zhu P., Yang Y., Liu Z., Zhang P., Tao X., Li S., Chen Z., Ma X., Chih-Lin I., Han S., Li K., Pan C., Zheng Z., Hanzo L., Shen X.S., Guo Y.J., Ding Z., Haas H., Tong W., Zhu P., Yang G., Wang J., Larsson E.G., Ngo H.Q., Hong W., Wang H., Hou D., Chen J., Chen Z., Hao Z., Li G.Y., Tafazolli R., Gao Y., Poor H.V., Fettweis G.P., Liang Y.-C., \"Towards 6G wireless communication networks: vision, enabling technologies, and new paradigm shifts,\" Science China Information Sciences, vol. 64, no. 1, Art. no. 110301, 2021, doi: 10.1007/s11432-020-2955-6.",
      "url": "https://doi.org/10.1007/s11432-020-2955-6",
      "label": "Abrir DOI"
    },
    {
      "text": "[2] Jiang W., Han B., Habibi M.A., Schotten H.D., \"The road towards 6G: A comprehensive survey,\" IEEE Open Journal of the Communications Society, vol. 2, pp. 334-366, 2021, doi: 10.1109/OJCOMS.2021.3057679.",
      "url": "https://doi.org/10.1109/OJCOMS.2021.3057679",
      "label": "Abrir DOI"
    },
    {
      "text": "[3] Kodheli O., Lagunas E., Maturo N., Sharma S.K., Shankar B., Montoya J.F.M., Duncan J.C.M., Spano D., Chatzinotas S., Kisseleff S., Querol J., Lei L., Vu T.X., Goussetis G., \"Satellite Communications in the New Space Era: A Survey and Future Challenges,\" IEEE Communications Surveys and Tutorials, vol. 23, no. 1, pp. 70-109, 2021, doi: 10.1109/COMST.2020.3028247.",
      "url": "https://doi.org/10.1109/COMST.2020.3028247",
      "label": "Abrir DOI"
    },
    {
      "text": "[4] Ghosh A., Maeder A., Baker M., Chandramouli D., \"5G Evolution: A View on 5G Cellular Technology beyond 3GPP Release 15,\" IEEE Access, vol. 7, pp. 127639-127651, 2019, doi: 10.1109/ACCESS.2019.2939938.",
      "url": "https://doi.org/10.1109/ACCESS.2019.2939938",
      "label": "Abrir DOI"
    },
    {
      "text": "[5] Giordani M., Zorzi M., \"Non-Terrestrial Networks in the 6G Era: Challenges and Opportunities,\" IEEE Network, vol. 35, no. 2, pp. 244-251, 2021, doi: 10.1109/MNET.011.2000493.",
      "url": "https://doi.org/10.1109/MNET.011.2000493",
      "label": "Abrir DOI"
    },
    {
      "text": "[6] Vaezi M., Azari A., Khosravirad S.R., Shirvanimoghaddam M., Azari M.M., Chasaki D., Popovski P., \"Cellular, Wide-Area, and Non-Terrestrial IoT: A Survey on 5G Advances and the Road Toward 6G,\" IEEE Communications Surveys and Tutorials, vol. 24, no. 2, pp. 1117-1174, 2022, doi: 10.1109/COMST.2022.3151028.",
      "url": "https://doi.org/10.1109/COMST.2022.3151028",
      "label": "Abrir DOI"
    },
    {
      "text": "[7] Azari M.M., Solanki S., Chatzinotas S., Kodheli O., Sallouha H., Colpaert A., Mendoza Montoya J.F., Pollin S., Haqiqatnejad A., Mostaani A., Lagunas E., Ottersten B., \"Evolution of Non-Terrestrial Networks from 5G to 6G: A Survey,\" IEEE Communications Surveys and Tutorials, vol. 24, no. 4, pp. 2633-2672, 2022, doi: 10.1109/COMST.2022.3199901.",
      "url": "https://doi.org/10.1109/COMST.2022.3199901",
      "label": "Abrir DOI"
    },
    {
      "text": "[8] Geraci G., Garcia-Rodriguez A., Azari M.M., Lozano A., Mezzavilla M., Chatzinotas S., Chen Y., Rangan S., Renzo M.D., \"What Will the Future of UAV Cellular Communications Be? A Flight from 5G to 6G,\" IEEE Communications Surveys and Tutorials, vol. 24, no. 3, pp. 1304-1335, 2022, doi: 10.1109/COMST.2022.3171135.",
      "url": "https://doi.org/10.1109/COMST.2022.3171135",
      "label": "Abrir DOI"
    },
    {
      "text": "[9] Rinaldi F., Määttänen H.-L., Torsner J., Pizzi S., Andreev S., Iera A., Koucheryavy Y., Araniti G., \"Non-terrestrial networks in 5G & beyond: A survey,\" IEEE Access, vol. 8, pp. 165178-165200, 2020, doi: 10.1109/ACCESS.2020.3022981.",
      "url": "https://doi.org/10.1109/ACCESS.2020.3022981",
      "label": "Abrir DOI"
    },
    {
      "text": "[10] 3GPP, \"Non-Terrestrial Networks (NTN),\" 3GPP Technologies, consultado en 2026.",
      "url": "https://www.3gpp.org/technologies/ntn-overview",
      "label": "Abrir 3GPP"
    },
    {
      "text": "[11] N. J. van Eck and L. Waltman, \"Software survey: VOSviewer, a computer program for bibliometric mapping,\" Scientometrics, vol. 84, no. 2, pp. 523-538, 2010, doi: 10.1007/s11192-009-0146-3.",
      "url": "https://doi.org/10.1007/s11192-009-0146-3",
      "label": "Abrir DOI"
    },
    {
      "text": "[12] R. Zamora Musa, \"Reto ABET Comunicaciones II (27145),\" guía de trabajo SO7, 2026.",
      "url": "assets/docs/reto-abet-so7.pdf",
      "label": "Abrir documento"
    },
    {
      "text": "[13] R. Zamora Musa, \"Anexo A: Análisis de sistemas de datos con VOSviewer,\" guía de laboratorio, 2025.",
      "url": "assets/docs/anexo-a-vosviewer.pdf",
      "label": "Abrir documento"
    },
    {
      "text": "[14] R. Zamora Musa, \"Anexo B: Presentación en Blog,\" guía BlogDPC, 2025.",
      "url": "assets/docs/anexo-b-blogdpc.pdf",
      "label": "Abrir documento"
    }
  ],
  "sourceArticles": [
    {
      "title": "Towards 6G wireless communication networks: vision, enabling technologies, and new paradigm shifts",
      "authors": "You X.; Wang C.-X.; Huang J.; Gao X.; Zhang Z.; Wang M.; Huang Y.; Zhang C.; Jiang Y.; Wang J.; Zhu M.; Sheng B.; Wang D.; Pan Z.; Zhu P.; Yang Y.; Liu Z.; Zhang P.; Tao X.; Li S.; Chen Z.; Ma X.; Chih-Lin I.; Han S.; Li K.; Pan C.; Zheng Z.; Hanzo L.; Shen X.S.; Guo Y.J.; Ding Z.; Haas H.; Tong W.; Zhu P.; Yang G.; Wang J.; Larsson E.G.; Ngo H.Q.; Hong W.; Wang H.; Hou D.; Chen J.; Chen Z.; Hao Z.; Li G.Y.; Tafazolli R.; Gao Y.; Poor H.V.; Fettweis G.P.; Liang Y.-C.",
      "year": "2021",
      "source": "Science China Information Sciences",
      "doi": "10.1007/s11432-020-2955-6",
      "citedBy": 1951,
      "type": "Review",
      "url": "https://doi.org/10.1007/s11432-020-2955-6"
    },
    {
      "title": "The road towards 6G: A comprehensive survey",
      "authors": "Jiang W.; Han B.; Habibi M.A.; Schotten H.D.",
      "year": "2021",
      "source": "IEEE Open Journal of the Communications Society",
      "doi": "10.1109/OJCOMS.2021.3057679",
      "citedBy": 1547,
      "type": "Review",
      "url": "https://doi.org/10.1109/OJCOMS.2021.3057679"
    },
    {
      "title": "Satellite Communications in the New Space Era: A Survey and Future Challenges",
      "authors": "Kodheli O.; Lagunas E.; Maturo N.; Sharma S.K.; Shankar B.; Montoya J.F.M.; Duncan J.C.M.; Spano D.; Chatzinotas S.; Kisseleff S.; Querol J.; Lei L.; Vu T.X.; Goussetis G.",
      "year": "2021",
      "source": "IEEE Communications Surveys and Tutorials",
      "doi": "10.1109/COMST.2020.3028247",
      "citedBy": 1202,
      "type": "Review",
      "url": "https://doi.org/10.1109/COMST.2020.3028247"
    },
    {
      "title": "5G Evolution: A View on 5G Cellular Technology beyond 3GPP Release 15",
      "authors": "Ghosh A.; Maeder A.; Baker M.; Chandramouli D.",
      "year": "2019",
      "source": "IEEE Access",
      "doi": "10.1109/ACCESS.2019.2939938",
      "citedBy": 780,
      "type": "Article",
      "url": "https://doi.org/10.1109/ACCESS.2019.2939938"
    },
    {
      "title": "Non-Terrestrial Networks in the 6G Era: Challenges and Opportunities",
      "authors": "Giordani M.; Zorzi M.",
      "year": "2021",
      "source": "IEEE Network",
      "doi": "10.1109/MNET.011.2000493",
      "citedBy": 603,
      "type": "Article",
      "url": "https://doi.org/10.1109/MNET.011.2000493"
    },
    {
      "title": "Cellular, Wide-Area, and Non-Terrestrial IoT: A Survey on 5G Advances and the Road Toward 6G",
      "authors": "Vaezi M.; Azari A.; Khosravirad S.R.; Shirvanimoghaddam M.; Azari M.M.; Chasaki D.; Popovski P.",
      "year": "2022",
      "source": "IEEE Communications Surveys and Tutorials",
      "doi": "10.1109/COMST.2022.3151028",
      "citedBy": 581,
      "type": "Article",
      "url": "https://doi.org/10.1109/COMST.2022.3151028"
    },
    {
      "title": "Evolution of Non-Terrestrial Networks from 5G to 6G: A Survey",
      "authors": "Azari M.M.; Solanki S.; Chatzinotas S.; Kodheli O.; Sallouha H.; Colpaert A.; Mendoza Montoya J.F.; Pollin S.; Haqiqatnejad A.; Mostaani A.; Lagunas E.; Ottersten B.",
      "year": "2022",
      "source": "IEEE Communications Surveys and Tutorials",
      "doi": "10.1109/COMST.2022.3199901",
      "citedBy": 547,
      "type": "Article",
      "url": "https://doi.org/10.1109/COMST.2022.3199901"
    },
    {
      "title": "What Will the Future of UAV Cellular Communications Be? A Flight from 5G to 6G",
      "authors": "Geraci G.; Garcia-Rodriguez A.; Azari M.M.; Lozano A.; Mezzavilla M.; Chatzinotas S.; Chen Y.; Rangan S.; Renzo M.D.",
      "year": "2022",
      "source": "IEEE Communications Surveys and Tutorials",
      "doi": "10.1109/COMST.2022.3171135",
      "citedBy": 443,
      "type": "Article",
      "url": "https://doi.org/10.1109/COMST.2022.3171135"
    }
  ],
  "glossary": {
    "NTN": "Redes no terrestres que integran satélites, HAPS o UAV con redes móviles para extender cobertura.",
    "LEO": "Órbita terrestre baja; reduce la distancia de propagación, pero aumenta la velocidad relativa y el Doppler.",
    "Doppler": "Desplazamiento de frecuencia causado por movimiento relativo entre satélite y terminal o gateway.",
    "Handover": "Cambio de celda, haz o satélite para mantener continuidad del servicio.",
    "QoS": "Calidad de servicio, asociada con retardo, disponibilidad, capacidad y confiabilidad.",
    "Link budget": "Balance de potencia que estima si la señal recibida supera el umbral requerido."
  },
  "assistant": {
    "quickQuestions": [
      "Hola",
      "¿Eres un asistente de IA?",
      "¿Qué es LEO y cuántas ocurrencias tiene?",
      "¿Qué conexiones tiene satellite?",
      "¿Cómo se publica en GitHub Pages?",
      "¿Cómo funcionan las referencias IEEE?",
      "Hazme un resumen del proyecto",
      "¿Cómo cambia el mini-caso si modifico variables?"
    ],
    "fallback": "No encontré una coincidencia directa dentro del proyecto. Aun así puedo orientarte de forma general y aclarar cuando algo no pertenece a la información analizada.",
    "knowledge": [
      {
        "tags": [
          "ntn",
          "non terrestrial",
          "red no terrestre",
          "qué es"
        ],
        "title": "Qué es NTN",
        "text": "NTN significa Non-Terrestrial Networks. En este proyecto se entiende como la integración de satélites LEO, HAPS y UAV con redes terrestres para ampliar cobertura, mejorar resiliencia y soportar servicios 5G-Advanced y 6G."
      },
      {
        "tags": [
          "mapa",
          "vosviewer",
          "clúster",
          "clusters",
          "bibliométrico"
        ],
        "title": "Mapa VOSviewer",
        "text": "El mapa muestra co-ocurrencias de términos en la literatura sobre NTN. Los nodos representan conceptos, el tamaño refleja ocurrencias, los enlaces muestran fuerza de asociación y los colores agrupan clústeres temáticos."
      },
      {
        "tags": [
          "leo",
          "satélite",
          "satellite",
          "constelación",
          "órbita"
        ],
        "title": "LEO y satélites",
        "text": "Los satélites LEO son importantes porque reducen el retardo respecto a órbitas altas, pero al moverse rápidamente generan retos de Doppler, handover y continuidad de cobertura."
      },
      {
        "tags": [
          "doppler",
          "frecuencia",
          "desplazamiento"
        ],
        "title": "Doppler",
        "text": "El Doppler es el desplazamiento de frecuencia causado por la velocidad relativa del satélite. En el mini-caso se estima con la velocidad orbital LEO y la frecuencia de operación."
      },
      {
        "tags": [
          "handover",
          "movilidad",
          "cambio"
        ],
        "title": "Handover",
        "text": "El handover en NTN ocurre cuando el usuario o gateway debe pasar de un haz, celda o satélite a otro. Es crítico para mantener continuidad de servicio en constelaciones LEO."
      },
      {
        "tags": [
          "metodología",
          "scopus",
          "cadena",
          "búsqueda"
        ],
        "title": "Metodología",
        "text": "La metodología siguió la cadena \"non-terrestrial networks\" OR NTN OR \"satellite 5G\", revisión científica, análisis de mapa de VOSviewer, depuración de términos, identificación de clústeres y conexión con un mini-caso técnico."
      },
      {
        "tags": [
          "mini-caso",
          "link budget",
          "presupuesto",
          "margen",
          "calculadora"
        ],
        "title": "Mini-caso técnico",
        "text": "El mini-caso calcula pérdida de espacio libre, potencia recibida, margen del enlace y Doppler para un enlace LEO hacia un gateway urbano. La decisión técnica depende de si el margen supera el umbral requerido."
      },
      {
        "tags": [
          "equipo",
          "integrantes",
          "códigos",
          "participaron"
        ],
        "title": "Equipo",
        "text": "El equipo está integrado por Marcos David Arrieta Barreto, Johan Sebastian Peña Castillo, Juan David Suarez Corzo y Juan Manuel Torres Melo, con roles de análisis bibliométrico, mini-caso, revisión académica e integración web."
      },
      {
        "tags": [
          "fuentes",
          "referencias",
          "ieee"
        ],
        "title": "Fuentes",
        "text": "Las fuentes consultadas incluyen artículos de Scopus sobre NTN, 5G/6G, redes satelitales, VOSviewer, y las guías del Reto ABET SO7, Anexo A y Anexo B."
      },
      {
        "tags": [
          "referencias",
          "ieee",
          "doi",
          "fuentes",
          "enlaces"
        ],
        "title": "Referencias con enlaces",
        "text": "La sección de fuentes usa formato IEEE y agrega enlaces directos: los artículos académicos abren con DOI, la referencia 3GPP abre en su página oficial y las guías del curso se abren como documentos locales del sitio."
      },
      {
        "tags": [
          "asistente",
          "ia",
          "local",
          "inteligencia artificial"
        ],
        "title": "Asistente IA local",
        "text": "El asistente está diseñado para funcionar sin backend ni claves privadas. Usa la información incluida en la página, términos del mapa y reglas de búsqueda para responder sobre el proyecto y orientar preguntas generales."
      },
      {
        "tags": [
          "universidad",
          "uis",
          "escuela",
          "facultad",
          "equipo"
        ],
        "title": "Identidad institucional",
        "text": "El trabajo fue desarrollado por estudiantes de Ingeniería Electrónica de la Universidad Industrial de Santander, vinculados a la Facultad de Ingenierías Físico-Mecánicas y la Escuela de Ingenierías Eléctrica, Electrónica y de Telecomunicaciones."
      }
    ]
  }
};
