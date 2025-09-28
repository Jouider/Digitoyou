// web/src/scripts/site-loader.js

// Always-on small helpers (static – no warnings)
import './accessibility-helpers.js';
import './svg-injector.js';

// Contact page modal/carousel (dynamic – literal string is analyzable)
if (document.getElementById('projectCarousel')) {
  import('./contact-carousel.js');
}

// Index page: testimonials/projects + typing
if (document.getElementById('projects-swiper') || document.querySelector('.text-typing')) {
  import('./index-typing-swiper.js');
}

// Brand marquee (low priority)
window.addEventListener('load', () => {
  import('./brand-swipers.js');
});
