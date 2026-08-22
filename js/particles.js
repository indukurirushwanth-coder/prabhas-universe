// ─── PARTICLES ───
(function initParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    const isGlow = i < 10;
    p.className = 'particle ' + (isGlow ? 'glow' : 'gold');
    p.style.left = Math.random() * 100 + '%';
    p.style.width = p.style.height = (Math.random() * (isGlow ? 6 : 3) + (isGlow ? 3 : 1)) + 'px';
    p.style.animationDuration = (Math.random() * 14 + 12) + 's';
    p.style.animationDelay = (Math.random() * 18) + 's';
    container.appendChild(p);
  }
})();
