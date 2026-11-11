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

// Trade Goods & Base Prices
const ITEMS = {
    "garam_kasar": { name: "Garam Kasar", weight: 0.5, basePrice: 12, origin: "Che A Miss" },
    "ikan_asin": { name: "Ikan Asin", weight: 0.8, basePrice: 18, origin: "Che A Miss" },
    "ikan_segar": { name: "Ikan Laut Segar", weight: 1.0, basePrice: 25, origin: "Male Bear" },
    "beras_putih": { name: "Beras Putih", weight: 2.0, basePrice: 40, origin: "Bun She Riie" },
    "telur_asin": { name: "Telur Asin", weight: 0.5, basePrice: 20, origin: "Bho Junk" },
    "anyaman_bambu": { name: "Anyaman Bambu", weight: 1.5, basePrice: 65, origin: "Bho Junk" },
    "cengkeh_kering": { name: "Cengkeh Kering", weight: 0.2, basePrice: 85, origin: "Sadhayana" },
    "kapulaga": { name: "Kapulaga Lembah", weight: 0.2, basePrice: 90, origin: "Sadhayana" },
    "biji_besi": { name: "Biji Besi Mentah", weight: 5.0, basePrice: 150, origin: "Bag Berg" },
    "kayu_jati": { name: "Kayu Jati Gelondong", weight: 8.0, basePrice: 280, origin: "Bag Berg" },
    "susu_murni": { name: "Susu Sapi Murni", weight: 1.0, basePrice: 35, origin: "Khaa Wall Ee" },
    "kulit_olah": { name: "Kulit Sapi Olahan", weight: 3.0, basePrice: 210, origin: "Khaa Wall Ee" },
    "kain_sutra": { name: "Kain Sutra Tempa", weight: 0.5, basePrice: 450, origin: "Kerajaan Kota Galuh" }
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

const SKILL_NAMES = {
    navigasiFisik: "Navigasi & Ketahanan Fisik",
    pengolahanPangan: "Pengolahan Pangan",
    agrariaPertanian: "Pengetahuan Agraria",
    kerajinanKonstruksi: "Kerajinan & Konstruksi",
    botanikalRempah: "Botanikal & Rempah",
    manajemenMuatan: "Manajemen Muatan",
    tambangPertukangan: "Tambang & Pertukangan",
    literasiAdministrasi: "Literasi & Administrasi",
    peternakanKulit: "Peternakan & Olah Kulit"
};
