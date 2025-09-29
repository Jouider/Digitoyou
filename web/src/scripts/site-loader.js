// Always-on small helpers (bundled)
import './accessibility-helpers.js';
import './svg-injector.js';

// Page-specific, lazy modules
const onDomReady = (fn) =>
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn, { once: true })
    : fn();

// Index page: projects swiper + typing
onDomReady(async () => {
  const needsSwiper = document.getElementById('projects-swiper');
  const needsTyping = document.querySelector('.text-typing');
  if (needsSwiper || needsTyping) {
    await import('./index-typing-swiper.js');
  }
});

// Contact page: project carousel + modal
onDomReady(async () => {
  if (document.getElementById('projectCarousel')) {
    await import('./contact-carousel.js');
  }
});

// Brand marquee (low priority: after load)
window.addEventListener('load', () => {
  import('./brand-swipers.js');
});
