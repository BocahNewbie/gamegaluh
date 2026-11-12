/* ==========================================================================
   ASSET DATA & CONSTANTS
   ========================================================================== */

// 9 Regions & Connectivity Map
const REGIONS = {
    "Che A Miss": {
        name: "Che A Miss",
        type: "Pesisir Utama",
        desc: "Muara sungai besar dan pesisir pantai tempat berkumpulnya pedagang pemula.",
        neighbors: ["Male Bear", "Bane A Gare"],
        innCost: 30, innMealCost: 50, housePrice: 750000,
        jobs: [
            { title: "Buruh Angkut Ikan & Garam", reqSkill: null, expSkill: "navigasiFisik", pay: 14 },
            { title: "Pengering & Pengasin Ikan", reqSkill: null, expSkill: "pengolahanPangan", pay: 15 },
            { title: "Pengawas Gudang Pesisir", reqSkill: { navigasiFisik: 4 }, expSkill: "navigasiFisik", pay: 45 },
            { title: "Nakhoda Kapal Dagang Pesisir", reqSkill: { navigasiFisik: 6, manajemenMuatan: 5, literasiAdministrasi: 4 }, expSkill: "navigasiFisik", pay: 250 }
        ]
    },
    "Male Bear": {
        name: "Male Bear",
        type: "Pesisir Rawa",
        desc: "Daerah pesisir berbatu dengan akses rawa-rawa liar dan perikanan laut.",
        neighbors: ["Che A Miss", "Bun She Riie"],
        innCost: 65, innMealCost: 95, housePrice: 1350000,
        jobs: [
            { title: "Pemungut Kerang & Hasil Rawa", reqSkill: null, expSkill: "navigasiFisik", pay: 16 },
            { title: "Pembersih Perahu Nelayan", reqSkill: null, expSkill: "tambangPertukangan", pay: 17 },
            { title: "Penyortir Mutu Hasil Laut", reqSkill: { pengolahanPangan: 4 }, expSkill: "pengolahanPangan", pay: 50 },
            { title: "Pengelola Dermaga Rawa", reqSkill: { navigasiFisik: 6, literasiAdministrasi: 5 }, expSkill: "literasiAdministrasi", pay: 280 }
        ]
    },
    "Bun She Riie": {
        name: "Bun She Riie",
        type: "Pesawahan Selatan",
        desc: "Hamparan sawah yang luas dengan saluran irigasi tradisional.",
        neighbors: ["Male Bear", "Bho Junk"],
        innCost: 65, innMealCost: 95, housePrice: 1350000,
        jobs: [
            { title: "Buruh Pemungut Gabah", reqSkill: null, expSkill: "agrariaPertanian", pay: 15 },
            { title: "Pembersih Kandang Unggas", reqSkill: null, expSkill: "peternakanKulit", pay: 16 },
            { title: "Operator Alat Giling Padi", reqSkill: { agrariaPertanian: 4 }, expSkill: "agrariaPertanian", pay: 52 },
            { title: "Pengawas Lumbung Desa", reqSkill: { agrariaPertanian: 6, manajemenMuatan: 5, literasiAdministrasi: 4 }, expSkill: "agrariaPertanian", pay: 290 }
        ]
    },
    "Bho Junk": {
        name: "Bho Junk",
        type: "Pesawahan Pelosok",
        desc: "Desa lumbung padi pelindung yang dikelilingi perbukitan hijau.",
        neighbors: ["Bun She Riie", "Sadhayana"],
        innCost: 150, innMealCost: 200, housePrice: 2500000,
        jobs: [
            { title: "Pencari Serat & Bambu Liar", reqSkill: null, expSkill: "kerajinanKonstruksi", pay: 17 },
            { title: "Pembuat Telur Asin Desa", reqSkill: null, expSkill: "pengolahanPangan", pay: 18 },
            { title: "Pengrajin Anyaman Bambu", reqSkill: { kerajinanKonstruksi: 4 }, expSkill: "kerajinanKonstruksi", pay: 65 },
            { title: "Kepala Desa Pengadaan Pangan", reqSkill: { agrariaPertanian: 6, kerajinanKonstruksi: 5, literasiAdministrasi: 4 }, expSkill: "literasiAdministrasi", pay: 340 }
        ]
    },
    "Sadhayana": {
        name: "Sadhayana",
        type: "Lembah Rempah",
        desc: "Lembah lembap di kaki bukit yang tanahnya sangat subur untuk tanaman obat & rempah.",
        neighbors: ["Bho Junk", "Kerajaan Kota Galuh"],
        innCost: 350, innMealCost: 430, housePrice: 4800000,
        jobs: [
            { title: "Pemetik Bunga & Rempah Liar", reqSkill: null, expSkill: "botanikalRempah", pay: 20 },
            { title: "Pencari Madu Hutan", reqSkill: null, expSkill: "navigasiFisik", pay: 22 },
            { title: "Pengering & Penumbuk Herbal", reqSkill: { botanikalRempah: 4 }, expSkill: "botanikalRempah", pay: 75 },
            { title: "Asisten Racik Obat Lembah", reqSkill: { botanikalRempah: 7, literasiAdministrasi: 5, pengolahanPangan: 4 }, expSkill: "botanikalRempah", pay: 420 }
        ]
    },
    "Bane A Gare": {
        name: "Bane A Gare",
        type: "Pesawahan Perbatasan",
        desc: "Pasar transit perbatasan antara pesisir dan wilayah pegunungan.",
        neighbors: ["Che A Miss", "Bag Berg"],
        innCost: 150, innMealCost: 200, housePrice: 2500000,
        jobs: [
            { title: "Buruh Panggul Pasar Perbatasan", reqSkill: null, expSkill: "manajemenMuatan", pay: 18 },
            { title: "Penjaga Penampungan Ternak", reqSkill: null, expSkill: "peternakanKulit", pay: 18 },
            { title: "Pengatur Jadwal Rute Cart", reqSkill: { manajemenMuatan: 4 }, expSkill: "manajemenMuatan", pay: 68 },
            { title: "Mandor Transit Perbatasan", reqSkill: { manajemenMuatan: 6, agrariaPertanian: 5, literasiAdministrasi: 4 }, expSkill: "manajemenMuatan", pay: 360 }
        ]
    },
    "Bag Berg": {
        name: "Bag Berg",
        type: "Pegunungan Tambang",
        desc: "Wilayah berbatu terjal, dingin, tempat para penebang kayu dan penambang batu/besi.",
        neighbors: ["Bane A Gare", "Khaa Wall Ee"],
        innCost: 350, innMealCost: 430, housePrice: 4800000,
        jobs: [
            { title: "Pemecah Batu Kali & Tambang", reqSkill: null, expSkill: "tambangPertukangan", pay: 22 },
            { title: "Penebang Kayu Jati Kasar", reqSkill: null, expSkill: "tambangPertukangan", pay: 22 },
            { title: "Pandai Besi & Tambang", reqSkill: { tambangPertukangan: 4 }, expSkill: "tambangPertukangan", pay: 80 },
            { title: "Kepala Pengawas Tambang Kerajaan", reqSkill: { tambangPertukangan: 7, manajemenMuatan: 5, navigasiFisik: 4 }, expSkill: "tambangPertukangan", pay: 450 }
        ]
    },
    "Khaa Wall Ee": {
        name: "Khaa Wall Ee",
        type: "Bukit Peternakan",
        desc: "Padang rumput perbukitan yang luas, tempat peternakan sapi/domba milik warga desa.",
        neighbors: ["Bag Berg", "Kerajaan Kota Galuh"],
        innCost: 750, innMealCost: 880, housePrice: 8500000,
        jobs: [
            { title: "Gembala Sapi & Domba", reqSkill: null, expSkill: "peternakanKulit", pay: 24 },
            { title: "Pemerah Susu Murni", reqSkill: null, expSkill: "peternakanKulit", pay: 25 },
            { title: "Pengolah Kulit & Bulu Domba", reqSkill: { peternakanKulit: 4 }, expSkill: "peternakanKulit", pay: 95 },
            { title: "Penunggang & Pelatih Kuda Cart", reqSkill: { peternakanKulit: 6, manajemenMuatan: 5, navigasiFisik: 5 }, expSkill: "peternakanKulit", pay: 520 }
        ]
    },
    "Kerajaan Kota Galuh": {
        name: "Kerajaan Kota Galuh",
        type: "Ibu Kota Kerajaan",
        desc: "Pusat peradaban, benteng megah, Perpustakaan Agung Kerajaan, dan pusat perdagangan elit.",
        neighbors: ["Sadhayana", "Khaa Wall Ee"],
        innCost: 1800, innMealCost: 2100, housePrice: 25000000,
        jobs: [
            { title: "Pembersih Pelataran Benteng", reqSkill: null, expSkill: "navigasiFisik", pay: 30 },
            { title: "Pelayan Kedai Bangsawan", reqSkill: null, expSkill: "literasiAdministrasi", pay: 32 },
            { title: "Kuli Panggul Gerobak Kerajaan", reqSkill: null, expSkill: "manajemenMuatan", pay: 35 },
            { title: "Juru Ketik & Pengarsip Perpus", reqSkill: { literasiAdministrasi: 4 }, expSkill: "literasiAdministrasi", pay: 120 },
            { title: "Penjaga Gudang Bahan Pokok", reqSkill: { manajemenMuatan: 4, agrariaPertanian: 3 }, expSkill: "manajemenMuatan", pay: 130 },
            { title: "Pengolah Sutra & Busana Istana", reqSkill: { peternakanKulit: 4, kerajinanKonstruksi: 3 }, expSkill: "kerajinanKonstruksi", pay: 140 },
            { title: "Pengawas Kereta Kuda Utama", reqSkill: { peternakanKulit: 4, navigasiFisik: 3 }, expSkill: "navigasiFisik", pay: 150 },
            { title: "Penatap Pasar & Cukai Dagang", reqSkill: { literasiAdministrasi: 4, manajemenMuatan: 3 }, expSkill: "literasiAdministrasi", pay: 160 },
            { title: "Arsitek Irigasi & Benteng", reqSkill: { tambangPertukangan: 6, agrariaPertanian: 4 }, expSkill: "tambangPertukangan", pay: 380 },
            { title: "Tabib Racik Obat Istana", reqSkill: { botanikalRempah: 6, pengolahanPangan: 5 }, expSkill: "botanikalRempah", pay: 400 },
            { title: "Nakhoda Armada Kerajaan", reqSkill: { navigasiFisik: 6, manajemenMuatan: 5 }, expSkill: "navigasiFisik", pay: 420 },
            { title: "Mandor Logistik Agung", reqSkill: { manajemenMuatan: 6, navigasiFisik: 5, literasiAdministrasi: 4 }, expSkill: "manajemenMuatan", pay: 450 },
            { title: "Juru Tulis Diplomatik Kerajaan", reqSkill: { literasiAdministrasi: 6, navigasiFisik: 4 }, expSkill: "literasiAdministrasi", pay: 480 },
            { title: "Koki Utama Jamuan Istana", reqSkill: { pengolahanPangan: 6, botanikalRempah: 5 }, expSkill: "pengolahanPangan", pay: 500 },
            { title: "Menteri Keuangan & Perdagangan", reqSkill: { literasiAdministrasi: 8, manajemenMuatan: 7, navigasiFisik: 6, agrariaPertanian: 5, tambangPertukangan: 5 }, reqExp: 200, expSkill: "literasiAdministrasi", pay: 3500 },
            { title: "Kepala Logistik & Pasokan Pangan", reqSkill: { manajemenMuatan: 8, navigasiFisik: 7, agrariaPertanian: 7, peternakanKulit: 6, literasiAdministrasi: 5 }, reqExp: 180, expSkill: "manajemenMuatan", pay: 3200 },
            { title: "Kepala Tabib & Herbalis Agung", reqSkill: { botanikalRempah: 8, pengolahanPangan: 7, literasiAdministrasi: 7, agrariaPertanian: 6 }, reqExp: 150, expSkill: "botanikalRempah", pay: 2900 },
            { title: "Panglima Pertambangan & Benteng", reqSkill: { tambangPertukangan: 8, manajemenMuatan: 7, navigasiFisik: 6, peternakanKulit: 5 }, reqExp: 160, expSkill: "tambangPertukangan", pay: 3100 }
        ]
    }
};

/* ==========================================================================
   54 TRADE GOODS ITEMS (6 PRODUK KHAS PER WILAYAH)
   ========================================================================== */

const ITEMS = {
    // --------------------------------------------------------------------------
    // 1. CHE A MISS (Pesisir Utama) - 6 Komoditas
    // --------------------------------------------------------------------------
    "garam_kasar": { name: "Garam Kasar Tambak", weight: 0.5, basePrice: 12, origin: "Che A Miss" },
    "ikan_asin": { name: "Ikan Asin Pengeringan", weight: 0.8, basePrice: 18, origin: "Che A Miss" },
    "terasi_udang": { name: "Terasi Udang Pesisir", weight: 0.4, basePrice: 22, origin: "Che A Miss" },
    "kerang_mutiara": { name: "Kerang Mutiara Mentah", weight: 0.3, basePrice: 75, origin: "Che A Miss" },
    "minyak_ikan": { name: "Minyak Hati Ikan Hiu", weight: 0.7, basePrice: 55, origin: "Che A Miss" },
    "rumput_laut": { name: "Rumput Laut Kering", weight: 0.6, basePrice: 25, origin: "Che A Miss" },

    // --------------------------------------------------------------------------
    // 2. MALE BEAR (Pesisir Rawa) - 6 Komoditas
    // --------------------------------------------------------------------------
    "ikan_segar": { name: "Ikan Laut Segar", weight: 1.0, basePrice: 25, origin: "Male Bear" },
    "kerang_hitam": { name: "Kerang Hitam Rawa", weight: 1.2, basePrice: 30, origin: "Male Bear" },
    "minyak_bakau": { name: "Minyak Rempah Bakau", weight: 0.6, basePrice: 45, origin: "Male Bear" },
    "kepiting_bakau": { name: "Kepiting Bakau Besar", weight: 1.5, basePrice: 68, origin: "Male Bear" },
    "lumpur_terapi": { name: "Lumpur Mineral Rawa", weight: 2.0, basePrice: 35, origin: "Male Bear" },
    "serat_bakau": { name: "Serat Batang Bakau", weight: 1.1, basePrice: 28, origin: "Male Bear" },

    // --------------------------------------------------------------------------
    // 3. BUN SHE RIIE (Pesawahan Selatan) - 6 Komoditas
    // --------------------------------------------------------------------------
    "beras_putih": { name: "Beras Putih Super", weight: 2.0, basePrice: 40, origin: "Bun She Riie" },
    "gabah_kering": { name: "Gabah Kering Giling", weight: 2.5, basePrice: 28, origin: "Bun She Riie" },
    "dedak_halus": { name: "Dedak Padi Halus", weight: 1.5, basePrice: 15, origin: "Bun She Riie" },
    "tepung_beras": { name: "Tepung Beras Putih", weight: 1.8, basePrice: 48, origin: "Bun She Riie" },
    "bibit_padi": { name: "Karung Bibit Unggul", weight: 3.0, basePrice: 85, origin: "Bun She Riie" },
    "jerami_kering": { name: "Ikat Jerami Pakan", weight: 1.2, basePrice: 12, origin: "Bun She Riie" },

    // --------------------------------------------------------------------------
    // 4. BHO JUNK (Pesawahan Pelosok) - 6 Komoditas
    // --------------------------------------------------------------------------
    "telur_asin": { name: "Telur Asin Desa", weight: 0.5, basePrice: 20, origin: "Bho Junk" },
    "anyaman_bambu": { name: "Anyaman Bambu Wadah", weight: 1.5, basePrice: 65, origin: "Bho Junk" },
    "minyak_kelapa": { name: "Minyak Kelapa Murni", weight: 1.0, basePrice: 50, origin: "Bho Junk" },
    "keranjang_tampah": { name: "Tampah Bambu Besar", weight: 1.8, basePrice: 58, origin: "Bho Junk" },
    "gula_kelapa": { name: "Gula Semut Kelapa", weight: 0.9, basePrice: 42, origin: "Bho Junk" },
    "bibit_bambu": { name: "Tunas Bambu Pilihan", weight: 2.2, basePrice: 33, origin: "Bho Junk" },

    // --------------------------------------------------------------------------
    // 5. SADHAYANA (Lembah Rempah) - 6 Komoditas
    // --------------------------------------------------------------------------
    "cengkeh_kering": { name: "Cengkeh Kering", weight: 0.2, basePrice: 85, origin: "Sadhayana" },
    "kapulaga": { name: "Kapulaga Lembah", weight: 0.2, basePrice: 90, origin: "Sadhayana" },
    "madu_hutan": { name: "Madu Hutan Murni", weight: 0.8, basePrice: 120, origin: "Sadhayana" },
    "kayu_manis": { name: "Batang Kayu Manis", weight: 0.4, basePrice: 70, origin: "Sadhayana" },
    "ekstrak_ginseng": { name: "Ekstrak Akar Ginseng", weight: 0.3, basePrice: 160, origin: "Sadhayana" },
    "bunga_herbal": { name: "Bunga Obat Kering", weight: 0.2, basePrice: 65, origin: "Sadhayana" },

    // --------------------------------------------------------------------------
    // 6. BANE A GARE (Pesawahan Perbatasan) - 6 Komoditas
    // --------------------------------------------------------------------------
    "gula_aren": { name: "Gula Aren Cetak", weight: 1.0, basePrice: 38, origin: "Bane A Gare" },
    "dendeng_sapi": { name: "Dendeng Sapi Transit", weight: 0.7, basePrice: 110, origin: "Bane A Gare" },
    "tali_tambang": { name: "Tali Tambang Serat", weight: 1.2, basePrice: 42, origin: "Bane A Gare" },
    "kopi_perbatasan": { name: "Biji Kopi Perbatasan", weight: 0.8, basePrice: 78, origin: "Bane A Gare" },
    "tembakau_lokal": { name: "Daun Tembakau Kering", weight: 0.5, basePrice: 95, origin: "Bane A Gare" },
    "minyak_lampu": { name: "Minyak Penerangan", weight: 1.0, basePrice: 45, origin: "Bane A Gare" },

    // --------------------------------------------------------------------------
    // 7. BAG BERG (Pegunungan Tambang) - 6 Komoditas
    // --------------------------------------------------------------------------
    "biji_besi": { name: "Biji Besi Mentah", weight: 5.0, basePrice: 150, origin: "Bag Berg" },
    "kayu_jati": { name: "Kayu Jati Gelondong", weight: 8.0, basePrice: 280, origin: "Bag Berg" },
    "batu_pondasi": { name: "Batu Kali Pondasi", weight: 6.0, basePrice: 95, origin: "Bag Berg" },
    "batu_asah": { name: "Batu Asah Halus", weight: 2.0, basePrice: 60, origin: "Bag Berg" },
    "batang_arang": { name: "Arang Kayu Tungku", weight: 3.0, basePrice: 50, origin: "Bag Berg" },
    "baja_mentah": { name: "Batangan Baja Tempa", weight: 4.5, basePrice: 220, origin: "Bag Berg" },

    // --------------------------------------------------------------------------
    // 8. KHAA WALL EE (Bukit Peternakan) - 6 Komoditas
    // --------------------------------------------------------------------------
    "susu_murni": { name: "Susu Sapi Murni", weight: 1.0, basePrice: 35, origin: "Khaa Wall Ee" },
    "kulit_olah": { name: "Kulit Sapi Olahan", weight: 3.0, basePrice: 210, origin: "Khaa Wall Ee" },
    "keju_bukit": { name: "Keju Olahan Bukit", weight: 0.6, basePrice: 135, origin: "Khaa Wall Ee" },
    "wol_domba": { name: "Gulungan Wol Domba", weight: 1.5, basePrice: 90, origin: "Khaa Wall Ee" },
    "mentega_segar": { name: "Mentega Susu Murni", weight: 0.7, basePrice: 80, origin: "Khaa Wall Ee" },
    "tulang_hewan": { name: "Tulang Ternak Ukir", weight: 2.0, basePrice: 55, origin: "Khaa Wall Ee" },

    // --------------------------------------------------------------------------
    // 9. KERAJAAN KOTA GALUH (Ibu Kota Kerajaan) - 6 Komoditas
    // --------------------------------------------------------------------------
    "kain_sutra": { name: "Kain Sutra Tempa", weight: 0.5, basePrice: 450, origin: "Kerajaan Kota Galuh" },
    "perhiasan_perak": { name: "Perhiasan Perak Istana", weight: 0.3, basePrice: 680, origin: "Kerajaan Kota Galuh" },
    "parfum_kerajaan": { name: "Minyak Wangi Bangsawan", weight: 0.2, basePrice: 520, origin: "Kerajaan Kota Galuh" },
    "kertas_perkamen": { name: "Kertas Perkamen Kuno", weight: 0.2, basePrice: 180, origin: "Kerajaan Kota Galuh" },
    "porselen_cina": { name: "Porselen Hias Istana", weight: 2.5, basePrice: 750, origin: "Kerajaan Kota Galuh" },
    "senjata_tempa": { name: "Pedang Kehormatan Istana", weight: 4.0, basePrice: 1100, origin: "Kerajaan Kota Galuh" }
};

// Equipment items (Backpacks & Carts)
const EQUIPMENT = {
    "tas_kecil": { name: "Tas Punggung Kecil", type: "backpack", cap: 5.0, price: 1850 },
    "tas_besar": { name: "Tas Punggung Besar", type: "backpack", cap: 10.0, price: 5500 },
    "cart_10": { name: "Cart 10kg (Gerobak Kecil)", type: "cart", cap: 10.0, price: 12500, penalty: 0.25 },
    "cart_25": { name: "Cart 25kg (Gerobak Sedang)", type: "cart", cap: 25.0, price: 32000, penalty: 0.50 },
    "cart_50": { name: "Cart 50kg (Gerobak Besar)", type: "cart", cap: 50.0, price: 85000, penalty: 1.00 },
    "cart_100": { name: "Cart 100kg (Gerobak Ekstra)", type: "cart", cap: 100.0, price: 220000, penalty: 2.00 },
    "cart_kuda_1": { name: "Cart Kuda Tunggal (50kg)", type: "cart", cap: 50.0, price: 650000, speedMultiplier: 2.0 },
    "cart_kuda_2": { name: "Cart Kuda Ganda (100kg)", type: "cart", cap: 100.0, price: 1800000, speedMultiplier: 3.0 }
};

// Pemetaan Nama Skill (Termasuk Berdagang)
const SKILL_NAMES = {
    navigasiFisik: "Navigasi & Ketahanan Fisik",
    pengolahanPangan: "Pengolahan Pangan",
    agrariaPertanian: "Pengetahuan Agraria",
    kerajinanKonstruksi: "Kerajinan & Konstruksi",
    botanikalRempah: "Botanikal & Rempah",
    manajemenMuatan: "Manajemen Muatan",
    tambangPertukangan: "Tambang & Pertukangan",
    literasiAdministrasi: "Literasi & Administrasi",
    peternakanKulit: "Peternakan & Olah Kulit",
    berdagang: "Berdagang & Negosiasi"
};

/* ==========================================================================
   LIBRARY BOOKS DATA (Kitab Perpustakaan Agung)
   ========================================================================== */
const LIBRARY_BOOKS = {
    "kitab_navigasi": {
        name: "Kitab Navigasi & Geografi Pesisir",
        targetSkill: "navigasiFisik",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Panduan membaca rasi bintang, peta arus sungai besar, dan jalur pelayaran aman di pesisir."
    },
    "kitab_pangan": {
        name: "Ensiklopedia Pengolahan & Pengawetan Pangan",
        targetSkill: "pengolahanPangan",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Metode kuno menggaramkan, mengeringkan, dan memfermentasi hasil bumi dan laut agar tahan lama."
    },
    "kitab_agraria": {
        name: "Risalah Agraria & Pengairan Sawah",
        targetSkill: "agrariaPertanian",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Teknik mengatur saluran irigasi tradisional, pemilihan bibit unggul, dan siklus musim panen raya."
    },
    "kitab_konstruksi": {
        name: "Panduan Kerajinan & Konstruksi Bambu",
        targetSkill: "kerajinanKonstruksi",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Ilmu dasar memilih serat kayu, teknik anyaman bambu kokoh, dan struktur bangunan tahan gempa."
    },
    "kitab_botanikal": {
        name: "Kompendium Botanikal & Rempah Nusantara",
        targetSkill: "botanikalRempah",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Katalog lengkap khasiat tanaman obat, cengkeh, kapulaga, dan ramuan herbal penyembuh."
    },
    "kitab_muatan": {
        name: "Manual Manajemen Logistik & Muatan",
        targetSkill: "manajemenMuatan",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Strategi penataan gerobak dagang, efisiensi berat kargo, dan kalkulasi rute distribusi pedagang."
    },
    "kitab_tambang": {
        name: "Teks Pertambangan & Panduan Tempa Besi",
        targetSkill: "tambangPertukangan",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Teknik dasar membaca urat batu, pemecahan bijih besi mentah, dan panduan dasar menempa baja."
    },
    "kitab_administrasi": {
        name: "Arsip Administrasi & Literasi Kerajaan",
        targetSkill: "literasiAdministrasi",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Tata cara pembukuan keuangan niaga, korespondensi resmi istana, dan penyusunan cukai pasar."
    },
    "kitab_peternakan": {
        name: "Buku Panduan Peternakan & Pengolahan Kulit",
        targetSkill: "peternakanKulit",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Metode pemeliharaan ternak sapi/domba, pemerahan susu berkualitas, serta teknik penyamakan kulit."
    },
    "kitab_berdagang": {
        name: "Risalah Niaga & Seni Negosiasi Pasar",
        targetSkill: "berdagang",
        getExp: () => Math.floor(Math.random() * 6) + 8, // Random 8 - 13 XP
        cost: 150,
        desc: "Trik membaca fluktuasi harga komoditas antar wilayah, teknik tawar-menawar, dan memperluas jaringan niaga."
    }
};

/* ==========================================================================
   240+ VARIASI NEWS POOL BERBASIS DINAMIS & KONDISI WILAYAH
   ========================================================================== */

const NEWS_POOL = [
    // --------------------------------------------------------------------------
    // 1. CHE A MISS (Pesisir Utama) - 27 Variasi
    // --------------------------------------------------------------------------
    // Cuaca: Cerah / Musim Panen Laut
    { reg: "Che A Miss", weather: "Cerah", text: "Tangkapan ikan tenggiri melimpah di muara! Nelayan menawarkan harga grosir." },
    { reg: "Che A Miss", weather: "Cerah", text: "Terik matahari sempurna, pengeringan garam kasar di tambak pesisir berjalan cepat." },
    { reg: "Che A Miss", weather: "Cerah", text: "Kapal laut dari perairan luar berlabuh membawa barang dagangan unik." },
    { reg: "Che A Miss", weather: "Cerah", text: "Pasar Muara ramai pembeli, ikan asin kualitas tinggi siap didistribusikan." },
    { reg: "Che A Miss", weather: "Cerah", text: "Angin laut berembus tenang, pelayaran kapal dagang berjalan sesuai jadwal." },
    { reg: "Che A Miss", weather: "Cerah", text: "Festival Pesisir Che A Miss digelar, konsumsi bahan bakar dan perbekalan melonjak." },
    { reg: "Che A Miss", weather: "Cerah", text: "Dermaga utama penuh gerobak kulakan yang mengantre garam mentah." },
    { reg: "Che A Miss", weather: "Cerah", text: "Penyortir ikan melaporkan pasokan lobster pesisir meningkat tajam." },
    { reg: "Che A Miss", weather: "Cerah", text: "Jalur muara sungai jernih, perahu panggul bergerak tanpa hambatan." },
    
    // Cuaca: Hujan / Badai / Angin Kencang
    { reg: "Che A Miss", weather: "Hujan", text: "Badai laut menghantam dermaga pesisir, banyak nelayan memilih bersandar." },
    { reg: "Che A Miss", weather: "Hujan", text: "Hujan deras membasahi tambak, penjemuran garam dan ikan asin terhenti sementara." },
    { reg: "Che A Miss", weather: "Hujan", text: "Gelombang muara membesar, perahu kecil dilarang berlayar menuju perbatasan." },
    { reg: "Che A Miss", weather: "Hujan", text: "Gudang pesisir bocor dihantam hujan, beberapa karung garam terancam larut." },
    { reg: "Che A Miss", weather: "Hujan", text: "Angin kencang menerjang pesisir, harga pasokan ikan segar naik karena stok langka." },
    { reg: "Che A Miss", weather: "Hujan", text: "Jalur darat pesisir licin dan berlumpur, pengiriman cart ke Male Bear tersendat." },
    { reg: "Che A Miss", weather: "Hujan", text: "Kedai hangat di dermaga Che A Miss dipenuhi nelayan yang berteduh." },
    { reg: "Che A Miss", weather: "Hujan", text: "Pengawas dermaga mengibarkan bendera peringatan berbahaya di laut." },
    { reg: "Che A Miss", weather: "Hujan", text: "Muara meluap pelan, kuli panggul memindahkan barang ke area tinggi." },

    // Peristiwa Ekonomi / Lowongan / Perbatasan
    { reg: "Che A Miss", text: "Pedagang pesisir melaporkan permintaan tinggi untuk pasokan gabah dari darat." },
    { reg: "Che A Miss", text: "Gudang utama pesisir membuka lowongan pengawas baru untuk menjaga muatan laut." },
    { reg: "Che A Miss", text: "Pasar perairan Che A Miss kedatangan rombongan saudagar keliling luar wilayah." },
    { reg: "Che A Miss", text: "Tukang kayu dermaga sibuk memperbaiki lambung kapal dagang yang bocor." },
    { reg: "Che A Miss", text: "Permintaan tong kayu simpanan garam melesat cepat di galangan." },
    { reg: "Che A Miss", text: "Dua armada gerobak dari Bane A Gare tiba memborong ikan pengeringan." },
    { reg: "Che A Miss", text: "Pos cukai muara mengetatkan pemeriksaan muatan komoditas impor." },
    { reg: "Che A Miss", text: "Peralatan tangkap ikan baru mulai diperkenalkan oleh juru tempa lokal." },
    { reg: "Che A Miss", text: "Persediaan umpan laut melimpah, nelayan muda siap berlayar jauh." },

    // --------------------------------------------------------------------------
    // 2. MALE BEAR (Pesisir Rawa) - 27 Variasi
    // --------------------------------------------------------------------------
    // Cuaca: Cerah / Surut
    { reg: "Male Bear", weather: "Cerah", text: "Panen kerang hitam rawa melimpah! Warga desa memamerkan hasil tangkapan." },
    { reg: "Male Bear", weather: "Cerah", text: "Air rawa surut netral, pemungut spesimen mutiara liar bergerak bebas." },
    { reg: "Male Bear", weather: "Cerah", text: "Dermaga kayu rawa ramah dilewati gerobak tanpa rasa khawatir tenggelam." },
    { reg: "Male Bear", weather: "Cerah", text: "Ikan laut segar melimpah di pasar rawa, pedagang memberi obral cepat." },
    { reg: "Male Bear", weather: "Cerah", text: "Penyortir hasil laut menemukan pasokan kepiting bakau berkualitas super." },
    { reg: "Male Bear", weather: "Cerah", text: "Pembersih perahu rawa bekerja ekstra cepat menyelesaikan pesanan nelayan." },
    { reg: "Male Bear", weather: "Cerah", text: "Hutan bakau Male Bear menghasilkan minyak rempah rawa beraroma unik." },
    { reg: "Male Bear", weather: "Cerah", text: "Jalur sampan rawa terbuka lebar menuju daerah pesisir Bun She Riie." },
    { reg: "Male Bear", weather: "Cerah", text: "Pasokan kerang hijau mentah menumpuk di gubuk penampungan warga." },

    // Cuaca: Pasang / Hujan / Kabut
    { reg: "Male Bear", weather: "Hujan", text: "Air laut pasang besar! Jalur rawa Male Bear terendam hingga sebetis." },
    { reg: "Male Bear", weather: "Hujan", text: "Kabut rawa tebal menyelimuti perairan, jarak pandang pengemudi boat terbatas." },
    { reg: "Male Bear", weather: "Hujan", text: "Hujan lebat membuat sarang kerang sulit dijangkau oleh pemungut lokal." },
    { reg: "Male Bear", weather: "Hujan", text: "Jembatan kayu rawa licin berlumut, beberapa cart roda dua tergelincir." },
    { reg: "Male Bear", weather: "Hujan", text: "Gelombang rawa bergolak, pengiriman tangkapan segar ke darat tertunda." },
    { reg: "Male Bear", weather: "Hujan", text: "Lintah rawa berhamburan keluar karena banjir kecil, warga berhati-hati." },
    { reg: "Male Bear", weather: "Hujan", text: "Pengelola dermaga membatasi muatan barang agar gerobak tidak terperosok." },
    { reg: "Male Bear", weather: "Hujan", text: "Kedai apung rawa menjadi tempat hangat berlindung para pencari kerang." },
    { reg: "Male Bear", weather: "Hujan", text: "Angin rawa dingin berembus, permintaan makanan olahan panas meningkat." },

    // Peristiwa Ekonomi / Lowongan / Perbatasan
    { reg: "Male Bear", text: "Ditemukan rute rawa tersembunyi yang mempersingkat perjalanan ke Bun She Riie." },
    { reg: "Male Bear", text: "Pasokan kayu tahan air untuk konstruksi perahu rawa sangat dibutuhkan." },
    { reg: "Male Bear", text: "Pengelola dermaga rawa membuka lowongan pengawas lalu lintas muatan." },
    { reg: "Male Bear", text: "Pasar Male Bear kehabisan stok minyak lampu untuk penerangan rawa malam." },
    { reg: "Male Bear", text: "Tukang anjungan rawa menambah papan tumpuan gerobak berat." },
    { reg: "Male Bear", text: "Kelompok pemungut kerang membentuk ikatan dagang bersama di Male Bear." },
    { reg: "Male Bear", text: "Rombongan pedagang beras tiba untuk menukar beras dengan kepiting bakau." },
    { reg: "Male Bear", text: "Kualitas es alami penyimpan ikan segar di gubuk pendingin terjaga baik." },
    { reg: "Male Bear", text: "Perajin jala rawa kebanjiran pesanan benang serat tahan air." },

    // --------------------------------------------------------------------------
    // 3. BUN SHE RIIE (Pesawahan Selatan) - 27 Variasi
    // --------------------------------------------------------------------------
    // Cuaca: Cerah / Musim Panen
    { reg: "Bun She Riie", weather: "Cerah", text: "Musim panen raya! Hamparan sawah Bun She Riie menguning emas sempurna." },
    { reg: "Bun She Riie", weather: "Cerah", text: "Panen gabah melimpah, lumbung desa dipenuhi karung beras kualitas satu." },
    { reg: "Bun She Riie", weather: "Cerah", text: "Alat giling padi bekerja tanpa henti memproses pasokan beras putih." },
    { reg: "Bun She Riie", weather: "Cerah", text: "Peternak unggas melaporkan produksi telur bebek segar meningkat pesat." },
    { reg: "Bun She Riie", weather: "Cerah", text: "Cuaca terang benderang, penjemuran gabah basah selesai dalam sehari." },
    { reg: "Bun She Riie", weather: "Cerah", text: "Saluran irigasi mengalir jernih membasahi petakan sawah selatan." },
    { reg: "Bun She Riie", weather: "Cerah", text: "Pengawas lumbung membagikan insentif koin untuk buruh panggul terajin." },
    { reg: "Bun She Riie", weather: "Cerah", text: "Pasar Selatan diserbu pedagang luar yang berburu grosir beras murah." },
    { reg: "Bun She Riie", weather: "Cerah", text: "Rombongan kerbau pembajak sawah beristirahat di tepi sungai desa." },

    // Cuaca: Hujan / Hama / Musim Tanam
    { reg: "Bun She Riie", weather: "Hujan", text: "Hujan deras mengguyur sawah, pemungut gabah menunda pekerjaan penjemuran." },
    { reg: "Bun She Riie", weather: "Hujan", text: "Tanggul irigasi desa jebol kecil, warga bergotong-royong menambal lumpur." },
    { reg: "Bun She Riie", weather: "Hujan", text: "Jalan tanah pesawahan menjadi kubangan lumpur, cart beban berat tertahan." },
    { reg: "Bun She Riie", weather: "Hujan", text: "Ancaman hama tikus muncul di petakan timur, petani memasang perangkap." },
    { reg: "Bun She Riie", weather: "Hujan", text: "Kandang unggas lembap, peternak membutuhkan pasokan jerami kering ekstra." },
    { reg: "Bun She Riie", weather: "Hujan", text: "Kabut pagi tebal menutupi pemandangan sawah, aktivitas giling padi melambat." },
    { reg: "Bun She Riie", weather: "Hujan", text: "Sungai irigasi meluap pelan, air menggenangi areal jalan lintasan utama." },
    { reg: "Bun She Riie", weather: "Hujan", text: "Buruh pemungut memilih berteduh sambil menikmati kopi hangat desa." },
    { reg: "Bun She Riie", weather: "Hujan", text: "Stok beras gilingan basah meningkat karena terkendala panas matahari." },

    // Peristiwa Ekonomi / Lowongan / Perbatasan
    { reg: "Bun She Riie", text: "Operator alat giling padi membuka lowongan asisten mekanik tradisional." },
    { reg: "Bun She Riie", text: "Permintaan perkakas cangkul besi dari Bag Berg meningkat tajam." },
    { reg: "Bun She Riie", text: "Desa Bho Junk mengirim pesanan wadah bambu untuk tempat beras." },
    { reg: "Bun She Riie", text: "Pengawas lumbung memperketat catatan pembukuan stok beras keluar." },
    { reg: "Bun She Riie", text: "Harga dedak padi naik karena dicari peternak domba dari Khaa Wall Ee." },
    { reg: "Bun She Riie", text: "Perajin karung goni di Bun She Riie kehabisan bahan baku serat bambu." },
    { reg: "Bun She Riie", text: "Pedagang pesisir Male Bear memborong beras untuk bekal kapal laut." },
    { reg: "Bun She Riie", text: "Pasar desa menyelenggarakan lelang benih padi varietas unggul." },
    { reg: "Bun She Riie", text: "Jalan desa dibatu ulang agar gerobak kargo dapat melintas lebih lancar." },

    // --------------------------------------------------------------------------
    // 4. BHO JUNK (Pesawahan Pelosok) - 27 Variasi
    // --------------------------------------------------------------------------
    // Cuaca: Cerah / Kering
    { reg: "Bho Junk", weather: "Cerah", text: "Pengrajin bambu Bho Junk memamerkan desain anyaman wadah rempah kokoh." },
    { reg: "Bho Junk", weather: "Cerah", text: "Pembuat telur asin desa memanen telur bebek berkualitas asin sempurna." },
    { reg: "Bho Junk", weather: "Cerah", text: "Rumpun bambu liar tumbuh subur melimpah di lereng perbukitan Bho Junk." },
    { reg: "Bho Junk", weather: "Cerah", text: "Cuaca hangat mempercepat proses penggaraman telur asin tradisional." },
    { reg: "Bho Junk", weather: "Cerah", text: "Hasil anyaman bambu Bho Junk laku keras dibeli pengepul luar desa." },
    { reg: "Bho Junk", weather: "Cerah", text: "Lumbung cadangan darurat Bho Junk terisi penuh bahan makanan awetan." },
    { reg: "Bho Junk", weather: "Cerah", text: "Hutan bambu ramai oleh tebangan pemuda lokal pencari serat alami." },
    { reg: "Bho Junk", weather: "Cerah", text: "Pasar pelosok kebanjiran pesanan keranjang bambu untuk transportasi cart." },
    { reg: "Bho Junk", weather: "Cerah", text: "Minyak kelapa olahan rumahan khas Bho Junk siap dikemas dan dijual." },

    // Cuaca: Hujan / Longsor Bukit
    { reg: "Bho Junk", weather: "Hujan", text: "Hujan deras mengguyur pelosok, jalan bukit Bho Junk menjadi amat licin." },
    { reg: "Bho Junk", weather: "Hujan", text: "Longsoran ranting bambu menutupi separuh rute cart menuju Sadhayana." },
    { reg: "Bho Junk", weather: "Hujan", text: "Kelembapan udara tinggi memperlambat pengeringan bilah bambu anyaman." },
    { reg: "Bho Junk", weather: "Hujan", text: "Angin bukit dingin bertiup kencang, warga menyalakan tungku pemanas." },
    { reg: "Bho Junk", weather: "Hujan", text: "Sungai kecil pelosok meluap, jembatan bambu darurat harus diperkuat." },
    { reg: "Bho Junk", weather: "Hujan", text: "Pengrajin terpaksa memindahkan bengkel anyaman ke dalam gubuk kedap air." },
    { reg: "Bho Junk", weather: "Hujan", text: "Pencari serat bambu menunda masuk ke hutan karena risiko pohon tumbang." },
    { reg: "Bho Junk", weather: "Hujan", text: "Stok telur asin basah menumpuk menunggu proses pengasapan selesai." },
    { reg: "Bho Junk", weather: "Hujan", text: "Jalur darat menuju Bun She Riie tergenang air setinggi roda gerobak." },

    // Peristiwa Ekonomi / Lowongan / Perbatasan
    { reg: "Bho Junk", text: "Kepala Desa Bho Junk membuka pengadaan pangan cadangan wilayah." },
    { reg: "Bho Junk", text: "Pengrajin bambu membutuhkan pasokan pisau potong baja dari Bag Berg." },
    { reg: "Bho Junk", text: "Kerajinan bambu motif khas Galuh mendapatkan penghargaan dari Kota Galuh." },
    { reg: "Bho Junk", text: "Telur asin rasa rempah inovasi baru mulai diuji coba oleh warga desa." },
    { reg: "Bho Junk", text: "Kelompok pemuda melatih keterampilan merakit gerobak kayu berbahan bambu." },
    { reg: "Bho Junk", text: "Pengepul dari Sadhayana memesan ratusan Tampah bambu penjemur rempah." },
    { reg: "Bho Junk", text: "Harga batu bata tanah liat Bho Junk stabil di tingkat pedagang eceran." },
    { reg: "Bho Junk", text: "Pos penjagaan pelosok ditambah untuk mengamankan persediaan lumbung." },
    { reg: "Bho Junk", text: "Pasokan garam kasar dari Che A Miss sangat dibutuhkan untuk pengasingan telur." },

    // --------------------------------------------------------------------------
    // 5. SADHAYANA (Lembah Rempah) - 27 Variasi
    // --------------------------------------------------------------------------
    // Cuaca: Cerah / Panen Rempah
    { reg: "Sadhayana", weather: "Cerah", text: "Aroma kapulaga dan cengkeh harum menyengat di sepanjang lembah Sadhayana." },
    { reg: "Sadhayana", weather: "Cerah", text: "Panen raya kapulaga! Tanah lembah yang subur menghasilkan rempah super." },
    { reg: "Sadhayana", weather: "Cerah", text: "Pemetik herbal menemukan koloni madu hutan murni di tebing tinggi." },
    { reg: "Sadhayana", weather: "Cerah", text: "Pengeringan cengkeh di tampah bambu selesai lebih cepat di bawah matahari." },
    { reg: "Sadhayana", weather: "Cerah", text: "Tabib racik lembah berhasil menyempurnakan ramuan pemulih stamina ramuan herbal." },
    { reg: "Sadhayana", weather: "Cerah", text: "Bunga-bunga obat liar bermekaran indah di sepanjang lereng bukit lembah." },
    { reg: "Sadhayana", weather: "Cerah", text: "Pasar Rempah Sadhayana diserbu pembeli dari Kerajaan Kota Galuh." },
    { reg: "Sadhayana", weather: "Cerah", text: "Gudang penyimpanan herbal menambah area penjemuran luas di ruang terbuka." },
    { reg: "Sadhayana", weather: "Cerah", text: "Minyak atsiri murni hasil suling rempah siap diekspor ke wilayah tetangga." },

    // Cuaca: Kabut / Hujan / Lembap
    { reg: "Sadhayana", weather: "Hujan", text: "Kabut tebal menyelimuti lembah, jarak pandang para pemetik rempah terbatas." },
    { reg: "Sadhayana", weather: "Hujan", text: "Hujan gerimis mengguyur lembah, penjemuran cengkeh terpaksa dipindahkan ke ruang tertutup." },
    { reg: "Sadhayana", weather: "Hujan", text: "Tanah lembah yang basah gembur membuat pergerakan cart beban berat melambat." },
    { reg: "Sadhayana", weather: "Hujan", text: "Hawa dingin lembah membuat jamu seduh hangat laris manis di kedai." },
    { reg: "Sadhayana", weather: "Hujan", text: "Pencari madu menunda pemanjatan tebing licin demi keselamatan." },
    { reg: "Sadhayana", weather: "Hujan", text: "Tanaman obat sensitif kebanjiran, petani merawat irigasi perbukitan." },
    { reg: "Sadhayana", weather: "Hujan", text: "Kabut malam lembah sangat pekat, obor penerangan dipasang di tiap pos." },
    { reg: "Sadhayana", weather: "Hujan", text: "Jamur herbal langka tumbuh subur di batang pohon lembah yang basah." },
    { reg: "Sadhayana", weather: "Hujan", text: "Pengering rempah memanfaatkan alat pemanas buatan berbahan kayu bakar." },

    // Peristiwa Ekonomi / Lowongan / Perbatasan
    { reg: "Sadhayana", text: "Permintaan cengkeh kering dari Istana Kota Galuh melonjak hingga 200%!" },
    { reg: "Sadhayana", text: "Asisten racik obat lembah membuka lowongan murid magang pembuatan herbal." },
    { reg: "Sadhayana", text: "Pasokan botol wadah ekstrak herbal buatan Bag Berg mulai menipis." },
    { reg: "Sadhayana", text: "Tabib Agung Istana berkunjung ke Sadhayana mencari bahan baku obat murni." },
    { reg: "Sadhayana", text: "Pasar Sadhayana kehabisan pasokan gula aren penyeimbang rasa herbal." },
    { reg: "Sadhayana", text: "Keranjang bambu tempat rempah buatan Bho Junk didistribusikan secara massal." },
    { reg: "Sadhayana", text: "Resep ramuan penguat otot perajin lembah diminati para kuli panggul." },
    { reg: "Sadhayana", text: "Ekspedisi pedagang Kota Galuh menyewa gudang transit rempah sementara." },
    { reg: "Sadhayana", text: "Uji mutu kapulaga kering menunjukkan kadar aromatik tertinggi tahun ini." },

    // --------------------------------------------------------------------------
    // 6. BANE A GARE (Pesawahan Perbatasan) - 27 Variasi
    // --------------------------------------------------------------------------
    // Cuaca: Cerah / Ramai Transit
    { reg: "Bane A Gare", weather: "Cerah", text: "Pasar transit perbatasan dipadati iring-iringan gerobak dagang dari pesisir." },
    { reg: "Bane A Gare", weather: "Cerah", text: "Cuaca bersahabat, penampungan ternak perbatasan menampung ratusan lembu." },
    { reg: "Bane A Gare", weather: "Cerah", text: "Pengatur jadwal rute cart sibuk mengarahkan lalu lintas gerobak melintas." },
    { reg: "Bane A Gare", weather: "Cerah", text: "Kuli panggul perbatasan bekerja cepat memindahkan muatan transit kargo." },
    { reg: "Bane A Gare", weather: "Cerah", text: "Pos cukai transit mencatat rekor jumlah gerobak melintas dalam sehari." },
    { reg: "Bane A Gare", weather: "Cerah", text: "Pedagang rempah dan hasil laut barter langsung secara damai di pasar." },
    { reg: "Bane A Gare", weather: "Cerah", text: "Rest area perbatasan penuh oleh pengemudi cart yang beristirahat makan." },
    { reg: "Bane A Gare", weather: "Cerah", text: "Bengkel perbaikan roda gerobak kebanjiran pesanan dari pengembara." },
    { reg: "Bane A Gare", weather: "Cerah", text: "Pasokan pakan ternak segar di pos penampungan tercukupi melimpah." },

    // Cuaca: Hujan / Padat Macet
    { reg: "Bane A Gare", weather: "Hujan", text: "Hujan deras membuat area transit perbatasan dipenuhi genangan air berlumpur." },
    { reg: "Bane A Gare", weather: "Hujan", text: "Gerobak beban berat menumpuk di pos perbatasan karena rute gunung licin." },
    { reg: "Bane A Gare", weather: "Hujan", text: "Angin kencang menerjang tenda-tenda penampungan barang sementara." },
    { reg: "Bane A Gare", weather: "Hujan", text: "Sup daging hangat di kedai perbatasan diborong pengemudi cart yang kedinginan." },
    { reg: "Bane A Gare", weather: "Hujan", text: "Penjaga ternak memperketat atap penampungan agar hewan tidak sakit." },
    { reg: "Bane A Gare", weather: "Hujan", text: "Jadwal keberangkatan kargo malam dialihkan demi keselamatan perjalanan." },
    { reg: "Bane A Gare", weather: "Hujan", text: "Lampu obor batas wilayah dipasang lebih rapat menembus hujan lebat." },
    { reg: "Bane A Gare", weather: "Hujan", text: "Antrean pos pemeriksaan cukai mengular panjang karena cuaca buruk." },
    { reg: "Bane A Gare", weather: "Hujan", text: "Petugas perbatasan membagikan mantel kain minyak untuk kuli panggul." },

    // Peristiwa Ekonomi / Lowongan / Perbatasan
    { reg: "Bane A Gare", text: "Mandor transit perbatasan membuka lowongan pengatur jadwal pergerakan cart." },
    { reg: "Bane A Gare", text: "Penjaga penampungan ternak menambah kuota kandang untuk pasokan kuda." },
    { reg: "Bane A Gare", text: "Tarif sewa gudang transit perbatasan dinaikkan sementara karena permintaan." },
    { reg: "Bane A Gare", text: "Pengepul barang pesisir dan pegunungan menyepakati standar timbangan baru." },
    { reg: "Bane A Gare", text: "Sistem tiket masuk perbatasan diperbarui untuk mempercepat inspeksi." },
    { reg: "Bane A Gare", text: "Kuda penarik cart dari Khaa Wall Ee tiba di pos transit dalam kondisi prima." },
    { reg: "Bane A Gare", text: "Pasokan tali tambang pengikat barang laris manis di toko perkakas." },
    { reg: "Bane A Gare", text: "Rombongan pengawal kerajaan bersiap mengawal pengiriman kargo besi." },
    { reg: "Bane A Gare", text: "Penginapan murah perbatasan selalu penuh terisi pengembara tiap malam." },

    // --------------------------------------------------------------------------
    // 7. BAG BERG (Pegunungan Tambang) - 27 Variasi
    // --------------------------------------------------------------------------
    // Cuaca: Cerah / Dingin Pegunungan
    { reg: "Bag Berg", weather: "Cerah", text: "Suara gema kapak penebang jati bergelombang di hutan pegunungan Bag Berg." },
    { reg: "Bag Berg", weather: "Cerah", text: "Tambang batu besi menemukan urat bijih besi hitam murni kualitas super." },
    { reg: "Bag Berg", weather: "Cerah", text: "Pandai besi lokal menempa batangan besi mentah menjadi perkakas kuat." },
    { reg: "Bag Berg", weather: "Cerah", text: "Kayu jati gelondongan raksasa berhasil diturunkan ke area penampungan." },
    { reg: "Bag Berg", weather: "Cerah", text: "Tungku peleburan bijih besi menyala membara sepanjang siang dan malam." },
    { reg: "Bag Berg", weather: "Cerah", text: "Gudang besi Bag Berg bersiap mendistribusikan batangan besi ke Kota Galuh." },
    { reg: "Bag Berg", weather: "Cerah", text: "Pemecah batu kali menghasilkan batu pondasi kokoh untuk benteng." },
    { reg: "Bag Berg", weather: "Cerah", text: "Pasokan kayu bakar mentah melimpah untuk menunjang industri tempa." },
    { reg: "Bag Berg", weather: "Cerah", text: "Gerobak khusus beban ekstra diproduksi langsung di bengkel gunung Bag Berg." },

    // Cuaca: Hujan / Dingin Es / Longsor Batu
    { reg: "Bag Berg", weather: "Hujan", text: "Hujan es dingin menyelimuti puncak, aktivitas penambangan batu dihentikan." },
    { reg: "Bag Berg", weather: "Hujan", text: "Longsor batu tebing menutupi rute perbukitan menuju Khaa Wall Ee." },
    { reg: "Bag Berg", weather: "Hujan", text: "Tungku peleburan besi tertutup terpal ketat menahan siraman air hujan." },
    { reg: "Bag Berg", weather: "Hujan", text: "Jalur tebing pegunungan sangat licin, cart kayu dilarang mengangkut beban ekstrem." },
    { reg: "Bag Berg", weather: "Hujan", text: "Suhu udara merosot tajam, pekerja tambang membutuhkan asupan makanan panas." },
    { reg: "Bag Berg", weather: "Hujan", text: "Kabut gunung tebal menutupi jurang, pengemudi cart harus ekstra waspada." },
    { reg: "Bag Berg", weather: "Hujan", text: "Kayu jati basah dipindahkan ke gudang pengering bertingkat di bawah." },
    { reg: "Bag Berg", weather: "Hujan", text: "Air terjun gunung meluap, memutus jembatan kayu lintasan tebing sementara." },
    { reg: "Bag Berg", weather: "Hujan", text: "Kedai hangat pertambangan kehabisan pasokan jahe dan rempah penghangat." },

    // Peristiwa Ekonomi / Lowongan / Perbatasan
    { reg: "Bag Berg", text: "Kepala pengawas tambang kerajaan membuka lowongan mandor pertambangan baru." },
    { reg: "Bag Berg", text: "Arsitek Kerajaan Kota Galuh memesan ribuan balok kayu jati berkualitas." },
    { reg: "Bag Berg", text: "Pandai besi membutuhkan pasokan minyak pelumas roda gerobak dari pesisir." },
    { reg: "Bag Berg", text: "Alat pahat besi tempaan Bag Berg dipuji karena kekuatan dan ketajamannya." },
    { reg: "Bag Berg", text: "Stok batu asah kualitas halus dipanen dari lereng puncak pegunungan." },
    { reg: "Bag Berg", text: "Pengirim besi mentah mendapatkan pengawalan ekstra di jalur rawan." },
    { reg: "Bag Berg", text: "Perajin kayu tebang membuat gerobak kargo pesanan khusus pedagang." },
    { reg: "Bag Berg", text: "Uji ketahanan beli bijih besi menunjukkan peningkatan pemurnian besi." },
    { reg: "Bag Berg", text: "Pekerja tambang batu membentuk kelompok solidaritas kesejahteraan." },

    // --------------------------------------------------------------------------
    // 8. KHAA WALL EE (Bukit Peternakan) - 27 Variasi
    // --------------------------------------------------------------------------
    // Cuaca: Cerah / Rumput Subur
    { reg: "Khaa Wall Ee", weather: "Cerah", text: "Padang rumput Khaa Wall Ee dipenuhi kawanan sapi dan domba gemuk bermutu." },
    { reg: "Khaa Wall Ee", weather: "Cerah", text: "Pemerah susu mencatat rekor produksi susu sapi murni harian terbanyak." },
    { reg: "Khaa Wall Ee", weather: "Cerah", text: "Pengolah kulit memproduksi bahan kulit sapi olahan yang lembut dan kuat." },
    { reg: "Khaa Wall Ee", weather: "Cerah", text: "Pelatih kuda memperkenalkan kuda penarik cart bertulang besar dan tangguh." },
    { reg: "Khaa Wall Ee", weather: "Cerah", text: "Hasil cukuran bulu domba menumpuk rapi di gudang penampungan wol." },
    { reg: "Khaa Wall Ee", weather: "Cerah", text: "Keju padang bukit buatan peternak lokal menjadi komoditas primadona." },
    { reg: "Khaa Wall Ee", weather: "Cerah", text: "Anak kuda unggulan siap dilelang di padang pembibitan Khaa Wall Ee." },
    { reg: "Khaa Wall Ee", weather: "Cerah", text: "Kedai bukit menyajikan susu segar hangat manis bagi para pengembara." },
    { reg: "Khaa Wall Ee", weather: "Cerah", text: "Gerobak tarikan kuda tunggal diuji coba mengelilingi lintasan bukit." },

    // Cuaca: Hujan / Serigala / Angin Bukit
    { reg: "Khaa Wall Ee", weather: "Hujan", text: "Hujan angin melanda bukit, gembala menggiring kawanan ternak ke dalam kandang." },
    { reg: "Khaa Wall Ee", weather: "Hujan", text: "Ancaman serigala gunung terdeteksi di pinggir padang, penjagaan ditingkatkan." },
    { reg: "Khaa Wall Ee", weather: "Hujan", text: "Padang rumput becek bergelombang, pergerakan kuda penarik terlambat." },
    { reg: "Khaa Wall Ee", weather: "Hujan", text: "Proses pengeringan dan penyamakan kulit terhenti sementara akibat hujan." },
    { reg: "Khaa Wall Ee", weather: "Hujan", text: "Susu murni yang tidak cepat didistribusikan terancam basi karena cuaca." },
    { reg: "Khaa Wall Ee", weather: "Hujan", text: "Kandang domba dilapisi jerami tebal untuk mencegah hewan kedinginan." },
    { reg: "Khaa Wall Ee", weather: "Hujan", text: "Petir menyambar di puncak bukit, kuda-kuda di kandang tampak gelisah." },
    { reg: "Khaa Wall Ee", weather: "Hujan", text: "Jalur perbukitan menuju Kota Galuh ditutup sementara karena jarak pandang buruk." },
    { reg: "Khaa Wall Ee", weather: "Hujan", text: "Peternak meracik jamu herbal hangat untuk menjaga stamina hewan." },

    // Peristiwa Ekonomi / Lowongan / Perbatasan
    { reg: "Khaa Wall Ee", text: "Penunggang dan pelatih kuda cart membuka lowongan asisten pemelihara kuda." },
    { reg: "Khaa Wall Ee", text: "Permintaan kulit sapi olahan dari perajin busana Istana melonjak tinggi." },
    { reg: "Khaa Wall Ee", text: "Kereta kuda ganda 100kg produksi Khaa Wall Ee sukses menarik perhatian." },
    { reg: "Khaa Wall Ee", text: "Pasokan dedak dan garam jilat untuk ternak dipesan dari wilayah lain." },
    { reg: "Khaa Wall Ee", text: "Peralatan pelana dan tali kendali berbahan kulit asli laku keras." },
    { reg: "Khaa Wall Ee", text: "Festival Pacuan Kuda Bukit digelar meriah untuk memilih kuda tercepat." },
    { reg: "Khaa Wall Ee", text: "Peternakan domba menambah areal padang rumput penggembalaan baru." },
    { reg: "Khaa Wall Ee", text: "Gudang penyamakan kulit membutuhkan pasokan zat pembilas herbal Sadhayana." },
    { reg: "Khaa Wall Ee", text: "Kuda karavan ekspedisi siap disewakan untuk perjalanan jarak jauh." },

    // --------------------------------------------------------------------------
    // 9. KERAJAAN KOTA GALUH (Ibu Kota) - 30 Variasi (Regional & Warta Agung Global)
    // --------------------------------------------------------------------------
    // Berita Global / Titah Raja / Peristiwa Agung (isGlobal: true)
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Pasar Agung Kerajaan mengumumkan pembukaan lowongan menteri baru!" },
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Titah Raja: Cukai Perdagangan Komoditas Antar Wilayah Tetap Stabil." },
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Perpustakaan Agung Kerajaan mengimpor modul kitab ilmu pengetahuan baru!" },
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Pengumuman Agung: Festival Pasar Kerajaan Dimulai Pekan Ini!" },
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Titah Raja: Pengawalan Jalur Distribusi Besi dan Beras Diperketat." },
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Musim Perdagangan Elit: Permintaan Kain Sutra Tempa Meningkat 150%." },
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Warta Kerajaan: Armada Laut Dagang Siap Berlayar Menuju Wilayah Luar." },
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Peringatan Musim: Angin Kencang Diprediksi Melanda Wilayah Pesisir." },
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Menteri Keuangan merilis laporan arus dagang kerajaan yang memuaskan." },
    { reg: "Kerajaan Kota Galuh", isGlobal: true, text: "Sistem Standar Timbangan Komoditas Resmi Diseragamkan di 9 Wilayah." },

    // Regional Kota Galuh (Cerah / Megah)
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Pelataran benteng megah dipercantik menjelang jamuan tamu istana." },
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Pengolah sutra istana menciptakan pola tenun berhias benang emas." },
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Juru ketik dan pengarsip perpustakaan merapikan naskah-naskah kuno Galuh." },
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Koki utama istana mencari rempah-rempah langka dari Lembah Sadhayana." },
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Pengawas kereta kuda utama menginspeksi armada kereta bangsawan." },
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Pasar Elit Kota Galuh memamerkan barang-barang mewah dari seluruh wilayah." },
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Tabib Racik Obat Istana membuka eksperimen pengobatan herbal baru." },
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Arsitek benteng merancang menara pengawas baru di gerbang timur." },
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Penatap Pasar & Cukai Dagang mencatat volume arus barang tertinggi." },
    { reg: "Kerajaan Kota Galuh", weather: "Cerah", text: "Prajurit benteng mengadakan latihan baris-berbaris di alun-alun kerajaan." },

    // Regional Kota Galuh (Hujan / Penjagaan Ketat)
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Hujan deras mengguyur Kota Galuh, lampu-lampu lentera benteng dinyalakan." },
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Pelataran benteng licin, penjagaan di gerbang utama diperketat." },
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Pengunjung Perpustakaan Agung meningkat pesat saat hujan berteduh." },
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Kereta kuda istana bergerak pelan melintasi batu jalanan yang basah." },
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Kedai bangsawan menyajikan hidangan hangat spesial resep istana." },
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Gudang bahan pokok kerajaan diperiksa ketat dari kelembapan air hujan." },
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Juru tulis diplomatik menyelesaikan naskah perjanjian di ruangan hangat." },
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Atap balai kota diperbaiki oleh perajin kayu pilihan Bag Berg." },
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Rombongan utusan dari perbatasan berteduh di paviliun tamu istana." },
    { reg: "Kerajaan Kota Galuh", weather: "Hujan", text: "Prajurit menara pengawas menggunakan jas hujan kain minyak tebal." }
];
