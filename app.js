/**
 * QUIZPOLL - REALTIME APPLICATION LOGIC
 * Clean & Professional White Theme Architecture
 */

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyAQ9iKssTJdHQNbU94LH1mvoId3rrzLUns",
  authDomain: "test-92c67.firebaseapp.com",
  projectId: "test-92c67",
  storageBucket: "test-92c67.firebasestorage.app",
  messagingSenderId: "42354195339",
  appId: "1:42354195339:web:601c4d70530099991dcd8e",
  databaseURL: "https://test-92c67-default-rtdb.firebaseio.com"
};

const DEFAULT_QUIZ = {
  id: "quiz_privacy_2024",
  title: "Digital Privacy & Data Protection Assessment (DPDPA)",
  createdAt: Date.now(),
  questions: [
    {
      id: "q1",
      question: "What are digital assets?",
      options: [
        "Digital files, photos, videos, and documents",
        "Only physical cash",
        "Only office furniture",
        "Only printed books"
      ],
      correctIndex: 0 // A
    },
    {
      id: "q2",
      question: "What is personal data?",
      options: [
        "Only public news",
        "Information that can identify a person",
        "Only computer hardware",
        "Only company profits"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q3",
      question: "Which is an organisation's digital asset?",
      options: [
        "Office chair",
        "Company database",
        "Office building",
        "Parking space"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q4",
      question: "What does permission mean in data privacy?",
      options: [
        "Deleting all files",
        "Giving approval for an activity",
        "Sharing passwords publicly",
        "Blocking internet access"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q5",
      question: "What is digital privacy?",
      options: [
        "Increasing internet speed",
        "Buying a computer",
        "Protecting personal information in digital environments",
        "Creating social media posts"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q6",
      question: "Which is an example of digital personal data?",
      options: [
        "A blank notebook",
        "A phone number stored digitally",
        "An empty chair",
        "A plain wall"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q7",
      question: "What is data protection?",
      options: [
        "Making data public",
        "Sharing every file",
        "Deleting all digital records",
        "Keeping data safe from misuse and unauthorised access"
      ],
      correctIndex: 3 // D
    },
    {
      id: "q8",
      question: "What does data privacy focus on?",
      options: [
        "How computers are manufactured",
        "How personal data is collected, used, and shared",
        "How websites are designed",
        "How fast a network works"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q9",
      question: "What is consent?",
      options: [
        "Buying a new device",
        "Creating a password",
        "Giving permission for a specific purpose",
        "Installing an application"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q10",
      question: "Who is a Data Principal?",
      options: [
        "The company's building owner",
        "A computer technician",
        "A website designer",
        "The person whose personal data is being processed"
      ],
      correctIndex: 3 // D
    },
    {
      id: "q11",
      question: "Who is a Data Fiduciary?",
      options: [
        "A person who only repairs computers",
        "A person or organisation that determines why and how personal data is processed",
        "A person who sells computer hardware",
        "A person who uses a public library"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q12",
      question: "Which information should be handled carefully?",
      options: [
        "A blank sheet of paper",
        "A public weather report",
        "Health information",
        "An empty folder"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q13",
      question: "What is a data breach?",
      options: [
        "A computer software update",
        "A routine file backup",
        "A new website design",
        "An incident involving unauthorised access to or disclosure of data"
      ],
      correctIndex: 3 // D
    },
    {
      id: "q14",
      question: "What is online identity?",
      options: [
        "A computer's screen size",
        "Information representing a person on the internet",
        "An internet cable",
        "A printer model"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q15",
      question: "What does a privacy policy explain?",
      options: [
        "How to repair a keyboard",
        "How to install a printer",
        "How an organisation handles personal information",
        "How to increase screen brightness"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q16",
      question: "Why is personal data protection important?",
      options: [
        "To share passwords with everyone",
        "To publish private information",
        "To remove all security controls",
        "To reduce misuse and protect people's privacy"
      ],
      correctIndex: 3 // D
    },
    {
      id: "q17",
      question: "What is data sharing?",
      options: [
        "Turning off a computer",
        "Providing data to another person or organisation",
        "Printing a blank page",
        "Changing a screen background"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q18",
      question: "What does withdrawing consent mean?",
      options: [
        "Creating a new account",
        "Sharing data publicly",
        "Taking back previously given permission",
        "Changing a computer's password"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q19",
      question: "What is the main purpose of the DPDPA Act, 2023?",
      options: [
        "To regulate vehicle traffic",
        "To control computer prices",
        "To manage school examinations",
        "To regulate digital personal data processing and protect individuals' data"
      ],
      correctIndex: 3 // D
    },
    {
      id: "q20",
      question: "Why should organisations protect users' personal data?",
      options: [
        "To make all data publicly available",
        "To respect privacy and reduce the risk of data misuse",
        "To share every user's password",
        "To avoid maintaining security"
      ],
      correctIndex: 1 // B
    }
  ],
  participants: {} // Fresh empty participants
};

let appState = {
  activeQuiz: null,
  activeQuizId: "quiz_privacy_2024",
  isFirebaseActive: false,
  firebaseDb: null,
  participant: {
    name: "",
    currentIndex: 0,
    answers: {}
  }
};

let pollingChartInstance = null;

// ==========================================
// INITIALIZATION (Instant load & route check)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Immediately determine if participant mode or admin mode BEFORE network calls
  checkRouteMode();
  
  // 2. Connect Firebase & listeners in parallel
  initFirebase();
  setupEventListeners();
});

function checkRouteMode() {
  const urlParams = new URLSearchParams(window.location.search);
  const quizIdParam = urlParams.get("quizId");
  const isParticipant = urlParams.get("mode") === "participant" || (quizIdParam && window.location.search.includes("mode=participant"));

  if (quizIdParam) {
    appState.activeQuizId = quizIdParam;
  }

  // Check local cache first for 0 millisecond instant rendering
  const localCache = localStorage.getItem(`quizpoll_${appState.activeQuizId}`);
  if (localCache) {
    try {
      const parsed = JSON.parse(localCache);
      if (parsed && parsed.questions && parsed.questions.length === 20 && parsed.questions[7].correctIndex !== 0) {
        appState.activeQuiz = parsed;
      } else {
        appState.activeQuiz = { ...DEFAULT_QUIZ, id: appState.activeQuizId };
        localStorage.setItem(`quizpoll_${appState.activeQuizId}`, JSON.stringify(appState.activeQuiz));
      }
    } catch (e) {
      appState.activeQuiz = { ...DEFAULT_QUIZ, id: appState.activeQuizId };
    }
  } else {
    appState.activeQuiz = { ...DEFAULT_QUIZ, id: appState.activeQuizId };
  }

  // Switch view INSTANTLY without flashing or waiting
  if (isParticipant) {
    showParticipantPortal();
  } else {
    showAdminDashboard();
  }

  // Load latest live sync in background
  loadQuizData(appState.activeQuizId);
}

// ==========================================
// FIREBASE REALTIME DATABASE SYNC
// ==========================================
function initFirebase() {
  const statusEl = document.getElementById("connectionStatus");
  let config = DEFAULT_FIREBASE_CONFIG;

  const savedConfig = localStorage.getItem("quizpoll_firebase_config");
  if (savedConfig) {
    try {
      const parsed = JSON.parse(savedConfig);
      // Only use if it points to current test-92c67 project, else discard old project
      if (parsed.projectId === "test-92c67") {
        config = parsed;
      } else {
        localStorage.removeItem("quizpoll_firebase_config");
      }
    } catch (e) {
      config = DEFAULT_FIREBASE_CONFIG;
    }
  }

  if (config && config.databaseURL) {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      appState.firebaseDb = firebase.database();
      appState.isFirebaseActive = true;

      statusEl.className = "status-indicator status-online";
      statusEl.innerHTML = '<span class="status-dot"></span><span class="status-label">Online</span>';
      return;
    } catch (e) {
      console.warn("Firebase Init Error:", e);
    }
  }

  appState.isFirebaseActive = false;
  statusEl.className = "status-indicator status-offline";
  statusEl.innerHTML = '<span class="status-dot"></span><span class="status-label">Local</span>';
}

function loadQuizData(quizId, callback) {
  if (appState.isFirebaseActive && appState.firebaseDb) {
    const quizRef = appState.firebaseDb.ref(`quizzes/${quizId}`);
    quizRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data && data.questions && data.questions.length === 20 && data.questions[7].correctIndex !== 0) {
        appState.activeQuiz = data;
        localStorage.setItem(`quizpoll_${quizId}`, JSON.stringify(data)); // Save locally
      } else {
        // If data is missing or has the old un-shuffled all-A version, update with new DEFAULT_QUIZ
        appState.activeQuiz = { ...DEFAULT_QUIZ, id: quizId, participants: (data && data.participants) || {} };
        localStorage.setItem(`quizpoll_${quizId}`, JSON.stringify(appState.activeQuiz));
        quizRef.set(appState.activeQuiz).catch(() => {});
      }
      // Update dashboard if host is viewing dashboard
      const adminView = document.getElementById("adminView");
      if (adminView && adminView.classList.contains("active-view")) {
        renderAdminDashboard();
      }

      // Update participant view if participant is viewing
      const participantView = document.getElementById("participantView");
      if (participantView && !participantView.classList.contains("hidden")) {
        const participantTitle = document.getElementById("participantQuizTitle");
        if (participantTitle && appState.activeQuiz) {
          participantTitle.textContent = appState.activeQuiz.title;
        }
        // If questions step is active, update the question UI in real-time
        const stepQ = document.getElementById("participantStepQuestions");
        if (stepQ && !stepQ.classList.contains("hidden")) {
          renderCurrentQuestion();
        }
      }
      if (callback) callback();
    });
  } else {
    const localStoreKey = `quizpoll_${quizId}`;
    const stored = localStorage.getItem(localStoreKey);
    if (stored) {
      appState.activeQuiz = JSON.parse(stored);
    } else {
      appState.activeQuiz = { ...DEFAULT_QUIZ, id: quizId };
      localStorage.setItem(localStoreKey, JSON.stringify(appState.activeQuiz));
    }
    const adminView = document.getElementById("adminView");
    if (adminView && adminView.classList.contains("active-view")) {
      renderAdminDashboard();
    }
    if (callback) callback();
  }
}

function saveQuizToDatabase(quizData, callback) {
  // Always save locally first so user never gets blocked
  localStorage.setItem(`quizpoll_${quizData.id}`, JSON.stringify(quizData));

  if (appState.isFirebaseActive && appState.firebaseDb) {
    appState.firebaseDb.ref(`quizzes/${quizData.id}`).set(quizData)
      .then(() => {
        if (callback) callback();
      })
      .catch((err) => {
        console.warn("Firebase save warning:", err);
        // Still proceed with local storage copy so new quiz works without blocking
        if (callback) callback();
      });
  } else {
    if (callback) callback();
  }
}

function submitParticipantScore(quizId, participantResult, callback) {
  // Always update local copy first
  if (!appState.activeQuiz.participants) {
    appState.activeQuiz.participants = {};
  }
  const pid = "user_" + Date.now();
  appState.activeQuiz.participants[pid] = participantResult;
  localStorage.setItem(`quizpoll_${quizId}`, JSON.stringify(appState.activeQuiz));

  // Sync to Firebase Realtime Database
  if (appState.isFirebaseActive && appState.firebaseDb) {
    const newRef = appState.firebaseDb.ref(`quizzes/${quizId}/participants`).push();
    newRef.set(participantResult)
      .then(() => {
        if (callback) callback();
      })
      .catch((err) => {
        console.warn("Firebase submit sync:", err);
        if (callback) callback();
      });
  } else {
    if (callback) callback();
  }

  // Update dashboard if host is on dashboard
  const adminView = document.getElementById("adminView");
  if (adminView && adminView.classList.contains("active-view")) {
    renderAdminDashboard();
  }
}

// ==========================================
// VIEW SWITCHING
// ==========================================
function showAdminDashboard() {
  document.getElementById("adminView").classList.add("active-view");
  document.getElementById("adminView").classList.remove("hidden");
  document.getElementById("participantView").classList.add("hidden");

  const headerActions = document.querySelector(".header-actions");
  if (headerActions) headerActions.classList.remove("hidden");

  renderAdminDashboard();
}

function showParticipantPortal() {
  document.getElementById("adminView").classList.remove("active-view");
  document.getElementById("adminView").classList.add("hidden");
  document.getElementById("participantView").classList.remove("hidden");

  // Keep header clean for participants
  const headerActions = document.querySelector(".header-actions");
  if (headerActions) headerActions.classList.add("hidden");

  document.getElementById("participantStepJoin").classList.remove("hidden");
  document.getElementById("participantStepQuestions").classList.add("hidden");
  document.getElementById("participantStepResult").classList.add("hidden");

  if (appState.activeQuiz) {
    document.getElementById("participantQuizTitle").textContent = appState.activeQuiz.title;
  }
}

// ==========================================
// ADMIN DASHBOARD RENDERING
// ==========================================
function renderAdminDashboard() {
  const quiz = appState.activeQuiz;
  if (!quiz) return;

  document.getElementById("statQuizTitle").textContent = quiz.title;
  document.getElementById("statTotalQuestions").textContent = (quiz.questions || []).length;

  const participantsList = Object.values(quiz.participants || {});
  document.getElementById("statParticipantsCount").textContent = participantsList.length;

  if (participantsList.length > 0) {
    const sorted = [...participantsList].sort((a, b) => b.score - a.score);
    const top = sorted[0];
    document.getElementById("statTopScorer").textContent = `${top.name} (${top.score}/${top.total})`;
  } else {
    document.getElementById("statTopScorer").textContent = "None yet";
  }

  // Invite Link
  const baseUri = window.location.origin + window.location.pathname;
  const shareUrl = `${baseUri}?quizId=${quiz.id}&mode=participant`;
  document.getElementById("shareLinkDisplay").value = shareUrl;

  renderQuestionsList(quiz.questions || []);
  updatePollingChart(participantsList);
  updateLeaderboardList(participantsList);
}

function renderQuestionsList(questions) {
  const container = document.getElementById("questionsContainer");
  if (!container) return;

  if (questions.length === 0) {
    container.innerHTML = '<div class="empty-state-text">No questions configured. Click "+ Add Question" to create one.</div>';
    return;
  }

  container.innerHTML = questions.map((q, idx) => `
    <div class="q-preview-card">
      <div class="q-preview-title">${idx + 1}. ${escapeHtml(q.question)}</div>
      <div class="q-preview-options">
        ${q.options.map((opt, oIdx) => `
          <div class="q-preview-opt ${oIdx === q.correctIndex ? 'correct' : ''}">
            ${oIdx === q.correctIndex ? 'Correct: ' : ''}${String.fromCharCode(65 + oIdx)}. ${escapeHtml(opt)}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ==========================================
// CLEAN CHART.JS (Clean light theme palette)
// ==========================================
function updatePollingChart(participants) {
  const ctx = document.getElementById("pollingChart");
  const emptyState = document.getElementById("chartEmptyState");
  if (!ctx) return;

  if (participants.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
    if (pollingChartInstance) {
      pollingChartInstance.destroy();
      pollingChartInstance = null;
    }
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  const sorted = [...participants].sort((a, b) => b.score - a.score);
  const labels = sorted.map(p => p.name);
  const scores = sorted.map(p => p.score);
  const maxScore = appState.activeQuiz.questions ? appState.activeQuiz.questions.length : 5;

  const bgColors = sorted.map((_, i) => i === 0 ? '#2563eb' : '#93c5fd');

  if (pollingChartInstance) {
    pollingChartInstance.data.labels = labels;
    pollingChartInstance.data.datasets[0].data = scores;
    pollingChartInstance.data.datasets[0].backgroundColor = bgColors;
    pollingChartInstance.options.scales.y.max = maxScore;
    pollingChartInstance.update();
  } else {
    pollingChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Correct Answers",
          data: scores,
          backgroundColor: bgColors,
          borderRadius: 6,
          barPercentage: 0.55
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0f172a',
            titleFont: { family: 'Inter', size: 13, weight: '600' },
            bodyFont: { family: 'Inter', size: 12 },
            padding: 10,
            cornerRadius: 6,
            callbacks: {
              label: function(c) {
                const p = sorted[c.dataIndex];
                if (!p) return ` Score: ${c.raw}`;
                const total = p.total || (appState.activeQuiz && appState.activeQuiz.questions ? appState.activeQuiz.questions.length : 0);
                const acc = p.accuracy !== undefined ? p.accuracy : (total > 0 ? Math.round((c.raw / total) * 100) : 0);
                return ` Score: ${c.raw} / ${total} (${acc}%)`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: "#64748b",
              font: { family: 'Inter', weight: '500' }
            }
          },
          y: {
            beginAtZero: true,
            max: maxScore,
            ticks: {
              stepSize: 1,
              color: "#64748b",
              font: { family: 'Inter' }
            },
            grid: { color: "#f1f5f9" }
          }
        }
      }
    });
  }
}

function updateLeaderboardList(participants) {
  const container = document.getElementById("leaderboardList");
  if (!container) return;

  if (participants.length === 0) {
    container.innerHTML = '<div class="empty-state-text">No responses yet.</div>';
    return;
  }

  const sorted = [...participants].sort((a, b) => b.score - a.score);

  container.innerHTML = sorted.map((p, idx) => `
    <div class="lb-row rank-${idx + 1}">
      <div style="display:flex; align-items:center;">
        <span class="lb-rank-num">${idx + 1}</span>
        <span class="lb-user-name">${escapeHtml(p.name)}</span>
      </div>
      <span class="lb-score-tag">${p.score}/${p.total} (${p.accuracy}%)</span>
    </div>
  `).join('');
}

// ==========================================
// PARTICIPANT FLOW (Mobile First)
// ==========================================
function startParticipantQuiz(name) {
  isSubmitting = false;
  appState.participant = {
    name: name,
    currentIndex: 0,
    answers: {}
  };

  document.getElementById("displayParticipantName").textContent = name;
  document.getElementById("participantStepJoin").classList.add("hidden");
  document.getElementById("participantStepQuestions").classList.remove("hidden");

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const quiz = appState.activeQuiz;
  if (!quiz || !quiz.questions) return;

  const total = quiz.questions.length;
  const current = appState.participant.currentIndex;
  const qData = quiz.questions[current];

  document.getElementById("questionProgressPill").textContent = `Question ${current + 1} of ${total}`;
  const pct = ((current + 1) / total) * 100;
  document.getElementById("quizProgressBar").style.width = `${pct}%`;

  const container = document.getElementById("activeQuestionCard");
  const selectedOpt = appState.participant.answers[current];

  container.innerHTML = `
    <h2 class="q-title-clean">${current + 1}. ${escapeHtml(qData.question)}</h2>
    <div class="mcq-clean-list">
      ${qData.options.map((opt, optIdx) => `
        <button type="button" class="mcq-clean-option ${selectedOpt === optIdx ? 'selected' : ''}" data-opt-idx="${optIdx}">
          <span class="opt-letter">${String.fromCharCode(65 + optIdx)}</span>
          <span>${escapeHtml(opt)}</span>
        </button>
      `).join('')}
    </div>
  `;

  container.querySelectorAll(".mcq-clean-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const optIdx = parseInt(btn.getAttribute("data-opt-idx"), 10);
      appState.participant.answers[current] = optIdx;
      renderCurrentQuestion();
    });
  });

  const btnPrev = document.getElementById("btnPrevQuestion");
  const btnNext = document.getElementById("btnNextQuestion");
  const btnSubmit = document.getElementById("btnSubmitQuiz");
  const btnSkip = document.getElementById("btnSkipQuestion");

  btnPrev.disabled = current === 0;

  // Handle Skip button visibility
  if (btnSkip) {
    if (selectedOpt !== undefined && selectedOpt !== null) {
      btnSkip.classList.add("hidden"); // Answer already selected
    } else {
      btnSkip.classList.remove("hidden");
    }
  }

  if (current === total - 1) {
    btnNext.classList.add("hidden");
    btnSubmit.classList.remove("hidden");
  } else {
    btnNext.classList.remove("hidden");
    btnSubmit.classList.add("hidden");
  }
}

let isSubmitting = false;

function submitAnswersAndShowResult() {
  if (isSubmitting) return; // Prevent double/multiple submissions
  isSubmitting = true;

  const btnSubmit = document.getElementById("btnSubmitQuiz");
  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Submitting...";
  }

  const quiz = appState.activeQuiz;
  if (!quiz || !quiz.questions) return;

  const total = quiz.questions.length;
  let correctCount = 0;

  quiz.questions.forEach((q, idx) => {
    if (appState.participant.answers[idx] === q.correctIndex) {
      correctCount++;
    }
  });

  const accuracy = Math.round((correctCount / total) * 100);

  const participantData = {
    name: appState.participant.name,
    score: correctCount,
    total: total,
    accuracy: accuracy,
    timestamp: Date.now()
  };

  // 1. INSTANT ZERO-LAG UI TRANSITION (Don't make participant wait!)
  document.getElementById("participantStepQuestions").classList.add("hidden");
  document.getElementById("participantStepResult").classList.remove("hidden");

  document.getElementById("resultNickname").textContent = appState.participant.name;
  document.getElementById("resultScore").textContent = `${correctCount} / ${total}`;
  document.getElementById("resultAccuracy").textContent = `Accuracy: ${accuracy}%`;

  let feedbackMsg = "Your response has been submitted to the host.";
  if (accuracy === 100) feedbackMsg = "Excellent! You answered all questions correctly.";
  else if (accuracy >= 70) feedbackMsg = "Great job! High score achieved.";

  document.getElementById("resultFeedback").textContent = feedbackMsg;

  // 2. Background sync to Firebase
  submitParticipantScore(quiz.id, participantData);
}

// ==========================================
// MODAL BUILDER & EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  document.getElementById("formJoinQuiz").addEventListener("submit", (e) => {
    e.preventDefault();
    const nickname = document.getElementById("inputNickname").value.trim();
    if (nickname) startParticipantQuiz(nickname);
  });

  document.getElementById("btnPrevQuestion").addEventListener("click", () => {
    if (appState.participant.currentIndex > 0) {
      appState.participant.currentIndex--;
      renderCurrentQuestion();
    }
  });

  // Skip Question Handler
  const btnSkip = document.getElementById("btnSkipQuestion");
  if (btnSkip) {
    btnSkip.addEventListener("click", () => {
      const current = appState.participant.currentIndex;
      const total = appState.activeQuiz.questions.length;
      
      // Explicitly mark as skipped (-1) if not selected
      if (appState.participant.answers[current] === undefined) {
        appState.participant.answers[current] = -1;
      }

      if (current < total - 1) {
        appState.participant.currentIndex++;
        renderCurrentQuestion();
      } else {
        submitAnswersAndShowResult();
      }
    });
  }

  // Next Question with Mandatory Selection Check
  document.getElementById("btnNextQuestion").addEventListener("click", () => {
    const current = appState.participant.currentIndex;
    const selected = appState.participant.answers[current];

    // If neither selected nor skipped, restrict advancing
    if (selected === undefined || selected === null) {
      showToast("Please select an answer or click Skip to proceed.");
      return;
    }

    const total = appState.activeQuiz.questions.length;
    if (current < total - 1) {
      appState.participant.currentIndex++;
      renderCurrentQuestion();
    }
  });

  // Submit with Mandatory Selection Check
  document.getElementById("btnSubmitQuiz").addEventListener("click", () => {
    const current = appState.participant.currentIndex;
    const selected = appState.participant.answers[current];

    if (selected === undefined || selected === null) {
      showToast("Please select an answer or click Skip before submitting.");
      return;
    }

    submitAnswersAndShowResult();
  });

  document.getElementById("btnOpenParticipantView").addEventListener("click", () => {
    showParticipantPortal();
  });

  document.getElementById("btnCopyLink").addEventListener("click", () => {
    const input = document.getElementById("shareLinkDisplay");
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value).then(() => {
      showToast("Link copied to clipboard");
    }).catch(() => {
      showToast("Copy failed, please copy manually");
    });
  });

  document.getElementById("btnAddQuestionInline").addEventListener("click", () => {
    openCreateQuizModal();
  });

  // Clear current dashboard data button
  const btnClear = document.getElementById("btnClearCurrentData");
  if (btnClear) {
    btnClear.addEventListener("click", () => {
      const ok = confirm("⚠️ Are you sure you want to clear all participant responses from this dashboard? This cannot be undone.");
      if (!ok) return;

      if (!appState.activeQuiz) return;
      appState.activeQuiz.participants = {};

      if (appState.isFirebaseActive && appState.firebaseDb) {
        appState.firebaseDb.ref(`quizzes/${appState.activeQuiz.id}/participants`).remove()
          .then(() => {
            showToast("Dashboard data cleared successfully.");
            renderAdminDashboard();
          })
          .catch((err) => {
            showToast("Failed to clear data: " + err.message);
          });
      } else {
        localStorage.setItem(`quizpoll_${appState.activeQuiz.id}`, JSON.stringify(appState.activeQuiz));
        showToast("Dashboard data cleared.");
        renderAdminDashboard();
      }
    });
  }

  // Modal Create Quiz
  const modalCreate = document.getElementById("modalCreateQuiz");
  document.getElementById("btnNewQuizModal").addEventListener("click", openCreateQuizModal);
  document.getElementById("btnCloseCreateQuiz").addEventListener("click", () => modalCreate.classList.add("hidden"));
  document.getElementById("btnCancelCreateQuiz").addEventListener("click", () => modalCreate.classList.add("hidden"));

  document.getElementById("btnAddQuestionBuilder").addEventListener("click", () => {
    addBuilderQuestionCard();
  });

  document.getElementById("formCreateQuiz").addEventListener("submit", (e) => {
    e.preventDefault();
    handleSaveNewQuiz();
  });

  // Modal Firebase
  const modalConfig = document.getElementById("modalFirebaseConfig");
  document.getElementById("btnConfigModal").addEventListener("click", () => {
    modalConfig.classList.remove("hidden");
  });
  document.getElementById("btnCloseConfigModal").addEventListener("click", () => {
    modalConfig.classList.add("hidden");
  });

  document.getElementById("btnResetToDemo").addEventListener("click", () => {
    localStorage.removeItem("quizpoll_firebase_config");
    modalConfig.classList.add("hidden");
    initFirebase();
    showToast("Reverted to default settings");
  });

  document.getElementById("formFirebaseConfig").addEventListener("submit", (e) => {
    e.preventDefault();
    const apiKey = document.getElementById("cfgApiKey").value.trim();
    const databaseURL = document.getElementById("cfgDatabaseURL").value.trim();
    const projectId = document.getElementById("cfgProjectId").value.trim();

    const cfg = { apiKey, databaseURL, projectId };
    localStorage.setItem("quizpoll_firebase_config", JSON.stringify(cfg));
    modalConfig.classList.add("hidden");

    initFirebase();
    saveQuizToDatabase(appState.activeQuiz, () => {
      showToast("Database connected successfully");
      loadQuizData(appState.activeQuiz.id);
    });
  });
}

function openCreateQuizModal() {
  const modal = document.getElementById("modalCreateQuiz");
  const list = document.getElementById("builderQuestionsList");
  list.innerHTML = "";

  addBuilderQuestionCard("Which protocol is standard for secure web communication?", ["HTTP", "FTP", "HTTPS", "SMTP"], 2);
  addBuilderQuestionCard("What does CSS stand for?", ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheet"], 0);

  document.getElementById("newQuizTitle").value = "Assessment " + new Date().toLocaleDateString();
  modal.classList.remove("hidden");
}

function addBuilderQuestionCard(defaultQ = "", defaultOpts = ["", "", "", ""], defaultCorrect = 0) {
  const list = document.getElementById("builderQuestionsList");
  const qNum = list.children.length + 1;
  const qId = "q_b_" + Date.now() + "_" + qNum;

  const card = document.createElement("div");
  card.className = "builder-q-card";
  card.innerHTML = `
    <div class="builder-q-top">
      <span class="builder-q-badge">Question ${qNum}</span>
      <button type="button" class="builder-del-btn">Remove</button>
    </div>
    <div class="form-group" style="margin-bottom:0.5rem;">
      <input type="text" class="form-input q-input-text" placeholder="Enter question text" value="${escapeHtml(defaultQ)}" required>
    </div>
    <div class="builder-opts-grid">
      ${[0, 1, 2, 3].map(i => `
        <div class="builder-opt-row">
          <input type="radio" name="correct_${qId}" value="${i}" ${i === defaultCorrect ? 'checked' : ''} title="Mark as correct">
          <input type="text" class="q-opt-text" placeholder="Option ${String.fromCharCode(65 + i)}" value="${escapeHtml(defaultOpts[i] || '')}" required>
        </div>
      `).join('')}
    </div>
  `;

  card.querySelector(".builder-del-btn").addEventListener("click", () => {
    card.remove();
    list.querySelectorAll(".builder-q-card").forEach((c, idx) => {
      c.querySelector(".builder-q-badge").textContent = `Question ${idx + 1}`;
    });
  });

  list.appendChild(card);
}

function handleSaveNewQuiz() {
  const title = document.getElementById("newQuizTitle").value.trim();
  const list = document.getElementById("builderQuestionsList");
  const cards = list.querySelectorAll(".builder-q-card");

  if (cards.length === 0) {
    alert("Please add at least 1 question.");
    return;
  }

  const questions = [];
  cards.forEach((card, idx) => {
    const qText = card.querySelector(".q-input-text").value.trim();
    const optInputs = card.querySelectorAll(".q-opt-text");
    const options = Array.from(optInputs).map(inp => inp.value.trim());
    const checkedRadio = card.querySelector('input[type="radio"]:checked');
    const correctIndex = checkedRadio ? parseInt(checkedRadio.value, 10) : 0;

    questions.push({
      id: "q_" + (idx + 1),
      question: qText,
      options: options,
      correctIndex: correctIndex
    });
  });

  const newQuizId = "quiz_" + Math.random().toString(36).substring(2, 9);
  const newQuiz = {
    id: newQuizId,
    title: title,
    createdAt: Date.now(),
    questions: questions,
    participants: {} // Completely empty participants
  };

  // Turn off previous Firebase listener if active to avoid mixing
  if (appState.isFirebaseActive && appState.firebaseDb && appState.activeQuizId) {
    appState.firebaseDb.ref(`quizzes/${appState.activeQuizId}`).off();
  }

  saveQuizToDatabase(newQuiz, () => {
    appState.activeQuizId = newQuizId;
    appState.activeQuiz = newQuiz;

    // Reset chart instance immediately
    if (pollingChartInstance) {
      pollingChartInstance.destroy();
      pollingChartInstance = null;
    }

    // Clean URL navigation to the new quiz
    const url = new URL(window.location);
    url.searchParams.set("quizId", newQuizId);
    url.searchParams.delete("mode");
    window.history.pushState({}, "", url);

    document.getElementById("modalCreateQuiz").classList.add("hidden");
    showToast("New quiz generated successfully!");

    // Start listening to the new quiz path and render fresh empty dashboard
    loadQuizData(newQuizId, () => {
      renderAdminDashboard();
    });
  });
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-clean";
  toast.textContent = message;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

function escapeHtml(str) {
  if (!str) return "";
  return str.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
