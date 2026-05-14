const data = window.SITE_DATA;

const state = {
  tab: 'inicio',
  wordFilter: '',
  assistantOpen: false,
  map: {
    scale: 1,
    tx: 0,
    ty: 0,
    selectedId: 154,
    clusters: new Set((data.map?.clusters || []).map(cluster => cluster.id))
  },
  image: {
    scale: 1,
    x: 0,
    y: 0,
    dragging: false,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0
  }
};

const viewBox = { width: 1200, height: 820 };
const nodeMap = new Map((data.map?.nodes || []).map(node => [node.id, node]));
const adjacency = new Map();
const mapState = { positions: new Map(), dragging: false, dragStart: null };

(data.map?.edges || []).forEach(edge => {
  if (!adjacency.has(edge.source)) adjacency.set(edge.source, []);
  if (!adjacency.has(edge.target)) adjacency.set(edge.target, []);
  adjacency.get(edge.source).push({ id: edge.target, strength: edge.strength });
  adjacency.get(edge.target).push({ id: edge.source, strength: edge.strength });
});

function byId(id) { return document.getElementById(id); }
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
function formatNumber(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return '0';
  return new Intl.NumberFormat('es-CO').format(value);
}
function setText(id, value) {
  const el = byId(id);
  if (el) el.textContent = value;
}
function setHtml(id, html) {
  const el = byId(id);
  if (el) el.innerHTML = html;
}

function clusterMeta(clusterId) {
  return (data.map?.clusters || []).find(item => item.id === Number(clusterId));
}
function clusterColor(clusterId) {
  return clusterMeta(clusterId)?.color || '#67a6ff';
}
function clusterName(clusterId) {
  return clusterMeta(clusterId)?.name || 'Sin clúster';
}
function topMapNodes(limit = 8) {
  return [...(data.map?.nodes || [])].sort((a, b) => (b.occ || 0) - (a.occ || 0)).slice(0, limit);
}

function renderHero() {
  setText('heroEyebrow', data.meta.eyebrow);
  setText('heroTitle', data.meta.title);
  setText('heroSubtitle', data.meta.subtitle);
  setText('heroDeclaration', data.meta.declaration);

  setHtml('heroPoints', (data.meta.hero_points || []).map(item => `
    <div class="hero-point"><i></i><span>${escapeHtml(item)}</span></div>
  `).join(''));

  const heroStats = (data.kpis || []).slice(0, 4);
  setHtml('heroStats', heroStats.map(item => `
    <div class="hero-stat">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
    </div>
  `).join(''));
}

function renderOverview() {
  setHtml('kpiGrid', (data.kpis || []).map(item => `
    <article class="kpi-card">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
      <small>${escapeHtml(item.note)}</small>
    </article>
  `).join(''));

  setText('researchQuestion', data.research.question);
  setText('generalObjective', data.research.general_objective);

  setHtml('overviewHighlights', (data.highlights || []).map(item => `
    <div class="bullet-item">${escapeHtml(item)}</div>
  `).join(''));

  const yearMax = Math.max(...(data.method.year_series || []).map(item => item.count), 1);
  setHtml('yearChart', (data.method.year_series || []).map(item => `
    <div class="bar-row">
      <div class="bar-row-head"><span>${escapeHtml(item.year)}</span><strong>${formatNumber(item.count)}</strong></div>
      <div class="bar-track"><div class="bar-fill" style="width:${(item.count / yearMax) * 100}%"></div></div>
    </div>
  `).join(''));

  const typeMax = Math.max(...(data.method.doc_types || []).map(item => item.value), 1);
  setHtml('docTypeChart', (data.method.doc_types || []).map(item => `
    <div class="bar-row">
      <div class="bar-row-head"><span>${escapeHtml(item.name)}</span><strong>${formatNumber(item.value)}</strong></div>
      <div class="bar-track"><div class="bar-fill" style="width:${(item.value / typeMax) * 100}%"></div></div>
    </div>
  `).join(''));

  setHtml('keywordCloud', (data.method.top_keywords || []).slice(0, 16).map(item => `
    <span>${escapeHtml(item.term)} · ${formatNumber(item.count)}</span>
  `).join(''));
}

function renderNTNTab() {
  setText('ntnDefinition', data.ntn_overview.definition);
  setText('ntnWhy', data.ntn_overview.why_it_matters);
  setHtml('specificObjectives', (data.research.specific_objectives || []).map(item => `<li>${escapeHtml(item)}</li>`).join(''));
  setHtml('ntnCards', (data.ntn_overview.cards || []).map(item => `
    <article class="card-surface">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join(''));
}

function renderMethodology() {
  setText('searchQuery', data.method.search_query);
  setHtml('methodFilters', (data.method.filters || []).map(item => `<li>${escapeHtml(item)}</li>`).join(''));
  setHtml('methodSteps', (data.method.steps || []).map(item => `<li>${escapeHtml(item)}</li>`).join(''));
  setHtml('sourceList', (data.method.top_sources || []).map(item => `
    <div class="metric-item"><span>${escapeHtml(item.name)}</span><strong>${formatNumber(item.value)}</strong></div>
  `).join(''));
  setHtml('removedTerms', (data.method.removed_terms || []).map(item => `
    <div class="removed-row"><strong>${escapeHtml(item.term)}</strong><div>${escapeHtml(item.reason)}</div></div>
  `).join(''));
}

function renderResults() {
  const narrative = [
    'El primer bloque fuerte del mapa gira alrededor de la integración NTN con 5G y 6G, lo que muestra que el tema se está leyendo como continuidad de la red terrestre más que como un sistema aislado.',
    'La presencia marcada de LEO, delay, handover y doppler confirma que la movilidad y la continuidad del servicio siguen siendo retos centrales en la operación real de NTN.',
    'También aparece una línea donde pesan la calidad, los recursos, la cobertura y la optimización, lo que sugiere que el problema no es solo conectar sino hacerlo con estabilidad y buen desempeño.'
  ];
  setHtml('resultsNarrative', narrative.map(item => `<div class="narrative-item">${escapeHtml(item)}</div>`).join(''));
  setHtml('topNodesList', topMapNodes(8).map(node => `
    <div class="metric-item"><span>${escapeHtml(node.label)}</span><strong>${formatNumber(node.occ)}</strong></div>
  `).join(''));
  setHtml('resultsKey', [
    'NTN no aparece como una sola palabra suelta sino como un sistema de conceptos que se conectan entre sí.',
    'Los nodos grandes muestran qué problemas se repiten más en la literatura revisada.',
    'Los enlaces más gruesos ayudan a ver qué relaciones pesan más dentro del tema.'
  ].map(item => `<div class="bullet-item">${escapeHtml(item)}</div>`).join(''));
  setHtml('readingGuide', [
    'Color: grupo temático o clúster.',
    'Tamaño: frecuencia del término en la literatura.',
    'Línea: fuerza de asociación entre términos.',
    'Cercanía: afinidad temática dentro del mapa.'
  ].map(item => `<div class="bullet-item">${escapeHtml(item)}</div>`).join(''));
}

function renderMapDidactic() {
  setText('mapSummary', data.map.summary);
  setHtml('didacticGrid', [
    { title: 'Colores', text: 'Cada color agrupa términos que aparecen trabajando juntos dentro del mismo frente temático.' },
    { title: 'Tamaño del nodo', text: 'Un nodo más grande significa que ese término aparece más veces en el corpus revisado.' },
    { title: 'Líneas de unión', text: 'Mientras más fuerte es la línea, más se repite esa relación dentro del tema.' },
    { title: 'Lectura útil', text: 'Lo más valioso es ver conexiones entre términos, no quedarse con una sola palabra aislada.' }
  ].map(item => `
    <div class="didactic-item">
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.text)}</p>
    </div>
  `).join(''));
}

function renderClusters() {
  setHtml('clusterGrid', (data.clusters || []).map(item => `
    <article class="cluster-card">
      <h3><span class="cluster-color" style="background:${escapeHtml(item.color)}"></span>${escapeHtml(item.name)}</h3>
      <span class="cluster-meta">Foco: ${escapeHtml(item.focus)} · ${formatNumber(item.node_count)} términos</span>
      <p>${escapeHtml(item.summary)}</p>
      <p><strong>¿Por qué importa?</strong> ${escapeHtml(item.why)}</p>
      <div class="term-row">${(item.top_terms || []).map(term => `<span>${escapeHtml(term)}</span>`).join('')}</div>
    </article>
  `).join(''));
}

function renderWordChips(list) {
  setHtml('wordChips', list.map(item => `
    <button class="word-chip" type="button" data-word-chip="${escapeHtml(item.term)}">${escapeHtml(item.display)}</button>
  `).join(''));
  document.querySelectorAll('[data-word-chip]').forEach(btn => {
    btn.addEventListener('click', () => {
      byId('wordSearch').value = btn.dataset.wordChip;
      state.wordFilter = btn.dataset.wordChip.toLowerCase();
      renderWordAnalyses();
    });
  });
}

function renderWordAnalyses() {
  const filter = state.wordFilter.trim().toLowerCase();
  const list = (data.word_analyses || []).filter(item => {
    if (!filter) return true;
    const haystack = [
      item.term,
      item.display,
      item.cluster_name,
      ...(item.links || []).map(link => link.label)
    ].join(' ').toLowerCase();
    return haystack.includes(filter);
  });

  renderWordChips((data.word_analyses || []).slice(0, 20));

  setHtml('wordAnalysisGrid', list.map(item => `
    <article class="analysis-card">
      <h3>${escapeHtml(item.display)}</h3>
      <span class="analysis-meta">Clúster: ${escapeHtml(item.cluster_name)} · Ocurrencias: ${formatNumber(item.occurrences)} · Fuerza total: ${formatNumber(item.total_link_strength)}</span>
      <p>${escapeHtml(item.analysis)}</p>
      <div class="analysis-links">
        ${(item.links || []).slice(0, 10).map(link => `
          <div class="analysis-link">
            <span>${escapeHtml(link.label)} <small>· ${escapeHtml(link.cluster_name)}</small></span>
            <strong>${formatNumber(link.strength)}</strong>
          </div>
        `).join('')}
      </div>
      <p><strong>Conclusión:</strong> ${escapeHtml(item.conclusion)}</p>
    </article>
  `).join(''));
}

function renderMiniCase() {
  setText('miniTitle', data.mini_case.title);
  setText('miniDescription', data.mini_case.description);
  setHtml('miniAssumptions', (data.mini_case.assumptions || []).map(item => `<li>${escapeHtml(item)}</li>`).join(''));
  setHtml('miniInsights', (data.mini_case.insights || []).map(item => `<li>${escapeHtml(item)}</li>`).join(''));

  byId('miniFrequency').value = data.mini_case.defaults.frequencyGHz;
  byId('miniAltitude').value = data.mini_case.defaults.altitudeKm;
  byId('miniTxPower').value = data.mini_case.defaults.txPowerDbm;
  byId('miniGain').value = data.mini_case.defaults.totalGainDb;
  byId('miniLoss').value = data.mini_case.defaults.extraLossDb;
  byId('miniThreshold').value = data.mini_case.defaults.thresholdDbm;

  byId('miniRun').addEventListener('click', calculateMiniCase);
  calculateMiniCase();
}

function calculateMiniCase() {
  const frequencyGHz = parseFloat(byId('miniFrequency').value);
  const altitudeKm = parseFloat(byId('miniAltitude').value);
  const txPower = parseFloat(byId('miniTxPower').value);
  const totalGain = parseFloat(byId('miniGain').value);
  const extraLoss = parseFloat(byId('miniLoss').value);
  const threshold = parseFloat(byId('miniThreshold').value);

  const distanceKm = Math.max(altitudeKm, 1);
  const fspl = 92.45 + 20 * Math.log10(Math.max(frequencyGHz, 0.1)) + 20 * Math.log10(distanceKm);
  const rxPower = txPower + totalGain - fspl - extraLoss;
  const margin = rxPower - threshold;
  const velocity = 7500;
  const dopplerHz = (frequencyGHz * 1e9 * velocity) / 3e8;

  const cards = [
    { label: 'Pérdida libre estimada', value: `${fspl.toFixed(2)} dB` },
    { label: 'Potencia recibida', value: `${rxPower.toFixed(2)} dBm` },
    { label: 'Margen del enlace', value: `${margin.toFixed(2)} dB` },
    { label: 'Corrimiento Doppler', value: `${(dopplerHz / 1000).toFixed(2)} kHz` }
  ];

  setHtml('miniResults', cards.map(item => `
    <div class="mini-card"><strong>${escapeHtml(item.label)}</strong><div>${escapeHtml(item.value)}</div></div>
  `).join(''));
}

function renderTeam() {
  setHtml('teamGrid', (data.team || []).map(member => `
    <article class="team-card">
      <h3>${escapeHtml(member.name)}</h3>
      <small>${escapeHtml(member.id)}</small>
    </article>
  `).join(''));
  setText('courseName', data.course.name);
  setText('courseProfessor', data.course.professor);
  setText('teamText', data.team_tab.text);
}

function renderReferences() {
  setHtml('referenceList', (data.references || []).map(ref => `
    <article class="reference-item">${escapeHtml(ref)}</article>
  `).join(''));
}

function renderReflection() {
  setText('reflectionSummary', data.reflection.summary);
  setHtml('reflectionCards', (data.reflection.cards || []).map(item => `
    <article class="reflection-card">${escapeHtml(item)}</article>
  `).join(''));
  setHtml('reflectionPoints', (data.reflection.points || []).map(item => `<li>${escapeHtml(item)}</li>`).join(''));
}

function openTab(tabName) {
  state.tab = tabName;
  document.querySelectorAll('.tab-link').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabName));
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.toggle('active', panel.id === `panel-${tabName}`));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupTabs() {
  document.querySelectorAll('.tab-link').forEach(btn => btn.addEventListener('click', () => openTab(btn.dataset.tab)));
  document.querySelectorAll('[data-tab-target]').forEach(btn => btn.addEventListener('click', () => openTab(btn.dataset.tabTarget)));
}

function projectMapNodes() {
  const xs = (data.map?.nodes || []).map(node => node.x);
  const ys = (data.map?.nodes || []).map(node => node.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  (data.map?.nodes || []).forEach(node => {
    const px = 100 + ((node.x - minX) / (maxX - minX || 1)) * 1000;
    const py = 100 + ((node.y - minY) / (maxY - minY || 1)) * 620;
    mapState.positions.set(node.id, { x: px, y: 800 - py });
  });
}

function applyMapTransform() {
  const viewport = byId('mapViewport');
  if (viewport) viewport.setAttribute('transform', `translate(${state.map.tx} ${state.map.ty}) scale(${state.map.scale})`);
}

function visibleNode(node) {
  return state.map.clusters.has(node.cluster);
}

function renderNodeInspector() {
  const node = nodeMap.get(state.map.selectedId);
  if (!node) {
    setHtml('nodeInspector', '<p>No hay nodo seleccionado.</p>');
    return;
  }

  const neighbors = (adjacency.get(node.id) || [])
    .map(item => ({
      ...item,
      node: nodeMap.get(item.id)
    }))
    .filter(item => item.node && state.map.clusters.has(item.node.cluster))
    .sort((a, b) => b.strength - a.strength)
    .slice(0, 10);

  setHtml('nodeInspector', `
    <div class="node-chip"><i style="background:${clusterColor(node.cluster)}"></i>${escapeHtml(node.label)}</div>
    <div class="metric-pair"><span>Clúster</span><strong>${escapeHtml(clusterName(node.cluster))}</strong></div>
    <div class="metric-pair"><span>Ocurrencias</span><strong>${formatNumber(node.occ)}</strong></div>
    <div class="metric-pair"><span>Fuerza total</span><strong>${formatNumber(node.tls)}</strong></div>
    <div class="neighbor-list">
      ${neighbors.map(item => `
        <div class="neighbor-item"><span>${escapeHtml(item.node.label)}</span><strong>${formatNumber(item.strength)}</strong></div>
      `).join('')}
    </div>
  `);
}

function centerMapOn(nodeId, zoom = state.map.scale) {
  const pos = mapState.positions.get(nodeId);
  if (!pos) return;
  state.map.scale = zoom;
  state.map.tx = viewBox.width / 2 - pos.x * zoom;
  state.map.ty = viewBox.height / 2 - pos.y * zoom;
  applyMapTransform();
}

function focusNodeByTerm(term) {
  const found = (data.map?.nodes || []).find(node => node.label.toLowerCase().includes(String(term).toLowerCase()));
  if (found) {
    state.map.selectedId = found.id;
    renderMapScene();
    renderNodeInspector();
    centerMapOn(found.id, Math.max(1.15, state.map.scale));
  }
}

function renderQuickFocus() {
  const terms = topMapNodes(8);
  setHtml('mapQuickFocus', terms.map(node => `
    <button class="focus-btn" type="button" data-focus-term="${escapeHtml(node.label)}">${escapeHtml(node.label)}</button>
  `).join(''));
  document.querySelectorAll('[data-focus-term]').forEach(btn => {
    btn.addEventListener('click', () => focusNodeByTerm(btn.dataset.focusTerm));
  });
}

function renderMapScene() {
  const viewport = byId('mapViewport');
  viewport.innerHTML = '';

  const selected = state.map.selectedId;
  const selectedNeighbors = new Set((adjacency.get(selected) || []).map(item => item.id));
  selectedNeighbors.add(selected);

  const edgeLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const labelLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const nodeLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  (data.map?.edges || []).forEach(edge => {
    const source = nodeMap.get(edge.source);
    const target = nodeMap.get(edge.target);
    if (!source || !target || !visibleNode(source) || !visibleNode(target)) return;

    const p1 = mapState.positions.get(source.id);
    const p2 = mapState.positions.get(target.id);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', p1.x);
    line.setAttribute('y1', p1.y);
    line.setAttribute('x2', p2.x);
    line.setAttribute('y2', p2.y);
    line.setAttribute('stroke-width', Math.max(1, Math.min(8, edge.strength / 42)));
    line.setAttribute('class', `map-edge ${selected && !(edge.source === selected || edge.target === selected) ? 'faded' : ''}`);
    edgeLayer.appendChild(line);
  });

  [...(data.map?.nodes || [])]
    .sort((a, b) => (a.occ || 0) - (b.occ || 0))
    .forEach(node => {
      if (!visibleNode(node)) return;
      const pos = mapState.positions.get(node.id);
      const radius = Math.max(5, Math.min(28, Math.sqrt((node.occ || 30) / 5)));
      const faded = selected && !selectedNeighbors.has(node.id);

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', pos.x);
      circle.setAttribute('cy', pos.y);
      circle.setAttribute('r', radius);
      circle.setAttribute('fill', clusterColor(node.cluster));
      circle.setAttribute('class', `map-node ${faded ? 'faded' : ''} ${selected === node.id ? 'selected' : ''}`);
      circle.addEventListener('click', event => {
        event.stopPropagation();
        state.map.selectedId = node.id;
        renderMapScene();
        renderNodeInspector();
        centerMapOn(node.id, Math.max(1.15, state.map.scale));
      });
      circle.addEventListener('mouseenter', event => showTooltip(event, `${node.label} · ${formatNumber(node.occ)} ocurrencias`));
      circle.addEventListener('mousemove', moveTooltip);
      circle.addEventListener('mouseleave', hideTooltip);
      nodeLayer.appendChild(circle);

      if ((node.occ || 0) >= 180 || selected === node.id) {
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', pos.x + radius + 6);
        label.setAttribute('y', pos.y + 4);
        label.setAttribute('class', `map-label ${faded && selected !== node.id ? 'faded' : ''}`);
        label.textContent = node.label;
        labelLayer.appendChild(label);
      }
    });

  viewport.appendChild(edgeLayer);
  viewport.appendChild(labelLayer);
  viewport.appendChild(nodeLayer);
  applyMapTransform();
}

function setupGraphMap() {
  renderMapDidactic();
  projectMapNodes();

  setHtml('clusterFilters', (data.map?.clusters || []).map(cluster => `
    <button class="cluster-chip active" type="button" data-cluster-toggle="${cluster.id}">${escapeHtml(cluster.name)}</button>
  `).join(''));

  document.querySelectorAll('[data-cluster-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const clusterId = Number(btn.dataset.clusterToggle);
      if (state.map.clusters.has(clusterId)) state.map.clusters.delete(clusterId);
      else state.map.clusters.add(clusterId);
      btn.classList.toggle('active', state.map.clusters.has(clusterId));
      renderMapScene();
      renderNodeInspector();
    });
  });

  renderQuickFocus();
  renderMapScene();
  renderNodeInspector();
  centerMapOn(state.map.selectedId, 1);

  byId('mapSearch').addEventListener('input', event => {
    const value = event.target.value.trim().toLowerCase();
    if (!value) return;
    const found = (data.map?.nodes || []).find(node => node.label.toLowerCase().includes(value));
    if (found) {
      state.map.selectedId = found.id;
      renderMapScene();
      renderNodeInspector();
      centerMapOn(found.id, 1.25);
    }
  });

  byId('mapResetBtn').addEventListener('click', () => {
    state.map.scale = 1;
    state.map.tx = 0;
    state.map.ty = 0;
    state.map.clusters = new Set((data.map?.clusters || []).map(cluster => cluster.id));
    state.map.selectedId = 154;
    byId('mapSearch').value = '';
    document.querySelectorAll('[data-cluster-toggle]').forEach(btn => btn.classList.add('active'));
    renderMapScene();
    renderNodeInspector();
    centerMapOn(state.map.selectedId, 1);
  });

  byId('mapZoomInBtn').addEventListener('click', () => {
    state.map.scale = Math.min(3.6, state.map.scale * 1.12);
    centerMapOn(state.map.selectedId, state.map.scale);
  });
  byId('mapZoomOutBtn').addEventListener('click', () => {
    state.map.scale = Math.max(0.55, state.map.scale * 0.9);
    centerMapOn(state.map.selectedId, state.map.scale);
  });
  byId('mapFitBtn').addEventListener('click', () => centerMapOn(state.map.selectedId, 1.18));

  const svg = byId('vosSvg');
  svg.addEventListener('wheel', event => {
    event.preventDefault();
    const oldScale = state.map.scale;
    const factor = event.deltaY < 0 ? 1.12 : 0.9;
    const newScale = Math.max(0.55, Math.min(3.6, oldScale * factor));
    const rect = svg.getBoundingClientRect();
    const px = (event.clientX - rect.left) * (viewBox.width / rect.width);
    const py = (event.clientY - rect.top) * (viewBox.height / rect.height);
    state.map.tx = px - ((px - state.map.tx) * (newScale / oldScale));
    state.map.ty = py - ((py - state.map.ty) * (newScale / oldScale));
    state.map.scale = newScale;
    applyMapTransform();
  }, { passive: false });

  svg.addEventListener('pointerdown', event => {
    mapState.dragging = true;
    svg.classList.add('dragging');
    mapState.dragStart = { x: event.clientX, y: event.clientY, tx: state.map.tx, ty: state.map.ty };
    svg.setPointerCapture(event.pointerId);
  });
  svg.addEventListener('pointermove', event => {
    if (!mapState.dragging) return;
    state.map.tx = mapState.dragStart.tx + (event.clientX - mapState.dragStart.x);
    state.map.ty = mapState.dragStart.ty + (event.clientY - mapState.dragStart.y);
    applyMapTransform();
  });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(name => {
    svg.addEventListener(name, () => {
      mapState.dragging = false;
      svg.classList.remove('dragging');
    });
  });

  svg.addEventListener('click', event => {
    if (event.target === svg) hideTooltip();
  });
}

function applyImageTransform() {
  const img = byId('mapFocusImage');
  img.style.transform = `translate(${state.image.x}px, ${state.image.y}px) scale(${state.image.scale})`;
}

function setupImageViewer() {
  const stage = byId('imageStage');
  const zoomIn = byId('imgZoomInBtn');
  const zoomOut = byId('imgZoomOutBtn');
  const reset = byId('imgResetBtn');

  function resetViewer() {
    state.image.scale = 1;
    state.image.x = 0;
    state.image.y = 0;
    applyImageTransform();
  }

  zoomIn.addEventListener('click', () => {
    state.image.scale = Math.min(3.4, state.image.scale * 1.12);
    applyImageTransform();
  });
  zoomOut.addEventListener('click', () => {
    state.image.scale = Math.max(1, state.image.scale * 0.9);
    applyImageTransform();
  });
  reset.addEventListener('click', resetViewer);

  stage.addEventListener('wheel', event => {
    event.preventDefault();
    const oldScale = state.image.scale;
    const factor = event.deltaY < 0 ? 1.12 : 0.9;
    const newScale = Math.max(1, Math.min(3.4, oldScale * factor));
    const rect = stage.getBoundingClientRect();
    const px = event.clientX - rect.left - rect.width / 2;
    const py = event.clientY - rect.top - rect.height / 2;
    state.image.x = px - ((px - state.image.x) * (newScale / oldScale));
    state.image.y = py - ((py - state.image.y) * (newScale / oldScale));
    state.image.scale = newScale;
    applyImageTransform();
  }, { passive: false });

  stage.addEventListener('pointerdown', event => {
    state.image.dragging = true;
    stage.classList.add('dragging');
    state.image.startX = event.clientX;
    state.image.startY = event.clientY;
    state.image.baseX = state.image.x;
    state.image.baseY = state.image.y;
    stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener('pointermove', event => {
    if (!state.image.dragging) return;
    state.image.x = state.image.baseX + (event.clientX - state.image.startX);
    state.image.y = state.image.baseY + (event.clientY - state.image.startY);
    applyImageTransform();
  });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(name => {
    stage.addEventListener(name, () => {
      state.image.dragging = false;
      stage.classList.remove('dragging');
    });
  });

  resetViewer();
}

function showTooltip(event, text) {
  let tooltip = byId('mapTooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'mapTooltip';
    tooltip.className = 'map-tooltip';
    document.body.appendChild(tooltip);
  }
  tooltip.textContent = text;
  tooltip.style.display = 'block';
  moveTooltip(event);
}
function moveTooltip(event) {
  const tooltip = byId('mapTooltip');
  if (!tooltip) return;
  tooltip.style.left = `${event.clientX + 18}px`;
  tooltip.style.top = `${event.clientY + 18}px`;
}
function hideTooltip() {
  const tooltip = byId('mapTooltip');
  if (tooltip) tooltip.style.display = 'none';
}

function findBestWordMatch(question) {
  const q = question.toLowerCase();
  return (data.word_analyses || []).find(item => {
    const terms = [item.term, item.display, item.cluster_name, ...(item.links || []).map(link => link.label)];
    return terms.some(term => q.includes(String(term).toLowerCase()));
  });
}

function getAssistantAnswer(question) {
  const q = question.toLowerCase();
  if (q.includes('mapa')) return data.map.summary;
  if (q.includes('clúster') || q.includes('cluster')) {
    return (data.clusters || []).map(item => `${item.name}: ${item.summary}`).join(' ');
  }
  if (q.includes('mini') || q.includes('doppler') || q.includes('leo')) {
    return `${data.mini_case.title}. ${data.mini_case.description}`;
  }
  if (q.includes('5g') || q.includes('6g')) {
    const match = findBestWordMatch('ntn 5g 6g');
    if (match) return `${match.display}: ${match.analysis}`;
  }
  if (q.includes('ntn') || q.includes('redes no terrestres')) {
    return `${data.ntn_overview.definition} ${data.ntn_overview.why_it_matters}`;
  }
  if (q.includes('metodolog')) {
    return `Se partió de la cadena ${data.method.search_query} y luego se organizó la lectura del tema usando el mapa, los clústeres y los vínculos más fuertes entre términos.`;
  }
  const match = findBestWordMatch(q);
  if (match) return `${match.display}: ${match.analysis} Conclusión: ${match.conclusion}`;
  return 'Puedo ayudarte con el tema NTN, el mapa, los clústeres, el mini-caso o las palabras principales del trabajo. Prueba con una pregunta más específica.';
}

function addChatBubble(text, role = 'assistant') {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${role}`;
  bubble.textContent = text;
  byId('chatLog').appendChild(bubble);
  byId('chatLog').scrollTop = byId('chatLog').scrollHeight;
}

function setupAssistant() {
  const panel = byId('assistantPanel');
  const fab = byId('assistantFab');
  const openBtn = byId('assistantTopBtn');
  const hideBtn = byId('assistantHide');
  const closeBtn = byId('assistantClose');
  const form = byId('assistantForm');
  const input = byId('assistantInput');
  const suggestions = byId('assistantSuggestions');

  function showPanel() {
    state.assistantOpen = true;
    panel.classList.remove('hidden');
    fab.setAttribute('aria-expanded', 'true');
  }
  function hidePanel() {
    state.assistantOpen = false;
    panel.classList.add('hidden');
    fab.setAttribute('aria-expanded', 'false');
  }
  function togglePanel() {
    if (state.assistantOpen) hidePanel();
    else showPanel();
  }

  [fab, openBtn].forEach(btn => btn.addEventListener('click', togglePanel));
  hideBtn.addEventListener('click', hidePanel);
  closeBtn.addEventListener('click', hidePanel);

  setHtml('assistantPrompts', (data.assistant.prompts || []).map(prompt => `
    <button class="prompt-chip" type="button">${escapeHtml(prompt)}</button>
  `).join(''));

  document.querySelectorAll('.prompt-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      if (suggestions.open) suggestions.open = false;
      showPanel();
      addChatBubble(btn.textContent, 'user');
      addChatBubble(getAssistantAnswer(btn.textContent), 'assistant');
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    if (suggestions.open) suggestions.open = false;
    showPanel();
    addChatBubble(question, 'user');
    addChatBubble(getAssistantAnswer(question), 'assistant');
    input.value = '';
  });

  addChatBubble(data.assistant.greeting, 'assistant');
}

function setupWordSearch() {
  byId('wordSearch').addEventListener('input', event => {
    state.wordFilter = event.target.value.toLowerCase();
    renderWordAnalyses();
  });
}

function setupBackToTop() {
  const button = byId('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 520) button.classList.add('visible');
    else button.classList.remove('visible');
  });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function boot() {
  renderHero();
  renderOverview();
  renderNTNTab();
  renderMethodology();
  renderResults();
  renderClusters();
  renderWordAnalyses();
  renderMiniCase();
  renderTeam();
  renderReferences();
  renderReflection();

  setupTabs();
  setupImageViewer();
  setupGraphMap();
  setupWordSearch();
  setupAssistant();
  setupBackToTop();
}

boot();
