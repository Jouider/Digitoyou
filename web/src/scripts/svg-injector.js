// web/src/scripts/svg-injector.js

function runSvgInject() {
  const imgs = document.querySelectorAll('img.svg-inject');
  if (!imgs.length) return;

  imgs.forEach(async (img) => {
    if (!(img instanceof HTMLImageElement)) return;

    try {
      const src = img.getAttribute('src') || img.src || '';
      if (!src || !src.endsWith('.svg')) return;

      const res = await fetch(src, { cache: 'force-cache' });
      if (!res.ok) return;

      const svgText = await res.text();
      const wrap = document.createElement('div');
      wrap.innerHTML = svgText.trim();
      const svg = wrap.querySelector('svg');
      if (!svg) return;

      // Preserve id
      if (img.id) svg.id = img.id;

      // Carry over classes (remove the marker)
      const cls = (img.getAttribute('class') || '')
        .split(' ')
        .filter(Boolean)
        .filter((c) => c !== 'svg-inject')
        .join(' ');
      if (cls) svg.setAttribute('class', cls);

      // Set accessible labeling: from alt if present; otherwise hide
      const alt = img.getAttribute('alt');
      if (alt && alt.trim()) {
        svg.setAttribute('role', 'img');
        svg.setAttribute('aria-label', alt.trim());
      } else {
        svg.setAttribute('aria-hidden', 'true');
        svg.removeAttribute('role');
      }

      // Ensure width/height so layout is stable (avoid CLS)
      if (!svg.getAttribute('width')) {
        const w = img.getAttribute('width') || '48';
        svg.setAttribute('width', w);
      }
      if (!svg.getAttribute('height')) {
        const h = img.getAttribute('height') || '48';
        svg.setAttribute('height', h);
      }

      // Optional: allow theming—strip hard-coded fills/strokes (except 'none')
      svg.querySelectorAll('[fill]').forEach((el) => {
        const val = el.getAttribute('fill');
        if (val && val !== 'none') {
          el.classList.add('lineal-fill');
          el.removeAttribute('fill');
        }
      });
      svg.querySelectorAll('[stroke]').forEach((el) => {
        const val = el.getAttribute('stroke');
        if (val && val !== 'none') {
          el.classList.add('lineal-stroke');
          el.removeAttribute('stroke');
        }
      });

      // Swap in-place
      img.replaceWith(svg);
    } catch (err) {
      // If anything fails, keep the original <img>
      // (No TS cast, keep it simple)
      try { img.style.visibility = 'visible'; } catch {}
      console.warn('SVG inject failed for:', img && img.getAttribute && img.getAttribute('src'), err);
    }
  });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runSvgInject, { once: true });
} else {
  runSvgInject();
}
