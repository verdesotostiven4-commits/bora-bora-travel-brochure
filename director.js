(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const includes = [
    ['✈️','Round-trip flights','Comfortable flights included from the beginning of the package.'],
    ['🚤','Private boat transfer','A premium lagoon transfer directly to the island experience.'],
    ['🏝️','Overwater bungalow','Luxury accommodation with crystal-clear water views.'],
    ['🐠','Coral reef tour','Adventure with snorkeling, fish, and tropical scenery.'],
    ['🍍','Local cuisine','Fresh seafood, grilled fish, and tropical fruits.'],
    ['🧳','Travel essentials','Passport, sunscreen, camera, tickets, and light clothes.']
  ];

  function removePresentationHelp() {
    $$('.presentation-help').forEach((el) => el.remove());
    const timer = setInterval(() => $$('.presentation-help').forEach((el) => el.remove()), 250);
    setTimeout(() => clearInterval(timer), 5000);
  }

  function rebuildBoardingLounge() {
    const card = $('.boarding-card');
    if (!card) return;
    const logo = $('#brandLogo')?.src || $('#boardingLogo')?.src || '';
    card.className = 'boarding-card director-boarding';
    card.innerHTML = `
      <div class="lounge-copy">
        <div>
          <div class="lounge-brand">
            <img class="lounge-logo" src="${logo}" alt="Bora Bora Paradise logo" />
            <div><span>Premium travel agency</span><strong>Bora Bora Paradise</strong></div>
          </div>
          <h1>The Perfect Tourist Experience</h1>
          <p>Keep this cinematic gate open while the team gets ready. When the presentation begins, launch the flight and let the audience enter the Bora Bora experience.</p>
          <div class="lounge-actions">
            <button class="btn-takeoff" id="beginJourney" type="button">Begin the Journey</button>
            <span class="hint">Press Enter to launch</span>
          </div>
        </div>
        <div class="standby-ticker"><span>Now boarding • Flight BB-1500 • Gate Paradise • Destination Bora Bora • Agency experience ready • </span></div>
      </div>
      <div class="lounge-visual" aria-hidden="true">
        <div class="departure-board"><div><small>Flight</small><strong>BB-1500</strong></div><div><small>Status</small><strong>Boarding</strong></div></div>
        <div class="terminal-window"></div>
        <div class="gate-bridge"></div>
        <div class="lounge-plane">✈</div>
        <div class="gate-floor"></div>
        <div class="gate-walkway"></div>
        <div class="queue"><i class="queue-person"></i><i class="queue-person"></i><i class="queue-person"></i><i class="queue-person"></i></div>
        <div class="lounge-stats"><div><small>Gate</small><b>Paradise</b></div><div><small>Destination</small><b>Bora Bora</b></div><div><small>Package</small><b>All-inclusive</b></div><div><small>Ready</small><b>Takeoff</b></div></div>
      </div>`;
    $('#beginJourney')?.addEventListener('click', () => window.startJourney?.());
  }

  function rebuildTakeoffScene() {
    const overlay = $('#takeoffOverlay');
    if (!overlay) return;
    overlay.innerHTML = `
      <div class="director-takeoff">
        <div class="takeoff-title">
          <p class="eyebrow">Flight BB-1500</p>
          <h2>Takeoff to Paradise</h2>
          <p>The gate closes, passengers are aboard, and the Bora Bora agency experience begins with a cinematic departure.</p>
        </div>
        <div class="runway-scene">
          <div class="departures-line">Departures • Gate Paradise • Destination Bora Bora</div>
          <div class="terminal-people"><i></i><i></i><i></i></div>
          <div class="director-runway"></div>
          <div class="plane-wake"></div>
          <div class="taxi-plane">✈</div>
          <div class="cloud-sweep"></div>
        </div>
      </div>`;
  }

  function makeInfiniteCarousel() {
    const container = $('#includeCarousel');
    if (!container) return;
    const cards = [...includes, ...includes].map(([icon, title, text]) => `
      <article class="loop-card">
        <span>${icon}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>`).join('');
    container.classList.add('auto-loop');
    container.innerHTML = `<div class="loop-track">${cards}</div>`;
  }

  function polishBrochure() {
    $$('.brochure-card').forEach((card, index) => {
      card.classList.add('editorial-panel');
      card.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
    });
  }

  function enrichFinal() {
    const finalContent = $('.final-content');
    if (!finalContent || $('.final-badges')) return;
    const badges = document.createElement('div');
    badges.className = 'final-badges';
    badges.innerHTML = '<span>All-inclusive</span><span>Adventure</span><span>Luxury stay</span><span>Travel recommendations</span>';
    finalContent.appendChild(badges);
  }

  function stabilizeHover() {
    const reset = (el) => {
      el.style.transition = 'transform .48s cubic-bezier(.2,.8,.2,1)';
      el.style.transform = 'translate3d(0,0,0)';
      setTimeout(() => { if (!el.matches(':hover')) el.style.transform = ''; }, 480);
    };
    document.addEventListener('pointerleave', (event) => {
      const card = event.target.closest?.('.magnetic,.stage-media,.stage-text,.brochure-card,.include-card');
      if (card) reset(card);
    }, true);
  }

  function addScrollDirection() {
    let last = window.scrollY;
    window.addEventListener('scroll', () => {
      const now = window.scrollY;
      document.body.classList.toggle('scrolling-down', now > last);
      document.body.classList.toggle('scrolling-up', now < last);
      last = now;
    }, { passive: true });
  }

  function observeStageChanges() {
    const shell = $('#stageShell');
    if (!shell) return;
    const observer = new MutationObserver(() => {
      setTimeout(() => {
        $$('.stage-media,.stage-text').forEach((el) => {
          el.animate([
            { opacity: 0, transform: 'translateY(22px) scale(.985)' },
            { opacity: 1, transform: 'translateY(0) scale(1)' }
          ], { duration: 520, easing: 'cubic-bezier(.2,.8,.2,1)' });
        });
      }, 20);
    });
    observer.observe(shell, { childList: true });
  }

  window.addEventListener('load', () => {
    removePresentationHelp();
    rebuildBoardingLounge();
    rebuildTakeoffScene();
    makeInfiniteCarousel();
    polishBrochure();
    enrichFinal();
    stabilizeHover();
    addScrollDirection();
    observeStageChanges();
  });
})();