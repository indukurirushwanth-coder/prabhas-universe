// ─── FADE-IN OBSERVER ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold:0.15 });

// ─── AWARD YEAR COUNT-UP OBSERVER ───
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = Number(el.dataset.target) || 0;
    const dur = 1500;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
    countObserver.unobserve(el);
  });
}, { threshold:0.6 });

function bindAwardCounts() {
  document.querySelectorAll('.award-year').forEach(el => countObserver.observe(el));
}

// ─── SCROLL EFFECTS ───
const backBtn = document.getElementById('backToTop');
const progressBar = document.getElementById('scrollProgress');
const nav = document.querySelector('nav');
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const pct = height > 0 ? (scrollY / height) * 100 : 0;
  progressBar.style.width = pct + '%';
  backBtn.style.display = scrollY > 400 ? 'flex' : 'none';
  nav.classList.toggle('scrolled', scrollY > 80);
  if (heroBg) heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
});
backBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

// ─── MOBILE NAV ───
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ─── PHOTO GALLERY ───
const galleryImages = [
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuvhINbjlfU5dkX3l_PZWqZXOaadxGKkMUACXyBDk6A&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXUlQTEUnkMCeWbshFDeSNSA3aDyFxK8UTIfI7pQ-BA&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgETTwIR3gWa6KamLChi-tamqeBTJZhcFc_F3IfPTXg&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKLDOlXLZsXhnEhwENU7fGNSdynHJlCuSCCf1cho9Mg&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0kG9PjoMLtMH3CfeUilHAetSIoSgDw-4Z_2_BU11lToUHqUQ1RGdaL4&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh59hETHxJAT7pBkHxC9M9c3KzF-k8f0Kt0_mwtaEJCA&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Uz8puwX3v8ZWWlWP0ip9YlpVn3wKSzAcIfZvONaImA&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7q-OfHT0a2DaETJz4Kdh5FQ7x2CUlwW_uVh7QzORzw&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxg51OeVMrW-uvZXM_1R9trHDik0YGQKnbU0LjHTqZsVVXfl_5Hq1xnc&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-3GckScucm9Mwm1wCb4F5GOcmx85KWk9Dlz6x7NpGg&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HhpF4qOFwLFZ_eeFyptBYlupw9wQOO266Z4-k1juUQ&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAXAak6rFXmS6KenqQmRp-Em-BSEfsClkxLZf2ggPKQ&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeANlfumi4wN1spCKOP1OrY83ZtGvbt8QztQxunNdAQ&s=10' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB23BXe9SVHNYkT9EK8h23IbUqxRfLpjXJVEdPnQquUg&s=10' },
  { cat:'all', title:'Prabhas 2009', src:'https://upload.wikimedia.org/wikipedia/commons/0/03/Prabhas_2009.jpg' },
  { cat:'all', title:'Prabhas', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJFjka8OBqwfhUY5i0FXpIwb_HCpqsKBW2qRS8QF-2w&s=10' },
  { cat:'all', title:'Prabhas', src:'https://dul4ibqk26tsu.cloudfront.net/uploads/general/images/prabhas_1786702740434.webp' }
];

const galleryGrid = document.getElementById('galleryGrid');

function renderGallery() {
  const imgs = galleryImages;
  galleryGrid.innerHTML = imgs.map((g, i) => `
    <div class="gallery-item fade-in" data-src="${g.src}" data-title="${g.title}" style="transition-delay:${i * 0.04}s">
      <img src="${g.src}" alt="${g.title}" loading="lazy" />
      <div class="gallery-cap"><i class="fas fa-expand" style="margin-right:6px;"></i>${g.title}</div>
    </div>
  `).join('');
  galleryGrid.querySelectorAll('.gallery-item').forEach(el => observer.observe(el));
}

// ─── LIGHTBOX ───
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbTitle = document.getElementById('lbTitle');
const lbCount = document.getElementById('lbCount');
let lbItems = [];
let lbIndex = 0;
let lbZoom = 1;
let lbPanX = 0;
let lbPanY = 0;
let lbDragging = false;
let lbStartX = 0;
let lbStartY = 0;
let lbStartPanX = 0;
let lbStartPanY = 0;

function applyLbTransform() {
  lbImage.style.setProperty('--zoom', lbZoom);
  lbImage.style.setProperty('--panX', lbPanX + 'px');
  lbImage.style.setProperty('--panY', lbPanY + 'px');
}

function openLightbox(index) {
  lbItems = Array.from(galleryGrid.querySelectorAll('.gallery-item')).map(el => ({
    src: el.dataset.src, title: el.dataset.title
  }));
  if (!lbItems.length) return;
  lbIndex = index;
  lbZoom = 1; lbPanX = 0; lbPanY = 0;
  showLbImage();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showLbImage() {
  const item = lbItems[lbIndex];
  lbImage.src = item.src;
  lbImage.alt = item.title;
  lbTitle.textContent = item.title;
  lbCount.textContent = `${lbIndex + 1} / ${lbItems.length}`;
  lbZoom = 1; lbPanX = 0; lbPanY = 0;
  applyLbTransform();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  if (document.fullscreenElement) document.exitFullscreen();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    lightbox.requestFullscreen && lightbox.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

galleryGrid.addEventListener('click', e => {
  const item = e.target.closest('.gallery-item');
  if (!item) return;
  openLightbox(Array.from(galleryGrid.children).indexOf(item));
});

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); lbIndex = (lbIndex + 1) % lbItems.length; showLbImage(); });
document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; showLbImage(); });
document.getElementById('lbZoomIn').addEventListener('click', e => { e.stopPropagation(); lbZoom = Math.min(5, lbZoom * 1.25); applyLbTransform(); });
document.getElementById('lbZoomOut').addEventListener('click', e => { e.stopPropagation(); lbZoom = Math.max(1, lbZoom / 1.25); if (lbZoom === 1) { lbPanX = 0; lbPanY = 0; } applyLbTransform(); });
document.getElementById('lbReset').addEventListener('click', e => { e.stopPropagation(); lbZoom = 1; lbPanX = 0; lbPanY = 0; applyLbTransform(); });
document.getElementById('lbFullscreen').addEventListener('click', e => { e.stopPropagation(); toggleFullscreen(); });

lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

lbImage.addEventListener('wheel', e => {
  e.preventDefault();
  lbZoom = Math.min(5, Math.max(1, lbZoom + (e.deltaY < 0 ? 0.25 : -0.25)));
  if (lbZoom === 1) { lbPanX = 0; lbPanY = 0; }
  applyLbTransform();
}, { passive:false });

lbImage.addEventListener('mousedown', e => {
  if (lbZoom <= 1) return;
  lbDragging = true;
  lbImage.classList.add('zooming');
  lbStartX = e.clientX; lbStartY = e.clientY;
  lbStartPanX = lbPanX; lbStartPanY = lbPanY;
  e.preventDefault();
});
document.addEventListener('mousemove', e => {
  if (!lbDragging) return;
  lbPanX = lbStartPanX + (e.clientX - lbStartX);
  lbPanY = lbStartPanY + (e.clientY - lbStartY);
  applyLbTransform();
});
document.addEventListener('mouseup', () => {
  lbDragging = false;
  lbImage.classList.remove('zooming');
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbItems.length; showLbImage(); }
  if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; showLbImage(); }
});

// ─── GENTLE 3D TILT ON CARDS ───
let tiltFrame;
document.addEventListener('mousemove', e => {
  cancelAnimationFrame(tiltFrame);
  tiltFrame = requestAnimationFrame(() => {
    document.querySelectorAll('.movie-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x > 0 && x < rect.width && y > 0 && y < rect.height;
      if (!inside) { card.style.transform = ''; return; }
      const dx = (x / rect.width - 0.5) * 2;
      const dy = (y / rect.height - 0.5) * 2;
      card.style.transform = `perspective(800px) rotateX(${-dy * 2}deg) rotateY(${dx * 2}deg) translateY(-6px) scale(1.02)`;
    });
  });
});

// ─── INIT ───
renderMovies();
renderBoxOffice();
renderTimeline();
renderAwards();
bindAwardCounts();
renderArticles();
renderGallery();
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
