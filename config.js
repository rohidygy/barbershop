/* ==========================================================
   FILE PENGATURAN - ubah data barbershop kamu di sini saja
   Aturan: jangan hapus tanda kutip " " dan koma , di akhir baris
   ========================================================== */

var CONFIG = {

  // ---------- VERSI FOTO ----------
  versi: 6,

  // ---------- IDENTITAS ----------
  nama: "Kage BarberShop",
  whatsapp: "6285179529030",
  nomorTampil: "0851-7952-9030",
  instagram: "@kagebarbershop",
  alamat: ["Sungai Jawi Luar , Jl apel , Gg apel 5 no 34"],

  // ---------- TEKS UTAMA ----------
  judul: "Percaya diri|mulai di sini.",
  deskripsi: "Barber berpengalaman 10+ tahun siap merapikan gayamu.",

  // ---------- KEUNGGULAN (3 angka di bawah judul) ----------
  keunggulan: [
    ["10+ tahun", "pengalaman"],
    ["3 barber", "berpengalaman"],
    ["Handuk hangat", "di setiap cukur"]
  ],

  // ---------- JAM BUKA ----------
  jamBuka: [
    ["Senin - Jumat", "10.00 - 21.00"],
    ["Sabtu", "09.00 - 22.00"],
    ["Minggu", "11.00 - 20.00"]
  ],

  // ---------- LAYANAN DAN HARGA ----------
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
  gaya: [
    // ----- FADE -----
    { nama: "Low Fade", kategori: "Fade" },
    { nama: "Mid Fade", kategori: "Fade" },
    { nama: "High Fade", kategori: "Fade", foto: "https://i.ibb.co.com/2YHhHZqh/images-1.jpg" },
    { nama: "Skin Fade", kategori: "Fade", foto: "https://i.ibb.co.com/wrgpt8WK/images-2.jpg" },
    { nama: "Burst Fade", kategori: "Fade", foto: "https://i.ibb.co.com/yFF9NQGf/images-3.jpg" },
    { nama: "Drop Fade", kategori: "Fade", foto: "https://i.ibb.co.com/HpdHbmLm/images-4.jpg" },
    { nama: "Taper Fade", kategori: "Fade" },
    { nama: "Temple Fade", kategori: "Fade" },
    { nama: "Shadow Fade", kategori: "Fade" },

    // ----- KLASIK -----
    { nama: "Side Part", kategori: "Klasik" },
    { nama: "Pompadour", kategori: "Klasik" },
    { nama: "Slick Back", kategori: "Klasik" },
    { nama: "Quiff", kategori: "Klasik" },
    { nama: "Ivy League", kategori: "Klasik" },
    { nama: "Crew Cut", kategori: "Klasik" },
    { nama: "Comb Over", kategori: "Klasik" },
    { nama: "Regular Taper", kategori: "Klasik" },

    // ----- KEKINIAN -----
    { nama: "Textured Crop", kategori: "Kekinian" },
    { nama: "French Crop", kategori: "Kekinian" },
    { nama: "Edgar Cut", kategori: "Kekinian" },
    { nama: "Mullet Modern", kategori: "Kekinian" },
    { nama: "Faux Hawk", kategori: "Kekinian" },
    { nama: "Buzz Cut", kategori: "Kekinian" },
    { nama: "Bowl Cut Modern", kategori: "Kekinian" },
    { nama: "Spiky Texture", kategori: "Kekinian" },

    // ----- GAYA KOREA -----
    { nama: "Comma Hair", kategori: "Gaya Korea" },
    { nama: "Two Block", kategori: "Gaya Korea" },
    { nama: "Dandy Cut", kategori: "Gaya Korea" },
    { nama: "Curtain Bangs", kategori: "Gaya Korea" },
    { nama: "Fluffy Fringe", kategori: "Gaya Korea" },
    { nama: "Soft Perm", kategori: "Gaya Korea" },
    { nama: "Wavy Perm", kategori: "Gaya Korea" },

    // ----- RAMBUT PANJANG -----
    { nama: "Wolf Cut", kategori: "Rambut Panjang" },
    { nama: "Shag Cut", kategori: "Rambut Panjang" },
    { nama: "Layered Medium", kategori: "Rambut Panjang" },
    { nama: "Long Slick Back", kategori: "Rambut Panjang" },
    { nama: "Man Bun", kategori: "Rambut Panjang" },

    // ----- KERITING -----
    { nama: "Curly Taper", kategori: "Keriting" },
    { nama: "Curly Fringe", kategori: "Keriting" },
    { nama: "Broccoli Cut", kategori: "Keriting" },
    { nama: "Afro Taper", kategori: "Keriting" },
    { nama: "Perm Keriting", kategori: "Keriting" },

    // ----- ANAK -----
    { nama: "Potong Anak Rapi", kategori: "Anak" },
    { nama: "Fade Anak", kategori: "Anak" },
    { nama: "Crew Cut Anak", kategori: "Anak" },
    { nama: "Bowl Cut Anak", kategori: "Anak" },

    // ----- JENGGOT -----
    { nama: "Jenggot Rapi", kategori: "Jenggot" },
    { nama: "Fade + Jenggot", kategori: "Jenggot" },
    { nama: "Botak + Jenggot", kategori: "Jenggot" },
    { nama: "Goatee", kategori: "Jenggot" },
    { nama: "Stubble", kategori: "Jenggot" },
    { nama: "Full Beard", kategori: "Jenggot" },
    { nama: "Kumis Klasik", kategori: "Jenggot" },

    // ----- WARNA -----
    { nama: "Silver Ash Grey", kategori: "Warna" },
    { nama: "Platinum Blonde", kategori: "Warna" },
    { nama: "Highlight", kategori: "Warna" },
    { nama: "Burgundy", kategori: "Warna" },
    { nama: "Hitam Natural", kategori: "Warna" }
  ],

  // ---------- JAM YANG BISA DIPESAN ----------
  jamPesan: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
};
