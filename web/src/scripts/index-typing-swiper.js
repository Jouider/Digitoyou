// web/src/scripts/index-typing-swiper.js

import Swiper from 'swiper';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const projectsSwiperEl = document.getElementById('projects-swiper');
const projectsWrapper = document.getElementById('projects-swiper-wrapper');
const typingEl = document.querySelector('.text-typing');

function buildSlide(p = {}) {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide testimonial-slide';

  const poster = p.poster || '';
  const vSrc = (p.video && p.video.src) || '';
  const vType = (p.video && p.video.type) || 'video/webm';
  const vLabel = (p.video && p.video.label) || p.name || '';
  const i18nTitle = p.i18nTitle || '';
  const i18nDesc  = p.i18nDesc  || '';
  const i18nCta   = p.i18nCta   || '';
  const title = p.title || '';
  const desc  = p.desc  || '';
  const link  = p.link  || '#';

  slide.innerHTML = `
    <div class="testimonial-card d-flex flex-column">
      <div class="testimonial-img mb-3">
        <video class="img-fluid rounded" autoplay muted loop playsinline preload="none" poster="${poster}">
          ${vSrc ? `<source src="${vSrc}" type="${vType}">` : ''}
          ${vLabel || ''}
        </video>
      </div>
      <h5 class="testimonial-title" ${i18nTitle ? `data-i18n="${i18nTitle}"` : ''}>${title}</h5>
      <p class="text-muted flex-grow-1" ${i18nDesc ? `data-i18n-html="${i18nDesc}"` : ''}>${desc}</p>
      <a href="${link}" target="_blank" rel="noopener" class="fw-bold mt-auto" ${i18nCta ? `data-i18n="${i18nCta}"` : ''}>Visit Website &gt;</a>
    </div>`;
  return slide;
}

async function loadProjectsAndInitSwiper() {
  if (!projectsSwiperEl || !projectsWrapper) return;

  const dataSource = projectsSwiperEl.getAttribute('data-source');
  if (!dataSource) return;

  try {
    const res = await fetch(dataSource, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to load projects JSON: ${res.status}`);

    const data = await res.json();
    let items = [];

    if (Array.isArray(data)) items = data;
    else if (data && typeof data === 'object') {
      if (Array.isArray(data.projects)) items = data.projects;
      else if (Array.isArray(data.items)) items = data.items;
    }

    projectsWrapper.innerHTML = '';
    items
      .slice()
      .sort((a, b) => (a?.order || 0) - (b?.order || 0))
      .forEach((p) => projectsWrapper.appendChild(buildSlide(p)));

    // Re-apply i18n if present
    const maybeApply = window.applyI18n;
    if (typeof maybeApply === 'function') { try { maybeApply(); } catch {} }

    // Ensure container has slides before init
    const slideCount = projectsWrapper.querySelectorAll('.swiper-slide').length;
    if (!slideCount) return;

    // IMPORTANT: initialize on the actual container element
    // (your container already has class="swiper mySwiper" and contains .swiper-wrapper)
    new Swiper(projectsSwiperEl, {
      modules: [Autoplay, FreeMode],
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: slideCount > 2,
      speed: 5000,
      freeMode: { enabled: true, momentum: false, sticky: false },
      allowTouchMove: true,
      autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true },
      breakpoints: {
        320:  { spaceBetween: 16 },
        768:  { spaceBetween: 20 },
        1200: { spaceBetween: 24 }
      }
    });
  } catch (err) {
    console.error(err);
    projectsWrapper.innerHTML = '<div class="text-danger p-4">Failed to load projects.</div>';
  }
}

function initTyping() {
  if (!typingEl) return;

  let words =
    (Array.isArray(window.i18nTypingWords) && window.i18nTypingWords.length
      ? window.i18nTypingWords
      : ['Simplement', 'Rapidement', 'Facilement']);

  let wordIndex = 0;
  let letterIndex = 0;
  let typingForward = true;
  let timerId = null;

  const setText = (txt) => { typingEl.textContent = txt; };

  const resetTyping = (newWords) => {
    if (Array.isArray(newWords) && newWords.length) words = newWords;
    setText(words[0] || '');
    wordIndex = 0;
    letterIndex = 0;
    typingForward = true;
  };

  const animateTyping = () => {
    const currentWord = words[wordIndex] || '';

    if (typingForward) {
      letterIndex++;
      if (letterIndex > currentWord.length) {
        typingForward = false;
        timerId = window.setTimeout(animateTyping, 1000);
        return;
      }
    } else {
      letterIndex--;
      if (letterIndex === 0) {
        typingForward = true;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setText(currentWord.slice(0, letterIndex));
    timerId = window.setTimeout(animateTyping, typingForward ? 150 : 60);
  };

  resetTyping(window.i18nTypingWords);
  animateTyping();

  document.addEventListener('i18n:updated', () => {
    try {
      const latest = window.i18nTypingWords;
      if (Array.isArray(latest) && latest.length) {
        if (timerId != null) window.clearTimeout(timerId);
        resetTyping(latest);
        animateTyping();
      }
    } catch {}
  });
}

// Kick off
loadProjectsAndInitSwiper();
initTyping();
