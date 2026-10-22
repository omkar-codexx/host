# QuizPoll Live - Realtime Polling & MCQ Dashboard

A complete serverless interactive Quiz & Polling Web Application built with HTML, CSS, JavaScript, and **Firebase Realtime Database (100% Free)**. Ready to host on **Netlify** with zero build steps!

---

## 🌟 Features

1. **Admin Dashboard**:
   - Create custom quizzes with MCQ questions and 4 choices.
   - Automatically marks the correct answer key.
   - Generates a shareable participant link (`?quizId=xxx&mode=participant`).

2. **Participant Portal**:
   - Asks user for their **Name / Nickname**.
   - Solves MCQ questions with clean UI, progress tracking, and instant answer verification.
   - On submission, calculates total correct answers & accuracy percentage with confetti animation 🎉.

3. **Live Polling Graph & Leaderboard**:
   - Automatically updates via **Firebase Realtime Database** (no page refresh required).
   - Dynamic Bar Chart showing who answered the most questions correctly.
   - Top scorers ranked 🥇 1st, 🥈 2nd, 🥉 3rd.

4. **100% Free Firebase & Netlify Hosting**:
   - Works immediately out-of-the-box in local demo mode.
   - Simply enter your Firebase Realtime DB URL in the "Firebase Settings" modal to go global.

---

## 🚀 How to Setup Firebase Realtime Database (Free)

1. Open [Firebase Console](https://console.firebase.google.com/) and click **Add Project**.
2. Go to **Build > Realtime Database** in the left sidebar and click **Create Database**.
3. Choose any location (e.g. `us-central1`), select **Start in test mode** (or rules with read/write true for your quiz competition).
4. Go to **Project Settings** (gear icon) > **Your Apps** > Click Web (`</>`).
5. Copy your `databaseURL` and `apiKey`.
6. In the QuizPoll Live website, click the **Firebase Settings** button in the header and paste your credentials!

---

## 🌐 How to Host on Netlify (100% Free)

### Method 1: Netlify Drop (Easiest - 10 Seconds)
1. Log in to [Netlify](https://app.netlify.com/).
2. Drag and drop this folder (`WEBSITE POLLING'`) onto the **Netlify Drop** area.
3. Your site is instantly live with a free `.netlify.app` URL!

### Method 2: Git Repository
1. Push this folder to GitHub.
2. Link the repository on Netlify.
3. Leave Build Command empty and Publish Directory as `./`.
