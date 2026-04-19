(() => {
  const video = document.getElementById('heroVideo');
  if (video) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      const tryPlay = () => {
        video.muted = true;
        const p = video.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      };
      document.addEventListener('DOMContentLoaded', tryPlay);
      window.addEventListener('load', tryPlay);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) tryPlay(); });
      ['touchstart','click'].forEach(evt => window.addEventListener(evt, tryPlay, { once: true, passive: true }));
    }
  }
})();
