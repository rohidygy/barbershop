/* ==========================================================
   PEMBAYARAN - atur DP, QRIS, dan rekening di sini saja
   ========================================================== */

var PEMBAYARAN = {
  dp: 20000,                    // nominal DP, angka saja. Isi 0 kalau tidak pakai DP
  bayar: "QRIS atau transfer",  // cara bayar yang tampil
  aturan: "DP dipotong dari total saat cukur. Telat lebih dari 15 menit, jadwal dilepas.",

  // Gambar QRIS: upload ke folder foto/ dengan nama qris.jpg. Kosongkan "" kalau tidak ada
  qris: "foto/qris.jpg",

  // Nomor rekening (boleh lebih dari satu). Hapus tanda // di depan untuk mengaktifkan
  rekening: [
    // { bank: "BCA", nomor: "1234567890", nama: "Nama Pemilik" },
    // { bank: "DANA", nomor: "085179529030", nama: "Kage BarberShop" }
  ]
};
