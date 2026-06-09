const logoUrl = 'https://blogger.googleusercontent.com/img/a/AVvXsEjWkB6MBayTqkW-7taanKJGDUWxG9Uf3K8Tc1O_XJ5cSWQJ0VnmVgzBIfERE69SSnMJPc62d2sm6b8R6ln2z7_SlWspA2CI6oCq94Eb7CFDPC4n77qZKp6fyQXi2pWA-AlwIHnoCNp8DkPqOPOLgPRFlY29ep4Ai2wT0Sa-kzkAinUR8M8dwR4XJHj8rgY';

const imageUrls = [
  'https://blogger.googleusercontent.com/img/a/AVvXsEgZGKnUaGAWzJvRX9f44MycnHeHOFY0YVssmU7kfROdXM143hKxdwqYv-HfhBjCEmko58ZEDLeQHysVibasU3a1uuGUbJ_A-moZ27r1qpEh2Q3LRYWm5OVyZ7EfWINIiqoCNT9NWUgNZ1rrGqVLZA2O2Cb-CROg-aM-Q8U4-Q0Mw2K3DwILuHpqxR60Kbc',
  'https://blogger.googleusercontent.com/img/a/AVvXsEhgtnAHlUSTawoBPZbyLQoK9EmoziGbfQr2yuL9c90W-bk1Rzjasbpur1uxRvrCi1MkuAwIGr2gjqtPOC1-_PqmEUCIFL7CcVt5k9mKYXg2b3DGcBaRpnUeNJJOe6-H0e1W-Y2_ER-_K9D6U-ELHE76suymzS2poc8SjjD6hokJkvO93lmJJz5ElieEA5c',
  'https://blogger.googleusercontent.com/img/a/AVvXsEhlTgsv1HVYk3vT2SqnkMf7ceN9pdtKju_k9Cat5zHRZFXRzUtTOsl9HmHJ9iNqhKn6gCEjrok-Yiu8XN3pMboba2ygZAtht8ujQdBrq5ZgBFsu6Vx-7oeEoxvQdcuXeqq6QtaWyXuPcmPDfsDtALgEwm2nnTCCYRk5SfNAooCLOmT2qr3vtGhacTYuKGg',
  'https://blogger.googleusercontent.com/img/a/AVvXsEh55YaGwaCKKxn5IfPhAZh2yyOTiI_4Iv5qM0dyBi1-mxDF8T6Om8nCCQq840vxgvbfxrkPSU43WLKbPhJmYOHtT17ykRz9rqsgjFLvvBgb_6zuQc12UxflfchSafOoC9T8FDyzbzPJo16uTUgzRoftaKxWNKquiO_12yBLZQn8D9OJui4todE2oUMBqbY',
  'https://blogger.googleusercontent.com/img/a/AVvXsEiiVs8w8C4fBdLlFgKPLtWMFpzeluF5C6MLdX1EzBFGq1F4TbEWXwzfYg-hZ6SuH8grPbdGUSGBi-dYfY6FOPl_12P6yuzD9eiEkoMQ6kilXjM_QmiJIJtOxHofbZVa-0V9Y1bD4CZc8VMOVAx1YSDDOpp_HUpEAsQi6KjmqsEcm6hUJgGIy9r0f8UiNp8',
  'https://blogger.googleusercontent.com/img/a/AVvXsEhCm8k6D37rHT_BsHD06hXc1FimVqGzQYyWXzCg3NkIV6VQlrSbVr5fu_IYUfUMfj_KJLD65O3yGCtzGC2zWcd9zlcTG9PQwgg4L7wlT_5UvyUidNPEtd3HTQ3fCwnBvAPVPTJrHfEg3bn7ARZ7mMIG1zjdgjC3RVo6MVlEGcE7ASHk_Ly95M-aSASuWFI'
];

const stages = [
  {
    title: 'The Perfect Tourist Experience',
    tag: 'Cover',
    label: 'Welcome',
    img: 0,
    stamp: 'Welcome',
    text: 'Welcome passengers to a complete all-inclusive Bora Bora vacation package designed for comfort, adventure, and creativity.',
    chips: ['travel agency', 'vacation package', 'Bora Bora', 'all-inclusive'],
    expression: 'Project title: The Perfect Tourist Experience',
    stats: ['VIP Stage', 'Agency Experience', 'Ready Included']
  },
  {
    title: 'Getting to Paradise',
    tag: 'Intro & Transportation',
    label: 'Flight + private transfer',
    img: 1,
    stamp: 'Arrival',
    text: 'If you want to visit a true paradise, this 3-day Bora Bora vacation package is the best choice. You just need to book the package. It includes round-trip flights and a private boat transfer directly to the island.',
    chips: ['round-trip flights', 'private boat transfer', 'all-inclusive', 'island arrival'],
    expression: 'want to visit • need to book',
    stats: ['01 Destination', 'Private Transfer', '100% Included']
  },
  {
    title: 'Premium Accommodation',
    tag: 'Accommodation',
    label: 'Luxury overwater bungalows',
    img: 2,
    stamp: 'Resort booked',
    text: 'Travelers decide to stay in exclusive overwater bungalows with premium comfort and crystal-clear waters. It is perfect for young travelers who plan to travel in style.',
    chips: ['overwater bungalows', 'crystal-clear waters', 'premium comfort', 'resort'],
    expression: 'decide to stay • plan to travel',
    stats: ['02 Resort', 'Premium Comfort', 'Lagoon View']
  },
  {
    title: 'Adventure & Mount Otemanu',
    tag: 'Activities',
    label: 'Coral reefs and nature',
    img: 3,
    stamp: 'Adventure',
    text: 'Visitors will love exploring vibrant coral reefs and enjoy visiting white-sand beaches while swimming with tropical fish and taking beautiful photos of Mount Otemanu.',
    chips: ['coral reefs', 'tropical fish', 'white-sand beaches', 'Mount Otemanu'],
    expression: 'love exploring • enjoy visiting',
    stats: ['03 Adventure', 'VIP Experience', '100% Included']
  },
  {
    title: 'Local Cuisine & Pricing',
    tag: 'Cuisine',
    label: 'Meals included',
    img: 4,
    stamp: 'Cuisine',
    text: 'The package includes all meals. Guests will taste fresh seafood, grilled fish, and tropical fruits. Some travelers prefer backpacking, but this premium vacation offers comfort and value.',
    chips: ['fresh seafood', 'grilled fish', 'tropical fruits', '$1,500 per person'],
    expression: 'prefer backpacking • hope to see',
    stats: ['04 Cuisine', '$1,500 p/p', 'Meals Included']
  },
  {
    title: 'Travel Recommendations',
    tag: 'Back Cover',
    label: 'Ready to travel',
    img: 5,
    stamp: 'Ready',
    text: 'Pack light clothes, passport, tickets, sunscreen, sunglasses, camera, and booking confirmation. Avoid traveling with heavy winter clothes or unnecessary accessories.',
    chips: ['passport', 'tickets', 'sunscreen', 'camera', 'booking confirmation'],
    expression: 'avoid traveling',
    stats: ['05 Ready', 'Checklist', 'Smart Travel']
  }
];

const includes = [
  ['✈️', 'Round-trip flights', 'Comfortable flights included from the beginning of the package.'],
  ['🚤', 'Private boat transfer', 'A premium lagoon transfer directly to the island experience.'],
  ['🏝️', 'Overwater bungalow', 'Luxury accommodation with crystal-clear water views.'],
  ['🐠', 'Coral reef tour', 'Adventure with snorkeling, fish, and tropical scenery.'],
  ['🍍', 'Local cuisine', 'Fresh seafood, grilled fish, and tropical fruits.'],
  ['🧳', 'Travel essentials', 'Recommendations for passport, sunscreen, camera, and light clothes.']
];

const byId = (id) => document.getElementById(id);
let current = 0;
let started = false;
let carouselIndex = 0;
let isLaunching = false;

function setImages() {
  ['brandLogo','boardingLogo','heroLogo'].forEach((id) => { const el = byId(id); if (el) el.src = logoUrl; });
  const boardingBg = byId('boardingBg'); if (boardingBg) boardingBg.src = imageUrls[0];
  const heroBg = byId('heroBg'); if (heroBg) heroBg.src = imageUrls[0];
  const finalBg = byId('finalBg'); if (finalBg) finalBg.src = imageUrls[0];
}

function prepareTakeoffScene() {
  const overlay = byId('takeoffOverlay');
  if (!overlay) return;
  overlay.innerHTML = `
    <div class="gate-cinema">
      <div class="gate-skyline" style="background-image:linear-gradient(180deg,rgba(84,177,204,.42),rgba(2,11,19,.14) 45%,rgba(2,11,19,.92) 46%),url('${imageUrls[1]}')"></div>
      <div class="gate-content">
        <div class="gate-copy">
          <p class="eyebrow">Boarding experience</p>
          <h2>Passengers are boarding</h2>
          <p>The team is ready. The agency experience starts with a cinematic takeoff to Bora Bora.</p>
          <div class="gate-chiprow"><span>Gate Paradise</span><span>Flight BB-1500</span><span>Destination Bora Bora</span></div>
        </div>
        <div class="airport-scene">
          <div class="gate-header"><strong>BB-1500 • Now Boarding</strong><span>Takeoff ready</span></div>
          <div class="gate-glass"></div>
          <div class="boarding-bridge"></div>
          <div class="person p1"></div><div class="person p2"></div><div class="person p3"></div>
          <div class="jet-shadow"></div><div class="jet">✈</div>
          <div class="runway"></div>
          <div class="status-board"><div><small>Flight</small><b>BB-1500</b></div><div><small>Gate</small><b>Paradise</b></div><div><small>Status</small><b>Boarding</b></div><div><small>Next</small><b>Bora Bora</b></div></div>
          <div class="takeoff-flash"></div>
        </div>
      </div>
    </div>`;
}

function renderStage() {
  const stage = stages[current];
  const shell = byId('stageShell');
  if (!shell) return;
  shell.innerHTML = `
    <article class="stage-media magnetic reveal visible">
      <img src="${imageUrls[stage.img]}" alt="${stage.title}" />
      <span class="stage-count">${String(current + 1).padStart(2,'0')} / ${String(stages.length).padStart(2,'0')}<br>${stage.tag}</span>
      <span class="stage-stamp">${stage.stamp}</span>
    </article>
    <article class="stage-text magnetic reveal visible">
      <p class="eyebrow">${stage.tag}</p>
      <h3>${stage.title}</h3>
      <p>${highlightExpressions(stage.text)}</p>
      <div class="chips">${stage.chips.map((chip) => `<span class="chip">${chip}</span>`).join('')}</div>
      <div class="expression"><strong>Key expressions:</strong> ${stage.expression}</div>
      <div class="stats">${stage.stats.map((item) => { const [a, ...b] = item.split(' '); return `<div><strong>${a}</strong><span>${b.join(' ')}</span></div>`; }).join('')}</div>
      <div class="stage-actions"><button class="soft-btn" id="prevStep" type="button">Previous</button><button class="soft-btn" id="nextStep" type="button">Next stop</button></div>
    </article>`;
  document.querySelectorAll('.journey-card').forEach((card, index) => card.classList.toggle('active', index === current));
  byId('prevStep')?.addEventListener('click', previousStage);
  byId('nextStep')?.addEventListener('click', nextStage);
  activateMagnetic();
}

function highlightExpressions(text) {
  const expressions = ['want to visit','need to book','decide to stay','plan to travel','love exploring','enjoy visiting','prefer backpacking','hope to see','avoid traveling'];
  let output = text;
  expressions.forEach((item) => {
    output = output.replaceAll(item, `<mark>${item}</mark>`);
  });
  return output;
}

function nextStage() {
  current = (current + 1) % stages.length;
  renderStage();
  unlockStamp(stages[current].stamp);
  byId('stageShell')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function previousStage() {
  current = (current - 1 + stages.length) % stages.length;
  renderStage();
  byId('stageShell')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function renderCarousel() {
  const container = byId('includeCarousel');
  if (!container) return;
  const visible = [...includes.slice(carouselIndex), ...includes.slice(0, carouselIndex)].slice(0, 3);
  container.innerHTML = `
    <button class="carousel-btn" id="carouselPrev" type="button">‹</button>
    <div class="carousel-track">${visible.map(([icon,title,text]) => `<article class="include-card magnetic"><span>${icon}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div>
    <button class="carousel-btn" id="carouselNext" type="button">›</button>`;
  byId('carouselPrev')?.addEventListener('click', () => { carouselIndex = (carouselIndex - 1 + includes.length) % includes.length; renderCarousel(); });
  byId('carouselNext')?.addEventListener('click', () => { carouselIndex = (carouselIndex + 1) % includes.length; renderCarousel(); });
  activateMagnetic();
}

function renderBrochure() {
  const grid = byId('brochureGrid');
  if (!grid) return;
  grid.innerHTML = stages.map((stage, index) => `
    <article class="brochure-card magnetic reveal" data-panel="${index}">
      <img src="${imageUrls[stage.img]}" alt="${stage.title}" />
      <span class="panel-label">Panel ${index + 1}</span>
      <h3>${index === 0 ? 'Front Cover' : stage.title}</h3>
      <p>${stage.text}</p>
    </article>`).join('');
  grid.querySelectorAll('.brochure-card').forEach((card) => card.addEventListener('click', () => openPanel(Number(card.dataset.panel))));
  activateMagnetic();
  observeReveals();
}

function openPanel(index) {
  const modal = byId('panelModal');
  const stage = stages[index];
  if (!modal || !stage) return;
  byId('modalImg').src = imageUrls[stage.img];
  byId('modalTag').textContent = `Panel ${index + 1} • ${stage.tag}`;
  byId('modalTitle').textContent = index === 0 ? 'Front Cover' : stage.title;
  byId('modalText').innerHTML = `${highlightExpressions(stage.text)}<br><br><strong>Key expressions:</strong> ${stage.expression}`;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}

function closePanel() {
  const modal = byId('panelModal');
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

function updatePrice() {
  const travelers = Number(byId('travelers')?.value || 3);
  const days = Number(byId('days')?.value || 5);
  let total = travelers * 1500 + Math.max(0, days - 3) * travelers * 120;
  if (byId('vip')?.checked) total += travelers * 95;
  if (byId('tour')?.checked) total += travelers * 180;
  if (byId('photo')?.checked) total += travelers * 75;
  const formatted = new Intl.NumberFormat('en-US', { style:'currency', currency:'USD', maximumFractionDigits:0 }).format(total);
  const price = byId('price');
  if (price) price.textContent = formatted;
  const meta = byId('priceMeta');
  if (meta) meta.textContent = `${travelers} traveler${travelers > 1 ? 's' : ''} • ${days} day${days > 1 ? 's' : ''}`;
}

function renderStamps() {
  const stamps = ['Boarding','Arrival','Resort booked','Adventure','Cuisine','Ready'];
  const buttons = byId('stampButtons');
  if (!buttons) return;
  buttons.innerHTML = stamps.map((stamp) => `<button type="button" data-stamp="${stamp}">${stamp}</button>`).join('');
  buttons.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => unlockStamp(button.dataset.stamp)));
}

function unlockStamp(label) {
  const wall = byId('passportWall');
  if (!wall || !label) return;
  const exists = [...wall.querySelectorAll('.stamp')].some((stamp) => stamp.textContent.trim().toLowerCase() === label.toLowerCase());
  if (exists) return;
  const stamp = document.createElement('div');
  stamp.className = 'stamp';
  stamp.textContent = label;
  wall.prepend(stamp);
}

function startJourney() {
  if (isLaunching) return;
  isLaunching = true;
  started = true;
  const boarding = byId('boardingOverlay');
  const takeoff = byId('takeoffOverlay');
  boarding?.classList.add('hidden');
  document.body.classList.add('page-lock');
  takeoff?.classList.add('show');
  unlockStamp('Boarding');
  setTimeout(() => {
    takeoff?.classList.remove('show');
    document.body.classList.remove('page-lock');
    byId('home')?.scrollIntoView({ behavior:'smooth' });
    setTimeout(() => { isLaunching = false; }, 600);
  }, 3600);
}

function openBoarding() {
  byId('boardingOverlay')?.classList.remove('hidden');
  document.body.classList.add('page-lock');
}

function closeBoardingOnly() {
  byId('boardingOverlay')?.classList.add('hidden');
  document.body.classList.remove('page-lock');
}

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold:.12 });
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
}

function updateScrollEffects() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const progress = max > 0 ? (scrollY / max) * 100 : 0;
  const bar = byId('scrollProgress');
  if (bar) bar.style.width = `${progress}%`;
  byId('nav')?.classList.toggle('scrolled', scrollY > 80);

  const ids = ['home','transport','stay','activities','food','tips'];
  const dots = document.querySelectorAll('.flight-dot');
  let active = 0;
  stages.forEach((_, index) => {
    const shell = byId('stageShell');
    if (shell && shell.getBoundingClientRect().top < innerHeight * .65) active = Math.max(active, current);
  });
  if (scrollY > (byId('brochure')?.offsetTop || Infinity) - 250) active = 5;
  dots.forEach((dot, index) => dot.classList.toggle('active', index <= active));
}

function activateMagnetic() {
  document.querySelectorAll('.magnetic').forEach((card) => {
    if (card.dataset.magneticReady) return;
    card.dataset.magneticReady = 'true';
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - .5) * -5;
      const rotateY = ((x / rect.width) - .5) * 5;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

function bindEvents() {
  byId('beginJourney')?.addEventListener('click', startJourney);
  byId('openBoarding')?.addEventListener('click', openBoarding);
  byId('navToggle')?.addEventListener('click', () => byId('navLinks')?.classList.toggle('open'));
  byId('closeModal')?.addEventListener('click', closePanel);
  byId('panelModal')?.addEventListener('click', (event) => { if (event.target.id === 'panelModal') closePanel(); });
  document.querySelectorAll('.journey-card').forEach((card) => {
    card.addEventListener('click', () => {
      current = Number(card.dataset.step || 0);
      renderStage();
      unlockStamp(stages[current].stamp);
      byId('stageShell')?.scrollIntoView({ behavior:'smooth', block:'center' });
    });
  });
  ['travelers','days','vip','tour','photo'].forEach((id) => byId(id)?.addEventListener('input', updatePrice));
  addEventListener('scroll', updateScrollEffects, { passive:true });
  addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !started && !isLaunching) startJourney();
    else if ((event.key === 'ArrowRight' || event.key === ' ') && started) nextStage();
    else if (event.key === 'ArrowLeft' && started) previousStage();
    else if (event.key === 'Escape') closePanel();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setImages();
  prepareTakeoffScene();
  renderStage();
  renderCarousel();
  renderBrochure();
  renderStamps();
  updatePrice();
  observeReveals();
  activateMagnetic();
  bindEvents();
  updateScrollEffects();
});
