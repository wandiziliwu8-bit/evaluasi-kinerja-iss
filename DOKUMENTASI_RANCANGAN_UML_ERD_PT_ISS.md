# PERANCANGAN SISTEM (UML & ERD)
## Sistem Informasi Penilaian Kinerja Karyawan Cleaning Service Berbasis Web
**Studi Kasus:** PT ISS Indonesia – Area Penempatan Pemerintah Kota Tangerang Selatan  
**Target Format:** Enterprise Architect (EA), PlantUML, Draw.io, dan MySQL DDL

---

## DAFTAR ISI
1. [Aktor Sistem & Matriks Hak Akses](#1-aktor-sistem--matriks-hak-akses)
2. [Use Case Model](#2-use-case-model)
   - [2.1 Daftar & Spesifikasi Use Case](#21-daftar--spesifikasi-use-case)
   - [2.2 Use Case Diagram Utama (Gambar 3.1)](#22-use-case-diagram-utama-gambar-31)
   - [2.3 Rincian Use Case Input Penilaian Kinerja (Gambar 3.2)](#23-rincian-use-case-input-penilaian-kinerja-gambar-32)
3. [Activity Diagram (13 Use Case)](#3-activity-diagram)
   - [3.1 Activity Diagram Login (Gambar 3.3)](#31-activity-diagram-login-gambar-33)
   - [3.2 Activity Diagram Kelola Data Pengguna (Gambar 3.4)](#32-activity-diagram-kelola-data-pengguna-gambar-34)
   - [3.3 Activity Diagram Kelola Data Karyawan (Gambar 3.5)](#33-activity-diagram-kelola-data-karyawan-gambar-35)
   - [3.4 Activity Diagram Kelola Data Master (Gambar 3.6)](#34-activity-diagram-kelola-data-master-area-etika-alat-kerja-sop-gambar-36)
   - [3.5 Activity Diagram Kelola Skala, Bobot, dan Kategori Nilai (Gambar 3.7)](#35-activity-diagram-kelola-skala-bobot-dan-kategori-nilai-gambar-37)
   - [3.6 Activity Diagram Kelola Periode Penilaian (Gambar 3.8)](#36-activity-diagram-kelola-periode-penilaian-gambar-38)
   - [3.7 Activity Diagram Input Penilaian Kinerja (Gambar 3.9)](#37-activity-diagram-input-penilaian-kinerja-gambar-39)
   - [3.8 Activity Diagram Hitung Nilai Otomatis (Gambar 3.10)](#38-activity-diagram-hitung-nilai-otomatis-include-gambar-310)
   - [3.9 Activity Diagram Finalisasi Penilaian (Gambar 3.11)](#39-activity-diagram-finalisasi-penilaian-gambar-311)
   - [3.10 Activity Diagram Lihat Rekap dan Laporan Penilaian (Gambar 3.12)](#310-activity-diagram-lihat-rekap-dan-laporan-penilaian-gambar-312)
   - [3.11 Activity Diagram Cetak / Ekspor Laporan (Gambar 3.13)](#311-activity-diagram-cetak--ekspor-laporan-extend-gambar-313)
   - [3.12 Activity Diagram Lihat Hasil Penilaian (Gambar 3.14)](#312-activity-diagram-lihat-hasil-penilaian-gambar-314)
   - [3.13 Activity Diagram Beri Tanggapan (Feedback) (Gambar 3.15)](#313-activity-diagram-beri-tanggapan-feedback-extend-gambar-315)
4. [Class Diagram (Gambar 3.8)](#4-class-diagram-gambar-38)
   - [4.1 Diagram Struktur Kelas](#41-diagram-struktur-kelas)
   - [4.2 Kamus Data Kelas (OOP)](#42-kamus-data-kelas-oop)
5. [Entity Relationship Diagram / ERD (Gambar 3.9)](#5-entity-relationship-diagram--erd-gambar-39)
   - [5.1 Diagram Relasi Entitas (Crow's Foot Notation)](#51-diagram-relasi-entitas-crows-foot-notation)
   - [5.2 Struktur Skema Tabel Basis Data (3NF)](#52-struktur-skema-tabel-basis-data-3nf)
6. [Sequence Diagram](#6-sequence-diagram)
   - [6.1 Sequence Diagram Login (Gambar 3.10)](#61-sequence-diagram-login-gambar-310)
   - [6.2 Sequence Diagram Kelola Data Karyawan (Gambar 3.11)](#62-sequence-diagram-kelola-data-karyawan-gambar-311)
   - [6.3 Sequence Diagram Input Penilaian Kinerja (Gambar 3.12)](#63-sequence-diagram-input-penilaian-kinerja-gambar-312)
   - [6.4 Sequence Diagram Finalisasi Penilaian (Gambar 3.13)](#64-sequence-diagram-finalisasi-penilaian-gambar-313)
   - [6.5 Sequence Diagram Lihat Hasil & Beri Tanggapan (Gambar 3.14)](#65-sequence-diagram-lihat-hasil--beri-tanggapan-gambar-314)
   - [6.6 Sequence Diagram Rekap & Cetak Laporan (Gambar 3.15)](#66-sequence-diagram-rekap--cetak-laporan-gambar-315)
7. [Panduan Integrasi & Penggunaan di Enterprise Architect (EA)](#7-panduan-integrasi--penggunaan-di-enterprise-architect-ea)
8. [Aturan dan Asumsi Rancangan](#8-aturan-dan-asumsi-rancangan)

---

## 1. AKTOR SISTEM & MATRIKS HAK AKSES

Sistem ini dirancang dengan membagi wewenang secara tegas kepada **3 Aktor**:

| Aktor | Peran Sistem | Hak Akses & Kewenangan Utama |
| :--- | :--- | :--- |
| **Admin** | Pengelola data master & pengaturan sistem (HRD / Operasional PT ISS) | <ul><li>Mengelola akun pengguna (*User Management*).</li><li>Mengelola data biodata karyawan (*Employee Master*).</li><li>Mengelola data master: area penempatan (gedung PEMDA), aspek etika kerja, mesin/alat kerja, dan SOP pembersihan.</li><li>Mengatur bobot persentase evaluasi, skala skor (A/B/C, Baik/Kurang), dan kategori predikat akhir.</li><li>Membuka dan menutup periode evaluasi kerja.</li><li>Melihat rekapitulasi nilai dan mengunduh/mencetak laporan (PDF/Excel).</li></ul> |
| **Supervisor (SPV)** | Penilai kinerja karyawan di lapangan (*Field Operational Leader*) | <ul><li>Menginput skor evaluasi digital berkala (Etika Kerja, Pengetahuan Alat, Penerapan SOP).</li><li>Mengisi catatan evaluasi: tanggapan atasan dan rekomendasi atasan (misal: promosi, perpanjangan kontrak, pelatihan ulang).</li><li>Menyimpan nilai sementara sebagai *draft*.</li><li>Melakukan **Finalisasi Penilaian** (mengunci skor agar bernilai sah dan dapat diterbitkan ke karyawan).</li><li>Melihat rekap nilai manpower dan mengunduh laporan nilai.</li></ul> |
| **Karyawan** | Pihak yang dinilai (*Manpower Cleaning Service*) | <ul><li>**Hanya melihat** hasil evaluasi kinerja miliknya sendiri yang berstatus **FINAL**.</li><li>Melihat rincian nilai tiap aspek dan catatan/rekomendasi dari supervisor.</li><li>Memberikan **tanggapan balik / feedback / klarifikasi digital** atas hasil nilai tersebut (sesuai kolom tanggapan pada formulir kertas evaluasi PT ISS).</li></ul> |

---

## 2. USE CASE MODEL

### 2.1 DAFTAR & SPESIFIKASI USE CASE

| No | Use Case | Aktor Terkait | Tipe Relasi | Deskripsi Singkat |
| :---: | :--- | :--- | :---: | :--- |
| **1** | Login | Semua Aktor | - | Otentikasi username dan password, mengarahkan pengguna ke dashboard sesuai peran (*role-based access*). |
| **2** | Kelola Data Pengguna | Admin | - | Tambah, ubah, nonaktifkan akun pengguna dan reset password. |
| **3** | Kelola Data Karyawan | Admin | - | Tambah, ubah, hapus profil manpower cleaning service beserta penempatan gedung dan akun login. |
| **4** | Kelola Data Master | Admin | - | Mengelola area penempatan, 10 butir aspek etika, master alat kerja, dan SOP kebersihan. |
| **5** | Kelola Skala, Bobot, & Kategori Nilai | Admin | - | Konfigurasi konversi nilai A/B/C, bobot bagian (Etika 30%, Alat 35%, SOP 35%), serta ambang batas predikat. |
| **6** | Kelola Periode Penilaian | Admin | - | Menentukan jadwal periode penilaian (misal: Agustus 2026) dan status aktif/tutup. |
| **7** | Input Penilaian Kinerja | Supervisor (SPV) | `<<include>>` UC12 | Mengisi instrumen evaluasi 3 bagian, mengisi catatan atasan, dan menyimpan draft penilaian. |
| **8** | Lihat Rekap & Laporan Penilaian | Admin, SPV | - | Menampilkan rekapitulasi nilai dengan filter periode, area kerja, dan rentang predikat. |
| **9** | Cetak / Ekspor Laporan | Admin, SPV | `<<extend>>` UC8 | Mengunduh dokumen laporan nilai dalam format PDF atau Excel. |
| **10** | Lihat Hasil Penilaian | Karyawan | - | Menampilkan lembar hasil penilaian pribadi yang berstatus final beserta catatan supervisor. |
| **11** | Beri Tanggapan (Feedback) | Karyawan | `<<extend>>` UC10 | Karyawan mengirimkan catatan klarifikasi atau respon atas nilai yang diterimanya. |
| **12** | Hitung Nilai Otomatis | Sistem | `<<include>>` dari UC7 | Sistem melakukan kalkulasi skor tertimbang per bagian dan nilai akhir secara otomatis saat form disimpan. |
| **13** | Finalisasi Penilaian | Supervisor (SPV) | - | Mengunci data penilaian dari status *draft* menjadi *final* sehingga hasil resmi dapat dilihat oleh karyawan. |

---

### 2.2 USE CASE DIAGRAM UTAMA (GAMBAR 3.1)

```mermaid
flowchart LR
    subgraph Aktor["Aktor Sistem"]
        Admin(["👤 Admin"])
        SPV(["👤 Supervisor (SPV)"])
        Karyawan(["👤 Karyawan"])
    end

    subgraph Boundary["Sistem Informasi Penilaian Kinerja Cleaning Service PT ISS"]
        UC1(["UC-01 Login"])
        UC2(["UC-02 Kelola Data Pengguna"])
        UC3(["UC-03 Kelola Data Karyawan"])
        UC4(["UC-04 Kelola Data Master"])
        UC5(["UC-05 Kelola Skala & Bobot Nilai"])
        UC6(["UC-06 Kelola Periode Penilaian"])
        UC7(["UC-07 Input Penilaian Kinerja"])
        UC8(["UC-08 Lihat Rekap & Laporan"])
        UC9(["UC-09 Cetak / Ekspor Laporan"])
        UC10(["UC-10 Lihat Hasil Penilaian"])
        UC11(["UC-11 Beri Tanggapan (Feedback)"])
        UC12(["UC-12 Hitung Nilai Otomatis"])
        UC13(["UC-13 Finalisasi Penilaian"])
    end

    Admin --> UC1
    Admin --> UC2
    Admin --> UC3
    Admin --> UC4
    Admin --> UC5
    Admin --> UC6
    Admin --> UC8

    SPV --> UC1
    SPV --> UC7
    SPV --> UC13
    SPV --> UC8

    Karyawan --> UC1
    Karyawan --> UC10

    UC7 -.->|<<include>>| UC12
    UC9 -.->|<<extend>>| UC8
    UC11 -.->|<<extend>>| UC10
```

> **File PlantUML untuk Enterprise Architect:**  
> [01_use_case_diagram.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/01_use_case_diagram.puml)

---

### 2.3 RINCIAN USE CASE INPUT PENILAIAN KINERJA (GAMBAR 3.2)

```mermaid
flowchart LR
    SPV(["👤 Supervisor (SPV)"])

    subgraph Rincian["Rincian Use Case Input Penilaian Kinerja"]
        UC_Input(["Input Penilaian Kinerja"])
        UC_Etika(["Isi Evaluasi Etika Kerja (10 Aspek)"])
        UC_Alat(["Isi Evaluasi Pengetahuan Alat Kerja"])
        UC_SOP(["Isi Evaluasi Penerapan SOP"])
        UC_Atasan(["Isi Tanggapan & Rekomendasi Atasan"])
        UC_Hitung(["Hitung Nilai Otomatis"])
        UC_Final(["Finalisasi Penilaian"])
    end

    SPV --> UC_Input
    SPV --> UC_Final

    UC_Input -.->|<<include>>| UC_Etika
    UC_Input -.->|<<include>>| UC_Alat
    UC_Input -.->|<<include>>| UC_SOP
    UC_Input -.->|<<include>>| UC_Atasan
    UC_Input -.->|<<include>>| UC_Hitung
```

> **File PlantUML untuk Enterprise Architect:**  
> [02_rincian_use_case_input_penilaian.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/02_rincian_use_case_input_penilaian.puml)

---

## 3. ACTIVITY DIAGRAM (1 USE CASE = 1 ACTIVITY)

Sesuai prinsip perancangan UML standar dan kebutuhan spesifikasi sistem, setiap Use Case yang terdapat pada Use Case Diagram utama dimodelkan ke dalam **1 Activity Diagram tersendiri** (total 13 Activity Diagram). Setiap diagram menggunakan partisi jalur (*swimlane*) untuk memisahkan tanggung jawab antara **Aktor Pengguna** dan **Sistem**.

---

### 3.1 ACTIVITY DIAGRAM LOGIN (GAMBAR 3.3)
* **Use Case Terkait:** UC-01 Login
* **Aktor:** Pengguna (Admin / Supervisor / Karyawan)
* **Deskripsi:** Memvalidasi kredensial pengguna, mendeteksi hak akses (*role*), dan mengarahkan ke dashboard utama yang sesuai.

```mermaid
flowchart TD
    subgraph Pengguna["Pengguna (Admin / SPV / Karyawan)"]
        A([Mulai]) --> B[Membuka halaman login]
        B --> C[Mengisi username dan password]
        C --> D[Menekan tombol Login]
        I[Melihat dashboard utama sesuai hak akses] --> J([Selesai])
        K[Melihat pesan kesalahan login] --> L([Selesai])
    end

    subgraph Sistem["Sistem"]
        D --> E[Memvalidasi kredensial pengguna]
        E --> F{Kredensial valid?}
        F -- Ya --> G[Mengidentifikasi peran & membuat sesi]
        G --> H[Menampilkan dashboard sesuai peran]
        H --> I
        F -- Tidak --> K
    end
```
> **File PlantUML:** [act_01_login.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_01_login.puml)

---

### 3.2 ACTIVITY DIAGRAM KELOLA DATA PENGGUNA (GAMBAR 3.4)
* **Use Case Terkait:** UC-02 Kelola Data Pengguna
* **Aktor:** Admin
* **Deskripsi:** Admin mengelola akun login pengguna sistem (tambah akun, ubah profil/role, reset password, atau nonaktifkan akun).

```mermaid
flowchart TD
    subgraph Admin["Admin"]
        A([Mulai]) --> B[Memilih menu Kelola Data Pengguna]
        D[Memilih aksi: Tambah, Ubah, Reset Password, atau Nonaktifkan]
        F[Mengisi atau memperbarui formulir akun pengguna]
        F --> G[Menekan tombol Simpan]
        K[Melihat daftar akun pengguna terbaru] --> L([Selesai])
        M[Melihat pesan kesalahan validasi] --> N([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C[Menampilkan tabel daftar akun pengguna]
        C --> D
        D --> E[Menampilkan modal formulir kelola akun]
        E --> F
        G --> H[Memvalidasi kelengkapan & keunikan username]
        H --> I{Data valid?}
        I -- Ya --> J[Menyimpan perubahan data akun ke basis data]
        J --> O[Menampilkan notifikasi sukses & memuat ulang tabel]
        O --> K
        I -- Tidak --> M
    end
```
> **File PlantUML:** [act_02_kelola_pengguna.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_02_kelola_pengguna.puml)

---

### 3.3 ACTIVITY DIAGRAM KELOLA DATA KARYAWAN (GAMBAR 3.5)
* **Use Case Terkait:** UC-03 Kelola Data Karyawan
* **Aktor:** Admin
* **Deskripsi:** Admin mendaftarkan manpower cleaning service, memperbarui penempatan gedung/area kerja, atau menghapus/menonaktifkan data karyawan.

```mermaid
flowchart TD
    subgraph Admin["Admin"]
        A([Mulai]) --> B[Memilih menu Kelola Data Karyawan]
        D[Memilih aksi: Tambah Baru, Ubah Profil/Area, atau Hapus]
        F[Mengisi form biodata karyawan & memilih area penempatan]
        F --> G[Menekan tombol Simpan]
        K[Melihat daftar karyawan terbaru] --> L([Selesai])
        M[Melihat pesan kesalahan input] --> N([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C[Menampilkan tabel data karyawan & area penempatan]
        C --> D
        D --> E[Menampilkan formulir isian karyawan & opsi area]
        E --> F
        G --> H[Memvalidasi format data & keunikan NIK]
        H --> I{Data valid?}
        I -- Ya --> J[Menyimpan data profil karyawan ke database]
        J --> O[Menampilkan notifikasi sukses & memuat ulang data]
        O --> K
        I -- Tidak --> M
    end
```
> **File PlantUML:** [act_03_kelola_karyawan.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_03_kelola_karyawan.puml)

---

### 3.4 ACTIVITY DIAGRAM KELOLA DATA MASTER (AREA, ETIKA, ALAT KERJA, SOP) (GAMBAR 3.6)
* **Use Case Terkait:** UC-04 Kelola Data Master
* **Aktor:** Admin
* **Deskripsi:** Admin memelihara data referensi master: area penempatan (gedung PEMDA), 10 indikator etika kerja, mesin/peralatan kerja, dan SOP pembersihan.

```mermaid
flowchart TD
    subgraph Admin["Admin"]
        A([Mulai]) --> B[Memilih menu Kelola Data Master]
        C[Memilih tab kategori: Area / Etika / Alat / SOP]
        E[Memilih aksi: Tambah Item, Edit, atau Hapus Item]
        G[Mengisi formulir detail item master]
        G --> H[Menekan tombol Simpan]
        L[Melihat daftar data master terbaru] --> M([Selesai])
        N[Melihat pesan kesalahan validasi] --> P([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C
        C --> D[Menampilkan daftar item sesuai kategori yang dipilih]
        D --> E
        E --> F[Menampilkan modal form isian master item]
        F --> G
        H --> I[Memvalidasi format & keunikan data master]
        I --> J{Data valid?}
        J -- Ya --> K[Menyimpan perubahan ke tabel master di basis data]
        K --> Q[Menampilkan notifikasi sukses & me-refresh tabel]
        Q --> L
        J -- Tidak --> N
    end
```
> **File PlantUML:** [act_04_kelola_master.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_04_kelola_master.puml)

---

### 3.5 ACTIVITY DIAGRAM KELOLA SKALA, BOBOT, DAN KATEGORI NILAI (GAMBAR 3.7)
* **Use Case Terkait:** UC-05 Kelola Skala, Bobot, & Kategori Nilai
* **Aktor:** Admin
* **Deskripsi:** Mengatur bobot persentase evaluasi (Etika 30%, Alat 35%, SOP 35%), skala nilai huruf/angka, dan ambang batas predikat kualitatif.

```mermaid
flowchart TD
    subgraph Admin["Admin"]
        A([Mulai]) --> B[Memilih menu Kelola Skala, Bobot & Kategori]
        D[Mengubah persentase bobot bagian atau rentang predikat]
        D --> E[Menekan tombol Simpan Perubahan]
        I[Melihat konfigurasi baru aktif] --> J([Selesai])
        K[Melihat peringatan: Total bobot harus 100%] --> L([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C[Menampilkan pengaturan bobot saat ini & ambang predikat]
        C --> D
        E --> F[Memvalidasi total akumulasi bobot bagian]
        F --> G{Total bobot = 100%?}
        G -- Ya --> H[Menyimpan konfigurasi bobot & predikat ke database]
        H --> M[Menampilkan notifikasi konfigurasi berhasil diperbarui]
        M --> I
        G -- Tidak --> K
    end
```
> **File PlantUML:** [act_05_kelola_skala_bobot.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_05_kelola_skala_bobot.puml)

---

### 3.6 ACTIVITY DIAGRAM KELOLA PERIODE PENILAIAN (GAMBAR 3.8)
* **Use Case Terkait:** UC-06 Kelola Periode Penilaian
* **Aktor:** Admin
* **Deskripsi:** Admin membuka periode evaluasi bulanan yang baru, mengatur rentang waktu penilaian, atau menutup periode yang telah selesai.

```mermaid
flowchart TD
    subgraph Admin["Admin"]
        A([Mulai]) --> B[Memilih menu Kelola Periode Penilaian]
        D[Memilih aksi: Buka Periode Baru, Ubah Jadwal, atau Tutup Periode]
        F[Mengisi nama periode, batas tanggal, dan status aktif]
        F --> G[Menekan tombol Simpan]
        K[Melihat status periode terbaru] --> L([Selesai])
        M[Melihat pesan kesalahan validasi periode] --> N([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C[Menampilkan tabel histori & status periode penilaian]
        C --> D
        D --> E[Menampilkan modal formulir pengaturan periode]
        E --> F
        G --> H[Memvalidasi aturan periode aktif tunggal & rentang tanggal]
        H --> I{Validasi terpenuhi?}
        I -- Ya --> J[Menyimpan status periode ke basis data]
        J --> O[Menampilkan notifikasi sukses & refresh data]
        O --> K
        I -- Tidak --> M
    end
```
> **File PlantUML:** [act_06_kelola_periode.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_06_kelola_periode.puml)

---

### 3.7 ACTIVITY DIAGRAM INPUT PENILAIAN KINERJA (GAMBAR 3.9)
* **Use Case Terkait:** UC-07 Input Penilaian Kinerja
* **Aktor:** Supervisor (SPV)
* **Deskripsi:** SPV mengisi skor instrumen penilaian 3 aspek (Etika, Alat, SOP) beserta catatan rekomendasi atasan, kemudian menyimpannya sebagai DRAFT.

```mermaid
flowchart TD
    subgraph SPV["Supervisor (SPV)"]
        A([Mulai]) --> B[Memilih menu Input Penilaian Kinerja]
        D[Memilih karyawan yang akan dievaluasi]
        F[Mengisi skor instrumen Etika Kerja - 10 Aspek]
        F --> G[Mengisi skor instrumen Pengetahuan Alat Kerja]
        G --> H[Mengisi skor instrumen Penerapan SOP]
        H --> I[Mengisi catatan tanggapan & rekomendasi atasan]
        I --> J[Menekan tombol Simpan Draft Penilaian]
        P[Melihat formulir tersimpan berstatus DRAFT] --> Q([Selesai])
        R[Melihat peringatan: Seluruh butir kriteria wajib diisi] --> S([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C[Menampilkan daftar karyawan binaan & periode aktif]
        C --> D
        D --> E[Menampilkan formulir instrumen evaluasi 3 bagian]
        E --> F
        J --> K[Memeriksa kelengkapan seluruh butir evaluasi]
        K --> L{Semua butir terisi?}
        L -- Ya --> M["Memanggil Use Case <<include>>: Hitung Nilai Otomatis"]
        M --> N[Menyimpan data penilaian ke database status DRAFT]
        N --> O[Menampilkan notifikasi draft berhasil disimpan]
        O --> P
        L -- Tidak --> R
    end
```
> **File PlantUML:** [act_07_input_penilaian.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_07_input_penilaian.puml)

---

### 3.8 ACTIVITY DIAGRAM HITUNG NILAI OTOMATIS (INCLUDE) (GAMBAR 3.10)
* **Use Case Terkait:** UC-08 Hitung Nilai Otomatis (Relasi `<<include>>` dari UC-07)
* **Aktor:** Sistem (Modul Perhitungan Penilaian)
* **Deskripsi:** Sub-alur yang otomatis dieksekusi saat data penilaian disimpan untuk menghitung rata-rata bagian, mengalikan bobot tertimbang, dan memetakan predikat kualitatif.

```mermaid
flowchart TD
    subgraph Sistem["Sistem (Modul Perhitungan Penilaian)"]
        A([Mulai: Dipanggil oleh Form Penilaian]) --> B[Menerima input skor Etika, Alat, dan SOP]
        B --> C[Mengambil parameter bobot dari tabel konfigurasi]
        C --> D[Menghitung rata-rata skor per bagian]
        D --> E["Menghitung Nilai Akhir Tertimbang:\n(Etika x 30%) + (Alat x 35%) + (SOP x 35%)"]
        E --> F[Mencocokkan Nilai Akhir ke tabel ambang predikat kualitatif]
        F --> G[Menetapkan kategori nilai: Sangat Baik / Baik / Cukup / Kurang]
        G --> H[Menyimpan hasil kalkulasi ke record penilaian]
        H --> I[Mengembalikan nilai kalkulasi ke antarmuka formulir]
        I --> J([Selesai])
    end
```
> **File PlantUML:** [act_08_hitung_nilai_otomatis.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_08_hitung_nilai_otomatis.puml)

---

### 3.9 ACTIVITY DIAGRAM FINALISASI PENILAIAN (GAMBAR 3.11)
* **Use Case Terkait:** UC-09 Finalisasi Penilaian
* **Aktor:** Supervisor (SPV)
* **Deskripsi:** Mengunci data penilaian dari status DRAFT menjadi FINAL sehingga nilai sah, terkunci dari manipulasi, dan otomatis dipublikasikan ke karyawan terkait.

```mermaid
flowchart TD
    subgraph SPV["Supervisor (SPV)"]
        A([Mulai]) --> B[Membuka daftar lembar penilaian berstatus DRAFT]
        B --> C[Memeriksa rangkuman nilai & rekomendasi atasan]
        C --> D[Menekan tombol Finalisasi Penilaian]
        F[Mengonfirmasi dialog: Ya, Finalisasi]
        K[Melihat status penilaian telah resmi berstatus FINAL] --> L([Selesai])
        M[Melihat pesan penolakan finalisasi] --> N([Selesai])
    end

    subgraph Sistem["Sistem"]
        D --> E[Menampilkan dialog konfirmasi penguncian nilai]
        E --> F
        F --> G[Memvalidasi kelengkapan data & rekomendasi atasan]
        G --> H{Data lengkap & valid?}
        H -- Ya --> I[Mengubah status record dari DRAFT menjadi FINAL]
        I --> J[Mengunci formulir penilaian & timestamp penguncian]
        J --> O[Mengaktifkan izin publikasi nilai ke akun karyawan]
        O --> P[Menampilkan notifikasi sukses finalisasi]
        P --> K
        H -- Tidak --> M
    end
```
> **File PlantUML:** [act_09_finalisasi_penilaian.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_09_finalisasi_penilaian.puml)

---

### 3.10 ACTIVITY DIAGRAM LIHAT REKAP DAN LAPORAN PENILAIAN (GAMBAR 3.12)
* **Use Case Terkait:** UC-10 Lihat Rekap & Laporan Penilaian
* **Aktor:** Admin / Supervisor (SPV)
* **Deskripsi:** Pengguna menyaring data nilai berdasarkan periode, gedung/area, dan kategori skor untuk memantau rekapitulasi performa seluruh manpower.

```mermaid
flowchart TD
    subgraph Pengguna["Admin / Supervisor (SPV)"]
        A([Mulai]) --> B[Memilih menu Rekap dan Laporan Penilaian]
        D[Memilih filter: Periode, Gedung/Area, Kategori Nilai]
        D --> E[Menekan tombol Tampilkan Rekap]
        I[Melihat tabel rekap nilai & diagram statistik performa] --> J([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C[Menampilkan antarmuka formulir filter penyaringan]
        C --> D
        E --> F[Melakukan kueri data penilaian berstatus FINAL sesuai filter]
        F --> G[Menghitung agregasi rata-rata & sebaran kategori]
        G --> H[Menampilkan tabel rekapitulasi nilai dan grafik ringkasan]
        H --> I
    end
```
> **File PlantUML:** [act_10_rekap_laporan.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_10_rekap_laporan.puml)

---

### 3.11 ACTIVITY DIAGRAM CETAK / EKSPOR LAPORAN (EXTEND) (GAMBAR 3.13)
* **Use Case Terkait:** UC-11 Cetak / Ekspor Laporan (Relasi `<<extend>>` dari UC-10)
* **Aktor:** Admin / Supervisor (SPV)
* **Deskripsi:** Mengunduh berkas laporan hasil penilaian kinerja karyawan ke dalam format PDF resmi ber-kop perusahaan atau lembar kerja Excel.

```mermaid
flowchart TD
    subgraph Pengguna["Admin / Supervisor (SPV)"]
        A([Mulai: Berada di Halaman Rekap Penilaian]) --> B[Menekan tombol Cetak / Ekspor Laporan]
        D[Memilih format dokumen yang diinginkan: PDF atau Excel]
        D --> E[Menekan tombol Unduh Dokumen]
        K[Menerima & menyimpan berkas laporan di perangkat] --> L([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C[Menampilkan modal pilihan format dokumen]
        C --> D
        E --> F{Format dipilih?}
        F -- PDF --> G[Menyusun template laporan ber-kop resmi ISS & tanda tangan]
        G --> I[Mengonversi dan merender dokumen ke format PDF]
        F -- Excel --> H[Menyusun lembar kerja spreadsheet data rekapitulasi]
        H --> I
        I --> J[Mengirimkan stream file laporan ke browser pengguna]
        J --> K
    end
```
> **File PlantUML:** [act_11_cetak_ekspor_laporan.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_11_cetak_ekspor_laporan.puml)

---

### 3.12 ACTIVITY DIAGRAM LIHAT HASIL PENILAIAN (GAMBAR 3.14)
* **Use Case Terkait:** UC-12 Lihat Hasil Penilaian
* **Aktor:** Karyawan
* **Deskripsi:** Karyawan melihat lembar evaluasi hasil kinerja miliknya sendiri yang berstatus FINAL beserta catatan pembinaan dan rekomendasi supervisor.

```mermaid
flowchart TD
    subgraph Karyawan["Karyawan (Cleaning Service)"]
        A([Mulai]) --> B[Memilih menu Hasil Penilaian Saya]
        D[Memilih periode evaluasi yang ingin diperiksa]
        F[Membaca scorecard nilai & rekomendasi pengembangan dari atasan] --> G([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C[Mengambil histori periode penilaian berstatus FINAL bagi karyawan login]
        C --> D
        D --> E[Mengambil rincian skor 3 bagian, nilai akhir, predikat & catatan SPV]
        E --> F
    end
```
> **File PlantUML:** [act_12_lihat_hasil_penilaian.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_12_lihat_hasil_penilaian.puml)

---

### 3.13 ACTIVITY DIAGRAM BERI TANGGAPAN (FEEDBACK) (EXTEND) (GAMBAR 3.15)
* **Use Case Terkait:** UC-13 Beri Tanggapan (Feedback) (Relasi `<<extend>>` dari UC-12)
* **Aktor:** Karyawan
* **Deskripsi:** Karyawan memberikan respon tertulis atau klarifikasi resmi atas hasil penilaian yang diterimanya, tersimpan secara permanen pada sistem.

```mermaid
flowchart TD
    subgraph Karyawan["Karyawan (Cleaning Service)"]
        A([Mulai: Berada di Lembar Hasil Penilaian]) --> B[Menekan tombol Beri Tanggapan / Feedback]
        D[Menulis teks respon / klarifikasi hasil kerja]
        D --> E[Menekan tombol Kirim Tanggapan]
        K[Melihat status tanggapan telah berhasil disimpan & terverifikasi] --> L([Selesai])
        M[Melihat pesan peringatan: Kolom tanggapan tidak boleh kosong] --> N([Selesai])
    end

    subgraph Sistem["Sistem"]
        B --> C[Menampilkan formulir modal isian komentar tanggapan karyawan]
        C --> D
        E --> F[Memvalidasi isi teks tanggapan]
        F --> G{Teks tanggapan valid?}
        G -- Ya --> H[Menyimpan tanggapan & waktu respon ke record penilaian di database]
        H --> I[Mengunci kolom feedback agar tidak dapat dimanipulasi]
        I --> J[Menampilkan notifikasi sukses & memperbarui tampilan lembar nilai]
        J --> K
        G -- Tidak --> M
    end
```
> **File PlantUML:** [act_13_beri_tanggapan_feedback.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/act_13_beri_tanggapan_feedback.puml)

---

---

## 4. CLASS DIAGRAM (GAMBAR 3.8)

### 4.1 DIAGRAM STRUKTUR KELAS
```mermaid
classDiagram
    class Pengguna {
        -int idPengguna
        -String username
        -String password
        -String namaLengkap
        -String role
        -String status
        +login() boolean
        +logout() void
        +ubahPassword() boolean
    }

    class Admin {
        +kelolaPengguna() void
        +kelolaKaryawan() void
        +kelolaDataMaster() void
        +kelolaSkalaBobotKategori() void
        +kelolaPeriode() void
        +lihatRekap() List
        +cetakLaporan() File
    }

    class Supervisor {
        +inputPenilaian() boolean
        +finalisasiPenilaian() boolean
        +lihatRekap() List
        +cetakLaporan() File
    }

    class Karyawan {
        -int idKaryawan
        -String nomorEmployee
        -String jabatan
        -Date tanggalBergabung
        -String statusKerja
        +lihatHasilPenilaian() Penilaian
        +beriTanggapan() boolean
    }

    Pengguna <|-- Admin
    Pengguna <|-- Supervisor
    Pengguna <|-- Karyawan

    class Area {
        -int idArea
        -String namaArea
        -String lokasi
        +simpan() boolean
        +ubah() boolean
        +hapus() boolean
    }

    class Periode {
        -int idPeriode
        -String namaPeriode
        -Date tanggalMulai
        -Date tanggalSelesai
        -String status
        +aktifkan() boolean
        +tutup() boolean
    }

    class KategoriNilai {
        -int idKategori
        -String namaKategori
        -float nilaiMin
        -float nilaiMaks
        -String tindakLanjut
        +simpan() boolean
        +ubah() boolean
    }

    class BobotBagian {
        -int idBobot
        -String bagian
        -float bobot
        +simpan() boolean
        +ubah() boolean
    }

    class SkalaNilai {
        -int idSkala
        -String kelompok
        -String kode
        -String keterangan
        -int skor
        +simpan() boolean
        +ubah() boolean
    }

    class AspekEtika {
        -int idAspek
        -String namaAspek
        -String deskripsi
        -int urutan
        +simpan() boolean
        +ubah() boolean
    }

    class AlatKerja {
        -int idAlat
        -String namaAlat
        +simpan() boolean
        +ubah() boolean
    }

    class SOP {
        -int idSop
        -String namaSop
        +simpan() boolean
        +ubah() boolean
    }

    class Penilaian {
        -int idPenilaian
        -Date tanggalPenilaian
        -float nilaiEtika
        -float nilaiAlat
        -float nilaiSop
        -float nilaiAkhir
        -String tanggapanAtasan
        -String rekomendasiAtasan
        -String status
        +hitungNilai() float
        +tentukanKategori() KategoriNilai
        +simpanDraft() boolean
        +finalisasi() boolean
    }

    class DetailEtika {
        -int idDetailEtika
    }

    class DetailAlat {
        -int idDetailAlat
        -String komponen
        -String keterangan
    }

    class DetailSOP {
        -int idDetailSop
        -String keterangan
    }

    class TanggapanKaryawan {
        -int idTanggapan
        -String isiTanggapan
        -Date tanggalTanggapan
        +simpan() boolean
    }

    Area "1" -- "0..*" Karyawan : ditempatkan di >
    Supervisor "1" -- "0..*" Penilaian : menilai >
    Karyawan "1" -- "0..*" Penilaian : dinilai >
    Periode "1" -- "0..*" Penilaian : siklus >
    KategoriNilai "1" <.. "0..*" Penilaian : digunakan >
    BobotBagian ..> Penilaian : referensi bobot

    Penilaian "1" *-- "1..*" DetailEtika
    Penilaian "1" *-- "1..*" DetailAlat
    Penilaian "1" *-- "1..*" DetailSOP
    Penilaian "1" *-- "0..1" TanggapanKaryawan

    AspekEtika "1" -- "0..*" DetailEtika
    AlatKerja "1" -- "0..*" DetailAlat
    SOP "1" -- "0..*" DetailSOP

    SkalaNilai "1" -- "0..*" DetailEtika
    SkalaNilai "1" -- "0..*" DetailAlat
    SkalaNilai "1" -- "0..*" DetailSOP
```
> **File PlantUML:** [08_class_diagram.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/08_class_diagram.puml)

---

## 5. ENTITY RELATIONSHIP DIAGRAM / ERD (GAMBAR 3.9)

### 5.1 DIAGRAM RELASI ENTITAS (CROW'S FOOT NOTATION)
```mermaid
erDiagram
    pengguna ||--o| karyawan : "memiliki akun"
    area ||--o{ karyawan : "menempatkan"
    karyawan ||--o{ penilaian : "dinilai"
    pengguna ||--o{ penilaian : "menilai (id_penilai)"
    periode ||--o{ penilaian : "siklus periode"
    kategori_nilai ||--o{ penilaian : "klasifikasi hasil"

    penilaian ||--|{ detail_etika : "memiliki rincian"
    penilaian ||--|{ detail_alat : "memiliki rincian"
    penilaian ||--|{ detail_sop : "memiliki rincian"
    penilaian ||--o| tanggapan_karyawan : "memiliki tanggapan"

    aspek_etika ||--o{ detail_etika : "aspek dinilai"
    skala_nilai ||--o{ detail_etika : "skor skala"
    alat_kerja ||--o{ detail_alat : "alat dinilai"
    skala_nilai ||--o{ detail_alat : "skor skala"
    sop ||--o{ detail_sop : "sop dinilai"
    skala_nilai ||--o{ detail_sop : "skor skala"

    pengguna {
        int id_pengguna PK
        varchar username
        varchar password
        varchar nama_lengkap
        enum role
        enum status
    }

    area {
        int id_area PK
        varchar nama_area
        varchar lokasi
    }

    karyawan {
        int id_karyawan PK
        int id_pengguna FK
        int id_area FK
        varchar nomor_employee
        varchar jabatan
        date tanggal_bergabung
        enum status_kerja
    }

    periode {
        int id_periode PK
        varchar nama_periode
        date tanggal_mulai
        date tanggal_selesai
        enum status
    }

    kategori_nilai {
        int id_kategori PK
        varchar nama_kategori
        decimal nilai_min
        decimal nilai_maks
        varchar tindak_lanjut
    }

    penilaian {
        int id_penilaian PK
        int id_karyawan FK
        int id_periode FK
        int id_penilai FK
        int id_kategori FK
        date tanggal_penilaian
        decimal nilai_etika
        decimal nilai_alat
        decimal nilai_sop
        decimal nilai_akhir
        text tanggapan_atasan
        text rekomendasi_atasan
        enum status
    }

    detail_etika {
        int id_detail_etika PK
        int id_penilaian FK
        int id_aspek FK
        int id_skala FK
    }

    detail_alat {
        int id_detail_alat PK
        int id_penilaian FK
        int id_alat FK
        int id_skala FK
        enum komponen
        varchar keterangan
    }

    detail_sop {
        int id_detail_sop PK
        int id_penilaian FK
        int id_sop FK
        int id_skala FK
        varchar keterangan
    }

    tanggapan_karyawan {
        int id_tanggapan PK
        int id_penilaian FK
        text isi_tanggapan
        datetime tanggal_tanggapan
    }
```
> **File DDL SQL untuk EA:** [schema_erd_enterprise_architect.sql](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/schema_erd_enterprise_architect.sql)  
> **File PlantUML:** [09_erd_database.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/09_erd_database.puml)

---

## 6. SEQUENCE DIAGRAM

### 6.1 SEQUENCE DIAGRAM LOGIN (GAMBAR 3.10)
```mermaid
sequenceDiagram
    autonumber
    actor Pengguna as Pengguna
    participant View as Halaman (View)
    participant Ctrl as Controller
    participant Model as Model
    participant DB as Database (MySQL)

    Pengguna->>View: Mengisi username dan password
    View->>Ctrl: login(username, password)
    Ctrl->>Model: cariPengguna(username)
    Model->>DB: SELECT * FROM pengguna WHERE username = ?
    DB-->>Model: data record pengguna
    Model-->>Ctrl: data record pengguna
    Note over Ctrl: Verifikasi kecocokan hash password

    alt Password Cocok
        Ctrl-->>View: redirect dashboard sesuai role
        View-->>Pengguna: Menampilkan dashboard
    else Password Salah
        Ctrl-->>View: pesan error autentikasi
        View-->>Pengguna: Menampilkan pesan login gagal
    end
```
> **File PlantUML:** [10_sequence_login.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/10_sequence_login.puml)

---

### 6.2 SEQUENCE DIAGRAM KELOLA DATA KARYAWAN (GAMBAR 3.11)
```mermaid
sequenceDiagram
    autonumber
    actor Admin as Admin
    participant View as Halaman (View)
    participant Ctrl as Controller
    participant Model as Model
    participant DB as Database (MySQL)

    Admin->>View: Memilih menu Data Karyawan
    View->>Ctrl: index()
    Ctrl->>Model: ambilSemuaKaryawan()
    Model->>DB: SELECT karyawan JOIN pengguna, area
    DB-->>Model: data daftar karyawan
    Model-->>Ctrl: data daftar karyawan
    Ctrl-->>View: render tabel karyawan
    View-->>Admin: Menampilkan daftar karyawan

    Admin->>View: Mengisi form data baru lalu Simpan
    View->>Ctrl: simpan(data)
    Note over Ctrl: Validasi format data & integritas

    alt Data Valid
        Ctrl->>Model: buatAkun() & simpanKaryawan()
        Model->>DB: INSERT INTO pengguna; INSERT INTO karyawan;
        DB-->>Model: status berhasil
        Model-->>Ctrl: status berhasil
        Ctrl-->>View: pesan sukses data tersimpan
        View-->>Admin: Menampilkan daftar terbaru
    else Data Tidak Valid
        Ctrl-->>View: pesan validasi error
        View-->>Admin: Menampilkan pesan perbaikan
    end
```
> **File PlantUML:** [11_sequence_kelola_karyawan.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/11_sequence_kelola_karyawan.puml)

---

### 6.3 SEQUENCE DIAGRAM INPUT PENILAIAN KINERJA (GAMBAR 3.12)
```mermaid
sequenceDiagram
    autonumber
    actor SPV as Supervisor (SPV)
    participant View as Halaman (View)
    participant Ctrl as Controller
    participant Model as Model
    participant DB as Database (MySQL)

    SPV->>View: Memilih karyawan dan periode aktif
    View->>Ctrl: formPenilaian(idKaryawan, idPeriode)
    Ctrl->>Model: ambilDataMaster()
    Model->>DB: SELECT aspek_etika, alat_kerja, sop, skala_nilai
    DB-->>Model: master form data
    Model-->>Ctrl: master form data
    Ctrl-->>View: render formulir 3 bagian
    View-->>SPV: Menampilkan form evaluasi digital

    SPV->>View: Mengisi checklist skor & catatan saran, klik Simpan
    View->>Ctrl: simpan(data)
    Note over Ctrl: Validasi kelengkapan isian

    alt Isian Lengkap
        Note over Ctrl: hitungNilai(), tentukanKategori()
        Ctrl->>Model: simpanDraft(penilaian, detail)
        Model->>DB: INSERT INTO penilaian (status='draft'), detail_etika, detail_alat, detail_sop
        DB-->>Model: status berhasil
        Model-->>Ctrl: nilai akhir & kategori
        Ctrl-->>View: hasil penilaian (status draft)
        View-->>SPV: Menampilkan nilai & kategori sementara
    else Isian Belum Lengkap
        Ctrl-->>View: notifikasi field wajib diisi
        View-->>SPV: Menampilkan pesan kesalahan
    end
```
> **File PlantUML:** [12_sequence_input_penilaian.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/12_sequence_input_penilaian.puml)

---

### 6.4 SEQUENCE DIAGRAM FINALISASI PENILAIAN (GAMBAR 3.13)
```mermaid
sequenceDiagram
    autonumber
    actor SPV as Supervisor (SPV)
    participant View as Halaman (View)
    participant Ctrl as Controller
    participant Model as Model
    participant DB as Database (MySQL)

    SPV->>View: Menekan tombol Finalisasi Penilaian
    View->>Ctrl: finalisasi(idPenilaian)
    Ctrl->>Model: ubahStatus("final")
    Model->>DB: UPDATE penilaian SET status = 'final' WHERE id_penilaian = ?
    DB-->>Model: status berhasil diubah
    Model-->>Ctrl: status berhasil
    Ctrl-->>View: status final (terkunci)
    View-->>SPV: Menampilkan konfirmasi penilaian terkunci resmi
```
> **File PlantUML:** [13_sequence_finalisasi_penilaian.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/13_sequence_finalisasi_penilaian.puml)

---

### 6.5 SEQUENCE DIAGRAM LIHAT HASIL & BERI TANGGAPAN (GAMBAR 3.14)
```mermaid
sequenceDiagram
    autonumber
    actor Karyawan as Karyawan
    participant View as Halaman (View)
    participant Ctrl as Controller
    participant Model as Model
    participant DB as Database (MySQL)

    Karyawan->>View: Memilih periode penilaian
    View->>Ctrl: lihatHasil(idPenilaian)
    Ctrl->>Model: ambilHasil(idPenilaian, idKaryawan)
    Model->>DB: SELECT * FROM penilaian WHERE id_karyawan = ? AND status = 'final'
    DB-->>Model: data penilaian final
    Model-->>Ctrl: data penilaian final
    Ctrl-->>View: halaman hasil evaluasi
    View-->>Karyawan: Menampilkan rincian nilai & rekomendasi atasan

    Karyawan->>View: Menuliskan tanggapan/klarifikasi lalu klik Kirim
    View->>Ctrl: simpanTanggapan(idPenilaian, isiTanggapan)
    Note over Ctrl: Validasi panjang & keabsahan karakter

    alt Tanggapan Terisi
        Ctrl->>Model: simpan(tanggapan)
        Model->>DB: INSERT INTO tanggapan_karyawan (id_penilaian, isi_tanggapan)
        DB-->>Model: status berhasil
        Model-->>Ctrl: status berhasil
        Ctrl-->>View: pesan sukses tanggapan terkirim
        View-->>Karyawan: Menampilkan teks tanggapan pada dokumen nilai
    else Tanggapan Kosong
        Ctrl-->>View: peringatan teks tanggapan tidak boleh kosong
        View-->>Karyawan: Menampilkan pesan kesalahan
    end
```
> **File PlantUML:** [14_sequence_lihat_hasil_feedback.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/14_sequence_lihat_hasil_feedback.puml)

---

### 6.6 SEQUENCE DIAGRAM REKAP & CETAK LAPORAN (GAMBAR 3.15)
```mermaid
sequenceDiagram
    autonumber
    actor User as Admin / SPV
    participant View as Halaman (View)
    participant Ctrl as Controller
    participant Model as Model
    participant DB as Database (MySQL)

    User->>View: Menentukan filter (periode, gedung, kategori)
    View->>Ctrl: rekap(filter)
    Ctrl->>Model: ambilRekap(filter)
    Model->>DB: SELECT penilaian JOIN karyawan, periode, kategori_nilai WHERE filter
    DB-->>Model: data agregasi rekap
    Model-->>Ctrl: data agregasi rekap
    Ctrl-->>View: tabel hasil filter rekap
    View-->>User: Menampilkan rekapitulasi nilai

    User->>View: Menekan tombol Cetak / Ekspor (PDF/Excel)
    View->>Ctrl: ekspor(format, filter)
    Note over Ctrl: Merender berkas laporan PDF / Spreadsheet
    Ctrl-->>View: tautan berkas dokumen laporan
    View-->>User: Mengunduh file laporan
```
> **File PlantUML:** [15_sequence_rekap_cetak_laporan.puml](file:///c:/Users/lenov/.gemini/antigravity-ide/scratch/dfd-pt-iss/plantuml/15_sequence_rekap_cetak_laporan.puml)

---

## 7. PANDUAN INTEGRASI & PENGGUNAAN DI ENTERPRISE ARCHITECT (EA)

Untuk membuka dan mengedit langsung rancangan ini di aplikasi **Enterprise Architect (Sparx Systems)**:

### Cara 1: Menggunakan XMI 2.1 File (Sangat Direkomendasikan)
1. Buka Enterprise Architect, buat atau buka project repository Anda.
2. Pada panel **Project Browser**, klik kanan pada package root (misal `Model`).
3. Pilih menu **Import/Export** &rarr; **Import Package from XMI File...** (atau tekan shortcut `Ctrl + Alt + I`).
4. Klik **Browse** dan arahkan ke file:
   `c:\Users\lenov\.gemini\antigravity-ide\scratch\dfd-pt-iss\enterprise_architect_model.xmi`
5. Klik **Import**.
6. **Hasil:** Enterprise Architect akan otomatis membentuk paket:
   - `01 Use Case Model` (Lengkap dengan 3 Aktor dan 17 Use Case + relasi include/extend)
   - `02 Class Model` (Lengkap dengan 17 Kelas, atribut tipe data, method visibilitas, inheritance, dan kardinalitas)
   - `03 Activity Model` (Alur aktivitas kerja)
   - `04 Sequence Model` (Kolaborasi interaksi, Lifeline, dan Message)
   - `05 Data Model (ERD)` (Tabel entitas data relasional)

### Cara 2: Menghasilkan ERD Lengkap via DDL SQL di Enterprise Architect
1. Di Enterprise Architect, buka ribbon tab **Develop** &rarr; **Data Modeling**.
2. Klik tombol **Import DB Schema from SQL DDL**.
3. Pilih Database Type: **MySQL**.
4. Pilih file:
   `c:\Users\lenov\.gemini\antigravity-ide\scratch\dfd-pt-iss\schema_erd_enterprise_architect.sql`
5. Centang *Prompt on duplicate table* & klik **Import**.
6. EA akan merender seluruh tabel, relasi Foreign Key, Primary Key, dan tipe data kolom ke diagram Data Modeling EA.

---

## 8. ATURAN DAN ASUMSI RANCANGAN

1. **Integritas Penilaian per Periode:** Satu karyawan hanya memiliki **1 (satu)** catatan penilaian pada satu periode evaluasi (kombinasi `id_karyawan` dan `id_periode` bersifat unik / `UNIQUE constraint`).
2. **Siklus Status Draft dan Final:** Penilaian yang baru diinput SPV berstatus `draft`. Karyawan hanya diperbolehkan melihat penilaian jika statusnya sudah diubah menjadi `final` oleh SPV. Setelah berstatus `final`, data penilaian terkunci dan tidak dapat disunting kembali oleh SPV demi integritas nilai.
3. **Klarifikasi Karyawan (Feedback):** Satu penilaian hanya memiliki 1 catatan tanggapan karyawan, merefleksikan kolom tanda tangan dan kolom tanggapan pada lembar kertas Evaluasi Berkala PT ISS.
4. **Fleksibilitas Bobot & Skala:** Pembobotan persentase (Etika 30%, Alat 35%, SOP 35%) dan ambang batas predikat disimpan dalam tabel konfigurasi (`bobot_bagian`, `skala_nilai`, `kategori_nilai`) agar dapat disesuaikan kebijakan manajemen ISS tanpa merubah struktur kode program.
5. **Dekomposisi Penilaian Alat:** Tabel `detail_alat` mencatat penilaian per mesin per 3 komponen utama (Fungsi, Penggunaan, dan Perawatan) sesuai lembar evaluasi operasional ISS di lingkungan PEMDA Tangsel.
