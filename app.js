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

function renderIntro() {
  byId('site-title').textContent = data.meta.title;
  byId('site-subtitle').textContent = data.meta.subtitle;
  byId('declaration').textContent = data.meta.declaration;
  byId('hero-highlights').innerHTML = data.meta.highlights.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('team-list').innerHTML = data.team.map(item => `<li><strong>${escapeHtml(item.name)}</strong> · ${escapeHtml(item.id)}</li>`).join('');
  byId('research-question').textContent = data.research.question;
  byId('general-objective').textContent = data.research.general_objective;
  byId('specific-objectives').innerHTML = data.research.specific_objectives.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('glossary').innerHTML = data.glossary.map(item => `<div class="glossary-item"><strong>${escapeHtml(item.term)}</strong><br>${escapeHtml(item.definition)}</div>`).join('');
}

function renderMethodology() {
  byId('search-query').textContent = data.method.search_query;
  byId('method-steps').innerHTML = data.method.steps.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  byId('kpi-grid').innerHTML = data.stats.map(item => `
    <div class="stat-card">
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
  const list = data.word_analyses.filter(item => {
    return !normalized || item.display.toLowerCase().includes(normalized) || item.word.toLowerCase().includes(normalized) || item.cluster.toLowerCase().includes(normalized);
  });
  byId('analysis-list').innerHTML = list.map(item => `
    <article class="analysis-card">
      <h3>${escapeHtml(item.display)}</h3>
      <p class="cluster-meta">Clúster: ${escapeHtml(item.cluster)} · frecuencia ${item.frequency}</p>
      <div class="analysis-grid">
        <div>
          <img src="${escapeHtml(item.image)}" alt="Red local de ${escapeHtml(item.display)}" />
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
    wrapper.innerHTML = `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(data.video.youtube_id)}" title="Sustentación NTN" allowfullscreen></iframe>`;
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
      <div class="feedback-item"><strong>${escapeHtml(item.name)}</strong><br>${escapeHtml(item.text)}</div>
    `).join('') : '<div class="feedback-item">Aún no hay comentarios locales guardados en este navegador.</div>';
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
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
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
