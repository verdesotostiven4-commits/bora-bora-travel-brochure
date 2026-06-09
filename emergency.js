(() => {
  const planeUrl = 'https://blogger.googleusercontent.com/img/a/AVvXsEhkWZihrmrYtXkRZqxWifnCjVokqK3yjP9FHBipau7VPJ0ER8E3vMF7klGqyiWFVlYtdzayxuMdc7MCl61srnShZ5tjvPpZXg4omFJOoRnnYSEVzLz6fMEodfhcQ6k5bcuY-CRTl3nruXz4sDuz1AwiVCqa8zw4x8OlkHb40ZIbZk1Fwd7jXcU8g5YjNiM';
  const fallbackLogo = 'https://blogger.googleusercontent.com/img/a/AVvXsEjWkB6MBayTqkW-7taanKJGDUWxG9Uf3K8Tc1O_XJ5cSWQJ0VnmVgzBIfERE69SSnMJPc62d2sm6b8R6ln2z7_SlWspA2CI6oCq94Eb7CFDPC4n77qZKp6fyQXi2pWA-AlwIHnoCNp8DkPqOPOLgPRFlY29ep4Ai2wT0Sa-kzkAinUR8M8dwR4XJHj8rgY';
  const $ = (id) => document.getElementById(id);

  function rebuildBoarding() {
    const overlay = $('boardingOverlay');
    if (!overlay || overlay.dataset.emergencyFixed) return;
    const bg = (typeof imageUrls !== 'undefined' && imageUrls[0]) ? imageUrls[0] : '';
    const logo = (typeof logoUrl !== 'undefined' && logoUrl) ? logoUrl : fallbackLogo;
    overlay.dataset.emergencyFixed = 'true';
    overlay.innerHTML = `
      <img class="boarding-bg" src="${bg}" alt="Bora Bora" />
      <div class="boarding-shade"></div>
      <div class="boarding-card">
        <div class="boarding-left">
          <div class="boarding-logo-line"><img src="${logo}" alt="Bora Bora Paradise"><div><b>Bora Bora Paradise</b><span>Premium Travel Agency</span></div></div>
          <h1>Welcome aboard</h1>
          <p>A luxury Bora Bora experience is ready to launch: flights, private transfer, overwater bungalows, coral reefs, local cuisine, and travel recommendations.</p>
          <div class="boarding-actions"><button class="btn btn-gold" id="beginJourney" type="button">Launch Flight</button></div>
        </div>
        <div class="boarding-runway" aria-hidden="true">
          <div class="flight-board"><div><small>Departures</small><strong>BB-1500</strong></div><div><small>Status</small><strong>Ready</strong></div></div>
          <div class="sky-glow"></div><div class="glass-panel"></div><div class="soft-floor"></div><div class="jet-shadow"></div><img class="runway-jet" src="${planeUrl}" alt="">
        </div>
      </div>`;
  }

  function launchCleanTakeoff() {
    const overlay = $('boardingOverlay');
    const takeoff = $('takeoffOverlay');
    if (!takeoff) return;
    takeoff.innerHTML = `<div class="fast-takeoff"><div class="fast-copy"><p>Flight BB-1500</p><h2>Taking off<br>to Bora Bora</h2></div><div class="fast-sky"></div><img class="fast-plane" src="${planeUrl}" alt=""><div class="takeoff-white"></div></div>`;
    overlay?.classList.add('is-hidden');
    overlay?.classList.add('hidden');
    overlay?.setAttribute('aria-hidden','true');
    document.body.classList.add('page-lock');
    takeoff.classList.add('active');
    takeoff.classList.add('show');
    takeoff.setAttribute('aria-hidden','false');
    setTimeout(() => {
      takeoff.classList.remove('active');
      takeoff.classList.remove('show');
      takeoff.setAttribute('aria-hidden','true');
      document.body.classList.remove('focus-mode');
      document.body.classList.remove('page-lock');
      $('home')?.scrollIntoView({ behavior: 'smooth' });
    }, 2200);
  }

  function smoothStage(delta) {
    if (typeof stages === 'undefined') return;
    const shell = $('stageShell');
    shell?.classList.add('stage-fade');
    setTimeout(() => {
      if (delta > 0) current = (current + 1) % stages.length;
      else current = (current - 1 + stages.length) % stages.length;
      renderStage();
      if (delta > 0 && typeof unlockStamp === 'function') unlockStamp(stages[current].stamp);
      requestAnimationFrame(() => shell?.classList.remove('stage-fade'));
    }, 170);
  }

  window.nextStage = () => smoothStage(1);
  window.previousStage = () => smoothStage(-1);
  window.launchCleanTakeoff = launchCleanTakeoff;

  document.addEventListener('click', (e) => {
    const launchButton = e.target.closest('#beginJourney, .btn-takeoff, .boarding-actions button');
    if (launchButton) {
      e.preventDefault();
      e.stopImmediatePropagation();
      launchCleanTakeoff();
      return;
    }

    const next = e.target.closest('#nextStep');
    const prev = e.target.closest('#prevStep');
    if (next || prev) {
      e.preventDefault();
      e.stopImmediatePropagation();
      smoothStage(next ? 1 : -1);
    }
  }, true);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && (entry.target.id === 'journey' || entry.target.id === 'interactive')) document.body.classList.add('focus-mode');
      if (entry.isIntersecting && (entry.target.id === 'brochure' || entry.target.id === 'final' || entry.target.id === 'home')) document.body.classList.remove('focus-mode');
    });
  }, { threshold: .35 });

  function boot() {
    rebuildBoarding();
    ['journey','interactive','brochure','final','home'].forEach((id) => { const el = $(id); if (el) observer.observe(el); });
    const carousel = $('includeCarousel');
    if (carousel && typeof includes !== 'undefined') {
      carousel.innerHTML = `<div class="carousel-track">${[...includes, ...includes].map(([icon,title,text]) => `<article class="include-card magnetic"><span>${icon}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div>`;
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
