// ─── QUIZ ───
const quizPool = [
  { q:'Which film marked Prabhas\' debut?', opts:['Varsham','Eeswar','Chatrapathi','Raghavendra'], ans:1 },
  { q:'Who directed Baahubali?', opts:['Prashanth Neel','S. S. Rajamouli','Nag Ashwin','Koratala Siva'], ans:1 },
  { q:'In which year did Baahubali: The Beginning release?', opts:['2014','2015','2016','2017'], ans:1 },
  { q:'What is Prabhas\' character name in Salaar?', opts:['Deva','Kattappa','Bhallaladeva','Sharma'], ans:0 },
  { q:'Which was the first Prabhas film to gross over ₹1000 crore?', opts:['Saaho','Baahubali 2','Kalki 2898 AD','Baahubali'], ans:1 },
  { q:'Who played the female lead in Mirchi?', opts:['Trisha','Tamannaah','Anushka','Kajal Aggarwal'], ans:2 },
  { q:'Which director made Chatrapathi with Prabhas?', opts:['S. S. Rajamouli','V. V. Vinayak','Puri Jagannadh','Meher Ramesh'], ans:0 },
  { q:'What genre is The RajaSaab?', opts:['Pure Horror','Horror-Comedy-Romance','Action Thriller','Period Drama'], ans:1 },
  { q:'Which film is set in 1940s colonial India?', opts:['Radhe Shyam','Fauzi','Adipurush','Saaho'], ans:1 },
  { q:'Who directed Spirit?', opts:['Prashanth Neel','Nag Ashwin','Sandeep Reddy Vanga','Maruthi Dasari'], ans:2 },
  { q:'Which film asks "Kattappa, why did you kill Baahubali?"', opts:['Baahubali 2','Baahubali: The Beginning','Salaar','Saaho'], ans:1 },
  { q:'How many films has Prabhas acted in (including upcoming)?', opts:['25','27','30','22'], ans:1 },
  { q:'In which film did Prabhas play Lord Ram?', opts:['Baahubali','Kannappa','Adipurush','Saaho'], ans:2 },
  { q:'Which of these is NOT a Prabhas film?', opts:['Mr. Perfect','Billa','Pushpa','Darling'], ans:2 },
  { q:'Who directed Salaar?', opts:['Prashanth Neel','S. S. Rajamouli','Sandeep Reddy Vanga','Nag Ashwin'], ans:0 },
  { q:'Prabhas made a cameo in which 2025 film?', opts:['Salaar 2','Kannappa','Spirit','Fauzi'], ans:1 },
  { q:'What is Prabhas\' nickname?', opts:['Mega Star','Rebel Star','Stylish Star','Young Tiger'], ans:1 },
  { q:'In which year did Prabhas make his debut?', opts:['2003','2002','2004','2001'], ans:1 },
  { q:'Which Prabhas film released in 2024?', opts:['Salaar','Adipurush','Kalki 2898 AD','Radhe Shyam'], ans:2 },
  { q:'What is unique about Kalki 2898 AD?', opts:['First Indian sci-fi epic','Most expensive Indian film','Both','Prabhas\' first Hindi film'], ans:2 }
];

let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let answering = false;
const QUIZ_COUNT = 5;

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function initQuiz() {
  const shuffled = shuffleArray([...quizPool]);
  quizQuestions = shuffled.slice(0, QUIZ_COUNT);
  quizIndex = 0;
  quizScore = 0;
  answering = false;
  renderQuiz();
}

function renderQuiz() {
  const progress = document.getElementById('quizProgress');
  const question = document.getElementById('quizQuestion');
  const options = document.getElementById('quizOptions');
  const result = document.getElementById('quizResult');

  result.classList.add('quiz-hide');
  options.classList.remove('quiz-hide');

  progress.innerHTML = quizQuestions.map((_, i) =>
    `<div class="dot ${i === quizIndex ? 'active' : ''}"></div>`
  ).join('');

  const q = quizQuestions[quizIndex];
  question.textContent = `${quizIndex + 1}. ${q.q}`;

  const labels = ['A', 'B', 'C', 'D'];
  options.innerHTML = q.opts.map((opt, i) =>
    `<button class="quiz-option" data-idx="${i}">${labels[i]}. ${opt}</button>`
  ).join('');

  options.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(Number(btn.dataset.idx)));
  });
}

function handleAnswer(selected) {
  if (answering) return;
  answering = true;

  const q = quizQuestions[quizIndex];
  const allBtns = document.querySelectorAll('.quiz-option');
  allBtns.forEach(b => b.classList.add('disabled'));

  allBtns.forEach((b, i) => {
    if (i === q.ans) b.classList.add('correct');
    if (i === selected && selected !== q.ans) b.classList.add('wrong');
    if (i === selected) b.classList.add('selected');
  });

  const dots = document.querySelectorAll('.quiz-progress .dot');
  dots[quizIndex].classList.add(selected === q.ans ? 'correct' : 'wrong');
  if (selected === q.ans) quizScore++;

  setTimeout(() => {
    quizIndex++;
    if (quizIndex < QUIZ_COUNT) {
      answering = false;
      renderQuiz();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  const options = document.getElementById('quizOptions');
  const result = document.getElementById('quizResult');
  const score = document.getElementById('quizScore');
  const msg = document.getElementById('quizMsg');
  options.classList.add('quiz-hide');
  result.classList.remove('quiz-hide');
  score.textContent = `${quizScore} / ${QUIZ_COUNT}`;
  const msgs = [
    'You need to watch more Prabhas films!',
    'Not bad, but the Rebel Star deserves better!',
    'Good knowledge of the Prabhas universe!',
    'Almost perfect! You\'re a true fan!',
    'love aa love anta loveaaa'
  ];
  msg.textContent = msgs[quizScore] || 'Incredible!';
}

document.getElementById('quizRestart').addEventListener('click', initQuiz);
initQuiz();
