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
    clusters: new Set()
  }
};

function byId(id) {
  return document.getElementById(id);
}

function escapeHtml(text) {
  return String(text ?? '')
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

function renderHero() {
  setText('heroEyebrow', data.meta.eyebrow);
  setText('heroTitle', data.meta.title);
  setText('heroSubtitle', data.meta.subtitle);
  setText('heroDeclaration', data.meta.declaration);

  byId('heroPoints').innerHTML = data.meta.hero_points.map(item => `
    <div class="hero-point"><i></i><span>${escapeHtml(item)}</span></div>
  `).join('');
}

function renderOverview() {
  byId('kpiGrid').innerHTML = data.kpis.map(item => `
    <article class="kpi-card">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
      <small>${escapeHtml(item.note)}</small>
    </article>
  `).join('');

  setText('researchQuestion', data.research.question);
  setText('generalObjective', data.research.general_objective);

  byId('highlightsStack').innerHTML = data.highlights.map(item => `
    <div class="bullet-item">${escapeHtml(item)}</div>
  `).join('');

  const yearMax = Math.max(...data.method.year_series.map(item => item.count));
  byId('yearChart').innerHTML = data.method.year_series.map(item => `
    <div class="bar-row">
      <div class="bar-row-head">
        <span>${escapeHtml(item.year)}</span>
        <strong>${formatNumber(item.count)}</strong>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${(item.count / yearMax) * 100}%"></div>
      </div>
    </div>
  `).join('');

  const typeMax = Math.max(...data.method.doc_types.map(item => item.value));
  byId('docTypeChart').innerHTML = data.method.doc_types.map(item => `
    <div class="bar-row">
      <div class="bar-row-head">
        <span>${escapeHtml(item.name)}</span>
        <strong>${formatNumber(item.value)}</strong>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${(item.value / typeMax) * 100}%"></div>
      </div>
    </div>
  `).join('');

  byId('keywordCloud').innerHTML = data.method.top_keywords.slice(0, 12).map(item => `
    <span>${escapeHtml(item.term)} · ${formatNumber(item.count)}</span>
  `).join('');
}

function renderNTNTab() {
  setText('ntnDefinition', data.ntn_overview.definition);
  setText('ntnWhy', data.ntn_overview.why_it_matters);
  byId('specificObjectives').innerHTML = data.research.specific_objectives.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('ntnCards').innerHTML = data.ntn_overview.cards.map(item => `
    <article class="card">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join('');
}

function renderMethodology() {
  byId('searchQuery').textContent = data.method.search_query;
  byId('methodFilters').innerHTML = data.method.filters.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('methodSteps').innerHTML = data.method.steps.map(item => `<li>${escapeHtml(item)}</li>`).join('');

  byId('sourceList').innerHTML = data.method.top_sources.map(item => `
    <div class="metric-list-item">
      <span>${escapeHtml(item.name)}</span>
      <small>${formatNumber(item.value)}</small>
    </div>
  `).join('');

  byId('removedTerms').innerHTML = data.method.removed_terms.map(item => `
    <div class="removed-row">
      <strong>${escapeHtml(item.term)}</strong>
      <span>${escapeHtml(item.reason)}</span>
    </div>
  `).join('');
}

function renderClusters() {
  byId('clusterGrid').innerHTML = data.clusters.map(item => `
    <article class="cluster-card">
      <h3><span class="cluster-color" style="background:${escapeHtml(item.color)}"></span>${escapeHtml(item.name)}</h3>
      <p class="cluster-meta">Foco: ${escapeHtml(item.focus)} · ${formatNumber(item.node_count)} nodos</p>
      <p>${escapeHtml(item.summary)}</p>
      <p><strong>¿Por qué importa?</strong> ${escapeHtml(item.why)}</p>
      <div class="term-row">
        ${item.top_terms.map(term => `<span>${escapeHtml(term)}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function renderWordChips(list) {
  byId('wordChips').innerHTML = list.map(item => `
    <button class="word-chip" type="button" data-word-chip="${escapeHtml(item.term)}">${escapeHtml(item.display)}</button>
  `).join('');
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
  const list = data.word_analyses.filter(item => {
    if (!filter) return true;
    const haystack = [
      item.term,
      item.display,
      item.cluster_name,
      ...item.links.map(link => link.label)
    ].join(' ').toLowerCase();
    return haystack.includes(filter);
  });

  renderWordChips(data.word_analyses);

  byId('wordAnalysisGrid').innerHTML = list.map(item => `
    <article class="analysis-card">
      <h3>${escapeHtml(item.display)}</h3>
      <p class="analysis-meta">Clúster: ${escapeHtml(item.cluster_name)} · Ocurrencias: ${formatNumber(item.occurrences)} · Fuerza total: ${formatNumber(item.total_link_strength)}</p>
      <p>${escapeHtml(item.analysis)}</p>
      <div class="analysis-links">
        ${item.links.map(link => `
          <div class="analysis-link">
            <span>${escapeHtml(link.label)} <small>· ${escapeHtml(link.cluster_name)}</small></span>
            <strong>${formatNumber(link.strength)}</strong>
          </div>
        `).join('')}
      </div>
      <p><strong>Conclusión:</strong> ${escapeHtml(item.conclusion)}</p>
    </article>
  `).join('');
}

function renderMiniCase() {
  setText('miniTitle', data.mini_case.title);
  setText('miniDescription', data.mini_case.description);
  byId('miniAssumptions').innerHTML = data.mini_case.assumptions.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('miniInsights').innerHTML = data.mini_case.insights.map(item => `<li>${escapeHtml(item)}</li>`).join('');

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

  const resultCards = [
    { label: 'Pérdida libre estimada', value: `${fspl.toFixed(2)} dB` },
    { label: 'Potencia recibida', value: `${rxPower.toFixed(2)} dBm` },
    { label: 'Margen del enlace', value: `${margin.toFixed(2)} dB` },
    { label: 'Corrimiento Doppler', value: `${(dopplerHz / 1000).toFixed(2)} kHz` }
  ];

  byId('miniResults').innerHTML = resultCards.map(item => `
    <div class="mini-card">
      <strong>${escapeHtml(item.label)}</strong>
      <span>${escapeHtml(item.value)}</span>
    </div>
  `).join('');
}

function renderTeam() {
  byId('teamGrid').innerHTML = data.team.map(member => `
    <article class="team-card">
      <h3>${escapeHtml(member.name)}</h3>
      <small>${escapeHtml(member.id)}</small>
    </article>
  `).join('');
  setText('courseName', data.course.name);
  setText('courseProfessor', data.course.professor);
  setText('teamText', data.team_tab.text);
}

function renderReferences() {
  byId('referenceList').innerHTML = data.references.map(ref => `
    <article class="reference-item">${escapeHtml(ref)}</article>
  `).join('');
}

function renderReflection() {
  setText('reflectionSummary', data.reflection.summary);
  byId('reflectionCards').innerHTML = data.reflection.cards.map(item => `
    <article class="reflection-card">
      <p>${escapeHtml(item)}</p>
    </article>
  `).join('');
  byId('reflectionPoints').innerHTML = data.reflection.points.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function openTab(tabName) {
  state.tab = tabName;
  document.querySelectorAll('.tab-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `panel-${tabName}`);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupTabs() {
  document.querySelectorAll('.tab-link').forEach(btn => {
    btn.addEventListener('click', () => openTab(btn.dataset.tab));
  });
  document.querySelectorAll('[data-tab-target]').forEach(btn => {
    btn.addEventListener('click', () => openTab(btn.dataset.tabTarget));
  });
}

const nodeMap = new Map(data.map.nodes.map(node => [node.id, node]));
const adjacency = new Map();

data.map.edges.forEach(edge => {
  if (!adjacency.has(edge.source)) adjacency.set(edge.source, []);
  if (!adjacency.has(edge.target)) adjacency.set(edge.target, []);
  adjacency.get(edge.source).push({ id: edge.target, strength: edge.strength });
  adjacency.get(edge.target).push({ id: edge.source, strength: edge.strength });
});

const mapState = {
  positions: new Map(),
  dragging: false,
  dragStart: null
};

function clusterColor(clusterId) {
  const found = data.map.clusters.find(item => item.id === Number(clusterId));
  return found ? found.color : '#7dd3fc';
}

function clusterName(clusterId) {
  const found = data.map.clusters.find(item => item.id === Number(clusterId));
  return found ? found.name : 'Sin clúster';
}

function projectMapNodes() {
  const xs = data.map.nodes.map(node => node.x);
  const ys = data.map.nodes.map(node => node.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  data.map.nodes.forEach(node => {
    const px = 120 + ((node.x - minX) / (maxX - minX || 1)) * 960;
    const py = 100 + ((node.y - minY) / (maxY - minY || 1)) * 620;
    mapState.positions.set(node.id, { x: px, y: 780 - py });
  });
}

function visibleNode(node) {
  return state.map.clusters.has(node.cluster);
}

function renderNodeInspector() {
  const node = nodeMap.get(state.map.selectedId);
  if (!node) {
    byId('nodeInspector').innerHTML = '<p>No hay nodo seleccionado.</p>';
    return;
  }

  const neighbors = (adjacency.get(node.id) || [])
    .map(item => ({
      ...item,
      label: nodeMap.get(item.id)?.label || '',
      clusterId: nodeMap.get(item.id)?.cluster || null
    }))
    .filter(item => item.label && state.map.clusters.has(item.clusterId))
    .sort((a, b) => b.strength - a.strength)
    .slice(0, 10);

  byId('nodeInspector').innerHTML = `
    <div class="inspector-meta">
      <div class="node-chip"><i style="background:${clusterColor(node.cluster)}"></i>${escapeHtml(node.label)}</div>
      <div class="metric-pair"><span>Clúster</span><strong>${escapeHtml(clusterName(node.cluster))}</strong></div>
      <div class="metric-pair"><span>Ocurrencias</span><strong>${formatNumber(node.occ)}</strong></div>
      <div class="metric-pair"><span>Fuerza total</span><strong>${formatNumber(node.tls)}</strong></div>
    </div>
    <div class="neighbor-list">
      ${neighbors.map(item => `
        <div class="neighbor-item">
          <span>${escapeHtml(item.label)}</span>
          <strong>${formatNumber(item.strength)}</strong>
        </div>
      `).join('')}
    </div>
  `;
}

function applyMapTransform() {
  byId('mapViewport').setAttribute('transform', `translate(${state.map.tx} ${state.map.ty}) scale(${state.map.scale})`);
}

function renderMapScene() {
  const viewport = byId('mapViewport');
  viewport.innerHTML = '';

  const selected = state.map.selectedId;
  const selectedNeighbors = new Set((adjacency.get(selected) || []).map(item => item.id));
  selectedNeighbors.add(selected);

  const edgeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const labelGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  data.map.edges.forEach(edge => {
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
    line.setAttribute('stroke-width', Math.max(1, Math.min(8, edge.strength / 45)));
    line.setAttribute('class', `map-edge ${selected && !(edge.source === selected || edge.target === selected) ? 'faded' : ''}`);
    edgeGroup.appendChild(line);
  });

  [...data.map.nodes]
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
      circle.addEventListener('click', () => {
        state.map.selectedId = node.id;
        renderMapScene();
        renderNodeInspector();
      });
      circle.addEventListener('mouseenter', event => showTooltip(event, `${node.label} · ${formatNumber(node.occ)} ocurrencias`));
      circle.addEventListener('mousemove', moveTooltip);
      circle.addEventListener('mouseleave', hideTooltip);
      nodeGroup.appendChild(circle);

      if ((node.occ || 0) >= 180 || selected === node.id) {
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', pos.x + radius + 6);
        label.setAttribute('y', pos.y + 4);
        label.setAttribute('class', `map-label ${faded && selected !== node.id ? 'faded' : ''}`);
        label.textContent = node.label;
        labelGroup.appendChild(label);
      }
    });

  viewport.appendChild(edgeGroup);
  viewport.appendChild(labelGroup);
  viewport.appendChild(nodeGroup);
  applyMapTransform();
}

function setupMap() {
  setText('mapSummary', data.map.summary);

  byId('clusterFilters').innerHTML = data.map.clusters.map(cluster => `
    <button class="cluster-chip active" data-cluster-toggle="${cluster.id}" type="button">
      ${escapeHtml(cluster.name)}
    </button>
  `).join('');

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

  projectMapNodes();
  renderMapScene();
  renderNodeInspector();

  byId('mapSearch').addEventListener('input', event => {
    const value = event.target.value.trim().toLowerCase();
    if (!value) return;
    const found = data.map.nodes.find(node => node.label.toLowerCase().includes(value));
    if (found) {
      state.map.selectedId = found.id;
      renderMapScene();
      renderNodeInspector();
    }
  });

  byId('mapResetBtn').addEventListener('click', () => {
    state.map.scale = 1;
    state.map.tx = 0;
    state.map.ty = 0;
    state.map.clusters = new Set(data.map.clusters.map(cluster => cluster.id));
    state.map.selectedId = 154;
    byId('mapSearch').value = '';
    document.querySelectorAll('[data-cluster-toggle]').forEach(btn => btn.classList.add('active'));
    renderMapScene();
    renderNodeInspector();
  });

  const svg = byId('vosSvg');
  svg.addEventListener('wheel', event => {
    event.preventDefault();
    const oldScale = state.map.scale;
    const factor = event.deltaY < 0 ? 1.12 : 0.9;
    const newScale = Math.max(0.55, Math.min(3.4, oldScale * factor));
    const rect = svg.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    state.map.tx = px - ((px - state.map.tx) * (newScale / oldScale));
    state.map.ty = py - ((py - state.map.ty) * (newScale / oldScale));
    state.map.scale = newScale;
    applyMapTransform();
  }, { passive: false });

  svg.addEventListener('pointerdown', event => {
    mapState.dragging = true;
    mapState.dragStart = { x: event.clientX, y: event.clientY, tx: state.map.tx, ty: state.map.ty };
    svg.setPointerCapture(event.pointerId);
  });

  svg.addEventListener('pointermove', event => {
    if (!mapState.dragging) return;
    state.map.tx = mapState.dragStart.tx + (event.clientX - mapState.dragStart.x);
    state.map.ty = mapState.dragStart.ty + (event.clientY - mapState.dragStart.y);
    applyMapTransform();
  });

  svg.addEventListener('pointerup', () => { mapState.dragging = false; });
  svg.addEventListener('pointerleave', () => { mapState.dragging = false; });
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
  tooltip.style.left = `${event.clientX + 14}px`;
  tooltip.style.top = `${event.clientY + 14}px`;
}

function hideTooltip() {
  const tooltip = byId('mapTooltip');
  if (tooltip) tooltip.style.display = 'none';
}

function setupWordSearch() {
  byId('wordSearch').addEventListener('input', event => {
    state.wordFilter = event.target.value.toLowerCase();
    renderWordAnalyses();
  });
}

function buildAssistantCorpus() {
  const corpus = [];
  corpus.push({
    keys: ['qué son las ntn', 'que son las ntn', 'ntn', 'redes no terrestres'],
    answer: `${data.ntn_overview.definition} ${data.ntn_overview.why_it_matters}`
  });
  corpus.push({
    keys: ['mapa', 'vosviewer'],
    answer: data.map.summary
  });
  corpus.push({
    keys: ['clústeres', 'clusters', 'clúster', 'cluster'],
    answer: data.clusters.map(item => `${item.name}: ${item.focus}.`).join(' ')
  });
  corpus.push({
    keys: ['leo'],
    answer: 'En este trabajo, LEO aparece como la parte más operativa del tema: órbita, retardo, handover, sincronización y continuidad del enlace.'
  });
  corpus.push({
    keys: ['5g nr', '5g'],
    answer: 'La relación entre NTN y 5G NR muestra que la discusión no va por caminos separados: la red celular sigue siendo una referencia fuerte para llevar NTN a un despliegue práctico.'
  });
  corpus.push({
    keys: ['mini-caso', 'mini caso', 'link budget', 'doppler'],
    answer: data.mini_case.description
  });
  corpus.push({
    keys: ['equipo', 'integrantes'],
    answer: data.team.map(member => `${member.name} (${member.id})`).join(', ')
  });
  corpus.push({
    keys: ['metodología', 'metodologia', 'búsqueda', 'busqueda'],
    answer: `Se trabajó con la cadena ${data.method.search_query} y luego se interpretó el mapa interactivo para organizar el tema por clústeres y palabras clave.`
  });

  data.word_analyses.forEach(item => {
    corpus.push({
      keys: [item.term.toLowerCase(), item.display.toLowerCase()],
      answer: `${item.display}: ${item.analysis} ${item.conclusion}`
    });
  });

  return corpus;
}

const assistantCorpus = buildAssistantCorpus();

function answerQuestion(question) {
  const q = question.toLowerCase();
  let bestAnswer = null;
  let bestScore = 0;

  assistantCorpus.forEach(item => {
    let score = 0;
    item.keys.forEach(key => {
      if (q.includes(key)) score += key.length;
    });
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.answer;
    }
  });

  if (bestAnswer) return bestAnswer;
  return 'Puedo ayudarte con el tema NTN, el mapa, los clústeres, las palabras clave, el mini-caso o el equipo del trabajo.';
}

function addChatBubble(text, role = 'assistant') {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${role}`;
  bubble.textContent = text;
  byId('chatLog').appendChild(bubble);
  byId('chatLog').scrollTop = byId('chatLog').scrollHeight;
}

function collapseSuggestions() {
  const details = byId('assistantSuggestions');
  if (details) details.removeAttribute('open');
}

function setAssistantOpen(open) {
  state.assistantOpen = open;
  byId('assistantPanel').classList.toggle('hidden', !open);
  byId('assistantFab').style.display = open ? 'none' : 'inline-flex';
  byId('assistantFab').setAttribute('aria-expanded', open ? 'true' : 'false');
}

function setupAssistant() {
  byId('assistantPrompts').innerHTML = data.assistant.prompts.map(prompt => `
    <button class="prompt-chip" type="button">${escapeHtml(prompt)}</button>
  `).join('');

  document.querySelectorAll('.prompt-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      addChatBubble(btn.textContent, 'user');
      collapseSuggestions();
      window.setTimeout(() => addChatBubble(answerQuestion(btn.textContent), 'assistant'), 90);
      setAssistantOpen(true);
    });
  });

  byId('assistantMainBtn').addEventListener('click', () => setAssistantOpen(!state.assistantOpen));
  byId('assistantFab').addEventListener('click', () => setAssistantOpen(true));
  byId('assistantHide').addEventListener('click', () => setAssistantOpen(false));
  byId('assistantClose').addEventListener('click', () => setAssistantOpen(false));

  byId('chatForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = byId('chatInput');
    const question = input.value.trim();
    if (!question) return;
    addChatBubble(question, 'user');
    collapseSuggestions();
    window.setTimeout(() => addChatBubble(answerQuestion(question), 'assistant'), 90);
    input.value = '';
  });

  addChatBubble(data.assistant.greeting, 'assistant');
}

function setupTopButton() {
  const btn = byId('toTopBtn');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 180);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function init() {
  state.map.clusters = new Set(data.map.clusters.map(cluster => cluster.id));
  renderHero();
  renderOverview();
  renderNTNTab();
  renderMethodology();
  renderClusters();
  renderWordAnalyses();
  renderMiniCase();
  renderTeam();
  renderReferences();
  renderReflection();
  setupTabs();
  setupMap();
  setupWordSearch();
  setupAssistant();
  setupTopButton();
}

document.addEventListener('DOMContentLoaded', init);
