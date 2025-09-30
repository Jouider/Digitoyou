// web/src/scripts/brand-swipers.js
// @ts-check
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function initBrandSwipers() {
  document.querySelectorAll('.brand-swiper').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    if (el.dataset.initialized === 'true') return;

    const slideCount = el.querySelectorAll('.swiper-slide').length || 0;
    const perView = 2;
    const loop = slideCount > perView;

    try {
      new Swiper(el, {
        slidesPerView: perView,
        spaceBetween: 30,
        loop,
        speed: 3000,
        autoplay: { delay: 0, disableOnInteraction: false },
        breakpoints: {
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 }
        }
      });
      el.dataset.initialized = 'true';
    } catch (e) {
      console.warn('Brand swiper init failed', e);
    }
  });
}

// run as soon as this module is imported
if ('requestIdleCallback' in window) {
  // @ts-ignore
  requestIdleCallback(initBrandSwipers, { timeout: 1500 });
} else {
  setTimeout(initBrandSwipers, 300);
}
