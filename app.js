const data = window.SITE_DATA;

const el = (id) => document.getElementById(id);
const q = (sel, node = document) => Array.from(node.querySelectorAll(sel));

function esc(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function fillHero() {
  el("site-title").textContent = data.meta.title;
  el("site-subtitle").textContent = data.meta.subtitle;
  el("declaration").textContent = data.meta.declaration;

  el("hero-metrics").innerHTML = data.meta.hero_metrics.map(item => `
    <div class="metric-card">
      <span>${esc(item.label)}</span>
      <strong>${esc(item.value)}</strong>
    </div>
  `).join("");

  el("hero-highlights").innerHTML = data.meta.highlights.map(item => `
    <div class="highlight-item">${esc(item)}</div>
  `).join("");
}

function fillOverview() {
  el("research-question").textContent = data.research.question;
  el("general-objective").textContent = data.research.general_objective;
  el("team-list").innerHTML = data.team.map(item => `<li><strong>${esc(item.name)}</strong> · ${esc(item.id)}</li>`).join("");
  el("specific-objectives").innerHTML = data.research.specific_objectives.map(item => `<li>${esc(item)}</li>`).join("");

  el("glossary").innerHTML = data.glossary.map(item => `
    <div class="scope-card">
      <h4>${esc(item.term)}</h4>
      <div>${esc(item.definition)}</div>
    </div>
  `).join("");

  el("scope-cards").innerHTML = data.research.scope_cards.map(item => `
    <div class="scope-card">
      <h4>${esc(item.title)}</h4>
      <div>${esc(item.text)}</div>
    </div>
  `).join("");
}

function fillMethod() {
  el("stats-grid").innerHTML = data.stats.map(item => `
    <div class="stat-card">
      <span>${esc(item.label)}</span>
      <strong>${esc(item.value)}</strong>
      <div>${esc(item.note)}</div>
    </div>
  `).join("");

  el("search-query").textContent = data.method.search_query;
  el("method-steps").innerHTML = data.method.steps.map(item => `<li>${esc(item)}</li>`).join("");

  el("removed-terms").innerHTML = data.method.removed_terms.map(item => `
    <tr>
      <td>${esc(item.term)}</td>
      <td>${esc(item.count)}</td>
      <td>${esc(item.reason)}</td>
    </tr>
  `).join("");

  el("workflow-cards").innerHTML = data.method.workflow_cards.map(item => `
    <div class="workflow-card">
      <h4>${esc(item.title)}</h4>
      <div>${esc(item.text)}</div>
    </div>
  `).join("");
}

function fillResults() {
  el("results-gallery").innerHTML = data.results.gallery.map(item => `
    <figure class="gallery-card">
      <img src="${esc(item.image)}" alt="${esc(item.label)}">
      <figcaption>
        <strong>${esc(item.label)}</strong><br>
        ${esc(item.caption)}
      </figcaption>
    </figure>
  `).join("");

  el("result-insights").innerHTML = data.results.insight_cards.map(item => `
    <article class="card-glass">
      <p class="card-kicker">Insight</p>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
    </article>
  `).join("");
}

function fillClusters() {
  el("cluster-cards").innerHTML = data.clusters.map(item => `
    <div class="cluster-item">
      <div class="cluster-title">
        <span class="cluster-dot" style="background:${esc(item.color)}"></span>
        <strong>${esc(item.name)}</strong>
      </div>
      <div class="cluster-meta">${esc(item.node_count)} términos · fuerza interna ${esc(item.edge_strength)}</div>
      <p>${esc(item.summary)}</p>
      <p><strong>Términos líderes:</strong> ${item.top_terms.map(esc).join(", ")}</p>
      <p><strong>Oportunidades:</strong> ${esc(item.opportunities)}</p>
    </div>
  `).join("");
}

function renderAnalysis(filter = "") {
  const norm = filter.trim().toLowerCase();
  const items = data.word_analyses.filter(item => {
    if (!norm) return true;
    const body = [
      item.word, item.display, item.cluster, item.analysis, item.conclusion,
      ...item.links.map(link => link.term)
    ].join(" ").toLowerCase();
    return body.includes(norm);
  });

  el("analysis-list").innerHTML = items.map(item => `
    <details class="analysis-accordion">
      <summary>
        <div>
          <strong>${esc(item.display)}</strong>
          <div class="analysis-summary-meta">Clúster: ${esc(item.cluster)} · frecuencia ${esc(item.frequency)} · fuerza total ${esc(item.total_strength)}</div>
        </div>
        <span>Ver</span>
      </summary>
      <div class="analysis-body">
        <p>${esc(item.analysis)}</p>
        <p><strong>Conclusión:</strong> ${esc(item.conclusion)}</p>
        <div class="link-grid">
          ${item.links.map(link => `
            <div class="link-item">
              <span>${esc(link.term)}</span>
              <span class="link-cluster">${esc(link.cluster)}</span>
              <strong>${esc(link.strength)}</strong>
            </div>
          `).join("")}
        </div>
      </div>
    </details>
  `).join("");

  if (!items.length) {
    el("analysis-list").innerHTML = `<div class="card-glass"><p>No se encontraron coincidencias para ese filtro.</p></div>`;
  }
}

function fillFeaturedTerms() {
  el("featured-terms").innerHTML = data.featured_terms.map(term => `
    <button class="term-chip" type="button" data-term="${esc(term)}">${esc(term)}</button>
  `).join("");

  q(".term-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      el("analysis-filter").value = btn.dataset.term;
      openMainTab("tab-palabras");
      renderAnalysis(btn.dataset.term);
    });
  });
}

function fillMiniCase() {
  el("mini-title").textContent = data.mini_case.title;
  el("mini-description").textContent = data.mini_case.description;
  el("mini-assumptions").innerHTML = data.mini_case.assumptions.map(item => `<li>${esc(item)}</li>`).join("");
  el("mini-findings").innerHTML = data.mini_case.findings.map(item => `<li>${esc(item)}</li>`).join("");

  el("input-frequency").value = data.mini_case.defaults.frequency_ghz;
  el("input-altitude").value = data.mini_case.defaults.altitude_km;
  el("input-tx").value = data.mini_case.defaults.tx_power_dbm;
  el("input-gain").value = data.mini_case.defaults.total_gain_db;
  el("input-loss").value = data.mini_case.defaults.extra_losses_db;
  el("input-threshold").value = data.mini_case.defaults.required_threshold_db;
}

function calculateMiniCase() {
  const frequency = parseFloat(el("input-frequency").value);
  const altitude = parseFloat(el("input-altitude").value);
  const tx = parseFloat(el("input-tx").value);
  const gain = parseFloat(el("input-gain").value);
  const losses = parseFloat(el("input-loss").value);
  const threshold = parseFloat(el("input-threshold").value);

  const distance = Math.max(altitude, 1);
  const fspl = 92.45 + 20 * Math.log10(Math.max(frequency, 0.1)) + 20 * Math.log10(distance);
  const prx = tx + gain - fspl - losses;
  const margin = prx - threshold;
  const delay = (distance / 299792.458) * 1000;
  const dopplerKhz = (frequency * 1000 * 7.5) / 300000;

  const cards = [
    { label: "FSPL estimada", value: `${fspl.toFixed(2)} dB` },
    { label: "Potencia recibida", value: `${prx.toFixed(2)} dBm` },
    { label: "Margen", value: `${margin.toFixed(2)} dB` },
    { label: "Retardo unidireccional", value: `${delay.toFixed(2)} ms` },
    { label: "Indicador Doppler", value: `${dopplerKhz.toFixed(2)} kHz` },
    { label: "Lectura", value: margin >= 0 ? "Escenario favorable" : "Escenario exigente" }
  ];

  el("mini-results").innerHTML = cards.map(item => `
    <div class="result-box">
      <span>${esc(item.label)}</span>
      <strong>${esc(item.value)}</strong>
    </div>
  `).join("");
}

function fillReflection() {
  el("reflection-points").innerHTML = data.reflection.points.map(item => `<li>${esc(item)}</li>`).join("");
  el("reflection-lessons").innerHTML = data.reflection.professional_lessons.map(item => `
    <div class="reflection-card">${esc(item)}</div>
  `).join("");
}

function fillReferences() {
  el("reference-list").innerHTML = data.references.map(item => `<li>${esc(item)}</li>`).join("");
}

function setupMainTabs() {
  q(".tab-btn[data-tab-target]").forEach(btn => {
    btn.addEventListener("click", () => openMainTab(btn.dataset.tabTarget));
  });

  q("[data-open-main-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      openMainTab(btn.dataset.openMainTab);
      document.querySelector('.section-frame').scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function openMainTab(id) {
  q(".tab-btn[data-tab-target]").forEach(btn => {
    const active = btn.dataset.tabTarget === id;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
  q(".tab-panel").forEach(panel => panel.classList.toggle("active", panel.id === id));
}

function setupLabTabs() {
  q(".tab-btn[data-lab-target]").forEach(btn => {
    btn.addEventListener("click", () => openLabTab(btn.dataset.labTarget));
  });
  q("[data-open-lab-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      openLabTab(btn.dataset.openLabTab);
      document.querySelectorAll('.section-frame')[1].scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function openLabTab(id) {
  q(".tab-btn[data-lab-target]").forEach(btn => btn.classList.toggle("active", btn.dataset.labTarget === id));
  q(".lab-panel").forEach(panel => panel.classList.toggle("active", panel.id === id));
}

function setupResultTabs() {
  q(".subtab-btn[data-result-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      q(".subtab-btn[data-result-target]").forEach(x => x.classList.toggle("active", x === btn));
      q(".result-panel").forEach(panel => panel.classList.toggle("active", panel.id === btn.dataset.resultTarget));
    });
  });
}

function setupMiniCharts() {
  q("[data-mini-chart]").forEach(btn => {
    btn.addEventListener("click", () => {
      q("[data-mini-chart]").forEach(x => x.classList.toggle("active", x === btn));
      const src = btn.dataset.miniChart === "margin" ? data.mini_case.chart_margin : data.mini_case.chart_doppler;
      el("mini-chart").src = src;
      el("mini-chart").alt = btn.dataset.miniChart === "margin" ? "Gráfico del margen de enlace en el mini-caso" : "Gráfico del perfil Doppler en el mini-caso";
    });
  });
}

function setupPresets() {
  q("[data-preset]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.preset === "iot") {
        el("input-frequency").value = 2.0;
        el("input-altitude").value = 600;
        el("input-tx").value = 23;
        el("input-gain").value = 35;
        el("input-loss").value = 3;
        el("input-threshold").value = -101;
      } else {
        el("input-frequency").value = 20.0;
        el("input-altitude").value = 600;
        el("input-tx").value = 23;
        el("input-gain").value = 70;
        el("input-loss").value = 5;
        el("input-threshold").value = -92;
      }
      calculateMiniCase();
    });
  });
}

function tokenize(text) {
  return String(text).toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9ñáéíóúü\s-]/g, " ")
    .split(/\s+/)
    .filter(token => token.length > 2);
}

function assistantCorpus() {
  const corpus = [];
  corpus.push({
    title: "Proyecto",
    text: [data.research.question, data.research.general_objective, ...data.research.specific_objectives].join(" "),
    keywords: ["objetivo","pregunta","alcance","equipo","integrantes"]
  });
  data.glossary.forEach(item => corpus.push({
    title: item.term,
    text: item.definition,
    keywords: [item.term]
  }));
  data.clusters.forEach(item => corpus.push({
    title: item.name,
    text: `${item.summary} ${item.opportunities} ${item.top_terms.join(" ")}`,
    keywords: [item.name, ...item.top_terms]
  }));
  data.word_analyses.forEach(item => corpus.push({
    title: item.display,
    text: `${item.analysis} ${item.conclusion} ${item.cluster} ${item.links.map(link => link.term).join(" ")}`,
    keywords: [item.display, item.word, item.cluster]
  }));
  corpus.push({
    title: data.mini_case.title,
    text: `${data.mini_case.description} ${data.mini_case.assumptions.join(" ")} ${data.mini_case.findings.join(" ")}`,
    keywords: ["mini caso","leo","doppler","margen","enlace","gateway"]
  });
  corpus.push({
    title: "Metodología",
    text: `${data.method.search_query} ${data.method.steps.join(" ")} ${data.method.removed_terms.map(x => x.term + " " + x.reason).join(" ")}`,
    keywords: ["metodologia","busqueda","scopus","vosviewer","depuracion"]
  });
  return corpus;
}

function assistantAnswer(question) {
  const corpus = assistantCorpus();
  const qTokens = tokenize(question);
  let best = null;
  let bestScore = 0;

  for (const item of corpus) {
    const bag = tokenize(`${item.title} ${item.text} ${item.keywords.join(" ")}`);
    let score = 0;
    for (const token of qTokens) {
      if (item.keywords.some(key => String(key).toLowerCase().includes(token))) score += 5;
      const count = bag.filter(t => t === token).length;
      score += Math.min(count, 3);
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (!best || bestScore < 2) {
    return "Puedo responder sobre conceptos NTN, metodología de búsqueda, clústeres del mapa, términos seleccionados o resultados del mini-caso técnico.";
  }

  return `${best.title}: ${best.text}`;
}

function addAssistantBubble(text, role) {
  const div = document.createElement("div");
  div.className = `assistant-bubble ${role}`;
  div.textContent = text;
  el("assistant-log").appendChild(div);
  el("assistant-log").scrollTop = el("assistant-log").scrollHeight;
}

function setupAssistant() {
  const panel = el("assistant-panel");
  const fab = el("assistant-fab");
  const topBtn = el("assistant-toggle-top");
  const closeBtn = el("assistant-close");
  const minBtn = el("assistant-min");
  const form = el("assistant-form");
  const input = el("assistant-input");

  let visible = window.innerWidth > 760;

  function refreshPanel() {
    panel.classList.toggle("hidden", !visible);
    fab.setAttribute("aria-expanded", visible ? "true" : "false");
    if (topBtn) topBtn.textContent = visible ? "Ocultar asistente" : "Asistente";
  }

  function togglePanel() {
    visible = !visible;
    refreshPanel();
  }

  if (topBtn) topBtn.addEventListener("click", togglePanel);
  fab.addEventListener("click", togglePanel);
  closeBtn.addEventListener("click", () => { visible = false; refreshPanel(); });
  minBtn.addEventListener("click", () => { visible = false; refreshPanel(); });

  el("assistant-prompts").innerHTML = data.assistant.prompts.map(prompt => `
    <button class="prompt-chip" type="button">${esc(prompt)}</button>
  `).join("");

  q(".prompt-chip", el("assistant-prompts")).forEach(btn => {
    btn.addEventListener("click", () => {
      addAssistantBubble(btn.textContent, "user");
      window.setTimeout(() => addAssistantBubble(assistantAnswer(btn.textContent), "bot"), 120);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    addAssistantBubble(question, "user");
    input.value = "";
    window.setTimeout(() => addAssistantBubble(assistantAnswer(question), "bot"), 120);
  });

  addAssistantBubble(data.assistant.welcome, "bot");
  refreshPanel();
}

function setupBackToTop() {
  const btn = el("back-to-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 520);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function boot() {
  fillHero();
  fillOverview();
  fillMethod();
  fillResults();
  fillClusters();
  fillFeaturedTerms();
  renderAnalysis();
  fillMiniCase();
  calculateMiniCase();
  fillReflection();
  fillReferences();

  el("analysis-filter").addEventListener("input", event => renderAnalysis(event.target.value));
  el("mini-run").addEventListener("click", calculateMiniCase);

  setupMainTabs();
  setupLabTabs();
  setupResultTabs();
  setupMiniCharts();
  setupPresets();
  setupAssistant();
  setupBackToTop();
}

boot();
