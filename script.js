// 1. Menampilkan Tanggal Awal Bertemu
document.getElementById('tanggal-bertemu').innerText = '15 Agustus 2022'; // Ganti dengan tanggal kalian

// 2. Fungsi Tampilkan/Sembunyikan Cerita
function tampilkanCerita(id) {
    const cerita = document.getElementById(id);
    const tombol = document.querySelector(`.tombol-cerita[onclick*="${id}"]`);

    if (cerita.style.display === 'none' || cerita.style.display === '') {
        cerita.style.display = 'block';
        tombol.innerText = 'Sembunyikan Cerita';
    } else {
        cerita.style.display = 'none';
        tombol.innerText = 'Baca Kisah Selengkapnya';
    }
}

// 3. Countdown Timer ke Hari Jadi (Anniversary)
// Tentukan tanggal Hari Jadi Anda (contoh: 15 Agustus tahun depan)
const tanggalHariJadi = new Date("August 15, 2026 00:00:00").getTime();

const x = setInterval(function() {
    const sekarang = new Date().getTime();
    const selisih = tanggalHariJadi - sekarang;

    // Perhitungan waktu
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    // Tampilkan hasilnya
    document.getElementById("countdown").innerHTML = hari + " Hari " + jam + " Jam "
    + menit + " Menit " + detik + " Detik";

    // Jika hitungan selesai
    if (selisih < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "🎉 HARI INI HARI JADI KITA! 🎉";
    }
}, 1000);

// Ide Dinamis Tambahan: Efek Salju/Hati Jatuh (untuk sentuhan romantis)
// Anda bisa menambahkan library seperti 'particles.js' atau menggunakan CSS/JS sederhana
// untuk efek visual hati berjatuhan jika mau!
