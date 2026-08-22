// ─── MODAL ───
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  document.getElementById('modalPoster').src = m.poster;
  document.getElementById('modalPoster').alt = m.title;
  document.getElementById('modalBadge').textContent = m.badge;
  document.getElementById('modalTitle').innerHTML = `${m.title} <span>(${m.year})</span>`;
  document.getElementById('modalMeta').innerHTML = `
    <span><i class="fas fa-calendar-alt"></i> ${m.year}</span>
    <span><i class="fas fa-tag"></i> ${m.genres.join(', ')}</span>
    <span><i class="fas fa-star"></i> ${m.badge}</span>
  `;
  document.getElementById('modalSynopsis').textContent = m.synopsis;
  document.getElementById('modalInfo').innerHTML = `
    <div><i class="fas fa-calendar-alt"></i> <span>${m.release}</span></div>
    <div><i class="fas fa-clock"></i> <span>${m.runtime ? m.runtime + ' min' : 'TBA'}</span></div>
    <div><i class="fas fa-coins"></i> <span>₹${m.budget}Cr</span></div>
    <div><i class="fas fa-trophy"></i> <span>₹${m.boxOffice ? m.boxOffice + 'Cr' : 'TBA'}</span></div>
    <div><i class="fas fa-music"></i> <span>${m.music}</span></div>
    <div><i class="fas fa-globe"></i> <span>${m.language}</span></div>
    ${m.ott ? `<div><i class="fas fa-play-circle"></i> <span>OTT: ${m.ott}</span></div>` : ''}
  `;
  document.getElementById('modalDialogue').textContent = m.dialogue;
  document.getElementById('modalCrew').innerHTML = `
    <div><strong>Director</strong><span>${m.director}</span></div>
    <div><strong>Co-Stars</strong><span>${m.costars.join(', ')}</span></div>
  `;
  const watchBtn = document.getElementById('watchTrailerBtn');
  watchBtn.onclick = () => window.open(m.trailer, '_blank');
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
