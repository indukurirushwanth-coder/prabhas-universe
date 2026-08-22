// ─── ARTICLES ───
const articles = [
  {
    img:'https://upload.wikimedia.org/wikipedia/en/a/ab/Eeswar_film_poster.jpg',
    cat:'Profile',
    title:'The Rise of the Rebel Star: From Eeswar to Global Icon',
    excerpt:'From a small-town debut in 2002 to becoming India\'s most bankable star spanning multiple languages \u2014 tracing the remarkable journey of Prabhas Raju Uppalapati.',
    url:'https://en.wikipedia.org/wiki/Prabhas'
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg',
    cat:'Box Office',
    title:'Baahubali: The Film That Changed Indian Cinema Forever',
    excerpt:'How a Telugu period epic shattered every record, grossed over \u20b91800 crore worldwide, and put Prabhas on the global map as a pan-Asian superstar.',
    url:'https://en.wikipedia.org/wiki/Baahubali:_The_Beginning'
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg',
    cat:'Industry',
    title:'Kalki 2898 AD: India\'s Most Expensive Film Makes History',
    excerpt:'With a budget of \u20b9600 crore and collaborations with Hollywood technicians, Prabhas\'s sci-fi epic redefined ambition in Indian cinema.',
    url:'https://en.wikipedia.org/wiki/Kalki_2898_AD'
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg',
    cat:'Analysis',
    title:'Salaar\'s Dystopian World: Why Prashanth Neel\'s Film is a Game-Changer',
    excerpt:'The brutal Khansaar saga, Prabhas\'s rawest performance yet, and how Salaar cemented his dominance in the post-Baahubali era.',
    url:'https://en.wikipedia.org/wiki/Salaar:_Part_1_%E2%80%93_Ceasefire'
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg',
    cat:'Record',
    title:'First Indian Actor with Multiple Films Grossing Over ₹1000 Crore',
    excerpt:'Prabhas is the first Indian actor to star in multiple films that have crossed the ₹1000 crore mark globally — Baahubali 2 (₹1810 Cr), Kalki 2898 AD (₹1200 Cr), and Salaar (₹700 Cr) — cementing his legacy as India\'s biggest box office draw.',
    url:'https://en.wikipedia.org/wiki/List_of_highest-grossing_Indian_films'
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/en/9/9e/The_RajaSaab_poster.jpg',
    cat:'Upcoming',
    title:'Spirit: Sandeep Reddy Vanga & Prabhas Team Up for Raw Crime Drama',
    excerpt:'The Animal director and Rebel Star join forces for what promises to be one of the most intense action dramas Indian cinema has ever seen.',
    url:'https://en.wikipedia.org/wiki/Spirit_(2027_film)'
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Prabhas_by_Gage_Skidmore.jpg/960px-Prabhas_by_Gage_Skidmore.jpg',
    cat:'Milestone',
    title:'Prabhas Makes History at San Diego Comic-Con 2023',
    excerpt:'Project K (Kalki 2898 AD) became the first-ever Indian film to debut at San Diego Comic-Con. Prabhas, Deepika Padukone, and Kamal Haasan unveiled the teaser on the global stage, marking a historic moment for Indian cinema.',
    url:'https://economictimes.indiatimes.com/magazines/panache/project-k-renamed-kalki-2898-ad-at-san-diego-comic-con-prabhas-deepika-padukone-battle-dark-forces-in-new-teaser/articleshow/102007723.cms'
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg',
    cat:'Legacy',
    title:'From Darling to Demigod: The Unstoppable Stardom of Prabhas',
    excerpt:'What makes Prabhas one of the most beloved stars in India? His humility, dedication, and willingness to risk everything for his craft.',
    url:'https://en.wikipedia.org/wiki/Prabhas_filmography'
  }
];

function renderArticles() {
  const grid = document.getElementById('articlesGrid');
  grid.innerHTML = articles.map((a, i) => `
    <div class="article-card fade-in" style="transition-delay:${i * 0.06}s">
      <img class="art-img" src="${a.img}" alt="${a.title}" loading="lazy" />
      <div class="art-body">
        <div class="art-cat">${a.cat}</div>
        <div class="art-title">${a.title}</div>
        <div class="art-excerpt">${a.excerpt}</div>
        <a class="art-link" href="${a.url}" target="_blank" rel="noopener">Read More <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('#articlesGrid .fade-in').forEach(el => observer.observe(el));
}
