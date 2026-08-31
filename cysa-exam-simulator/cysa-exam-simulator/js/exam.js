
// CySA+ Exam Simulator Engine
// 3-hour timer, 200 questions, adaptive report

let examQuestions = [];
let currentIndex = 0;
let answers = {};       // index -> "A"/"B"/"C"/"D"
let flagged = new Set();
let timeRemaining = 3 * 60 * 60; // 3 hours in seconds
let timerInterval = null;
let examStarted = false;

const DOMAINS = {
  "1.0 Security Operations": { weight: 34, label: "Security Operations" },
  "2.0 Vulnerability Management": { weight: 26, label: "Vulnerability Management" },
  "3.0 Incident Response and Management": { weight: 24, label: "Incident Response" },
  "4.0 Reporting and Communication": { weight: 16, label: "Reporting & Communication" }
};

function initExam() {
  examQuestions = getExamSet();
  answers = {};
  flagged = new Set();
  currentIndex = 0;
  timeRemaining = 3 * 60 * 60;
  examStarted = true;
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('exam-screen').classList.remove('hidden');
  document.getElementById('report-screen').classList.add('hidden');
  startTimer();
  renderQuestion();
  updateGrid();
}

function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const hrs = Math.floor(timeRemaining / 3600);
  const mins = Math.floor((timeRemaining % 3600) / 60);
  const secs = timeRemaining % 60;
  const el = document.getElementById('timer');
  el.textContent = `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
  el.classList.remove('warning','danger');
  if (timeRemaining <= 300) el.classList.add('danger');
  else if (timeRemaining <= 900) el.classList.add('warning');
}

function renderQuestion() {
  const q = examQuestions[currentIndex];
  const isPBQ = q.type !== undefined;
  const container = document.getElementById('question-container');

  let html = `<div class="question-meta">`;
  if (isPBQ) {
    html += `<span class="badge badge-pbq">Performance-Based Question</span>`;
    html += `<span class="badge badge-domain-${getDomainClass(q.domain)}">${q.domain}</span>`;
  } else {
    html += `<span class="badge badge-domain-${getDomainClass(q.domain)}">${q.domain}</span>`;
    html += `<span class="badge" style="background:#e9ecef;color:#495057;">${q.topic}</span>`;
  }
  html += `</div>`;
  html += `<div class="question-number">Question ${currentIndex + 1} of ${examQuestions.length}</div>`;
  html += `<div class="scenario-text">${q.scenario}</div>`;

  if (isPBQ && q.data) {
    html += `<div class="pbq-data">${escapeHtml(q.data)}</div>`;
    if (q.question) html += `<div class="scenario-text" style="margin-top:16px;">${q.question}</div>`;
  }

  html += `<div class="options-list">`;
  const opts = q.options || [];
  opts.forEach((opt, idx) => {
    const letter = opt.charAt(0);
    const selected = answers[currentIndex] === letter;
    html += `<label class="option-label ${selected ? 'selected' : ''}" onclick="selectOption('${letter}')">`;
    html += `<input type="radio" name="q${currentIndex}" value="${letter}" ${selected ? 'checked' : ''}>`;
    html += `<span>${escapeHtml(opt)}</span>`;
    html += `</label>`;
  });
  html += `</div>`;

  container.innerHTML = html;
  updateProgress();
  updateGrid();
  updateNavButtons();
}

function getDomainClass(domain) {
  if (domain.includes('Security Operations')) return '1';
  if (domain.includes('Vulnerability')) return '2';
  if (domain.includes('Incident')) return '3';
  return '4';
}

function selectOption(letter) {
  answers[currentIndex] = letter;
  renderQuestion(); // re-render to show selection
}

function nextQuestion() {
  if (currentIndex < examQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function goToQuestion(idx) {
  currentIndex = idx;
  renderQuestion();
}

function toggleFlag() {
  if (flagged.has(currentIndex)) flagged.delete(currentIndex);
  else flagged.add(currentIndex);
  updateGrid();
  updateNavButtons();
}

function updateNavButtons() {
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const flagBtn = document.getElementById('btn-flag');
  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === examQuestions.length - 1 ? 'Finish Review' : 'Next →';
  flagBtn.textContent = flagged.has(currentIndex) ? '⚑ Unflag' : '⚐ Flag for Review';
  flagBtn.classList.toggle('flagged', flagged.has(currentIndex));
}

function updateProgress() {
  const pct = ((currentIndex + 1) / examQuestions.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${currentIndex + 1}/${examQuestions.length}`;
}

function updateGrid() {
  const grid = document.getElementById('question-grid');
  let html = '';
  for (let i = 0; i < examQuestions.length; i++) {
    const cls = [];
    if (answers[i]) cls.push('answered');
    if (flagged.has(i)) cls.push('flagged');
    if (i === currentIndex) cls.push('current');
    html += `<button class="grid-btn ${cls.join(' ')}" onclick="goToQuestion(${i})" title="Q${i+1}">${i+1}</button>`;
  }
  grid.innerHTML = html;
}

function showSubmitModal() {
  const answered = Object.keys(answers).length;
  const unans = examQuestions.length - answered;
  document.getElementById('modal-unanswered').textContent = unans;
  document.getElementById('submit-modal').classList.add('active');
}

function hideSubmitModal() {
  document.getElementById('submit-modal').classList.remove('active');
}

function submitExam(auto = false) {
  clearInterval(timerInterval);
  hideSubmitModal();
  document.getElementById('exam-screen').classList.add('hidden');
  document.getElementById('report-screen').classList.remove('hidden');
  generateReport();
}

function generateReport() {
  let correct = 0;
  const domainStats = {};
  const topicStats = {};
  const wrongItems = [];

  // Initialize domain stats
  Object.keys(DOMAINS).forEach(d => {
    domainStats[d] = { total: 0, correct: 0 };
  });

  examQuestions.forEach((q, idx) => {
    const domain = q.domain;
    const topic = q.topic || 'General';
    const userAns = answers[idx];
    const correctAns = q.correct;
    const isCorrect = userAns === correctAns;

    if (!domainStats[domain]) domainStats[domain] = { total: 0, correct: 0 };
    domainStats[domain].total++;
    if (isCorrect) {
      correct++;
      domainStats[domain].correct++;
    }

    if (!topicStats[topic]) topicStats[topic] = { total: 0, correct: 0 };
    topicStats[topic].total++;
    if (isCorrect) topicStats[topic].correct++;

    if (!isCorrect) {
      wrongItems.push({
        idx: idx + 1,
        domain: domain,
        topic: topic,
        scenario: q.scenario,
        userAns: userAns || 'No answer',
        correctAns: correctAns,
        explanation: q.explanation,
        isPBQ: q.type !== undefined
      });
    }
  });

  const total = examQuestions.length;
  const pct = Math.round((correct / total) * 100);
  const scaledScore = Math.round(100 + (correct / total) * 800);
  const passed = scaledScore >= 750;

  // Overall score display
  const scoreCircle = document.getElementById('score-circle');
  scoreCircle.classList.remove('pass', 'fail');
  scoreCircle.classList.add(passed ? 'pass' : 'fail');
  document.getElementById('score-value').textContent = scaledScore;
  document.getElementById('score-label').textContent = passed ? 'PASSED' : 'FAILED';
  document.getElementById('score-label').style.color = passed ? 'var(--success)' : 'var(--danger)';
  document.getElementById('raw-score').textContent = `${correct}/${total} correct (${pct}%)`;
  document.getElementById('passing-score').textContent = 'Passing score: 750/900';

  // Domain breakdown
  const domainGrid = document.getElementById('domain-breakdown');
  let domainHtml = '';
  Object.keys(DOMAINS).forEach(d => {
    const stat = domainStats[d] || { total: 0, correct: 0 };
    if (stat.total === 0) return;
    const dpct = Math.round((stat.correct / stat.total) * 100);
    const dpass = dpct >= 70; // approximate domain pass threshold
    domainHtml += `<div class="domain-card ${dpass ? 'pass' : 'fail'}">`;
    domainHtml += `<h4>${DOMAINS[d].label}</h4>`;
    domainHtml += `<div class="score" style="color:${dpass ? 'var(--success)' : 'var(--danger)'}">${dpct}%</div>`;
    domainHtml += `<div style="font-size:0.85rem;color:var(--gray);">${stat.correct}/${stat.total} correct</div>`;
    domainHtml += `</div>`;
  });
  domainGrid.innerHTML = domainHtml;

  // Weak areas (topics with < 60% correct, sorted worst first)
  const weakAreas = Object.entries(topicStats)
    .filter(([_, s]) => s.total >= 2) // need at least 2 questions for meaningful stat
    .map(([topic, s]) => ({ topic, pct: Math.round((s.correct / s.total) * 100), total: s.total, correct: s.correct }))
    .filter(a => a.pct < 70)
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 10);

  const weakList = document.getElementById('weak-areas-list');
  if (weakAreas.length === 0) {
    weakList.innerHTML = '<p style="color:var(--success);font-weight:600;">🎉 Great job! No major weak areas detected. Review any missed questions below.</p>';
  } else {
    let whtml = '<ul class="area-list">';
    weakAreas.forEach(a => {
      whtml += `<li><span>${escapeHtml(a.topic)}</span><span class="pct">${a.pct}% (${a.correct}/${a.total})</span></li>`;
    });
    whtml += '</ul>';
    whtml += '<p style="margin-top:12px;color:#856404;"><strong>Study Recommendation:</strong> Focus your review on the topics above. Use the Dion Training Course Notes and the CompTIA CySA+ Exam Objectives to strengthen these areas.</p>';
    weakList.innerHTML = whtml;
  }

  // Wrong answers review
  const reviewContainer = document.getElementById('review-container');
  if (wrongItems.length === 0) {
    reviewContainer.innerHTML = '<div class="text-center" style="padding:40px;"><h2 style="color:var(--success);">Perfect Score! 🎉</h2><p>You answered every question correctly. You are well-prepared for the CySA+ exam!</p></div>';
  } else {
    let rhtml = `<h3>Review: ${wrongItems.length} Questions to Improve (${Math.round((wrongItems.length/total)*100)}% of exam)</h3>`;
    wrongItems.forEach(item => {
      rhtml += `<div class="review-item">`;
      rhtml += `<div class="q-num">Question ${item.idx}${item.isPBQ ? ' (PBQ)' : ''} — ${item.domain}</div>`;
      rhtml += `<div style="margin:8px 0;"><strong>Scenario:</strong> ${escapeHtml(item.scenario.substring(0, 180))}${item.scenario.length > 180 ? '...' : ''}</div>`;
      rhtml += `<div>Your answer: <span class="your-ans">${item.userAns}</span> &nbsp;|&nbsp; Correct: <span class="correct-ans">${item.correctAns}</span></div>`;
      rhtml += `<div class="explanation"><strong>Why this is correct:</strong> ${escapeHtml(item.explanation)}</div>`;
      rhtml += `<span class="topic-tag">📚 Review: ${escapeHtml(item.topic)}</span>`;
      rhtml += `</div>`;
    });
    reviewContainer.innerHTML = rhtml;
  }

  // Performance summary text
  const summaryEl = document.getElementById('performance-summary');
  let summary = '';
  if (passed) {
    summary = `Congratulations! Your simulated score of ${scaledScore} meets the passing threshold of 750. `;
  } else {
    summary = `Your simulated score of ${scaledScore} is below the passing threshold of 750. `;
  }
  summary += `You answered ${correct} out of ${total} questions correctly. `;
  if (wrongItems.length > 0) {
    summary += `Focus your study on the ${wrongItems.length} missed questions below, especially in the weak areas identified above. `;
  }
  summary += `For the real exam, remember: read scenarios carefully, eliminate obviously wrong answers, and manage your time (≈2 minutes per question).`;
  summaryEl.textContent = summary;
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function restartExam() {
  document.getElementById('report-screen').classList.add('hidden');
  document.getElementById('start-screen').classList.remove('hidden');
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (!examStarted) return;
  if (e.key === 'ArrowRight') nextQuestion();
  if (e.key === 'ArrowLeft') prevQuestion();
  if (e.key >= 'a' && e.key <= 'd') selectOption(e.key.toUpperCase());
  if (e.key === 'f') toggleFlag();
});
