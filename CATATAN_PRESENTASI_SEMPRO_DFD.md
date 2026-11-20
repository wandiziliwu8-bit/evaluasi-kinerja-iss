# CATATAN PRESENTASI SEMINAR PROPOSAL (SEMPRO)
## Perancangan Data Flow Diagram (DFD) Level 0, Level 1, dan Level 2
**Judul Penelitian:** Sistem Informasi Evaluasi & Penilaian Kinerja Karyawan Cleaning Service PT ISS Indonesia (Area Penempatan PEMDA Tangerang Selatan)

---

## 1. PEMBUKAAN (LATAR BELAKANG SISTEM KEPADA DOSEN)
> **Skrip Bicara:**  
> *"Selamat pagi/siang Bapak/Ibu Dosen Penguji. Pada penelitian ini, saya merancang sistem informasi untuk mendigitalisasi proses evaluasi kinerja karyawan cleaning service PT ISS Indonesia pada area kerja PEMDA Tangerang Selatan. Sistem ini dirancang untuk mengatasi permasalahan penilaian manual, meningkatkan transparansi nilai, dan menyediakan ruang klarifikasi bagi karyawan. Aliran data pada sistem ini saya modelkan menggunakan Data Flow Diagram (DFD) dari Level 0 hingga Level 2."*

---

## 2. PENJELASAN DFD LEVEL 0 (DIAGRAM KONTEKS)

### A. Tujuan Diagram
Diagram Konteks menggambarkan batasan sistem (*system boundary*) secara keseluruhan dan interaksi sistem dengan 3 entitas eksternal (*external entities*).

### B. 3 Entitas Eksternal & Aliran Datanya
1. **Admin (Operasional / HRD):**
   * **Data Masuk ke Sistem (Input):**
     * *Data Karyawan Baru:* Menginput NIK, nama manpower, area gedung penempatan di lingkungan PEMDA Tangsel, dan shift kerja.
     * *Data Kriteria & Bobot Penilaian:* Mengatur indikator standar operasional kebersihan dan persentase bobot nilai.
   * **Data Keluar dari Sistem (Output):**
     * *Laporan Rekapitulasi Evaluasi & Status:* Menerima hasil rekapitulasi penilaian seluruh manpower untuk arsip operasional dan laporan ke manajemen PT ISS.

2. **Supervisor (SPV Lapangan):**
   * **Data Masuk ke Sistem (Input):**
     * *Data Penilaian Kinerja:* Menginput nilai evaluasi berdasarkan checklist tugas kebersihan, kerapian pakaian kerja (grooming/APD), dan presensi.
   * **Data Keluar dari Sistem (Output):**
     * *Daftar Manpower & Riwayat Evaluasi:* Menerima data daftar nama karyawan yang menjadi tanggung jawab supervisinya di PEMDA Tangsel.
     * *Notifikasi Tanggapan Karyawan:* Menerima catatan klarifikasi yang dikirimkan oleh karyawan setelah melihat nilai.

3. **Karyawan / Manpower Cleaning Service:**
   * **Data Masuk ke Sistem (Input):**
     * *Data Tanggapan / Klarifikasi Kinerja:* Mengirim respon/komentar jika ada kendala teknis lapangan terkait nilai evaluasi yang didapatkan.
   * **Data Keluar dari Sistem (Output):**
     * *Hasil Nilai Evaluasi (Scorecard & Grade):* Melihat rincian nilai akhir dan predikat (Grade A/B/C/D) secara transparan.

---

## 3. PENJELASAN DFD LEVEL 1 (DEKOMPOSISI SISTEM UTAMA)

### A. Tujuan Diagram
DFD Level 1 membedah proses utama sistem menjadi 5 proses fungsional yang terhubung dengan 5 tabel basis data (*Data Store*).

### B. 5 Proses Utama (Proses 1.0 s/d 5.0)
1. **Proses 1.0 (Login & Otentikasi):**
   * Berfungsi memverifikasi identitas pengguna berdasarkan *username* dan *password*.
   * Mengatur hak akses ke sistem: Admin diarahkan ke menu master, SPV ke menu penilaian, dan Manpower ke menu lihat nilai.
   * Terhubung ke: `D1 Data User`.

2. **Proses 2.0 (Kelola Data Master):**
   * Dikelola penuh oleh Admin untuk mendaftarkan dan memperbarui master data manpower, unit kerja (gedung/lantai PEMDA), serta kriteria penilaian dan bobot persentasenya.
   * Terhubung ke: `D1 Data User`, `D2 Data Karyawan`, dan `D3 Data Kriteria`.

3. **Proses 3.0 (Penilaian Kinerja Karyawan):**
   * Digunakan oleh SPV untuk melakukan evaluasi berkala. SPV memilih data karyawan dari `D2`, lalu sistem memuat kriteria dari `D3`. Setelah SPV menginput skor, sistem menghitung total nilai dan menyimpannya.
   * Terhubung ke: `D2 Data Karyawan`, `D3 Data Kriteria`, dan `D4 Data Penilaian`.

4. **Proses 4.0 (Akses Hasil & Tanggapan):**
   * Memberikan hak kepada karyawan cleaning service untuk melihat hasil nilai evaluasi miliknya sendiri secara transparan dari `D4`. Jika ada nilai yang kurang sesuai atau ada kendala operasional (misal: chemical pembersih habis), karyawan dapat mengirim tanggapan yang disimpan ke `D5` dan diteruskan sebagai notifikasi ke SPV.
   * Terhubung ke: `D4 Data Penilaian` dan `D5 Data Tanggapan`.

5. **Proses 5.0 (Laporan Evaluasi):**
   * Menggabungkan data identitas karyawan (`D2`) dan rekap nilai kinerja (`D4`) untuk mencetak laporan berkala (bulanan/triwulan).
   * Laporan diserahkan kepada Admin dan SPV sebagai bahan evaluasi perpanjangan kontrak kerja atau pemberian reward kinerja.

### C. 5 Data Store (Penyimpanan Data)
* **D1 | Data User:** Kredensial akun (ID User, Username, Password terenkripsi, Role).
* **D2 | Data Karyawan:** Biodata manpower (NIK, Nama, Penempatan Gedung PEMDA, Shift).
* **D3 | Data Kriteria:** Indikator penilaian (SOP Cleaning, Grooming, Absensi, Sikap) beserta bobotnya.
* **D4 | Data Penilaian:** Transaksi nilai evaluasi, rincian skor indikator, nilai akhir, dan grade.
* **D5 | Data Tanggapan:** Log komentar/klarifikasi karyawan dan status tindak lanjut SPV.

---

## 4. PENJELASAN DFD LEVEL 2 (DEKOMPOSISI PROSES 3.0)

### A. Alasan Pemilihan Proses 3.0
> **Skrip Bicara untuk Dosen:**  
> *"Proses 3.0 didekomposisi ke Level 2 karena proses penilaian kinerja merupakan **core business logic** (inti operasional) dari sistem ini yang melibatkan tahapan validasi kriteria dan kalkulasi skor bertingkat di lapangan."*

### B. 3 Sub-Proses di Level 2
1. **Sub-Proses 3.1 (Pilih Karyawan & Periode):**
   * SPV memfilter daftar karyawan aktif berdasarkan gedung/area kerja di PEMDA Tangsel dan shift kerja dari data store `D2 Data Karyawan`.
   * Sistem menampilkan form daftar manpower yang siap dinilai.
2. **Sub-Proses 3.2 (Input Nilai Indikator SOP):**
   * SPV mengisi nilai skor pada form sesuai standar penilaian PT ISS yang ditarik dari `D3 Data Kriteria` (misal: kebersihan toilet, koridor, kerapian seragam APD, dan kedisiplinan presensi).
   * Outputnya adalah data skor mentah (*raw score*) per indikator.
3. **Sub-Proses 3.3 (Hitung Skor Akhir & Grade):**
   * Sistem secara otomatis mengalikan skor dengan bobot masing-masing kriteria untuk menghasilkan nilai akhir (0-100) dan mengonversinya ke predikat (Grade A: Sangat Baik, B: Baik, C: Cukup, D: Kurang).
   * Nilai final ini disimpan secara permanen ke `D4 Data Penilaian` dan sistem memunculkan konfirmasi sukses kepada SPV.

---

## 5. PREDIKSI PERTANYAAN DOSEN PENGUJI & JAWABANNYA (FAQ)

### Pertanyaan 1: *"Apakah DFD yang Anda buat sudah memenuhi aturan Balancing (Keseimbangan)?"*
* **Jawaban:**  
  *"Sudah, Bapak/Ibu. Semua aliran data masuk dan data keluar pada Diagram Konteks (Level 0) konsisten dan seimbang dengan yang ada pada DFD Level 1. Tidak ada data yang muncul tiba-tiba (miracle) ataupun data yang masuk ke proses tanpa pernah dikeluarkan kembali (black hole)."*

### Pertanyaan 2: *"Mengapa Karyawan (Cleaning Service) perlu diberi hak untuk memberikan tanggapan?"*
* **Jawaban:**  
  *"Fitur tanggapan ini dirancang sebagai bentuk transparansi penilaian dan sarana komunikasi dua arah. Di lapangan, sering kali terdapat faktor eksternal yang mempengaruhi kinerja kebersihan di area PEMDA Tangsel—seperti keterlambatan suplai bahan chemical pembersih atau lonjakan beban kerja mendadak saat acara dinas. Tanggapan ini menjadi catatan klarifikasi bagi SPV dan manajemen sebelum mengambil keputusan administratif."*

### Pertanyaan 3: *"Mengapa proses Login (1.0) dimasukkan ke dalam DFD Level 1?"*
* **Jawaban:**  
  *"Karena sistem ini memiliki hak akses multi-role (Admin, SPV, dan Karyawan) di mana data yang ditampilkan harus terfilter ketat. Karyawan hanya boleh melihat nilai dirinya sendiri, SPV hanya boleh menilai tim di area kerja supervisinya, dan Admin memiliki wewenang penuh pada data master."*

### Pertanyaan 4: *"Standar kriteria apa saja yang dinilai oleh Supervisor?"*
* **Jawaban:**  
  *"Kriteria penilaian mengacu pada standar operasional PT ISS Indonesia, yang mencakup: Kualitas Kebersihan (SOP Cleaning), Kerapian & APD (Grooming), Kedisiplinan Kehadiran (Attendance/Punctuality), serta Sikap Kerja & Keramahan terhadap pegawai kantor PEMDA Tangsel (Attitude & Hospitality)."*
