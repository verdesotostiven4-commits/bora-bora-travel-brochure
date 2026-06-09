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
    expression: 'Project title: The Perfect Tourist Experience'
  },
  {
    title: 'Getting to Paradise',
    tag: 'Intro & Transportation',
    label: 'Flight + private transfer',
    img: 1,
    stamp: 'Arrival',
    text: 'If you want to visit a true paradise, this 3-day Bora Bora vacation package is the best choice. You just need to book the package. It includes round-trip flights and a private boat transfer directly to the island.',
    chips: ['round-trip flights', 'private boat transfer', 'all-inclusive', 'island arrival'],
    expression: 'want to visit • need to book'
  },
  {
    title: 'Premium Accommodation',
    tag: 'Accommodation',
    label: 'Luxury overwater bungalows',
    img: 2,
    stamp: 'Resort booked',
    text: 'Travelers decide to stay in exclusive overwater bungalows with premium comfort and crystal-clear waters. It is perfect for young travelers who plan to travel in style.',
    chips: ['overwater bungalows', 'crystal-clear waters', 'premium comfort', 'resort'],
    expression: 'decide to stay • plan to travel'
  },
  {
    title: 'Adventure & Mount Otemanu',
    tag: 'Activities',
    label: 'Coral reefs and nature',
    img: 3,
    stamp: 'Adventure',
    text: 'Visitors will love exploring vibrant coral reefs and enjoy visiting white-sand beaches while swimming with tropical fish and taking beautiful photos of Mount Otemanu.',
    chips: ['coral reefs', 'tropical fish', 'white-sand beaches', 'Mount Otemanu'],
    expression: 'love exploring • enjoy visiting'
  },
  {
    title: 'Local Cuisine & Pricing',
    tag: 'Cuisine',
    label: 'Meals included',
    img: 4,
    stamp: 'Cuisine',
    text: 'The package includes all meals. Guests will taste fresh seafood, grilled fish, and tropical fruits. Some travelers prefer backpacking, but this premium vacation offers comfort and value.',
    chips: ['fresh seafood', 'grilled fish', 'tropical fruits', '$1,500 per person'],
    expression: 'prefer backpacking • hope to see'
  },
  {
    title: 'Travel Recommendations',
    tag: 'Back Cover',
    label: 'Ready to travel',
    img: 5,
    stamp: 'Ready',
    text: 'Pack light clothes, passport, tickets, sunscreen, sunglasses, camera, and booking confirmation. Avoid traveling with heavy winter clothes or unnecessary accessories.',
    chips: ['passport', 'tickets', 'sunscreen', 'camera', 'booking confirmation'],
    expression: 'avoid traveling'
  }
];

const byId = (id) => document.getElementById(id);
let current = 0;
let started = false;
let carouselIndex = 0;

function injectCinematicStyles() {
  const css = document.createElement('style');
  css.textContent = `
    .takeoff-overlay{background:#020b13!important;overflow:hidden!important}
    .takeoff-overlay .globe-wrap,.takeoff-overlay .stars,.takeoff-overlay .globe,.takeoff-overlay .orbit-ring{display:none!important}
    .gate-cinema{position:absolute;inset:0;color:white;overflow:hidden;background:radial-gradient(circle at 73% 18%,rgba(124,244,236,.2),transparent 30%),linear-gradient(90deg,#020b13 0%,#061829 50%,#062d3d 100%)}
    .gate-skyline{position:absolute;inset:0;background:linear-gradient(180deg,rgba(84,177,204,.42),rgba(2,11,19,.14) 45%,rgba(2,11,19,.92) 46%),url('${imageUrls[1]}') center/cover;filter:saturate(1.05);opacity:.55;transform:scale(1.05)}
    .gate-cinema:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,11,19,.92),rgba(2,11,19,.52),rgba(2,11,19,.18));pointer-events:none}
    .gate-content{position:relative;z-index:3;width:min(1420px,88vw);height:100%;margin:auto;display:grid;grid-template-columns:.92fr 1.08fr;gap:42px;align-items:center}
    .gate-copy{max-width:720px}.gate-copy h2{font-family:'Playfair Display',serif;font-size:clamp(4rem,8.4vw,8.8rem);line-height:.88;margin:0 0 20px;letter-spacing:-.06em}.gate-copy p{font-size:1.15rem;line-height:1.7;color:#e4fbff;font-weight:800}.gate-chiprow{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}.gate-chiprow span{border:1px solid rgba(255,255,255,.24);background:rgba(255,255,255,.11);padding:10px 14px;border-radius:999px;font-weight:950;backdrop-filter:blur(12px)}
    .airport-scene{position:relative;min-height:620px;border-radius:48px;background:linear-gradient(180deg,rgba(255,255,255,.24),rgba(255,255,255,.08));border:1px solid rgba(255,255,255,.28);box-shadow:0 36px 130px rgba(0,0,0,.42);overflow:hidden;backdrop-filter:blur(20px)}
    .airport-scene:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(167,229,255,.38),rgba(9,45,67,.12) 49%,rgba(3,15,26,.72) 50%),repeating-linear-gradient(90deg,rgba(255,255,255,.18) 0 2px,transparent 2px 142px);}
    .gate-header{position:absolute;left:28px;right:28px;top:26px;display:flex;justify-content:space-between;align-items:center;gap:16px;z-index:4}.gate-header strong{font-size:1.1rem;letter-spacing:.16em;text-transform:uppercase}.gate-header span{padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.14);font-weight:950}.gate-glass{position:absolute;left:5%;right:5%;top:92px;height:250px;border-radius:34px;border:1px solid rgba(255,255,255,.24);background:linear-gradient(180deg,rgba(124,244,236,.24),rgba(255,255,255,.08));overflow:hidden}.gate-glass:after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 0 35%,rgba(255,255,255,.22) 42%,transparent 55%);animation:glassShine 2.2s ease-in-out infinite}.runway{position:absolute;left:-10%;right:-10%;bottom:75px;height:120px;background:linear-gradient(180deg,rgba(5,26,38,.48),rgba(1,8,14,.88));transform:skewY(-3deg)}.runway:after{content:"";position:absolute;left:0;right:0;top:50%;height:5px;background:repeating-linear-gradient(90deg,#fff 0 44px,transparent 44px 86px);opacity:.75}.takeoff-overlay.show .runway:after{animation:runwayMove .22s linear infinite}
    .jet{position:absolute;right:8%;bottom:148px;font-size:8rem;z-index:5;filter:drop-shadow(0 34px 35px rgba(0,0,0,.55));transform:rotate(0)}.takeoff-overlay.show .jet{animation:jetTakeoff 3.15s cubic-bezier(.18,.84,.2,1) forwards}.jet-shadow{position:absolute;right:14%;bottom:128px;width:190px;height:24px;background:rgba(0,0,0,.32);border-radius:50%;filter:blur(8px);z-index:3}.takeoff-overlay.show .jet-shadow{animation:shadowOut 2.7s ease forwards}.boarding-bridge{position:absolute;right:24%;bottom:165px;width:260px;height:34px;background:linear-gradient(90deg,rgba(255,255,255,.86),rgba(185,220,229,.7));border-radius:18px;z-index:4;transform:skewX(-10deg);box-shadow:0 16px 35px rgba(0,0,0,.25)}.takeoff-overlay.show .boarding-bridge{animation:bridgeAway 1.4s ease forwards}.person{position:absolute;bottom:155px;width:18px;height:18px;border-radius:50%;background:#fff;z-index:5;box-shadow:0 20px 0 #fff,0 42px 0 -5px rgba(255,255,255,.9)}.p1{left:10%;animation:walk 3.2s linear infinite}.p2{left:18%;animation:walk 3.5s linear infinite .35s}.p3{left:27%;animation:walk 3.8s linear infinite .7s}.takeoff-overlay.show .person{animation:walkFast 1.5s linear forwards}.status-board{position:absolute;left:30px;right:30px;bottom:26px;z-index:6;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.status-board div{padding:15px;border-radius:18px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(12px)}.status-board small{display:block;text-transform:uppercase;letter-spacing:.15em;color:#a7fff7;font-weight:950}.status-board b{display:block;margin-top:5px;font-size:1.05rem}.takeoff-flash{position:absolute;inset:0;z-index:8;background:linear-gradient(90deg,transparent,rgba(255,255,255,.72),transparent);transform:translateX(-130%);pointer-events:none}.takeoff-overlay.show .takeoff-flash{animation:flashSweep 1.8s ease 1.25s forwards}
    @keyframes glassShine{50%{transform:translateX(16%)}}@keyframes runwayMove{to{transform:translateX(-86px)}}@keyframes jetTakeoff{0%{right:8%;bottom:148px;transform:rotate(0) scale(1)}38%{right:28%;bottom:180px;transform:rotate(-8deg) scale(1.08)}100%{right:105%;bottom:720px;transform:rotate(-18deg) scale(1.42)}}@keyframes shadowOut{to{opacity:0;transform:scale(.25) translateX(-240px)}}@keyframes bridgeAway{to{opacity:0;transform:translateX(-80px) skewX(-10deg)}}@keyframes walk{to{transform:translateX(280px)}}@keyframes walkFast{to{opacity:0;transform:translateX(380px)}}@keyframes flashSweep{to{transform:translateX(130%)}}
    .stage-shell{scroll-margin-top:150px}.stage-media,.stage-text,.brochure-panel,.include-card,.lab-card,.final-card{will-change:transform;transition:transform .32s ease,box-shadow .32s ease}.stage-media:hover,.stage-text:hover,.brochure-panel:hover,.include-card:hover,.lab-card:hover{box-shadow:0 42px 135px rgba(6,38,61,.25)}.gerund,.infinitive{padding:2px 6px;border-radius:7px}.gerund{background:rgba(13,170,165,.18);color:#007f7b;font-weight:950}.infinitive{background:rgba(246,207,101,.26);color:#85600d;font-weight:950}.include-carousel{position:relative;display:flex!important;gap:18px;overflow:hidden}.include-card{min-width:260px}.carousel-controls{display:flex;justify-content:center;gap:12px;margin-top:22px}.passport-stamp{display:inline-grid;place-items:center;min-width:116px;min-height:82px;border:3px dashed #f6c55d;color:#073047;background:#fff8d7;border-radius:18px;transform:rotate(-5deg);font-weight:950;letter-spacing:.04em;animation:stampDrop .35s ease}.passport-stamp:nth-child(even){transform:rotate(4deg)}@keyframes stampDrop{from{opacity:0;transform:scale(.55) rotate(-14deg)}to{opacity:1}}.boarding-overlay.reset{display:grid;opacity:1;pointer-events:auto;transform:none}.nav-links .active-nav{background:#071827!important;color:white!important}.modal-open{overflow:hidden}
  `;
  document.head.appendChild(css);

  const overlay = byId('takeoffOverlay');
  if (!overlay) return;
  overlay.innerHTML = `
    <div class="gate-cinema">
      <div class="gate-skyline"></div>
      <div class="gate-content">
        <div class="gate-copy">
          <p class="eyebrow">Boarding complete</p>
          <h2>Taking off to Bora Bora</h2>
          <p>The presentation begins like a real airport experience: passengers board, the aircraft departs, and the story lands in paradise.</p>
          <div class="gate-chiprow"><span>Flight BB-1500</span><span>Gate Paradise</span><span>Ready for takeoff</span></div>
        </div>
        <div class="airport-scene">
          <div class="gate-header"><strong>Premium Gate Lounge</strong><span>Now Boarding</span></div>
          <div class="gate-glass"></div>
          <div class="boarding-bridge"></div>
          <div class="person p1"></div><div class="person p2"></div><div class="person p3"></div>
          <div class="jet-shadow"></div><div class="jet">✈</div><div class="runway"></div>
          <div class="status-board"><div><small>Flight</small><b>BB-1500</b></div><div><small>From</small><b>Classroom</b></div><div><small>To</small><b>Bora Bora</b></div><div><small>Status</small><b>Takeoff</b></div></div>
          <div class="takeoff-flash"></div>
        </div>
      </div>
    </div>`;
}

function setBaseImages() {
  ['brandLogo', 'boardingLogo', 'heroLogo'].forEach((id) => {
    const el = byId(id);
    if (el) el.src = logoUrl;
  });
  if (byId('boardingBg')) byId('boardingBg').src = imageUrls[0];
  if (byId('heroBg')) byId('heroBg').src = imageUrls[0];
  if (byId('finalBg')) byId('finalBg').src = imageUrls[0];
}

function highlightGrammar(text) {
  const pairs = [
    ['want to visit', 'infinitive'], ['need to book', 'infinitive'], ['decide to stay', 'infinitive'], ['plan to travel', 'infinitive'], ['hope to see', 'infinitive'],
    ['love exploring', 'gerund'], ['enjoy visiting', 'gerund'], ['prefer backpacking', 'gerund'], ['Avoid traveling', 'gerund'], ['avoid traveling', 'gerund'], ['swimming', 'gerund']
  ];
  let output = text;
  pairs.forEach(([phrase, cls]) => {
    output = output.replaceAll(phrase, `<b class="${cls}">${phrase}</b>`);
  });
  return output;
}

function renderStage() {
  const root = byId('stageShell');
  if (!root) return;
  const s = stages[current];
  root.innerHTML = `
    <div class="stage-media magnetic reveal visible" id="transport">
      <img src="${imageUrls[s.img]}" alt="${s.title}">
      <span class="stage-count">0${current + 1} / 06</span>
      <span class="stage-stamp">${s.stamp}</span>
    </div>
    <article class="stage-text magnetic reveal visible" id="${['cover','transport','stay','activities','food','tips'][current]}">
      <p class="eyebrow">${s.label}</p>
      <h3>${s.title}</h3>
      <p>${highlightGrammar(s.text)}</p>
      <div class="chips">${s.chips.map((c) => `<span class="chip">${c}</span>`).join('')}</div>
      <div class="expression"><strong>Key expressions:</strong> ${s.expression}</div>
      <div class="stats"><div><strong>${current + 1}</strong><span>Destination</span></div><div><strong>VIP</strong><span>Experience</span></div><div><strong>100%</strong><span>Included</span></div></div>
      <div class="stage-actions"><button class="soft-btn" id="prevStage" type="button">Previous</button><button class="soft-btn" id="nextStage" type="button">Next stop</button></div>
    </article>`;

  byId('prevStage').onclick = () => go(current - 1);
  byId('nextStage').onclick = () => go(current + 1);
  document.querySelectorAll('.journey-card').forEach((btn, i) => btn.classList.toggle('active', i === current));
  document.querySelectorAll('.flight-dot').forEach((dot, i) => dot.classList.toggle('active', i === current));
  magnetic();
}

function go(index) {
  current = (index + stages.length) % stages.length;
  renderStage();
  const target = byId('journey');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderIncluded() {
  const items = [
    ['✈️', 'Round-trip flights', 'Comfortable transportation to paradise.'],
    ['🚤', 'Private boat transfer', 'Arrival across the turquoise lagoon.'],
    ['🏝️', 'Overwater bungalow', 'Premium room with crystal-clear views.'],
    ['🐠', 'Coral reef tour', 'Snorkeling and marine-life adventure.'],
    ['🍍', 'Local cuisine', 'Fresh seafood and tropical fruits.'],
    ['🧳', 'Travel essentials', 'Passport, camera, sunscreen, and tickets.']
  ];
  const wrap = byId('includeCarousel');
  if (!wrap) return;
  wrap.innerHTML = items.map(([icon, title, text]) => `<article class="include-card magnetic"><span>${icon}</span><h3>${title}</h3><p>${text}</p></article>`).join('');
  const controls = document.createElement('div');
  controls.className = 'carousel-controls';
  controls.innerHTML = '<button class="soft-btn" type="button" id="carPrev">←</button><button class="soft-btn" type="button" id="carNext">→</button>';
  wrap.after(controls);
  byId('carPrev').onclick = () => moveCarousel(-1);
  byId('carNext').onclick = () => moveCarousel(1);
}

function moveCarousel(direction) {
  const wrap = byId('includeCarousel');
  if (!wrap) return;
  carouselIndex = Math.max(0, Math.min(3, carouselIndex + direction));
  wrap.scrollTo({ left: carouselIndex * 278, behavior: 'smooth' });
}

function renderBrochure() {
  const grid = byId('brochureGrid');
  if (!grid) return;
  grid.innerHTML = stages.map((s, i) => `
    <article class="brochure-panel magnetic" data-panel="${i}">
      <img src="${imageUrls[s.img]}" alt="${s.title}">
      <div><p class="eyebrow">Panel ${i + 1}</p><h3>${s.title}</h3><p>${highlightGrammar(s.text)}</p></div>
    </article>`).join('');
  grid.querySelectorAll('.brochure-panel').forEach((panel) => {
    panel.onclick = () => openPanel(Number(panel.dataset.panel));
  });
}

function openPanel(index) {
  const s = stages[index];
  const modal = byId('panelModal');
  if (!modal) return;
  byId('modalImg').src = imageUrls[s.img];
  byId('modalTag').textContent = `Panel ${index + 1}`;
  byId('modalTitle').textContent = s.title;
  byId('modalText').innerHTML = highlightGrammar(s.text);
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closePanel() {
  const modal = byId('panelModal');
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function renderStamps() {
  const buttons = byId('stampButtons');
  if (!buttons) return;
  ['BOARDING', 'ARRIVAL', 'RESORT', 'ADVENTURE', 'CUISINE', 'READY'].forEach((label) => {
    const btn = document.createElement('button');
    btn.className = 'soft-btn';
    btn.type = 'button';
    btn.textContent = label;
    btn.onclick = () => {
      const wall = byId('passportWall');
      const stamp = document.createElement('strong');
      stamp.className = 'passport-stamp';
      stamp.textContent = label;
      wall.appendChild(stamp);
      btn.disabled = true;
    };
    buttons.appendChild(btn);
  });
}

function updatePrice() {
  const travelers = byId('travelers');
  const days = byId('days');
  if (!travelers || !days) return;
  const t = Number(travelers.value);
  const d = Number(days.value);
  let total = t * 1500 + Math.max(0, d - 3) * t * 120;
  if (byId('vip')?.checked) total += t * 95;
  if (byId('tour')?.checked) total += t * 180;
  if (byId('photo')?.checked) total += t * 75;
  byId('price').textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(total);
  byId('priceMeta').textContent = `${t} traveler${t > 1 ? 's' : ''} • ${d} days`;
}

function startJourney() {
  if (started) return;
  started = true;
  byId('takeoffOverlay')?.classList.add('show');
  byId('boardingOverlay')?.classList.add('hidden');
  setTimeout(() => {
    byId('takeoffOverlay')?.classList.remove('show');
    byId('home')?.scrollIntoView({ behavior: 'smooth' });
  }, 3600);
}

function resetBoarding() {
  started = false;
  byId('boardingOverlay')?.classList.remove('hidden');
  byId('takeoffOverlay')?.classList.remove('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function magnetic() {
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.onmousemove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 5}deg) translateY(-3px)`;
    };
    el.onmouseleave = () => {
      el.style.transform = '';
    };
  });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function setupProgress() {
  const progress = byId('scrollProgress');
  const nav = byId('nav');
  const sections = ['home', 'journey', 'brochure', 'interactive', 'final'];
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${Math.max(0, Math.min(1, scrollY / max)) * 100}%`;
    nav?.classList.toggle('scrolled', scrollY > 80);
    let active = 'home';
    sections.forEach((id) => {
      const el = byId(id);
      if (el && el.getBoundingClientRect().top < innerHeight * 0.42) active = id;
    });
    document.querySelectorAll('.nav-links a').forEach((a) => a.classList.toggle('active-nav', a.getAttribute('href') === `#${active}`));
  });
}

function setupEvents() {
  byId('beginJourney')?.addEventListener('click', startJourney);
  byId('openBoarding')?.addEventListener('click', resetBoarding);
  byId('closeModal')?.addEventListener('click', closePanel);
  byId('panelModal')?.addEventListener('click', (event) => { if (event.target.id === 'panelModal') closePanel(); });
  document.querySelectorAll('.journey-card').forEach((btn) => btn.addEventListener('click', () => go(Number(btn.dataset.step))));
  ['travelers', 'days', 'vip', 'tour', 'photo'].forEach((id) => byId(id)?.addEventListener('input', updatePrice));
  byId('navToggle')?.addEventListener('click', () => byId('navLinks')?.classList.toggle('open'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !started && !byId('boardingOverlay')?.classList.contains('hidden')) startJourney();
    else if (event.key === 'ArrowRight' || event.key === ' ') go(current + 1);
    else if (event.key === 'ArrowLeft') go(current - 1);
    else if (event.key === 'Escape') closePanel();
  });
}

function init() {
  injectCinematicStyles();
  setBaseImages();
  renderStage();
  renderIncluded();
  renderBrochure();
  renderStamps();
  updatePrice();
  setupReveal();
  setupProgress();
  setupEvents();
  magnetic();
}

init();
