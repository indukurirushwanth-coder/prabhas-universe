// ─── TIMELINE DATA ───
const timelineData = [
  { year:'2002', title:'Eeswar — The Debut', desc:'Prabhas makes his Tollywood debut, showing the early sparks of the superstar he would become.' },
  { year:'2003\u20132005', title:'Early Rise', desc:'Raghavendra, Varsham, Adavi Ramudu, and Chatrapathi establish him as a bankable action hero with Rajamouli\'s blockbuster.' },
  { year:'2006\u20132009', title:'The Experimental Phase', desc:'A string of diverse roles from Pournami to Billa and Ek Niranjan showcase his range, though with mixed results.' },
  { year:'2010\u20132011', title:'Romantic Turn', desc:'Darling and Mr. Perfect become beloved romantic comedies, expanding his fanbase beyond action lovers.' },
  { year:'2013', title:'Mirchi — The Turning Point', desc:'A critical and commercial success that cements his reputation as a leading man who can anchor a film.' },
  { year:'2015', title:'Baahubali: The Beginning', desc:'A magnum opus that shatters box office records and places Prabhas on the global stage — Indian cinema changed forever.' },
  { year:'2017', title:'Baahubali 2: The Conclusion', desc:'The highest-grossing Indian film of its era \u2014 a cultural phenomenon that transcends cinema and creates a lasting legacy.' },
  { year:'2019\u20132022', title:'Pan-India Experiments', desc:'Saaho and Radhe Shyam test his pan-India appeal with bilingual big-budget productions.' },
  { year:'2023', title:'The Comeback', desc:'Salaar: Part 1 \u2013 Ceasefire delivers a brutal, stylish action epic that reaffirms his box-office dominance.' },
  { year:'2024', title:'Kalki 2898 AD', desc:'India\'s first true sci-fi spectacle \u2014 Prabhas expands his universe into dystopian futurism with a \u20b9600 crore epic.' },
  { year:'2025\u20132026', title:'The RajaSaab & Fauzi Era', desc:'The RajaSaab brings horror-comedy while Fauzi returns to period-war epics set in 1940s colonial India — two radically different genres showcasing Prabhas\u2019s range.' },
  { year:'2026\u20132027', title:'Salaar 2 & Kalki 2', desc:'Salaar: Part 2 \u2013 Shouryaanga Parvam concludes the Khansaar saga while Kalki 2 continues India\u2019s biggest sci-fi franchise. Two massive sequels on the horizon.' },
  { year:'2027', title:'Spirit & Beyond', desc:'Spirit marks his first collaboration with Sandeep Reddy Vanga in a raw, intense crime drama. The Rebel Star continues to push boundaries and redefine Indian cinema.' }
];

// ─── RENDER TIMELINE ───
function renderTimeline() {
  const tlContainer = document.getElementById('timelineContainer');
  tlContainer.innerHTML = timelineData.map(t => `
    <div class="tl-item fade-in">
      <div class="tl-content">
        <div class="tl-year">${t.year}</div>
        <div class="tl-title">${t.title}</div>
        <div class="tl-desc">${t.desc}</div>
      </div>
      <div class="tl-dot"></div>
    </div>
  `).join('');
}
