/* ==========================================================
   JADWAL - tandai jam yang sudah dipesan jadi "penuh"
   Cara 1 (mudah): tulis manual di daftar "manual" di bawah.
   Cara 2 (otomatis): isi "csv" dengan link Google Sheets yang dipublikasikan
          sebagai CSV. Kolom: tanggal | jam | barber (barber boleh kosong).
   Contoh isi Sheets:  2026-10-25 | 14:00 | Rudi
   ========================================================== */

var JADWAL = {
  csv: "",
  manual: [
    // { tanggal: "2026-10-25", jam: "14:00", barber: "Rudi" },
  ]
};
