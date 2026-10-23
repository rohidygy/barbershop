/* ==========================================================
   FILE PENGATURAN - ubah data barbershop kamu di sini saja
   Aturan: jangan hapus tanda kutip " " dan koma , di akhir baris
   ========================================================== */

var CONFIG = {

  // ---------- IDENTITAS ----------
  nama: "Kage BarberShop",                 // nama barbershop
  whatsapp: "+62885179529030",            // nomor WA: awali 62, tanpa 0 di depan
  nomorTampil: "0851-7952-9030",        // nomor yang tampil di website
  instagram: "@pangkasjaya",
  alamat: ["Sungai Jawi , Jln Apel , Gg apel 5 no 34"],

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

  // ---------- JAM YANG BISA DIPESAN ----------
  jamPesan: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
};
