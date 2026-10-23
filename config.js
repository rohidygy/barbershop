/* ==========================================================
   FILE PENGATURAN - ubah data barbershop kamu di sini saja
   Aturan: jangan hapus tanda kutip " " dan koma , di akhir baris
   ========================================================== */

var CONFIG = {

  // ---------- IDENTITAS ----------
  nama: "Pangkas Jaya",                 // nama barbershop
  whatsapp: "6281234567890",            // nomor WA: awali 62, tanpa 0 di depan
  nomorTampil: "0812-3456-7890",        // nomor yang tampil di website
  instagram: "@pangkasjaya",
  alamat: ["Jl. Contoh Raya No. 12", "Kota Anda, 12345"],

  // ---------- TEKS UTAMA ----------
  judul: "Rapi tanpa antre.",
  deskripsi: "Pilih layanan, barber, dan jam. Selesai dalam satu menit, konfirmasi langsung lewat WhatsApp.",

  // ---------- KEUNGGULAN (3 angka di bawah judul) ----------
  keunggulan: [
    ["10+ tahun", "pengalaman"],
    ["3 barber", "berpengalaman"],
    ["Handuk hangat", "di setiap cukur"]
  ],

  // ---------- JAM BUKA ----------
  jamBuka: [
    ["Senin – Jumat", "10.00 – 21.00"],
    ["Sabtu", "09.00 – 22.00"],
    ["Minggu", "11.00 – 20.00"]
  ],

  // ---------- LAYANAN DAN HARGA ----------
  // harga ditulis angka saja, tanpa titik. Contoh: 40000
  layanan: [
    { nama: "Potong rambut", info: "Konsultasi model, cuci, styling", harga: 40000 },
    { nama: "Cukur jenggot dan kumis", info: "Handuk hangat dan pisau cukur", harga: 25000 },
    { nama: "Paket potong + cukur", info: "Layanan lengkap, lebih hemat", harga: 60000 },
    { nama: "Hair coloring", info: "Warna sesuai pilihan", harga: 150000 },
    { nama: "Potong anak (di bawah 12 tahun)", info: "Sabar dan cepat", harga: 30000 }
  ],

  // ---------- BARBER ----------
  barber: [
    { nama: "Rudi", info: "Fade dan potongan klasik. 10 tahun di kursi cukur." },
    { nama: "Dimas", info: "Undercut, texture crop, dan model kekinian." },
    { nama: "Bayu", info: "Cukur tradisional dan perawatan jenggot." }
  ],

  // ---------- MODEL RAMBUT TERBARU (GALERI) ----------
  // nama     : nama model yang tampil
  // kategori : untuk tombol filter. Pakai nama yang sama untuk model sejenis
  // tipe     : bentuk ilustrasi cadangan (dipakai kalau foto kosong).
  //            Pilihan: fade, buzz, quiff, part, crop, long, curly, hawk, beard
  //            Boleh digabung dengan +, contoh: fade+beard
  // foto     : link foto (https://...) atau nama file di GitHub. Kosongkan "" kalau belum ada
  gaya: [
    // ----- FADE -----
    { nama: "Low Fade", kategori: "Fade", tipe: "fade", foto: "https://i.ibb.co.com/ccrSB5t0/9f002a3e028805d8118f50167833d489.jpg" },
    { nama: "Mid Fade", kategori: "Fade", tipe: "fade", foto: "" },
    { nama: "High Fade", kategori: "Fade", tipe: "fade", foto: "" },
    { nama: "Burst Fade", kategori: "Fade", tipe: "fade", foto: "" },
    { nama: "Taper Fade", kategori: "Fade", tipe: "crop", foto: "" },

    // ----- KLASIK -----
    { nama: "Side Part", kategori: "Klasik", tipe: "part", foto: "" },
    { nama: "Pompadour", kategori: "Klasik", tipe: "quiff", foto: "" },
    { nama: "Slick Back", kategori: "Klasik", tipe: "quiff", foto: "" },
    { nama: "Quiff Modern", kategori: "Klasik", tipe: "quiff", foto: "" },

    // ----- KEKINIAN -----
    { nama: "Textured Crop", kategori: "Kekinian", tipe: "crop", foto: "" },
    { nama: "French Crop", kategori: "Kekinian", tipe: "crop", foto: "" },
    { nama: "Two Block", kategori: "Kekinian", tipe: "part", foto: "" },
    { nama: "Comma Hair", kategori: "Kekinian", tipe: "part", foto: "" },
    { nama: "Wolf Cut", kategori: "Kekinian", tipe: "long", foto: "" },
    { nama: "Mullet Modern", kategori: "Kekinian", tipe: "long", foto: "" },
    { nama: "Faux Hawk", kategori: "Kekinian", tipe: "hawk", foto: "" },
    { nama: "Curly Taper", kategori: "Kekinian", tipe: "curly", foto: "" },
    { nama: "Buzz Cut", kategori: "Kekinian", tipe: "buzz", foto: "" },

    // ----- JENGGOT -----
    { nama: "Jenggot Rapi", kategori: "Jenggot", tipe: "buzz+beard", foto: "" },
    { nama: "Fade + Jenggot", kategori: "Jenggot", tipe: "fade+beard", foto: "" },
    { nama: "Botak + Jenggot", kategori: "Jenggot", tipe: "beard", foto: "" }
  ],

  // ---------- JAM YANG BISA DIPESAN ----------
  jamPesan: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
};
