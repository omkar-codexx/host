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
  id: "quiz_dpdpa_assessment_2024",
  title: "DPDPA & Data Privacy Assessment",
  createdAt: Date.now(),
  questions: [
    {
      id: "q1",
      question: "Which of the following is an example of personal data?",
      options: [
        "A company's annual profit",
        "A person's email address",
        "A software version number",
        "A public holiday date"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q2",
      question: "An organisation collects customer phone numbers. What should it generally do?",
      options: [
        "Share them with all employees",
        "Keep them forever",
        "Use them for a specified purpose",
        "Publish them online"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q3",
      question: "Who is called a Data Principal under the DPDPA?",
      options: [
        "The individual to whom personal data relates",
        "The company storing the data",
        "The software developer",
        "The government database operator"
      ],
      correctIndex: 0 // A
    },
    {
      id: "q4",
      question: "What does valid consent generally require?",
      options: [
        "A person's silence",
        "Permission obtained through misleading information",
        "Automatic approval for every future use",
        "A clear, informed and voluntary choice"
      ],
      correctIndex: 3 // D
    },
    {
      id: "q5",
      question: "Which situation may indicate a data breach?",
      options: [
        "An employee updates a report",
        "Customer records are accessed without authorisation",
        "A company deletes duplicate files",
        "A user changes a password"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q6",
      question: "What is the main role of a Data Fiduciary?",
      options: [
        "To decide why and how personal data is processed",
        "To own every user's identity",
        "To prevent users from accessing websites",
        "To issue government identity cards"
      ],
      correctIndex: 0 // A
    },
    {
      id: "q7",
      question: "A website asks for your date of birth to provide a service. What should you check?",
      options: [
        "Whether the website has colourful graphics",
        "Whether the website has many advertisements",
        "Why the information is needed and how it will be used",
        "Whether the website uses large fonts"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q8",
      question: "Which of the following is an example of a digital asset?",
      options: [
        "A paper notebook kept offline",
        "A physical chair",
        "A printed newspaper",
        "A company database stored digitally"
      ],
      correctIndex: 3 // D
    },
    {
      id: "q9",
      question: "What does data minimisation mean in practice?",
      options: [
        "Collecting only the data needed for a purpose",
        "Collecting all available user information",
        "Sharing data with more departments",
        "Keeping multiple copies of every record"
      ],
      correctIndex: 0 // A
    },
    {
      id: "q10",
      question: "A user withdraws consent for a particular data-processing activity. What does this mean?",
      options: [
        "The user must close their account",
        "The user has taken back previously given permission",
        "The organisation can ignore the request",
        "All internet access must stop"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q11",
      question: "Which action is most likely to help protect an online account?",
      options: [
        "Using the same password everywhere",
        "Sharing passwords with colleagues",
        "Using a strong, unique password and multi-factor authentication",
        "Turning off all security alerts"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q12",
      question: "What is the purpose of a privacy policy?",
      options: [
        "To explain how an organisation handles personal data",
        "To guarantee that no cyberattack can happen",
        "To provide free internet access",
        "To replace every security measure"
      ],
      correctIndex: 0 // A
    },
    {
      id: "q13",
      question: "An employee sends a customer file to the wrong external recipient. What is the main concern?",
      options: [
        "The file name may be too long",
        "The recipient may use a different computer",
        "The email may have a spelling mistake",
        "Personal data may have been disclosed to an unauthorised person"
      ],
      correctIndex: 3 // D
    },
    {
      id: "q14",
      question: "Which statement about consent is most appropriate?",
      options: [
        "Consent can never be withdrawn",
        "Consent should relate to a clear purpose",
        "Consent is always implied by visiting a website",
        "Consent allows unlimited use of data forever"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q15",
      question: "Why should an organisation limit access to personal data?",
      options: [
        "To make files harder to find for everyone",
        "To stop employees doing any work",
        "To ensure only authorised people can access it",
        "To allow all departments to copy it"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q16",
      question: "What is online identity mainly associated with?",
      options: [
        "Information and activity that represent a person online",
        "Only a person's physical appearance",
        "Only the model of their phone",
        "Only their internet connection speed"
      ],
      correctIndex: 0 // A
    },
    {
      id: "q17",
      question: "A company no longer needs personal data for its stated purpose. What should it consider?",
      options: [
        "Selling the data immediately",
        "Making the data public",
        "Copying it to every employee's device",
        "Deleting it when required, subject to applicable legal obligations"
      ],
      correctIndex: 3 // D
    },
    {
      id: "q18",
      question: "Which example best describes data sharing?",
      options: [
        "Changing a file's font",
        "Providing customer information to another organisation",
        "Renaming a folder",
        "Locking a computer screen"
      ],
      correctIndex: 1 // B
    },
    {
      id: "q19",
      question: "What is one important purpose of the DPDPA, 2023?",
      options: [
        "To remove the need for online security",
        "To make all personal data public",
        "To regulate digital personal data processing while protecting individuals' rights",
        "To prohibit every organisation from collecting data"
      ],
      correctIndex: 2 // C
    },
    {
      id: "q20",
      question: "An employee finds customer information on a public website that should not be public. What is the best first response?",
      options: [
        "Download and forward it to friends",
        "Ignore it because it is already online",
        "Post it on social media as proof",
        "Report it through the appropriate organisational security or privacy channel"
      ],
      correctIndex: 3 // D
    }
  ],
  participants: {}
};

let appState = {
  activeQuiz: null,
  activeQuizId: "quiz_dpdpa_assessment_2024",
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
  
  // 2. Connect Zero-Config Cloud Realtime Sync
  initRealtimeCloudSync();
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
// ==========================================
// ZERO-CONFIG REALTIME CLOUD STREAM (Zero Effort, 100% Free, No Rules/Login required)
// ==========================================
const CLOUD_SYNC_TOPIC = "quizpoll_omkar_live_assess_v2";

function initRealtimeCloudSync() {
  const statusEl = document.getElementById("connectionStatus");
  if (statusEl) {
    statusEl.className = "status-indicator status-online";
    statusEl.innerHTML = '<span class="status-dot"></span><span class="status-label">Cloud Live Sync</span>';
  }

  // Subscribe to live Server-Sent Events stream
  try {
    const eventSource = new EventSource(`https://ntfy.sh/${CLOUD_SYNC_TOPIC}/sse`);
    
    eventSource.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.event === "message" && payload.message) {
          const syncData = JSON.parse(payload.message);
          
          if (syncData.type === "participant_submission" && syncData.quizId === appState.activeQuizId) {
            if (!appState.activeQuiz.participants) {
              appState.activeQuiz.participants = {};
            }
            appState.activeQuiz.participants[syncData.pid] = syncData.data;
            localStorage.setItem(`quizpoll_${appState.activeQuizId}`, JSON.stringify(appState.activeQuiz));

            // Live update the dashboard without reload!
            const adminView = document.getElementById("adminView");
            if (adminView && adminView.classList.contains("active-view")) {
              renderAdminDashboard();
            }
          }
        }
      } catch (err) {
        // Ignore unformatted broadcast messages
      }
    };

    eventSource.onerror = () => {
      // Automatic browser reconnect
    };
  } catch (e) {
    console.warn("Realtime stream init:", e);
  }
}

function loadQuizData(quizId, callback) {
  const localStoreKey = `quizpoll_${quizId}`;
  const stored = localStorage.getItem(localStoreKey);
  
  if (stored) {
    try {
      appState.activeQuiz = JSON.parse(stored);
    } catch (e) {
      appState.activeQuiz = { ...DEFAULT_QUIZ, id: quizId };
    }
  } else {
    appState.activeQuiz = { ...DEFAULT_QUIZ, id: quizId };
    localStorage.setItem(localStoreKey, JSON.stringify(appState.activeQuiz));
  }

  const adminView = document.getElementById("adminView");
  if (adminView && adminView.classList.contains("active-view")) {
    renderAdminDashboard();
  }

  const participantTitle = document.getElementById("participantQuizTitle");
  if (participantTitle && appState.activeQuiz) {
    participantTitle.textContent = appState.activeQuiz.title;
  }

  if (callback) callback();
}

function saveQuizToDatabase(quizData, callback) {
  localStorage.setItem(`quizpoll_${quizData.id}`, JSON.stringify(quizData));
  if (callback) callback();
}

function submitParticipantScore(quizId, participantResult, callback) {
  if (!appState.activeQuiz.participants) {
    appState.activeQuiz.participants = {};
  }
  const pid = "user_" + Date.now();
  appState.activeQuiz.participants[pid] = participantResult;
  localStorage.setItem(`quizpoll_${quizId}`, JSON.stringify(appState.activeQuiz));

  // Instantly broadcast participant submission to host dashboard via public realtime cloud
  const broadcastMsg = JSON.stringify({
    type: "participant_submission",
    quizId: quizId,
    pid: pid,
    data: participantResult
  });

  fetch(`https://ntfy.sh/${CLOUD_SYNC_TOPIC}`, {
    method: "POST",
    body: broadcastMsg,
    headers: { "Content-Type": "text/plain" }
  }).catch(() => {
    // Network fallback
  });

  // Local dashboard instant update if on same device
  const adminView = document.getElementById("adminView");
  if (adminView && adminView.classList.contains("active-view")) {
    renderAdminDashboard();
  }
  if (callback) callback();
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

  // Modal Firebase (Guarded if element exists)
  const modalConfig = document.getElementById("modalFirebaseConfig");
  const btnConfig = document.getElementById("btnConfigModal");
  if (btnConfig && modalConfig) {
    btnConfig.addEventListener("click", () => {
      modalConfig.classList.remove("hidden");
    });
    document.getElementById("btnCloseConfigModal")?.addEventListener("click", () => {
      modalConfig.classList.add("hidden");
    });
  }
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
