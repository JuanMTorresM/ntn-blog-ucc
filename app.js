
const data = window.SITE_DATA;

function byId(id) { return document.getElementById(id); }
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
function setText(id, value) { const el = byId(id); if (el) el.textContent = value; }

function renderIntro() {
  setText('site-title', data.meta.title);
  setText('site-subtitle', data.meta.subtitle);
  setText('declaration', data.meta.declaration);
  byId('hero-highlights').innerHTML = data.meta.highlights.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('team-list').innerHTML = data.team.map(item => `<li><strong>${escapeHtml(item.name)}</strong> · ${escapeHtml(item.id)}</li>`).join('');
  setText('research-question', data.research.question);
  setText('general-objective', data.research.general_objective);
  byId('specific-objectives').innerHTML = data.research.specific_objectives.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('glossary').innerHTML = data.glossary.map(item => `<div class="glossary-item"><strong>${escapeHtml(item.term)}</strong><br>${escapeHtml(item.definition)}</div>`).join('');
  const heroStats = (data.stats || []).slice(0, 4);
  byId('hero-stats').innerHTML = heroStats.map(item => `<div class="hero-stat"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></div>`).join('');
  const findings = [
    'La literatura NTN gira alrededor de integración satelital-terrestre, cobertura extendida y continuidad de servicio.',
    'Los desafíos más visibles son movilidad, handover, Doppler, sincronización y compatibilidad con 5G-Advanced.',
    'Los clústeres conectan arquitectura, segmento espacial, radioenlace y optimización inteligente.',
    'El mini-caso muestra la sensibilidad del margen de enlace a frecuencia, pérdidas y altura orbital.'
  ];
  byId('instant-findings').innerHTML = findings.map(item => `<div class="highlight-item">${escapeHtml(item)}</div>`).join('');
}

function renderMethodology() {
  byId('search-query').textContent = data.method.search_query;
  byId('method-steps').innerHTML = data.method.steps.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('kpi-grid').innerHTML = data.stats.map(item => `<div class="stat-card"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong><div>${escapeHtml(item.note)}</div></div>`).join('');
  byId('removed-terms').innerHTML = data.method.removed_terms.map(item => `<tr><td>${escapeHtml(item.term)}</td><td>${escapeHtml(item.count)}</td><td>${escapeHtml(item.reason)}</td></tr>`).join('');
}

function renderResultsNarrative() {
  const items = [
    'El mapa general concentra un núcleo fuerte en integración satelital, arquitectura NTN y continuidad de cobertura.',
    'Los términos más frecuentes refuerzan la relación entre órbitas LEO, handover, Doppler y compatibilidad con ecosistemas 5G/6G.',
    'La red bibliométrica sugiere que NTN dejó de tratarse como componente aislado y aparece como extensión funcional del acceso avanzado.'
  ];
  byId('results-narrative').innerHTML = items.map(text => `<div class="highlight-item">${escapeHtml(text)}</div>`).join('');
}

function renderClusters() {
  byId('cluster-grid').innerHTML = data.clusters.map(cluster => `
    <article class="cluster-card">
      <h3><span class="cluster-badge" style="background:${cluster.color}"></span>${escapeHtml(cluster.name)}</h3>
      <p class="cluster-meta">${cluster.node_count} términos · fuerza interna ${cluster.edge_strength}</p>
      <p>${escapeHtml(cluster.summary)}</p>
      <p><strong>Términos líderes:</strong> ${cluster.top_terms.map(escapeHtml).join(', ')}</p>
      <p><strong>Oportunidades:</strong> ${escapeHtml(cluster.opportunities)}</p>
    </article>
  `).join('');
}

function renderAnalysis(filter = '') {
  const normalized = filter.trim().toLowerCase();
  const list = data.word_analyses.filter(item => !normalized || item.display.toLowerCase().includes(normalized) || item.word.toLowerCase().includes(normalized) || item.cluster.toLowerCase().includes(normalized));
  byId('analysis-list').innerHTML = list.map(item => `
    <article class="analysis-card">
      <h3>${escapeHtml(item.display)}</h3>
      <p class="cluster-meta">Clúster: ${escapeHtml(item.cluster)} · frecuencia ${escapeHtml(item.frequency)} · fuerza total ${escapeHtml(item.total_strength)}</p>
      <p>${escapeHtml(item.analysis)}</p>
      <p><strong>Conclusión:</strong> ${escapeHtml(item.conclusion)}</p>
      <div class="analysis-links">
        ${item.links.slice(0, 10).map(link => `<div class="analysis-link-item"><span>${escapeHtml(link.term)} <small>(${escapeHtml(link.cluster)})</small></span><strong>${escapeHtml(link.strength)}</strong></div>`).join('')}
      </div>
    </article>
  `).join('');
  byId('analysis-chips').innerHTML = list.slice(0, 12).map(item => `<div class="analysis-chip">${escapeHtml(item.display)}</div>`).join('');
}

function renderMiniCase() {
  setText('mini-title', data.mini_case.title);
  setText('mini-description', data.mini_case.description);
  byId('mini-assumptions').innerHTML = data.mini_case.assumptions.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('mini-findings').innerHTML = data.mini_case.findings.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('input-frequency').value = data.mini_case.default_inputs.frequency_ghz;
  byId('input-altitude').value = data.mini_case.default_inputs.altitude_km;
  byId('input-tx').value = data.mini_case.default_inputs.tx_power_dbm;
  byId('input-gain').value = data.mini_case.default_inputs.total_gain_db;
  byId('input-loss').value = data.mini_case.default_inputs.extra_losses_db;
  byId('input-threshold').value = data.mini_case.default_inputs.required_threshold_db;
  calculateMiniCase();
}

function calculateMiniCase() {
  const frequencyGHz = parseFloat(byId('input-frequency').value);
  const altitudeKm = parseFloat(byId('input-altitude').value);
  const txPower = parseFloat(byId('input-tx').value);
  const totalGain = parseFloat(byId('input-gain').value);
  const extraLoss = parseFloat(byId('input-loss').value);
  const threshold = parseFloat(byId('input-threshold').value);
  const distanceKm = Math.max(altitudeKm, 1);
  const fspl = 92.45 + 20 * Math.log10(Math.max(frequencyGHz, 0.1)) + 20 * Math.log10(distanceKm);
  const rxPower = txPower + totalGain - fspl - extraLoss;
  const margin = rxPower - threshold;
  const dopplerIndicator = (frequencyGHz * 1000 * 7.5) / 300000;
  const cards = [
    { label: 'FSPL estimada', value: `${fspl.toFixed(2)} dB` },
    { label: 'Potencia recibida', value: `${rxPower.toFixed(2)} dBm` },
    { label: 'Margen de enlace', value: `${margin.toFixed(2)} dB` },
    { label: 'Indicador Doppler', value: `${dopplerIndicator.toFixed(2)} kHz aprox.` }
  ];
  byId('mini-results').innerHTML = cards.map(card => `<div class="mini-result-card"><strong>${escapeHtml(card.label)}</strong><br><span>${escapeHtml(card.value)}</span></div>`).join('');
}

function renderReferences() {
  byId('reference-list').innerHTML = data.references.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}
function renderReflection() {
  byId('reflection-list').innerHTML = data.reflection.points.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('reflection-cards').innerHTML = data.reflection.professional_lessons.map(item => `<div class="reflection-card">${escapeHtml(item)}</div>`).join('');
}
function renderVideo() {
  const container = byId('video-frame');
  const videoId = data.meta.youtube_video_id || '';
  if (videoId && !videoId.includes('REEMPLAZAR')) {
    container.innerHTML = `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(videoId)}" title="Video de sustentación NTN" allowfullscreen loading="lazy"></iframe>`;
  } else {
    container.innerHTML = `<div class="placeholder-box"><div><h3>Video de sustentación</h3><p>Espacio reservado para la socialización final del proyecto.</p></div></div>`;
  }
}

function setupTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;
      buttons.forEach(btn => { btn.classList.remove('active'); btn.setAttribute('aria-selected', 'false'); });
      panels.forEach(panel => panel.classList.remove('active'));
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      byId(target).classList.add('active');
    });
  });
}

function getAssistantAnswer(question) {
  const q = question.toLowerCase();
  const corpus = [];
  corpus.push(...data.glossary.map(item => ({ keys: [item.term.toLowerCase()], answer: `${item.term}: ${item.definition}` })));
  corpus.push(...data.clusters.map(item => ({ keys: [item.name.toLowerCase(), ...(item.top_terms || []).map(t => String(t).toLowerCase())], answer: `${item.name}: ${item.summary} Oportunidades: ${item.opportunities}` })));
  corpus.push(...data.word_analyses.map(item => ({ keys: [item.word.toLowerCase(), item.display.toLowerCase()], answer: `${item.display}: ${item.analysis} Conclusión: ${item.conclusion}` })));
  corpus.push(
    { keys: ['mini caso', 'link budget', 'doppler', 'leo'], answer: `${data.mini_case.title}: ${data.mini_case.description}` },
    { keys: ['metodologia', 'búsqueda', 'scopus', 'vosviewer'], answer: `Metodología: ${data.method.steps.join(' ')}` },
    { keys: ['objetivo', 'objetivos'], answer: `Objetivo general: ${data.research.general_objective}` }
  );
  const match = corpus.find(item => item.keys.some(key => q.includes(key)));
  return match ? match.answer : 'Puedo ayudarte con conceptos de NTN, resultados, clústeres, palabras seleccionadas, metodología o mini-caso.';
}

function addChatBubble(text, role = 'assistant') {
  const div = document.createElement('div');
  div.className = `chat-bubble ${role}`;
  div.textContent = text;
  byId('chat-log').appendChild(div);
  byId('chat-log').scrollTop = byId('chat-log').scrollHeight;
}

function setupAssistant() {
  const panel = byId('assistant-panel');
  const fab = byId('assistant-fab');
  const topBtn = byId('toggle-assistant-top');
  const navBtn = byId('toggle-assistant-nav');
  const closeBtn = byId('assistant-close');
  const collapseBtn = byId('assistant-collapse');
  const form = byId('chat-form');
  const input = byId('chat-input');
  let visible = true;

  function syncButtons() {
    topBtn.textContent = visible ? 'Ocultar asistente IA' : 'Mostrar asistente IA';
    navBtn.textContent = visible ? 'Ocultar IA' : 'Mostrar IA';
    fab.setAttribute('aria-expanded', visible ? 'true' : 'false');
  }
  function showPanel() { visible = true; panel.classList.remove('hidden'); syncButtons(); }
  function hidePanel() { visible = false; panel.classList.add('hidden'); syncButtons(); }
  function togglePanel() { visible ? hidePanel() : showPanel(); }

  [topBtn, navBtn, fab].forEach(btn => btn.addEventListener('click', togglePanel));
  closeBtn.addEventListener('click', hidePanel);
  collapseBtn.addEventListener('click', hidePanel);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    addChatBubble(question, 'user');
    const answer = getAssistantAnswer(question);
    window.setTimeout(() => addChatBubble(answer, 'assistant'), 120);
    input.value = '';
  });

  const prompts = ['¿Qué significa LEO?', 'Resume los clústeres', '¿Qué analiza el mini-caso?', '¿Cuál es la metodología usada?'];
  byId('quick-prompts').innerHTML = prompts.map(prompt => `<button class="prompt-btn" type="button">${escapeHtml(prompt)}</button>`).join('');
  document.querySelectorAll('.prompt-btn').forEach(btn => btn.addEventListener('click', () => {
    addChatBubble(btn.textContent, 'user');
    const answer = getAssistantAnswer(btn.textContent);
    window.setTimeout(() => addChatBubble(answer, 'assistant'), 120);
  }));
  addChatBubble('Hola. Soy el asistente del blog NTN. Puedes ocultarme o mostrarme cuando quieras.', 'assistant');
  syncButtons();
}

function setupBackToTop() {
  const btn = byId('back-to-top');
  window.addEventListener('scroll', () => window.scrollY > 500 ? btn.classList.add('visible') : btn.classList.remove('visible'));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
function setupAnalysisFilter() {
  const input = byId('analysis-filter');
  input.addEventListener('input', () => renderAnalysis(input.value));
}
function boot() {
  renderIntro();
  renderMethodology();
  renderResultsNarrative();
  renderClusters();
  renderAnalysis();
  renderMiniCase();
  renderReferences();
  renderReflection();
  renderVideo();
  byId('mini-run').addEventListener('click', calculateMiniCase);
  setupTabs();
  setupAssistant();
  setupBackToTop();
  setupAnalysisFilter();
}
boot();
