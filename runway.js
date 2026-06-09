(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const airplaneUrl = 'https://blogger.googleusercontent.com/img/a/AVvXsEhkWZihrmrYtXkRZqxWifnCjVokqK3yjP9FHBipau7VPJ0ER8E3vMF7klGqyiWFVlYtdzayxuMdc7MCl61srnShZ5tjvPpZXg4omFJOoRnnYSEVzLz6fMEodfhcQ6k5bcuY-CRTl3nruXz4sDuz1AwiVCqa8zw4x8OlkHb40ZIbZk1Fwd7jXcU8g5YjNiM';

  function bestLogo() {
    return document.getElementById('brandLogo')?.src || document.getElementById('heroLogo')?.src || '';
  }

  function rebuildRunwayBoarding() {
    const card = $('.boarding-card');
    if (!card) return;
    card.className = 'boarding-card runway-lounge';
    card.innerHTML = `
      <div class="runway-copy">
        <div class="runway-brand">
          <img src="${bestLogo()}" alt="Bora Bora Paradise logo" />
          <div><span>Bora Bora Paradise</span><strong>Premium Travel Agency</strong></div>
        </div>
        <h1>Welcome aboard</h1>
        <p>A luxury Bora Bora agency experience is ready to launch: flights, private transfer, overwater bungalows, coral reefs, local cuisine, and travel recommendations.</p>
        <div class="runway-actions"><button class="runway-start" id="beginJourney" type="button">Launch Flight</button></div>
        <div class="runway-meta"><span>Flight BB-1500</span><span>Gate Paradise</span><span>Destination Bora Bora</span><span>All-inclusive</span></div>
      </div>
      <div class="runway-terminal" aria-hidden="true">
        <div class="runway-board"><div><small>Departures</small><strong>BB-1500</strong></div><div><small>Status</small><strong>Ready for takeoff</strong></div></div>
        <div class="plane-window"></div>
        <div class="runway-strip"></div>
        <div class="runway-lights"></div>
        <div class="runway-motion"></div>
        <div class="runway-aircraft"><img src="${airplaneUrl}" alt="" /></div>
      </div>`;

    const freshButton = $('#beginJourney');
    freshButton?.addEventListener('click', launchRunwayFlight);
  }

  function rebuildRunwayTakeoff() {
    const overlay = $('#takeoffOverlay');
    if (!overlay) return;
    overlay.innerHTML = `
      <div class="runway-takeoff">
        <div class="runway-takeoff-copy">
          <span>Flight BB-1500</span>
          <h2>Taking off to Bora Bora</h2>
          <p>The aircraft accelerates on the runway, lifts into the sky, and reveals the agency experience.</p>
        </div>
        <div class="takeoff-stage">
          <div class="runway-board"><div><small>Departures</small><strong>Gate Paradise</strong></div><div><small>Destination</small><strong>Bora Bora</strong></div></div>
          <div class="takeoff-runway"></div>
          <div class="takeoff-lights"></div>
          <div class="takeoff-plane-real"><img src="${airplaneUrl}" alt="" /></div>
          <div class="takeoff-cloud-wipe"></div>
        </div>
      </div>`;
  }

  function launchRunwayFlight() {
    const boarding = $('#boardingOverlay');
    const takeoff = $('#takeoffOverlay');
    if (!boarding || !takeoff) return;
    boarding.classList.add('hidden');
    document.body.classList.add('page-lock');
    takeoff.classList.add('show');
    try { started = true; isLaunching = true; unlockStamp?.('Boarding'); } catch (_) {}
    setTimeout(() => {
      takeoff.classList.remove('show');
      document.body.classList.remove('page-lock');
      $('#home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { isLaunching = false; } catch (_) {}
    }, 3600);
  }

  function highlightPremium(text) {
    const expressions = ['want to visit','need to book','decide to stay','plan to travel','love exploring','enjoy visiting','prefer backpacking','hope to see','avoid traveling'];
    let output = text;
    expressions.forEach((item) => { output = output.replaceAll(item, `<mark>${item}</mark>`); });
    return output;
  }

  function premiumRenderStage() {
    const stage = stages[current];
    const shell = $('#stageShell');
    if (!shell || !stage) return;
    shell.innerHTML = `
      <article class="stage-media magnetic reveal visible">
        <img src="${imageUrls[stage.img]}" alt="${stage.title}" />
        <span class="stage-count">${String(current + 1).padStart(2,'0')} / ${String(stages.length).padStart(2,'0')}<br>${stage.tag}</span>
        <span class="stage-stamp">${stage.stamp}</span>
      </article>
      <article class="stage-text magnetic reveal visible">
        <p class="eyebrow">${stage.tag}</p>
        <h3>${stage.title}</h3>
        <p>${highlightPremium(stage.text)}</p>
        <div class="chips">${stage.chips.map((chip) => `<span class="chip">${chip}</span>`).join('')}</div>
        <div class="expression"><strong>Key expressions:</strong> ${stage.expression}</div>
        <div class="stats">${stage.stats.map((item) => { const [a, ...b] = item.split(' '); return `<div><strong>${a}</strong><span>${b.join(' ')}</span></div>`; }).join('')}</div>
        <div class="stage-actions"><button class="soft-btn" id="prevStep" type="button">Previous</button><button class="soft-btn" id="nextStep" type="button">Next stop</button></div>
      </article>`;
    $$('.journey-card').forEach((card, index) => card.classList.toggle('active', index === current));
    $('#prevStep')?.addEventListener('click', previousStageSmooth);
    $('#nextStep')?.addEventListener('click', nextStageSmooth);
    try { activateMagnetic?.(); } catch (_) {}
  }

  function stageTo(index, scroll = true) {
    const shell = $('#stageShell');
    if (!shell) return;
    shell.classList.add('is-changing');
    setTimeout(() => {
      current = (index + stages.length) % stages.length;
      premiumRenderStage();
      try { unlockStamp?.(stages[current].stamp); } catch (_) {}
      requestAnimationFrame(() => shell.classList.remove('is-changing'));
      if (scroll) shell.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 210);
  }

  function nextStageSmooth() { stageTo(current + 1); }
  function previousStageSmooth() { stageTo(current - 1); }

  function patchJourneyButtons() {
    $$('.journey-card').forEach((card) => {
      const clone = card.cloneNode(true);
      card.replaceWith(clone);
      clone.addEventListener('click', () => stageTo(Number(clone.dataset.step || 0)));
    });
  }

  function renderLoopCarousel() {
    const container = $('#includeCarousel');
    if (!container) return;
    const doubled = [...includes, ...includes];
    container.innerHTML = `<div class="carousel-track">${doubled.map(([icon,title,text]) => `<article class="include-card magnetic"><span>${icon}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div>`;
    try { activateMagnetic?.(); } catch (_) {}
  }

  function patchBrochure() {
    const grid = $('#brochureGrid');
    if (!grid || !grid.children.length) return;
    $$('.brochure-card', grid).forEach((card, index) => {
      card.dataset.panel = index;
      card.addEventListener('click', () => { try { openPanel?.(index); } catch (_) {} });
    });
  }

  function patchInteractiveCopy() {
    const stampCard = $('#interactive .lab-card:nth-child(2)');
    if (!stampCard) return;
    const title = stampCard.querySelector('h3');
    const paragraph = stampCard.querySelector('p');
    if (title) title.firstChild.textContent = 'Trip Progress';
    if (paragraph) paragraph.textContent = 'This shows each completed part of the journey: boarding, arrival, resort, adventure, cuisine, and ready to travel.';
  }

  function hideNavInFocusSections() {
    const targets = ['#journey', '#interactive'].map((id) => $(id)).filter(Boolean);
    if (!targets.length) return;
    const observer = new IntersectionObserver((entries) => {
      const active = entries.some((entry) => entry.isIntersecting && entry.intersectionRatio > .38);
      document.body.classList.toggle('nav-hidden-zone', active);
    }, { threshold: [.2, .38, .55] });
    targets.forEach((target) => observer.observe(target));
  }

  function removeHeroPills() {
    const req = $('.requirements');
    if (req) req.remove();
  }

  function patchKeys() {
    document.addEventListener('keydown', (event) => {
      const boardingVisible = !$('#boardingOverlay')?.classList.contains('hidden');
      if (event.key === 'Enter' && boardingVisible) {
        event.preventDefault();
        event.stopImmediatePropagation();
        launchRunwayFlight();
      }
    }, true);
  }

  function install() {
    removeHeroPills();
    rebuildRunwayTakeoff();
    rebuildRunwayBoarding();
    try {
      renderStage = premiumRenderStage;
      nextStage = nextStageSmooth;
      previousStage = previousStageSmooth;
      renderCarousel = renderLoopCarousel;
    } catch (_) {}
    premiumRenderStage();
    patchJourneyButtons();
    renderLoopCarousel();
    patchBrochure();
    patchInteractiveCopy();
    hideNavInFocusSections();
  }

  window.addEventListener('load', () => {
    setTimeout(install, 250);
    setTimeout(install, 1100);
    patchKeys();
  });
})();