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
    qs('#tema').innerHTML = `
      ${sectionHead('Tema central: Non-Terrestrial Networks', 'La prioridad del blog es explicar NTN como tendencia de comunicaciones digitales; VOSviewer se usa como medio para analizar literatura, no como tema principal.')}
      <div class="card-grid">
        ${infoCard('¿Qué son las NTN?', `Las Non-Terrestrial Networks son redes que incorporan plataformas no terrestres, como satélites LEO, HAPS y UAV, para complementar la infraestructura terrestre. Su propósito es ampliar cobertura, resiliencia y disponibilidad de servicios digitales.`)}
        ${infoCard('Relación con 5G-Advanced y 6G', `NTN se conecta con la evolución de 5G NR y 6G porque busca que la conectividad satelital sea parte del ecosistema móvil. Esto exige adaptar acceso radio, movilidad, sincronización, QoS y gestión de recursos.`)}
        ${infoCard('Papel de satélites LEO', `Los satélites LEO reducen la distancia de propagación frente a órbitas más altas. Esa ventaja mejora el retardo, pero su alta velocidad relativa introduce Doppler, cambios de cobertura y handover frecuente.`)}
      </div>
      <div class="panel-card">
        <h3>Conceptos que conectan el tema</h3>
        <p>El análisis se concentra en cobertura, movilidad, retardo, <button class="inline-gloss" data-glossary="Doppler">Doppler</button>, <button class="inline-gloss" data-glossary="Handover">handover</button>, calidad de servicio, canal, interferencia y arquitectura de red. Estos conceptos permiten pasar de una revisión bibliométrica a decisiones técnicas de ingeniería.</p>
        <div class="tag-row">
          ${['Cobertura rural','Conectividad marítima','Emergencias','IoT extendido','Gateway urbano','Continuidad TN/NTN','Calidad de servicio','Redes 6G'].map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="card-grid two">
        ${infoCard('Aplicaciones relevantes', 'NTN permite conectar zonas rurales, rutas marítimas, aeronaves, sensores de baja potencia y escenarios de desastre donde instalar infraestructura terrestre puede ser costoso, lento o imposible.')}
        ${infoCard('Reto de ingeniería', 'El valor de NTN no depende solo de tener cobertura. También se deben controlar pérdidas de propagación, interferencia, Doppler, retardo, handover y administración de recursos para que el servicio sea confiable.')}
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
      ${sectionHead('Equipo de trabajo', 'Tarjetas profesionales con fotografía, código, rol y aporte dentro del desarrollo académico del Reto ABET SO7.')}
      <div class="team-grid">
        ${data.team.map(member => `
          <article class="team-card">
            <img src="${esc(member.photo)}" alt="Fotografía de ${esc(member.name)}" loading="lazy">
            <h3>${esc(member.name)}</h3>
            <div class="code">Código ${esc(member.code)}</div>
            <div class="role">${esc(member.role)}</div>
            <p>${esc(member.contribution)}</p>
          </article>
        `).join('')}
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
      ${sectionHead('Mini-caso técnico: link budget LEO con Doppler', 'El caso aterriza el análisis bibliométrico a un enlace LEO hacia un gateway urbano y permite modificar variables de entrada para tomar una decisión técnica.')}
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
    qs('#linkStatus').innerHTML = `<h3>${esc(status)}</h3><p><strong>Interpretación:</strong> La señal recibida queda en ${prx.toFixed(2)} dBm frente a un umbral de ${threshold.toFixed(2)} dBm. <strong>Decisión:</strong> ${esc(decision)}</p>`;
    setBar('barFspl', 'barFsplVal', fspl, 180, `${fspl.toFixed(0)} dB`);
    setBar('barMargin', 'barMarginVal', Math.max(0, margin + 20), 60, `${margin.toFixed(1)} dB`);
    setBar('barDoppler', 'barDopplerVal', doppler / 1000, 120, `${(doppler/1000).toFixed(1)} kHz`);
  }

  function setBar(id, valId, value, max, label) {
    const bar = qs(`#${id}`);
    const val = qs(`#${valId}`);
    if (!bar || !val) return;
    bar.style.width = `${Math.max(4, Math.min(100, (value / max) * 100))}%`;
    val.textContent = label;
  }

  function renderReflection() {
    qs('#reflexion').innerHTML = `
      ${sectionHead('Reflexión metacognitiva SO7', 'Esta sección explica cómo el equipo adquirió, filtró, organizó y aplicó nuevo conocimiento sobre NTN.')}
      <div class="reflection-grid">
        <article class="quote-card">
          <h3>¿Qué aprendimos?</h3>
          <p>Aprendimos que NTN no se limita a conectar satélites. Es una integración compleja entre cobertura, movilidad, arquitectura de red, capa física y gestión de recursos. El mapa bibliométrico ayudó a ver que los términos fuertes no están aislados: forman relaciones que orientan el diseño técnico.</p>
        </article>
        <article class="quote-card">
          <h3>Estrategias que funcionaron</h3>
          <p>Funcionó partir de una cadena de búsqueda clara, depurar términos repetidos, leer los clústeres por significado técnico y escoger palabras que conectaran el análisis con el mini-caso. Esto evitó que el trabajo fuera solo una lista de artículos.</p>
        </article>
        <article class="quote-card">
          <h3>Dificultades encontradas</h3>
          <p>La principal dificultad fue diferenciar palabras generales de conceptos realmente útiles. También fue necesario conectar resultados bibliométricos, como fuerza de asociación y clústeres, con variables de ingeniería como pérdidas, margen, Doppler y continuidad de servicio.</p>
        </article>
        <article class="quote-card">
          <h3>Aporte a la formación</h3>
          <p>Como estudiantes de Ingeniería Electrónica, el ejercicio fortaleció la capacidad de aprender una tendencia tecnológica nueva, verificar fuentes, sintetizar relaciones y aplicar ese aprendizaje en una decisión técnica replicable.</p>
        </article>
      </div>
      <div class="panel-card">
        <h3>Relación entre bibliometría, mini-caso y SO7</h3>
        <p>La bibliometría permitió identificar conceptos dominantes; el mini-caso permitió aplicar esos conceptos; y la reflexión permitió reconocer cómo se aprendió. De esta manera, el blog evidencia selección autónoma de información, análisis y síntesis, transferencia del conocimiento, planificación y rigor académico.</p>
      </div>
    `;
  }

  function renderSources() {
    qs('#fuentes').innerHTML = `
      ${sectionHead('Fuentes consultadas y retroalimentación', 'Referencias en formato IEEE, artículos relevantes de NTN y espacio de interacción local para recoger opiniones del lector.')}
      <div class="panel-card">
        <h3>Artículos destacados de la revisión</h3>
        <table class="article-table">
          <thead><tr><th>Año</th><th>Título</th><th>Fuente</th><th>Citas</th></tr></thead>
          <tbody>
            ${data.sourceArticles.map(a => `<tr><td>${esc(a.year)}</td><td>${esc(a.title)}</td><td>${esc(a.source)}</td><td>${fmt.format(a.citedBy)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="panel-card">
        <h3>Referencias IEEE</h3>
        <div class="references">
          ${data.references.map(ref => `<div class="reference-item">${esc(ref)}</div>`).join('')}
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
            <textarea id="feedbackText" placeholder="Escribe una observación sobre claridad, mapa, mini-caso o fuentes" aria-label="Comentario de retroalimentación">${esc(localStorage.getItem('ntn-feedback-text') || '')}</textarea>
            <button class="btn primary" type="submit">Guardar retroalimentación</button>
            <div id="feedbackStatus" class="notice hidden"></div>
          </form>
        </article>
      </div>
    `;
    bindSourcesEvents();
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
    showAssistantMessage('bot', 'Hola. Soy el asistente local del proyecto NTN. Puedo ayudarte con el tema, el mapa, los clústeres, el mini-caso, la metodología, el equipo y las fuentes.');
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
    const q = normalize(question);
    const scored = data.assistant.knowledge.map(item => {
      const tagScore = item.tags.reduce((acc, tag) => acc + (q.includes(normalize(tag)) ? 4 : 0), 0);
      const wordScore = normalize(item.title + ' ' + item.text).split(' ').reduce((acc, word) => acc + (word.length > 3 && q.includes(word) ? 1 : 0), 0);
      return { item, score: tagScore + wordScore };
    }).sort((a, b) => b.score - a.score);
    if (!scored[0] || scored[0].score < 2) return esc(data.assistant.fallback);
    const best = scored[0].item;
    const related = scored.slice(1, 3).filter(s => s.score > 1).map(s => s.item.title);
    return `<strong>${esc(best.title)}</strong><br>${esc(best.text)}${related.length ? `<br><br><small>También puedes revisar: ${related.map(esc).join(', ')}.</small>` : ''}`;
  }

  function normalize(text) {
    return String(text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9ñ\s-]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
