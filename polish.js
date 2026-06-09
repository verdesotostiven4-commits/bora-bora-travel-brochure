(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function addCursorGlow() {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    window.addEventListener('pointermove', (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
      document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    }, { passive: true });
  }

  function addPresentationHelp() {
    const help = document.createElement('div');
    help.className = 'presentation-help';
    help.textContent = 'Enter / Space to continue • Esc to close';
    document.body.appendChild(help);
    setTimeout(() => help.style.opacity = '.35', 6500);
  }

  function enhanceNavigation() {
    const nav = $('#nav');
    const links = $$('.nav-links a');
    const sections = ['home', 'journey', 'brochure', 'interactive', 'final']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { threshold: .33 });

    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', () => {
      nav?.classList.toggle('compact', window.scrollY > 160);
    }, { passive: true });
  }

  function improveMagneticCards() {
    const cards = $$('.magnetic');
    cards.forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - .5) * 10;
        const y = ((event.clientY - rect.top) / rect.height - .5) * -10;
        card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(-2px)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }

  function autoRevealStampsOnScroll() {
    const stampNames = ['Welcome', 'Arrival', 'Resort booked', 'Adventure', 'Cuisine', 'Ready'];
    const stageShell = $('#stageShell');
    if (!stageShell || typeof window.unlockStamp !== 'function') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Math.min(Math.max(window.current || 0, 0), stampNames.length - 1);
        window.unlockStamp(stampNames[index]);
      });
    }, { threshold: .45 });
    observer.observe(stageShell);
  }

  function addKeyboardPolish() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Home') {
        event.preventDefault();
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
      }
      if (event.key === 'End') {
        event.preventDefault();
        document.getElementById('final')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function observeNewStageContent() {
    const shell = $('#stageShell');
    if (!shell) return;
    const observer = new MutationObserver(() => {
      improveMagneticCards();
      $$('.stage-media, .stage-text').forEach((el) => {
        el.animate([
          { opacity: 0, transform: 'translateY(28px) scale(.98)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' }
        ], { duration: 520, easing: 'cubic-bezier(.2,.8,.2,1)' });
      });
    });
    observer.observe(shell, { childList: true });
  }

  window.addEventListener('load', () => {
    addCursorGlow();
    addPresentationHelp();
    enhanceNavigation();
    improveMagneticCards();
    autoRevealStampsOnScroll();
    addKeyboardPolish();
    observeNewStageContent();
  });
})();
