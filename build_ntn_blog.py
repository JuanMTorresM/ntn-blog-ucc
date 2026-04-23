import os
import re
import json
import math
import itertools
from collections import Counter

import numpy as np
import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt
from networkx.algorithms.community import louvain_communities

BASE_DIR = "/mnt/data/ntn_blog_completo"
ASSETS_DIR = os.path.join(BASE_DIR, "assets")
WORDS_DIR = os.path.join(ASSETS_DIR, "words")
CHARTS_DIR = os.path.join(ASSETS_DIR, "charts")
os.makedirs(WORDS_DIR, exist_ok=True)
os.makedirs(CHARTS_DIR, exist_ok=True)

CSV_PATH = "/mnt/data/scopus_export_Apr 19-2026_3a855411-5815-4197-8a3a-ded5728bf7ff.csv"

TEAM = [
    {"name": "Marcos David Arrieta Barreto", "id": "2204657"},
    {"name": "Johan Sebastian Peña Castillo", "id": "2170491"},
    {"name": "Juan David Suarez Corzo", "id": "2164685"},
    {"name": "Juan Manuel Torres Melo", "id": "2204212"},
]

DECLARATION = (
    "La presente Divulgación Pública de la Ciencia, a través del siguiente Desarrollo Web, "
    "tiene una ruta de circulación nacional sin enfoque diferencial y está dirigido a la comunidad "
    "o público objetivo conformado por jóvenes, adultos, empresarios y/o empresa en género "
    "literario informativo de tipo Blog, con componente digital a través de soporte web."
)

TOPIC = "Non-Terrestrial Networks (NTN)"
TITLE = "NTN en 5G-Advanced y 6G: análisis bibliométrico, mini-caso técnico y asistente conversacional"
SUBTITLE = (
    "Blog académico-digital sobre redes no terrestres, integración satelital y tendencias de investigación "
    "en comunicaciones digitales."
)

SOURCE_DOCS = {
    "search_query": '"non-terrestrial networks" OR NTN OR "satellite 5G"',
    "source": "Scopus exportado en CSV",
    "recommended_range": "2016–2025",
    "course": "Comunicaciones II (27145) – Reto ABET SO7",
    "professor": "Ronald Zamora Musa",
}

POSITIVE_PATTERNS = [
    r"non[- ]terrestrial",
    r"\\bntn\\b",
    r"\\bntns\\b",
    r"5g-advanced",
    r"\\b5g\\b",
    r"\\b6g\\b",
    r"leo",
    r"satellite",
    r"space-air-ground",
    r"haps",
    r"nb-iot",
    r"otfs",
]
NEGATIVE_PATTERNS = [
    r"phishing",
    r"tango2",
    r"geomagnetic",
    r"zebrafish",
    r"cyanobacter",
    r"forestry",
    r"drinking water",
    r"\bwater\b",
    r"neoplasm",
    r"labor market",
    r"city-scale",
    r"settlement",
    r"earthquake",
    r"pregnan",
    r"hepatic",
    r"reservoir",
    r"smart cities",
    r"façade",
    r"observatory",
    r"gene expression",
    r"museum",
    r"fungus",
    r"\bfish\b",
    r"mouse",
    r"mice",
    r"hypertension",
    r"virus",
    r"trauma",
    r"surgical training",
    r"asparaginase",
    r"tectonic",
    r"carbonat",
]

REPLACEMENTS = [
    (r"\\bntns\\b|\\bntn\\b", "ntn"),
    (r"nonterrestrial networks?|non terrestrial networks?|non-terrestrial networks?", "ntn"),
    (r"terrestrial and non-terrestrial networks?|tn-ntn|integrated terrestrial and non-terrestrial networks?|terrestrial/non-terrestrial networks?", "tn-ntn integration"),
    (r"satellite communication systems?|satellite communications?", "satellite communication"),
    (r"5g mobile communication systems?|5g mobile communication system|5g nr|5g-nr", "5g"),
    (r"6g mobile communication systems?|6g mobile communication system", "6g"),
    (r"low earth orbit satellites?|low earth orbits?|leo satellites?|low earth orbit", "leo satellite"),
    (r"unmanned aerial vehicles? \\(uav\\)|unmanned aerial vehicles?|aerial vehicle|uavs?", "uav"),
    (r"high altitude platform station", "haps"),
    (r"reinforcement learnings?", "reinforcement learning"),
    (r"satellite links?", "satellite link"),
    (r"deep learnings?", "deep learning"),
    (r"internet of things", "iot"),
    (r"nb-iot", "nb-iot"),
    (r"beam forming networks?", "beamforming"),
    (r"mimo systems?|massive mimo", "mimo"),
    (r"radio access networks?|radio access network|ran", "ran"),
    (r"channel state information", "csi"),
    (r"free space optical communication|optical links?|optical communication", "fso"),
    (r"geostationary satellites?", "geo satellite"),
    (r"global navigation satellite systems?|global positioning system", "positioning"),
    (r"inter[s-]?satellite links?", "intersatellite link"),
    (r"non-orthogonal multiple access", "noma"),
    (r"space-air-ground integrated networks?|space-air-ground integrated network", "sagin"),
    (r"gateways? \\(computer networks\\)|gateways?", "gateway"),
    (r"communication satellites", "communication satellite"),
    (r"cell[- ]free", "cell-free"),
    (r"machine-learning", "machine learning"),
    (r"semantic communication", "semantic communication"),
    (r"integrated sensing and communication", "integrated sensing and communication"),
    (r"integrated sensing", "integrated sensing"),
    (r"5g ntn", "5g ntn"),
]

BLACKLIST = {
    "article", "mobile telecommunication systems", "human", "female", "male", "adult",
    "controlled study", "humans", "nonhuman", "animals", "animal", "singapore", "mexico",
    "kuwait", "north america", "middle east", "southeast asia", "urban area", "public transport",
    "geometry", "hydrogeology", "signal transduction", "remote sensing", "telecommunication services",
    "complex networks", "network layers", "network-based", "network systems", "communications systems",
    "communications networks", "network functions", "network topology", "core networks",
    "wide area networks", "network function virtualization", "data communication systems",
    "time division multiple access", "frequency division multiple access", "code division multiple access",
    "multiaccess", "next generation networks", "wireless communications", "mobile communications",
    "radio communication", "aircraft communication", "satellite broadcasting",
    "vehicle to vehicle communications", "small satellites", "radio links", "radio transmission",
    "geodetic satellites", "satellites", "communication channels (information theory)", "network security",
    "security", "authentication", "network architecture", "wireless network", "channel capacity",
    "network routing", "5g mobile communication", "6g mobile communication", "learning systems",
    "signal receivers", "satellite relay systems", "satellite system", "satellite ground stations",
    "satellite antennas", "spectrum efficiency", "orbit", "random access", "signal interference",
    "semantics", "leo"
}

KEEP_SUBSTRINGS = [
    "ntn", "satellite", "leo", "5g", "6g", "uav", "haps", "iot", "beam", "mimo",
    "handover", "doppler", "spectrum", "otfs", "noma", "slice", "cell-free", "gateway",
    "feeder", "position", "synchron", "intersatellite", "ran", "edge", "federated",
    "learning", "semantic", "sensing", "security", "fso", "stochastic geometry", "channel",
    "direct-to-device", "nb-iot", "o-ran", "cloud-native", "sagin", "backhaul", "mmwave",
    "ka-band", "interference", "association", "offloading", "cache", "precoding", "latency",
    "delay", "throughput", "resource allocation"
]

SELECTED_WORDS = [
    "ntn", "5g", "6g", "uav", "haps", "beamforming", "ran",
    "satellite communication", "leo satellite", "satellite link", "satellite network", "geo satellite", "positioning", "feeder link",
    "reinforcement learning", "resource allocation", "deep learning", "edge computing", "computation offloading", "federated learning",
]

CLUSTER_COLORS = {
    "Arquitectura NTN y evolución 5G/6G": "#2563eb",
    "Segmento espacial y enlaces satelitales": "#0f766e",
    "IA, optimización y gestión de recursos": "#7c3aed",
}

STOPWORDS = {
    "de", "la", "el", "y", "en", "del", "las", "los", "para", "con", "por", "una", "un", "se", "que",
    "sobre", "al", "es", "como", "más", "mas", "o", "a", "sus", "su", "the", "and", "for", "to", "of",
    "in", "on", "with", "toward", "towards", "from", "using", "based", "between", "into", "through", "or"
}


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9áéíóúüñ\\s-]", "", text)
    text = text.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u").replace("ü", "u").replace("ñ", "n")
    text = re.sub(r"\\s+", "-", text)
    return text


def normalize_keyword(keyword: str) -> str:
    k = keyword.lower().strip()
    k = re.sub(r"\\[[^\\]]+\\]", "", k).strip()
    k = re.sub(r"\\s+", " ", k)
    for pat, rep in REPLACEMENTS:
        k = re.sub(r"^" + pat + r"$", rep, k)
    return k.strip(" -")


def prettify_term(term: str) -> str:
    mapping = {
        "ntn": "NTN",
        "5g": "5G",
        "6g": "6G",
        "uav": "UAV",
        "haps": "HAPS",
        "ran": "RAN",
        "fso": "FSO",
        "iot": "IoT",
        "mimo": "MIMO",
        "noma": "NOMA",
        "nb-iot": "NB-IoT",
        "open ran": "Open RAN",
        "5g ntn": "5G NTN",
        "geo satellite": "satélite GEO",
        "leo satellite": "satélite LEO",
        "satellite communication": "comunicación satelital",
        "satellite link": "enlace satelital",
        "satellite network": "red satelital",
        "resource allocation": "asignación de recursos",
        "reinforcement learning": "aprendizaje por refuerzo",
        "deep learning": "aprendizaje profundo",
        "edge computing": "edge computing",
        "computation offloading": "offloading computacional",
        "federated learning": "aprendizaje federado",
        "beamforming": "beamforming",
        "channel estimation": "estimación de canal",
        "spectrum sharing": "compartición de espectro",
        "integrated sensing": "sensado integrado",
        "integrated sensing and communication": "ISAC",
        "physical layer security": "seguridad de capa física",
        "positioning": "posicionamiento",
        "feeder link": "feeder link",
        "intersatellite link": "enlace intersatelital",
        "doppler effect": "efecto Doppler",
        "deep reinforcement learning": "aprendizaje profundo por refuerzo",
    }
    return mapping.get(term, term)


def classify_cluster(term: str) -> str:
    if term in {"satellite communication", "communication satellite", "leo satellite", "satellite link", "satellite network", "geo satellite", "positioning", "doppler effect", "doppler", "gateway", "intersatellite link", "feeder link", "synchronization", "satellite-terrestrial network", "satellite internet", "positioning navigation and timings", "beam-hopping", "5g ntn"}:
        return "Segmento espacial y enlaces satelitales"
    if term in {"reinforcement learning", "resource allocation", "deep learning", "deep reinforcement learning", "edge computing", "learning algorithms", "computation offloading", "sagin", "interference", "federated learning", "semantic communication", "satellite imagery"}:
        return "IA, optimización y gestión de recursos"
    return "Arquitectura NTN y evolución 5G/6G"


def cluster_focus(cluster_name: str) -> str:
    mapping = {
        "Arquitectura NTN y evolución 5G/6G": "arquitectura radio, integración 5G/6G y diseño físico para redes no terrestres",
        "Segmento espacial y enlaces satelitales": "segmento espacial, enlaces satelitales, órbitas LEO/GEO y continuidad de servicio",
        "IA, optimización y gestión de recursos": "automatización, aprendizaje automático y toma de decisiones para asignar recursos en NTN",
    }
    return mapping[cluster_name]


def load_and_filter_dataset():
    df = pd.read_csv(CSV_PATH)
    df["Year"] = pd.to_numeric(df["Year"], errors="coerce")
    initial_docs = len(df)
    initial_keywords_occ = 0
    raw_keyword_set = set()
    for cell in df["Index Keywords"].dropna():
        kws = [x.strip().lower() for x in str(cell).split(";") if x.strip()]
        initial_keywords_occ += len(kws)
        raw_keyword_set.update(kws)

    df = df[(df["Year"] >= 2016) & (df["Year"] <= 2025)].copy()
    text = (df["Title"].fillna("") + " " + df["Abstract"].fillna("")).str.lower()
    mask = text.str.contains("|".join(POSITIVE_PATTERNS), regex=True) & ~text.str.contains("|".join(NEGATIVE_PATTERNS), regex=True)
    filtered = df[mask].copy()
    filtered["Cited by"] = pd.to_numeric(filtered["Cited by"], errors="coerce").fillna(0).astype(int)

    keyword_rows = []
    freq = Counter()
    cleaned_unique = set()
    removed_terms_counter = Counter()

    for cell in filtered["Index Keywords"].fillna(""):
        row = []
        for raw in str(cell).split(";"):
            term = normalize_keyword(raw)
            if not term:
                continue
            if term in BLACKLIST:
                removed_terms_counter[term] += 1
                continue
            if any(token in term for token in KEEP_SUBSTRINGS):
                row.append(term)
                cleaned_unique.add(term)
            else:
                removed_terms_counter[term] += 1
        row = sorted(set(row))
        if row:
            keyword_rows.append(row)
            freq.update(row)

    selected_terms = {k for k, v in freq.items() if v >= 12}
    G = nx.Graph()
    for term in selected_terms:
        G.add_node(term, count=freq[term])
    for row in keyword_rows:
        kept = [term for term in row if term in selected_terms]
        for a, b in itertools.combinations(kept, 2):
            if G.has_edge(a, b):
                G[a][b]["weight"] += 1
            else:
                G.add_edge(a, b, weight=1)

    communities = louvain_communities(G, weight="weight", resolution=1, seed=42)
    community_map = {}
    for community in communities:
        for term in community:
            community_map[term] = classify_cluster(term)

    return {
        "df_filtered": filtered,
        "initial_docs": initial_docs,
        "filtered_docs": len(filtered),
        "initial_keywords_occ": initial_keywords_occ,
        "initial_keywords_unique": len(raw_keyword_set),
        "cleaned_keywords_unique": len(cleaned_unique),
        "manual_terms_count": len(selected_terms),
        "removed_terms_counter": removed_terms_counter,
        "keyword_rows": keyword_rows,
        "freq": freq,
        "graph": G,
        "community_map": community_map,
    }


def cluster_cards(G, freq, community_map):
    clusters = []
    for cluster_name in [
        "Arquitectura NTN y evolución 5G/6G",
        "Segmento espacial y enlaces satelitales",
        "IA, optimización y gestión de recursos",
    ]:
        nodes = [n for n in G.nodes if community_map.get(n) == cluster_name]
        subg = G.subgraph(nodes)
        top_terms = sorted(nodes, key=lambda n: (freq[n], subg.degree(n, weight="weight")), reverse=True)[:8]
        total_strength = int(sum(d for _, _, d in subg.edges(data="weight")))
        if cluster_name == "Arquitectura NTN y evolución 5G/6G":
            summary = (
                "Agrupa el núcleo conceptual de la bibliografía: NTN como arquitectura, su acople con 5G/6G, "
                "y temas de capa física como beamforming, MIMO, estimación de canal y seguridad."
            )
            opportunities = "Movilidad 5G-Advanced, diseño físico para enlaces variables y convergencia con Open RAN e ISAC."
        elif cluster_name == "Segmento espacial y enlaces satelitales":
            summary = (
                "Concentra la literatura sobre satélites LEO/GEO, feeder links, posicionamiento, sincronización y continuidad del enlace."
            )
            opportunities = "Modelos de Doppler, multiconectividad, handover predictivo y gestión de constelaciones."
        else:
            summary = (
                "Reúne trabajos donde la optimización se apoya en IA: aprendizaje por refuerzo, edge computing, federated learning y offloading."
            )
            opportunities = "Automatización de recursos, slicing inteligente y control distribuido de NTN para servicios críticos e IoT."

        clusters.append({
            "name": cluster_name,
            "color": CLUSTER_COLORS[cluster_name],
            "node_count": len(nodes),
            "edge_strength": total_strength,
            "top_terms": [prettify_term(t) for t in top_terms],
            "summary": summary,
            "opportunities": opportunities,
        })
    return clusters


def generate_word_analysis(word: str, G: nx.Graph, freq: Counter, community_map: dict):
    neighbors = []
    for n in G.neighbors(word):
        neighbors.append({
            "term": n,
            "display": prettify_term(n),
            "weight": int(G[word][n]["weight"]),
            "cluster": community_map.get(n, classify_cluster(n)),
        })
    neighbors.sort(key=lambda x: (-x["weight"], x["term"]))
    top10 = neighbors[:10]
    if not top10:
        return {
            "word": word,
            "display": prettify_term(word),
            "cluster": community_map.get(word, classify_cluster(word)),
            "frequency": int(freq[word]),
            "links": [],
            "analysis": "No se encontraron enlaces suficientes para construir el análisis automático.",
            "conclusion": "La palabra requiere revisión manual en VOSviewer para confirmar su rol en la red.",
            "image": "",
        }
    strong = top10[0]
    weak = top10[-1]
    cluster_name = community_map.get(word, classify_cluster(word))
    focus = cluster_focus(cluster_name)
    link_labels = ", ".join([item["display"] for item in top10[:4]])
    analysis = (
        f"La palabra clave {prettify_term(word)} aparece {int(freq[word])} veces en el conjunto depurado y se conecta con "
        f"{link_labels}. Su relación más fuerte es con {strong['display']} (fuerza {strong['weight']}), lo que sugiere que la literatura la usa "
        f"como eje para discutir {focus}. En contraste, enlaces como {weak['display']} (fuerza {weak['weight']}) muestran asociaciones más específicas o emergentes, "
        f"útiles para identificar sublíneas de trabajo y posibles vacíos metodológicos."
    )
    conclusion = (
        f"En síntesis, {prettify_term(word)} cumple un papel {'central' if strong['weight'] >= 20 else 'relevante'} dentro del clúster “{cluster_name}”, "
        f"porque articula resultados entre arquitectura, desempeño y aplicaciones. La evidencia sugiere priorizar su estudio cuando el objetivo sea explicar tendencias, "
        f"comparar soluciones o justificar el mini-caso técnico del proyecto."
    )
    return {
        "word": word,
        "display": prettify_term(word),
        "cluster": cluster_name,
        "frequency": int(freq[word]),
        "links": top10,
        "analysis": analysis,
        "conclusion": conclusion,
        "image": f"assets/words/{slugify(word)}.png",
    }


def create_network_image(G: nx.Graph, freq: Counter, community_map: dict, out_path: str):
    plt.figure(figsize=(14, 10), dpi=180)
    pos = nx.spring_layout(G, weight="weight", seed=12, k=0.42)
    color_map = [CLUSTER_COLORS[community_map.get(n, classify_cluster(n))] for n in G.nodes]
    sizes = [max(70, freq[n] * 4.5) for n in G.nodes]
    edge_weights = np.array([G[u][v]["weight"] for u, v in G.edges()])
    nx.draw_networkx_edges(G, pos, alpha=0.14, width=np.clip(edge_weights / 10, 0.4, 2.2), edge_color="#64748b")
    nx.draw_networkx_nodes(G, pos, node_size=sizes, node_color=color_map, alpha=0.92, linewidths=0.6, edgecolors="white")
    label_terms = sorted(G.nodes, key=lambda n: freq[n], reverse=True)[:26]
    for term in label_terms:
        x, y = pos[term]
        plt.text(x, y, prettify_term(term), fontsize=8.7, ha="center", va="center", color="#0f172a", fontweight="bold")
    plt.title("Mapa bibliométrico aproximado de co-ocurrencias NTN (términos con frecuencia >= 12)", fontsize=16, pad=18)
    plt.axis("off")
    plt.tight_layout()
    plt.savefig(out_path, bbox_inches="tight", facecolor="white")
    plt.close()


def create_top_terms_chart(freq: Counter, out_path: str):
    top = freq.most_common(15)
    labels = [prettify_term(k) for k, _ in top][::-1]
    values = [v for _, v in top][::-1]
    plt.figure(figsize=(10, 7), dpi=180)
    plt.barh(labels, values)
    plt.xlabel("Frecuencia")
    plt.title("Términos más frecuentes en el conjunto depurado")
    plt.tight_layout()
    plt.savefig(out_path, bbox_inches="tight", facecolor="white")
    plt.close()


def create_year_trend_chart(df_filtered: pd.DataFrame, out_path: str):
    series = df_filtered.groupby("Year").size().sort_index()
    years = list(series.index.astype(int))
    counts = list(series.values)
    plt.figure(figsize=(10, 5.6), dpi=180)
    plt.plot(years, counts, marker="o")
    plt.fill_between(years, counts, alpha=0.18)
    plt.xticks(years)
    plt.ylabel("Documentos")
    plt.xlabel("Año")
    plt.title("Evolución temporal de publicaciones NTN (2016–2025)")
    plt.tight_layout()
    plt.savefig(out_path, bbox_inches="tight", facecolor="white")
    plt.close()


def create_ego_image(word: str, G: nx.Graph, freq: Counter, community_map: dict, out_path: str):
    neighbors = sorted(G.neighbors(word), key=lambda n: G[word][n]["weight"], reverse=True)[:10]
    ego = nx.Graph()
    ego.add_node(word)
    for n in neighbors:
        ego.add_node(n)
        ego.add_edge(word, n, weight=G[word][n]["weight"])
    for a, b in itertools.combinations(neighbors, 2):
        if G.has_edge(a, b):
            ego.add_edge(a, b, weight=G[a][b]["weight"])
    plt.figure(figsize=(6.2, 5.4), dpi=170)
    pos = nx.spring_layout(ego, weight="weight", seed=14, k=0.75)
    node_colors = ["#f59e0b" if n == word else CLUSTER_COLORS[community_map.get(n, classify_cluster(n))] for n in ego.nodes]
    sizes = [freq.get(n, 8) * (30 if n == word else 15) for n in ego.nodes]
    widths = [max(0.6, ego[u][v]["weight"] / 12) for u, v in ego.edges()]
    nx.draw_networkx_edges(ego, pos, width=widths, alpha=0.28, edge_color="#64748b")
    nx.draw_networkx_nodes(ego, pos, node_size=sizes, node_color=node_colors, edgecolors="white", linewidths=0.7)
    labels = {n: prettify_term(n) for n in ego.nodes}
    nx.draw_networkx_labels(ego, pos, labels=labels, font_size=7.8)
    plt.title(f"Red local de {prettify_term(word)}")
    plt.axis("off")
    plt.tight_layout()
    plt.savefig(out_path, bbox_inches="tight", facecolor="white")
    plt.close()


def format_ieee_reference(row: pd.Series) -> str:
    authors = row.get("Authors", "")
    title = row.get("Title", "")
    year = int(row.get("Year")) if not pd.isna(row.get("Year")) else "s. f."
    source = row.get("Source title", "")
    volume = row.get("Volume", "")
    issue = row.get("Issue", "")
    start = row.get("Page start", "")
    end = row.get("Page end", "")
    doi = row.get("DOI", "")
    parts = [f"{authors}, \"{title},\" {source}"]
    if str(volume) and str(volume) != "nan":
        parts.append(f"vol. {volume}")
    if str(issue) and str(issue) != "nan":
        parts.append(f"no. {issue}")
    if str(start) and str(start) != "nan":
        if str(end) and str(end) != "nan":
            parts.append(f"pp. {start}-{end}")
        else:
            parts.append(f"p. {start}")
    parts.append(f"{year}")
    ref = ", ".join(parts) + "."
    if str(doi) and str(doi) != "nan":
        ref += f" doi: {doi}."
    return ref


def choose_references(df_filtered: pd.DataFrame):
    preferred = [
        "Non-Terrestrial Networks in the 6G Era: Challenges and Opportunities",
        "Evolution of Non-Terrestrial Networks from 5G to 6G: A Survey",
        "5G from Space: An Overview of 3GPP Non-Terrestrial Networks",
        "Non-terrestrial networks in 5G & beyond: A survey",
        "Cellular, Wide-Area, and Non-Terrestrial IoT: A Survey on 5G Advances and the Road Toward 6G",
        "Satellite Communications in the New Space Era: A Survey and Future Challenges",
        "A Survey on Nongeostationary Satellite Systems: The Communication Perspective",
        "Satellite-5G Integration: A Network Perspective",
        "Architectures and key technical challenges for 5G systems incorporating satellites",
        "Revolutionizing Future Connectivity: A Contemporary Survey on AI-Empowered Satellite-Based Non-Terrestrial Networks in 6G",
        "Toward 6G Non-Terrestrial Networks",
        "Space-air-ground integrated network (SAGIN) for 6G: Requirements, architecture and challenges",
    ]
    refs = []
    for title in preferred:
        match = df_filtered[df_filtered["Title"] == title]
        if not match.empty:
            refs.append(format_ieee_reference(match.iloc[0]))
    return refs[:12]


def mini_case_dataset():
    c = 299792458.0
    earth_radius_km = 6371.0
    altitude_km = 600.0
    elevations = np.arange(10, 85, 5)

    def slant_range_km(elev_deg):
        elev = math.radians(elev_deg)
        r = earth_radius_km
        h = altitude_km
        return math.sqrt((r + h) ** 2 - (r * math.cos(elev)) ** 2) - r * math.sin(elev)

    def fspl_db(freq_ghz, distance_km):
        return 92.45 + 20 * math.log10(freq_ghz) + 20 * math.log10(distance_km)

    def one_way_delay_ms(distance_km):
        return (distance_km * 1000.0 / c) * 1e3

    def doppler_hz(freq_ghz, elev_deg, orbital_speed_m_s=7560):
        radial = orbital_speed_m_s * math.cos(math.radians(elev_deg))
        return (radial / c) * (freq_ghz * 1e9)

    def qfunc(x):
        return 0.5 * math.erfc(x / math.sqrt(2))

    scenarios = {
        "S-band IoT (2 GHz)": {"freq": 2.0, "eirp": 43.0, "grx": 15.0, "losses": 3.0, "bandwidth": 1e6, "nf": 3.0, "req_snr": 2.0},
        "Ka-band feeder (20 GHz)": {"freq": 20.0, "eirp": 58.0, "grx": 35.0, "losses": 5.0, "bandwidth": 20e6, "nf": 4.0, "req_snr": 6.0},
    }

    results = {}
    for name, cfg in scenarios.items():
        distances = np.array([slant_range_km(e) for e in elevations])
        fspl = np.array([fspl_db(cfg["freq"], d) for d in distances])
        prx = cfg["eirp"] + cfg["grx"] - fspl - cfg["losses"]
        noise = -174 + 10 * np.log10(cfg["bandwidth"]) + cfg["nf"]
        snr = prx - noise
        margin = snr - cfg["req_snr"]
        delays = np.array([one_way_delay_ms(d) for d in distances])
        doppler = np.array([doppler_hz(cfg["freq"], e) for e in elevations])
        ber = np.array([qfunc(math.sqrt(2 * max(0.01, 10 ** (s / 10)))) for s in snr])
        results[name] = {
            "elevations": elevations.tolist(),
            "distance_km": np.round(distances, 1).tolist(),
            "fspl_db": np.round(fspl, 2).tolist(),
            "prx_dbm": np.round(prx, 2).tolist(),
            "snr_db": np.round(snr, 2).tolist(),
            "margin_db": np.round(margin, 2).tolist(),
            "delay_ms": np.round(delays, 3).tolist(),
            "doppler_hz": np.round(doppler, 1).tolist(),
            "ber_bpsk": [float(f"{x:.3e}") for x in ber],
            "config": cfg,
        }
    return {"altitude_km": altitude_km, "results": results}


def create_mini_case_charts(mini_case):
    elevations = mini_case["results"]["S-band IoT (2 GHz)"]["elevations"]

    plt.figure(figsize=(9.4, 5.6), dpi=180)
    for name, result in mini_case["results"].items():
        plt.plot(elevations, result["margin_db"], marker="o", label=name)
    plt.axhline(0, linestyle="--")
    plt.xlabel("Elevación (grados)")
    plt.ylabel("Margen de enlace (dB)")
    plt.title("Mini-caso: margen de enlace vs elevación")
    plt.legend()
    plt.tight_layout()
    plt.savefig(os.path.join(CHARTS_DIR, "mini_case_margin.png"), bbox_inches="tight", facecolor="white")
    plt.close()

    plt.figure(figsize=(9.4, 5.6), dpi=180)
    for name, result in mini_case["results"].items():
        plt.plot(elevations, result["doppler_hz"], marker="o", label=name)
    plt.xlabel("Elevación (grados)")
    plt.ylabel("Doppler (Hz)")
    plt.title("Mini-caso: Doppler aproximado vs elevación")
    plt.legend()
    plt.tight_layout()
    plt.savefig(os.path.join(CHARTS_DIR, "mini_case_doppler.png"), bbox_inches="tight", facecolor="white")
    plt.close()


def build_site_files(site_data):
    html = """<!DOCTYPE html>
<html lang=\"es\">
<head>
  <meta charset=\"UTF-8\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
  <title>NTN BlogDPC</title>
  <meta name=\"description\" content=\"Blog académico-digital sobre NTN, 5G-Advanced, 6G y análisis bibliométrico con mini-caso técnico y chatbot local.\" />
  <link rel=\"stylesheet\" href=\"styles.css\" />
</head>
<body>
  <a class=\"skip-link\" href=\"#contenido\">Saltar al contenido</a>
  <header class=\"site-header\" id=\"top\">
    <div class=\"header-inner\">
      <div>
        <p class=\"eyebrow\">BlogDPC · Comunicaciones II · Reto ABET SO7</p>
        <h1 id=\"site-title\"></h1>
        <p class=\"subtitle\" id=\"site-subtitle\"></p>
        <p class=\"declaration\" id=\"declaration\"></p>
      </div>
      <div class=\"hero-card\">
        <h2>Resumen rápido</h2>
        <ul id=\"hero-highlights\"></ul>
      </div>
    </div>
  </header>

  <nav class=\"main-nav\" aria-label=\"Navegación principal\">
    <a href=\"#inicio\">Inicio</a>
    <a href=\"#metodologia\">Metodología</a>
    <a href=\"#resultados\">Resultados</a>
    <a href=\"#analisis\">Análisis por palabra</a>
    <a href=\"#mini-caso\">Mini-caso</a>
    <a href=\"#video\">Video</a>
    <a href=\"#reflexion\">Reflexión</a>
    <a href=\"#referencias\">Referencias</a>
  </nav>

  <main id=\"contenido\" class=\"container\">
    <section id=\"inicio\" class=\"panel\">
      <div class=\"section-head\">
        <h2>1. Presentación del proyecto</h2>
        <p>Autores, problema de investigación, pregunta guía y alcance de la revisión.</p>
      </div>
      <div class=\"two-col\">
        <article>
          <h3>Integrantes</h3>
          <ul class=\"team-list\" id=\"team-list\"></ul>
          <h3>Pregunta guía</h3>
          <p id=\"research-question\"></p>
          <h3>Objetivo general</h3>
          <p id=\"general-objective\"></p>
        </article>
        <article>
          <h3>Objetivos específicos</h3>
          <ul id=\"specific-objectives\"></ul>
          <h3>Glosario rápido</h3>
          <div class=\"glossary\" id=\"glossary\"></div>
        </article>
      </div>
    </section>

    <section id=\"metodologia\" class=\"panel\">
      <div class=\"section-head\">
        <h2>2. Metodología y plan de aprendizaje</h2>
        <p>Se resume la estrategia de búsqueda, la depuración y la transferencia al mini-caso técnico.</p>
      </div>
      <div class=\"stats-grid\" id=\"kpi-grid\"></div>
      <div class=\"two-col\">
        <article>
          <h3>Cadena de búsqueda</h3>
          <div class=\"code-block\" id=\"search-query\"></div>
          <h3>Pasos ejecutados</h3>
          <ol id=\"method-steps\"></ol>
        </article>
        <article>
          <h3>Términos eliminados (muestra)</h3>
          <table>
            <thead><tr><th>Término eliminado</th><th>Frecuencia eliminada</th><th>Motivo</th></tr></thead>
            <tbody id=\"removed-terms\"></tbody>
          </table>
        </article>
      </div>
      <div class=\"note\">
        <strong>Nota metodológica:</strong> las cifras del blog se generaron automáticamente a partir del CSV de Scopus cargado en esta conversación. Si luego exportan el mapa exacto desde VOSviewer, pueden reemplazar estas imágenes sin tocar la estructura del sitio.
      </div>
    </section>

    <section id=\"resultados\" class=\"panel\">
      <div class=\"section-head\">
        <h2>3. Resultados bibliométricos</h2>
        <p>Mapa de co-ocurrencias, términos frecuentes, evolución temporal y síntesis por clúster.</p>
      </div>
      <div class=\"chart-grid\">
        <figure class=\"chart-card\">
          <img src=\"assets/charts/network_overview.png\" alt=\"Mapa bibliométrico aproximado de co-ocurrencias NTN\" />
          <figcaption>Mapa completo aproximado de co-ocurrencias para términos con frecuencia igual o superior a 12.</figcaption>
        </figure>
        <figure class=\"chart-card\">
          <img src=\"assets/charts/top_terms.png\" alt=\"Gráfico de términos más frecuentes\" />
          <figcaption>Términos más frecuentes tras el proceso de depuración semiautomático y manual.</figcaption>
        </figure>
        <figure class=\"chart-card full-span\">
          <img src=\"assets/charts/year_trend.png\" alt=\"Tendencia anual de publicaciones NTN\" />
          <figcaption>Crecimiento de la producción científica NTN entre 2016 y 2025.</figcaption>
        </figure>
      </div>
      <div class=\"cluster-grid\" id=\"cluster-grid\"></div>
    </section>

    <section id=\"analisis\" class=\"panel\">
      <div class=\"section-head\">
        <h2>4. Análisis narrativo por palabra escogida</h2>
        <p>Se presentan 20 análisis, cada uno con 10 enlaces ordenados por fuerza de asociación y una conclusión interpretativa.</p>
      </div>
      <div class=\"analysis-search\">
        <label for=\"analysis-filter\">Filtrar palabra:</label>
        <input id=\"analysis-filter\" type=\"search\" placeholder=\"Ej. NTN, beamforming, feeder link...\" />
      </div>
      <div id=\"analysis-list\" class=\"analysis-list\"></div>
    </section>

    <section id=\"mini-caso\" class=\"panel\">
      <div class=\"section-head\">
        <h2>5. Mini-caso técnico: link budget simplificado con Doppler para un enlace LEO</h2>
        <p>Comparación exploratoria de un perfil S-band IoT y un perfil Ka-band feeder, con una calculadora interactiva para el blog.</p>
      </div>
      <div class=\"two-col\">
        <article>
          <h3>Objetivo aplicado</h3>
          <p id=\"mini-objective\"></p>
          <h3>Hipótesis</h3>
          <p id=\"mini-hypothesis\"></p>
          <h3>Supuestos</h3>
          <ul id=\"mini-assumptions\"></ul>
          <h3>Hallazgos clave</h3>
          <ul id=\"mini-findings\"></ul>
        </article>
        <article>
          <h3>Calculadora rápida</h3>
          <form class=\"calculator\" id=\"calc-form\">
            <label>Frecuencia (GHz)<input type=\"number\" step=\"0.1\" id=\"calc-freq\" value=\"2\" /></label>
            <label>Altitud LEO (km)<input type=\"number\" step=\"10\" id=\"calc-alt\" value=\"600\" /></label>
            <label>Elevación (grados)<input type=\"number\" step=\"1\" id=\"calc-elev\" value=\"45\" /></label>
            <label>EIRP (dBm)<input type=\"number\" step=\"1\" id=\"calc-eirp\" value=\"43\" /></label>
            <label>Ganancia Rx (dBi)<input type=\"number\" step=\"1\" id=\"calc-grx\" value=\"15\" /></label>
            <label>Pérdidas adicionales (dB)<input type=\"number\" step=\"0.5\" id=\"calc-loss\" value=\"3\" /></label>
            <label>Ancho de banda (MHz)<input type=\"number\" step=\"0.1\" id=\"calc-bw\" value=\"1\" /></label>
            <label>Noise Figure (dB)<input type=\"number\" step=\"0.1\" id=\"calc-nf\" value=\"3\" /></label>
            <button type=\"submit\">Calcular</button>
          </form>
          <div class=\"calc-output\" id=\"calc-output\"></div>
        </article>
      </div>
      <div class=\"chart-grid\">
        <figure class=\"chart-card\">
          <img src=\"assets/charts/mini_case_margin.png\" alt=\"Margen de enlace vs elevación\" />
          <figcaption>El margen de enlace mejora al aumentar la elevación y empeora a altas frecuencias si no se compensa con ganancia.</figcaption>
        </figure>
        <figure class=\"chart-card\">
          <img src=\"assets/charts/mini_case_doppler.png\" alt=\"Doppler vs elevación\" />
          <figcaption>El Doppler es especialmente exigente en Ka-band y requiere compensación predictiva en escenarios LEO.</figcaption>
        </figure>
      </div>
    </section>

    <section id=\"video\" class=\"panel\">
      <div class=\"section-head\">
        <h2>6. Video de sustentación</h2>
        <p>Reemplaza el ID de YouTube en el archivo <code>site-data.js</code> cuando tengan la sustentación grabada.</p>
      </div>
      <div id=\"video-wrapper\" class=\"video-wrapper\"></div>
    </section>

    <section id=\"reflexion\" class=\"panel\">
      <div class=\"section-head\">
        <h2>7. Reflexión, ética y aprendizaje continuo</h2>
        <p>Bitácora abreviada del proceso y lecciones para la práctica profesional.</p>
      </div>
      <div class=\"two-col\">
        <article>
          <h3>Reflexiones metacognitivas</h3>
          <ul id=\"reflection-list\"></ul>
        </article>
        <article>
          <h3>Retroalimentación</h3>
          <p>Esta sección deja una evidencia simple de comentarios locales. Si luego quieren comentarios públicos, pueden enlazar un Google Form o GitHub Discussions.</p>
          <form id=\"feedback-form\" class=\"feedback-form\">
            <label>Nombre<input id=\"feedback-name\" type=\"text\" placeholder=\"Tu nombre\" /></label>
            <label>Comentario<textarea id=\"feedback-text\" rows=\"4\" placeholder=\"Escribe una observación académica o sugerencia\"></textarea></label>
            <button type=\"submit\">Guardar comentario local</button>
          </form>
          <div id=\"feedback-list\" class=\"feedback-list\"></div>
        </article>
      </div>
    </section>

    <section id=\"referencias\" class=\"panel\">
      <div class=\"section-head\">
        <h2>8. Fuentes consultadas</h2>
        <p>Referencias académicas en formato IEEE y enlaces para descarga de recursos del proyecto.</p>
      </div>
      <ol id=\"reference-list\" class=\"reference-list\"></ol>
      <div class=\"download-box\">
        <h3>Descargas del proyecto</h3>
        <ul>
          <li><a href=\"mini_caso_ntn.py\">Script del mini-caso NTN</a></li>
          <li><a href=\"build_ntn_blog.py\">Script generador del sitio</a></li>
          <li><a href=\"README_PUBLICACION.md\">Guía de publicación</a></li>
        </ul>
      </div>
    </section>
  </main>

  <div class=\"share-bar\">
    <span>Compartir:</span>
    <button data-share=\"linkedin\">LinkedIn</button>
    <button data-share=\"x\">X</button>
    <button data-share=\"whatsapp\">WhatsApp</button>
  </div>

  <aside class=\"chatbot\" id=\"chatbot\" aria-label=\"Asistente conversacional del blog\">
    <button class=\"chatbot-toggle\" id=\"chatbot-toggle\">IA del blog</button>
    <div class=\"chatbot-panel\" id=\"chatbot-panel\" hidden>
      <div class=\"chatbot-header\">
        <strong>Asistente NTN</strong>
        <p>Responde solo con información del blog. No usa API externa.</p>
      </div>
      <div class=\"chatbot-messages\" id=\"chatbot-messages\"></div>
      <form id=\"chatbot-form\" class=\"chatbot-form\">
        <input id=\"chatbot-input\" type=\"text\" placeholder=\"Pregunta algo sobre NTN, 5G, LEO, mini-caso...\" />
        <button type=\"submit\">Enviar</button>
      </form>
    </div>
  </aside>

  <footer class=\"site-footer\">
    <p>Blog generado a partir del CSV cargado en la conversación. Diseñado para despliegue gratuito en GitHub Pages o en WordPress con soporte de código personalizado.</p>
    <a href=\"#top\">Volver arriba</a>
  </footer>

  <script src=\"site-data.js\"></script>
  <script src=\"app.js\"></script>
</body>
</html>
"""

    css = """:root {
  --bg: #08111f;
  --panel: #0f172a;
  --panel-2: #111c34;
  --text: #e5eefb;
  --muted: #9fb3cf;
  --line: rgba(148, 163, 184, 0.22);
  --accent: #60a5fa;
  --accent-2: #22c55e;
  --warning: #f59e0b;
  --shadow: 0 12px 28px rgba(2, 8, 23, 0.35);
  --radius: 18px;
  --max: 1180px;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: linear-gradient(180deg, #08111f 0%, #0b1327 50%, #08111f 100%);
  color: var(--text);
}
a { color: #93c5fd; text-decoration: none; }
a:hover { text-decoration: underline; }
.skip-link {
  position: absolute; left: -999px; top: auto;
}
.skip-link:focus {
  left: 12px; top: 12px; background: white; color: black; padding: 8px 12px; z-index: 50;
}
.site-header {
  padding: 48px 20px 26px;
  background: radial-gradient(circle at top right, rgba(37, 99, 235, 0.28), transparent 35%), radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 25%);
}
.header-inner, .container, .site-footer, .main-nav, .share-bar {
  width: min(100%, var(--max));
  margin: 0 auto;
}
.header-inner {
  display: grid;
  gap: 24px;
  grid-template-columns: 2fr 1fr;
  align-items: start;
}
.eyebrow {
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
  margin: 0 0 12px;
}
h1 { font-size: clamp(2rem, 4vw, 3.4rem); line-height: 1.08; margin: 0 0 12px; }
.subtitle { color: #d6e5ff; font-size: 1.08rem; max-width: 70ch; }
.declaration {
  margin-top: 18px;
  padding: 16px 18px;
  border: 1px solid rgba(96, 165, 250, 0.35);
  border-radius: var(--radius);
  background: rgba(15, 23, 42, 0.7);
  color: #dbeafe;
  line-height: 1.55;
}
.hero-card, .panel, .chart-card, .download-box, .analysis-card, .cluster-card {
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.hero-card { padding: 20px; }
.hero-card h2 { margin-top: 0; font-size: 1.1rem; }
.hero-card ul { margin: 0; padding-left: 18px; color: var(--muted); line-height: 1.6; }
.main-nav {
  display: flex; flex-wrap: wrap; gap: 10px;
  padding: 14px 20px 26px;
}
.main-nav a {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 14px;
  color: var(--text);
}
.container { padding: 0 20px 48px; }
.panel { padding: 24px; margin-bottom: 26px; }
.section-head { margin-bottom: 20px; }
.section-head h2 { margin: 0 0 6px; font-size: 1.65rem; }
.section-head p { margin: 0; color: var(--muted); }
.two-col {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.team-list, .reference-list, #specific-objectives, #method-steps, #reflection-list, #mini-assumptions, #mini-findings {
  line-height: 1.7;
}
.glossary {
  display: flex; flex-wrap: wrap; gap: 10px;
}
.glossary-item {
  background: rgba(96, 165, 250, 0.12);
  color: #dbeafe;
  border: 1px solid rgba(96, 165, 250, 0.25);
  padding: 10px 12px;
  border-radius: 14px;
  font-size: 0.95rem;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}
.stat-card {
  background: rgba(17, 28, 52, 0.95);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid var(--line);
}
.stat-card strong {
  display: block;
  font-size: 1.8rem;
  margin-top: 6px;
}
.stat-card span { color: var(--muted); font-size: 0.92rem; }
.code-block {
  padding: 14px 16px;
  background: #07101d;
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  color: #c4ddff;
  overflow: auto;
}
.note {
  margin-top: 18px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.25);
  color: #fde68a;
}
table {
  width: 100%; border-collapse: collapse; font-size: 0.95rem;
}
th, td {
  border-bottom: 1px solid var(--line);
  text-align: left;
  padding: 10px 8px;
  vertical-align: top;
}
th { color: #dbeafe; }
td { color: var(--muted); }
.chart-grid {
  display: grid; gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 18px;
}
.chart-card { padding: 14px; }
.chart-card img { width: 100%; border-radius: 12px; background: white; }
.chart-card figcaption { color: var(--muted); font-size: 0.95rem; margin-top: 10px; }
.full-span { grid-column: 1 / -1; }
.cluster-grid {
  display: grid; gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.cluster-card { padding: 18px; }
.cluster-badge {
  display: inline-block;
  width: 14px; height: 14px; border-radius: 999px; margin-right: 8px;
}
.cluster-meta { color: var(--muted); font-size: 0.95rem; }
.cluster-card ul { padding-left: 18px; color: var(--muted); }
.analysis-search {
  margin-bottom: 16px;
}
.analysis-search input, .calculator input, .feedback-form input, .feedback-form textarea, .chatbot-form input {
  width: 100%;
  padding: 11px 12px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(8, 17, 31, 0.95);
  color: var(--text);
}
.analysis-list { display: grid; gap: 14px; }
.analysis-card { padding: 16px; }
.analysis-card h3 { margin-top: 0; }
.analysis-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: 1.1fr 1fr;
}
.analysis-card img { width: 100%; border-radius: 12px; background: white; }
.analysis-card details { margin-top: 12px; }
.analysis-card summary { cursor: pointer; color: #bfdbfe; font-weight: 600; }
.analysis-card table { margin-top: 10px; }
.calculator {
  display: grid; gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.calculator label, .feedback-form label {
  display: flex; flex-direction: column; gap: 6px; color: var(--muted); font-size: 0.95rem;
}
button {
  border: 0;
  border-radius: 12px;
  padding: 11px 14px;
  cursor: pointer;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  font-weight: 700;
}
.calc-output {
  margin-top: 14px;
  padding: 14px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(8, 17, 31, 0.84);
  color: var(--muted);
  line-height: 1.6;
}
.video-wrapper {
  aspect-ratio: 16 / 9;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(15, 23, 42, 0.95));
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  color: var(--muted);
  padding: 24px;
  text-align: center;
}
.video-wrapper iframe { width: 100%; height: 100%; border: 0; }
.feedback-list {
  margin-top: 14px;
  display: grid;
  gap: 10px;
}
.feedback-item {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px;
  background: rgba(8, 17, 31, 0.8);
}
.download-box { padding: 18px; margin-top: 18px; }
.share-bar {
  display: flex; align-items: center; gap: 10px;
  padding: 0 20px 28px;
}
.share-bar button { padding: 8px 12px; border-radius: 999px; }
.chatbot {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 40;
}
.chatbot-toggle { border-radius: 999px; box-shadow: var(--shadow); }
.chatbot-panel {
  margin-top: 10px;
  width: min(92vw, 360px);
  max-height: 72vh;
  background: rgba(15, 23, 42, 0.98);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.chatbot-header {
  padding: 14px;
  border-bottom: 1px solid var(--line);
}
.chatbot-header p { margin: 6px 0 0; color: var(--muted); font-size: 0.9rem; }
.chatbot-messages {
  padding: 14px;
  display: grid;
  gap: 10px;
  overflow: auto;
}
.message {
  padding: 10px 12px;
  border-radius: 12px;
  line-height: 1.5;
  font-size: 0.94rem;
}
.message.user { background: rgba(37, 99, 235, 0.18); }
.message.bot { background: rgba(8, 17, 31, 0.92); border: 1px solid var(--line); }
.chatbot-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  padding: 14px;
  border-top: 1px solid var(--line);
}
.site-footer {
  padding: 0 20px 36px;
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
}
@media (max-width: 980px) {
  .header-inner, .two-col, .cluster-grid, .chart-grid, .stats-grid, .analysis-grid {
    grid-template-columns: 1fr;
  }
  .calculator { grid-template-columns: 1fr; }
  .full-span { grid-column: auto; }
}
@media (max-width: 720px) {
  .site-header { padding-top: 34px; }
  .panel { padding: 18px; }
  .main-nav { position: sticky; top: 0; background: rgba(8, 17, 31, 0.94); backdrop-filter: blur(8px); z-index: 30; }
  .share-bar, .site-footer { flex-direction: column; align-items: flex-start; }
}
"""

    app_js = """const data = window.SITE_DATA;

function byId(id) { return document.getElementById(id); }
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderIntro() {
  byId('site-title').textContent = data.meta.title;
  byId('site-subtitle').textContent = data.meta.subtitle;
  byId('declaration').textContent = data.meta.declaration;
  byId('hero-highlights').innerHTML = data.meta.highlights.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('team-list').innerHTML = data.team.map(item => `<li><strong>${escapeHtml(item.name)}</strong> · ${escapeHtml(item.id)}</li>`).join('');
  byId('research-question').textContent = data.research.question;
  byId('general-objective').textContent = data.research.general_objective;
  byId('specific-objectives').innerHTML = data.research.specific_objectives.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('glossary').innerHTML = data.glossary.map(item => `<div class=\"glossary-item\"><strong>${escapeHtml(item.term)}</strong><br>${escapeHtml(item.definition)}</div>`).join('');
}

function renderMethodology() {
  byId('search-query').textContent = data.method.search_query;
  byId('method-steps').innerHTML = data.method.steps.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('kpi-grid').innerHTML = data.stats.map(item => `
    <div class=\"stat-card\">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
      <div>${escapeHtml(item.note)}</div>
    </div>
  `).join('');
  byId('removed-terms').innerHTML = data.method.removed_terms.map(item => `
    <tr><td>${escapeHtml(item.term)}</td><td>${escapeHtml(item.count)}</td><td>${escapeHtml(item.reason)}</td></tr>
  `).join('');
}

function renderClusters() {
  byId('cluster-grid').innerHTML = data.clusters.map(cluster => `
    <article class=\"cluster-card\">
      <h3><span class=\"cluster-badge\" style=\"background:${cluster.color}\"></span>${escapeHtml(cluster.name)}</h3>
      <p class=\"cluster-meta\">${cluster.node_count} términos · fuerza interna ${cluster.edge_strength}</p>
      <p>${escapeHtml(cluster.summary)}</p>
      <p><strong>Términos líderes:</strong> ${cluster.top_terms.map(escapeHtml).join(', ')}</p>
      <p><strong>Oportunidades:</strong> ${escapeHtml(cluster.opportunities)}</p>
    </article>
  `).join('');
}

function renderAnalysis(filter = '') {
  const normalized = filter.trim().toLowerCase();
  const list = data.word_analyses.filter(item => {
    return !normalized || item.display.toLowerCase().includes(normalized) || item.word.toLowerCase().includes(normalized) || item.cluster.toLowerCase().includes(normalized);
  });
  byId('analysis-list').innerHTML = list.map(item => `
    <article class=\"analysis-card\">
      <h3>${escapeHtml(item.display)}</h3>
      <p class=\"cluster-meta\">Clúster: ${escapeHtml(item.cluster)} · frecuencia ${item.frequency}</p>
      <div class=\"analysis-grid\">
        <div>
          <img src=\"${escapeHtml(item.image)}\" alt=\"Red local de ${escapeHtml(item.display)}\" />
          <p>${escapeHtml(item.analysis)}</p>
          <p><strong>Conclusión:</strong> ${escapeHtml(item.conclusion)}</p>
        </div>
        <div>
          <details open>
            <summary>Ver 10 enlaces con fuerza de asociación</summary>
            <table>
              <thead><tr><th>Enlace relacionado</th><th>Fuerza</th><th>Clúster</th></tr></thead>
              <tbody>
                ${item.links.map(link => `<tr><td>${escapeHtml(link.display)}</td><td>${link.weight}</td><td>${escapeHtml(link.cluster)}</td></tr>`).join('')}
              </tbody>
            </table>
          </details>
        </div>
      </div>
    </article>
  `).join('');
}

function renderMiniCase() {
  byId('mini-objective').textContent = data.mini_case.objective;
  byId('mini-hypothesis').textContent = data.mini_case.hypothesis;
  byId('mini-assumptions').innerHTML = data.mini_case.assumptions.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('mini-findings').innerHTML = data.mini_case.findings.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function calcSlantRangeKm(altKm, elevDeg) {
  const R = 6371;
  const e = elevDeg * Math.PI / 180;
  return Math.sqrt((R + altKm) ** 2 - (R * Math.cos(e)) ** 2) - R * Math.sin(e);
}
function calcFsplDb(freqGhz, distanceKm) { return 92.45 + 20 * Math.log10(freqGhz) + 20 * Math.log10(distanceKm); }
function calcDopplerHz(freqGhz, elevDeg) {
  const c = 299792458;
  const v = 7560 * Math.cos(elevDeg * Math.PI / 180);
  return (v / c) * (freqGhz * 1e9);
}
function renderCalculatorResult(evt) {
  if (evt) evt.preventDefault();
  const freq = parseFloat(byId('calc-freq').value);
  const alt = parseFloat(byId('calc-alt').value);
  const elev = parseFloat(byId('calc-elev').value);
  const eirp = parseFloat(byId('calc-eirp').value);
  const grx = parseFloat(byId('calc-grx').value);
  const loss = parseFloat(byId('calc-loss').value);
  const bw = parseFloat(byId('calc-bw').value) * 1e6;
  const nf = parseFloat(byId('calc-nf').value);
  const distance = calcSlantRangeKm(alt, elev);
  const fspl = calcFsplDb(freq, distance);
  const prx = eirp + grx - fspl - loss;
  const noise = -174 + 10 * Math.log10(bw) + nf;
  const snr = prx - noise;
  const delayMs = (distance * 1000 / 299792458) * 1000;
  const doppler = calcDopplerHz(freq, elev);
  byId('calc-output').innerHTML = `
    <strong>Resultado estimado</strong><br>
    Distancia oblicua: <strong>${distance.toFixed(1)} km</strong><br>
    FSPL: <strong>${fspl.toFixed(2)} dB</strong><br>
    Potencia recibida: <strong>${prx.toFixed(2)} dBm</strong><br>
    Ruido térmico + NF: <strong>${noise.toFixed(2)} dBm</strong><br>
    SNR estimada: <strong>${snr.toFixed(2)} dB</strong><br>
    Retardo unidireccional: <strong>${delayMs.toFixed(3)} ms</strong><br>
    Doppler aproximado: <strong>${doppler.toFixed(1)} Hz</strong>
  `;
}

function renderVideo() {
  const wrapper = byId('video-wrapper');
  if (data.video.youtube_id && data.video.youtube_id !== 'VIDEO_ID_AQUI') {
    wrapper.innerHTML = `<iframe src=\"https://www.youtube.com/embed/${encodeURIComponent(data.video.youtube_id)}\" title=\"Sustentación NTN\" allowfullscreen></iframe>`;
  } else {
    wrapper.innerHTML = `<div><p><strong>Falta insertar el video de YouTube.</strong></p><p>Abre <code>site-data.js</code> y reemplaza <code>VIDEO_ID_AQUI</code> por el ID de tu sustentación. El resto de la página ya está listo para publicar.</p></div>`;
  }
}

function renderReflection() {
  byId('reflection-list').innerHTML = data.reflection.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function renderReferences() {
  byId('reference-list').innerHTML = data.references.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function initFeedback() {
  const key = 'ntn_blog_feedback';
  const load = () => JSON.parse(localStorage.getItem(key) || '[]');
  const save = items => localStorage.setItem(key, JSON.stringify(items));
  const render = () => {
    const items = load();
    byId('feedback-list').innerHTML = items.length ? items.map(item => `
      <div class=\"feedback-item\"><strong>${escapeHtml(item.name)}</strong><br>${escapeHtml(item.text)}</div>
    `).join('') : '<div class=\"feedback-item\">Aún no hay comentarios locales guardados en este navegador.</div>';
  };
  byId('feedback-form').addEventListener('submit', evt => {
    evt.preventDefault();
    const name = byId('feedback-name').value.trim() || 'Anónimo';
    const text = byId('feedback-text').value.trim();
    if (!text) return;
    const items = load();
    items.unshift({ name, text });
    save(items.slice(0, 12));
    byId('feedback-form').reset();
    render();
  });
  render();
}

function tokenize(text) {
  return text.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9ñáéíóúü\s-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter(token => !data.chatbot.stopwords.includes(token));
}

function buildKnowledgeBase() {
  const docs = [];
  data.chatbot.knowledge.forEach(item => {
    const tokens = tokenize(`${item.title} ${item.text}`);
    docs.push({ ...item, tokens });
  });
  const df = {};
  docs.forEach(doc => {
    new Set(doc.tokens).forEach(token => { df[token] = (df[token] || 0) + 1; });
  });
  const N = docs.length;
  docs.forEach(doc => {
    const tf = {};
    doc.tokens.forEach(token => { tf[token] = (tf[token] || 0) + 1; });
    const vector = {};
    Object.entries(tf).forEach(([token, value]) => {
      const idf = Math.log((N + 1) / ((df[token] || 0) + 1)) + 1;
      vector[token] = value * idf;
    });
    doc.vector = vector;
    doc.norm = Math.sqrt(Object.values(vector).reduce((acc, value) => acc + value * value, 0)) || 1;
  });
  return docs;
}

function vectorizeQuery(query, docs) {
  const tokens = tokenize(query);
  const tf = {};
  tokens.forEach(token => { tf[token] = (tf[token] || 0) + 1; });
  const df = {};
  docs.forEach(doc => {
    Object.keys(doc.vector).forEach(token => { df[token] = (df[token] || 0) + 1; });
  });
  const vector = {};
  const N = docs.length;
  Object.entries(tf).forEach(([token, value]) => {
    const idf = Math.log((N + 1) / ((df[token] || 0) + 1)) + 1;
    vector[token] = value * idf;
  });
  const norm = Math.sqrt(Object.values(vector).reduce((acc, value) => acc + value * value, 0)) || 1;
  return { vector, norm };
}

function similarity(queryVec, doc) {
  let dot = 0;
  Object.entries(queryVec.vector).forEach(([token, value]) => {
    if (doc.vector[token]) dot += value * doc.vector[token];
  });
  return dot / (queryVec.norm * doc.norm);
}

function ruleBasedAnswer(query) {
  const q = query.toLowerCase();
  if (q.includes('declaracion') || q.includes('declaración')) {
    return { answer: data.meta.declaration, source: 'Declaración obligatoria del blog' };
  }
  if (q.includes('cadena') && q.includes('busqueda')) {
    return { answer: `La cadena de búsqueda base del proyecto es: ${data.method.search_query}.`, source: 'Metodología' };
  }
  if (q.includes('integrante') || q.includes('autores') || q.includes('equipo')) {
    return { answer: data.team.map(item => `${item.name} (${item.id})`).join(', '), source: 'Presentación del proyecto' };
  }
  if (q.includes('mini caso') || q.includes('minicaso')) {
    return { answer: data.mini_case.objective + ' ' + data.mini_case.findings[0], source: 'Mini-caso técnico' };
  }
  if (q.includes('video')) {
    return { answer: 'El video de sustentación está preparado para incrustarse desde YouTube. Debes reemplazar el ID del video en site-data.js cuando lo graben.', source: 'Sección de video' };
  }
  return null;
}

function initChatbot() {
  const docs = buildKnowledgeBase();
  const panel = byId('chatbot-panel');
  const messages = byId('chatbot-messages');
  const addMessage = (role, html) => {
    const div = document.createElement('div');
    div.className = `message ${role}`;
    div.innerHTML = html;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  };
  addMessage('bot', '<strong>Hola.</strong> Soy el asistente local del blog. Puedo responder preguntas sobre NTN, clústeres, términos, metodología, mini-caso y referencias.');
  byId('chatbot-toggle').addEventListener('click', () => {
    panel.hidden = !panel.hidden;
  });
  byId('chatbot-form').addEventListener('submit', evt => {
    evt.preventDefault();
    const query = byId('chatbot-input').value.trim();
    if (!query) return;
    addMessage('user', escapeHtml(query));
    byId('chatbot-input').value = '';
    const ruled = ruleBasedAnswer(query);
    if (ruled) {
      addMessage('bot', `${escapeHtml(ruled.answer)}<br><small>Fuente: ${escapeHtml(ruled.source)}</small>`);
      return;
    }
    const qv = vectorizeQuery(query, docs);
    const ranked = docs.map(doc => ({ doc, score: similarity(qv, doc) })).sort((a, b) => b.score - a.score).slice(0, 3);
    if (!ranked[0] || ranked[0].score < 0.12) {
      addMessage('bot', 'No encontré suficiente evidencia en la base local del blog para responder con seguridad. Prueba con otra formulación o revisa las secciones de metodología, análisis por palabra o mini-caso.');
      return;
    }
    const answer = ranked.map(item => `${item.doc.text}`).join(' ');
    const sources = ranked.map(item => item.doc.title).join(' · ');
    addMessage('bot', `${escapeHtml(answer)}<br><small>Fuente local: ${escapeHtml(sources)}</small>`);
  });
}

function initShare() {
  document.querySelectorAll('[data-share]').forEach(button => {
    button.addEventListener('click', () => {
      const url = window.location.href;
      const text = encodeURIComponent(data.meta.title);
      const encodedUrl = encodeURIComponent(url);
      let target = '';
      if (button.dataset.share === 'linkedin') target = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      if (button.dataset.share === 'x') target = `https://x.com/intent/post?text=${text}&url=${encodedUrl}`;
      if (button.dataset.share === 'whatsapp') target = `https://wa.me/?text=${text}%20${encodedUrl}`;
      window.open(target, '_blank', 'noopener,noreferrer');
    });
  });
}

function boot() {
  renderIntro();
  renderMethodology();
  renderClusters();
  renderAnalysis();
  renderMiniCase();
  renderVideo();
  renderReflection();
  renderReferences();
  renderCalculatorResult();
  byId('calc-form').addEventListener('submit', renderCalculatorResult);
  byId('analysis-filter').addEventListener('input', evt => renderAnalysis(evt.target.value));
  initFeedback();
  initChatbot();
  initShare();
}

document.addEventListener('DOMContentLoaded', boot);
"""

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(html)
    with open(os.path.join(BASE_DIR, "styles.css"), "w", encoding="utf-8") as f:
        f.write(css)
    with open(os.path.join(BASE_DIR, "app.js"), "w", encoding="utf-8") as f:
        f.write(app_js)
    with open(os.path.join(BASE_DIR, "site-data.js"), "w", encoding="utf-8") as f:
        f.write("window.SITE_DATA = " + json.dumps(site_data, ensure_ascii=False, indent=2) + ";\n")


def build_readme():
    text = """# Blog NTN completo

## Qué incluye
- `index.html`: sitio completo listo para publicar.
- `styles.css` y `app.js`: estilo y comportamiento.
- `site-data.js`: contenido del blog y base local del chatbot.
- `mini_caso_ntn.py`: script independiente del mini-caso técnico.
- `build_ntn_blog.py`: generador reproducible del sitio.
- `assets/`: gráficas bibliométricas y redes locales por palabra.

## Publicación gratuita recomendada
1. Crea un repositorio público en GitHub.
2. Sube **todo** el contenido de esta carpeta.
3. En Settings → Pages, publica desde la rama principal.
4. Tu sitio quedará disponible en GitHub Pages.

## Sobre WordPress
Este paquete funciona perfecto en GitHub Pages o en WordPress autoalojado/plugin-enabled. En WordPress.com gratuito, el código personalizado con `script`, `style`, `iframe` y `form` suele tener restricciones, por lo que el chatbot local y la calculadora no siempre se conservarán al pegar el HTML.

## Antes de entregar
- Reemplaza `VIDEO_ID_AQUI` en `site-data.js` por el ID real del video de YouTube.
- Si luego exportas mapas exactos desde VOSviewer, reemplaza las imágenes en `assets/charts/` y `assets/words/`.
- Verifica si el profesor exige usar solo 2016–2025. El generador ya trabaja en ese rango.
- Revisa la redacción final y adapta detalles a su discusión oral.
"""
    with open(os.path.join(BASE_DIR, "README_PUBLICACION.md"), "w", encoding="utf-8") as f:
        f.write(text)


def build_mini_case_script():
    code = """import math
import json
import numpy as np

C = 299792458.0
EARTH_RADIUS_KM = 6371.0
ALTITUDE_KM = 600.0


def slant_range_km(elev_deg: float, altitude_km: float = ALTITUDE_KM) -> float:
    e = math.radians(elev_deg)
    return math.sqrt((EARTH_RADIUS_KM + altitude_km) ** 2 - (EARTH_RADIUS_KM * math.cos(e)) ** 2) - EARTH_RADIUS_KM * math.sin(e)


def fspl_db(freq_ghz: float, distance_km: float) -> float:
    return 92.45 + 20 * math.log10(freq_ghz) + 20 * math.log10(distance_km)


def doppler_hz(freq_ghz: float, elev_deg: float, orbital_speed_m_s: float = 7560.0) -> float:
    radial = orbital_speed_m_s * math.cos(math.radians(elev_deg))
    return (radial / C) * (freq_ghz * 1e9)


def evaluate_case(freq_ghz: float, eirp_dbm: float, grx_dbi: float, losses_db: float, bw_mhz: float, nf_db: float, req_snr_db: float):
    data = []
    for elev in range(10, 85, 5):
        d = slant_range_km(elev)
        fspl = fspl_db(freq_ghz, d)
        prx = eirp_dbm + grx_dbi - fspl - losses_db
        noise = -174 + 10 * math.log10(bw_mhz * 1e6) + nf_db
        snr = prx - noise
        margin = snr - req_snr_db
        data.append({
            'elevation_deg': elev,
            'distance_km': round(d, 2),
            'fspl_db': round(fspl, 2),
            'prx_dbm': round(prx, 2),
            'snr_db': round(snr, 2),
            'margin_db': round(margin, 2),
            'doppler_hz': round(doppler_hz(freq_ghz, elev), 1),
        })
    return data


if __name__ == '__main__':
    cases = {
        'S-band IoT (2 GHz)': evaluate_case(2.0, 43.0, 15.0, 3.0, 1.0, 3.0, 2.0),
        'Ka-band feeder (20 GHz)': evaluate_case(20.0, 58.0, 35.0, 5.0, 20.0, 4.0, 6.0),
    }
    print(json.dumps(cases, indent=2, ensure_ascii=False))
"""
    with open(os.path.join(BASE_DIR, "mini_caso_ntn.py"), "w", encoding="utf-8") as f:
        f.write(code)


def build_site_data(analysis):
    df_filtered = analysis["df_filtered"]
    freq = analysis["freq"]
    G = analysis["graph"]
    community_map = analysis["community_map"]

    create_network_image(G, freq, community_map, os.path.join(CHARTS_DIR, "network_overview.png"))
    create_top_terms_chart(freq, os.path.join(CHARTS_DIR, "top_terms.png"))
    create_year_trend_chart(df_filtered, os.path.join(CHARTS_DIR, "year_trend.png"))

    word_analyses = []
    for word in SELECTED_WORDS:
        if word not in G.nodes:
            continue
        out_path = os.path.join(WORDS_DIR, slugify(word) + ".png")
        create_ego_image(word, G, freq, community_map, out_path)
        word_analyses.append(generate_word_analysis(word, G, freq, community_map))

    mini_case = mini_case_dataset()
    create_mini_case_charts(mini_case)

    removed_terms = analysis["removed_terms_counter"].most_common(12)
    removed_terms_rows = []
    for term, count in removed_terms:
        reason = "Ruido general o coincidencia acronímica ajena a NTN"
        if term in {"article", "human", "female", "male", "adult", "animals"}:
            reason = "Término biomédico o genérico sin valor temático para comunicaciones"
        if term in {"mexico", "singapore", "kuwait"}:
            reason = "Coincidencia geográfica producida por el acrónimo NTN"
        removed_terms_rows.append({"term": prettify_term(term), "count": int(count), "reason": reason})

    stats = [
        {"label": "Documentos iniciales en CSV", "value": str(analysis["initial_docs"]), "note": "Registros presentes en la exportación cargada"},
        {"label": "Documentos filtrados 2016–2025", "value": str(analysis["filtered_docs"]), "note": "Tras depuración temática automática"},
        {"label": "Palabras clave únicas iniciales", "value": str(analysis["initial_keywords_unique"]), "note": "Index Keywords crudos de Scopus"},
        {"label": "Términos manuales usados en el mapa", "value": str(analysis["manual_terms_count"]), "note": "Frecuencia mínima 12 en el conjunto depurado"},
    ]

    clusters = cluster_cards(G, freq, community_map)
    references = choose_references(df_filtered)

    chatbot_knowledge = [
        {"title": "Presentación", "text": "Este blog analiza Non-Terrestrial Networks, o NTN, como tendencia de comunicaciones digitales en 5G-Advanced y 6G."},
        {"title": "Metodología", "text": f"La cadena de búsqueda base del proyecto fue {SOURCE_DOCS['search_query']} y el rango recomendado se fijó entre 2016 y 2025."},
        {"title": "Depuración", "text": f"El CSV inicial contenía {analysis['initial_docs']} documentos y {analysis['initial_keywords_unique']} palabras clave únicas. Tras el filtrado temático quedaron {analysis['filtered_docs']} documentos y {analysis['manual_terms_count']} términos con frecuencia suficiente para el mapa."},
        {"title": "Clúster arquitectura", "text": "El clúster de arquitectura NTN y evolución 5G/6G concentra términos como NTN, 5G, 6G, UAV, HAPS, beamforming y RAN."},
        {"title": "Clúster espacial", "text": "El clúster de segmento espacial y enlaces satelitales reúne comunicación satelital, satélite LEO, feeder link, posicionamiento, Doppler y sincronización."},
        {"title": "Clúster IA", "text": "El clúster de IA, optimización y gestión de recursos agrupa reinforcement learning, edge computing, offloading computacional y federated learning."},
        {"title": "Mini-caso", "text": "El mini-caso compara un enlace S-band IoT a 2 GHz y un enlace Ka-band feeder a 20 GHz. El resultado principal es que la elevación mejora el margen, mientras que el Doppler crece con la frecuencia y exige compensación."},
        {"title": "Video", "text": "El sitio ya tiene la sección para incrustar el video de sustentación de YouTube. Solo hace falta reemplazar VIDEO_ID_AQUI por el identificador real del video."},
    ]
    for item in word_analyses:
        chatbot_knowledge.append({
            "title": f"Análisis de {item['display']}",
            "text": item["analysis"] + " " + item["conclusion"],
        })

    site_data = {
        "meta": {
            "title": TITLE,
            "subtitle": SUBTITLE,
            "declaration": DECLARATION,
            "highlights": [
                f"Tema asignado: {TOPIC}",
                f"Cadena base en Scopus: {SOURCE_DOCS['search_query']}",
                f"Términos manuales en el mapa: {analysis['manual_terms_count']}",
                "Incluye chatbot local gratuito, calculadora de mini-caso y secciones listas para publicar.",
            ],
        },
        "team": TEAM,
        "research": {
            "question": "¿Qué líneas de investigación dominan hoy las NTN y cómo se conectan la integración 5G/6G, el segmento espacial y las técnicas de optimización inteligente?",
            "general_objective": "Caracterizar las tendencias recientes en Non-Terrestrial Networks mediante análisis bibliométrico y transferir el aprendizaje a un mini-caso técnico de link budget con Doppler para un enlace LEO.",
            "specific_objectives": [
                "Depurar una exportación de Scopus para identificar términos, enlaces y clústeres relevantes en NTN.",
                "Interpretar 20 palabras seleccionadas con 10 enlaces por palabra y fuerza de asociación descendente.",
                "Traducir los hallazgos bibliométricos en un mini-caso técnico replicable con supuestos explícitos.",
                "Reflexionar sobre estrategias de aprendizaje, sesgos de búsqueda y criterios de calidad de la información.",
            ],
        },
        "glossary": [
            {"term": "NTN", "definition": "Redes no terrestres que integran satélites, HAPS o plataformas aéreas con infraestructura terrestre."},
            {"term": "LEO", "definition": "Órbita terrestre baja; usada por constelaciones que mejoran latencia pero exigen handover frecuente."},
            {"term": "HAPS", "definition": "High Altitude Platform Station; plataforma estratosférica que amplía cobertura y flexibilidad de despliegue."},
            {"term": "RAN", "definition": "Radio Access Network; conjunto de funciones que conecta el usuario con la red de acceso radio."},
            {"term": "Doppler", "definition": "Corrimiento de frecuencia causado por el movimiento relativo satélite-receptor, muy relevante en LEO."},
            {"term": "Feeder link", "definition": "Enlace entre el satélite y la pasarela terrestre que soporta el backhaul de la red."},
        ],
        "method": {
            "search_query": SOURCE_DOCS["search_query"],
            "steps": [
                "Se tomó la exportación CSV de Scopus cargada por el equipo en esta conversación.",
                "Se restringió el análisis al rango 2016–2025, en línea con la recomendación metodológica del curso.",
                "Se aplicó un filtrado temático por título y resumen para eliminar coincidencias no relacionadas con comunicaciones NTN.",
                "Se normalizaron variantes léxicas de palabras clave: NTN, non-terrestrial network, 5G NR, satellite communications, LEO satellites, entre otras.",
                "Se descartaron términos biomédicos, geográficos o genéricos producidos por el ruido del acrónimo NTN.",
                "Se construyó una red de co-ocurrencias con términos de frecuencia mínima 12 y se interpretaron clústeres y enlaces.",
                "Finalmente se diseñó un mini-caso técnico sobre margen de enlace y Doppler para un enlace LEO a gateway urbano.",
            ],
            "removed_terms": removed_terms_rows,
        },
        "stats": stats,
        "clusters": clusters,
        "word_analyses": word_analyses,
        "mini_case": {
            "objective": "Comparar cómo cambian el margen de enlace, el retardo y el Doppler cuando un gateway urbano opera un enlace LEO en dos perfiles simplificados: S-band IoT (2 GHz) y Ka-band feeder (20 GHz).",
            "hypothesis": "Si la elevación aumenta, el enlace mejora por menor distancia oblicua; sin embargo, en frecuencias altas el Doppler y la pérdida de espacio libre obligan a usar mayor ganancia, compensación predictiva y control de handover.",
            "assumptions": [
                "Órbita LEO fija de 600 km para mantener comparabilidad entre escenarios.",
                "Evaluación simplificada con propagación de espacio libre, pérdidas agregadas y sin lluvia ni desvanecimiento dinámico detallado.",
                "Perfil S-band IoT: 2 GHz, EIRP 43 dBm, ganancia receptora 15 dBi y BW de 1 MHz.",
                "Perfil Ka-band feeder: 20 GHz, EIRP 58 dBm, ganancia receptora 35 dBi y BW de 20 MHz.",
                "Velocidad orbital equivalente de 7.56 km/s para el cálculo aproximado del Doppler radial.",
            ],
            "findings": [
                "El margen mejora conforme la elevación crece porque la distancia oblicua baja y disminuye la FSPL.",
                "El perfil Ka-band ofrece mayor capacidad potencial, pero su Doppler y pérdida por frecuencia son mucho más severos.",
                "En elevaciones bajas, la planificación de handover y la compensación Doppler tienen más impacto que una simple subida de potencia.",
                "Para un despliegue real conviene fijar una máscara de elevación y activar conmutación de feeder links o diversidad de gateway.",
            ],
            "raw": mini_case,
        },
        "video": {"youtube_id": "VIDEO_ID_AQUI"},
        "reflection": [
            "La búsqueda por siglas como NTN produce mucho ruido interdisciplinario; por eso fue necesario combinar filtrado temático con normalización manual.",
            "La combinación entre bibliometría y mini-caso técnico ayuda a pasar de un mapa descriptivo a decisiones de ingeniería concretas.",
            "Las palabras con alta fuerza de asociación suelen representar temas consolidados; las conexiones débiles revelan nichos emergentes para futuros trabajos.",
            "Para validar calidad, se priorizaron artículos de survey, revistas IEEE y títulos con relación explícita a 5G-Advanced, 6G, satélites o integración TN/NTN.",
            "En próximos ciclos conviene contrastar este sitio con la exportación directa de VOSviewer y conservar una bitácora de términos excluidos desde el primer día.",
        ],
        "references": references,
        "chatbot": {
            "knowledge": chatbot_knowledge,
            "stopwords": sorted(STOPWORDS),
        },
    }
    return site_data


def main():
    analysis = load_and_filter_dataset()
    site_data = build_site_data(analysis)
    build_site_files(site_data)
    build_readme()
    build_mini_case_script()
    print("[OK] build complete")


if __name__ == "__main__":
    main()
