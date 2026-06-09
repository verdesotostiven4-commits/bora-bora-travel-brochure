(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const logoSvg = (() => {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
      <defs>
        <linearGradient id="sea" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#8afff5"/><stop offset="1" stop-color="#07a7b4"/></linearGradient>
        <linearGradient id="mount" x1="0" x2="1"><stop offset="0" stop-color="#061a31"/><stop offset="1" stop-color="#0b5d75"/></linearGradient>
        <filter id="ds" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="10" stdDeviation="9" flood-color="#00101f" flood-opacity=".28"/></filter>
      </defs>
      <g filter="url(#ds)">
        <path d="M26 150c31 19 60 19 93 7 31-11 53-4 78 16-41 29-108 33-153 9-20-11-30-24-18-32Z" fill="url(#sea)"/>
        <path d="M29 160c31 8 59 3 87-9 25-11 48-7 78 9-38-4-65 3-90 14-31 13-56 9-75-14Z" fill="#ecffff" opacity=".92"/>
        <path d="M63 128 101 62l25 39 17-25 41 73c-39-13-76-13-121-21Z" fill="url(#mount)"/>
        <circle cx="158" cy="68" r="21" fill="#f6c65c"/>
        <path d="M54 128c8-53 28-78 62-84-25 20-38 51-38 90Z" fill="#061625"/>
        <path d="M38 93c32-2 55 9 73 34-29-18-56-21-73-34Z" fill="#061625"/>
        <path d="M72 73c20 11 35 28 42 52-20-22-37-32-42-52Z" fill="#061625"/>
        <path d="M49 69c24 8 43 23 61 50-30-23-52-32-61-50Z" fill="#061625"/>
        <path d="M72 51c18 19 29 41 33 70-15-32-29-53-33-70Z" fill="#061625"/>
        <path d="M147 47c14 4 26 10 38 21l8-3 4 5-7 5 3 15-6 2-8-13c-14-2-27-6-38-14l6-18Z" fill="#061625"/>
        <path d="M118 36c17 12 27 21 36 32" stroke="#c49a3b" stroke-width="5" stroke-linecap="round" fill="none"/>
      </g>
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  })();

  function removeBadEffects() {
    $$('.cursor-glow, .presentation-help').forEach((el) => el.remove());
    document.documentElement.style.removeProperty('--mx');
    document.documentElement.style.removeProperty('--my');
  }

  function setCleanLogo() {
    ['brandLogo', 'boardingLogo', 'heroLogo'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.src = logoSvg;
    });
    $$('.lounge-logo, .clean-logo, .final-brand-logo, .fp-brand-row img').forEach((img) => { img.src = logoSvg; });
  }

  function rebuildCleanBoarding() {
    const card = $('.boarding-card');
    if (!card) return;
    card.className = 'boarding-card clean-lounge';
    card.innerHTML = `
      <div class="clean-copy">
        <div>
          <div class="clean-brand">
            <img class="clean-logo" src="${logoSvg}" alt="Bora Bora Paradise logo" />
            <div><span>Bora Bora Paradise</span><strong>Premium Travel Agency</strong></div>
          </div>
          <h1>Welcome aboard</h1>
          <p>Passengers are ready for a luxury Bora Bora experience: flights, private transfer, overwater bungalows, coral reefs, local cuisine, and travel recommendations.</p>
          <div class="clean-actions">
            <button class="clean-start" id="beginJourney" type="button">Launch Flight</button>
          </div>
          <div class="clean-meta"><span>Flight BB-1500</span><span>Gate Paradise</span><span>Bora Bora</span><span>All-inclusive</span></div>
        </div>
        <div class="clean-ticker"><span>Now boarding • private transfer • overwater bungalows • coral reefs • local cuisine • travel recommendations • Now boarding • private transfer • overwater bungalows • coral reefs • local cuisine • travel recommendations • </span></div>
      </div>
      <div class="clean-terminal" aria-hidden="true">
        <div class="clean-departure"><div><small>Departures</small><strong>BB-1500</strong></div><div><small>Status</small><strong>Boarding</strong></div></div>
        <div class="clean-window"></div>
        <div class="clean-bridge"></div>
        <div class="clean-plane">✈</div>
        <div class="clean-floor"></div>
        <div class="clean-runway"></div>
        <div class="clean-queue"><i class="clean-person"></i><i class="clean-person"></i><i class="clean-person"></i><i class="clean-person"></i><i class="clean-person"></i></div>
        <div class="clean-stats"><div><small>Gate</small><b>Paradise</b></div><div><small>Destination</small><b>Bora Bora</b></div><div><small>Package</small><b>Premium</b></div><div><small>Next</small><b>Takeoff</b></div></div>
      </div>`;
    $('#beginJourney')?.addEventListener('click', launchCleanFlight);
  }

  function rebuildCleanTakeoff() {
    const overlay = $('#takeoffOverlay');
    if (!overlay) return;
    overlay.innerHTML = `
      <div class="clean-takeoff">
        <div class="clean-flight-title">
          <span>Flight BB-1500</span>
          <h2>Taking off to Bora Bora</h2>
          <p>The runway lights up, the plane accelerates, and the agency experience begins.</p>
        </div>
        <div class="clean-runway-scene">
          <div class="clean-flight-board">Departures • Gate Paradise • Destination Bora Bora</div>
          <div class="clean-runway-lane"></div>
          <div class="clean-speed"></div>
          <div class="clean-taxi-plane">✈</div>
          <div class="clean-cloud"></div>
        </div>
      </div>`;
  }

  function launchCleanFlight() {
    const boarding = $('#boardingOverlay');
    const takeoff = $('#takeoffOverlay');
    if (!boarding || !takeoff) return;
    removeBadEffects();
    boarding.classList.add('hidden');
    document.body.classList.add('page-lock');
    takeoff.classList.add('show');
    setTimeout(() => {
      takeoff.classList.remove('show');
      document.body.classList.remove('page-lock');
      $('#home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 3800);
  }

  function bindKeys() {
    document.addEventListener('keydown', (event) => {
      const boardingVisible = !$('#boardingOverlay')?.classList.contains('hidden');
      if (event.key === 'Enter' && boardingVisible) {
        event.preventDefault();
        event.stopImmediatePropagation();
        launchCleanFlight();
      }
    }, true);
  }

  function stabilizeHover() {
    document.addEventListener('pointerleave', (event) => {
      const card = event.target.closest?.('.magnetic,.stage-media,.stage-text,.brochure-card,.loop-card,.lab-card,.final-card');
      if (!card) return;
      card.style.transform = 'translate3d(0,0,0)';
      setTimeout(() => { if (!card.matches(':hover')) card.style.transform = ''; }, 260);
    }, true);
  }

  function patchFinal() {
    const finalContent = $('.final-content');
    if (finalContent && !$('.final-brand-logo')) {
      const img = document.createElement('img');
      img.src = logoSvg;
      img.alt = 'Bora Bora Paradise logo';
      img.className = 'final-brand-logo';
      img.style.width = '100px';
      img.style.height = '100px';
      img.style.margin = '0 auto 14px';
      img.style.display = 'block';
      finalContent.prepend(img);
    }
  }

  function init() {
    removeBadEffects();
    setCleanLogo();
    rebuildCleanBoarding();
    rebuildCleanTakeoff();
    patchFinal();
    stabilizeHover();
  }

  window.addEventListener('load', () => {
    setTimeout(init, 260);
    setTimeout(init, 900);
    bindKeys();
    setInterval(removeBadEffects, 700);
  });
})();
