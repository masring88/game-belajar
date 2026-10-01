// Bank data soal (bisa kamu tambah atau ubah sendiri)
const quizData = [
    { jawaban: "APPLE", acak: "P P L A E", arti: "Buah berwarna merah atau hijau" },
    { jawaban: "BOOK", acak: "O O B K", arti: "Sesuatu yang kamu baca" },
    { jawaban: "SCHOOL", acak: "O H C S L O", arti: "Tempat untuk belajar" },
    { jawaban: "CHAIR", acak: "I A C H R", arti: "Sesuatu yang digunakan untuk duduk" },
    { jawaban: "WATER", acak: "E T A R W", arti: "Benda cair yang kamu minum setiap hari" }
];

let currentQuestion = 0;
let score = 0;

// Mengambil elemen HTML berdasarkan ID
const scrambledWordEl = document.getElementById("scrambledWord");
const hintTextEl = document.getElementById("hintText");
const userInputEl = document.getElementById("userInput");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const questionNumEl = document.getElementById("questionNum");
const submitBtn = document.getElementById("submitBtn");

// Fungsi memuat soal
function loadQuiz() {
    if (currentQuestion < quizData.length) {
        // Reset input dan feedback
        userInputEl.value = "";
        feedbackEl.innerText = "";
        userInputEl.disabled = false;
        submitBtn.disabled = false;
        submitBtn.innerText = "Kirim Jawaban";

        // Tampilkan soal baru
        questionNumEl.innerText = currentQuestion + 1;
        scrambledWordEl.innerText = quizData[currentQuestion].acak;
        hintTextEl.innerText = "Petunjuk: " + quizData[currentQuestion].arti;
    } else {
        showFinalResult();
    }
}

// Fungsi memeriksa jawaban user
function checkAnswer() {
    const userAnswer = userInputEl.value.trim().toUpperCase();
    const correctAnswer = quizData[currentQuestion].jawaban;

    if (userAnswer === "") {
        feedbackEl.innerText = "Isi jawabanmu dulu ya!";
        feedbackEl.className = "feedback wrong";
        return;
    }

    if (userAnswer === correctAnswer) {
        feedbackEl.innerText = "✅ Hebat! Jawabanmu Benar!";
        feedbackEl.className = "feedback correct";
        score += 20; // Setiap soal bernilai 20 poin
        scoreEl.innerText = score;
    } else {
        feedbackEl.innerText = `❌ Salah! Yang benar adalah: ${correctAnswer}`;
        feedbackEl.className = "feedback wrong";
    }

    // Mengunci input dan mengubah fungsi tombol menjadi "Lanjut"
    userInputEl.disabled = true;
    submitBtn.innerText = "Lanjut";
    submitBtn.onclick = nextQuestion;
}

// Fungsi beralih ke soal berikutnya
function nextQuestion() {
    currentQuestion++;
    submitBtn.onclick = checkAnswer; // Mengembalikan fungsi tombol untuk cek jawaban
    loadQuiz();
}

// Fungsi menampilkan layar akhir game
function showFinalResult() {
    let ucapan = "";
    if (score === 100) {
        ucapan = "Sempurna! Kamu luar biasa! 🌟";
    } else if (score >= 60) {
        ucapan = "Bagus sekali! Tingkatkan lagi! 👍";
    } else {
        ucapan = "Jangan menyerah, ayo belajar lagi! 💪";
    }

    // Mengganti struktur HTML di dalam container gameBox
    document.getElementById("gameBox").innerHTML = `
        <h1>🎉 GAME SELESAI 🎉</h1>
        <div class="final-title">
            Skor Akhir Kamu:<br>
            <strong class="final-score">${score}</strong>
        </div>
        <p class="final-msg">${ucapan}</p>
        <button onclick="window.location.reload()">Main Lagi</button>
    `;
}

// Menjalankan fungsi muat soal pertama kali saat web dibuka
loadQuiz();
