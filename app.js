const data = window.SITE_DATA;

function byId(id){ return document.getElementById(id); }
function escapeHtml(value){
  return String(value ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');
}
function formatNumber(value){
  if(value === null || value === undefined || Number.isNaN(Number(value))) return '—';
  return Number(value).toLocaleString('es-CO');
}
function clusterInfo(id){ return data.vosMap.clusters[id]; }
function clusterName(id){ return clusterInfo(id)?.name || `Clúster ${id}`; }
function clusterColor(id){ return clusterInfo(id)?.color || '#8aa6ff'; }

const nodeMap = new Map(data.vosMap.nodes.map(node => [node.id, node]));
const adjacency = new Map();

data.vosMap.nodes.forEach(node => adjacency.set(node.id, []));
data.vosMap.edges.forEach(edge => {
  adjacency.get(edge.source)?.push({ id: edge.target, strength: edge.strength });
  adjacency.get(edge.target)?.push({ id: edge.source, strength: edge.strength });
});
for (const [id, arr] of adjacency.entries()){
  arr.sort((a,b) => b.strength - a.strength);
}

const state = {
  activeTab: 'inicio',
  assistantOpen: false,
  wordFilter: '',
  mapSearch: '',
  map: {
    selectedId: 154,
    scale: 1,
    tx: 0,
    ty: 0,
    clusters: new Set(Object.keys(data.vosMap.clusters).map(Number))
  }
};

function openTab(tabName){
  state.activeTab = tabName;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `panel-${tabName}`);
  });
  if(tabName === 'mapa'){
    requestAnimationFrame(() => renderMapScene());
  }
}

function setupTabs(){
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => openTab(btn.dataset.tab));
  });
  document.querySelectorAll('[data-open-tab]').forEach(btn => {
    btn.addEventListener('click', () => openTab(btn.dataset.openTab));
  });
}

function renderHero(){
  byId('siteTitle').textContent = data.meta.title;
  byId('siteSubtitle').textContent = data.meta.subtitle;
  byId('siteDeclaration').textContent = data.meta.declaration;
}

function renderDashboard(){
  byId('kpiGrid').innerHTML = data.kpis.map(item => `
    <article class="kpi-card">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
      <p>${escapeHtml(item.note)}</p>
    </article>
  `).join('');

  byId('dashboardHighlights').innerHTML = data.dashboardHighlights.map(item => `
    <div class="bullet-item">${escapeHtml(item)}</div>
  `).join('');

  byId('glossaryGrid').innerHTML = data.glossary.map(item => `
    <div class="glossary-item">
      <strong>${escapeHtml(item.term)}</strong>
      <span>${escapeHtml(item.definition)}</span>
    </div>
  `).join('');

  byId('resultsCards').innerHTML = data.resultsCards.map(item => `
    <article class="result-card glass-card">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join('');
}

function renderTeam(){
  byId('teamGrid').innerHTML = data.team.map((member, index) => `
    <article class="team-card">
      <p class="section-kicker">Integrante ${index + 1}</p>
      <h3>${escapeHtml(member.name)}</h3>
      <div class="id-tag">${escapeHtml(member.id)}</div>
    </article>
  `).join('');
}

function renderMethodology(){
  byId('researchQuestion').textContent = data.research.question;
  byId('generalObjective').textContent = data.research.general_objective;
  byId('specificObjectives').innerHTML = data.research.specific_objectives.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('searchQuery').textContent = data.method.search_query;
  byId('methodFilters').innerHTML = data.method.filters.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('methodSteps').innerHTML = data.method.steps.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('topSources').innerHTML = data.method.top_sources.map(item => `
    <div class="source-item">
      <span>${escapeHtml(item.name)}</span>
      <strong>${formatNumber(item.count)}</strong>
    </div>
  `).join('');
  byId('topKeywordsList').innerHTML = data.method.top_keywords.map(item => `
    <div class="keyword-item">
      <span>${escapeHtml(item.term)}</span>
      <strong>${formatNumber(item.count)}</strong>
    </div>
  `).join('');
  byId('docTypeList').innerHTML = data.method.doc_types.map(item => `
    <div class="type-item">
      <span>${escapeHtml(item.name)}</span>
      <strong>${formatNumber(item.value)}</strong>
    </div>
  `).join('');
}

function renderClusters(){
  byId('clusterGrid').innerHTML = data.clusters.map(cluster => `
    <article class="cluster-card">
      <div class="cluster-head">
        <span class="cluster-dot" style="background:${cluster.color}"></span>
        <div>
          <h3>${escapeHtml(cluster.name)}</h3>
          <div class="cluster-meta">${escapeHtml(cluster.focus)} · ${formatNumber(cluster.node_count)} nodos visibles</div>
        </div>
      </div>
      <p>${escapeHtml(cluster.summary)}</p>
      <div class="term-pills">
        ${cluster.top_terms.map(term => `<span class="term-pill">${escapeHtml(term)}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function renderWordChips(){
  byId('wordChips').innerHTML = data.wordAnalyses.map(item => `
    <button class="chip ${state.wordFilter === item.term.toLowerCase() ? 'active' : ''}" type="button" data-word-chip="${escapeHtml(item.term)}">${escapeHtml(item.term)}</button>
  `).join('');
  document.querySelectorAll('[data-word-chip]').forEach(btn => {
    btn.addEventListener('click', () => {
      const term = btn.dataset.wordChip.toLowerCase();
      state.wordFilter = state.wordFilter === term ? '' : term;
      byId('wordSearch').value = state.wordFilter;
      renderWordAnalyses();
    });
  });
}

function renderWordAnalyses(){
  renderWordChips();
  const query = (state.wordFilter || '').trim().toLowerCase();
  const filtered = data.wordAnalyses.filter(item => {
    if(!query) return true;
    const haystack = [
      item.term,
      item.cluster,
      item.analysis,
      item.conclusion,
      ...item.links.map(link => link.label)
    ].join(' ').toLowerCase();
    return haystack.includes(query);
  });

  byId('wordAnalysisGrid').innerHTML = filtered.map(item => `
    <article class="analysis-card">
      <div class="cluster-tag">${escapeHtml(item.cluster)}</div>
      <h3>${escapeHtml(item.term)}</h3>
      <p class="analysis-meta">Ocurrencias: ${formatNumber(item.occurrences)} · Fuerza total: ${formatNumber(item.total_link_strength)}</p>
      <p>${escapeHtml(item.analysis)}</p>
      <div class="link-table">
        ${item.links.map(link => `
          <div class="link-row">
            <span>${escapeHtml(link.label)} <small>· ${escapeHtml(clusterName(link.cluster))}</small></span>
            <strong>${formatNumber(link.strength)}</strong>
          </div>
        `).join('')}
      </div>
      <p><strong>Conclusión:</strong> ${escapeHtml(item.conclusion)}</p>
    </article>
  `).join('');
}

function calculateMiniCase(){
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
  const velocity = 7500; // m/s
  const dopplerHz = (frequencyGHz * 1e9 * velocity) / 3e8;
  const cards = [
    { label:'Pérdida libre estimada', value:`${fspl.toFixed(2)} dB` },
    { label:'Potencia recibida', value:`${rxPower.toFixed(2)} dBm` },
    { label:'Margen del enlace', value:`${margin.toFixed(2)} dB` },
    { label:'Indicador Doppler', value:`${(dopplerHz/1000).toFixed(2)} kHz` }
  ];
  byId('miniResults').innerHTML = cards.map(card => `
    <div class="mini-card">
      <strong>${escapeHtml(card.label)}</strong>
      <span>${escapeHtml(card.value)}</span>
    </div>
  `).join('');
}

function renderMiniCase(){
  const mini = data.miniCase;
  byId('miniTitle').textContent = mini.title;
  byId('miniDescription').textContent = mini.description;
  byId('miniAssumptions').innerHTML = mini.assumptions.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('miniInsights').innerHTML = mini.insights.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('miniFrequency').value = mini.defaults.frequencyGHz;
  byId('miniAltitude').value = mini.defaults.altitudeKm;
  byId('miniTxPower').value = mini.defaults.txPowerDbm;
  byId('miniGain').value = mini.defaults.totalGainDb;
  byId('miniLoss').value = mini.defaults.extraLossDb;
  byId('miniThreshold').value = mini.defaults.thresholdDbm;
  byId('miniRun').addEventListener('click', calculateMiniCase);
  calculateMiniCase();
}

function renderReflection(){
  byId('reflectionSummary').textContent = data.reflection.summary;
  byId('reflectionCards').innerHTML = data.reflection.cards.map(item => `
    <article class="reflection-card">
      <h3>Lección</h3>
      <p>${escapeHtml(item)}</p>
    </article>
  `).join('');
  byId('reflectionPoints').innerHTML = data.reflection.points.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function renderReferences(){
  byId('referenceList').innerHTML = data.references.map(ref => `
    <article class="reference-item">${escapeHtml(ref)}</article>
  `).join('');
}

const mapState = {
  positions: new Map(),
  dragging: false,
  dragStart: null,
  selectedId: state.map.selectedId
};

function projectNodes(){
  const xs = data.vosMap.nodes.map(n => n.x);
  const ys = data.vosMap.nodes.map(n => n.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  data.vosMap.nodes.forEach(node => {
    const px = 110 + ((node.x - minX) / (maxX - minX || 1)) * 980;
    const py = 90 + ((node.y - minY) / (maxY - minY || 1)) * 620;
    mapState.positions.set(node.id, { x: px, y: 760 - py });
  });
}

function visibleNode(node){
  return state.map.clusters.has(node.cluster);
}

function getNeighborRows(nodeId){
  return (adjacency.get(nodeId) || [])
    .filter(item => nodeMap.has(item.id))
    .map(item => ({
      ...item,
      label: nodeMap.get(item.id).label,
      cluster: nodeMap.get(item.id).cluster
    }))
    .filter(item => state.map.clusters.has(item.cluster))
    .slice(0, 10);
}

function renderInspector(){
  const node = nodeMap.get(state.map.selectedId);
  if(!node){
    byId('nodeInspector').innerHTML = '<p>No hay nodo seleccionado.</p>';
    return;
  }
  const neighbors = getNeighborRows(node.id);
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

function applyMapTransform(){
  const viewport = byId('mapViewport');
  viewport.setAttribute('transform', `translate(${state.map.tx} ${state.map.ty}) scale(${state.map.scale})`);
}

function renderMapScene(){
  const viewport = byId('mapViewport');
  viewport.innerHTML = '';
  const selected = state.map.selectedId;
  const selectedNeighbors = new Set((adjacency.get(selected) || []).map(item => item.id));
  selectedNeighbors.add(selected);

  const edgeGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
  const labelGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
  const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg','g');

  data.vosMap.edges.forEach(edge => {
    const source = nodeMap.get(edge.source);
    const target = nodeMap.get(edge.target);
    if(!source || !target || !visibleNode(source) || !visibleNode(target)) return;
    const p1 = mapState.positions.get(source.id);
    const p2 = mapState.positions.get(target.id);

    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1', p1.x);
    line.setAttribute('y1', p1.y);
    line.setAttribute('x2', p2.x);
    line.setAttribute('y2', p2.y);
    line.setAttribute('stroke-width', Math.max(1, Math.min(8, edge.strength / 55)));
    line.setAttribute('class', `map-edge ${(selected && !(edge.source === selected || edge.target === selected)) ? 'faded' : ''}`);
    edgeGroup.appendChild(line);
  });

  const nodesSorted = [...data.vosMap.nodes].sort((a,b) => (a.occ || 0) - (b.occ || 0));
  nodesSorted.forEach(node => {
    if(!visibleNode(node)) return;
    const pos = mapState.positions.get(node.id);
    const radius = Math.max(5, Math.min(26, Math.sqrt((node.occ || 40) / 5)));
    const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('cx', pos.x);
    circle.setAttribute('cy', pos.y);
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', clusterColor(node.cluster));
    circle.setAttribute('class', `map-node ${selected && !selectedNeighbors.has(node.id) ? 'faded' : ''} ${selected === node.id ? 'selected' : ''}`);
    circle.dataset.id = node.id;

    circle.addEventListener('click', () => {
      state.map.selectedId = node.id;
      renderMapScene();
      renderInspector();
    });

    circle.addEventListener('mouseenter', event => showTooltip(event, `${node.label} · ${formatNumber(node.occ)} ocurrencias`));
    circle.addEventListener('mousemove', moveTooltip);
    circle.addEventListener('mouseleave', hideTooltip);

    nodeGroup.appendChild(circle);

    if((node.occ || 0) >= 180 || selected === node.id){
      const text = document.createElementNS('http://www.w3.org/2000/svg','text');
      text.setAttribute('x', pos.x + radius + 6);
      text.setAttribute('y', pos.y + 4);
      text.setAttribute('class', `map-label ${selected && !selectedNeighbors.has(node.id) && selected !== node.id ? 'faded' : ''}`);
      text.textContent = node.label;
      labelGroup.appendChild(text);
    }
  });

  viewport.appendChild(edgeGroup);
  viewport.appendChild(labelGroup);
  viewport.appendChild(nodeGroup);
  applyMapTransform();
}

function setupMap(){
  projectNodes();
  byId('mapSummary').textContent = data.vosMap.summary;

  byId('clusterFilters').innerHTML = Object.entries(data.vosMap.clusters).map(([id, info]) => `
    <button class="cluster-chip active" data-cluster-toggle="${id}" type="button" style="border-color:${info.color}55">
      <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${info.color};margin-right:8px"></span>${escapeHtml(info.name)}
    </button>
  `).join('');

  document.querySelectorAll('[data-cluster-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.clusterToggle);
      if(state.map.clusters.has(id)) state.map.clusters.delete(id);
      else state.map.clusters.add(id);
      btn.classList.toggle('active', state.map.clusters.has(id));
      renderMapScene();
      renderInspector();
    });
  });

  const search = byId('mapSearch');
  search.addEventListener('input', () => {
    const value = search.value.trim().toLowerCase();
    if(!value) return;
    const found = data.vosMap.nodes.find(node => node.label.toLowerCase().includes(value));
    if(found){
      state.map.selectedId = found.id;
      renderMapScene();
      renderInspector();
    }
  });

  byId('mapResetBtn').addEventListener('click', () => {
    state.map.scale = 1;
    state.map.tx = 0;
    state.map.ty = 0;
    state.map.clusters = new Set(Object.keys(data.vosMap.clusters).map(Number));
    state.map.selectedId = 154;
    document.querySelectorAll('[data-cluster-toggle]').forEach(btn => btn.classList.add('active'));
    byId('mapSearch').value = '';
    renderMapScene();
    renderInspector();
  });

  const svg = byId('vosSvg');
  svg.addEventListener('wheel', event => {
    event.preventDefault();
    const oldScale = state.map.scale;
    const delta = event.deltaY < 0 ? 1.12 : 0.9;
    const newScale = Math.max(0.55, Math.min(3.4, oldScale * delta));
    const rect = svg.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;
    state.map.tx = px - ((px - state.map.tx) * (newScale / oldScale));
    state.map.ty = py - ((py - state.map.ty) * (newScale / oldScale));
    state.map.scale = newScale;
    applyMapTransform();
  }, { passive:false });

  svg.addEventListener('pointerdown', event => {
    mapState.dragging = true;
    mapState.dragStart = { x:event.clientX, y:event.clientY, tx:state.map.tx, ty:state.map.ty };
    svg.setPointerCapture(event.pointerId);
  });
  svg.addEventListener('pointermove', event => {
    if(!mapState.dragging) return;
    state.map.tx = mapState.dragStart.tx + (event.clientX - mapState.dragStart.x);
    state.map.ty = mapState.dragStart.ty + (event.clientY - mapState.dragStart.y);
    applyMapTransform();
  });
  svg.addEventListener('pointerup', () => { mapState.dragging = false; });
  svg.addEventListener('pointerleave', () => { mapState.dragging = false; });

  renderMapScene();
  renderInspector();
}

function showTooltip(event, text){
  let tooltip = byId('mapTooltip');
  if(!tooltip){
    tooltip = document.createElement('div');
    tooltip.id = 'mapTooltip';
    tooltip.className = 'map-tooltip';
    document.body.appendChild(tooltip);
  }
  tooltip.textContent = text;
  tooltip.style.display = 'block';
  moveTooltip(event);
}
function moveTooltip(event){
  const tooltip = byId('mapTooltip');
  if(!tooltip) return;
  tooltip.style.left = `${event.clientX + 14}px`;
  tooltip.style.top = `${event.clientY + 14}px`;
}
function hideTooltip(){
  const tooltip = byId('mapTooltip');
  if(tooltip) tooltip.style.display = 'none';
}

function setupWordSearch(){
  const input = byId('wordSearch');
  input.addEventListener('input', () => {
    state.wordFilter = input.value.toLowerCase();
    renderWordAnalyses();
  });
}

function buildAssistantCorpus(){
  const corpus = [];
  corpus.push({ keys:['equipo','integrantes','quienes'], answer: data.team.map(member => `${member.name} (${member.id})`).join(', ') });
  corpus.push({ keys:['mapa','vosviewer'], answer: data.vosMap.summary });
  corpus.push({ keys:['mini','caso','doppler','enlace'], answer: data.miniCase.description });
  corpus.push({ keys:['metodologia','cadena','búsqueda','busqueda','csv'], answer: `Cadena base: ${data.method.search_query}. El proceso combinó lectura del nuevo CSV de Scopus con el JSON exportado por VOSviewer.` });
  corpus.push({ keys:['clúster','cluster','clústeres','clusters'], answer: data.clusters.map(item => `${item.name}: ${item.focus}.`).join(' ') });
  corpus.push(...data.glossary.map(item => ({
    keys:[item.term.toLowerCase()],
    answer:`${item.term}: ${item.definition}`
  })));
  corpus.push(...data.wordAnalyses.map(item => ({
    keys:[item.term.toLowerCase()],
    answer:`${item.term}: ${item.analysis} Conclusión: ${item.conclusion}`
  })));
  return corpus;
}
const assistantCorpus = buildAssistantCorpus();

function answerQuestion(question){
  const q = question.toLowerCase();
  let best = null;
  let bestScore = 0;

  assistantCorpus.forEach(item => {
    let score = 0;
    item.keys.forEach(key => {
      if(q.includes(key)) score += key.length;
    });
    if(score > bestScore){
      bestScore = score;
      best = item.answer;
    }
  });

  if(best) return best;

  if(q.includes('terminos') || q.includes('términos')){
    return "Los nodos dominantes del mapa son 'non terrestrial network', 'ntn', 'network', 'terrestrial network', 'leo' y 'system'.";
  }
  if(q.includes('leo')){
    return "LEO concentra la parte operativa del problema NTN: movilidad orbital, sincronización, estrategia y handover.";
  }
  return "Puedo ayudarte con el mapa, los clústeres, las palabras clave, la metodología, el equipo o el mini-caso del sitio.";
}

function addChatBubble(text, role='assistant'){
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${role}`;
  bubble.textContent = text;
  byId('chatLog').appendChild(bubble);
  byId('chatLog').scrollTop = byId('chatLog').scrollHeight;
}

function setAssistantOpen(open){
  state.assistantOpen = open;
  byId('assistantPanel').classList.toggle('hidden', !open);
  byId('assistantFab').style.display = open ? 'none' : 'inline-flex';
}

function setupAssistant(){
  byId('assistantPrompts').innerHTML = data.assistant.prompts.map(prompt => `
    <button class="prompt-chip" type="button">${escapeHtml(prompt)}</button>
  `).join('');
  document.querySelectorAll('.prompt-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      addChatBubble(btn.textContent, 'user');
      window.setTimeout(() => addChatBubble(answerQuestion(btn.textContent), 'assistant'), 90);
      setAssistantOpen(true);
    });
  });

  byId('assistantToggleMain').addEventListener('click', () => {
    setAssistantOpen(!state.assistantOpen);
  });
  byId('assistantFab').addEventListener('click', () => setAssistantOpen(true));
  byId('assistantHide').addEventListener('click', () => setAssistantOpen(false));
  byId('assistantClose').addEventListener('click', () => setAssistantOpen(false));

  byId('chatForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = byId('chatInput');
    const question = input.value.trim();
    if(!question) return;
    addChatBubble(question, 'user');
    window.setTimeout(() => addChatBubble(answerQuestion(question), 'assistant'), 90);
    input.value = '';
  });

  addChatBubble("Hola. Puedes preguntarme por el mapa, los clústeres, el mini-caso o cualquier término principal del sitio.", 'assistant');
}

function setupTopButton(){
  const btn = byId('toTopBtn');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 200);
  });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

function init(){
  renderHero();
  renderDashboard();
  renderTeam();
  renderMethodology();
  renderClusters();
  renderWordAnalyses();
  renderMiniCase();
  renderReflection();
  renderReferences();
  setupTabs();
  setupMap();
  setupWordSearch();
  setupAssistant();
  setupTopButton();
}

document.addEventListener('DOMContentLoaded', init);
