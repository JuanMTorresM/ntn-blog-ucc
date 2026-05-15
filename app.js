(() => {
  'use strict';

  const data = window.NTN_SITE_DATA;
  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: '⌂' },
    { id: 'tema', label: 'Tema NTN', icon: 'NTN' },
    { id: 'equipo', label: 'Equipo de trabajo', icon: '👥' },
    { id: 'metodologia', label: 'Metodología', icon: '↗' },
    { id: 'mapa', label: 'Mapa VOSviewer', icon: '◎' },
    { id: 'clusters', label: 'Clústeres', icon: '◌' },
    { id: 'palabras', label: 'Análisis por palabras', icon: 'Σ' },
    { id: 'mini-caso', label: 'Mini-caso técnico', icon: 'ƒ' },
    { id: 'reflexion', label: 'Reflexión', icon: '✎' },
    { id: 'fuentes', label: 'Fuentes consultadas', icon: '[]' },
    { id: 'asistente', label: 'Asistente IA', icon: 'IA' }
  ];

  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const fmt = new Intl.NumberFormat('es-CO');
  const esc = (str) => String(str ?? '').replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const clusterById = (id) => data.clusters.find(c => Number(c.id) === Number(id));
  const clusterColor = (id) => clusterById(id)?.color || '#38dfff';
  const clusterName = (id) => clusterById(id)?.name || 'Clúster no definido';

  let mapState = { scale: 1, tx: 0, ty: 0, selected: null, filter: 'all', query: '' };
  let imageState = { scale: 1, tx: 0, ty: 0 };
  let currentRating = Number(localStorage.getItem('ntn-feedback-rating') || 0);

  function init() {
    buildNav();
    renderAll();
    bindGlobalEvents();
    initAssistant();
    const initial = location.hash?.replace('#', '') || 'inicio';
    showTab(tabs.some(t => t.id === initial) ? initial : 'inicio', false);
  }

  function buildNav() {
    const nav = qs('#mainNav');
    nav.innerHTML = tabs.map(tab => `
      <button id="tab-${tab.id}" class="nav-btn" type="button" data-tab-target="${tab.id}" role="tab" aria-controls="${tab.id}">
        <span>${esc(tab.icon)}</span><span>${esc(tab.label)}</span>
      </button>
    `).join('');
  }

  function bindGlobalEvents() {
    document.addEventListener('click', (event) => {
      const tabTarget = event.target.closest('[data-tab-target]');
      if (tabTarget) {
        showTab(tabTarget.dataset.tabTarget);
      }
      const glossary = event.target.closest('[data-glossary]');
      if (glossary) {
        const term = glossary.dataset.glossary;
        showAssistantMessage('bot', `<strong>${esc(term)}</strong><br>${esc(data.glossary[term] || 'Definición no disponible en la base del proyecto.')}`);
        openAssistant(false);
      }
    });

    qs('#menuToggle').addEventListener('click', () => {
      const open = !document.body.classList.contains('menu-open');
      document.body.classList.toggle('menu-open', open);
      qs('#menuToggle').setAttribute('aria-expanded', String(open));
    });

    window.addEventListener('hashchange', () => {
      const target = location.hash.replace('#', '');
      if (tabs.some(t => t.id === target)) showTab(target, false);
    });
  }

  function showTab(id, updateHash = true) {
    qsa('.tab-panel').forEach(panel => panel.classList.toggle('active', panel.id === id));
    qsa('.nav-btn').forEach(btn => {
      const active = btn.dataset.tabTarget === id;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    document.body.classList.remove('menu-open');
    qs('#menuToggle').setAttribute('aria-expanded', 'false');
    if (updateHash) history.replaceState(null, '', `#${id}`);
    qs('#appContent').focus({ preventScroll: true });
    if (id === 'mapa') requestAnimationFrame(() => drawNetworkMap());
    if (id === 'mini-caso') requestAnimationFrame(calculateLinkBudget);
  }

  function renderAll() {
    renderHome();
    renderTheme();
    renderTeam();
    renderMethodology();
    renderMapTab();
    renderClusters();
    renderTermAnalysis();
    renderMiniCase();
    renderReflection();
    renderSources();
    renderAssistantTab();
  }

  function renderHome() {
    qs('#inicio').innerHTML = `
      <div class="hero">
        <div class="hero-copy">
          <span class="kicker">Reto ABET SO7 - BlogDPC</span>
          <h1>${esc(data.meta.title)}</h1>
          <p class="statement">${esc(data.meta.statement)}</p>
          <p class="lead">Este desarrollo web presenta una revisión académica sobre redes no terrestres, explicando cómo satélites LEO, plataformas aéreas y redes 5G/6G pueden extender la conectividad digital hacia escenarios donde la red terrestre no es suficiente.</p>
          <div class="action-row">
            <button class="btn primary" type="button" data-tab-target="tema">Explorar tema NTN</button>
            <button class="btn" type="button" data-tab-target="mapa">Ver mapa VOSviewer</button>
            <button class="btn" type="button" data-tab-target="mini-caso">Probar mini-caso</button>
            <button class="btn purple" type="button" data-open-assistant>Asistente IA</button>
          </div>
          <div class="metric-grid" aria-label="Métricas destacadas">
            ${metricCard(data.meta.publications, 'publicaciones revisadas')}
            ${metricCard(data.meta.clusters, 'clústeres temáticos')}
            ${metricCard(data.meta.selectedTerms, 'términos analizados')}
            ${metricCard('LEO + Doppler', 'mini-caso técnico')}
          </div>
        </div>
        <div class="hero-visual" aria-label="Ilustración tecnológica de una red NTN">
          <img src="assets/images/hero/hero-ntn.svg" alt="Satélites LEO conectando una red no terrestre con un gateway urbano">
        </div>
      </div>
      <div class="card-grid two">
        <article class="glass-card">
          <span class="pill">Ruta académica</span>
          <h3>De la búsqueda al diseño técnico</h3>
          <p>El proyecto une aprendizaje autónomo, análisis bibliométrico y aplicación práctica. Primero se revisó literatura científica, luego se interpretó el mapa de co-ocurrencias y finalmente se aterrizó el aprendizaje en un enlace LEO hacia un gateway urbano.</p>
        </article>
        <article class="glass-card">
          <span class="pill">Lectura rápida</span>
          <h3>Qué encontrará el lector</h3>
          <p>Pestañas independientes, mapa original con zoom, red interactiva reconstruida, tarjetas de clústeres, análisis por palabras, calculadora de link budget, reflexión metacognitiva, referencias IEEE y un asistente local sin claves externas.</p>
        </article>
      </div>
    `;
    qs('[data-open-assistant]').addEventListener('click', () => openAssistant(false));
  }

  function metricCard(value, label) {
    const val = typeof value === 'number' ? fmt.format(value) : value;
    return `<div class="metric-card"><strong>${esc(val)}</strong><span>${esc(label)}</span></div>`;
  }

  function renderTheme() {
    const apps = [
      ['🏡', 'Zonas rurales', 'Conectividad en regiones donde instalar torres terrestres es costoso o no viable.'],
      ['🚢', 'Marítima', 'Comunicación para rutas de navegación, flotas y operación en alta mar.'],
      ['🚨', 'Emergencias', 'Red de respaldo cuando la infraestructura terrestre falla por desastres.'],
      ['📡', 'IoT satelital', 'Sensores remotos, telemetría y servicios de baja potencia apoyados en NB-IoT.'],
      ['✈️', 'Conectividad aérea', 'Internet y continuidad de servicio para aeronaves y movilidad extendida.'],
      ['🌐', 'Cobertura global', 'Servicios ubicuos mediante integración entre redes terrestres y no terrestres.']
    ];
    const challenges = [
      ['01', 'Cobertura y movilidad', 'Los satélites LEO se desplazan a alta velocidad; por eso la red debe anticipar cambios de celda, haz y gateway.'],
      ['02', 'Retardo de propagación', 'LEO reduce la latencia frente a órbitas más altas, pero el retardo sigue dependiendo de geometría, distancia y ruta de red.'],
      ['03', 'Efecto Doppler', 'La velocidad relativa satélite-terminal desplaza la frecuencia recibida y obliga a compensación en capa física.'],
      ['04', 'Calidad de servicio', 'La red debe sostener disponibilidad, throughput y latencia aun con canales variables y handovers frecuentes.']
    ];
    qs('#tema').innerHTML = `
      <div class="theme-hero-block">
        <div class="theme-copy-block">
          <span class="kicker">Tema central del BlogDPC</span>
          <h2>Non-Terrestrial Networks</h2>
          <span class="section-line"></span>
          <p>Las redes no terrestres representan una evolución clave de las comunicaciones digitales: llevan conectividad a escenarios donde la infraestructura terrestre no alcanza, se congestiona o necesita respaldo.</p>
        </div>
        <div class="theme-orbit-card" aria-label="Ilustración conceptual NTN">
          <div class="orbit-ring ring-one"></div>
          <div class="orbit-ring ring-two"></div>
          <div class="orbit-sat">LEO</div>
          <div class="orbit-earth">TN</div>
          <div class="orbit-beam"></div>
          <p>Integración espacio-aire-tierra para 5G-Advanced y 6G</p>
        </div>
      </div>

      <div class="theme-intro-grid">
        <article class="theme-main-card">
          <h3>¿Qué son las NTN?</h3>
          <p>Las Non-Terrestrial Networks son redes de comunicación que emplean plataformas ubicadas fuera de la superficie terrestre como nodos de la infraestructura de red. Incluyen satélites en órbitas LEO, MEO y GEO, plataformas de gran altitud (HAPS) y vehículos aéreos no tripulados (UAVs).</p>
        </article>
        <article class="theme-main-card">
          <h3>¿Por qué son importantes?</h3>
          <p>Permiten extender cobertura, resiliencia y continuidad de servicio. En 5G-Advanced y 6G se estudian como parte del ecosistema móvil, no como una red aislada: deben integrarse con 5G NR, movilidad, QoS, asignación de recursos y arquitectura terrestre.</p>
        </article>
      </div>

      <div class="theme-feature-row">
        <article class="theme-feature-card">
          <span class="feature-badge red">Estándar</span>
          <h3>5G-Advanced NTN</h3>
          <p>La integración con 5G NR acerca los servicios satelitales a redes móviles con continuidad, señalización y gestión de movilidad.</p>
        </article>
        <article class="theme-feature-card">
          <span class="feature-badge green">Futuro</span>
          <h3>6G y NTN</h3>
          <p>Hacia 6G, las NTN se proyectan junto con mega-constelaciones, enlaces inter-satelitales, IA de red e integración aire-espacio-tierra.</p>
        </article>
        <article class="theme-feature-card">
          <span class="feature-badge blue">Plataformas</span>
          <h3>Satélites LEO</h3>
          <p>Los LEO reducen la distancia de propagación y el retardo, pero introducen Doppler, variación de cobertura y handover frecuente.</p>
        </article>
      </div>

      <div class="panel-card theme-panel">
        <h3>Aplicaciones de las NTN</h3>
        <div class="application-grid">
          ${apps.map(([icon, title, body]) => `<article class="application-card"><span>${icon}</span><div><h4>${esc(title)}</h4><p>${esc(body)}</p></div></article>`).join('')}
        </div>
      </div>

      <div class="panel-card theme-panel">
        <h3>Desafíos técnicos de las NTN</h3>
        <div class="challenge-list">
          ${challenges.map(([num, title, body]) => `<article class="challenge-item"><strong>${esc(num)}</strong><div><h4>${esc(title)}</h4><p>${esc(body)}</p></div></article>`).join('')}
        </div>
      </div>

      <div class="panel-card theme-panel">
        <h3>Conceptos que conectan el tema</h3>
        <p>El análisis del proyecto se concentra en cobertura, movilidad, retardo, <button class="inline-gloss" data-glossary="Doppler">Doppler</button>, <button class="inline-gloss" data-glossary="Handover">handover</button>, calidad de servicio, canal, interferencia y arquitectura de red. Estos conceptos permiten pasar de una revisión bibliométrica a decisiones técnicas de ingeniería.</p>
        <div class="tag-row">
          ${['Cobertura rural','Conectividad marítima','Emergencias','IoT extendido','Gateway urbano','Continuidad TN/NTN','Calidad de servicio','Redes 6G'].map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }

  function infoCard(title, body) {
    return `<article class="glass-card"><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`;
  }

  function sectionHead(title, description) {
    return `<div class="section-head"><div><span class="kicker">${esc(data.meta.subtitle)}</span><h2>${esc(title)}</h2></div><p>${esc(description)}</p></div>`;
  }

  function renderTeam() {
    qs('#equipo').innerHTML = `
      <div class="team-landing team-landing-refined">
        <div class="team-topline"><span></span>${esc(data.meta.subtitle)}</div>
        <h2 class="team-main-title">Equipo de trabajo</h2>
        <div class="team-title-accent" aria-hidden="true"></div>

        <section class="institution-showcase institution-showcase-refined" aria-label="Información institucional">
          <div class="institution-copy-block institution-copy-refined">
            <span class="institution-kicker">Universidad Industrial de Santander</span>
            <h3>Escuela de Ingenierías Eléctrica, Electrónica y de Telecomunicaciones</h3>
            <p>Trabajo académico desarrollado por estudiantes de Ingeniería Electrónica en el marco de Comunicaciones II y el Reto ABET SO7. El BlogDPC presenta una revisión bibliométrica y una aplicación técnica sobre Non-Terrestrial Networks con rigor académico, claridad y transferencia al diseño de enlaces.</p>
            <div class="institution-chip-row refined-chips">
              <span>Comunicaciones II</span>
              <span>Reto ABET SO7</span>
              <span>Ingeniería Electrónica</span>
              <span>NTN</span>
            </div>
          </div>

          <div class="institution-logo-stage refined-logo-stage" aria-label="Logos institucionales UIS y E3T">
            <img class="institution-logo-main uis-full-logo" src="assets/images/institutional/uis-logo.png" alt="Logo Universidad Industrial de Santander" loading="lazy">
            <img class="institution-logo-main e3t-full-logo" src="assets/images/institutional/e3t-logo.png" alt="Logo Escuela de Ingenierías Eléctrica, Electrónica y de Telecomunicaciones" loading="lazy">
          </div>
        </section>

        <div class="team-showcase-grid">
          ${data.team.map(member => `
            <article class="team-showcase-card">
              <div class="team-photo-wrap">
                <img src="${esc(member.photo)}" alt="Fotografía de ${esc(member.name)}" loading="lazy">
              </div>
              <div class="team-card-info">
                <h3>${esc(member.name)}</h3>
                <div class="code">Código ${esc(member.code)}</div>
                <div class="role">${esc(member.role)}</div>
                <p>${esc(member.contribution)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderMethodology() {
    const steps = [
      ['Pregunta guía', 'Se planteó cómo las NTN pueden ampliar cobertura y continuidad en comunicaciones digitales, especialmente cuando la red terrestre no alcanza o presenta baja resiliencia.'],
      ['Búsqueda académica', `Se revisó literatura científica del tema NTN con la cadena de búsqueda ${data.meta.searchQuery}.`],
      ['Depuración de términos', `Se seleccionó un umbral mínimo de ${data.meta.semiThreshold} ocurrencias, con ${fmt.format(data.meta.semiTerms)} términos en el proceso semiautomático y ${fmt.format(data.meta.manualTerms)} términos para lectura manual del mapa.`],
      ['Mapa bibliométrico', 'Se analizó el mapa interactivo de VOSviewer para identificar nodos dominantes, enlaces fuertes, clústeres y relaciones técnicas.'],
      ['Análisis por palabras', 'Se seleccionaron términos representativos, se registraron sus enlaces principales y se interpretó la fuerza de asociación de cada relación.'],
      ['Transferencia técnica', 'El aprendizaje se aplicó en un link budget simplificado con estimación de Doppler para un enlace LEO hacia un gateway urbano.']
    ];
    qs('#metodologia').innerHTML = `
      ${sectionHead('Metodología de aprendizaje y análisis', 'El proceso conecta búsqueda autónoma, análisis bibliométrico, síntesis temática y aplicación técnica, de acuerdo con el resultado SO7.')}
      <div class="panel-card">
        <h3>Cadena de búsqueda usada</h3>
        <div class="query-box">${esc(data.meta.searchQuery)}</div>
      </div>
      <div class="timeline">
        ${steps.map((step, i) => `
          <div class="timeline-step">
            <div class="step-num">${i + 1}</div>
            <div><h3>${esc(step[0])}</h3><p>${esc(step[1])}</p></div>
          </div>
        `).join('')}
      </div>
      <div class="card-grid three-gap">
        ${infoCard('Rigor académico', 'La selección de términos, las referencias IEEE y la trazabilidad de fuentes permiten que el blog sea comprensible, pero también verificable.')}
        ${infoCard('Síntesis bibliométrica', 'Los clústeres no se leen como colores aislados: se interpretan como líneas de investigación sobre arquitectura, recursos, plataformas y canal físico.')}
        ${infoCard('Aprendizaje autónomo SO7', 'El equipo no solo recopiló información: aprendió a filtrarla, relacionarla y usarla para tomar una decisión técnica en un escenario NTN.')}
      </div>
    `;
  }

  function renderMapTab() {
    qs('#mapa').innerHTML = `
      ${sectionHead('Mapa VOSviewer: vista original e interactiva', 'La pestaña permite revisar la imagen original del mapa y explorar una reconstrucción interactiva con nodos, enlaces, filtros y detalles por término.')}
      <div class="guide-grid">
        <div>1. Busca un término</div>
        <div>2. Selecciona un nodo</div>
        <div>3. Revisa sus conexiones</div>
        <div>4. Compara los clústeres</div>
      </div>
      <div class="map-shell">
        <div class="mode-tabs" role="tablist" aria-label="Modos de mapa">
          <button class="mode-btn active" type="button" data-map-mode="original">Vista original</button>
          <button class="mode-btn" type="button" data-map-mode="interactive">Vista interactiva</button>
        </div>
        <div id="originalMap" class="map-mode">
          <div class="control-row">
            <button class="small-btn" type="button" data-img-zoom="in">Acercar</button>
            <button class="small-btn" type="button" data-img-zoom="out">Alejar</button>
            <button class="small-btn" type="button" data-img-reset>Restablecer vista</button>
            <button class="small-btn" type="button" data-fullscreen="#originalStage">Pantalla completa</button>
          </div>
          <div id="originalStage" class="map-stage original-stage" aria-label="Imagen original del mapa VOSviewer">
            <img id="originalMapImage" src="assets/images/maps/vosviewer-original.jpg" alt="Mapa original de VOSviewer sobre NTN">
          </div>
        </div>
        <div id="interactiveMap" class="map-mode hidden">
          <div class="control-row">
            <input id="mapSearch" type="search" placeholder="Buscar término: LEO, Doppler, QoS" aria-label="Buscar nodo del mapa">
            <select id="clusterFilter" class="select" aria-label="Filtrar por clúster">
              <option value="all">Todos los clústeres</option>
              ${data.clusters.map(c => `<option value="${c.id}">${esc(c.short)}</option>`).join('')}
            </select>
            <button class="small-btn" type="button" data-map-zoom="in">Acercar</button>
            <button class="small-btn" type="button" data-map-zoom="out">Alejar</button>
            <button class="small-btn" type="button" data-map-reset>Restablecer</button>
            <button class="small-btn" type="button" data-fullscreen="#networkStage">Pantalla completa</button>
          </div>
          <div class="map-layout">
            <div id="networkStage" class="map-stage" aria-label="Mapa interactivo reconstruido">
              <svg id="networkSvg" class="network-svg" viewBox="0 0 1200 800" role="img" aria-label="Red interactiva de términos NTN"></svg>
            </div>
            <aside class="map-side">
              <div id="nodeDetail" class="detail-card"></div>
              <div class="detail-card">
                <h3>Clústeres visibles</h3>
                <div class="tag-row">
                  ${data.clusters.map(c => `<span class="tag" style="border-color:${c.color};color:${c.color}">${esc(c.short)}</span>`).join('')}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    `;
    bindMapEvents();
    initOriginalImagePanZoom();
    renderNodeDetail(null);
  }

  function bindMapEvents() {
    qsa('[data-map-mode]').forEach(btn => btn.addEventListener('click', () => {
      const mode = btn.dataset.mapMode;
      qsa('[data-map-mode]').forEach(b => b.classList.toggle('active', b === btn));
      qs('#originalMap').classList.toggle('hidden', mode !== 'original');
      qs('#interactiveMap').classList.toggle('hidden', mode !== 'interactive');
      if (mode === 'interactive') drawNetworkMap();
    }));
    qs('#mapSearch').addEventListener('input', (e) => { mapState.query = e.target.value.trim().toLowerCase(); drawNetworkMap(); });
    qs('#clusterFilter').addEventListener('change', (e) => { mapState.filter = e.target.value; drawNetworkMap(); });
    qsa('[data-map-zoom]').forEach(btn => btn.addEventListener('click', () => {
      zoomNetwork(btn.dataset.mapZoom === 'in' ? 1.18 : 0.84);
    }));
    qs('[data-map-reset]').addEventListener('click', () => { mapState = { scale: 1, tx: 0, ty: 0, selected: null, filter: 'all', query: '' }; qs('#mapSearch').value = ''; qs('#clusterFilter').value = 'all'; drawNetworkMap(); renderNodeDetail(null); });
    qsa('[data-fullscreen]').forEach(btn => btn.addEventListener('click', () => {
      const el = qs(btn.dataset.fullscreen);
      if (el?.requestFullscreen) el.requestFullscreen().catch(() => {});
    }));
    initNetworkPanZoom();
  }

  function drawNetworkMap() {
    const svg = qs('#networkSvg');
    if (!svg) return;
    const visibleNodeIds = new Set(data.map.nodes.filter(n => {
      const clusterOk = mapState.filter === 'all' || String(n.cluster) === String(mapState.filter);
      const queryOk = !mapState.query || n.label.toLowerCase().includes(mapState.query);
      return clusterOk && queryOk;
    }).map(n => n.id));
    const relatedToSelected = new Set();
    if (mapState.selected) {
      relatedToSelected.add(mapState.selected);
      data.map.links.forEach(l => {
        if (l.source === mapState.selected) relatedToSelected.add(l.target);
        if (l.target === mapState.selected) relatedToSelected.add(l.source);
      });
    }
    const transform = `translate(${mapState.tx} ${mapState.ty}) scale(${mapState.scale})`;
    const linkMarkup = data.map.links.map(l => {
      const a = data.map.nodes.find(n => n.id === l.source);
      const b = data.map.nodes.find(n => n.id === l.target);
      if (!a || !b) return '';
      const visible = visibleNodeIds.has(a.id) && visibleNodeIds.has(b.id);
      const selectedDim = mapState.selected && !(relatedToSelected.has(a.id) && relatedToSelected.has(b.id));
      const cls = `link ${(!visible || selectedDim) ? 'dim' : ''}`;
      const width = Math.max(0.6, Math.min(6, Math.sqrt(l.strength) / 5));
      return `<line class="${cls}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke-width="${width}" data-link="${esc(a.id)}--${esc(b.id)}" />`;
    }).join('');
    const nodeMarkup = data.map.nodes.map(n => {
      const visible = visibleNodeIds.has(n.id);
      const selectedDim = mapState.selected && !relatedToSelected.has(n.id);
      const selected = mapState.selected === n.id;
      const cls = `node ${n.highlight ? 'highlight' : ''} ${selected ? 'selected' : ''} ${(!visible || selectedDim) ? 'dim' : ''}`;
      const r = Math.max(5, Math.min(24, n.size));
      return `<g class="${cls}" transform="translate(${n.x} ${n.y})" data-node-id="${esc(n.id)}" tabindex="0" role="button" aria-label="Nodo ${esc(n.label)}">
        <circle r="${r}" fill="${clusterColor(n.cluster)}"></circle>
        <text x="${r + 5}" y="4">${esc(n.label)}</text>
      </g>`;
    }).join('');
    svg.innerHTML = `<g id="networkGroup" transform="${transform}">${linkMarkup}${nodeMarkup}</g>`;
    qsa('.node', svg).forEach(node => {
      const selectNode = () => {
        mapState.selected = node.dataset.nodeId;
        renderNodeDetail(mapState.selected);
        drawNetworkMap();
      };
      node.addEventListener('click', selectNode);
      node.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectNode(); } });
    });
  }

  function renderNodeDetail(nodeId) {
    const panel = qs('#nodeDetail');
    if (!panel) return;
    if (!nodeId) {
      panel.innerHTML = `<h3>Selecciona un nodo</h3><p>Haz clic sobre un término del mapa para consultar su clúster, ocurrencias, fuerza total de enlace y conexiones principales.</p>`;
      return;
    }
    const node = data.map.nodes.find(n => n.id === nodeId);
    const links = data.map.links.filter(l => l.source === nodeId || l.target === nodeId)
      .sort((a, b) => b.strength - a.strength).slice(0, 10)
      .map(l => ({ term: l.source === nodeId ? l.target : l.source, strength: l.strength }));
    panel.innerHTML = `
      <span class="pill" style="color:${clusterColor(node.cluster)};border-color:${clusterColor(node.cluster)}">${esc(clusterName(node.cluster))}</span>
      <h3>${esc(node.label)}</h3>
      <div class="detail-stat">
        <div><strong>${fmt.format(node.occurrences)}</strong><span>ocurrencias</span></div>
        <div><strong>${fmt.format(node.totalLinkStrength)}</strong><span>fuerza total</span></div>
      </div>
      <h4>Principales conexiones</h4>
      <div class="connection-list">
        ${links.map(l => `<div class="connection-row"><span>${esc(l.term)}</span><strong>${fmt.format(l.strength)}</strong></div>`).join('') || '<p>No se encontraron enlaces dentro del conjunto seleccionado.</p>'}
      </div>
    `;
  }

  function zoomNetwork(factor) {
    mapState.scale = Math.max(0.45, Math.min(3.5, mapState.scale * factor));
    drawNetworkMap();
  }

  function initNetworkPanZoom() {
    const stage = qs('#networkStage');
    if (!stage) return;
    let dragging = false;
    let last = { x: 0, y: 0 };
    stage.addEventListener('wheel', e => {
      e.preventDefault();
      zoomNetwork(e.deltaY < 0 ? 1.08 : 0.92);
    }, { passive: false });
    stage.addEventListener('pointerdown', e => {
      if (e.target.closest('.node')) return;
      dragging = true;
      last = { x: e.clientX, y: e.clientY };
      stage.setPointerCapture(e.pointerId);
    });
    stage.addEventListener('pointermove', e => {
      if (!dragging) return;
      mapState.tx += e.clientX - last.x;
      mapState.ty += e.clientY - last.y;
      last = { x: e.clientX, y: e.clientY };
      drawNetworkMap();
    });
    stage.addEventListener('pointerup', e => { dragging = false; try { stage.releasePointerCapture(e.pointerId); } catch (_) {} });
    stage.addEventListener('pointercancel', () => { dragging = false; });
  }

  function initOriginalImagePanZoom() {
    const stage = qs('#originalStage');
    const img = qs('#originalMapImage');
    if (!stage || !img) return;
    const apply = () => { img.style.transform = `translate(${imageState.tx}px, ${imageState.ty}px) scale(${imageState.scale})`; };
    qsa('[data-img-zoom]').forEach(btn => btn.addEventListener('click', () => {
      imageState.scale = Math.max(0.6, Math.min(4, imageState.scale * (btn.dataset.imgZoom === 'in' ? 1.2 : 0.84)));
      apply();
    }));
    qs('[data-img-reset]').addEventListener('click', () => { imageState = { scale: 1, tx: 0, ty: 0 }; apply(); });
    stage.addEventListener('wheel', e => {
      e.preventDefault();
      imageState.scale = Math.max(0.6, Math.min(4, imageState.scale * (e.deltaY < 0 ? 1.08 : 0.92)));
      apply();
    }, { passive: false });
    let dragging = false;
    let last = { x: 0, y: 0 };
    stage.addEventListener('pointerdown', e => { dragging = true; last = { x: e.clientX, y: e.clientY }; stage.setPointerCapture(e.pointerId); });
    stage.addEventListener('pointermove', e => {
      if (!dragging) return;
      imageState.tx += e.clientX - last.x;
      imageState.ty += e.clientY - last.y;
      last = { x: e.clientX, y: e.clientY };
      apply();
    });
    stage.addEventListener('pointerup', e => { dragging = false; try { stage.releasePointerCapture(e.pointerId); } catch (_) {} });
    stage.addEventListener('pointercancel', () => { dragging = false; });
  }

  function renderClusters() {
    qs('#clusters').innerHTML = `
      ${sectionHead('Clústeres temáticos del mapa', 'Cada clúster resume una línea de investigación y muestra por qué es importante para comunicaciones digitales y redes NTN.')}
      <div class="card-grid">
        ${data.clusters.map(cluster => `
          <article class="glass-card cluster-card" style="--cluster:${cluster.color}">
            <div class="cluster-top"><span class="cluster-dot"></span><span class="pill">Clúster ${cluster.id}</span></div>
            <h3>${esc(cluster.name)}</h3>
            <p>${esc(cluster.explanation)}</p>
            <p><strong>Enfoque técnico:</strong> ${esc(cluster.focus)}</p>
            <p><strong>Dentro de NTN:</strong> ${esc(cluster.meaning)}</p>
            <p><strong>Importancia:</strong> ${esc(cluster.importance)}</p>
            <div class="tag-row">${cluster.terms.slice(0, 8).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          </article>
        `).join('')}
      </div>
    `;
  }

  function renderTermAnalysis() {
    qs('#palabras').innerHTML = `
      ${sectionHead('Análisis por palabras seleccionadas', 'Cada tarjeta incluye clúster, ocurrencias, fuerza total de enlace, diez conexiones principales, interpretación técnica y conclusión corta.')}
      <div class="term-toolbar">
        <input id="termSearch" type="search" placeholder="Buscar palabra: Doppler, LEO, QoS" aria-label="Buscar palabra analizada">
        <select id="termClusterFilter" class="select" aria-label="Filtrar palabras por clúster">
          <option value="all">Todos los clústeres</option>
          ${data.clusters.map(c => `<option value="${c.id}">${esc(c.short)}</option>`).join('')}
        </select>
      </div>
      <div id="termList" class="term-list"></div>
    `;
    qs('#termSearch').addEventListener('input', renderTermsList);
    qs('#termClusterFilter').addEventListener('change', renderTermsList);
    renderTermsList();
  }

  function renderTermsList() {
    const list = qs('#termList');
    if (!list) return;
    const query = qs('#termSearch')?.value.trim().toLowerCase() || '';
    const filter = qs('#termClusterFilter')?.value || 'all';
    const terms = data.selectedTerms.filter(t => {
      const okText = !query || t.term.toLowerCase().includes(query) || t.topLinks.some(l => l.term.toLowerCase().includes(query));
      const okCluster = filter === 'all' || String(t.cluster) === String(filter);
      return okText && okCluster;
    });
    list.innerHTML = terms.map((term, idx) => `
      <article class="term-card">
        <details ${idx === 0 ? 'open' : ''}>
          <summary>
            <div>
              <span class="pill" style="color:${clusterColor(term.cluster)};border-color:${clusterColor(term.cluster)}">${esc(clusterName(term.cluster))}</span>
              <h3>${esc(term.term)}</h3>
            </div>
            <span>Ver análisis</span>
          </summary>
          <div class="term-body">
            <div class="detail-stat">
              <div><strong>${fmt.format(term.occurrences)}</strong><span>ocurrencias</span></div>
              <div><strong>${fmt.format(term.totalLinkStrength)}</strong><span>fuerza total de enlace</span></div>
            </div>
            <h4>10 enlaces principales</h4>
            <div class="connection-list">
              ${term.topLinks.map(link => `<div class="connection-row"><span>${esc(link.term)} <small style="color:${clusterColor(link.cluster)}">${esc(clusterById(link.cluster)?.short || '')}</small></span><strong>${fmt.format(link.strength)}</strong></div>`).join('')}
            </div>
            <h4>Interpretación técnica</h4>
            <p>${esc(term.interpretation)}</p>
            <h4>Conclusión</h4>
            <p>${esc(term.conclusion)}</p>
          </div>
        </details>
      </article>
    `).join('') || `<div class="notice">No se encontraron términos con el filtro seleccionado.</div>`;
  }

  function renderMiniCase() {
    qs('#mini-caso').innerHTML = `
      ${sectionHead('Mini-caso técnico: link budget LEO con Doppler', 'El caso aterriza el análisis bibliométrico a un enlace LEO hacia un gateway urbano y permite modificar variables de entrada para observar cómo cambia el desempeño del enlace.')} 
      <div class="mini-grid">
        <div class="panel-card calculator">
          <h3>Variables de entrada</h3>
          ${numInput('freqGHz', 'Frecuencia de operación (GHz)', 2.0, 0.4, 40, 0.1)}
          ${numInput('heightKm', 'Altura del satélite LEO (km)', 600, 300, 1500, 10)}
          ${numInput('txPowerDbm', 'Potencia transmitida (dBm)', 43, 0, 70, 1)}
          ${numInput('gainDb', 'Ganancia total Tx + Rx (dBi)', 38, 0, 80, 1)}
          ${numInput('lossDb', 'Pérdidas adicionales (dB)', 4, 0, 40, 0.5)}
          ${numInput('thresholdDbm', 'Umbral mínimo requerido (dBm)', -105, -140, -40, 1)}
          <button id="calcBtn" type="button" class="btn primary">Calcular enlace</button>
        </div>
        <div class="panel-card">
          <h3>Resultados calculados</h3>
          <div id="resultGrid" class="result-grid"></div>
          <div id="linkStatus" class="status-box"></div>
          <div class="bar-chart" aria-label="Visualización de magnitudes del enlace">
            <div class="bar-row"><span>FSPL</span><div class="bar-track"><div id="barFspl" class="bar-fill"></div></div><strong id="barFsplVal"></strong></div>
            <div class="bar-row"><span>Margen</span><div class="bar-track"><div id="barMargin" class="bar-fill"></div></div><strong id="barMarginVal"></strong></div>
            <div class="bar-row"><span>Doppler</span><div class="bar-track"><div id="barDoppler" class="bar-fill"></div></div><strong id="barDopplerVal"></strong></div>
          </div>
        </div>
      </div>

      <div class="simulation-grid">
        <div class="panel-card simulation-card">
          <div class="simulation-head">
            <div>
              <span class="kicker">Simulación visual</span>
              <h3>Enlace LEO hacia gateway urbano</h3>
            </div>
            <span id="simBadge" class="sim-badge">Calculando</span>
          </div>
          <svg id="linkSimulation" class="link-simulation" viewBox="0 0 760 420" role="img" aria-label="Simulación visual del enlace satelital LEO">
            <defs>
              <linearGradient id="beamGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stop-color="#38dfff" stop-opacity="0.72" />
                <stop offset="100%" stop-color="#5eead4" stop-opacity="0.15" />
              </linearGradient>
              <radialGradient id="earthGrad" cx="50%" cy="48%" r="65%">
                <stop offset="0%" stop-color="#164e63" />
                <stop offset="100%" stop-color="#07111f" />
              </radialGradient>
            </defs>
            <path class="sim-orbit" d="M90 285 C225 62 535 62 670 285" />
            <path id="simBeam" class="sim-beam" d="M380 96 L284 318 L476 318 Z" />
            <line id="simLink" class="sim-link" x1="380" y1="96" x2="380" y2="318" />
            <circle id="simWave1" class="sim-wave" cx="380" cy="318" r="34" />
            <circle id="simWave2" class="sim-wave two" cx="380" cy="318" r="64" />
            <circle id="simWave3" class="sim-wave three" cx="380" cy="318" r="94" />
            <g id="simSatellite" class="sim-satellite" transform="translate(380 96)">
              <rect x="-30" y="-14" width="60" height="28" rx="8" />
              <rect x="-66" y="-10" width="28" height="20" rx="4" />
              <rect x="38" y="-10" width="28" height="20" rx="4" />
              <circle cx="0" cy="0" r="8" />
              <text x="0" y="-26" text-anchor="middle">LEO</text>
            </g>
            <g class="sim-city">
              <path d="M0 344 C120 316 252 322 380 318 C520 314 630 320 760 342 L760 420 L0 420 Z" fill="url(#earthGrad)" />
              <rect x="328" y="286" width="24" height="48" rx="4" />
              <rect x="358" y="266" width="28" height="68" rx="4" />
              <rect x="392" y="296" width="22" height="38" rx="4" />
              <path d="M380 258 L380 316 M360 278 L400 278 M370 262 L390 262" class="gateway-tower" />
              <text x="380" y="362" text-anchor="middle">Gateway urbano</text>
            </g>
            <text id="simAltitude" class="sim-label" x="38" y="40">Altura: -- km</text>
            <text id="simFrequency" class="sim-label" x="38" y="68">Frecuencia: -- GHz</text>
            <text id="simMargin" class="sim-label" x="520" y="40">Margen: -- dB</text>
            <text id="simDoppler" class="sim-label" x="520" y="68">Doppler: -- kHz</text>
          </svg>
        </div>
        <div class="panel-card simulation-notes">
          <h3>¿Qué cambia al mover las variables?</h3>
          <div id="simNarrative" class="sim-narrative"></div>
          <div class="sensitivity-bars">
            <div><span>Potencia recibida</span><div class="bar-track"><div id="simPrxBar" class="bar-fill"></div></div></div>
            <div><span>Reserva de margen</span><div class="bar-track"><div id="simReserveBar" class="bar-fill"></div></div></div>
            <div><span>Exigencia Doppler</span><div class="bar-track"><div id="simDopplerBar" class="bar-fill"></div></div></div>
          </div>
        </div>
      </div>

      <div class="card-grid two">
        ${infoCard('Supuestos del cálculo', 'Se usa una distancia mínima aproximada igual a la altura del satélite para un pase cercano a cenit. La pérdida de espacio libre se calcula con frecuencia en GHz y distancia en km. El Doppler se estima con velocidad orbital circular simplificada.')}
        ${infoCard('Decisión técnica', 'Si el margen es positivo y suficientemente amplio, el enlace tiene mayor probabilidad de sostener el servicio. Si el margen es bajo o negativo, un ingeniero revisaría potencia, ganancias, modulación, codificación, pérdidas y compensación Doppler.')}
      </div>
    `;
    qs('#calcBtn').addEventListener('click', calculateLinkBudget);
    qsa('#mini-caso input').forEach(input => input.addEventListener('input', calculateLinkBudget));
    calculateLinkBudget();
  }

  function numInput(id, label, value, min, max, step) {
    return `<div class="input-row"><label for="${id}">${esc(label)}</label><input id="${id}" type="number" value="${value}" min="${min}" max="${max}" step="${step}"></div>`;
  }

  function calculateLinkBudget() {
    const get = id => Number(qs(`#${id}`)?.value || 0);
    if (!qs('#resultGrid')) return;
    const fGHz = get('freqGHz');
    const hKm = get('heightKm');
    const pTx = get('txPowerDbm');
    const gain = get('gainDb');
    const loss = get('lossDb');
    const threshold = get('thresholdDbm');
    const fspl = 92.45 + 20 * Math.log10(Math.max(hKm, 1)) + 20 * Math.log10(Math.max(fGHz, 0.001));
    const prx = pTx + gain - loss - fspl;
    const margin = prx - threshold;
    const earthRadius = 6371e3;
    const mu = 3.986004418e14;
    const c = 299792458;
    const v = Math.sqrt(mu / (earthRadius + hKm * 1000));
    const doppler = (v / c) * fGHz * 1e9;
    const status = margin >= 10 ? 'Enlace viable con margen cómodo' : margin >= 0 ? 'Enlace viable, pero sensible a pérdidas' : 'Enlace no viable con los parámetros actuales';
    const decision = margin >= 10 ? 'Mantener parámetros y verificar compensación Doppler en el receptor.' : margin >= 0 ? 'Aumentar margen mediante ganancia, codificación robusta o reducción de pérdidas.' : 'Revisar potencia, antenas, frecuencia, pérdidas y umbral antes de implementar.';
    qs('#resultGrid').innerHTML = [
      ['Pérdida de espacio libre', `${fspl.toFixed(2)} dB`],
      ['Potencia recibida', `${prx.toFixed(2)} dBm`],
      ['Margen del enlace', `${margin.toFixed(2)} dB`],
      ['Doppler máximo estimado', `${(doppler/1000).toFixed(2)} kHz`]
    ].map(([label, value]) => `<div class="result-card"><strong>${value}</strong><span>${label}</span></div>`).join('');
    qs('#linkStatus').className = `status-box ${statusClass(margin)}`;
    qs('#linkStatus').innerHTML = `<h3>${esc(status)}</h3><p><strong>Interpretación:</strong> La señal recibida queda en ${prx.toFixed(2)} dBm frente a un umbral de ${threshold.toFixed(2)} dBm. <strong>Decisión:</strong> ${esc(decision)}</p>`;
    setBar('barFspl', 'barFsplVal', fspl, 180, `${fspl.toFixed(0)} dB`);
    setBar('barMargin', 'barMarginVal', Math.max(0, margin + 20), 60, `${margin.toFixed(1)} dB`);
    setBar('barDoppler', 'barDopplerVal', doppler / 1000, 120, `${(doppler/1000).toFixed(1)} kHz`);
    updateLinkSimulation({ fGHz, hKm, pTx, gain, loss, threshold, fspl, prx, margin, doppler });
  }

  function statusClass(margin) {
    if (margin >= 10) return 'status-good';
    if (margin >= 0) return 'status-warn';
    return 'status-bad';
  }

  function updateLinkSimulation(values) {
    const svg = qs('#linkSimulation');
    if (!svg) return;
    const { fGHz, hKm, loss, threshold, fspl, prx, margin, doppler } = values;
    const satY = 118 - ((hKm - 300) / 1200) * 58;
    const beamHalf = 72 + ((hKm - 300) / 1200) * 86;
    const sat = qs('#simSatellite');
    const beam = qs('#simBeam');
    const link = qs('#simLink');
    if (sat) sat.setAttribute('transform', `translate(380 ${satY.toFixed(1)})`);
    if (beam) beam.setAttribute('d', `M380 ${satY.toFixed(1)} L${(380 - beamHalf).toFixed(1)} 318 L${(380 + beamHalf).toFixed(1)} 318 Z`);
    if (link) {
      link.setAttribute('y1', satY.toFixed(1));
      link.setAttribute('y2', '318');
    }
    const className = `link-simulation ${statusClass(margin)}`;
    svg.setAttribute('class', className);
    qs('#simAltitude').textContent = `Altura: ${hKm.toFixed(0)} km`;
    qs('#simFrequency').textContent = `Frecuencia: ${fGHz.toFixed(1)} GHz`;
    qs('#simMargin').textContent = `Margen: ${margin.toFixed(1)} dB`;
    qs('#simDoppler').textContent = `Doppler: ${(doppler/1000).toFixed(1)} kHz`;
    const badge = qs('#simBadge');
    if (badge) {
      badge.className = `sim-badge ${statusClass(margin)}`;
      badge.textContent = margin >= 10 ? 'Enlace robusto' : margin >= 0 ? 'Margen justo' : 'Revisar diseño';
    }
    const altitudeEffect = hKm > 900 ? 'Al aumentar la altura, crece la distancia de propagación y la pérdida de espacio libre.' : 'Con una altura LEO moderada, la trayectoria es más corta y el retardo tiende a ser menor.';
    const freqEffect = fGHz > 10 ? 'Una frecuencia alta incrementa la pérdida de espacio libre y vuelve más crítica la alineación del enlace.' : 'Una frecuencia baja o media reduce la pérdida frente a bandas más altas, aunque depende del ancho de banda requerido.';
    const marginEffect = margin >= 10 ? 'El margen actual deja reserva para pérdidas adicionales, lluvia moderada o variaciones de apuntuntamiento.' : margin >= 0 ? 'El enlace funciona, pero pequeñas pérdidas pueden dejarlo cerca del umbral.' : 'El margen negativo indica que el gateway no recibiría señal suficiente bajo estos supuestos.';
    qs('#simNarrative').innerHTML = `
      <p><strong>Lectura del escenario:</strong> ${esc(altitudeEffect)} ${esc(freqEffect)}</p>
      <p><strong>Estado:</strong> ${esc(marginEffect)} La pérdida calculada es ${fspl.toFixed(1)} dB, la potencia recibida es ${prx.toFixed(1)} dBm y el umbral es ${threshold.toFixed(1)} dBm.</p>
      <p><strong>Doppler:</strong> la estimación llega a ${(doppler/1000).toFixed(1)} kHz; por eso el receptor debe compensar desplazamientos de frecuencia, especialmente en enlaces LEO.</p>
    `;
    setBar('simPrxBar', null, Math.max(0, prx + 140), 120, '');
    setBar('simReserveBar', null, Math.max(0, margin + 20), 60, '');
    setBar('simDopplerBar', null, doppler / 1000, 160, '');
  }

  function setBar(id, valId, value, max, label) {
    const bar = qs(`#${id}`);
    if (!bar) return;
    bar.style.width = `${Math.max(4, Math.min(100, (value / max) * 100))}%`;
    if (valId) {
      const val = qs(`#${valId}`);
      if (val) val.textContent = label;
    }
  }

  function renderReflection() {
    const path = [
      ['01', 'Explorar', 'Partimos de una cadena de búsqueda NTN y de fuentes académicas para delimitar el tema sin quedarnos solo con una definición general.'],
      ['02', 'Depurar', 'Separar términos útiles de ruido bibliométrico nos obligó a justificar decisiones y a entender qué conceptos aportaban realmente al análisis.'],
      ['03', 'Interpretar', 'Los clústeres permitieron leer el mapa como una red de relaciones técnicas: cobertura, satélites, canal, recursos, movilidad y calidad de servicio.'],
      ['04', 'Aplicar', 'El mini-caso de enlace LEO aterrizó la revisión a variables de ingeniería como pérdidas, potencia recibida, margen y Doppler.']
    ];
    qs('#reflexion').innerHTML = `
      ${sectionHead('Reflexión metacognitiva SO7', 'Esta sección muestra cómo el equipo aprendió, filtró, organizó y aplicó nuevo conocimiento sobre NTN.')}
      <div class="reflection-hero">
        <div>
          <span class="kicker">Aprendizaje autónomo aplicado</span>
          <h3>De leer artículos a tomar decisiones de ingeniería</h3>
          <p>El reto no consistió únicamente en describir NTN. El aprendizaje central fue convertir una revisión bibliométrica en una lectura técnica útil: identificar conceptos fuertes, interpretar relaciones y comprobar cómo esas ideas influyen en un enlace LEO hacia un gateway urbano.</p>
        </div>
        <div class="reflection-orbit" aria-hidden="true">
          <span>SO7</span>
          <i></i><i></i><i></i>
        </div>
      </div>

      <div class="learning-path">
        ${path.map(([num, title, body]) => `
          <article class="learning-step">
            <strong>${esc(num)}</strong>
            <h3>${esc(title)}</h3>
            <p>${esc(body)}</p>
          </article>
        `).join('')}
      </div>

      <div class="reflection-mosaic">
        <article class="reflection-card accent-cyan">
          <span>Lo aprendido</span>
          <h3>NTN es integración, no solo satélites</h3>
          <p>Comprendimos que una red no terrestre combina plataformas espaciales o aéreas con infraestructura terrestre, gestión de movilidad, calidad de servicio y condiciones variables del canal.</p>
        </article>
        <article class="reflection-card accent-green">
          <span>Estrategia útil</span>
          <h3>Leer el mapa por relaciones</h3>
          <p>El mapa VOSviewer fue más claro cuando no miramos términos aislados, sino conexiones: qué palabras aparecen juntas, qué clúster forman y qué problema técnico representan.</p>
        </article>
        <article class="reflection-card accent-amber">
          <span>Dificultad</span>
          <h3>Distinguir ruido de conceptos fuertes</h3>
          <p>Algunas palabras eran frecuentes pero demasiado generales. La depuración ayudó a seleccionar términos con valor técnico para explicar cobertura, Doppler, handover, canal y recursos.</p>
        </article>
        <article class="reflection-card accent-purple">
          <span>Transferencia</span>
          <h3>Del análisis al mini-caso</h3>
          <p>La calculadora de link budget mostró que modificar frecuencia, altura, ganancias o pérdidas cambia el margen del enlace y, por tanto, la decisión técnica del sistema.</p>
        </article>
      </div>

      <div class="so7-panel">
        <div>
          <h3>Relación directa con ABET SO7</h3>
          <p>La bibliometría evidencia selección autónoma y síntesis; el mini-caso evidencia aplicación del conocimiento; y esta reflexión evidencia cómo evaluamos estrategias, dificultades y próximos pasos de aprendizaje.</p>
        </div>
        <div class="so7-badge-row">
          <span>ID1 Información</span>
          <span>ID2 Síntesis</span>
          <span>ID3 Aplicación</span>
          <span>ID5 Rigor</span>
        </div>
      </div>
    `;
  }

  function renderSources() {
    const annexes = data.annexes || [];
    qs('#fuentes').innerHTML = `
      ${sectionHead('Fuentes consultadas, referencias y anexos', 'Esta sección separa las referencias académicas en formato IEEE de los anexos y recursos propios usados para construir el BlogDPC.')}

      <div class="source-intro-grid">
        <article class="source-intro-card ref-card">
          <span>01</span>
          <h3>Referencias bibliográficas</h3>
          <p>Son artículos, estándares y fuentes académicas citadas en formato IEEE. Sirven para sustentar el contenido técnico sobre NTN, 5G/6G, satélites, VOSviewer y comunicaciones digitales.</p>
        </article>
        <article class="source-intro-card annex-card">
          <span>02</span>
          <h3>Anexos y recursos del proyecto</h3>
          <p>Son documentos guía, mapa, datos y evidencias utilizadas para desarrollar esta entrega. No se mezclan con la lista IEEE porque cumplen una función de soporte y trazabilidad.</p>
        </article>
      </div>

      <div class="panel-card">
        <h3>Artículos destacados de la revisión</h3>
        <p class="reference-note">Estos artículos provienen de la revisión bibliométrica y se muestran como lectura destacada. Cuando existe DOI, el título y el botón abren la fuente externa correspondiente.</p>
        <table class="article-table">
          <thead><tr><th>Año</th><th>Título</th><th>Fuente</th><th>Citas</th><th>Enlace</th></tr></thead>
          <tbody>
            ${data.sourceArticles.map(a => {
              const url = a.url || (a.doi ? `https://doi.org/${a.doi}` : '');
              return `<tr><td>${esc(a.year)}</td><td>${url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(a.title)}</a>` : esc(a.title)}</td><td>${esc(a.source)}</td><td>${fmt.format(a.citedBy)}</td><td>${url ? `<a class="source-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">Abrir</a>` : '—'}</td></tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>

      <div class="panel-card references-panel">
        <div class="panel-title-row">
          <div>
            <span class="eyebrow">Bibliografía</span>
            <h3>Referencias IEEE con enlaces</h3>
          </div>
          <span class="count-pill">${data.references.length} referencias</span>
        </div>
        <p class="reference-note">Aquí solo aparecen fuentes bibliográficas. Los documentos del reto y archivos de apoyo se ubican abajo, en Anexos del proyecto.</p>
        <div class="references">
          ${data.references.map(ref => {
            const item = typeof ref === 'string' ? { text: ref, url: doiUrlFromText(ref), label: 'Abrir referencia' } : ref;
            return `<article class="reference-item"><p>${esc(item.text || '')}</p>${item.url ? `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label || 'Abrir referencia')}</a>` : ''}</article>`;
          }).join('')}
        </div>
      </div>

      <div class="panel-card annex-panel">
        <div class="panel-title-row">
          <div>
            <span class="eyebrow">Trazabilidad</span>
            <h3>Anexos del proyecto</h3>
          </div>
          <span class="count-pill annex-count">${annexes.length} anexos</span>
        </div>
        <p class="reference-note">Estos elementos respaldan la entrega, pero no son referencias bibliográficas IEEE. Se presentan aparte para evitar confundir fuentes académicas con documentos guía o recursos de trabajo.</p>
        <div class="annex-grid">
          ${annexes.map(item => `
            <article class="annex-item">
              <div class="annex-code">${esc(item.code)}</div>
              <div>
                <h4>${esc(item.title)}</h4>
                <p>${esc(item.description)}</p>
                ${item.url ? `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label || 'Abrir anexo')}</a>` : ''}
              </div>
            </article>
          `).join('')}
        </div>
      </div>

      <div class="card-grid two">
        <article class="glass-card">
          <h3>Compartir el BlogDPC</h3>
          <p>Estos botones permiten copiar el enlace local o abrir opciones de socialización académica cuando el sitio esté publicado.</p>
          <div class="action-row">
            <button id="copyLinkBtn" class="btn" type="button">Copiar enlace</button>
            <a class="btn" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a class="btn" href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer">ResearchGate</a>
          </div>
          <div id="copyStatus" class="notice hidden"></div>
        </article>
        <article class="glass-card">
          <h3>Retroalimentación del lector</h3>
          <form id="feedbackForm" class="feedback-form">
            <div class="rating-row" aria-label="Calificación del blog">
              ${[1,2,3,4,5].map(n => `<button type="button" data-rating="${n}" class="${currentRating === n ? 'active' : ''}">${n}</button>`).join('')}
            </div>
            <textarea id="feedbackText" placeholder="Escribe una observación sobre claridad, mapa, mini-caso, referencias o anexos" aria-label="Comentario de retroalimentación">${esc(localStorage.getItem('ntn-feedback-text') || '')}</textarea>
            <button class="btn primary" type="submit">Guardar retroalimentación</button>
            <div id="feedbackStatus" class="notice hidden"></div>
          </form>
        </article>
      </div>
    `;
    bindSourcesEvents();
  }

  function doiUrlFromText(text) {
    const match = String(text || '').match(/doi:\s*([^.,;\s]+\/[A-Za-z0-9._;()/:+-]+)/i);
    return match ? `https://doi.org/${match[1].replace(/\.$/, '')}` : '';
  }

  function bindSourcesEvents() {
    qs('#copyLinkBtn')?.addEventListener('click', async () => {
      const status = qs('#copyStatus');
      const link = location.href.split('#')[0];
      try {
        await navigator.clipboard.writeText(link);
        status.textContent = 'Enlace copiado correctamente.';
      } catch (_) {
        status.textContent = `Enlace del sitio: ${link}`;
      }
      status.classList.remove('hidden');
    });
    qsa('[data-rating]').forEach(btn => btn.addEventListener('click', () => {
      currentRating = Number(btn.dataset.rating);
      localStorage.setItem('ntn-feedback-rating', String(currentRating));
      qsa('[data-rating]').forEach(b => b.classList.toggle('active', b === btn));
    }));
    qs('#feedbackForm')?.addEventListener('submit', e => {
      e.preventDefault();
      localStorage.setItem('ntn-feedback-text', qs('#feedbackText').value.trim());
      const status = qs('#feedbackStatus');
      status.textContent = 'Retroalimentación guardada localmente en este navegador.';
      status.classList.remove('hidden');
    });
  }

  function renderAssistantTab() {
    qs('#asistente').innerHTML = `
      ${sectionHead('Asistente IA local', 'El asistente funciona con JavaScript y una base de conocimiento del sitio. No usa claves privadas ni depende de backend.')}
      <div class="assistant-tab-card">
        <h3>Preguntas que puede responder</h3>
        <div class="tag-row">
          ${data.assistant.quickQuestions.map(q => `<button class="btn" type="button" data-ask="${esc(q)}">${esc(q)}</button>`).join('')}
        </div>
        <p style="margin-top:1rem">También puede explicar términos como NTN, LEO, Doppler, handover, QoS, mapa VOSviewer, metodología, mini-caso y equipo de trabajo.</p>
        <button class="btn primary" type="button" data-open-assistant>Conversar con el asistente</button>
      </div>
    `;
    qsa('[data-ask]').forEach(btn => btn.addEventListener('click', () => { openAssistant(false); askAssistant(btn.dataset.ask); }));
    qsa('[data-open-assistant]').forEach(btn => btn.addEventListener('click', () => openAssistant(false)));
  }

  function initAssistant() {
    qs('#assistantFloat').addEventListener('click', () => openAssistant(false));
    qs('#assistantClose').addEventListener('click', closeAssistant);
    qs('#assistantMinimize').addEventListener('click', () => {
      const panel = qs('#assistantPanel');
      panel.classList.toggle('minimized');
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
    });
    qs('#assistantForm').addEventListener('submit', e => {
      e.preventDefault();
      const input = qs('#assistantInput');
      const question = input.value.trim();
      if (!question) return;
      input.value = '';
      askAssistant(question);
    });
    qs('#assistantQuick').innerHTML = data.assistant.quickQuestions.map(q => `<button type="button" data-quick-question="${esc(q)}">${esc(q)}</button>`).join('');
    qsa('[data-quick-question]').forEach(btn => btn.addEventListener('click', () => askAssistant(btn.dataset.quickQuestion)));
    showAssistantMessage('bot', 'Hola. Soy el asistente local del proyecto NTN. Puedo ayudarte con el tema, el mapa, los clústeres, el mini-caso, la metodología, el equipo y las referencias y los anexos.');
  }

  function openAssistant(minimized = false) {
    const panel = qs('#assistantPanel');
    panel.classList.add('open');
    panel.classList.toggle('minimized', minimized);
    panel.setAttribute('aria-hidden', 'false');
    setTimeout(() => qs('#assistantInput')?.focus(), 120);
  }

  function closeAssistant() {
    const panel = qs('#assistantPanel');
    panel.classList.remove('open', 'minimized');
    panel.setAttribute('aria-hidden', 'true');
  }

  function showAssistantMessage(who, html) {
    const box = qs('#assistantMessages');
    if (!box) return;
    const msg = document.createElement('div');
    msg.className = `message ${who}`;
    msg.innerHTML = html;
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }

  function askAssistant(question) {
    openAssistant(false);
    showAssistantMessage('user', esc(question));
    const answer = answerQuestion(question);
    setTimeout(() => showAssistantMessage('bot', answer), 120);
  }

  function answerQuestion(question) {
    const original = String(question || '').trim();
    const q = normalize(original);
    if (!q) return 'Escríbeme una pregunta y te respondo con gusto.';

    const conversational = answerConversation(q);
    if (conversational) return conversational;

    const mathAnswer = answerSimpleMath(q);
    if (mathAnswer) return mathAnswer;

    const termOverview = answerTermOverview(q);
    if (termOverview) return termOverview;

    const termAnswer = answerTermQuestion(q, original);
    if (termAnswer) return termAnswer;

    const scored = data.assistant.knowledge.map(item => {
      const titleText = normalize(`${item.title} ${item.text} ${(item.tags || []).join(' ')}`);
      const tagScore = (item.tags || []).reduce((acc, tag) => {
        const nt = normalize(tag);
        return acc + (nt && q.includes(nt) ? 5 : 0);
      }, 0);
      const wordScore = titleText.split(' ').reduce((acc, word) => acc + (word.length > 3 && q.includes(word) ? 1 : 0), 0);
      return { item, score: tagScore + wordScore };
    }).sort((a, b) => b.score - a.score);

    if (scored[0] && scored[0].score >= 2) {
      const best = scored[0].item;
      const related = scored.slice(1, 3).filter(s => s.score > 1).map(s => s.item.title);
      return `<strong>${esc(best.title)}</strong><br>${esc(best.text)}${related.length ? `<br><br><small>También puedes revisar: ${related.map(esc).join(', ')}.</small>` : ''}`;
    }

    const general = answerGeneralQuestion(q, original);
    if (general) return general;

    return answerOpenQuestion(original);
  }

  function answerConversation(q) {
    const greetings = ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'hey', 'que tal', 'saludos', 'ola'];
    if (greetings.some(g => q === g || q.startsWith(`${g} `))) {
      return '¡Hola! Soy el asistente IA local de este BlogDPC sobre NTN. Puedo ayudarte a recorrer la página, explicar términos del mapa como LEO, Doppler, satellite o handover, interpretar el mini-caso, revisar referencias y anexos y también orientarte con preguntas generales. Si algo no está dentro del proyecto, te lo diré al final para no inventar evidencias.';
    }
    if (/(gracias|muchas gracias|te agradezco|perfecto|listo|excelente)/.test(q)) {
      return '¡Con gusto! Me alegra ayudarte. Puedes preguntarme por una palabra del mapa, por ejemplo LEO, Doppler shift, satellite, handover, QoS, coverage o 5G NR; también puedes pedirme un resumen del proyecto o una explicación del mini-caso.';
    }
    if (/(eres ia|eres inteligencia artificial|eres un asistente|que eres|quien eres|quién eres|como funcionas|cómo funcionas|que puedes hacer|qué puedes hacer|ayuda|ayudame|ayúdame)/.test(q)) {
      return '<strong>Sí: soy un asistente IA local integrado en la página.</strong><br>No soy un chat conectado a internet ni uso una clave privada en el navegador. Trabajo con una base de conocimiento incluida en el sitio, términos del mapa, datos del mini-caso y reglas de recuperación por palabras clave. Eso me permite responder con naturalidad sobre el proyecto y orientar preguntas generales, pero cuando una respuesta no esté sustentada por la información del BlogDPC lo aclararé con honestidad.';
    }
    if (/(adios|adiós|chao|hasta luego|nos vemos)/.test(q)) {
      return '¡Hasta luego! Para repasar rápido, te recomiendo volver al mapa interactivo o al mini-caso técnico: son las partes que mejor conectan bibliometría con ingeniería.';
    }
    return null;
  }

  function answerTermOverview(q) {
    const asksForWords = /(palabras|terminos|términos|nodos|conceptos|keywords|analisis por palabras|análisis por palabras)/.test(q);
    const asksForList = /(cuales|cuáles|lista|muestrame|muéstrame|principales|seleccionadas)/.test(q);
    if (!asksForWords || !asksForList) return null;
    const selected = (data.selectedTerms || []).slice(0, 20);
    const items = selected.map(t => `<li><strong>${esc(t.term)}</strong>: clúster ${esc(t.cluster)}, ${fmt.format(t.occurrences || 0)} ocurrencias y fuerza total de enlace ${fmt.format(t.totalLinkStrength || 0)}.</li>`).join('');
    return `<strong>Palabras analizadas en el proyecto</strong><br>Las palabras seleccionadas permiten conectar el mapa bibliométrico con la explicación técnica de NTN. Estas son las principales:<ul>${items}</ul><small>Puedes preguntarme por cualquiera de ellas, por ejemplo: “¿qué es LEO?”, “explícame Doppler shift” o “¿qué conexiones tiene satellite?”.</small>`;
  }

  function answerTermQuestion(q, original) {
    const match = findProjectTerm(q, original);
    if (!match) return null;
    return buildTermAnswer(match, q);
  }

  function findProjectTerm(q, original) {
    const candidates = collectTermCandidates();
    const alias = {
      'leo': ['LEO'],
      'orbita terrestre baja': ['LEO'],
      'órbita terrestre baja': ['LEO'],
      'baja orbita': ['LEO'],
      'baja órbita': ['LEO'],
      'doppler': ['Doppler shift'],
      'desplazamiento doppler': ['Doppler shift'],
      'ntn': ['NTN', 'non terrestrial network'],
      'red no terrestre': ['non terrestrial network', 'NTN'],
      'redes no terrestres': ['non terrestrial network', 'NTN'],
      'satellite': ['satellite'],
      'satelite': ['satellite'],
      'satélite': ['satellite'],
      'terrestrial network': ['terrestrial network'],
      'red terrestre': ['terrestrial network'],
      'handover': ['handover'],
      'traspaso': ['handover'],
      'qos': ['QoS'],
      'calidad de servicio': ['QoS'],
      '5g nr': ['5G NR'],
      '5g': ['5G NR'],
      'resource': ['resource'],
      'recursos': ['resource'],
      'coverage': ['coverage'],
      'cobertura': ['coverage'],
      'delay': ['delay'],
      'retardo': ['delay'],
      'interference': ['interference'],
      'interferencia': ['interference'],
      'channel': ['channel'],
      'canal': ['channel'],
      'haps': ['HAPS'],
      'uav': ['UAV'],
      'nb iot': ['NB-IoT'],
      'nbiot': ['NB-IoT'],
      'nb-iot': ['NB-IoT']
    };
    for (const [key, values] of Object.entries(alias)) {
      if (q.includes(normalize(key))) {
        const found = values.map(v => candidates.find(c => normalize(c.term) === normalize(v))).find(Boolean);
        if (found) return found;
      }
    }

    const exact = candidates.find(c => normalize(c.term) && q.includes(normalize(c.term)) && normalize(c.term).length >= 3);
    if (exact) return exact;

    const cleaned = normalize(original).split(' ').filter(w => w.length > 2 && !STOP_WORDS.has(w)).join(' ');
    if (cleaned) {
      const direct = candidates.find(c => normalize(c.term) === cleaned);
      if (direct) return direct;
    }
    return null;
  }

  function collectTermCandidates() {
    const map = new Map();
    (data.map?.nodes || []).forEach(n => {
      const key = normalize(n.label || n.id);
      if (!key) return;
      map.set(key, {
        term: n.label || n.id,
        cluster: n.cluster,
        occurrences: n.occurrences,
        totalLinkStrength: n.totalLinkStrength,
        topLinks: [],
        interpretation: '',
        conclusion: ''
      });
    });
    (data.selectedTerms || []).forEach(t => {
      const key = normalize(t.term);
      if (!key) return;
      map.set(key, { ...(map.get(key) || {}), ...t });
    });
    Object.entries(data.glossary || {}).forEach(([term, definition]) => {
      const key = normalize(term);
      map.set(key, { ...(map.get(key) || {}), term, definition });
    });
    return Array.from(map.values()).filter(t => t.term);
  }

  function buildTermAnswer(term, q) {
    const cluster = clusterById(term.cluster);
    const definition = term.definition || inferDefinition(term.term);
    const topLinks = Array.isArray(term.topLinks) ? term.topLinks.slice(0, 10) : getTopLinksForTerm(term.term, 10);
    const linkList = topLinks.length ? `<ol>${topLinks.map(l => `<li>${esc(l.term || l.target || l.source)} <small>fuerza ${fmt.format(l.strength || 0)}${l.cluster ? `, clúster ${esc(l.cluster)}` : ''}</small></li>`).join('')}</ol>` : '<p>No se registran enlaces principales para este término dentro del conjunto seleccionado.</p>';
    const stats = [
      term.cluster ? `clúster ${esc(term.cluster)}${cluster ? ` (${esc(cluster.short || cluster.name)})` : ''}` : null,
      Number.isFinite(Number(term.occurrences)) ? `${fmt.format(term.occurrences)} ocurrencias` : null,
      Number.isFinite(Number(term.totalLinkStrength)) ? `fuerza total de enlace ${fmt.format(term.totalLinkStrength)}` : null
    ].filter(Boolean).join(' · ');
    const wantsConnections = /(enlaces|conexiones|relaciones|fuerza|asociacion|asociación)/.test(q);
    const interpretation = term.interpretation || inferInterpretation(term.term);
    const conclusion = term.conclusion || 'Su importancia se interpreta por la forma en que conecta la explicación técnica de NTN con el resto de conceptos del mapa.';
    return `<strong>${esc(term.term)}</strong><br>${esc(definition)}${stats ? `<br><br><span class="pill">${stats}</span>` : ''}<br><br><strong>${wantsConnections ? 'Conexiones principales' : 'Lectura dentro del proyecto'}</strong>${linkList}<strong>Interpretación:</strong> ${esc(interpretation)}<br><br><strong>Conclusión:</strong> ${esc(conclusion)}`;
  }

  function getTopLinksForTerm(term, limit = 10) {
    const target = normalize(term);
    return (data.map?.links || [])
      .filter(l => normalize(l.source) === target || normalize(l.target) === target)
      .map(l => ({ term: normalize(l.source) === target ? l.target : l.source, strength: l.strength }))
      .sort((a, b) => Number(b.strength || 0) - Number(a.strength || 0))
      .slice(0, limit);
  }

  function inferDefinition(term) {
    const t = normalize(term);
    if (t.includes('leo')) return 'LEO significa Low Earth Orbit u órbita terrestre baja. En NTN se refiere a satélites cercanos a la Tierra que reducen el retardo, pero se mueven rápido y generan Doppler y handover frecuente.';
    if (t.includes('doppler')) return 'Doppler shift es el cambio aparente de frecuencia causado por el movimiento relativo entre el satélite y el terminal o gateway.';
    if (t.includes('handover')) return 'Handover es el proceso de cambio entre haz, celda, estación o satélite para mantener la continuidad del servicio.';
    if (t.includes('satellite')) return 'Satellite representa la plataforma espacial que permite extender cobertura cuando la infraestructura terrestre no alcanza o necesita apoyo.';
    if (t.includes('terrestrial')) return 'Terrestrial network representa la red terrestre tradicional que debe integrarse con NTN para dar continuidad de servicio.';
    if (t.includes('qos')) return 'QoS significa calidad de servicio y agrupa condiciones como retardo, confiabilidad, disponibilidad y desempeño del enlace.';
    if (t.includes('5g')) return '5G NR es la interfaz de radio de 5G; en NTN se estudia para conectar redes móviles con plataformas satelitales o aéreas.';
    if (t.includes('coverage')) return 'Coverage se refiere al alcance de servicio o zona en la que una red puede entregar conectividad.';
    if (t.includes('delay')) return 'Delay es el retardo de propagación, procesamiento o transmisión que afecta la experiencia y el diseño del enlace.';
    if (t.includes('resource')) return 'Resource se relaciona con la asignación de espectro, potencia, tiempo, frecuencia o capacidad de red.';
    if (t.includes('channel')) return 'Channel representa el medio de propagación radioeléctrico y sus efectos sobre la señal.';
    return 'Es un término registrado en el mapa bibliométrico del proyecto y se interpreta según su clúster, ocurrencias y conexiones.';
  }

  function inferInterpretation(term) {
    const t = normalize(term);
    if (t.includes('leo')) return 'En el mapa, LEO funciona como puente entre la arquitectura satelital y los retos de comunicaciones digitales: retardo, cobertura, Doppler y continuidad.';
    if (t.includes('doppler')) return 'Su presencia confirma que el movimiento orbital no es un detalle secundario: afecta la sincronización, la frecuencia recibida y la compensación del enlace.';
    if (t.includes('handover')) return 'Aparece como un reto de movilidad porque los satélites LEO y sus haces cambian rápidamente respecto al usuario o gateway.';
    if (t.includes('satellite')) return 'Es uno de los conceptos base del tema porque permite pasar de una red exclusivamente terrestre a una red extendida con cobertura espacial.';
    if (t.includes('terrestrial')) return 'Refuerza que NTN no se estudia aislada; su valor está en integrarse con la infraestructura celular existente.';
    if (t.includes('qos')) return 'Conecta el análisis bibliométrico con métricas de ingeniería: no basta con cobertura, también importa la calidad del servicio entregado.';
    return 'El término ayuda a explicar una línea de investigación dentro de NTN y su fuerza de enlace indica qué tan conectado está con otros conceptos del mapa.';
  }

  function answerSimpleMath(q) {
    const expr = q.replace(/,/g, '.').trim();
    if (!/^[0-9+\-*/().\s]+$/.test(expr) || !/[+\-*/]/.test(expr)) return null;
    try {
      const value = Function(`"use strict"; return (${expr})`)();
      if (!Number.isFinite(value)) return null;
      return `<strong>Resultado:</strong> ${esc(expr)} = <strong>${fmt.format(Number(value.toFixed(6)))}</strong><br><br><small>Esta operación no hace parte del análisis NTN, pero puedo resolver cálculos simples dentro del asistente local.</small>`;
    } catch (_) {
      return null;
    }
  }

  function answerGeneralQuestion(q, original) {
    const generalCards = [
      {
        tests: [/github pages|publicar|subir.*github|repositorio/],
        title: 'Publicación en GitHub Pages',
        text: 'Para publicar este sitio, sube la carpeta del proyecto a un repositorio, verifica que index.html esté en la raíz y activa GitHub Pages desde Settings > Pages usando la rama principal. Como el sitio es estático, no requiere backend ni instalación adicional.'
      },
      {
        tests: [/referencia|referencias|ieee|citar|citas|doi|enlace|links/],
        title: 'Referencias y enlaces',
        text: 'La página separa dos cosas: referencias bibliográficas y anexos. Las referencias IEEE son artículos, estándares y fuentes académicas con enlaces externos; los anexos son documentos guía, mapa y datos de soporte del proyecto, enlazados aparte para trazabilidad.'
      },
      {
        tests: [/resumen|resume|explicame la pagina|explícame la página|de que trata|de qué trata/],
        title: 'Resumen del proyecto',
        text: 'La página presenta una revisión académica sobre Non-Terrestrial Networks. Primero explica el tema NTN, luego muestra el análisis bibliométrico con VOSviewer, interpreta clústeres y palabras clave, aplica un mini-caso de link budget con Doppler y cierra con reflexión metacognitiva del Reto ABET SO7.'
      },
      {
        tests: [/universidad|uis|escuela|facultad|e3t/],
        title: 'Contexto institucional',
        text: 'El proyecto corresponde a estudiantes de Ingeniería Electrónica de la Universidad Industrial de Santander, en la Facultad de Ingenierías Físico-Mecánicas y la Escuela de Ingenierías Eléctrica, Electrónica y de Telecomunicaciones.'
      },
      {
        tests: [/como estudio|cómo estudio|aprender|estrategia|metacognicion|metacognición/],
        title: 'Estrategia de aprendizaje',
        text: 'Una forma efectiva de estudiar un tema nuevo es delimitar una pregunta guía, buscar fuentes confiables, extraer conceptos principales, organizar relaciones, aplicar el conocimiento en un caso pequeño y reflexionar sobre qué funcionó y qué faltó mejorar.'
      },
      {
        tests: [/dbm|decibel|db\b|ganancia|perdida|pérdida|potencia|frecuencia|umbral/],
        title: 'Variables de enlace',
        text: 'En comunicaciones, potencia, ganancia y pérdidas suelen expresarse en dB o dBm para facilitar sumas y restas del presupuesto de enlace. En el mini-caso, esas variables cambian la potencia recibida y el margen frente al umbral requerido.'
      }
    ];
    const card = generalCards.find(c => c.tests.some(rx => rx.test(q)));
    if (!card) return null;
    return `<strong>${esc(card.title)}</strong><br>${esc(card.text)}<br><br><small>Nota: esta respuesta se ofrece como orientación del asistente. Cuando aplica directamente al proyecto, se conecta con las pestañas del BlogDPC; cuando es una duda externa, debe verificarse con fuentes adicionales.</small>`;
  }

  function answerOpenQuestion(original) {
    const clean = esc(original);
    return `<strong>Respuesta abierta</strong><br>Puedo orientarte, pero no encontré una coincidencia directa para “${clean}” dentro de la base del proyecto. En una entrega académica conviene tratar esa pregunta como información externa: responderla con una fuente verificable y luego decidir si aporta o no al análisis NTN.<br><br><strong>Conclusión:</strong> esa pregunta no fue un aspecto desarrollado dentro del BlogDPC. Para mantener rigor, no la presentaría como evidencia del mapa, los clústeres o el mini-caso, aunque sí puedo ayudarte a conectarla si la relacionas con comunicaciones digitales, satélites, 5G/6G, link budget o aprendizaje autónomo.`;
  }

  const STOP_WORDS = new Set(['que', 'qué', 'cual', 'cuál', 'como', 'cómo', 'dime', 'explica', 'explicame', 'explícame', 'sobre', 'del', 'de', 'la', 'el', 'los', 'las', 'un', 'una', 'por', 'para', 'con', 'tiene', 'tienen', 'significa', 'es']);

  function normalize(text) {
    return String(text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9ñ\s-]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
