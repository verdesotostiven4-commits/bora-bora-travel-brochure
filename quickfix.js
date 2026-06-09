(() => {
  const fixedLogoUrl = 'https://blogger.googleusercontent.com/img/a/AVvXsEjWkB6MBayTqkW-7taanKJGDUWxG9Uf3K8Tc1O_XJ5cSWQJ0VnmVgzBIfERE69SSnMJPc62d2sm6b8R6ln2z7_SlWspA2CI6oCq94Eb7CFDPC4n77qZKp6fyQXi2pWA-AlwIHnoCNp8DkPqOPOLgPRFlY29ep4Ai2wT0Sa-kzkAinUR8M8dwR4XJHj8rgY';

  const logoSelector = [
    '#brandLogo',
    '#boardingLogo',
    '#heroLogo',
    '.brand img',
    '.hero-logo',
    '.boarding-top img',
    '.lounge-logo',
    'img[alt="Agency logo"]',
    'img[alt="Bora Bora Paradise Agency logo"]'
  ].join(',');

  function applyFixedLogo() {
    document.querySelectorAll(logoSelector).forEach((logo) => {
      if (!(logo instanceof HTMLImageElement)) return;
      if (logo.src !== fixedLogoUrl) logo.src = fixedLogoUrl;
      logo.decoding = 'async';
      logo.referrerPolicy = 'no-referrer';
      logo.style.backgroundColor = '#ffffff';
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyFixedLogo();
    setTimeout(applyFixedLogo, 120);
    setTimeout(applyFixedLogo, 900);
  });

  const observer = new MutationObserver(applyFixedLogo);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
