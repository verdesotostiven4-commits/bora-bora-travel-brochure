(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const transparentLogo = (() => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
        <defs>
          <linearGradient id="sea" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#7ff7ef"/><stop offset="1" stop-color="#09a8b4"/>
          </linearGradient>
          <linearGradient id="mount" x1="0" x2="1">
            <stop offset="0" stop-color="#06213a"/><stop offset="1" stop-color="#0c5771"/>
          </linearGradient>
          <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#031525" flood-opacity=".28"/>
          </filter>
        </defs>
        <g filter="url(#shadow)">
          <path d="M31 146c26 18 50 22 81 13 34-10 51-4 76 14-37 26-99 34-146 10-20-10-26-24-11-37Z" fill="url(#sea)"/>
          <path d="M30 158c32 6 54 2 83-10 23-9 48-8 76 10-37-3-62 2-86 13-30 13-54 10-73-13Z" fill="#eaffff" opacity=".9"/>
          <path d="M67 125 101 67l23 36 18-25 41 71c-38-10-73-11-116-24Z" fill="url(#mount)"/>
          <path d="M88 85 101 67l8 13c-8-1-14 1-21 5Z" fill="#7ac7c8" opacity=".65"/>
          <circle cx="156" cy="69" r="21" fill="#f6c65c"/>
          <path d="M51 125c10-49 25-72 60-78-25 18-37 48-37 85Z" fill="#061625"/>
          <path d="M40 91c31 0 52 10 70 33-28-17-54-19-70-33Z" fill="#061625"/>
          <path d="M72 74c20 11 33 27 40 50-18-21-36-31-40-50Z" fill="#061625"/>
          <path d="M49 68c23 8 41 22 59 48-29-22-50-31-59-48Z" fill="#061625"/>
          <path d="M70 52c17 18 28 39 32 67-15-31-28-51-32-67Z" fill="#061625"/>
          <path d="M147 47c14 4 26 10 38 21l8-3 4 5-7 5 3 15-6 2-8-13c-14-2-27-6-38-14l6-18Z" fill="#061625"/>
          <path d="M119 36c17 12 27 21 36 32" stroke="#c59b3d" stroke-width="5" stroke-linecap="round" fill="none"/>
        </g>
      </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  })();

  const includes = [
    ['✈️', 'Round-trip flights', 'Comfortable flights from the beginning of the package.'],
    ['🚤', 'Private boat transfer', 'A premium lagoon transfer directly to the island.'],
    ['🏝️', 'Overwater bungalow', 'Luxury accommodation with crystal-clear water views.'],
    ['🐠', 'Coral reef tour', 'Snorkeling, tropical fish, and Mount Otemanu views.'],
    ['🍍', 'Local cuisine', 'Fresh seafood, grilled fish, and tropical fruits.'],
    ['🧳', 'Travel essentials', 'Passport, sunscreen, camera, tickets, and light clothes.'],
    ['🌅', 'VIP sunset moment', 'A premium photo-ready experience for the final pitch.'],
    ['✅', 'Travel recommendations', 'Smart checklist to complete the brochure requirement.']
  ];

  function setTransparentLogo() {
    ['brandLogo', 'boardingLogo', 'heroLogo'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.src = transparentLogo;
    });
    $$('.lounge-logo, .fp-brand-row img, .final-brand-logo').forEach((img) => { img.src = transparentLogo; });
  }

  function rebuildPremiumLounge() {
    const card = $('.boarding-card');
    if (!card) return;
    card.className = 'boarding-card final-lounge';
    card.innerHTML = `
      <div class="fp-lounge-copy">
        <div>
          <div class="fp-brand-row">
            <img src="${transparentLogo}" alt="Bora Bora Paradise logo" />
            <div><span>Bora Bora Paradise</span><strong>Premium Travel Agency</strong></div>
          </div>
          <h1>Welcome aboard</h1>
          <p class="fp-subtitle">A luxury Bora Bora travel experience is ready to launch. Leave this screen open while the team gets prepared, then start the journey like a real agency presentation.</p>
          <div class="fp-actions">
            <button class="fp-start-btn" id="beginJourney" type="button">Begin the Journey</button>
            <span class="fp-mini-note">Press Enter to take off</span>
          </div>
          <div class="fp-flight-strip"><span>Flight BB-1500</span><span>Gate Paradise</span><span>Destination Bora Bora</span><span>All-inclusive</span></div>
        </div>
        <div class="standby-ticker"><span>Now boarding • private transfer • overwater bungalow • coral reefs • local cuisine • travel recommendations • </span></div>
      </div>
      <div class="fp-terminal" aria-hidden="true">
        <div class="fp-screen"><div><small>Departures</small><strong>BB-1500</strong></div><div><small>Status</small><strong>Boarding</strong></div></div>
        <div class="fp-window"></div>
        <div class="fp-bridge"></div>
        <div class="fp-plane-at-gate">✈</div>
        <div class="fp-floor"></div>
        <div class="fp-runway-line"></div>
        <div class="fp-queue"><i class="fp-person"></i><i class="fp-person"></i><i class="fp-person"></i><i class="fp-person"></i><i class="fp-person"></i></div>
        <div class="fp-terminal-stats"><div><small>Gate</small><b>Paradise</b></div><div><small>Class</small><b>Ready</b></div><div><small>Package</small><b>Premium</b></div><div><small>Next</small><b>Takeoff</b></div></div>
      </div>`;
    $('#beginJourney')?.addEventListener('click', finalStartJourney);
  }

  function rebuildTakeoff() {
    const overlay = $('#takeoffOverlay');
    if (!overlay) return;
    overlay.innerHTML = `
      <div class="fp-takeoff">
        <div class="fp-takeoff-copy">
          <span>BB-1500 • Gate Paradise</span>
          <h2>Taking off to Bora Bora</h2>
          <p>Passengers are aboard. The runway lights up and the travel agency experience begins.</p>
        </div>
        <div class="fp-runway-card">
          <div class="fp-departure-line">Departures • Bora Bora • Now taking off</div>
          <div class="fp-runway"></div>
          <div class="fp-speed-blur"></div>
          <div class="fp-taxi-plane">✈</div>
          <div class="fp-cloud-transition"></div>
        </div>
      </div>`;
  }

  function finalStartJourney() {
    const boarding = $('#boardingOverlay');
    const takeoff = $('#takeoffOverlay');
    if (!boarding || !takeoff) return;
    boarding.classList.add('hidden');
    document.body.classList.add('page-lock');
    takeoff.classList.add('show');
    window.unlockStamp?.('Boarding');
    setTimeout(() => {
      takeoff.classList.remove('show');
      document.body.classList.remove('page-lock');
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 3950);
  }

  function rebuildLoopCarousel() {
    const container = $('#includeCarousel');
    if (!container) return;
    const items = [...includes, ...includes].map(([icon, title, text]) => `
      <article class="loop-card magnetic">
        <span>${icon}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>`).join('');
    container.className = 'include-carousel auto-loop reveal visible';
    container.innerHTML = `<div class="loop-track">${items}</div>`;
  }

  function enhanceFinal() {
    const finalCard = $('.final-card');
    const finalContent = $('.final-content');
    if (!finalCard || !finalContent) return;
    if (!$('.final-sparkles')) {
      const sparks = document.createElement('div');
      sparks.className = 'final-sparkles';
      sparks.innerHTML = '<i></i><i></i><i></i><i></i><i></i>';
      finalCard.appendChild(sparks);
    }
    if (!$('.final-brand-logo')) {
      const img = document.createElement('img');
      img.src = transparentLogo;
      img.alt = 'Bora Bora Paradise logo';
      img.className = 'final-brand-logo';
      img.style.width = '108px';
      img.style.height = '108px';
      img.style.margin = '0 auto 18px';
      img.style.display = 'block';
      finalContent.prepend(img);
    }
  }

  function stabilizeMagnetic() {
    let moving = false;
    const resetCard = (card) => {
      if (!card) return;
      card.style.transform = 'translate3d(0,0,0)';
      setTimeout(() => {
        if (!card.matches(':hover')) card.style.transform = '';
      }, 360);
    };
    document.addEventListener('pointermove', () => {
      if (moving) return;
      moving = true;
      document.body.classList.add('is-pointer-moving');
      requestAnimationFrame(() => {
        moving = false;
        document.body.classList.remove('is-pointer-moving');
      });
    }, { passive: true });
    document.addEventListener('pointerout', (event) => {
      const card = event.target.closest?.('.magnetic,.stage-media,.stage-text,.brochure-card,.loop-card,.lab-card,.final-card');
      if (card && !card.contains(event.relatedTarget)) resetCard(card);
    }, true);
  }

  function bindFinalKeys() {
    document.addEventListener('keydown', (event) => {
      const boardingVisible = !$('#boardingOverlay')?.classList.contains('hidden');
      if (event.key === 'Enter' && boardingVisible) {
        event.preventDefault();
        event.stopImmediatePropagation();
        finalStartJourney();
      }
    }, true);
  }

  function init() {
    setTransparentLogo();
    rebuildPremiumLounge();
    rebuildTakeoff();
    rebuildLoopCarousel();
    enhanceFinal();
    stabilizeMagnetic();
    bindFinalKeys();
    $$('.presentation-help').forEach((el) => el.remove());
  }

  window.addEventListener('load', () => {
    init();
    setTimeout(init, 120);
  });
})();
