// @ts-check
document.addEventListener('DOMContentLoaded', () => {
    // Keep hamburger aria-expanded in sync with offcanvas
    document.querySelectorAll('.hamburger-visual.offcanvas-nav-btn, .hamburger.offcanvas-nav-btn')
      .forEach((btn) => {
        if (!(btn instanceof HTMLElement)) return;
        if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
        const target = btn.getAttribute('data-bs-target') || btn.getAttribute('data-target');
        if (target) {
          const off = document.querySelector(target);
          if (off) {
            off.addEventListener('show.bs.offcanvas', () => btn.setAttribute('aria-expanded', 'true'));
            off.addEventListener('hide.bs.offcanvas', () => btn.setAttribute('aria-expanded', 'false'));
          }
        }
        btn.addEventListener('click', () => {
          const state = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', state ? 'false' : 'true');
        });
      });
  
    // Add aria-label to trash/remove links in cart if missing
    document.querySelectorAll('a > i.uil-trash-alt').forEach((icon) => {
      const a = icon.closest('a');
      if (a && !a.hasAttribute('aria-label')) a.setAttribute('aria-label', 'Remove item from cart');
    });
  
    // Add aria-label to icon-only social links
    document.querySelectorAll('.nav.social a, nav.social a').forEach((a) => {
      if (a.getAttribute('aria-label')) return;
      const icon = a.querySelector('i');
      if (!icon) return;
      const cls = (icon.className || '').split(' ').find((c) => c.indexOf('uil-') === 0);
      const label = cls ? cls.replace('uil-', '').replace(/-/g, ' ') : 'Social link';
      a.setAttribute('aria-label', label.charAt(0).toUpperCase() + label.slice(1));
    });
  });
  