File index.html yang kamu kirimkan adalah kerangka dasar (struktur utama) dari game tebak kata yang telah kita buat. Ibarat membangun sebuah rumah, file HTML ini bertindak sebagai dinding dan tiang pondasinya, sedangkan CSS adalah cat/dekorasinya, dan JavaScript adalah sistem kelistrikannya.
Berikut adalah penjelasan detail dari setiap baris kodenya agar kamu lebih mudah memahaminya:
## 1. Bagian Kepala (<head>) — Pengaturan Latar Belakang
Bagian ini tidak terlihat langsung oleh pemain di layar, melainkan berisi instruksi untuk browser:

* <!DOCTYPE html> & <html lang="id">: Memberitahu browser bahwa dokumen ini menggunakan standar HTML5 terbaru dan bahasa utamanya adalah Bahasa Indonesia.
* <meta charset="UTF-8">: Memastikan semua karakter teks (termasuk emoji) bisa dibaca dan ditampilkan dengan benar tanpa menjadi kotak-kotak kosong.
* <meta name="viewport" ...>: Pengaturan super penting agar tampilan game otomatis menyesuaikan ukuran layar (responsif), jadi tetap rapi saat dibuka di HP maupun Laptop.
* <title>... </title>: Mengatur teks nama game yang muncul di tab paling atas browser kamu.
* <link rel="stylesheet" href="style.css">: Baris penyambung yang bertugas memanggil file style.css agar kerangka game yang polos ini bisa dihias dengan warna dan tata letak yang menarik.

------------------------------
## 2. Bagian Tubuh (<body>) — Tampilan Utama Game
Ini adalah area utama tempat semua elemen visual yang dilihat dan dimainkan oleh user berada:

* <div class="game-container" id="gameBox">: Ini adalah kotak wadah utama (container). Semua komponen game dibungkus di dalam kotak ini agar posisinya bisa diatur rapi di tengah-tengah layar.
* <h1>📝 Tebak Kata Inggris</h1>: Judul utama game dengan ukuran teks paling besar.
* <div class="stats">: Baris info panel yang memuat dua data dinamis:
* <span id="questionNum">1</span>/5: Angka urutan soal (berubah otomatis lewat JavaScript).
   * <span id="score">0</span>: Angka perolehan skor pemain saat ini.
* <div class="word-box" id="scrambledWord">_____</div>: Kotak tempat menampilkan huruf-huruf kata bahasa Inggris yang diacak.
* <div class="hint" id="hintText">Petunjuk: Arti kata</div>: Area teks untuk memberikan bantuan atau arti dari kata yang harus ditebak.
* <input type="text" id="userInput" ...>: Kotak kosong tempat pemain mengetikkan jawaban mereka. Atribut autocomplete="off" dipasang agar browser tidak memunculkan saran ketikan lama yang bisa mengganggu pandangan pemain.
* <button onclick="checkAnswer()" id="submitBtn">Kirim Jawaban</button>: Tombol picu. Saat tombol ini diklik, perintah onclick="checkAnswer()" akan menyalakan fungsi pemeriksaan di dalam JavaScript untuk mengecek apakah jawaban pemain benar atau salah.
* <div class="feedback" id="feedback"></div>: Kotak teks kosong yang nantinya akan diisi tulisan seperti "✅ Hebat! Jawabanmu Benar!" atau "❌ Salah!" setelah pemain mengirimkan jawaban.

------------------------------
## 3. Bagian Penutup JS (<script>)

* <script src="script.js"></script>: Baris ini diletakkan di paling bawah (sebelum penutup </body>) agar browser memuat seluruh tampilan HTML-nya terlebih dahulu hingga selesai, baru kemudian membaca dan mengaktifkan sistem logika atau kecerdasan game yang ada di file script.js.

Untuk melangkah ke tahap perakitan atau modifikasi, beri tahu saya:

* Apakah kamu ingin mengubah judul teks atau teks petunjuk bawaan di atas ke konsep lain?
* Apakah kamu membutuhkan penjelasan serupa untuk file style.css atau script.js agar paham cara kerjanya secara menyeluruh?


