/* Adaptation of BackgroundPixelStars for the static Anderson Braga page. */
(() => {
  'use strict';

  const canvas = document.querySelector('.background-stars');
  const context = canvas?.getContext('2d');
  if (!context) return;

  // A cabeça da estrela é platina levemente quente; o rastro esfria para prata.
  const shootingStarHead = '#fbf6ec';
  const shootingStarTrail = '#c6cbd3';
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const frameInterval = 1000 / 16;
  let width = 0;
  let height = 0;
  let shootingStar = null;
  let animationFrame = null;
  let lastFrame = 0;
  let elapsed = 0;
  let nextShootingStar = 1.5;
  let pageActive = true;

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = bounds.width;
    height = bounds.height;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    shootingStar = null;
    draw();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    if (shootingStar) {
      const { x, y, age, direction } = shootingStar;
      const fade = Math.min(1, age * 2, Math.max(0, (2.8 - age) * 2));
      for (let point = 0; point < 14; point++) {
        context.fillStyle = point < 3 ? shootingStarHead : shootingStarTrail;
        context.globalAlpha = fade * 0.65 * (1 - point / 14);
        context.fillRect(Math.round(x - point * 4 * direction), Math.round(y - point * 6), point ? 2 : 3, point ? 2 : 3);
      }
    }
    context.globalAlpha = 1;
  }

  function animate(timestamp) {
    if (!pageActive || document.hidden || motionPreference.matches) {
      animationFrame = null;
      return;
    }
    if (timestamp - lastFrame >= frameInterval) {
      const delta = lastFrame ? Math.min((timestamp - lastFrame) / 1000, 0.15) : 0;
      lastFrame = timestamp;
      elapsed += delta;
      if (elapsed >= nextShootingStar) {
        const left = Math.random() > 0.5;
        shootingStar = {
          x: width * (left ? 0.05 : 0.95),
          y: height * Math.random() * 0.35,
          age: 0,
          direction: left ? 1 : -1,
        };
        nextShootingStar = elapsed + 3 + Math.random();
      }

      if (shootingStar) {
        shootingStar.age += delta;
        shootingStar.x += delta * 50 * shootingStar.direction;
        shootingStar.y += delta * 70;
        if (shootingStar.age >= 2.8) shootingStar = null;
      }
      draw();
    }
    animationFrame = window.requestAnimationFrame(animate);
  }

  function syncAnimation() {
    if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    animationFrame = null;
    lastFrame = 0;
    if (motionPreference.matches) shootingStar = null;
    draw();
    if (pageActive && !document.hidden && !motionPreference.matches) {
      animationFrame = window.requestAnimationFrame(animate);
    }
  }

  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', syncAnimation);
  motionPreference.addEventListener('change', syncAnimation);
  window.addEventListener('pagehide', () => {
    pageActive = false;
    syncAnimation();
  });
  window.addEventListener('pageshow', () => {
    pageActive = true;
    syncAnimation();
  });
  resize();
  syncAnimation();
})();
