// @ts-check
/**
 * @typedef {{src:string, type?:string, label?:string}} ProjectVideo
 * @typedef {{fr?:string, en?:string}} I18nText
 * @typedef {{
*   id: string;
*   title?: I18nText | string;
*   description?: I18nText | string;
*   images?: string[];
*   video?: ProjectVideo;
*   poster?: string;
*   tech?: string[];
*   link?: string;
*   order?: number;
* }} Project
*/

(() => {
 /** @type {HTMLElement|null} */
 const carouselRoot = document.getElementById('projectCarousel');
 if (!(carouselRoot instanceof HTMLElement)) return;
 const carousel = carouselRoot;

 // Arrow handlers (used by inline onclick)
 /** @param {number} direction */
 (window /** @type {any} */).scrollProjects = function (direction) {
   const container = document.getElementById('projectCarousel');
   if (!container) return;
   container.scrollBy({ left: direction * 320, behavior: 'smooth' });
 };

 function bootstrapReady() {
   /** @type {any} */ const b = (window as any)['bootstrap'];
   return !!(b && b.Modal);
 }

 /** @type {Project[]} */
 let projects = [];
 /** @type {import('swiper').Swiper | null} */
 let modalSwiper = null;

 /** @param {Project} p */
 function makeCard(p) {
   /** @type {string} */
   const title =
     (typeof p.title === 'string' ? p.title : (p.title && (p.title.fr || p.title.en))) || p.id || '';

   /** @type {string} */
   const desc =
     (typeof p.description === 'string' ? p.description : (p.description && (p.description.fr || p.description.en))) || '';

   const img = (p.images && p.images[0]) || '';

   const fig = document.createElement('figure');
   fig.className = 'overlay overlay-2 hover-scale color rounded me-3';
   fig.style.minWidth = '360px';
   fig.innerHTML =
     `<a href="#" class="js-open-project" data-project-id="${p.id || ''}">
        ${img
          ? `<img src="${img}" alt="${(title||'').replace(/"/g,'')}" loading="lazy">`
          : '<div class="no-image-placeholder" style="width:100%;height:120px;background:#f5f5f5;border-radius:6px;"></div>'
        }
      </a>
      <span class="bg"></span>
      <figcaption>
        <h5 class="from-top mb-1">${title}</h5>
        <p class="from-bottom small mb-0">${desc ? desc.slice(0,90) : ''}</p>
      </figcaption>`;
   return fig;
 }

 /** @param {string} projectId */
 function openProjectModal(projectId) {
   const raw = projects.find((x) => x && x.id === projectId);
   if (!raw) return;

   const modalEl = document.getElementById('projectModal');
   const titleEl = document.getElementById('modalProjectTitle');
   const descEl  = document.getElementById('modalProjectDescription');
   const techEl  = document.getElementById('modalTechStack');
   const linkEl  = document.getElementById('modalProjectLink');
   const slides  = document.getElementById('modalImageCarousel');

   if (!(modalEl instanceof HTMLElement)) return;
   if (!(titleEl instanceof HTMLElement)) return;
   if (!(descEl  instanceof HTMLElement)) return;
   if (!(techEl  instanceof HTMLElement)) return;
   if (!(slides  instanceof HTMLElement)) return;

   const title =
     (typeof raw.title === 'string' ? raw.title : (raw.title && (raw.title.fr || raw.title.en))) || raw.id || '';
   const desc =
     (typeof raw.description === 'string' ? raw.description : (raw.description && (raw.description.fr || raw.description.en))) || '';

   titleEl.textContent = title;
   descEl.textContent  = desc || '';

   techEl.innerHTML = '';
   (raw.tech || []).forEach((t) => {
     const tag = document.createElement('span');
     tag.className = 'badge bg-primary-subtle text-primary fw-semibold px-2 py-1 rounded-pill';
     tag.textContent = t;
     techEl.appendChild(tag);
   });

   if (linkEl instanceof HTMLAnchorElement) {
     linkEl.href = raw.link || '#';
     linkEl.style.display = raw.link ? 'inline-block' : 'none';
   }

   // Media
   slides.innerHTML = '';
   const hasVideo = !!(raw.video && raw.video.src);
   if (hasVideo) {
     const slide = document.createElement('div');
     slide.className = 'swiper-slide';
     slide.innerHTML =
       `<video class="w-100 h-100 object-fit-cover rounded" autoplay muted loop playsinline preload="none"
               poster="${raw.poster || ''}" disablepictureinpicture
               controlslist="nodownload noplaybackrate nofullscreen" style="pointer-events:none;">
          <source src="${(raw.video && raw.video.src) || ''}" type="${(raw.video && raw.video.type) || 'video/webm'}">
        </video>`;
     slides.appendChild(slide);
     if (modalSwiper) { try{ modalSwiper.destroy(true,true); }catch{} modalSwiper = null; }
   } else {
     (raw.images || []).forEach((src) => {
       const slide = document.createElement('div');
       slide.className = 'swiper-slide';
       slide.innerHTML = `<img src="${src}" alt="${title}" class="img-fluid w-100 h-100 object-fit-cover" loading="lazy">`;
       slides.appendChild(slide);
     });

     const init = () => {
       /** @type {any} */ const SwiperCtor = (window as any)['Swiper'];
       if (!SwiperCtor) { setTimeout(init, 50); return; }
       const count = slides.querySelectorAll('.swiper-slide').length;
       const allowLoop = count > 1;
       if (modalSwiper) { try { modalSwiper.update(); } catch{} }
       else {
         // @ts-ignore global Swiper in runtime
         modalSwiper = new SwiperCtor('.project-modal-swiper', {
           loop: allowLoop,
           navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
           pagination: { el: '.swiper-pagination', clickable: true }
         });
       }
     };
     init();
   }

   if (bootstrapReady()) {
     (window as any)['bootstrap'].Modal.getOrCreateInstance(modalEl).show();
   } else {
     console.warn('Bootstrap JS not found. Include bootstrap.bundle.min.js.');
   }
 }

 // Delegate clicks
 carousel.addEventListener('click', (e) => {
   if (!(e.target instanceof Element)) return;
   const a = e.target.closest('a.js-open-project');
   if (!a) return;
   e.preventDefault();
   e.stopPropagation();
   const id = a.getAttribute('data-project-id');
   if (id) openProjectModal(id);
 });

 async function loadProjects() {
   try {
     const res = await fetch('/assets/js/projects2.json', { cache: 'no-store' });
     if (!res.ok) throw new Error('Failed to load projects2.json');
     /** @type {{projects?: Project[]}} */
     const json = await res.json();
     projects = (json.projects || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0));

     carousel.innerHTML = '';
     if (!projects.length) {
       carousel.innerHTML = '<div class="d-flex align-items-center justify-content-center text-muted py-5 w-100" style="min-width:360px;">No projects</div>';
       return;
     }
     projects.forEach((p) => carousel.appendChild(makeCard(p)));
   } catch (e) {
     console.error(e);
     const loading = document.getElementById('projectCarouselLoading');
     if (loading) loading.textContent = 'Failed to load projects';
   }
 }

 if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', loadProjects);
 } else {
   loadProjects();
 }
})();
