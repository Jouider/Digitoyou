// @ts-check
document.addEventListener('DOMContentLoaded', async () => {
    const imgs = document.querySelectorAll('img.svg-inject');
    for (const img of imgs) {
      if (!(img instanceof HTMLImageElement)) continue;
      try {
        const src = img.src || img.getAttribute('src') || '';
        const res = await fetch(src, { cache: 'force-cache' });
        if (!res.ok) continue;
        const svgText = await res.text();
        const wrap = document.createElement('div');
        wrap.innerHTML = svgText.trim();
        const svg = wrap.querySelector('svg');
        if (!svg) continue;
  
        // carry over classes (minus the marker)
        const cls = (img.getAttribute('class') || '')
          .split(' ').filter((c) => c && c !== 'svg-inject').join(' ');
        if (cls) svg.setAttribute('class', cls);
  
        // Remove hard fills/strokes so theme classes can color
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
  
        if (!svg.getAttribute('width'))  svg.setAttribute('width',  img.getAttribute('width')  || '48');
        if (!svg.getAttribute('height')) svg.setAttribute('height', img.getAttribute('height') || '48');
  
        img.replaceWith(svg);
      } catch (e) {
        console.warn('SVG inject failed for', (img as HTMLImageElement).src, e);
        try { img.style.visibility = 'visible'; } catch {}
      }
    }
  });
  