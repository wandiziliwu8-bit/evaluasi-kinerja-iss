-- =====================================================================
-- PERANCANGAN BASIS DATA (ERD) - DDL SQL UNTUK ENTERPRISE ARCHITECT
-- Sistem Informasi Penilaian Kinerja Karyawan Cleaning Service Berbasis Web
-- PT ISS Indonesia Area Pemerintah Kota Tangerang Selatan
-- =====================================================================
-- File ini dapat diimpor langsung ke Enterprise Architect melalui menu:
-- Develop -> Data Modeling -> Import DB Schema from SQL DDL
-- atau Database Builder -> Import DDL
-- =====================================================================

DROP TABLE IF EXISTS tanggapan_karyawan;
DROP TABLE IF EXISTS detail_sop;
DROP TABLE IF EXISTS detail_alat;
DROP TABLE IF EXISTS detail_etika;
DROP TABLE IF EXISTS penilaian;
DROP TABLE IF EXISTS sop;
DROP TABLE IF EXISTS alat_kerja;
DROP TABLE IF EXISTS aspek_etika;
DROP TABLE IF EXISTS skala_nilai;
DROP TABLE IF EXISTS bobot_bagian;
DROP TABLE IF EXISTS kategori_nilai;
DROP TABLE IF EXISTS periode;
DROP TABLE IF EXISTS karyawan;
DROP TABLE IF EXISTS area;
DROP TABLE IF EXISTS pengguna;

-- 1. TABEL PENGGUNA (Akun Login & Hak Akses)
CREATE TABLE pengguna (
    id_pengguna INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nama_lengkap VARCHAR(100) NOT NULL,
    role ENUM('admin', 'supervisor', 'karyawan') NOT NULL,
    status ENUM('aktif', 'nonaktif') DEFAULT 'aktif' NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_pengguna PRIMARY KEY (id_pengguna)
) ENGINE=InnoDB COMMENT='Tabel akun pengguna sistem (Admin, SPV, Karyawan)';

-- 2. TABEL AREA (Lokasi Penempatan Kerja di PEMDA Tangsel)
CREATE TABLE area (
    id_area INT AUTO_INCREMENT NOT NULL,
    nama_area VARCHAR(100) NOT NULL,
    lokasi VARCHAR(150) NOT NULL,
    CONSTRAINT pk_area PRIMARY KEY (id_area)
) ENGINE=InnoDB COMMENT='Master area penempatan (contoh: Gedung Walikota Lt 1-4, Gedung Bapenda, dll)';

-- 3. TABEL KARYAWAN (Biodata Manpower Cleaning Service)
CREATE TABLE karyawan (
    id_karyawan INT AUTO_INCREMENT NOT NULL,
    id_pengguna INT NOT NULL UNIQUE,
    id_area INT NOT NULL,
    nomor_employee VARCHAR(20) NOT NULL UNIQUE,
    jabatan VARCHAR(50) DEFAULT 'Cleaner' NOT NULL,
    tanggal_bergabung DATE NOT NULL,
    status_kerja ENUM('pkwt', 'pkwtt', 'magang') DEFAULT 'pkwt' NOT NULL,
    CONSTRAINT pk_karyawan PRIMARY KEY (id_karyawan),
    CONSTRAINT fk_karyawan_pengguna FOREIGN KEY (id_pengguna) REFERENCES pengguna(id_pengguna) ON DELETE CASCADE,
    CONSTRAINT fk_karyawan_area FOREIGN KEY (id_area) REFERENCES area(id_area) ON DELETE RESTRICT
) ENGINE=InnoDB COMMENT='Data karyawan cleaning service PT ISS penempatan Tangsel';

-- 4. TABEL PERIODE (Siklus Periode Penilaian Kinerja)
CREATE TABLE periode (
    id_periode INT AUTO_INCREMENT NOT NULL,
    nama_periode VARCHAR(50) NOT NULL,
    tanggal_mulai DATE NOT NULL,
    tanggal_selesai DATE NOT NULL,
    status ENUM('aktif', 'tutup') DEFAULT 'aktif' NOT NULL,
    CONSTRAINT pk_periode PRIMARY KEY (id_periode)
) ENGINE=InnoDB COMMENT='Master periode evaluasi (contoh: Agustus 2026, Semester II 2026)';

-- 5. TABEL KATEGORI NILAI (Hasil Akhir & Rekomendasi/Tindak Lanjut)
CREATE TABLE kategori_nilai (
    id_kategori INT AUTO_INCREMENT NOT NULL,
    nama_kategori VARCHAR(50) NOT NULL,
    nilai_min DECIMAL(5,2) NOT NULL,
    nilai_maks DECIMAL(5,2) NOT NULL,
    tindak_lanjut VARCHAR(150) NOT NULL,
    CONSTRAINT pk_kategori_nilai PRIMARY KEY (id_kategori)
) ENGINE=InnoDB COMMENT='Rentang kategori nilai akhir (Sangat Baik, Baik, Cukup, Kurang) dan rekomendasi tindak lanjut';

-- 6. TABEL BOBOT BAGIAN (Persentase Kontribusi Tiap Sesi Evaluasi)
CREATE TABLE bobot_bagian (
    id_bobot INT AUTO_INCREMENT NOT NULL,
    bagian ENUM('etika_kerja', 'pengetahuan_alat', 'penerapan_sop') NOT NULL UNIQUE,
    bobot DECIMAL(5,2) NOT NULL,
    CONSTRAINT pk_bobot_bagian PRIMARY KEY (id_bobot)
) ENGINE=InnoDB COMMENT='Bobot persentase tiap bagian formulir (contoh: Etika 30%, Alat 35%, SOP 35%)';

-- 7. TABEL SKALA NILAI (Standar Skor Konversi A/B/C dan Baik/Kurang)
CREATE TABLE skala_nilai (
    id_skala INT AUTO_INCREMENT NOT NULL,
    kelompok ENUM('etika', 'alat_sop') NOT NULL,
    kode CHAR(1) NOT NULL,
    keterangan VARCHAR(50) NOT NULL,
    skor INT NOT NULL,
    CONSTRAINT pk_skala_nilai PRIMARY KEY (id_skala)
) ENGINE=InnoDB COMMENT='Konversi skala penilaian: Etika (A=3/B=2/C=1) dan Alat/SOP (B=Baik/1, K=Kurang/0)';

-- 8. TABEL ASPEK ETIKA (10 Butir Aspek Etika Kerja Sesuai Form Kertas)
CREATE TABLE aspek_etika (
    id_aspek INT AUTO_INCREMENT NOT NULL,
    nama_aspek VARCHAR(100) NOT NULL,
    deskripsi TEXT NULL,
    urutan INT NOT NULL,
    CONSTRAINT pk_aspek_etika PRIMARY KEY (id_aspek)
) ENGINE=InnoDB COMMENT='Master aspek evaluasi etika kerja (Integritas, Kejujuran, Kedisiplinan, dll)';

-- 9. TABEL ALAT KERJA (Master Mesin & Peralatan Cleaning Service)
CREATE TABLE alat_kerja (
    id_alat INT AUTO_INCREMENT NOT NULL,
    nama_alat VARCHAR(100) NOT NULL,
    CONSTRAINT pk_alat_kerja PRIMARY KEY (id_alat)
) ENGINE=InnoDB COMMENT='Master alat kerja (Floor Polisher, Wet & Dry Vacuum, Ride-On Scrubber, dll)';

-- 10. TABEL SOP (Master Standard Operating Procedure Pekerjaan)
CREATE TABLE sop (
    id_sop INT AUTO_INCREMENT NOT NULL,
    nama_sop VARCHAR(100) NOT NULL,
    CONSTRAINT pk_sop PRIMARY KEY (id_sop)
) ENGINE=InnoDB COMMENT='Master SOP pembersihan (Dusting, Mopping, Glass Cleaning, Sanitasi Toilet, dll)';

-- 11. TABEL PENILAIAN (Header Evaluasi Kinerja Karyawan)
CREATE TABLE penilaian (
    id_penilaian INT AUTO_INCREMENT NOT NULL,
    id_karyawan INT NOT NULL,
    id_periode INT NOT NULL,
    id_penilai INT NOT NULL,
    id_kategori INT NULL,
    tanggal_penilaian DATE NOT NULL,
    nilai_etika DECIMAL(5,2) DEFAULT 0.00 NOT NULL,
    nilai_alat DECIMAL(5,2) DEFAULT 0.00 NOT NULL,
    nilai_sop DECIMAL(5,2) DEFAULT 0.00 NOT NULL,
    nilai_akhir DECIMAL(5,2) DEFAULT 0.00 NOT NULL,
    tanggapan_atasan TEXT NULL,
    rekomendasi_atasan TEXT NULL,
    status ENUM('draft', 'final') DEFAULT 'draft' NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_penilaian PRIMARY KEY (id_penilaian),
    CONSTRAINT uq_penilaian_karyawan_periode UNIQUE (id_karyawan, id_periode),
    CONSTRAINT fk_penilaian_karyawan FOREIGN KEY (id_karyawan) REFERENCES karyawan(id_karyawan) ON DELETE RESTRICT,
    CONSTRAINT fk_penilaian_periode FOREIGN KEY (id_periode) REFERENCES periode(id_periode) ON DELETE RESTRICT,
    CONSTRAINT fk_penilaian_penilai FOREIGN KEY (id_penilai) REFERENCES pengguna(id_pengguna) ON DELETE RESTRICT,
    CONSTRAINT fk_penilaian_kategori FOREIGN KEY (id_kategori) REFERENCES kategori_nilai(id_kategori) ON DELETE SET NULL
) ENGINE=InnoDB COMMENT='Tabel utama penilaian kinerja karyawan oleh supervisor';

-- 12. TABEL DETAIL ETIKA (Rincian Skor Tiap Aspek Etika)
CREATE TABLE detail_etika (
    id_detail_etika INT AUTO_INCREMENT NOT NULL,
    id_penilaian INT NOT NULL,
    id_aspek INT NOT NULL,
    id_skala INT NOT NULL,
    CONSTRAINT pk_detail_etika PRIMARY KEY (id_detail_etika),
    CONSTRAINT fk_detail_etika_penilaian FOREIGN KEY (id_penilaian) REFERENCES penilaian(id_penilaian) ON DELETE CASCADE,
    CONSTRAINT fk_detail_etika_aspek FOREIGN KEY (id_aspek) REFERENCES aspek_etika(id_aspek) ON DELETE RESTRICT,
    CONSTRAINT fk_detail_etika_skala FOREIGN KEY (id_skala) REFERENCES skala_nilai(id_skala) ON DELETE RESTRICT
) ENGINE=InnoDB COMMENT='Rincian skor 10 butir aspek etika per penilaian';

-- 13. TABEL DETAIL ALAT (Rincian Evaluasi Pengetahuan & Praktek Alat)
CREATE TABLE detail_alat (
    id_detail_alat INT AUTO_INCREMENT NOT NULL,
    id_penilaian INT NOT NULL,
    id_alat INT NOT NULL,
    id_skala INT NOT NULL,
    komponen ENUM('fungsi', 'penggunaan', 'perawatan') NOT NULL,
    keterangan VARCHAR(150) NULL,
    CONSTRAINT pk_detail_alat PRIMARY KEY (id_detail_alat),
    CONSTRAINT fk_detail_alat_penilaian FOREIGN KEY (id_penilaian) REFERENCES penilaian(id_penilaian) ON DELETE CASCADE,
    CONSTRAINT fk_detail_alat_alat FOREIGN KEY (id_alat) REFERENCES alat_kerja(id_alat) ON DELETE RESTRICT,
    CONSTRAINT fk_detail_alat_skala FOREIGN KEY (id_skala) REFERENCES skala_nilai(id_skala) ON DELETE RESTRICT
) ENGINE=InnoDB COMMENT='Rincian penilaian alat kerja per komponen (fungsi, penggunaan, perawatan)';

-- 14. TABEL DETAIL SOP (Rincian Evaluasi Penerapan Standar Operasional)
CREATE TABLE detail_sop (
    id_detail_sop INT AUTO_INCREMENT NOT NULL,
    id_penilaian INT NOT NULL,
    id_sop INT NOT NULL,
    id_skala INT NOT NULL,
    keterangan VARCHAR(150) NULL,
    CONSTRAINT pk_detail_sop PRIMARY KEY (id_detail_sop),
    CONSTRAINT fk_detail_sop_penilaian FOREIGN KEY (id_penilaian) REFERENCES penilaian(id_penilaian) ON DELETE CASCADE,
    CONSTRAINT fk_detail_sop_sop FOREIGN KEY (id_sop) REFERENCES sop(id_sop) ON DELETE RESTRICT,
    CONSTRAINT fk_detail_sop_skala FOREIGN KEY (id_skala) REFERENCES skala_nilai(id_skala) ON DELETE RESTRICT
) ENGINE=InnoDB COMMENT='Rincian penilaian kepatuhan langkah SOP pembersihan';

-- 15. TABEL TANGGAPAN KARYAWAN (Feedback & Klarifikasi Karyawan atas Nilai Final)
CREATE TABLE tanggapan_karyawan (
    id_tanggapan INT AUTO_INCREMENT NOT NULL,
    id_penilaian INT NOT NULL UNIQUE,
    isi_tanggapan TEXT NOT NULL,
    tanggal_tanggapan DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT pk_tanggapan_karyawan PRIMARY KEY (id_tanggapan),
    CONSTRAINT fk_tanggapan_penilaian FOREIGN KEY (id_penilaian) REFERENCES penilaian(id_penilaian) ON DELETE CASCADE
) ENGINE=InnoDB COMMENT='Kolom tanggapan/klarifikasi yang ditulis langsung oleh karyawan setelah melihat nilai final';
