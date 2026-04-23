/**
 * NTN — Non-Terrestrial Networks
 * Main Application Script
 * All interactivity: tabs, chatbot, mini-case, charts, filters
 */

// ============================================
// DATA ACCESS
// ============================================
const DATA = window.SITE_DATA;

// ============================================
// PARTICLE BACKGROUND
// ============================================
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    const count = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
    init();
  });

  init();
  animate();
}

// ============================================
// NAVIGATION TABS
// ============================================
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;
      if (!targetId) return;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active panel
      panels.forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById(`tab-${targetId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Draw chart if results tab is activated
      if (targetId === 'resultados') {
        setTimeout(() => drawProductionChart(), 300);
        setTimeout(() => drawProductionChart(), 600);
      }

      // Close mobile menu
      document.getElementById('mobile-menu')?.classList.remove('open');
    });
  });

  // Mobile toggle
  const mobileToggle = document.getElementById('nav-mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }
}

function scrollToSection(tabName) {
  // Activate the tab
  const tabs = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));

  // Find and activate the matching tab
  const targetTab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
  if (targetTab) {
    targetTab.classList.add('active');
    const targetPanel = document.getElementById(`tab-${tabName}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

// ============================================
// HERO RENDERING
// ============================================
function renderHero() {
  // Declaration
  const declarationEl = document.getElementById('hero-declaration');
  if (declarationEl) {
    declarationEl.textContent = DATA.declaration;
  }

  // Team
  const teamEl = document.getElementById('hero-team');
  if (teamEl) {
    const initials = name => name.split(' ').map(n => n[0]).join('').substring(0, 2);
    teamEl.innerHTML = `
      <div class="hero-team-label">Equipo de Investigación</div>
      <div class="team-grid">
        ${DATA.integrantes.map(m => `
          <div class="team-member">
            <div class="team-avatar">${initials(m.nombre)}</div>
            <span class="team-name">${m.nombre.split(' ').slice(0, 2).join(' ')}</span>
            <span class="team-code">${m.codigo}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Stats
  const statsEl = document.getElementById('hero-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="hero-stat">
        <span class="hero-stat-value">${DATA.estadisticas.totalDocumentos}</span>
        <span class="hero-stat-label">Documentos</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-value">${DATA.estadisticas.crecimientoAnual}%</span>
        <span class="hero-stat-label">Crecimiento anual</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-value">${DATA.estadisticas.paises}</span>
        <span class="hero-stat-label">Países</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-value">h-${DATA.estadisticas.hIndex}</span>
        <span class="hero-stat-label">Índice H</span>
      </div>
    `;
  }
}

// ============================================
// INICIO TAB CONTENT
// ============================================
function renderInicio() {
  // Research question
  const rqEl = document.getElementById('research-question');
  if (rqEl) rqEl.textContent = DATA.investigacion.pregunta;

  // Objective
  const objEl = document.getElementById('research-objective');
  if (objEl) objEl.textContent = DATA.investigacion.objetivoGeneral;

  // Objectives list
  const objListEl = document.getElementById('objectives-list');
  if (objListEl) {
    objListEl.innerHTML = DATA.investigacion.objetivosEspecificos.map(obj =>
      `<li>${obj}</li>`
    ).join('');
  }

  // Glossary
  const glossaryEl = document.getElementById('glossary-grid');
  if (glossaryEl) {
    glossaryEl.innerHTML = DATA.glosario.map(item => `
      <div class="glossary-item">
        <div class="glossary-term">${item.termino}</div>
        <div class="glossary-def">${item.definicion}</div>
      </div>
    `).join('');
  }

  // Video message
  const videoMsgEl = document.getElementById('video-message');
  if (videoMsgEl) videoMsgEl.textContent = DATA.video.mensaje;

  // References
  const refEl = document.getElementById('references-list');
  if (refEl) {
    refEl.innerHTML = DATA.referencias.map(ref => `<li>${ref}</li>`).join('');
  }

  // Footer team
  const footerTeamEl = document.getElementById('footer-team');
  if (footerTeamEl) {
    footerTeamEl.innerHTML = DATA.integrantes.map(m => `
      <div class="footer-member">
        <strong>${m.nombre}</strong> — ${m.codigo}
      </div>
    `).join('');
  }
}

// ============================================
// MINI-CASE CALCULATOR
// ============================================
function updateMiniCase() {
  const altura = parseFloat(document.getElementById('mc-altura')?.value || 550);
  const frecuencia = parseFloat(document.getElementById('mc-frecuencia')?.value || 2.0);
  const potencia = parseFloat(document.getElementById('mc-potencia')?.value || 30);
  const gTx = parseFloat(document.getElementById('mc-gtx')?.value || 25);
  const gRx = parseFloat(document.getElementById('mc-grx')?.value || 20);
  const anguloElev = parseFloat(document.getElementById('mc-angulo')?.value || 30);

  // Update displayed values
  document.getElementById('mc-altura-val').textContent = `${altura} km`;
  document.getElementById('mc-frecuencia-val').textContent = `${frecuencia.toFixed(1)} GHz`;
  document.getElementById('mc-potencia-val').textContent = `${potencia} dBm`;
  document.getElementById('mc-gtx-val').textContent = `${gTx} dBi`;
  document.getElementById('mc-grx-val').textContent = `${gRx} dBi`;
  document.getElementById('mc-angulo-val').textContent = `${anguloElev}°`;

  // Earth radius in km
  const R = 6371;
  // Satellite orbital radius
  const r = R + altura;
  // Central angle from ground station to satellite
  const elevRad = anguloElev * Math.PI / 180;
  // Using spherical geometry: cos(elev + phi) = R/r * cos(elev)
  const phi = Math.acos(Math.min(1, (R / r) * Math.cos(elevRad))) - elevRad;
  // Great circle distance from ground station to subsatellite point
  const dGround = R * phi;
  // Slant range (distance to satellite)
  const dSat = Math.sqrt(R * R + r * r - 2 * R * r * Math.cos(phi));

  // Free space path loss
  const c = 299792458; // m/s
  const fHz = frecuencia * 1e9;
  const lambda = c / fHz;
  const dMeters = dSat * 1000;
  const fspl_dB = 20 * Math.log10(4 * Math.PI * dMeters / lambda);

  // Doppler shift (max at horizon crossing)
  const vSat = Math.sqrt(398600.4418 / r); // km/s using GM_earth
  const dopplerMax = (fHz * vSat * 1000 / c) / 1000; // kHz

  // Received power
  const prx = potencia + gTx + gRx - fspl_dB;

  // Estimated SNR (simplified model)
  const noiseFloor = -174 + 10 * Math.log10(180000) + 5; // dBm/Hz + NF
  const snr = prx - noiseFloor;

  // Estimated data rate using Shannon
  const bw = 180000; // Hz
  const shannonCapacity = bw * Math.log2(1 + Math.pow(10, snr / 10)) / 1e6; // Mbps

  // Update results
  document.getElementById('res-distancia').textContent = `${dSat.toFixed(1)} km`;
  document.getElementById('res-pathloss').textContent = `${fspl_dB.toFixed(1)} dB`;
  document.getElementById('res-doppler').textContent = `±${dopplerMax.toFixed(1)} kHz`;
  document.getElementById('res-prx').textContent = `${prx.toFixed(1)} dBm`;
  document.getElementById('res-snr').textContent = `${snr.toFixed(1)} dB`;
  document.getElementById('res-datarate').textContent = `${Math.max(0, shannonCapacity).toFixed(2)} Mbps`;
}

// ============================================
// METODOLOGY TAB
// ============================================
function renderMetodologia() {
  // Search chain
  const cadenaEl = document.getElementById('cadena-busqueda');
  if (cadenaEl) cadenaEl.textContent = DATA.cadenaBusqueda;

  // Databases
  const dbEl = document.getElementById('db-tags');
  if (dbEl) {
    dbEl.innerHTML = DATA.baseDatos.map(db => `<span class="db-tag">${db}</span>`).join('');
  }

  // Inclusion criteria
  const incEl = document.getElementById('criterios-inclusion');
  if (incEl) {
    incEl.innerHTML = DATA.criterios.inclusion.map(c => `<li>${c}</li>`).join('');
  }

  // Exclusion criteria
  const excEl = document.getElementById('criterios-exclusion');
  if (excEl) {
    excEl.innerHTML = DATA.criterios.exclusion.map(c => `<li>${c}</li>`).join('');
  }

  // Steps timeline
  const stepsEl = document.getElementById('steps-timeline');
  if (stepsEl) {
    stepsEl.innerHTML = DATA.pasosMetodologicos.map(step => `
      <div class="step-item">
        <div class="step-number">${step.paso}</div>
        <div class="step-content">
          <h4>${step.titulo}</h4>
          <p>${step.descripcion}</p>
        </div>
      </div>
    `).join('');
  }

  // Removed terms
  const termsEl = document.getElementById('terms-tags');
  if (termsEl) {
    termsEl.innerHTML = DATA.terminosEliminados.map(t => `<span class="term-tag">${t}</span>`).join('');
  }
}

// ============================================
// RESULTS TAB - CHARTS
// ============================================
function renderResultados() {
  // Stats grid
  const statsEl = document.getElementById('stats-grid');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="stat-card">
        <div class="stat-value">${DATA.estadisticas.totalDocumentos}</div>
        <div class="stat-label">Documentos analizados</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${DATA.estadisticas.crecimientoAnual}%</div>
        <div class="stat-label">Crecimiento anual</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${DATA.estadisticas.totalAutores}</div>
        <div class="stat-label">Autores</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${DATA.estadisticas.citationsAvg}</div>
        <div class="stat-label">Citas promedio</div>
      </div>
    `;
  }

  // Production chart
  drawProductionChart();

  // Top terms bars
  const termsEl = document.getElementById('terms-bars');
  if (termsEl) {
    const maxFreq = Math.max(...DATA.topTerminos.map(t => t.frecuencia));
    termsEl.innerHTML = DATA.topTerminos.map(t => `
      <div class="term-bar">
        <span class="term-bar-label">${t.termino}</span>
        <div class="term-bar-track">
          <div class="term-bar-fill" style="width: ${(t.frecuencia / maxFreq * 100).toFixed(1)}%">
            <span class="term-bar-value">${t.frecuencia}</span>
          </div>
        </div>
        <span class="term-bar-trend ${t.tendencia === 'up' ? 'trend-up' : 'trend-stable'}">
          ${t.tendencia === 'up' ? '↑' : '→'}
        </span>
      </div>
    `).join('');
  }

  // Countries
  const countriesEl = document.getElementById('countries-list');
  if (countriesEl) {
    const maxDocs = Math.max(...DATA.paisesTop.map(p => p.documentos));
    countriesEl.innerHTML = DATA.paisesTop.map(p => `
      <div class="country-item">
        <span class="country-name">${p.pais}</span>
        <div class="country-bar-track">
          <div class="country-bar-fill" style="width: ${(p.documentos / maxDocs * 100).toFixed(1)}%"></div>
        </div>
        <span class="country-value">${p.documentos}</span>
      </div>
    `).join('');
  }
}

function drawProductionChart() {
  const container = document.getElementById('chart-html');
  if (!container) return;

  const data = DATA.produccionAnual;
  const maxVal = Math.max(...data.map(d => d.documentos));

  // Build grid lines (4 horizontal lines)
  let gridHtml = '';
  for (let i = 0; i <= 4; i++) {
    const top = (i / 4) * 100;
    const val = Math.round(maxVal * (1 - i / 4));
    gridHtml += `<div class="chart-grid-line" style="top:${top}%"></div>`;
    gridHtml += `<div class="chart-y-label" style="top:${top}%">${val}</div>`;
  }

  // Build data points and line
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - (d.documentos / maxVal) * 100;
    return { x, y, año: d.año, docs: d.documentos };
  });

  // SVG polyline points (numeric values 0-100 for viewBox)
  const linePoints = points.map(p => `${p.x},${p.y}`).join(' ');
  const areaPoints = `0,100 ${linePoints} 100,100`;

  // X labels
  let xLabelsHtml = '';
  points.forEach(p => {
    xLabelsHtml += `<div class="chart-x-label" style="left:${p.x}%">${p.año}</div>`;
  });

  // Data points
  let dotsHtml = '';
  points.forEach(p => {
    dotsHtml += `<div class="chart-dot" style="left:${p.x}%;top:${p.y}%;" data-value="${p.docs}"></div>`;
  });

  container.innerHTML = `
    <div class="chart-svg-wrapper">
      <svg class="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <polygon points="${areaPoints}" fill="url(#areaGrad)"/>
        <polyline points="${linePoints}" fill="none" stroke="#00d4ff" stroke-width="0.5" vector-effect="non-scaling-stroke"/>
      </svg>
      ${gridHtml}
      ${xLabelsHtml}
      ${dotsHtml}
    </div>
  `;
}

// ============================================
// CLUSTERS TAB
// ============================================
function renderClusters() {
  const clustersEl = document.getElementById('clusters-grid');
  if (clustersEl) {
    clustersEl.innerHTML = DATA.clusters.map(c => `
      <div class="cluster-card" style="--cluster-color: ${c.color}">
        <div class="cluster-header">
          <span class="cluster-dot" style="background: ${c.color}"></span>
          <h4>${c.nombre}</h4>
          <span class="cluster-size">${c.tamano}</span>
        </div>
        <p class="cluster-foco">${c.foco}</p>
        <div class="cluster-terms">
          ${c.terminos.map(t => `<span class="cluster-term">${t}</span>`).join('')}
        </div>
        <div class="cluster-oportunidad">
          <span class="cluster-op-label">Oportunidades</span>
          ${c.oportunidades}
        </div>
      </div>
    `).join('');
  }
}

// ============================================
// WORDS ANALYSIS TAB
// ============================================
let selectedWordIndex = 0;

function renderWords() {
  const tagsEl = document.getElementById('word-tags');
  if (tagsEl) {
    tagsEl.innerHTML = DATA.analisisPalabras.map((w, i) => `
      <button class="word-tag ${i === 0 ? 'active' : ''}" onclick="selectWord(${i})">${w.palabra}</button>
    `).join('');
  }
  selectWord(0);
}

function selectWord(index) {
  selectedWordIndex = index;
  const word = DATA.analisisPalabras[index];
  const detailEl = document.getElementById('word-detail');

  // Update active tag
  document.querySelectorAll('.word-tag').forEach((tag, i) => {
    tag.classList.toggle('active', i === index);
  });

  if (detailEl && word) {
    const assocClass = word.asociacion === 'Alta' ? 'assoc-high' : 'assoc-medium';
    detailEl.innerHTML = `
      <div class="word-detail-header">
        <span class="word-detail-title">${word.palabra}</span>
        <span class="word-detail-freq">${word.frecuencia} ocurrencias</span>
        <span class="word-detail-assoc ${assocClass}">${word.asociacion}</span>
      </div>
      <div class="word-detail-section">
        <h5>Definición</h5>
        <p>${word.definicion}</p>
      </div>
      <div class="word-detail-section">
        <h5>Evolución temporal</h5>
        <p>${word.evolucion}</p>
      </div>
      <div class="word-detail-section">
        <h5>Contexto en NTN</h5>
        <p>${word.contexto}</p>
      </div>
      <div class="word-detail-section">
        <h5>Conclusión</h5>
        <p>${word.conclusion}</p>
      </div>
      <div class="word-detail-section">
        <h5>Referencias IEEE</h5>
        <div class="word-links">
          ${word.enlaces.map((link, i) => `
            <a class="word-link" href="${link}" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Referencia ${i + 1}
            </a>
          `).join('')}
        </div>
      </div>
    `;
    detailEl.classList.add('active');
  }
}

function filterWords() {
  const search = document.getElementById('word-search-input')?.value.toLowerCase() || '';
  const tags = document.querySelectorAll('.word-tag');
  tags.forEach((tag, i) => {
    const word = DATA.analisisPalabras[i]?.palabra.toLowerCase() || '';
    tag.style.display = word.includes(search) ? '' : 'none';
  });
}

// ============================================
// REFLECTION TAB
// ============================================
function renderReflexion() {
  const learningEl = document.getElementById('reflection-learning');
  if (learningEl) {
    learningEl.innerHTML = DATA.reflexion.aprendizajes.map(a => `<p>${a}</p>`).join('');
  }

  const challengesEl = document.getElementById('reflection-challenges');
  if (challengesEl) {
    challengesEl.innerHTML = DATA.reflexion.desafios.map(d => `<p>${d}</p>`).join('');
  }

  const futureEl = document.getElementById('reflection-future');
  if (futureEl) {
    futureEl.innerHTML = DATA.reflexion.futuro.map(f => `<p>${f}</p>`).join('');
  }
}

// ============================================
// CHATBOT
// ============================================
let chatbotOpen = false;

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  const container = document.getElementById('chatbot-container');
  const toggle = document.getElementById('chatbot-toggle');
  if (container) container.classList.toggle('open', chatbotOpen);
  if (toggle) toggle.classList.toggle('hidden', chatbotOpen);

  if (chatbotOpen) {
    const messagesEl = document.getElementById('chatbot-messages');
    if (messagesEl && messagesEl.children.length === 0) {
      addBotMessage(DATA.chatbot.saludo);
    }
    // Render quick questions
    const quickEl = document.getElementById('chatbot-quick');
    if (quickEl) {
      quickEl.innerHTML = DATA.chatbot.preguntasRapidas.map(q =>
        `<button class="quick-question" onclick="sendQuickQuestion('${q.replace(/'/g, "\\'")}')">${q}</button>`
      ).join('');
    }
    setTimeout(() => document.getElementById('chatbot-input')?.focus(), 100);
  }
}

function addBotMessage(text) {
  const messagesEl = document.getElementById('chatbot-messages');
  if (!messagesEl) return;
  const msg = document.createElement('div');
  msg.className = 'chat-message bot';
  msg.textContent = text;
  messagesEl.appendChild(msg);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function addUserMessage(text) {
  const messagesEl = document.getElementById('chatbot-messages');
  if (!messagesEl) return;
  const msg = document.createElement('div');
  msg.className = 'chat-message user';
  msg.textContent = text;
  messagesEl.appendChild(msg);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function sendQuickQuestion(question) {
  sendMessage(question);
}

function sendChatMessage() {
  const input = document.getElementById('chatbot-input');
  const text = input?.value.trim();
  if (text) {
    sendMessage(text);
    if (input) input.value = '';
  }
}

function handleChatKey(event) {
  if (event.key === 'Enter') {
    sendChatMessage();
  }
}

function sendMessage(text) {
  addUserMessage(text);

  // Simple keyword-based response matching
  const lower = text.toLowerCase();
  let response = null;

  // Check keyword matches
  const keywords = {
    'ntn': 'ntn', 'non-terrestrial': 'ntn', 'redes no terrestres': 'ntn',
    'cluster': 'clusters', 'clúster': 'clusters', 'agrupaciones': 'clusters',
    'mini-caso': 'minicaso', 'minicaso': 'minicaso', 'calculadora': 'minicaso', 'link budget': 'minicaso',
    'tendencia': 'tendencias', 'tendencias': 'tendencias', 'trend': 'tendencias',
    'nb-iot': 'nbiot', 'nbiot': 'nbiot', 'iot satelital': 'nbiot', 'iot': 'nbiot',
    'leo': 'leo', 'satélite': 'leo', 'satellite': 'leo', 'constelación': 'leo',
    'doppler': 'doppler', 'efecto doppler': 'doppler',
    'beamforming': 'beamforming', 'haz': 'beamforming',
    'chatbot': 'chatbot', 'asistente': 'chatbot', 'funciona': 'chatbot', 'cómo funciona': 'chatbot',
    'integrante': 'integrantes', 'equipo': 'integrantes', 'autores': 'integrantes', 'estudiante': 'integrantes',
    'metodología': 'metodologia', 'metodologia': 'metodologia', 'método': 'metodologia', 'pasos': 'metodologia',
    'referencia': 'referencias', 'referencias': 'referencias', 'bibliografía': 'referencias',
    'hola': 'greeting', 'buenos': 'greeting', 'buenas': 'greeting', 'hi': 'greeting', 'hello': 'greeting',
    'qué es': 'ntn', 'que es': 'ntn', 'definición': 'ntn', 'definicion': 'ntn'
  };

  for (const [keyword, key] of Object.entries(keywords)) {
    if (lower.includes(keyword)) {
      response = DATA.chatbot.respuestas[key] || null;
      break;
    }
  }

  // Default response
  if (!response) {
    if (lower.includes('gracias') || lower.includes('thank')) {
      response = "De nada. Estoy aquí para ayudarte con cualquier pregunta sobre NTN y el análisis bibliométrico.";
    } else if (lower.includes('adios') || lower.includes('bye') || lower.includes('hasta')) {
      response = "Hasta luego. Puedes volver a consultarme cuando necesites información sobre Non-Terrestrial Networks.";
    } else {
      response = `${DATA.chatbot.respuestas.default}Las NTN (Non-Terrestrial Networks) son redes que integran plataformas espaciales y aéreas para extender la cobertura 5G/6G globalmente. El análisis identificó 1,247 documentos, 6 clústeres temáticos y 10 palabras clave principales. Puedes preguntarme sobre los clústeres, el mini-caso técnico, las tendencias o cualquier término específico.`;
    }
  }

  // Simulate typing delay
  setTimeout(() => addBotMessage(response), 400 + Math.random() * 400);
}

// ============================================
// BACK TO TOP
// ============================================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });
}

// ============================================
// NAV SCROLL EFFECT
// ============================================
function initNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(7, 11, 20, 0.95)';
    } else {
      nav.style.background = 'rgba(7, 11, 20, 0.8)';
    }
  });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.glass-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ============================================
// CHART RESIZE HANDLER
// ============================================
function initChartResize() {
  window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.tab-panel.active');
    if (activeTab && activeTab.id === 'tab-resultados') {
      drawProductionChart();
    }
  });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTabs();
  renderHero();
  renderInicio();
  renderMetodologia();
  renderResultados();
  renderClusters();
  renderWords();
  renderReflexion();
  updateMiniCase();
  initBackToTop();
  initNavScroll();
  initScrollAnimations();
  initChartResize();
});
