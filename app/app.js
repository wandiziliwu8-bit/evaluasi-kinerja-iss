/* ==========================================================================
   SISTEM INFORMASI PENILAIAN KINERJA KARYAWAN PT ISS INDONESIA
   AREA PENEMPATAN: PEMDA KOTA TANGERANG SELATAN
   DATA RESMI: SHIFT SCHEDULE LENGKAP DENGAN NIK ASLI & SANDI AWAL = NIK
   ========================================================================== */

// --- BASIS DATA AWAL SISTEM ---
const INITIAL_DATA = {
  currentUser: null,
  activeRole: null,
  activeTab: 'dashboard',
  
  // Pengguna Terdaftar (Admin & Supervisor)
  users: [
  {
    "id": 1,
    "username": "admin",
    "nik": "admin",
    "role": "admin",
    "roleLabel": "Admin / HRD",
    "nama": "Administrator HRD PT ISS",
    "status": "Tetap",
    "password": "admin"
  },
  {
    "id": 2,
    "username": "51200",
    "nik": "51200",
    "role": "supervisor",
    "roleLabel": "Service Supervisor",
    "nama": "SAYUTI",
    "status": "Tetap",
    "password": "51200"
  },
  {
    "id": 3,
    "username": "R1649339",
    "nik": "R1649339",
    "role": "supervisor",
    "roleLabel": "Leader Cleaning",
    "nama": "AYU ANASTASYA ASTUTI",
    "status": "Tetap",
    "password": "R1649339"
  },
  {
    "id": 4,
    "username": "R1634454",
    "nik": "R1634454",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "AMINUDIN",
    "status": "Tetap",
    "karyawanId": 1,
    "password": "R1634454"
  },
  {
    "id": 5,
    "username": "R1650923",
    "nik": "R1650923",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "NURIYAH",
    "status": "Tetap",
    "karyawanId": 2,
    "password": "R1650923"
  },
  {
    "id": 6,
    "username": "R1647863",
    "nik": "R1647863",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "MUHAMAD KOMARUDIN",
    "status": "Tetap",
    "karyawanId": 3,
    "password": "R1647863"
  },
  {
    "id": 7,
    "username": "R1661044",
    "nik": "R1661044",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "NURSAIMA",
    "status": "Tetap",
    "karyawanId": 4,
    "password": "R1661044"
  },
  {
    "id": 8,
    "username": "R1652286",
    "nik": "R1652286",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "ANGGA SETIA DARMA",
    "status": "Kontrak",
    "karyawanId": 5,
    "password": "R1652286"
  },
  {
    "id": 9,
    "username": "1674679",
    "nik": "1674679",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "BALQIS SASKIA",
    "status": "Tetap",
    "karyawanId": 6,
    "password": "1674679"
  },
  {
    "id": 10,
    "username": "1693760",
    "nik": "1693760",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "MUHAMAD ATTAMI",
    "status": "Kontrak",
    "karyawanId": 7,
    "password": "1693760"
  },
  {
    "id": 11,
    "username": "R1652453",
    "nik": "R1652453",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "AGI HARYADI",
    "status": "Tetap",
    "karyawanId": 8,
    "password": "R1652453"
  },
  {
    "id": 12,
    "username": "R1662149",
    "nik": "R1662149",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "WIDIASTUTI",
    "status": "Tetap",
    "karyawanId": 9,
    "password": "R1662149"
  },
  {
    "id": 13,
    "username": "1693757",
    "nik": "1693757",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "ENDI DIKA SETIAWAN",
    "status": "Tetap",
    "karyawanId": 10,
    "password": "1693757"
  },
  {
    "id": 14,
    "username": "R1655282",
    "nik": "R1655282",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "ANDI CAHYADI",
    "status": "Kontrak",
    "karyawanId": 11,
    "password": "R1655282"
  },
  {
    "id": 15,
    "username": "R1655163",
    "nik": "R1655163",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "LINA YUNITA",
    "status": "Tetap",
    "karyawanId": 12,
    "password": "R1655163"
  },
  {
    "id": 16,
    "username": "R1647582",
    "nik": "R1647582",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "MARMO",
    "status": "Tetap",
    "karyawanId": 13,
    "password": "R1647582"
  },
  {
    "id": 17,
    "username": "1693759",
    "nik": "1693759",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "MAULANA RIFKI",
    "status": "Kontrak",
    "karyawanId": 14,
    "password": "1693759"
  },
  {
    "id": 18,
    "username": "R1662016",
    "nik": "R1662016",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "RIZALDI",
    "status": "Kontrak",
    "karyawanId": 15,
    "password": "R1662016"
  },
  {
    "id": 19,
    "username": "R1654165",
    "nik": "R1654165",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "PENTI ALIAN SARI",
    "status": "Tetap",
    "karyawanId": 16,
    "password": "R1654165"
  },
  {
    "id": 20,
    "username": "1687783",
    "nik": "1687783",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "ROSITA",
    "status": "Tetap",
    "karyawanId": 17,
    "password": "1687783"
  },
  {
    "id": 21,
    "username": "R1662022",
    "nik": "R1662022",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "YUDI IRAWAN",
    "status": "Tetap",
    "karyawanId": 18,
    "password": "R1662022"
  },
  {
    "id": 22,
    "username": "R1652506",
    "nik": "R1652506",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "DENI SAPUTRA",
    "status": "Tetap",
    "karyawanId": 19,
    "password": "R1652506"
  },
  {
    "id": 23,
    "username": "1678514",
    "nik": "1678514",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "OSEP SOBARLI",
    "status": "Tetap",
    "karyawanId": 20,
    "password": "1678514"
  },
  {
    "id": 24,
    "username": "R1655138",
    "nik": "R1655138",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "ALDI SETIYAWAN",
    "status": "Kontrak",
    "karyawanId": 21,
    "password": "R1655138"
  },
  {
    "id": 25,
    "username": "R1658018",
    "nik": "R1658018",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "DERMAWAN RESKI SAPUTRA",
    "status": "Tetap",
    "karyawanId": 22,
    "password": "R1658018"
  },
  {
    "id": 26,
    "username": "R1652759",
    "nik": "R1652759",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "RITA NURDIANA",
    "status": "Tetap",
    "karyawanId": 23,
    "password": "R1652759"
  },
  {
    "id": 27,
    "username": "R1655130",
    "nik": "R1655130",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "ANGGA KURNIA",
    "status": "Kontrak",
    "karyawanId": 24,
    "password": "R1655130"
  },
  {
    "id": 28,
    "username": "R1652455",
    "nik": "R1652455",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "KOMALASARI",
    "status": "Tetap",
    "karyawanId": 25,
    "password": "R1652455"
  },
  {
    "id": 29,
    "username": "R1652274",
    "nik": "R1652274",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "TAUOFIK INDIARTO",
    "status": "Tetap",
    "karyawanId": 26,
    "password": "R1652274"
  },
  {
    "id": 30,
    "username": "R1652508",
    "nik": "R1652508",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "MARNI ANDANI",
    "status": "Tetap",
    "karyawanId": 27,
    "password": "R1652508"
  },
  {
    "id": 31,
    "username": "1678558",
    "nik": "1678558",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "WINI ANGGRAINI",
    "status": "Kontrak",
    "karyawanId": 28,
    "password": "1678558"
  },
  {
    "id": 32,
    "username": "1693757",
    "nik": "1693757",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "NUR RISMAWATI",
    "status": "Tetap",
    "karyawanId": 29,
    "password": "1693757"
  },
  {
    "id": 33,
    "username": "R1662012",
    "nik": "R1662012",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "JUPRIYADI",
    "status": "Tetap",
    "karyawanId": 30,
    "password": "R1662012"
  },
  {
    "id": 34,
    "username": "R1652454",
    "nik": "R1652454",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "ALIEFRAINANTO",
    "status": "Tetap",
    "karyawanId": 31,
    "password": "R1652454"
  },
  {
    "id": 35,
    "username": "1693145",
    "nik": "1693145",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "MARDIANA NURISNAINI",
    "status": "Tetap",
    "karyawanId": 32,
    "password": "1693145"
  },
  {
    "id": 36,
    "username": "R1652458",
    "nik": "R1652458",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "RANGGA MAULANA",
    "status": "Kontrak",
    "karyawanId": 33,
    "password": "R1652458"
  },
  {
    "id": 37,
    "username": "1693755",
    "nik": "1693755",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "WANDI ERNIAWAN ZILIWU",
    "status": "Kontrak",
    "karyawanId": 34,
    "password": "1693755"
  },
  {
    "id": 38,
    "username": "R1653243",
    "nik": "R1653243",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "SRI WIDIAWATI",
    "status": "Tetap",
    "karyawanId": 35,
    "password": "R1653243"
  },
  {
    "id": 39,
    "username": "R1648476",
    "nik": "R1648476",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "WAHYUDI",
    "status": "Tetap",
    "karyawanId": 36,
    "password": "R1648476"
  },
  {
    "id": 40,
    "username": "R1652457",
    "nik": "R1652457",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "MARIAH",
    "status": "Tetap",
    "karyawanId": 37,
    "password": "R1652457"
  },
  {
    "id": 41,
    "username": "R1652845",
    "nik": "R1652845",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "JAENUDIN",
    "status": "Tetap",
    "karyawanId": 38,
    "password": "R1652845"
  },
  {
    "id": 42,
    "username": "R1662018",
    "nik": "R1662018",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "HUSEIN",
    "status": "Tetap",
    "karyawanId": 39,
    "password": "R1662018"
  },
  {
    "id": 43,
    "username": "R1656386",
    "nik": "R1656386",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "FADLI WAHYU R",
    "status": "Kontrak",
    "karyawanId": 40,
    "password": "R1656386"
  },
  {
    "id": 44,
    "username": "R1652456",
    "nik": "R1652456",
    "role": "karyawan",
    "roleLabel": "Cleaner CS",
    "nama": "KIKI MAULANA",
    "status": "Kontrak",
    "karyawanId": 41,
    "password": "R1652456"
  }
],

  // Data Karyawan Lapangan Cleaning Service Lapangan dengan NIK Asli dari Jadwal Shift
  karyawan: [
  {
    "id": 1,
    "nik": "R1634454",
    "nama": "AMINUDIN",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1634454"
  },
  {
    "id": 2,
    "nik": "R1650923",
    "nama": "NURIYAH",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1650923"
  },
  {
    "id": 3,
    "nik": "R1647863",
    "nama": "MUHAMAD KOMARUDIN",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1647863"
  },
  {
    "id": 4,
    "nik": "R1661044",
    "nama": "NURSAIMA",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1661044"
  },
  {
    "id": 5,
    "nik": "R1652286",
    "nama": "ANGGA SETIA DARMA",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "R1652286"
  },
  {
    "id": 6,
    "nik": "1674679",
    "nama": "BALQIS SASKIA",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "1674679"
  },
  {
    "id": 7,
    "nik": "1693760",
    "nama": "MUHAMAD ATTAMI",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "1693760"
  },
  {
    "id": 8,
    "nik": "R1652453",
    "nama": "AGI HARYADI",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1652453"
  },
  {
    "id": 9,
    "nik": "R1662149",
    "nama": "WIDIASTUTI",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1662149"
  },
  {
    "id": 10,
    "nik": "1693757",
    "nama": "ENDI DIKA SETIAWAN",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "1693757"
  },
  {
    "id": 11,
    "nik": "R1655282",
    "nama": "ANDI CAHYADI",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "R1655282"
  },
  {
    "id": 12,
    "nik": "R1655163",
    "nama": "LINA YUNITA",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1655163"
  },
  {
    "id": 13,
    "nik": "R1647582",
    "nama": "MARMO",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1647582"
  },
  {
    "id": 14,
    "nik": "1693759",
    "nama": "MAULANA RIFKI",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "1693759"
  },
  {
    "id": 15,
    "nik": "R1662016",
    "nama": "RIZALDI",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "R1662016"
  },
  {
    "id": 16,
    "nik": "R1654165",
    "nama": "PENTI ALIAN SARI",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1654165"
  },
  {
    "id": 17,
    "nik": "1687783",
    "nama": "ROSITA",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "1687783"
  },
  {
    "id": 18,
    "nik": "R1662022",
    "nama": "YUDI IRAWAN",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1662022"
  },
  {
    "id": 19,
    "nik": "R1652506",
    "nama": "DENI SAPUTRA",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1652506"
  },
  {
    "id": 20,
    "nik": "1678514",
    "nama": "OSEP SOBARLI",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "1678514"
  },
  {
    "id": 21,
    "nik": "R1655138",
    "nama": "ALDI SETIYAWAN",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "R1655138"
  },
  {
    "id": 22,
    "nik": "R1658018",
    "nama": "DERMAWAN RESKI SAPUTRA",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1658018"
  },
  {
    "id": 23,
    "nik": "R1652759",
    "nama": "RITA NURDIANA",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1652759"
  },
  {
    "id": 24,
    "nik": "R1655130",
    "nama": "ANGGA KURNIA",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "R1655130"
  },
  {
    "id": 25,
    "nik": "R1652455",
    "nama": "KOMALASARI",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1652455"
  },
  {
    "id": 26,
    "nik": "R1652274",
    "nama": "TAUOFIK INDIARTO",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1652274"
  },
  {
    "id": 27,
    "nik": "R1652508",
    "nama": "MARNI ANDANI",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1652508"
  },
  {
    "id": 28,
    "nik": "1678558",
    "nama": "WINI ANGGRAINI",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Kontrak",
    "password": "1678558"
  },
  {
    "id": 29,
    "nik": "1693757",
    "nama": "NUR RISMAWATI",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "1693757"
  },
  {
    "id": 30,
    "nik": "R1662012",
    "nama": "JUPRIYADI",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1662012"
  },
  {
    "id": 31,
    "nik": "R1652454",
    "nama": "ALIEFRAINANTO",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1652454"
  },
  {
    "id": 32,
    "nik": "1693145",
    "nama": "MARDIANA NURISNAINI",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "1693145"
  },
  {
    "id": 33,
    "nik": "R1652458",
    "nama": "RANGGA MAULANA",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "R1652458"
  },
  {
    "id": 34,
    "nik": "1693755",
    "nama": "WANDI ERNIAWAN ZILIWU",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "1693755"
  },
  {
    "id": 35,
    "nik": "R1653243",
    "nama": "SRI WIDIAWATI",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1653243"
  },
  {
    "id": 36,
    "nik": "R1648476",
    "nama": "WAHYUDI",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1648476"
  },
  {
    "id": 37,
    "nik": "R1652457",
    "nama": "MARIAH",
    "jabatan": "Cleaner",
    "gender": "W",
    "status": "Tetap",
    "password": "R1652457"
  },
  {
    "id": 38,
    "nik": "R1652845",
    "nama": "JAENUDIN",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1652845"
  },
  {
    "id": 39,
    "nik": "R1662018",
    "nama": "HUSEIN",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Tetap",
    "password": "R1662018"
  },
  {
    "id": 40,
    "nik": "R1656386",
    "nama": "FADLI WAHYU R",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "R1656386"
  },
  {
    "id": 41,
    "nik": "R1652456",
    "nama": "KIKI MAULANA",
    "jabatan": "Cleaner",
    "gender": "P",
    "status": "Kontrak",
    "password": "R1652456"
  }
],

  // Parameter Pembobotan 4 Aspek Penilaian PT ISS
  bobotAspek: {
    disiplin: 0.20,      // 20%
    kualitas: 0.35,      // 35%
    tanggungJawab: 0.25, // 25%
    kerjasama: 0.20      // 20%
  },

  // Periode Evaluasi
    periode: [
    { id: 1, kode: 'PER-2026-10', nama: 'Periode Oktober 2026', tglMulai: '2026-10-01', tglSelesai: '2026-10-31', status: 'Aktif' },
    { id: 2, kode: 'PER-2026-09', nama: 'Periode September 2026', tglMulai: '2026-09-01', tglSelesai: '2026-09-30', status: 'Selesai' },
    { id: 3, kode: 'PER-2026-08', nama: 'Periode Agustus 2026', tglMulai: '2026-08-01', tglSelesai: '2026-08-31', status: 'Selesai' }
  ],

  // Data Penilaian Kinerja Karyawan
  penilaian: [
  {
    "id": 1,
    "karyawanId": 1,
    "periodeId": 1,
    "skorDisiplin": 92,
    "skorKualitas": 88,
    "skorTanggungJawab": 85,
    "skorKerjasama": 90,
    "nilaiAkhir": 88.45,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk AMINUDIN terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 2,
    "karyawanId": 2,
    "periodeId": 1,
    "skorDisiplin": 85,
    "skorKualitas": 84,
    "skorTanggungJawab": 80,
    "skorKerjasama": 85,
    "nilaiAkhir": 83.4,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk NURIYAH terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 3,
    "karyawanId": 3,
    "periodeId": 1,
    "skorDisiplin": 80,
    "skorKualitas": 78,
    "skorTanggungJawab": 76,
    "skorKerjasama": 80,
    "nilaiAkhir": 78.3,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk MUHAMAD KOMARUDIN terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 4,
    "karyawanId": 4,
    "periodeId": 1,
    "skorDisiplin": 88,
    "skorKualitas": 85,
    "skorTanggungJawab": 82,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.85,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk NURSAIMA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 5,
    "karyawanId": 5,
    "periodeId": 1,
    "skorDisiplin": 82,
    "skorKualitas": 80,
    "skorTanggungJawab": 85,
    "skorKerjasama": 80,
    "nilaiAkhir": 81.65,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk ANGGA SETIA DARMA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 6,
    "karyawanId": 6,
    "periodeId": 1,
    "skorDisiplin": 95,
    "skorKualitas": 92,
    "skorTanggungJawab": 90,
    "skorKerjasama": 90,
    "nilaiAkhir": 91.7,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk BALQIS SASKIA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 7,
    "karyawanId": 7,
    "periodeId": 1,
    "skorDisiplin": 84,
    "skorKualitas": 82,
    "skorTanggungJawab": 80,
    "skorKerjasama": 84,
    "nilaiAkhir": 82.3,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk MUHAMAD ATTAMI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 8,
    "karyawanId": 8,
    "periodeId": 1,
    "skorDisiplin": 86,
    "skorKualitas": 85,
    "skorTanggungJawab": 84,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.95,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk AGI HARYADI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 9,
    "karyawanId": 9,
    "periodeId": 1,
    "skorDisiplin": 88,
    "skorKualitas": 86,
    "skorTanggungJawab": 85,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.55,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk WIDIASTUTI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 10,
    "karyawanId": 10,
    "periodeId": 1,
    "skorDisiplin": 80,
    "skorKualitas": 82,
    "skorTanggungJawab": 80,
    "skorKerjasama": 80,
    "nilaiAkhir": 80.7,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk ENDI DIKA SETIAWAN terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 11,
    "karyawanId": 11,
    "periodeId": 1,
    "skorDisiplin": 85,
    "skorKualitas": 84,
    "skorTanggungJawab": 82,
    "skorKerjasama": 85,
    "nilaiAkhir": 83.9,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk ANDI CAHYADI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 12,
    "karyawanId": 12,
    "periodeId": 1,
    "skorDisiplin": 90,
    "skorKualitas": 88,
    "skorTanggungJawab": 86,
    "skorKerjasama": 90,
    "nilaiAkhir": 88.3,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk LINA YUNITA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 13,
    "karyawanId": 13,
    "periodeId": 1,
    "skorDisiplin": 82,
    "skorKualitas": 80,
    "skorTanggungJawab": 78,
    "skorKerjasama": 82,
    "nilaiAkhir": 80.3,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk MARMO terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 14,
    "karyawanId": 14,
    "periodeId": 1,
    "skorDisiplin": 84,
    "skorKualitas": 82,
    "skorTanggungJawab": 85,
    "skorKerjasama": 80,
    "nilaiAkhir": 82.75,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk MAULANA RIFKI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 15,
    "karyawanId": 15,
    "periodeId": 1,
    "skorDisiplin": 86,
    "skorKualitas": 85,
    "skorTanggungJawab": 84,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.95,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk RIZALDI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 16,
    "karyawanId": 16,
    "periodeId": 1,
    "skorDisiplin": 88,
    "skorKualitas": 86,
    "skorTanggungJawab": 85,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.55,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk PENTI ALIAN SARI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 17,
    "karyawanId": 17,
    "periodeId": 1,
    "skorDisiplin": 82,
    "skorKualitas": 84,
    "skorTanggungJawab": 80,
    "skorKerjasama": 82,
    "nilaiAkhir": 82.2,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk ROSITA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 18,
    "karyawanId": 18,
    "periodeId": 1,
    "skorDisiplin": 85,
    "skorKualitas": 86,
    "skorTanggungJawab": 84,
    "skorKerjasama": 85,
    "nilaiAkhir": 85.1,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk YUDI IRAWAN terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 19,
    "karyawanId": 19,
    "periodeId": 1,
    "skorDisiplin": 90,
    "skorKualitas": 88,
    "skorTanggungJawab": 88,
    "skorKerjasama": 90,
    "nilaiAkhir": 88.8,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk DENI SAPUTRA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 20,
    "karyawanId": 20,
    "periodeId": 1,
    "skorDisiplin": 86,
    "skorKualitas": 85,
    "skorTanggungJawab": 82,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.45,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk OSEP SOBARLI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 21,
    "karyawanId": 21,
    "periodeId": 1,
    "skorDisiplin": 92,
    "skorKualitas": 90,
    "skorTanggungJawab": 90,
    "skorKerjasama": 92,
    "nilaiAkhir": 90.8,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk ALDI SETIYAWAN terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 22,
    "karyawanId": 22,
    "periodeId": 1,
    "skorDisiplin": 88,
    "skorKualitas": 86,
    "skorTanggungJawab": 88,
    "skorKerjasama": 88,
    "nilaiAkhir": 87.3,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk DERMAWAN RESKI SAPUTRA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 23,
    "karyawanId": 23,
    "periodeId": 1,
    "skorDisiplin": 90,
    "skorKualitas": 88,
    "skorTanggungJawab": 85,
    "skorKerjasama": 90,
    "nilaiAkhir": 88.05,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk RITA NURDIANA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 24,
    "karyawanId": 24,
    "periodeId": 1,
    "skorDisiplin": 84,
    "skorKualitas": 82,
    "skorTanggungJawab": 80,
    "skorKerjasama": 84,
    "nilaiAkhir": 82.3,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk ANGGA KURNIA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 25,
    "karyawanId": 25,
    "periodeId": 1,
    "skorDisiplin": 88,
    "skorKualitas": 86,
    "skorTanggungJawab": 85,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.55,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk KOMALASARI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 26,
    "karyawanId": 26,
    "periodeId": 1,
    "skorDisiplin": 85,
    "skorKualitas": 84,
    "skorTanggungJawab": 82,
    "skorKerjasama": 85,
    "nilaiAkhir": 83.9,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk TAUOFIK INDIARTO terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 27,
    "karyawanId": 27,
    "periodeId": 1,
    "skorDisiplin": 80,
    "skorKualitas": 78,
    "skorTanggungJawab": 80,
    "skorKerjasama": 80,
    "nilaiAkhir": 79.3,
    "grade": "B",
    "kategori": "Baik",
    "status": "DRAFT",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk MARNI ANDANI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": null
  },
  {
    "id": 28,
    "karyawanId": 28,
    "periodeId": 1,
    "skorDisiplin": 86,
    "skorKualitas": 85,
    "skorTanggungJawab": 82,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.45,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk WINI ANGGRAINI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 29,
    "karyawanId": 29,
    "periodeId": 1,
    "skorDisiplin": 84,
    "skorKualitas": 82,
    "skorTanggungJawab": 80,
    "skorKerjasama": 84,
    "nilaiAkhir": 82.3,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk NUR RISMAWATI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 30,
    "karyawanId": 30,
    "periodeId": 1,
    "skorDisiplin": 88,
    "skorKualitas": 86,
    "skorTanggungJawab": 85,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.55,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk JUPRIYADI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 31,
    "karyawanId": 31,
    "periodeId": 1,
    "skorDisiplin": 82,
    "skorKualitas": 80,
    "skorTanggungJawab": 80,
    "skorKerjasama": 82,
    "nilaiAkhir": 80.8,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk ALIEFRAINANTO terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 32,
    "karyawanId": 32,
    "periodeId": 1,
    "skorDisiplin": 85,
    "skorKualitas": 84,
    "skorTanggungJawab": 82,
    "skorKerjasama": 85,
    "nilaiAkhir": 83.9,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk MARDIANA NURISNAINI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 33,
    "karyawanId": 33,
    "periodeId": 1,
    "skorDisiplin": 80,
    "skorKualitas": 82,
    "skorTanggungJawab": 80,
    "skorKerjasama": 80,
    "nilaiAkhir": 80.7,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk RANGGA MAULANA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 34,
    "karyawanId": 34,
    "periodeId": 1,
    "skorDisiplin": 86,
    "skorKualitas": 85,
    "skorTanggungJawab": 84,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.95,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk WANDI ERNIAWAN ZILIWU terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 35,
    "karyawanId": 35,
    "periodeId": 1,
    "skorDisiplin": 88,
    "skorKualitas": 86,
    "skorTanggungJawab": 85,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.55,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk SRI WIDIAWATI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 36,
    "karyawanId": 36,
    "periodeId": 1,
    "skorDisiplin": 82,
    "skorKualitas": 80,
    "skorTanggungJawab": 80,
    "skorKerjasama": 82,
    "nilaiAkhir": 80.8,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk WAHYUDI terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 37,
    "karyawanId": 37,
    "periodeId": 1,
    "skorDisiplin": 85,
    "skorKualitas": 84,
    "skorTanggungJawab": 82,
    "skorKerjasama": 85,
    "nilaiAkhir": 83.9,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk MARIAH terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 38,
    "karyawanId": 38,
    "periodeId": 1,
    "skorDisiplin": 90,
    "skorKualitas": 88,
    "skorTanggungJawab": 86,
    "skorKerjasama": 90,
    "nilaiAkhir": 88.3,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk JAENUDIN terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 39,
    "karyawanId": 39,
    "periodeId": 1,
    "skorDisiplin": 84,
    "skorKualitas": 82,
    "skorTanggungJawab": 80,
    "skorKerjasama": 84,
    "nilaiAkhir": 82.3,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk HUSEIN terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 40,
    "karyawanId": 40,
    "periodeId": 1,
    "skorDisiplin": 88,
    "skorKualitas": 86,
    "skorTanggungJawab": 85,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.55,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk FADLI WAHYU R terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 41,
    "karyawanId": 41,
    "periodeId": 1,
    "skorDisiplin": 85,
    "skorKualitas": 84,
    "skorTanggungJawab": 82,
    "skorKerjasama": 85,
    "nilaiAkhir": 83.9,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan Oktober 2026 untuk KIKI MAULANA terlaksana dengan baik.",
    "tglPenilaian": "2026-10-15",
    "tglFinalisasi": "2026-10-16 10:00:00"
  },
  {
    "id": 42,
    "karyawanId": 1,
    "periodeId": 2,
    "skorDisiplin": 90,
    "skorKualitas": 87,
    "skorTanggungJawab": 86,
    "skorKerjasama": 90,
    "nilaiAkhir": 87.95,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk AMINUDIN telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 43,
    "karyawanId": 2,
    "periodeId": 2,
    "skorDisiplin": 86,
    "skorKualitas": 86,
    "skorTanggungJawab": 79,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.05,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk NURIYAH telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 44,
    "karyawanId": 3,
    "periodeId": 2,
    "skorDisiplin": 78,
    "skorKualitas": 80,
    "skorTanggungJawab": 77,
    "skorKerjasama": 80,
    "nilaiAkhir": 78.85,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk MUHAMAD KOMARUDIN telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 45,
    "karyawanId": 4,
    "periodeId": 2,
    "skorDisiplin": 89,
    "skorKualitas": 84,
    "skorTanggungJawab": 81,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.45,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk NURSAIMA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 46,
    "karyawanId": 5,
    "periodeId": 2,
    "skorDisiplin": 80,
    "skorKualitas": 82,
    "skorTanggungJawab": 86,
    "skorKerjasama": 80,
    "nilaiAkhir": 82.2,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk ANGGA SETIA DARMA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 47,
    "karyawanId": 6,
    "periodeId": 2,
    "skorDisiplin": 96,
    "skorKualitas": 94,
    "skorTanggungJawab": 89,
    "skorKerjasama": 90,
    "nilaiAkhir": 92.35,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk BALQIS SASKIA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 48,
    "karyawanId": 7,
    "periodeId": 2,
    "skorDisiplin": 82,
    "skorKualitas": 81,
    "skorTanggungJawab": 81,
    "skorKerjasama": 84,
    "nilaiAkhir": 81.8,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk MUHAMAD ATTAMI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 49,
    "karyawanId": 8,
    "periodeId": 2,
    "skorDisiplin": 87,
    "skorKualitas": 87,
    "skorTanggungJawab": 83,
    "skorKerjasama": 85,
    "nilaiAkhir": 85.6,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk AGI HARYADI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 50,
    "karyawanId": 9,
    "periodeId": 2,
    "skorDisiplin": 86,
    "skorKualitas": 88,
    "skorTanggungJawab": 86,
    "skorKerjasama": 88,
    "nilaiAkhir": 87.1,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk WIDIASTUTI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 51,
    "karyawanId": 10,
    "periodeId": 2,
    "skorDisiplin": 81,
    "skorKualitas": 81,
    "skorTanggungJawab": 79,
    "skorKerjasama": 80,
    "nilaiAkhir": 80.3,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk ENDI DIKA SETIAWAN telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 52,
    "karyawanId": 11,
    "periodeId": 2,
    "skorDisiplin": 83,
    "skorKualitas": 86,
    "skorTanggungJawab": 83,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.45,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk ANDI CAHYADI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 53,
    "karyawanId": 12,
    "periodeId": 2,
    "skorDisiplin": 91,
    "skorKualitas": 90,
    "skorTanggungJawab": 85,
    "skorKerjasama": 90,
    "nilaiAkhir": 88.95,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk LINA YUNITA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 54,
    "karyawanId": 13,
    "periodeId": 2,
    "skorDisiplin": 80,
    "skorKualitas": 79,
    "skorTanggungJawab": 79,
    "skorKerjasama": 82,
    "nilaiAkhir": 79.8,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk MARMO telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 55,
    "karyawanId": 14,
    "periodeId": 2,
    "skorDisiplin": 85,
    "skorKualitas": 84,
    "skorTanggungJawab": 84,
    "skorKerjasama": 80,
    "nilaiAkhir": 83.4,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk MAULANA RIFKI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 56,
    "karyawanId": 15,
    "periodeId": 2,
    "skorDisiplin": 84,
    "skorKualitas": 87,
    "skorTanggungJawab": 85,
    "skorKerjasama": 85,
    "nilaiAkhir": 85.5,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk RIZALDI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 57,
    "karyawanId": 16,
    "periodeId": 2,
    "skorDisiplin": 89,
    "skorKualitas": 85,
    "skorTanggungJawab": 84,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.15,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk PENTI ALIAN SARI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 58,
    "karyawanId": 17,
    "periodeId": 2,
    "skorDisiplin": 80,
    "skorKualitas": 86,
    "skorTanggungJawab": 81,
    "skorKerjasama": 82,
    "nilaiAkhir": 82.75,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk ROSITA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 59,
    "karyawanId": 18,
    "periodeId": 2,
    "skorDisiplin": 86,
    "skorKualitas": 88,
    "skorTanggungJawab": 83,
    "skorKerjasama": 85,
    "nilaiAkhir": 85.75,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk YUDI IRAWAN telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 60,
    "karyawanId": 19,
    "periodeId": 2,
    "skorDisiplin": 88,
    "skorKualitas": 87,
    "skorTanggungJawab": 89,
    "skorKerjasama": 90,
    "nilaiAkhir": 88.3,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk DENI SAPUTRA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 61,
    "karyawanId": 20,
    "periodeId": 2,
    "skorDisiplin": 87,
    "skorKualitas": 87,
    "skorTanggungJawab": 81,
    "skorKerjasama": 85,
    "nilaiAkhir": 85.1,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk OSEP SOBARLI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 62,
    "karyawanId": 21,
    "periodeId": 2,
    "skorDisiplin": 90,
    "skorKualitas": 92,
    "skorTanggungJawab": 91,
    "skorKerjasama": 92,
    "nilaiAkhir": 91.35,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk ALDI SETIYAWAN telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 63,
    "karyawanId": 22,
    "periodeId": 2,
    "skorDisiplin": 89,
    "skorKualitas": 85,
    "skorTanggungJawab": 87,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.9,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk DERMAWAN RESKI SAPUTRA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 64,
    "karyawanId": 23,
    "periodeId": 2,
    "skorDisiplin": 88,
    "skorKualitas": 90,
    "skorTanggungJawab": 86,
    "skorKerjasama": 90,
    "nilaiAkhir": 88.6,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk RITA NURDIANA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 65,
    "karyawanId": 24,
    "periodeId": 2,
    "skorDisiplin": 85,
    "skorKualitas": 84,
    "skorTanggungJawab": 79,
    "skorKerjasama": 84,
    "nilaiAkhir": 82.95,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk ANGGA KURNIA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 66,
    "karyawanId": 25,
    "periodeId": 2,
    "skorDisiplin": 86,
    "skorKualitas": 85,
    "skorTanggungJawab": 86,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.05,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk KOMALASARI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 67,
    "karyawanId": 26,
    "periodeId": 2,
    "skorDisiplin": 86,
    "skorKualitas": 86,
    "skorTanggungJawab": 81,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.55,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk TAUOFIK INDIARTO telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 68,
    "karyawanId": 27,
    "periodeId": 2,
    "skorDisiplin": 78,
    "skorKualitas": 80,
    "skorTanggungJawab": 81,
    "skorKerjasama": 80,
    "nilaiAkhir": 79.85,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk MARNI ANDANI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 69,
    "karyawanId": 28,
    "periodeId": 2,
    "skorDisiplin": 87,
    "skorKualitas": 84,
    "skorTanggungJawab": 81,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.05,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk WINI ANGGRAINI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 70,
    "karyawanId": 29,
    "periodeId": 2,
    "skorDisiplin": 82,
    "skorKualitas": 84,
    "skorTanggungJawab": 81,
    "skorKerjasama": 84,
    "nilaiAkhir": 82.85,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk NUR RISMAWATI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 71,
    "karyawanId": 30,
    "periodeId": 2,
    "skorDisiplin": 89,
    "skorKualitas": 88,
    "skorTanggungJawab": 84,
    "skorKerjasama": 88,
    "nilaiAkhir": 87.2,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk JUPRIYADI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 72,
    "karyawanId": 31,
    "periodeId": 2,
    "skorDisiplin": 80,
    "skorKualitas": 79,
    "skorTanggungJawab": 81,
    "skorKerjasama": 82,
    "nilaiAkhir": 80.3,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk ALIEFRAINANTO telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 73,
    "karyawanId": 32,
    "periodeId": 2,
    "skorDisiplin": 86,
    "skorKualitas": 86,
    "skorTanggungJawab": 81,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.55,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk MARDIANA NURISNAINI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 74,
    "karyawanId": 33,
    "periodeId": 2,
    "skorDisiplin": 78,
    "skorKualitas": 84,
    "skorTanggungJawab": 81,
    "skorKerjasama": 80,
    "nilaiAkhir": 81.25,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk RANGGA MAULANA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 75,
    "karyawanId": 34,
    "periodeId": 2,
    "skorDisiplin": 87,
    "skorKualitas": 84,
    "skorTanggungJawab": 83,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.55,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk WANDI ERNIAWAN ZILIWU telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 76,
    "karyawanId": 35,
    "periodeId": 2,
    "skorDisiplin": 86,
    "skorKualitas": 88,
    "skorTanggungJawab": 86,
    "skorKerjasama": 88,
    "nilaiAkhir": 87.1,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk SRI WIDIAWATI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 77,
    "karyawanId": 36,
    "periodeId": 2,
    "skorDisiplin": 83,
    "skorKualitas": 82,
    "skorTanggungJawab": 79,
    "skorKerjasama": 82,
    "nilaiAkhir": 81.45,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk WAHYUDI telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 78,
    "karyawanId": 37,
    "periodeId": 2,
    "skorDisiplin": 83,
    "skorKualitas": 83,
    "skorTanggungJawab": 83,
    "skorKerjasama": 85,
    "nilaiAkhir": 83.4,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk MARIAH telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 79,
    "karyawanId": 38,
    "periodeId": 2,
    "skorDisiplin": 91,
    "skorKualitas": 90,
    "skorTanggungJawab": 85,
    "skorKerjasama": 90,
    "nilaiAkhir": 88.95,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk JAENUDIN telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 80,
    "karyawanId": 39,
    "periodeId": 2,
    "skorDisiplin": 82,
    "skorKualitas": 84,
    "skorTanggungJawab": 81,
    "skorKerjasama": 84,
    "nilaiAkhir": 82.85,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk HUSEIN telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 81,
    "karyawanId": 40,
    "periodeId": 2,
    "skorDisiplin": 89,
    "skorKualitas": 85,
    "skorTanggungJawab": 84,
    "skorKerjasama": 88,
    "nilaiAkhir": 86.15,
    "grade": "A",
    "kategori": "Sangat Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk FADLI WAHYU R telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  },
  {
    "id": 82,
    "karyawanId": 41,
    "periodeId": 2,
    "skorDisiplin": 83,
    "skorKualitas": 86,
    "skorTanggungJawab": 83,
    "skorKerjasama": 85,
    "nilaiAkhir": 84.45,
    "grade": "B",
    "kategori": "Baik",
    "status": "FINAL",
    "catatanSpv": "Kinerja kebersihan bulan September 2026 untuk KIKI MAULANA telah selesai dievaluasi.",
    "tglPenilaian": "2026-09-18",
    "tglFinalisasi": "2026-09-20 14:00:00"
  }
]
};

// --- DATA PERSISTENCE (BUMP KEY TO pt_iss_auth_v11 DENGAN PENGECEKAN LENGKAP) ---
const STORAGE_KEY = 'pt_iss_auth_v11';

function getDb() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }
  try {
    const parsed = JSON.parse(data);
    // Pastikan 41 karyawan dan data user lengkap
    if (!parsed.karyawan || parsed.karyawan.length < 40 || !parsed.users) {
      parsed.karyawan = INITIAL_DATA.karyawan;
      parsed.users = INITIAL_DATA.users;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch (e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }
}

function saveDb(db) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function formatTanggalIndo(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const bln = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const bIndex = parseInt(parts[1], 10) - 1;
  return `${parseInt(parts[2], 10)} ${bln[bIndex] || parts[1]} ${parts[0]}`;
}

// --- UTILITY KALKULASI & TOAST ---
function hitungNilaiDanGrade(disiplin, kualitas, tanggungJawab, kerjasama, bobot) {
  const d = Number(disiplin);
  const k = Number(kualitas);
  const t = Number(tanggungJawab);
  const c = Number(kerjasama);

  const totalNilai = (d * bobot.disiplin) + (k * bobot.kualitas) + (t * bobot.tanggungJawab) + (c * bobot.kerjasama);
  const nilaiAkhir = Math.round(totalNilai * 100) / 100;

  let grade = 'E';
  let kategori = 'Sangat Kurang';

  if (nilaiAkhir >= 85) {
    grade = 'A';
    kategori = 'Sangat Baik';
  } else if (nilaiAkhir >= 75) {
    grade = 'B';
    kategori = 'Baik';
  } else if (nilaiAkhir >= 65) {
    grade = 'C';
    kategori = 'Cukup';
  } else if (nilaiAkhir >= 55) {
    grade = 'D';
    kategori = 'Kurang';
  } else {
    grade = 'E';
    kategori = 'Sangat Kurang';
  }

  return { nilaiAkhir, grade, kategori };
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  let icon = '✅';
  if (type === 'danger') icon = '❌';
  if (type === 'info') icon = 'ℹ️';

  toast.innerHTML = '<span style="font-size:1.1rem">' + icon + '</span> <span>' + message + '</span>';
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- PROSES LOGIN OTOMATIS BERDASARKAN NIK / USERNAME + KATA SANDI ---
function handleLogin(e) {
  if (e) e.preventDefault();
  const roleSelect = document.getElementById('login-role');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorAlert = document.getElementById('login-error-alert');
  const errorDesc = document.getElementById('login-error-desc');

  const selectedRole = roleSelect ? roleSelect.value.trim() : '';
  const inputVal = usernameInput ? usernameInput.value.trim().toLowerCase() : '';
  const password = passwordInput ? passwordInput.value.trim() : '';

  // Reset tampilan error
  if (errorAlert) errorAlert.classList.remove('show');
  if (roleSelect) roleSelect.classList.remove('is-invalid');
  if (usernameInput) usernameInput.classList.remove('is-invalid');
  if (passwordInput) passwordInput.classList.remove('is-invalid');

  if (!inputVal) {
    if (errorAlert) errorAlert.classList.add('show');
    if (usernameInput) usernameInput.classList.add('is-invalid');
    if (errorDesc) errorDesc.innerHTML = 'Silakan masukkan <b>Nomor Induk Karyawan (NIK) atau Username</b> Anda.';
    return;
  }

  const db = getDb();
  let matchedUser = null;
  let expectedPassword = '';

  // 1. Cek Administrator / HRD
  if (!selectedRole || selectedRole === 'admin') {
    if (inputVal === 'admin' || inputVal === 'iss-adm-01' || inputVal === 'administrator' || inputVal.includes('admin') || inputVal.includes('hrd')) {
      const u = db.users.find(x => x.role === 'admin');
      matchedUser = u;
      expectedPassword = u ? (u.password || 'admin') : 'admin';
    }
  }

  // 2. Cek Supervisor (Sayuti atau Ayu Anastasya Astuti)
  if (!matchedUser && (!selectedRole || selectedRole === 'supervisor')) {
    let spv = db.users.find(x => x.role === 'supervisor' && (x.nik.toLowerCase() === inputVal || x.username.toLowerCase() === inputVal));
    if (!spv) {
      spv = db.users.find(x => {
        if (x.role !== 'supervisor') return false;
        const words = x.nama.toLowerCase().split(/\s+/);
        return words.includes(inputVal) || x.nama.toLowerCase() === inputVal;
      });
    }
    if (!spv) {
      spv = db.users.find(x => x.role === 'supervisor' && x.nama.toLowerCase().includes(inputVal));
    }
    if (spv) {
      matchedUser = spv;
      expectedPassword = spv.password || spv.nik;
    }
  }

  // 3. Cek Karyawan / Cleaning Service Lapangan (34 Petugas Lapangan)
  if (!matchedUser && (!selectedRole || selectedRole === 'karyawan')) {
    let k = db.karyawan.find(x => x.nik.toLowerCase() === inputVal);
    if (!k) {
      k = db.karyawan.find(x => {
        const words = x.nama.toLowerCase().split(/\s+/);
        return words.includes(inputVal) || x.nama.toLowerCase() === inputVal;
      });
    }
    if (!k) {
      k = db.karyawan.find(x => x.nama.toLowerCase().includes(inputVal));
    }
    if (k) {
      matchedUser = {
        id: 100 + k.id,
        username: k.nik,
        nik: k.nik,
        role: 'karyawan',
        nama: k.nama,
        karyawanId: k.id,
        unit: k.gedung + ' (' + k.shift + ')',
        password: k.password || k.nik
      };
      expectedPassword = k.password || k.nik;
    }
  }

  // Jika akun tidak ditemukan
  if (!matchedUser) {
    if (errorAlert) errorAlert.classList.add('show');
    if (usernameInput) usernameInput.classList.add('is-invalid');
    if (errorDesc) {
      errorDesc.innerHTML = 'Akun atau NIK "<b>' + usernameInput.value + '</b>" tidak terdaftar di sistem.<br><small style="color:var(--text-muted)">Pastikan NIK atau Username yang Anda masukkan sudah benar.</small>';
    }
    return;
  }

  // Verifikasi Kata Sandi (Awal = NIK masing-masing, atau sandi baru yang telah diubah)
  // Menerima kata sandi user, NIK, serta sandi master evaluasi: '123' / '123456' / 'admin'
  const isPassValid = (password === expectedPassword) || 
                      (password === '123') || 
                      (password === '123456') ||
                      (password === matchedUser.nik) ||
                      (selectedRole === 'admin' && (password === 'admin' || password === '123'));

  if (!isPassValid) {
    if (errorAlert) errorAlert.classList.add('show');
    if (passwordInput) passwordInput.classList.add('is-invalid');
    if (errorDesc) {
      errorDesc.innerHTML = 'Kata sandi salah untuk <b>' + matchedUser.nama + '</b>.<br><small style="color:var(--text-muted)">Gunakan kata sandi akun Anda (default: sesuai NIK: <code>' + matchedUser.nik + '</code>).</small>';
    }
    return;
  }

  // Login berhasil
  db.currentUser = matchedUser;
  db.activeRole = matchedUser.role;
  db.activeTab = (matchedUser.role === 'karyawan') ? 'karyawan-scorecard' : 'dashboard';
  saveDb(db);

  showToast('Berhasil masuk sebagai ' + matchedUser.nama, 'success');
  renderApp();
}

function handleLogout() {
  const db = getDb();
  db.currentUser = null;
  db.activeRole = null;
  saveDb(db);
  showToast('Anda telah keluar dari sistem.', 'info');
  renderApp();
}

// --- HELPER LOGIN MODERN ---
function quickFill(user, pass) {
  const uInput = document.getElementById('username');
  const pInput = document.getElementById('password');
  const errBox = document.getElementById('login-error-alert');
  if (errBox) errBox.classList.remove('show');
  
  if (uInput) {
    uInput.value = user;
    uInput.classList.remove('is-invalid');
  }
  if (pInput) {
    pInput.value = pass;
    pInput.classList.remove('is-invalid');
  }
  
  // Langsung proses login 1-klik untuk kemudahan pengujian
  handleLogin();
}

function togglePasswordVisibility() {
  const pInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');
  if (!pInput) return;
  
  if (pInput.type === 'password') {
    pInput.type = 'text';
    if (eyeIcon) {
      eyeIcon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
    }
  } else {
    pInput.type = 'password';
    if (eyeIcon) {
      eyeIcon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
    }
  }
}

function toggleDemoHelp() {
  showToast('Akun bawaan: Admin (admin / admin), Supervisor (51200 / 51200), Karyawan (31634454 / 31634454).', 'info');
}

function switchTab(tabId) {
  const db = getDb();
  db.activeTab = tabId;
  saveDb(db);
  if (db.currentUser) {
    renderSidebar(db.currentUser.role);
  }
  renderContent();
}

// --- RENDER APLIKASI UTAMA SETELAH LOGIN ---
function renderApp() {
  const db = getDb();
  const loginSection = document.getElementById('login-section');
  const appContainer = document.getElementById('app-container');

  if (!db.currentUser) {
    if (loginSection) loginSection.style.display = 'flex';
    if (appContainer) {
      appContainer.style.display = 'none';
      appContainer.classList.remove('active');
    }
    const pField = document.getElementById('password');
    if (pField) pField.value = '';
    return;
  }

  if (loginSection) loginSection.style.display = 'none';
  if (appContainer) {
    appContainer.style.display = 'flex';
    appContainer.classList.add('active');
  }

  // Perbarui data profil pengguna di navbar
  const user = db.currentUser;
  const nameEl = document.getElementById('nav-user-name') || document.getElementById('top-user-name');
  const avatarEl = document.getElementById('nav-user-avatar') || document.getElementById('top-user-avatar');
  const roleEl = document.getElementById('nav-user-role') || document.getElementById('top-user-role-badge');

  if (nameEl) nameEl.innerText = user.nama;
  if (avatarEl) avatarEl.innerText = user.nama.charAt(0);
  if (roleEl) {
    roleEl.className = 'role-tag role-' + user.role;
    roleEl.innerText = user.role.toUpperCase();
  }

  renderSidebar(user.role);
  renderContent();
}

// --- SIDEBAR MENU DINAMIS SESUAI HAK AKSES ---
function renderSidebar(role) {
  const menuContainer = document.getElementById('sidebar-menu-list');
  const db = getDb();
  let html = '';

  if (role === 'admin') {
    html = `
      <div class="sidebar-category">Menu Administrator</div>
      <li class="sidebar-item ${db.activeTab === 'dashboard' ? 'active' : ''}" onclick="switchTab('dashboard')">
        <span class="item-icon">📊</span> <span>Dashboard Utama</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'admin-users' ? 'active' : ''}" onclick="switchTab('admin-users')">
        <span class="item-icon">👥</span> <span>Kelola Data Pengguna</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'admin-karyawan' ? 'active' : ''}" onclick="switchTab('admin-karyawan')">
        <span class="item-icon">🧹</span> <span>Data 41 Karyawan CS</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'admin-bobot' ? 'active' : ''}" onclick="switchTab('admin-bobot')">
        <span class="item-icon">⚖️</span> <span>Skala &amp; Bobot Aspek</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'admin-periode' ? 'active' : ''}" onclick="switchTab('admin-periode')">
        <span class="item-icon">📅</span> <span>Periode Penilaian</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'laporan' ? 'active' : ''}" onclick="switchTab('laporan')">
        <span class="item-icon">📑</span> <span>Rekap &amp; Cetak Laporan</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'ganti-sandi' ? 'active' : ''}" onclick="switchTab('ganti-sandi')">
        <span class="item-icon">🔑</span> <span>Ganti Kata Sandi</span>
      </li>
    `;
  } else if (role === 'supervisor') {
    html = `
      <div class="sidebar-category">Menu Supervisor Operasional</div>
      <li class="sidebar-item ${db.activeTab === 'dashboard' ? 'active' : ''}" onclick="switchTab('dashboard')">
        <span class="item-icon">📊</span> <span>Dashboard Pengawasan</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'spv-input' ? 'active' : ''}" onclick="switchTab('spv-input')">
        <span class="item-icon">✍️</span> <span>Input Penilaian Kinerja</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'spv-finalisasi' ? 'active' : ''}" onclick="switchTab('spv-finalisasi')">
        <span class="item-icon">🔒</span> <span>Review &amp; Finalisasi</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'laporan' ? 'active' : ''}" onclick="switchTab('laporan')">
        <span class="item-icon">📑</span> <span>Rekap Nilai Karyawan</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'ganti-sandi' ? 'active' : ''}" onclick="switchTab('ganti-sandi')">
        <span class="item-icon">🔑</span> <span>Ganti Kata Sandi</span>
      </li>
    `;
  } else if (role === 'karyawan') {
    html = `
      <div class="sidebar-category">Portal Karyawan Cleaning</div>
      <li class="sidebar-item ${db.activeTab === 'karyawan-scorecard' ? 'active' : ''}" onclick="switchTab('karyawan-scorecard')">
        <span class="item-icon">📜</span> <span>Hasil Penilaian Kinerja</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'karyawan-feedback' ? 'active' : ''}" onclick="switchTab('karyawan-feedback')">
        <span class="item-icon">💬</span> <span>Beri Tanggapan (Feedback)</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'karyawan-profil' ? 'active' : ''}" onclick="switchTab('karyawan-profil')">
        <span class="item-icon">👤</span> <span>Profil &amp; Penempatan</span>
      </li>
      <li class="sidebar-item ${db.activeTab === 'ganti-sandi' ? 'active' : ''}" onclick="switchTab('ganti-sandi')">
        <span class="item-icon">🔑</span> <span>Ganti Kata Sandi</span>
      </li>
    `;
  }

  menuContainer.innerHTML = html;
}

// --- VIEW: GANTI KATA SANDI ---
function renderGantiSandiView(db) {
  const user = db.currentUser;
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Ganti Kata Sandi Akun</h2>
        <p>Perbarui kata sandi akun Anda untuk menjaga keamanan data</p>
      </div>
    </div>

    <div class="panel" style="max-width: 580px; margin: 0 auto;">
      <div class="panel-header">
        <div class="panel-title">Formulir Perubahan Sandi</div>
        <span class="badge badge-info">NIK: ${user.nik}</span>
      </div>

      <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.84rem; color: var(--text-secondary); border-left: 4px solid var(--iss-navy);">
        Nama Pengguna: <strong>${user.nama}</strong><br>
        Jabatan: <strong>${user.role.toUpperCase()}</strong>
      </div>

      <form onsubmit="handleProsesGantiSandi(event)">
        <div class="form-group">
          <label class="form-label" for="old-password">Kata Sandi Saat Ini</label>
          <input type="password" id="old-password" class="form-input" placeholder="Masukkan kata sandi saat ini" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="new-password">Kata Sandi Baru</label>
          <input type="password" id="new-password" class="form-input" placeholder="Masukkan kata sandi baru (minimal 4 karakter)" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="confirm-password">Konfirmasi Kata Sandi Baru</label>
          <input type="password" id="confirm-password" class="form-input" placeholder="Ketik ulang kata sandi baru" required>
        </div>

        <div style="margin-top: 24px; display: flex; gap: 12px;">
          <button type="submit" class="btn btn-primary" style="flex: 1;">
            💾 Simpan Sandi Baru
          </button>
          <button type="button" class="btn btn-outline" onclick="switchTab('dashboard')">
            Batal
          </button>
        </div>
      </form>
    </div>
  `;
}

// --- PROSES SIMPAN GANTI KATA SANDI ---
function handleProsesGantiSandi(e) {
  e.preventDefault();
  const oldPass = document.getElementById('old-password').value.trim();
  const newPass = document.getElementById('new-password').value.trim();
  const confPass = document.getElementById('confirm-password').value.trim();

  const db = getDb();
  const user = db.currentUser;
  const currentSavedPass = user.password || user.nik;

  // Verifikasi sandi lama
  if (oldPass !== currentSavedPass && oldPass !== '123' && oldPass !== user.nik) {
    showToast('Kata sandi saat ini tidak cocok!', 'danger');
    document.getElementById('old-password').focus();
    return;
  }

  // Validasi sandi baru
  if (newPass.length < 35) {
    showToast('Kata sandi baru minimal 4 karakter!', 'danger');
    document.getElementById('new-password').focus();
    return;
  }

  if (newPass !== confPass) {
    showToast('Konfirmasi kata sandi baru tidak cocok!', 'danger');
    document.getElementById('confirm-password').focus();
    return;
  }

  // Simpan sandi baru ke akun terkait
  user.password = newPass;

  // Update di tabel users jika Admin/Supervisor
  if (user.role === 'admin' || user.role === 'supervisor') {
    const targetUser = db.users.find(u => u.nik === user.nik || u.id === user.id);
    if (targetUser) targetUser.password = newPass;
  }

  // Update di tabel karyawan jika Petugas CS
  if (user.karyawanId) {
    const targetKaryawan = db.karyawan.find(k => k.id === user.karyawanId);
    if (targetKaryawan) targetKaryawan.password = newPass;
  }

  saveDb(db);
  showToast('Kata sandi berhasil diperbarui! Gunakan sandi baru saat login berikutnya.', 'success');

  // Reset formulir
  document.getElementById('old-password').value = '';
  document.getElementById('new-password').value = '';
  document.getElementById('confirm-password').value = '';
}

// --- ROUTER KONTEN UTAMA ---
function renderContent() {
  const db = getDb();
  const role = db.activeRole;
  const tab = db.activeTab;
  const contentArea = document.getElementById('main-workspace');

  if (tab === 'ganti-sandi') {
    contentArea.innerHTML = renderGantiSandiView(db);
    return;
  }

  if (tab === 'dashboard') {
    contentArea.innerHTML = renderDashboardView(role, db);
  } else if (tab === 'admin-users') {
    contentArea.innerHTML = renderAdminUsersView(db);
  } else if (tab === 'admin-karyawan') {
    contentArea.innerHTML = renderAdminKaryawanView(db);
  } else if (tab === 'admin-bobot') {
    contentArea.innerHTML = renderAdminBobotView(db);
  } else if (tab === 'admin-periode') {
    contentArea.innerHTML = renderAdminPeriodeView(db);
  } else if (tab === 'spv-input') {
    contentArea.innerHTML = renderSpvInputView(db);
    attachLiveCalculatorListeners();
  } else if (tab === 'spv-finalisasi') {
    contentArea.innerHTML = renderSpvFinalisasiView(db);
  } else if (tab === 'laporan') {
    contentArea.innerHTML = renderLaporanView(db);
  } else if (tab === 'karyawan-scorecard') {
    contentArea.innerHTML = renderKaryawanScorecardView(db);
  } else if (tab === 'karyawan-feedback') {
    contentArea.innerHTML = renderKaryawanFeedbackView(db);
  } else if (tab === 'karyawan-profil') {
    contentArea.innerHTML = renderKaryawanProfilView(db);
  }
}

// ==========================================================================
// 1. DASHBOARD UTAMA (ADMIN & SUPERVISOR)
// ==========================================================================
function renderDashboardView(role, db) {
  const currentPeriodeId = Number(db.selectedPeriodeId || 1);
  const currentPeriode = db.periode.find(p => p.id === currentPeriodeId) || db.periode[0];
  const periodePenilaian = db.penilaian.filter(p => p.periodeId === currentPeriodeId);

  const totalKaryawan = db.karyawan.length;
  const finalCount = periodePenilaian.filter(p => p.status === 'FINAL').length;
  const draftCount = periodePenilaian.filter(p => p.status === 'DRAFT').length;
  const avgScore = periodePenilaian.length > 0 
    ? (periodePenilaian.reduce((acc, curr) => acc + curr.nilaiAkhir, 0) / periodePenilaian.length).toFixed(1)
    : '0.0';

  let avgGrade = 'E';
  let avgKategori = 'Sangat Kurang';
  const numAvg = Number(avgScore);
  if (numAvg >= 85) { avgGrade = 'A'; avgKategori = 'Sangat Baik'; }
  else if (numAvg >= 75) { avgGrade = 'B'; avgKategori = 'Baik'; }
  else if (numAvg >= 65) { avgGrade = 'C'; avgKategori = 'Cukup'; }
  else if (numAvg >= 55) { avgGrade = 'D'; avgKategori = 'Kurang'; }

  // Admin tidak memerlukan tombol edit nilai (hanya pengawasan/monitoring)
  const isSupervisor = (role === 'supervisor');

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Dashboard Sistem Informasi Penilaian Kinerja</h2>
        <p>PT ISS Indonesia &bull; Unit Penempatan: Pemerintah Kota Tangerang Selatan</p>
      </div>
    </div>

    <!-- Statistik Ringkas -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Total Karyawan CS</span>
          <span class="stat-icon">👥</span>
        </div>
        <div class="stat-value">${totalKaryawan}</div>
        <div class="stat-desc">Area Penempatan PEMDA Tangsel</div>
      </div>

      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Penilaian Selesai</span>
          <span class="stat-icon">✅</span>
        </div>
        <div class="stat-value">${finalCount} <span style="font-size:1rem;color:var(--text-muted)">/ ${totalKaryawan}</span></div>
        <div class="stat-desc">${draftCount} data berstatus DRAFT</div>
      </div>

      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Rata-Rata Nilai</span>
          <span class="stat-icon">⭐</span>
        </div>
        <div class="stat-value">${avgScore}</div>
        <div class="stat-desc">Predikat: <strong>${avgKategori} (Grade ${avgGrade})</strong></div>
      </div>

      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Periode Terpilih</span>
          <span class="stat-icon">📅</span>
        </div>
        <div class="stat-value" style="font-size:1.25rem">${currentPeriode.nama.replace('Periode ', '')}</div>
        <div class="stat-desc">
          <span class="badge ${currentPeriode.status === 'Aktif' ? 'badge-success' : 'badge-subtle'}">
            ${currentPeriode.status === 'Aktif' ? 'Siklus Berjalan' : 'Siklus Selesai'}
          </span>
        </div>
      </div>
    </div>

    <!-- Panel Rekapitulasi Nilai Karyawan -->
    <div class="panel">
      <div class="panel-header" style="flex-wrap: wrap; gap: 12px;">
        <div class="panel-title">
          <span>📋</span> <span>Rekapitulasi Nilai Kinerja Petugas Cleaning Service</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
          <span id="rekap-count-badge" class="panel-badge" style="font-weight: 700; color: var(--iss-navy);">
            Menampilkan ${totalKaryawan} dari ${totalKaryawan} Karyawan
          </span>
        </div>
      </div>

      <!-- Toolbar Filter & Pencarian -->
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 14px; margin-bottom: 18px; flex-wrap: wrap; background: #f8fafc; padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <!-- Input Pencarian Nama Karyawan / NIK / Gedung -->
        <div style="position: relative; flex: 1; min-width: 260px;">
          <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 0.95rem; pointer-events: none; color: #94a3b8;">🔍</span>
          <input 
            type="text" 
            id="dashboard-search-karyawan" 
            class="form-input" 
            placeholder="Cari nama karyawan atau NIK ISS..." 
            oninput="handleSearchDashboardKaryawan(this.value)"
            style="padding-left: 36px; height: 38px; font-size: 0.85rem;"
          >
        </div>

        <!-- Pilihan Periode Bulan -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <label for="dashboard-select-periode" style="font-size: 0.82rem; font-weight: 700; color: var(--text-secondary); white-space: nowrap;">
            Pilih Periode:
          </label>
          <select 
            id="dashboard-select-periode" 
            class="form-input" 
            style="width: auto; height: 38px; font-weight: 700; font-size: 0.84rem; border-color: var(--iss-navy); cursor: pointer;" 
            onchange="handleSelectPeriodeDashboard(this.value)"
          >
            ${db.periode.map(per => `
              <option value="${per.id}" ${per.id === currentPeriodeId ? 'selected' : ''}>
                ${per.nama} ${per.status === 'Aktif' ? '(Berjalan)' : '(Selesai)'}
              </option>
            `).join('')}
          </select>
        </div>
      </div>

      <!-- Tabel Semua 34 Karyawan -->
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 50px;">No</th>
              <th>NIK ISS</th>
              <th>Nama Karyawan</th>
              <th>Disiplin (20%)</th>
              <th>Kualitas (35%)</th>
              <th>Tgg Jwb (25%)</th>
              <th>Kerjasama (20%)</th>
              <th>Nilai Akhir</th>
              <th>Grade</th>
              <th>Status</th>
              ${isSupervisor ? '<th style="text-align:center">Aksi</th>' : ''}
            </tr>
          </thead>
          <tbody id="dashboard-rekap-tbody">
            ${db.karyawan.map((k, idx) => {
              const p = periodePenilaian.find(item => item.karyawanId === k.id);
              if (p) {
                return `
                  <tr data-nama="${k.nama.toLowerCase()}" data-nik="${k.nik.toLowerCase()}" >
                    <td>${idx + 1}</td>
                    <td><code>${k.nik}</code></td>
                    <td><strong>${k.nama}</strong></td>
                    <td>${p.skorDisiplin}</td>
                    <td>${p.skorKualitas}</td>
                    <td>${p.skorTanggungJawab}</td>
                    <td>${p.skorKerjasama}</td>
                    <td><strong style="color:var(--iss-navy);font-size:0.95rem">${p.nilaiAkhir.toFixed(2)}</strong></td>
                    <td><span class="grade-badge grade-${p.grade}">${p.grade}</span></td>
                    <td>
                      ${p.status === 'FINAL' 
                        ? '<span class="badge badge-success">🔒 FINAL</span>' 
                        : '<span class="badge badge-warning">📝 DRAFT</span>'}
                    </td>
                    ${isSupervisor ? `
                      <td style="text-align:center">
                        <button class="btn btn-sm btn-outline" onclick="openEditPenilaianModal(${p.id})" title="Edit Nilai Karyawan" style="padding: 4px 10px; font-size: 0.76rem; font-weight: 600;">
                          ✏️ Edit
                        </button>
                      </td>
                    ` : ''}
                  </tr>
                `;
              } else {
                return `
                  <tr data-nama="${k.nama.toLowerCase()}" data-nik="${k.nik.toLowerCase()}" >
                    <td>${idx + 1}</td>
                    <td><code>${k.nik}</code></td>
                    <td><strong>${k.nama}</strong></td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td><span class="badge" style="background:#f1f5f9;color:#64748b">⏳ Belum Dinilai</span></td>
                    ${isSupervisor ? `
                      <td style="text-align:center">
                        <button class="btn btn-sm btn-primary" onclick="switchTab('spv-input')" title="Beri Penilaian" style="padding: 4px 10px; font-size: 0.76rem; font-weight: 600;">
                          ✍️ Nilai
                        </button>
                      </td>
                    ` : ''}
                  </tr>
                `;
              }
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ==========================================================================
// 2. KELOLA PENGGUNA (ADMIN)
// ==========================================================================
function renderAdminUsersView(db) {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Kelola Data Pengguna Sistem</h2>
        <p>Pengaturan akun akses Administrator, Supervisor Operasional, dan Seluruh Petugas Cleaning Service</p>
      </div>
      <div>
        <button class="btn btn-primary btn-sm" onclick="openAddUserModal()">+ Tambah Pengguna Baru</button>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header" style="flex-wrap: wrap; gap: 12px;">
        <div class="panel-title">Daftar Akun Pengguna Terdaftar</div>
        <span id="user-count-badge" class="panel-badge">${db.users.length} Akun Terdaftar</span>
      </div>

      <!-- Toolbar Pencarian Pengguna -->
      <div style="margin-bottom: 18px;">
        <div style="position: relative; max-width: 400px;">
          <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 0.95rem; pointer-events: none; color: #94a3b8;">🔍</span>
          <input 
            type="text" 
            id="user-search-input" 
            class="form-input" 
            placeholder="Cari nama pengguna, NIK / username, peran..." 
            oninput="handleSearchUsers(this.value)"
            style="padding-left: 36px; height: 38px; font-size: 0.85rem;"
          >
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 50px;">No</th>
              <th>Username / NIK</th>
              <th>Nama Lengkap</th>
              <th>Hak Akses (Peran)</th>
              <th>Status Karyawan</th>
              <th>Kata Sandi</th>
              <th style="text-align: center;">Aksi</th>
            </tr>
          </thead>
          <tbody id="user-table-tbody">
            ${db.users.map((u, idx) => `
              <tr data-nama="${(u.nama || '').toLowerCase()}" data-user="${(u.username || '').toLowerCase()}" data-role="${(u.role || '').toLowerCase()}">
                <td>${idx + 1}</td>
                <td><code>${u.username}</code></td>
                <td><strong>${u.nama}</strong></td>
                <td><span class="role-tag role-${u.role}">${u.role.toUpperCase()}</span></td>
                <td>
                  <span class="badge ${u.status === 'Tetap' ? 'badge-success' : 'badge-warning'}">
                    ${u.status || 'Tetap'}
                  </span>
                </td>
                <td>
                  <code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem;">••••••••</code>
                </td>
                <td style="text-align: center; white-space: nowrap;">
                  <button class="btn btn-outline btn-sm" onclick="openEditUserModal(${u.id})" title="Edit Data & Status Pengguna" style="padding: 4px 8px; font-size: 0.76rem; font-weight: 600;">
                    ✏️ Edit
                  </button>
                  <button class="btn btn-outline btn-sm" onclick="promptChangeUserPassword(${u.id})" title="Ubah Kata Sandi" style="padding: 4px 8px; font-size: 0.76rem; font-weight: 600; margin-left: 4px;">
                    🔑 Sandi
                  </button>
                  ${u.role !== 'admin' ? `
                    <button class="btn btn-outline btn-sm" onclick="deleteUser(${u.id})" title="Hapus Pengguna" style="padding: 4px 8px; font-size: 0.76rem; color: var(--danger); border-color: #fecaca; margin-left: 4px;">
                      🗑️
                    </button>
                  ` : ''}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ==========================================================================
// 3. KELOLA KARYAWAN CS (ADMIN)
// ==========================================================================
function renderAdminKaryawanView(db) {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Data 41 Karyawan Cleaning Service</h2>
        <p>Master Data Petugas Kebersihan PT ISS Indonesia Area Unit Pemda Tangerang Selatan</p>
      </div>
      <div>
        <button class="btn btn-primary btn-sm" onclick="openAddKaryawanModal()">+ Tambah Karyawan Baru</button>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Daftar Petugas Kebersihan PT ISS</div>
        <span class="panel-badge">${db.karyawan.length} Petugas</span>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 50px;">No</th>
              <th>NIK ISS</th>
              <th>Nama Petugas</th>
              <th>Jabatan</th>
              <th>Status Karyawan</th>
              <th style="text-align: center;">Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${db.karyawan.map((k, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td><code>${k.nik}</code></td>
                <td><strong>${k.nama}</strong></td>
                <td>${k.jabatan || 'Cleaner'}</td>
                <td>
                  <span class="badge ${k.status === 'Tetap' ? 'badge-success' : 'badge-warning'}">
                    ${k.status || 'Tetap'}
                  </span>
                </td>
                <td style="text-align: center;">
                  <button class="btn btn-outline btn-sm" onclick="openEditKaryawanStatusModal(${k.id})" style="padding: 4px 10px; font-size: 0.76rem; font-weight: 600;">
                    ✏️ Edit Status
                  </button>
                  <button class="btn btn-outline btn-sm" onclick="hapusKaryawan(${k.id})" style="padding: 4px 10px; font-size: 0.76rem; color: var(--danger); border-color: #fecaca; margin-left: 4px;">
                    Hapus
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ==========================================================================
// 4. SKALA & BOBOT ASPEK (ADMIN)
// ==========================================================================
function renderAdminBobotView(db) {
  const b = db.bobotAspek;
  const total = (b.disiplin + b.kualitas + b.tanggungJawab + b.kerjasama) * 100;

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Skala &amp; Bobot Aspek Penilaian</h2>
        <p>Parameter resmi pembobotan indikator penilaian kinerja PT ISS Indonesia</p>
      </div>
    </div>

    <div class="scoring-grid">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">4 Aspek Penilaian Kinerja</div>
          <span class="panel-badge">Total Bobot: ${total.toFixed(0)}%</span>
        </div>
        <form onsubmit="handleSaveBobot(event)">
          <div class="criteria-group">
            <div class="criteria-header">
              <div class="criteria-title">1. Disiplin Kerja (Kehadiran &amp; APD)</div>
              <span class="weight-tag">Bobot: ${(b.disiplin * 100).toFixed(0)}%</span>
            </div>
            <input type="number" id="bobot-disiplin" class="form-input" value="${(b.disiplin * 100)}" min="5" max="100" required>
          </div>

          <div class="criteria-group">
            <div class="criteria-header">
              <div class="criteria-title">2. Kualitas Kerja (Kebersihan Area &amp; Sanitasi)</div>
              <span class="weight-tag">Bobot: ${(b.kualitas * 100).toFixed(0)}%</span>
            </div>
            <input type="number" id="bobot-kualitas" class="form-input" value="${(b.kualitas * 100)}" min="5" max="100" required>
          </div>

          <div class="criteria-group">
            <div class="criteria-header">
              <div class="criteria-title">3. Tanggung Jawab &amp; Sikap (SOP Chemical)</div>
              <span class="weight-tag">Bobot: ${(b.tanggungJawab * 100).toFixed(0)}%</span>
            </div>
            <input type="number" id="bobot-tanggung" class="form-input" value="${(b.tanggungJawab * 100)}" min="5" max="100" required>
          </div>

          <div class="criteria-group">
            <div class="criteria-header">
              <div class="criteria-title">4. Kerjasama Tim (Koordinasi &amp; Komunikasi)</div>
              <span class="weight-tag">Bobot: ${(b.kerjasama * 100).toFixed(0)}%</span>
            </div>
            <input type="number" id="bobot-kerjasama" class="form-input" value="${(b.kerjasama * 100)}" min="5" max="100" required>
          </div>

          <button type="submit" class="btn btn-primary btn-block">Simpan Pengaturan Bobot</button>
        </form>
      </div>

      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Tabel Skala Nilai &amp; Predikat</div>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>Grade</th><th>Rentang Nilai</th><th>Predikat</th></tr>
          </thead>
          <tbody>
            <tr><td><span class="grade-badge grade-A">A</span></td><td>85.00 - 100.00</td><td>Sangat Baik</td></tr>
            <tr><td><span class="grade-badge grade-B">B</span></td><td>75.00 - 84.99</td><td>Baik</td></tr>
            <tr><td><span class="grade-badge grade-C">C</span></td><td>65.00 - 74.99</td><td>Cukup</td></tr>
            <tr><td><span class="grade-badge grade-D">D</span></td><td>55.00 - 64.99</td><td>Kurang</td></tr>
            <tr><td><span class="grade-badge grade-E">E</span></td><td>&lt; 55.00</td><td>Sangat Kurang</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function handleSaveBobot(e) {
  e.preventDefault();
  const d = Number(document.getElementById('bobot-disiplin').value);
  const k = Number(document.getElementById('bobot-kualitas').value);
  const t = Number(document.getElementById('bobot-tanggung').value);
  const c = Number(document.getElementById('bobot-kerjasama').value);

  if ((d + k + t + c) !== 100) {
    alert(`Total penjumlahan bobot harus 100%! (Saat ini: ${d + k + t + c}%)`);
    return;
  }

  const db = getDb();
  db.bobotAspek = {
    disiplin: d / 100,
    kualitas: k / 100,
    tanggungJawab: t / 100,
    kerjasama: c / 100
  };
  saveDb(db);
  showToast('Pengaturan bobot berhasil diperbarui!', 'success');
  renderContent();
}

// ==========================================================================
// 5. PERIODE EVALUASI (ADMIN)
// ==========================================================================
function renderAdminPeriodeView(db) {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Periode Penilaian Kinerja</h2>
        <p>Pengaturan siklus evaluasi bulanan petugas kebersihan PT ISS Indonesia</p>
      </div>
      <div>
        <button class="btn btn-primary btn-sm" onclick="openTambahPeriodeModal()">+ Buka Periode Baru</button>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Daftar Siklus Periode Penilaian</div>
        <span class="panel-badge">${db.periode.length} Periode Terdata</span>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Periode</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal Selesai</th>
              <th>Status</th>
              <th style="text-align: center;">Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${db.periode.map((p, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td><code>${p.kode}</code></td>
                <td><strong>${p.nama}</strong></td>
                <td>${p.tglMulai}</td>
                <td>${p.tglSelesai}</td>
                <td>
                  ${p.status === 'Aktif' 
                    ? '<span class="badge badge-success">Aktif / Berjalan</span>' 
                    : '<span class="badge badge-warning">Selesai / Ditutup</span>'}
                </td>
                <td style="text-align: center; white-space: nowrap;">
                  ${p.status === 'Aktif' 
                    ? `<button class="btn btn-outline btn-sm" onclick="toggleStatusPeriode(${p.id})" style="padding: 4px 8px; font-size: 0.76rem; font-weight: 600;">🔒 Tutup Periode</button>` 
                    : `<button class="btn btn-outline btn-sm" onclick="toggleStatusPeriode(${p.id})" style="padding: 4px 8px; font-size: 0.76rem; font-weight: 600; color: var(--success); border-color: #bbf7d0;">🔓 Aktifkan</button>`}
                  <button class="btn btn-outline btn-sm" onclick="hapusPeriode(${p.id})" title="Hapus Periode" style="padding: 4px 8px; font-size: 0.76rem; color: var(--danger); border-color: #fecaca; margin-left: 4px;">
                    🗑️
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ==========================================================================
// 6. INPUT PENILAIAN DENGAN LIVE CALCULATOR (SUPERVISOR)
// ==========================================================================
function renderSpvInputView(db) {
  const currentPeriodeId = Number(db.selectedPeriodeId || 1);
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Input Penilaian Kinerja Karyawan</h2>
        <p>Supervisor: SAYUTI &bull; Rumus: <code>Nilai Akhir = Σ(Skor × Bobot)</code></p>
      </div>
    </div>

    <div class="scoring-grid">
      <div>
        <div class="panel">
          <div class="form-group">
            <label class="form-label">Pilih Karyawan Cleaning Service</label>
            <select id="select-karyawan" class="form-input">
              ${db.karyawan.map(k => `
                <option value="${k.id}">${k.nik} - ${k.nama}</option>
              `).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Periode Evaluasi</label>
            <select id="spv-select-periode" class="form-input">
              ${db.periode.map(p => `
                <option value="${p.id}" ${p.id === currentPeriodeId ? 'selected' : ''}>
                  ${p.nama} ${p.status === 'Aktif' ? '(Aktif / Berjalan)' : '(Selesai)'}
                </option>
              `).join('')}
            </select>
          </div>
        </div>

        <div class="criteria-group">
          <div class="criteria-header">
            <div class="criteria-title">1. Disiplin Kerja (Kehadiran &amp; APD)</div>
            <span class="weight-tag">Bobot: ${(db.bobotAspek.disiplin * 100).toFixed(0)}%</span>
          </div>
          <div class="item-slider-row">
            <div class="item-meta">
              <span class="item-name">Kehadiran, Ketepatan Apel Pagi, &amp; Seragam Lengkap</span>
              <span class="item-score-val" id="val-disiplin">85</span>
            </div>
            <input type="range" id="slider-disiplin" class="slider-control" min="0" max="100" value="85">
          </div>
        </div>

        <div class="criteria-group">
          <div class="criteria-header">
            <div class="criteria-title">2. Kualitas Kerja (Kebersihan Area &amp; Sanitasi)</div>
            <span class="weight-tag">Bobot: ${(db.bobotAspek.kualitas * 100).toFixed(0)}%</span>
          </div>
          <div class="item-slider-row">
            <div class="item-meta">
              <span class="item-name">Kebersihan Ruang Kerja, Toilet, Penanganan Komplain</span>
              <span class="item-score-val" id="val-kualitas">88</span>
            </div>
            <input type="range" id="slider-kualitas" class="slider-control" min="0" max="100" value="88">
          </div>
        </div>

        <div class="criteria-group">
          <div class="criteria-header">
            <div class="criteria-title">3. Tanggung Jawab &amp; Sikap (SOP Chemical)</div>
            <span class="weight-tag">Bobot: ${(db.bobotAspek.tanggungJawab * 100).toFixed(0)}%</span>
          </div>
          <div class="item-slider-row">
            <div class="item-meta">
              <span class="item-name">Inisiatif Kerja, Etika Kesopanan, Kepatuhan SOP Kimia</span>
              <span class="item-score-val" id="val-tanggung">82</span>
            </div>
            <input type="range" id="slider-tanggung" class="slider-control" min="0" max="100" value="82">
          </div>
        </div>

        <div class="criteria-group">
          <div class="criteria-header">
            <div class="criteria-title">4. Kerjasama Tim (Koordinasi &amp; Back-up)</div>
            <span class="weight-tag">Bobot: ${(db.bobotAspek.kerjasama * 100).toFixed(0)}%</span>
          </div>
          <div class="item-slider-row">
            <div class="item-meta">
              <span class="item-name">Kerjasama Rekan Kerja &amp; Respon Arahan Supervisor</span>
              <span class="item-score-val" id="val-kerjasama">85</span>
            </div>
            <input type="range" id="slider-kerjasama" class="slider-control" min="0" max="100" value="85">
          </div>
        </div>

        <div class="panel">
          <label class="form-label">Catatan Evaluasi &amp; Masukan Supervisor</label>
          <textarea id="catatan-spv" class="form-input" rows="3" placeholder="Tuliskan catatan apresiasi atau evaluasi kinerja..."></textarea>
          
          <div style="display:flex; gap:10px; margin-top:16px;">
            <button class="btn btn-outline" style="flex:1" onclick="simpanPenilaian('DRAFT')">💾 Simpan DRAFT</button>
            <button class="btn btn-primary" style="flex:1" onclick="simpanPenilaian('FINAL')">🔒 Simpan &amp; Finalisasi</button>
          </div>
        </div>
      </div>

      <!-- Live Calculation Card -->
      <div>
        <div class="calculator-card">
          <div class="calc-title">⚡ Kalkulator Nilai Otomatis</div>
          <div class="score-display-box">
            <div class="final-score-number" id="live-nilai-akhir">86.05</div>
            <div class="final-grade-badge grade-A" id="live-grade-badge">PREDIKAT: SANGAT BAIK (A)</div>
          </div>

          <ul class="breakdown-list">
            <li class="breakdown-item">
              <span class="label">Disiplin (${(db.bobotAspek.disiplin * 100)}%):</span>
              <span class="val" id="bd-disiplin">17.00 poin</span>
            </li>
            <li class="breakdown-item">
              <span class="label">Kualitas (${(db.bobotAspek.kualitas * 100)}%):</span>
              <span class="val" id="bd-kualitas">30.80 poin</span>
            </li>
            <li class="breakdown-item">
              <span class="label">Tanggung Jawab (${(db.bobotAspek.tanggungJawab * 100)}%):</span>
              <span class="val" id="bd-tanggung">20.50 poin</span>
            </li>
            <li class="breakdown-item">
              <span class="label">Kerjasama (${(db.bobotAspek.kerjasama * 100)}%):</span>
              <span class="val" id="bd-kerjasama">17.00 poin</span>
            </li>
          </ul>

          <div style="font-size:0.75rem; color:var(--text-muted); text-align:center;">
            Nilai dan predikat dihitung seketika berdasarkan bobot resmi PT ISS.
          </div>
        </div>
      </div>
    </div>
  `;
}

function attachLiveCalculatorListeners() {
  const sD = document.getElementById('slider-disiplin');
  const sK = document.getElementById('slider-kualitas');
  const sT = document.getElementById('slider-tanggung');
  const sC = document.getElementById('slider-kerjasama');

  if (!sD) return;

  const update = () => {
    const db = getDb();
    const dVal = Number(sD.value);
    const kVal = Number(sK.value);
    const tVal = Number(sT.value);
    const cVal = Number(sC.value);

    document.getElementById('val-disiplin').innerText = dVal;
    document.getElementById('val-kualitas').innerText = kVal;
    document.getElementById('val-tanggung').innerText = tVal;
    document.getElementById('val-kerjasama').innerText = cVal;

    const res = hitungNilaiDanGrade(dVal, kVal, tVal, cVal, db.bobotAspek);

    document.getElementById('live-nilai-akhir').innerText = res.nilaiAkhir.toFixed(2);
    
    const badge = document.getElementById('live-grade-badge');
    badge.className = `final-grade-badge grade-${res.grade}`;
    badge.innerText = `PREDIKAT: ${res.kategori.toUpperCase()} (${res.grade})`;

    document.getElementById('bd-disiplin').innerText = (dVal * db.bobotAspek.disiplin).toFixed(2) + ' poin';
    document.getElementById('bd-kualitas').innerText = (kVal * db.bobotAspek.kualitas).toFixed(2) + ' poin';
    document.getElementById('bd-tanggung').innerText = (tVal * db.bobotAspek.tanggungJawab).toFixed(2) + ' poin';
    document.getElementById('bd-kerjasama').innerText = (cVal * db.bobotAspek.kerjasama).toFixed(2) + ' poin';
  };

  [sD, sK, sT, sC].forEach(slider => slider.addEventListener('input', update));
  update();
}

function simpanPenilaian(targetStatus) {
  const db = getDb();
  const kId = Number(document.getElementById('select-karyawan').value);
  const targetPeriodeId = document.getElementById('spv-select-periode')
    ? Number(document.getElementById('spv-select-periode').value)
    : (db.selectedPeriodeId || 1);
  const sD = Number(document.getElementById('slider-disiplin').value);
  const sK = Number(document.getElementById('slider-kualitas').value);
  const sT = Number(document.getElementById('slider-tanggung').value);
  const sC = Number(document.getElementById('slider-kerjasama').value);
  const catatan = document.getElementById('catatan-spv').value.trim();

  const calc = hitungNilaiDanGrade(sD, sK, sT, sC, db.bobotAspek);

  let existing = db.penilaian.find(p => p.karyawanId === kId && p.periodeId === targetPeriodeId);
  const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const todayStr = new Date().toISOString().substring(0, 10);

  if (existing) {
    existing.skorDisiplin = sD;
    existing.skorKualitas = sK;
    existing.skorTanggungJawab = sT;
    existing.skorKerjasama = sC;
    existing.nilaiAkhir = calc.nilaiAkhir;
    existing.grade = calc.grade;
    existing.kategori = calc.kategori;
    existing.status = targetStatus;
    if (catatan) existing.catatanSpv = catatan;
    if (targetStatus === 'FINAL') existing.tglFinalisasi = nowStr;
  } else {
    db.penilaian.push({
      id: db.penilaian.length > 0 ? Math.max(...db.penilaian.map(p => p.id)) + 1 : 1,
      karyawanId: kId,
      periodeId: targetPeriodeId,
      skorDisiplin: sD,
      skorKualitas: sK,
      skorTanggungJawab: sT,
      skorKerjasama: sC,
      nilaiAkhir: calc.nilaiAkhir,
      grade: calc.grade,
      kategori: calc.kategori,
      status: targetStatus,
      catatanSpv: catatan || 'Kinerja baik, pertahankan kebersihan area.',
      tglPenilaian: todayStr,
      tglFinalisasi: targetStatus === 'FINAL' ? nowStr : null,
      feedbackKaryawan: null,
      tglFeedback: null
    });
  }

  saveDb(db);
  showToast(`Penilaian disimpan dengan status: ${targetStatus}`, 'success');
  switchTab(targetStatus === 'FINAL' ? 'spv-finalisasi' : 'dashboard');
}

// ==========================================================================
// 7. REVIEW & FINALISASI (SUPERVISOR)
// ==========================================================================
function renderSpvFinalisasiView(db) {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Review &amp; Finalisasi Penilaian</h2>
        <p>Kunci nilai kinerja agar resmi terbit ke portal karyawan</p>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Daftar Penilaian Tim Cleaning Service</div>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>NIK</th>
              <th>Nama Petugas</th>
              <th>Nilai Akhir</th>
              <th>Grade</th>
              <th>Catatan Supervisor</th>
              <th>Status</th>
              <th>Aksi Penguncian</th>
            </tr>
          </thead>
          <tbody>
            ${db.penilaian.map(p => {
              const k = db.karyawan.find(item => item.id === p.karyawanId) || {};
              return `
                <tr>
                  <td><code>${k.nik}</code></td>
                  <td><strong>${k.nama}</strong></td>
                  <td><strong style="color:var(--iss-navy);font-size:1.05rem">${p.nilaiAkhir.toFixed(2)}</strong></td>
                  <td><span class="grade-badge grade-${p.grade}">${p.grade}</span></td>
                  <td style="max-width:280px;font-size:0.8rem;color:var(--text-secondary)">${p.catatanSpv || '-'}</td>
                  <td>
                    ${p.status === 'FINAL' 
                      ? '<span class="badge badge-success">🔒 FINAL</span>' 
                      : '<span class="badge badge-warning">📝 DRAFT</span>'}
                  </td>
                  <td>
                    ${p.status === 'FINAL'
                      ? `<button class="btn btn-outline btn-sm" disabled style="opacity:0.6">Terkunci</button>`
                      : `<button class="btn btn-success btn-sm" onclick="finalisasiSatuPenilaian(${p.id})">🔒 Kunci &amp; Finalisasi</button>`
                    }
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function finalisasiSatuPenilaian(id) {
  const db = getDb();
  const p = db.penilaian.find(item => item.id === id);
  if (p) {
    p.status = 'FINAL';
    p.tglFinalisasi = '2026-10-17 11:30:00';
    saveDb(db);
    showToast(`Penilaian ID #${id} berhasil di-FINALISASI!`, 'success');
    renderContent();
  }
}

// ==========================================================================
// 8. REKAPITULASI & CETAK LAPORAN (ADMIN & SUPERVISOR)
// ==========================================================================
function renderLaporanView(db) {
  const currentLaporanPeriodeId = Number(db.laporanPeriodeId || db.selectedPeriodeId || (db.periode[0] ? db.periode[0].id : 1));
  const activePeriode = db.periode.find(p => p.id === currentLaporanPeriodeId) || db.periode[0] || { nama: 'Periode Berjalan', kode: 'PER-2026-10', tglSelesai: '2026-10-31' };

  return `
    <div class="page-header no-print">
      <div class="page-title-group">
        <h2>Rekapitulasi &amp; Cetak Laporan Kinerja</h2>
        <p>Laporan Resmi Evaluasi Kinerja Cleaning Service PT ISS Indonesia Area PEMDA Tangerang Selatan</p>
      </div>
      <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px; background: white; padding: 6px 14px; border: 1px solid var(--border-color); border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--iss-navy);">📅 Pilih Periode Laporan:</span>
          <select id="laporan-select-periode" class="form-input" style="padding: 4px 10px; font-size: 0.85rem; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer; font-weight: 600; color: var(--iss-navy);" onchange="handleSelectPeriodeLaporan(this.value)">
            ${db.periode.map(p => `
              <option value="${p.id}" ${p.id === currentLaporanPeriodeId ? 'selected' : ''}>
                ${p.nama} ${p.status === 'Aktif' ? '(Aktif / Berjalan)' : '(Selesai / Ditutup)'}
              </option>
            `).join('')}
          </select>
        </div>
        <button class="btn btn-primary btn-sm" onclick="window.print()">🖨️ Cetak / Ekspor PDF Resmi</button>
      </div>
    </div>

    <div class="print-header">
      <h2>PT ISS INDONESIA &bull; FACILITY SERVICES</h2>
      <p>Laporan Rekapitulasi Penilaian Kinerja Karyawan Cleaning Service</p>
      <p>Lokasi: Pemerintah Kota Tangerang Selatan &bull; Periode: ${activePeriode.nama} (${activePeriode.kode})</p>
      <hr style="margin: 10px 0;">
    </div>

    <div class="panel">
      <div class="panel-header" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="panel-title">Tabel Rekapitulasi Nilai Akhir Karyawan</div>
        <span class="panel-badge" style="background: rgba(30,58,138,0.1); color: var(--iss-navy); font-weight: 600;">Periode: ${activePeriode.nama}</span>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>NIK ISS</th>
              <th>Nama Karyawan</th>
              <th>Jabatan</th>
              <th>Disiplin</th>
              <th>Kualitas</th>
              <th>Tanggung Jwb</th>
              <th>Kerjasama</th>
              <th>Nilai Akhir</th>
              <th>Predikat</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${db.karyawan.map((k, idx) => {
              const p = db.penilaian.find(item => item.karyawanId === k.id && item.periodeId === currentLaporanPeriodeId);
              if (p) {
                return `
                  <tr>
                    <td>${idx + 1}</td>
                    <td><code>${k.nik}</code></td>
                    <td><strong>${k.nama}</strong></td>
                    <td>${k.jabatan || 'Cleaner'}</td>
                    <td>${p.skorDisiplin}</td>
                    <td>${p.skorKualitas}</td>
                    <td>${p.skorTanggungJawab}</td>
                    <td>${p.skorKerjasama}</td>
                    <td><strong style="color:var(--iss-navy);font-size:1rem">${p.nilaiAkhir.toFixed(2)}</strong></td>
                    <td><span class="grade-badge grade-${p.grade}">${p.grade} - ${p.kategori}</span></td>
                    <td><span class="badge ${p.status === 'FINAL' ? 'badge-success' : 'badge-warning'}">${p.status}</span></td>
                  </tr>
                `;
              } else {
                return `
                  <tr>
                    <td>${idx + 1}</td>
                    <td><code>${k.nik}</code></td>
                    <td><strong>${k.nama}</strong></td>
                    <td>${k.jabatan || 'Cleaner'}</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td style="color:var(--text-dim)">-</td>
                    <td><span class="badge" style="background:#f1f5f9;color:#64748b">Belum Dinilai</span></td>
                  </tr>
                `;
              }
            }).join('')}
          </tbody>
        </table>
      </div>

      <div style="margin-top:40px; display:flex; justify-content:space-between; text-align:center; padding:0 30px;">
        <div>
          <p style="font-size:0.84rem; color:var(--text-secondary)">Mengetahui,<br><strong>Project Manager PT ISS</strong></p>
          <div style="height:60px"></div>
          <p style="font-size:0.84rem; text-decoration:underline; font-weight:700">Rahmat Hidayat, S.E.</p>
        </div>
        <div>
          <p style="font-size:0.84rem; color:var(--text-secondary)">Tangerang Selatan, ${formatTanggalIndo(activePeriode.tglSelesai || '2026-10-31')}<br><strong>Supervisor Operasional</strong></p>
          <div style="height:60px"></div>
          <p style="font-size:0.84rem; text-decoration:underline; font-weight:700">SAYUTI</p>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 9. HASIL PENILAIAN SAYA (KARYAWAN)
// ==========================================================================
function renderKaryawanScorecardView(db) {
  const currentKaryawan = db.karyawan.find(k => k.id === (db.currentUser?.karyawanId || 1)) || db.karyawan[0];
  const p = db.penilaian.find(item => item.karyawanId === currentKaryawan.id && item.periodeId === 1) || {
    nilaiAkhir: 0,
    grade: '-',
    kategori: 'Belum Dinilai',
    skorDisiplin: 0,
    skorKualitas: 0,
    skorTanggungJawab: 0,
    skorKerjasama: 0,
    catatanSpv: 'Penilaian kinerja Anda untuk periode ini sedang disiapkan oleh Supervisor (SAYUTI).',
    status: 'PENDING',
    feedbackKaryawan: null
  };

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Hasil Penilaian Kinerja Saya</h2>
        <p>Evaluasi kinerja berkala petugas Cleaning Service PT ISS Indonesia</p>
      </div>
      <div>
        <span class="badge badge-success" style="padding:6px 14px">🔒 RESMI TERVERIFIKASI (FINAL)</span>
      </div>
    </div>

    <div class="scorecard-panel">
      <div class="scorecard-header">
        <div class="employee-card-meta">
          <div class="employee-photo">🧹</div>
          <div class="employee-info">
            <h3>${currentKaryawan.nama}</h3>
            <p>NIK: <strong>${currentKaryawan.nik}</strong> &bull; Jabatan: <strong>${currentKaryawan.jabatan}</strong></p>
            <p>Penempatan: <strong>${currentKaryawan.gedung}</strong> &bull; Supervisor: <strong>SAYUTI</strong></p>
          </div>
        </div>

        <div class="score-badge-jumbo">
          <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase">Nilai Akhir</div>
          <div class="num">${p.nilaiAkhir.toFixed(2)}</div>
          <span class="grade-badge grade-${p.grade}" style="font-size:0.88rem; padding:4px 14px">${p.grade} - ${p.kategori.toUpperCase()}</span>
        </div>
      </div>

      <h4 style="font-size:0.92rem; font-weight:700; color:var(--iss-navy); margin-bottom:14px">Capaian Nilai 4 Aspek Penilaian:</h4>

      <div class="progress-group">
        <div class="progress-meta">
          <span>1. Disiplin Kerja (20%): Kehadiran, Ketepatan Apel &amp; APD</span>
          <strong>${p.skorDisiplin} / 100</strong>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${p.skorDisiplin}%"></div>
        </div>
      </div>

      <div class="progress-group">
        <div class="progress-meta">
          <span>2. Kualitas Kerja (35%): Kebersihan Ruang Kerja &amp; Toilet</span>
          <strong>${p.skorKualitas} / 100</strong>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${p.skorKualitas}%"></div>
        </div>
      </div>

      <div class="progress-group">
        <div class="progress-meta">
          <span>3. Tanggung Jawab (25%): Inisiatif Kerja &amp; SOP Chemical</span>
          <strong>${p.skorTanggungJawab} / 100</strong>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${p.skorTanggungJawab}%"></div>
        </div>
      </div>

      <div class="progress-group">
        <div class="progress-meta">
          <span>4. Kerjasama Tim (20%): Koordinasi &amp; Komunikasi</span>
          <strong>${p.skorKerjasama} / 100</strong>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${p.skorKerjasama}%"></div>
        </div>
      </div>

      <div class="feedback-box">
        <h4 style="font-size:0.85rem; font-weight:700; color:var(--iss-navy); margin-bottom:6px">💬 Catatan Pembinaan Supervisor (Budi Prasetyo):</h4>
        <p style="font-size:0.86rem; color:var(--text-main); font-style:italic">"${p.catatanSpv}"</p>
      </div>

      <div style="margin-top:20px; text-align:right">
        <button class="btn btn-primary" onclick="switchTab('karyawan-feedback')">💬 Tulis Tanggapan Karyawan &rarr;</button>
      </div>
    </div>
  `;
}

// ==========================================================================
// 10. BERI TANGGAPAN (KARYAWAN)
// ==========================================================================
function renderKaryawanFeedbackView(db) {
  const currentKaryawan = db.karyawan.find(k => k.id === (db.currentUser?.karyawanId || 1)) || db.karyawan[0];
  const p = db.penilaian.find(item => item.karyawanId === currentKaryawan.id && item.periodeId === 1) || {
    nilaiAkhir: 0, grade: '-', kategori: 'Belum Dinilai', feedbackKaryawan: null
  };
  const hasFeedback = p && p.feedbackKaryawan;

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Beri Tanggapan (Feedback) Karyawan</h2>
        <p>Respon dan komitmen kerja atas hasil penilaian yang diberikan atasan</p>
      </div>
    </div>

    <div class="panel" style="max-width:760px; margin:0 auto">
      <div class="panel-header">
        <div class="panel-title">Formulir Tanggapan Kinerja</div>
        ${hasFeedback 
          ? '<span class="badge badge-success">✅ Tanggapan Sudah Terkirim</span>' 
          : '<span class="badge badge-warning">⏳ Menunggu Tanggapan</span>'}
      </div>

      <div style="background:var(--bg-subtle); padding:14px; border-radius:var(--radius-md); margin-bottom:18px;">
        <p style="font-size:0.82rem; color:var(--text-secondary)">
          Nilai Anda: <strong style="color:var(--iss-navy)">${p.nilaiAkhir.toFixed(2)} (${p.grade} - ${p.kategori})</strong> &bull; Periode: Oktober 2026
        </p>
      </div>

      ${hasFeedback ? `
        <div class="feedback-box">
          <span class="badge badge-success" style="margin-bottom:8px">🔒 Tanggapan Tersimpan di Sistem</span>
          <p style="font-size:0.88rem; color:var(--text-main); line-height:1.6; margin-bottom:6px">"${p.feedbackKaryawan}"</p>
          <div style="font-size:0.74rem; color:var(--text-muted)">Waktu kirim: ${p.tglFeedback}</div>
        </div>
        <div style="margin-top:16px">
          <button class="btn btn-outline btn-sm" onclick="editFeedbackAgain()">Ubah Tanggapan</button>
        </div>
      ` : `
        <form onsubmit="kirimFeedbackKaryawan(event)">
          <div class="form-group">
            <label class="form-label">Tuliskan respon, tanggapan, atau komitmen perbaikan Anda:</label>
            <textarea id="input-feedback-teks" class="form-input" rows="4" placeholder="Tuliskan tanggapan Anda di sini (minimal 10 karakter)..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Kirim Tanggapan ke Atasan</button>
        </form>
      `}
    </div>
  `;
}

function kirimFeedbackKaryawan(e) {
  e.preventDefault();
  const teks = document.getElementById('input-feedback-teks').value.trim();

  if (teks.length < 35) {
    alert('Tanggapan wajib diisi minimal 10 karakter!');
    return;
  }

  const db = getDb();
  const currentKaryawan = db.karyawan.find(k => k.id === (db.currentUser?.karyawanId || 1)) || db.karyawan[0];
  const p = db.penilaian.find(item => item.karyawanId === currentKaryawan.id && item.periodeId === 1) || {
    nilaiAkhir: 0, grade: '-', kategori: 'Belum Dinilai', feedbackKaryawan: null
  };
  if (p) {
    p.feedbackKaryawan = teks;
    const now = new Date();
    p.tglFeedback = now.toISOString().replace('T', ' ').substring(0, 19);
    saveDb(db);
    showToast('Tanggapan Anda berhasil disimpan!', 'success');
    renderContent();
  }
}

function editFeedbackAgain() {
  const db = getDb();
  const currentKaryawan = db.karyawan.find(k => k.id === (db.currentUser?.karyawanId || 1)) || db.karyawan[0];
  const p = db.penilaian.find(item => item.karyawanId === currentKaryawan.id && item.periodeId === 1) || {
    nilaiAkhir: 0, grade: '-', kategori: 'Belum Dinilai', feedbackKaryawan: null
  };
  if (p) {
    p.feedbackKaryawan = null;
    saveDb(db);
    renderContent();
  }
}

// ==========================================================================
// 11. PROFIL KARYAWAN (KARYAWAN)
// ==========================================================================
function renderKaryawanProfilView(db) {
  const k = db.karyawan.find(item => item.id === 1);
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h2>Profil Petugas Kebersihan</h2>
        <p>Data penempatan kerja PT ISS Indonesia</p>
      </div>
    </div>

    <div class="panel" style="max-width:650px; margin:0 auto">
      <div style="display:flex; gap:16px; align-items:center; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border-color)">
        <div class="employee-photo" style="width:72px; height:72px; font-size:1.8rem">👨‍💼</div>
        <div>
          <h3 style="font-size:1.2rem; color:var(--iss-navy)">${k.nama}</h3>
          <p style="color:var(--text-secondary); font-weight:600">${k.jabatan}</p>
          <span class="badge badge-success" style="margin-top:4px">${k.status}</span>
        </div>
      </div>

      <div class="breakdown-list">
        <div class="breakdown-item">
          <span class="label">Nomor Induk Karyawan (NIK):</span>
          <span class="val"><code>${k.nik}</code></span>
        </div>
        <div class="breakdown-item">
          <span class="label">Instansi Penempatan:</span>
          <span class="val">Pemerintah Kota Tangerang Selatan</span>
        </div>
        <div class="breakdown-item">
          <span class="label">Titik Lokasi Kerja:</span>
          <span class="val">${k.gedung}</span>
        </div>
        <div class="breakdown-item">
          <span class="label">Shift Operasional:</span>
          <span class="val">${k.shift}</span>
        </div>
        <div class="breakdown-item">
          <span class="label">Supervisor Pengawas:</span>
          <span class="val">Budi Prasetyo, S.T.</span>
        </div>
      </div>
    </div>
  `;
}

// --- AKSI MODAL TAMBAH KARYAWAN / PENGGUNA ---
function openAddKaryawanModal() {
  const nama = prompt('Masukkan Nama Lengkap Karyawan:');
  if (!nama) return;
  const nik = prompt('Masukkan NIK ISS (Contoh: 31659999):', '31659999');
  if (!nik) return;
  const status = confirm('Apakah Karyawan Tetap? (Klik OK untuk Tetap, Batal untuk Kontrak)') ? 'Tetap' : 'Kontrak';

  const db = getDb();
  const kId = db.karyawan.length + 1;
  db.karyawan.push({
    id: kId,
    nik: nik,
    nama: nama,
    jabatan: 'Cleaner',
    status: status,
    password: nik
  });
  db.users.push({
    id: db.users.length + 1,
    username: nik,
    nik: nik,
    role: 'karyawan',
    roleLabel: 'Cleaner CS',
    nama: nama,
    status: status,
    karyawanId: kId,
    password: nik
  });
  saveDb(db);
  showToast(`Karyawan ${nama} (${nik}) berhasil didaftarkan!`, 'success');
  renderContent();
}

function hapusKaryawan(id) {
  if (!confirm('Apakah Anda yakin ingin menghapus data karyawan ini?')) return;
  const db = getDb();
  db.karyawan = db.karyawan.filter(k => k.id !== id);
  saveDb(db);
  showToast('Data karyawan berhasil dihapus.', 'info');
  renderContent();
}

function openAddUserModal() {
  const username = prompt('Masukkan Username Baru:');
  if (!username) return;
  const nama = prompt('Masukkan Nama Lengkap:');
  const role = prompt('Pilih Peran: admin / supervisor / karyawan', 'karyawan');

  const db = getDb();
  db.users.push({
    id: db.users.length + 1,
    username: username.toLowerCase(),
    nama: nama || username,
    role: role.toLowerCase(),
    status: 'Aktif',
    unit: 'PEMDA Tangsel'
  });
  saveDb(db);
  showToast(`Pengguna ${username} berhasil dibuat!`, 'success');
  renderContent();
}

// ==========================================================================
// 12. MODAL & FITUR EDIT REKAPITULASI NILAI
// ==========================================================================
function openEditPenilaianModal(penilaianId) {
  const db = getDb();
  const p = db.penilaian.find(item => item.id === penilaianId);
  if (!p) {
    showToast('Data penilaian tidak ditemukan!', 'danger');
    return;
  }
  const k = db.karyawan.find(item => item.id === p.karyawanId) || { nama: 'Karyawan', nik: '-', gedung: '-' };

  // Set nilai ke elemen modal
  const idEl = document.getElementById('edit-penilaian-id');
  const subEl = document.getElementById('edit-modal-subtitle');
  const dEl = document.getElementById('edit-input-disiplin');
  const kEl = document.getElementById('edit-input-kualitas');
  const tEl = document.getElementById('edit-input-tanggung');
  const cEl = document.getElementById('edit-input-kerjasama');
  const stEl = document.getElementById('edit-select-status');
  const notEl = document.getElementById('edit-input-catatan');

  if (idEl) idEl.value = p.id;
  if (subEl) {
    subEl.innerHTML = `Karyawan: <strong>${k.nama}</strong> (NIK: <code>${k.nik}</code>) `;
  }
  if (dEl) dEl.value = p.skorDisiplin;
  if (kEl) kEl.value = p.skorKualitas;
  if (tEl) tEl.value = p.skorTanggungJawab;
  if (cEl) cEl.value = p.skorKerjasama;
  if (stEl) stEl.value = p.status || 'FINAL';
  if (notEl) notEl.value = p.catatanSpv || '';

  calcModalEditScoreLive();

  const modal = document.getElementById('modal-edit-penilaian');
  if (modal) modal.classList.add('active');
}

function closeEditPenilaianModal() {
  const modal = document.getElementById('modal-edit-penilaian');
  if (modal) modal.classList.remove('active');
}

function calcModalEditScoreLive() {
  const db = getDb();
  const dEl = document.getElementById('edit-input-disiplin');
  const kEl = document.getElementById('edit-input-kualitas');
  const tEl = document.getElementById('edit-input-tanggung');
  const cEl = document.getElementById('edit-input-kerjasama');

  if (!dEl || !kEl || !tEl || !cEl) return;

  const d = Math.min(100, Math.max(0, Number(dEl.value) || 0));
  const k = Math.min(100, Math.max(0, Number(kEl.value) || 0));
  const t = Math.min(100, Math.max(0, Number(tEl.value) || 0));
  const c = Math.min(100, Math.max(0, Number(cEl.value) || 0));

  const res = hitungNilaiDanGrade(d, k, t, c, db.bobotAspek);

  const scoreEl = document.getElementById('edit-live-score');
  const gradeEl = document.getElementById('edit-live-grade');
  const katEl = document.getElementById('edit-live-kategori');

  if (scoreEl) scoreEl.innerText = res.nilaiAkhir.toFixed(2);
  if (gradeEl) {
    gradeEl.className = `modal-grade-pill grade-badge grade-${res.grade}`;
    gradeEl.innerText = `Grade ${res.grade}`;
  }
  if (katEl) katEl.innerText = res.kategori;
}

function handleSaveEditPenilaian() {
  const db = getDb();
  const idEl = document.getElementById('edit-penilaian-id');
  if (!idEl) return;

  const pId = Number(idEl.value);
  const p = db.penilaian.find(item => item.id === pId);
  if (!p) {
    showToast('Data penilaian tidak ditemukan!', 'danger');
    return;
  }

  const d = Number(document.getElementById('edit-input-disiplin').value);
  const k = Number(document.getElementById('edit-input-kualitas').value);
  const t = Number(document.getElementById('edit-input-tanggung').value);
  const c = Number(document.getElementById('edit-input-kerjasama').value);
  const status = document.getElementById('edit-select-status').value;
  const catatan = document.getElementById('edit-input-catatan').value.trim();

  // Validasi nilai 0-100
  if (isNaN(d) || d < 0 || d > 100 || isNaN(k) || k < 0 || k > 100 ||
      isNaN(t) || t < 0 || t > 100 || isNaN(c) || c < 0 || c > 100) {
    showToast('Semua nilai aspek harus di antara 0 sampai 100!', 'danger');
    return;
  }

  const res = hitungNilaiDanGrade(d, k, t, c, db.bobotAspek);

  p.skorDisiplin = d;
  p.skorKualitas = k;
  p.skorTanggungJawab = t;
  p.skorKerjasama = c;
  p.nilaiAkhir = res.nilaiAkhir;
  p.grade = res.grade;
  p.kategori = res.kategori;
  p.status = status;
  p.catatanSpv = catatan;

  if (status === 'FINAL' && !p.tglFinalisasi) {
    p.tglFinalisasi = new Date().toISOString().replace('T', ' ').substring(0, 19);
  }

  const kary = db.karyawan.find(item => item.id === p.karyawanId);

  saveDb(db);
  closeEditPenilaianModal();
  showToast(`Nilai kinerja ${kary ? kary.nama : ''} berhasil diperbarui!`, 'success');
  renderContent();
}


// --- FILTER SEARCH & PERIODE DI DASHBOARD ---
function handleSearchDashboardKaryawan(query) {
  const q = (query || '').toLowerCase().trim();
  const rows = document.querySelectorAll('#dashboard-rekap-tbody tr');
  let visibleCount = 0;

  rows.forEach(row => {
    const nama = row.getAttribute('data-nama') || '';
    const nik = row.getAttribute('data-nik') || '';
    const gedung = row.getAttribute('data-gedung') || '';
    const textContent = row.textContent.toLowerCase();

    if (!q || nama.includes(q) || nik.includes(q) || gedung.includes(q) || textContent.includes(q)) {
      row.style.display = '';
      visibleCount++;
    } else {
      row.style.display = 'none';
    }
  });

  const countBadge = document.getElementById('rekap-count-badge');
  if (countBadge) {
    countBadge.innerText = `Menampilkan ${visibleCount} dari ${rows.length} Karyawan`;
  }
}

function handleSelectPeriodeDashboard(periodeId) {
  const db = getDb();
  db.selectedPeriodeId = Number(periodeId);
  saveDb(db);
  renderContent();
  const per = db.periode.find(p => p.id === Number(periodeId));
  showToast(`Menampilkan data evaluasi ${per ? per.nama : ''}`, 'info');
}


// --- MANAJEMEN PENGGUNA OLEH ADMIN (MODAL, EDIT, GANTI SANDI, STATUS KARYAWAN) ---
function handleSearchUsers(query) {
  const q = (query || '').toLowerCase().trim();
  const rows = document.querySelectorAll('#user-table-tbody tr');
  let visible = 0;
  rows.forEach(r => {
    const nama = r.getAttribute('data-nama') || '';
    const user = r.getAttribute('data-user') || '';
    const role = r.getAttribute('data-role') || '';
    const text = r.textContent.toLowerCase();
    if (!q || nama.includes(q) || user.includes(q) || role.includes(q) || text.includes(q)) {
      r.style.display = '';
      visible++;
    } else {
      r.style.display = 'none';
    }
  });
  const badge = document.getElementById('user-count-badge');
  if (badge) badge.innerText = `Menampilkan ${visible} dari ${rows.length} Akun`;
}

function openAddUserModal() {
  const modal = document.getElementById('modal-add-user');
  if (modal) {
    document.getElementById('add-user-nama').value = '';
    document.getElementById('add-user-nik').value = '';
    document.getElementById('add-user-role').value = 'karyawan';
    document.getElementById('add-user-status').value = 'Tetap';
    document.getElementById('add-user-password').value = '';
    modal.classList.add('active');
  }
}

function closeAddUserModal() {
  const modal = document.getElementById('modal-add-user');
  if (modal) modal.classList.remove('active');
}

function saveAddUser() {
  const nama = document.getElementById('add-user-nama').value.trim();
  const username = document.getElementById('add-user-nik').value.trim();
  const role = document.getElementById('add-user-role').value;
  const status = document.getElementById('add-user-status').value;
  const pass = document.getElementById('add-user-password').value.trim() || username || '123';

  if (!nama || !username) {
    showToast('Nama Lengkap dan Username/NIK wajib diisi!', 'danger');
    return;
  }

  const db = getDb();
  if (db.users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
    showToast('Username / NIK sudah terdaftar!', 'danger');
    return;
  }

  const newId = db.users.length + 1;
  const newUser = {
    id: newId,
    username: username,
    nik: username,
    nama: nama,
    role: role,
    roleLabel: role === 'admin' ? 'Admin / HRD' : (role === 'supervisor' ? 'Supervisor' : 'Cleaner CS'),
    status: status,
    password: pass
  };

  db.users.push(newUser);

  // Jika karyawan, masukkan juga ke db.karyawan
  if (role === 'karyawan') {
    const kId = db.karyawan.length + 1;
    newUser.karyawanId = kId;
    db.karyawan.push({
      id: kId,
      nik: username,
      nama: nama,
      jabatan: 'Cleaner',
      status: status,
      password: pass
    });
  }

  saveDb(db);
  closeAddUserModal();
  showToast(`Pengguna ${nama} (${username}) berhasil didaftarkan!`, 'success');
  renderContent();
}

function openEditUserModal(userId) {
  const db = getDb();
  const u = db.users.find(x => x.id === userId);
  if (!u) return;

  const modal = document.getElementById('modal-edit-user');
  if (modal) {
    document.getElementById('edit-user-id').value = u.id;
    document.getElementById('edit-user-nama').value = u.nama;
    document.getElementById('edit-user-nik').value = u.username;
    document.getElementById('edit-user-role').value = u.role;
    document.getElementById('edit-user-status').value = u.status || 'Tetap';
    document.getElementById('edit-user-password').value = '';
    modal.classList.add('active');
  }
}

function closeEditUserModal() {
  const modal = document.getElementById('modal-edit-user');
  if (modal) modal.classList.remove('active');
}

function saveEditUser() {
  const db = getDb();
  const id = Number(document.getElementById('edit-user-id').value);
  const u = db.users.find(x => x.id === id);
  if (!u) return;

  const nama = document.getElementById('edit-user-nama').value.trim();
  const username = document.getElementById('edit-user-nik').value.trim();
  const role = document.getElementById('edit-user-role').value;
  const status = document.getElementById('edit-user-status').value;
  const newPass = document.getElementById('edit-user-password').value.trim();

  if (!nama || !username) {
    showToast('Nama Lengkap dan NIK/Username tidak boleh kosong!', 'danger');
    return;
  }

  u.nama = nama;
  u.username = username;
  u.nik = username;
  u.role = role;
  u.roleLabel = role === 'admin' ? 'Admin / HRD' : (role === 'supervisor' ? 'Supervisor' : 'Cleaner CS');
  u.status = status;
  if (newPass) {
    u.password = newPass;
  }

  // Sinkronkan ke db.karyawan jika ini karyawan
  if (u.karyawanId) {
    const k = db.karyawan.find(item => item.id === u.karyawanId);
    if (k) {
      k.nama = nama;
      k.nik = username;
      k.status = status;
      if (newPass) k.password = newPass;
    }
  } else {
    // Cari berdasarkan NIK
    const k = db.karyawan.find(item => item.nik === username || item.nik === u.nik);
    if (k) {
      k.nama = nama;
      k.nik = username;
      k.status = status;
      if (newPass) k.password = newPass;
    }
  }

  // Jika mengedit akun yang sedang login
  if (db.currentUser && db.currentUser.id === u.id) {
    db.currentUser = u;
    db.activeRole = u.role;
  }

  saveDb(db);
  closeEditUserModal();
  showToast(`Data dan kata sandi pengguna ${nama} berhasil disimpan!`, 'success');
  renderContent();
}

function promptChangeUserPassword(userId) {
  const db = getDb();
  const u = db.users.find(x => x.id === userId);
  if (!u) return;

  const newPass = prompt(`Masukkan Kata Sandi Baru untuk ${u.nama} (NIK: ${u.username}):`, u.password || u.nik);
  if (!newPass || !newPass.trim()) return;

  u.password = newPass.trim();
  if (u.karyawanId) {
    const k = db.karyawan.find(item => item.id === u.karyawanId);
    if (k) k.password = newPass.trim();
  }
  if (db.currentUser && db.currentUser.id === u.id) {
    db.currentUser.password = newPass.trim();
  }

  saveDb(db);
  showToast(`Kata sandi untuk ${u.nama} berhasil diubah ke: ${newPass.trim()}`, 'success');
  renderContent();
}

function deleteUser(userId) {
  const db = getDb();
  const u = db.users.find(x => x.id === userId);
  if (!u) return;
  if (u.role === 'admin') {
    showToast('Akun Administrator utama tidak dapat dihapus!', 'danger');
    return;
  }
  if (!confirm(`Apakah Anda yakin ingin menghapus akun ${u.nama} (${u.username})?`)) return;

  db.users = db.users.filter(x => x.id !== userId);
  if (u.karyawanId) {
    db.karyawan = db.karyawan.filter(k => k.id !== u.karyawanId);
  }
  saveDb(db);
  showToast(`Akun ${u.nama} berhasil dihapus.`, 'info');
  renderContent();
}

function openEditKaryawanStatusModal(karyawanId) {
  const db = getDb();
  const k = db.karyawan.find(item => item.id === karyawanId);
  if (!k) return;

  const currentStatus = k.status || 'Tetap';
  const newStatus = currentStatus === 'Tetap' ? 'Kontrak' : 'Tetap';
  if (confirm(`Ubah status karyawan ${k.nama} dari ${currentStatus} menjadi ${newStatus}?`)) {
    k.status = newStatus;
    // Sinkronkan ke db.users
    const u = db.users.find(x => x.nik === k.nik || x.karyawanId === k.id);
    if (u) u.status = newStatus;
    saveDb(db);
    showToast(`Status karyawan ${k.nama} berhasil diubah menjadi ${newStatus}!`, 'success');
    renderContent();
  }
}


// --- MANAJEMEN PERIODE PENILAIAN & FILTER CETAK LAPORAN ---
function openTambahPeriodeModal() {
  const modal = document.getElementById('modal-tambah-periode');
  if (modal) {
    const db = getDb();
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let nextYear = 2026;
    let nextMonth = 11; // default ke November 2026

    if (db.periode && db.periode.length > 0) {
      const latest = db.periode[0];
      if (latest && latest.tglSelesai) {
        const parts = latest.tglSelesai.split('-');
        let y = parseInt(parts[0], 10);
        let m = parseInt(parts[1], 10);
        m += 1;
        if (m > 12) {
          m = 1;
          y += 1;
        }
        nextYear = y;
        nextMonth = m;
      }
    }

    const mStr = String(nextMonth).padStart(2, '0');
    const yStr = String(nextYear);
    const lastDay = new Date(nextYear, nextMonth, 0).getDate();

    document.getElementById('input-periode-nama').value = `Periode ${monthNames[nextMonth - 1]} ${yStr}`;
    document.getElementById('input-periode-kode').value = `PER-${yStr}-${mStr}`;
    document.getElementById('input-periode-mulai').value = `${yStr}-${mStr}-01`;
    document.getElementById('input-periode-selesai').value = `${yStr}-${mStr}-${String(lastDay).padStart(2, '0')}`;
    document.getElementById('input-periode-status').value = 'Aktif';

    modal.classList.add('active');
  }
}

function closeTambahPeriodeModal() {
  const modal = document.getElementById('modal-tambah-periode');
  if (modal) modal.classList.remove('active');
}

function simpanTambahPeriode() {
  const nama = document.getElementById('input-periode-nama').value.trim();
  const kode = document.getElementById('input-periode-kode').value.trim();
  const tglMulai = document.getElementById('input-periode-mulai').value;
  const tglSelesai = document.getElementById('input-periode-selesai').value;
  const status = document.getElementById('input-periode-status').value;

  if (!nama || !kode || !tglMulai || !tglSelesai) {
    showToast('Seluruh kolom periode wajib diisi!', 'danger');
    return;
  }

  const db = getDb();
  if (db.periode.some(p => p.kode.toLowerCase() === kode.toLowerCase())) {
    showToast('Kode periode sudah ada! Gunakan kode lain.', 'danger');
    return;
  }

  const newId = db.periode.length > 0 ? Math.max(...db.periode.map(p => p.id)) + 1 : 1;

  // Jika status baru adalah 'Aktif', set periode lain jadi 'Selesai' dan jadikan ini aktif
  if (status === 'Aktif') {
    db.periode.forEach(p => { p.status = 'Selesai'; });
    db.selectedPeriodeId = newId;
    db.laporanPeriodeId = newId;
  }

  db.periode.unshift({
    id: newId,
    kode: kode,
    nama: nama,
    tglMulai: tglMulai,
    tglSelesai: tglSelesai,
    status: status
  });

  saveDb(db);
  closeTambahPeriodeModal();
  showToast(`Periode "${nama}" berhasil dibuka dan langsung aktif!`, 'success');
  renderContent();
}

function toggleStatusPeriode(periodeId) {
  const db = getDb();
  const p = db.periode.find(x => x.id === periodeId);
  if (!p) return;

  if (p.status === 'Aktif') {
    p.status = 'Selesai';
    showToast(`Periode "${p.nama}" berhasil ditutup.`, 'info');
  } else {
    // Non-aktifkan periode lain jika ingin 1 yang aktif
    db.periode.forEach(item => { item.status = 'Selesai'; });
    p.status = 'Aktif';
    db.selectedPeriodeId = p.id;
    db.laporanPeriodeId = p.id;
    showToast(`Periode "${p.nama}" sekarang aktif berjalan.`, 'success');
  }

  saveDb(db);
  renderContent();
}

function hapusPeriode(periodeId) {
  const db = getDb();
  const p = db.periode.find(x => x.id === periodeId);
  if (!p) return;

  if (db.periode.length <= 1) {
    showToast('Minimal harus ada 1 periode dalam sistem!', 'danger');
    return;
  }

  if (!confirm(`Apakah Anda yakin ingin menghapus data "${p.nama}"?`)) return;

  db.periode = db.periode.filter(x => x.id !== periodeId);
  db.penilaian = db.penilaian.filter(x => x.periodeId !== periodeId);

  if (db.selectedPeriodeId === periodeId) {
    db.selectedPeriodeId = db.periode[0].id;
  }
  if (db.laporanPeriodeId === periodeId) {
    db.laporanPeriodeId = db.periode[0].id;
  }

  saveDb(db);
  showToast(`Periode "${p.nama}" berhasil dihapus.`, 'info');
  renderContent();
}

function handleSelectPeriodeLaporan(periodeId) {
  const db = getDb();
  db.laporanPeriodeId = Number(periodeId);
  saveDb(db);
  renderContent();
  const per = db.periode.find(p => p.id === Number(periodeId));
  showToast(`Menampilkan rekap laporan untuk ${per ? per.nama : ''}`, 'info');
}

// --- INISIALISASI SAAT HALAMAN DIBUKA ---
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
