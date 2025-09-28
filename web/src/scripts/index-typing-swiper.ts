// web/src/scripts/index-typing-swiper.ts

import 'swiper/css/bundle';
type Video = { src?: string; type?: string; label?: string };
type TestimonialProject = {
  poster?: string;
  video?: Video;
  name?: string;
  title?: string;
  i18nTitle?: string;
  desc?: string;
  i18nDesc?: string;
  link?: string;
  i18nCta?: string;
  order?: number;
};

const projectsSwiperEl = document.getElementById('projects-swiper') as HTMLElement | null;
const projectsWrapper = document.getElementById('projects-swiper-wrapper') as HTMLElement | null;
const typingEl = document.querySelector('.text-typing') as HTMLElement | null;

function buildSlide(p: TestimonialProject) {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide testimonial-slide';

  const poster = p.poster || '';
  const vSrc = (p.video && p.video.src) || '';
  const vType = (p.video && p.video.type) || 'video/webm';
  const vLabel = (p.video && p.video.label) || p.name || '';
  const i18nTitle = p.i18nTitle || '';
  const i18nDesc = p.i18nDesc || '';
  const i18nCta = p.i18nCta || '';
  const title = p.title || '';
  const desc = p.desc || '';
  const link = p.link || '#';

  slide.innerHTML = `
    <div class="testimonial-card d-flex flex-column">
      <div class="testimonial-img mb-3">
        <video class="img-fluid rounded" autoplay muted loop playsinline preload="none" poster="${poster}">
          <source src="${vSrc}" type="${vType}">
          ${vLabel}
        </video>
      </div>
      <h5 class="testimonial-title" data-i18n="${i18nTitle}">${title}</h5>
      <p class="text-muted flex-grow-1" data-i18n-html="${i18nDesc}">${desc}</p>
      <a href="${link}" target="_blank" rel="noopener" class="fw-bold mt-auto" data-i18n="${i18nCta}">Visit Website &gt;</a>
    </div>`;
  return slide;
}

async function loadProjectsAndInitSwiper() {
  if (!projectsSwiperEl || !projectsWrapper) return;

  const dataSource = projectsSwiperEl.getAttribute('data-source');
  if (!dataSource) return;

  try {
    const res = await fetch(dataSource, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load projects');
    const data: unknown = await res.json();

    let list: TestimonialProject[] = [];
    if (Array.isArray(data)) list = data as TestimonialProject[];
    else if (data && typeof data === 'object') {
      const d = data as any;
      if (Array.isArray(d.projects)) list = d.projects as TestimonialProject[];
      else if (Array.isArray(d.items)) list = d.items as TestimonialProject[];
    }

    projectsWrapper.innerHTML = '';
    list
      .slice()
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .forEach((p) => projectsWrapper.appendChild(buildSlide(p)));

    // Re-apply i18n if present
    const maybeApply = (window as any)['applyI18n'];
    if (typeof maybeApply === 'function') maybeApply();

    // Lazy-load Swiper from npm bundle
    const { default: Swiper } = await import('swiper/bundle');
    // eslint-disable-next-line no-new
    new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 3000,
      freeMode: true,
      freeModeMomentum: false,
      autoplay: { delay: 0, disableOnInteraction: false },
      breakpoints: { 320: { slidesPerView: 1.2 }, 768: { slidesPerView: 2.2 }, 1200: { slidesPerView: 3.5 } },
    });
  } catch (err) {
    console.error(err);
    projectsWrapper.innerHTML = '<div class="text-danger p-4">Failed to load projects.</div>';
  }
}

// Simple typing effect
function initTyping() {
  if (!typingEl) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let words: string[] = ((window as any)['i18nTypingWords'] as string[]) || ['Simplement', 'Rapidement', 'Facilement'];
  let wordIndex = 0;
  let letterIndex = 0;
  let typingForward = true;
  let timerId: number | null = null;

  function resetTyping(newWords?: string[]) {
    if (Array.isArray(newWords) && newWords.length) words = newWords;
    typingEl.textContent = words[0] || '';
    wordIndex = 0;
    letterIndex = 0;
    typingForward = true;
  }

  function animateTyping() {
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
    typingEl.textContent = currentWord.slice(0, letterIndex);
    timerId = window.setTimeout(animateTyping, typingForward ? 150 : 50);
  }

  resetTyping((window as any)['i18nTypingWords']);
  animateTyping();

  document.addEventListener('i18n:updated', () => {
    const latest = (window as any)['i18nTypingWords'];
    if (Array.isArray(latest) && latest.length) {
      if (timerId != null) window.clearTimeout(timerId);
      resetTyping(latest);
      animateTyping();
    }
  });
}

loadProjectsAndInitSwiper();
initTyping();
