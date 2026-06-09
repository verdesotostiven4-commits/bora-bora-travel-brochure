// Emergency presentation polish - loaded last
(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const planeUrl = 'https://blogger.googleusercontent.com/img/a/AVvXsEhkWZihrmrYtXkRZqxWifnCjVokqK3yjP9FHBipau7VPJ0ER8E3vMF7klGqyiWFVlYtdzayxuMdc7MCl61srnShZ5tjvPpZXg4omFJOoRnnYSEVzLz6fMEodfhcQ6k5bcuY-CRTl3nruXz4sDuz1AwiVCqa8zw4x8OlkHb40ZIbZk1Fwd7jXcU8g5YjNiM';

  function logoSrc() {
    return $('#brandLogo')?.src || $('#heroLogo')?.src || $('#boardingLogo')?.src || '';
  }

  function rebuildBoarding() {
    const card = $('.boarding-card');
    if (!card || card.classList.contains('expo-boarding')) return;
    card.className = 'boarding-card expo-boarding';
    card.innerHTML = `
      <div class="expo-boarding-left">
        <div class="expo-brand">
          <img src="${logoSrc()}" alt="Bora Bora Paradise logo">
          <div><b>Bora Bora Paradise</b><span>Premium Travel Agency</span></div>
        </div>
        <h1>Welcome aboard</h1>
        <p>A luxury Bora Bora experience is ready: private flights, island transfer, overwater bungalows, coral reefs, local cuisine, and travel recommendations.</p>
        <button class="expo-launch" id="beginJourney" type="button">✈ Launch Flight</button>
        <div class="expo-meta"><span>BB-1500</span><span>Gate Paradise</span><span>Bora Bora</span></div>
      </div>
      <div class="expo-runway-side" aria-hidden="true">
        <div class="expo-board"><div><small>Departures</small><strong>BB-1500</strong></div><div><small>Status</small><strong>Ready for takeoff</strong></div></div>
        <div class="expo-lights"></div>
        <div class="expo-speed"></div>
        <div class="expo-plane-shadow"></div>
        <div class="expo-plane"></div>
      </div>`;
    $('#beginJourney')?.addEventListener('click', launchExpoFlight);
  }

  function rebuildTakeoff() {
    const overlay = $('#takeoffOverlay');
    if (!overlay) return;
    overlay.innerHTML = `
      <div class="expo-takeoff">
        <div class="expo-takeoff-copy">
          <span>Flight BB-1500</span>
          <h2>Taking off to Bora Bora</h2>
          <p>The runway lights up, the plane accelerates, and the agency experience begins.</p>
        </div>
        <div class="expo-takeoff-runway"></div>
        <div class="expo-takeoff-plane"></div>
        <div class="expo-takeoff-flash"></div>
      </div>`;
  }

  function launchExpoFlight() {
    const boarding = $('#boardingOverlay');
    const takeoff = $('#takeoffOverlay');
    if (!boarding || !takeoff) return;
    rebuildTakeoff();
    boarding.classList.add('hidden');
    document.body.classList.add('page-lock');
    takeoff.classList.add('show');
    setTimeout(() => {
      takeoff.classList.remove('show');
      document.body.classList.remove('page-lock');
      $('#home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 2550);
  }

  function expressionText(text = '') {
    const list = ['want to visit','need to book','decide to stay','plan to travel','love exploring','enjoy visiting','prefer backpacking','hope to see','avoid traveling'];
    let out = text;
    list.forEach((phrase) => { out = out.replaceAll(phrase, `<mark>${phrase}</mark>`); });
    return out;
  }

  function renderSafeStage(index) {
    if (typeof stages === 'undefined' || typeof imageUrls === 'undefined') return;
    const total = stages.length;
    const safeIndex = ((index % total) + total) % total;
    try { current = safeIndex; } catch (_) {}
    const stage = stages[safeIndex];
    const shell = $('#stageShell');
    if (!shell || !stage) return;

    shell.classList.add('expo-changing');
    setTimeout(() => {
      shell.innerHTML = `
        <article class="stage-media reveal visible">
          <img src="${imageUrls[stage.img]}" alt="${stage.title}" loading="eager" />
          <span class="stage-count">${String(safeIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}<br>${stage.tag}</span>
          <span class="stage-stamp">${stage.stamp}</span>
        </article>
        <article class="stage-text reveal visible">
          <p class="eyebrow">${stage.tag}</p>
          <h3>${stage.title}</h3>
          <p>${expressionText(stage.text)}</p>
          <div class="chips">${stage.chips.map((chip) => `<span class="chip">${chip}</span>`).join('')}</div>
          <div class="expression"><strong>Key expressions:</strong> ${stage.expression}</div>
          <div class="stats">${stage.stats.map((item) => { const [a, ...b] = item.split(' '); return `<div><strong>${a}</strong><span>${b.join(' ')}</span></div>`; }).join('')}</div>
          <div class="stage-actions"><button class="soft-btn" id="prevStep" type="button">Previous</button><button class="soft-btn" id="nextStep" type="button">Next stop</button></div>
        </article>`;
      $$('.journey-card').forEach((card, i) => card.classList.toggle('active', i === safeIndex));
      $('#prevStep')?.addEventListener('click', () => renderSafeStage(safeIndex - 1));
      $('#nextStep')?.addEventListener('click', () => renderSafeStage(safeIndex + 1));
      requestAnimationFrame(() => shell.classList.remove('expo-changing'));
    }, 150);
  }

  function patchJourney() {
    $$('.journey-card').forEach((card) => {
      const fresh = card.cloneNode(true);
      card.replaceWith(fresh);
      fresh.addEventListener('click', () => renderSafeStage(Number(fresh.dataset.step || 0)));
    });
    renderSafeStage(typeof current === 'number' ? current : 0);
  }

  function patchCarousel() {
    const container = $('#includeCarousel');
    if (!container || typeof includes === 'undefined') return;
    const items = [...includes, ...includes];
    container.innerHTML = `<div class="carousel-track">${items.map(([icon, title, text]) => `<article class="include-card"><span>${icon}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div>`;
  }

  function patchNavVisibility() {
    const check = () => {
      const y = window.scrollY + window.innerHeight * .35;
      const hide = ['journey','interactive'].some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        return y > top && y < bottom;
      });
      document.body.classList.toggle('expo-hide-nav', hide);
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
  }

  function patchFinalLogo() {
    const content = $('.final-content');
    if (content && !content.querySelector('.final-logo')) {
      const img = document.createElement('img');
      img.className = 'final-logo';
      img.src = logoSrc();
      img.alt = 'Bora Bora Paradise logo';
      content.prepend(img);
    }
  }

  function patchKeyboard() {
    document.addEventListener('keydown', (event) => {
      const visibleBoarding = $('#boardingOverlay') && !$('#boardingOverlay').classList.contains('hidden');
      if (event.key === 'Enter' && visibleBoarding) {
        event.preventDefault();
        event.stopImmediatePropagation();
        launchExpoFlight();
      }
    }, true);
  }

  function install() {
    rebuildBoarding();
    rebuildTakeoff();
    patchJourney();
    patchCarousel();
    patchNavVisibility();
    patchFinalLogo();
    $('.requirements')?.remove();
    $('.presentation-help')?.remove();
    $$('.cursor-glow').forEach((el) => el.remove());
  }

  window.addEventListener('load', () => {
    [120, 700, 1500, 2600].forEach((delay) => setTimeout(install, delay));
    patchKeyboard();
  });
})();