// ─── AWARDS ───
const awards = [
  { award:'Filmfare Award', category:'Best Actor – Telugu', film:'Mirchi', year:2014, icon:'fas fa-trophy' },
  { award:'SIIMA Award', category:'Best Actor (Telugu)', film:'Baahubali 2', year:2017, icon:'fas fa-medal' },
  { award:'IIFA Utsavam', category:'Best Performance in Leading Role', film:'Baahubali 2', year:2017, icon:'fas fa-star' },
  { award:'Santosham Film Award', category:'Best Actor', film:'Chatrapathi', year:2006, icon:'fas fa-award' },
  { award:'CineMAA Award', category:'Best Actor – Jury', film:'Baahubali: The Beginning', year:2016, icon:'fas fa-crown' },
  { award:'South Indian International Movie Award', category:'Best Actor (Telugu)', film:'Baahubali: The Beginning', year:2016, icon:'fas fa-film' },
  { award:'Zee Cine Award', category:'Best International Icon', film:'Baahubali 2', year:2018, icon:'fas fa-globe' },
  { award:'Gama Award', category:'Global Indian Cinema Icon', film:'—', year:2024, icon:'fas fa-earth-asia' },
  { award:'Indian Film Festival of Melbourne', category:'Best Actor', film:'Kalki 2898 AD', year:2024, icon:'fas fa-video' }
];

function renderAwards() {
  const grid = document.getElementById('awardsGrid');
  if (!grid) return;
  grid.innerHTML = awards.map((a, i) => `
    <div class="award-card fade-in" style="transition-delay:${i * 0.05}s">
      <div class="award-icon"><i class="${a.icon}"></i></div>
      <div class="award-name">${a.award}</div>
      <div class="award-cat">${a.category}</div>
      <div class="award-film">${a.film} <span>•</span> <span class="award-year" data-target="${a.year}">0</span></div>
    </div>
  `).join('');
  document.querySelectorAll('#awardsGrid .fade-in').forEach(el => observer.observe(el));
}

