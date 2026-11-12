/* ==========================================================================
ASSET DATA & CONSTANTS (UPDATED)
========================================================================== */

// 9 Regions & Connectivity Map (Dilengkapi Jarak Antar Wilayah dlm km)
const REGIONS = {
"Che A Miss": {
name: "Che A Miss",
type: "Pesisir Utama",
desc: "Muara sungai besar dan pesisir pantai tempat berkumpulnya pedagang pemula.",
neighbors: {
"Male Bear": { dist: 4.5, terrain: "pesisir" },
"Bane A Gare": { dist: 6.2, terrain: "dataran" }
},
innCost: 30, innMealCost: 50, housePrice: 750000,
jobs: [
{ title: "Buruh Angkut Ikan & Garam", reqSkill: null, expSkill: "navigasi", basePay: 4 },
{ title: "Pengering & Pengasin Ikan", reqSkill: null, expSkill: "pangan", basePay: 4.5 },
{ title: "Pengawas Gudang Pesisir", reqSkill: { navigasi: 4 }, expSkill: "navigasi", basePay: 12 },
{ title: "Nakhoda Kapal Dagang Pesisir", reqSkill: { navigasi: 6, muatan: 5, admin: 4 }, expSkill: "navigasi", basePay: 45 }
]
},
"Male Bear": {
name: "Male Bear",
type: "Pesisir Rawa",
desc: "Daerah pesisir berbatu dengan akses rawa-rawa liar dan perikanan laut.",
neighbors: {
"Che A Miss": { dist: 4.5, terrain: "pesisir" },
"Bun She Riie": { dist: 5.8, terrain: "rawa" }
},
innCost: 65, innMealCost: 95, housePrice: 1350000,
jobs: [
{ title: "Pemungut Kerang & Hasil Rawa", reqSkill: null, expSkill: "navigasi", basePay: 4.5 },
{ title: "Pembersih Perahu Nelayan", reqSkill: null, expSkill: "tambang", basePay: 5 },
{ title: "Penyortir Mutu Hasil Laut", reqSkill: { pangan: 4 }, expSkill: "pangan", basePay: 14 },
{ title: "Pengelola Dermaga Rawa", reqSkill: { navigasi: 6, admin: 5 }, expSkill: "admin", basePay: 50 }
]
},
"Bun She Riie": {
name: "Bun She Riie",
type: "Pesawahan Selatan",
desc: "Hamparan sawah yang luas dengan saluran irigasi tradisional.",
neighbors: {
"Male Bear": { dist: 5.8, terrain: "rawa" },
"Bho Junk": { dist: 3.8, terrain: "dataran" }
},
innCost: 65, innMealCost: 95, housePrice: 1350000,
jobs: [
{ title: "Buruh Pemungut Gabah", reqSkill: null, expSkill: "agraria", basePay: 4.2 },
{ title: "Pembersih Kandang Unggas", reqSkill: null, expSkill: "peternakan", basePay: 4.5 },
{ title: "Operator Alat Giling Padi", reqSkill: { agraria: 4 }, expSkill: "agraria", basePay: 15 },
{ title: "Pengawas Lumbung Desa", reqSkill: { agraria: 6, muatan: 5, admin: 4 }, expSkill: "agraria", basePay: 52 }
]
},
"Bho Junk": {
name: "Bho Junk",
type: "Pesawahan Pelosok",
desc: "Desa lumbung padi pelindung yang dikelilingi perbukitan hijau.",
neighbors: {
"Bun She Riie": { dist: 3.8, terrain: "dataran" },
"Sadhayana": { dist: 7.0, terrain: "bukit" }
},
innCost: 150, innMealCost: 200, housePrice: 2500000,
jobs: [
{ title: "Pencari Serat & Bambu Liar", reqSkill: null, expSkill: "konstruksi", basePay: 4.8 },
{ title: "Pembuat Telur Asin Desa", reqSkill: null, expSkill: "pangan", basePay: 5 },
{ title: "Pengrajin Anyaman Bambu", reqSkill: { konstruksi: 4 }, expSkill: "konstruksi", basePay: 18 },
{ title: "Kepala Desa Pengadaan Pangan", reqSkill: { agraria: 6, konstruksi: 5, admin: 4 }, expSkill: "admin", basePay: 60 }
]
},
"Sadhayana": {
name: "Sadhayana",
type: "Lembah Rempah",
desc: "Lembah lembap di kaki bukit yang tanahnya sangat subur untuk tanaman obat & rempah.",
neighbors: {
"Bho Junk": { dist: 7.0, terrain: "bukit" },
"Kerajaan Kota Galuh": { dist: 8.5, terrain: "gunung" }
},
innCost: 350, innMealCost: 430, housePrice: 4800000,
jobs: [
{ title: "Pemetik Bunga & Rempah Liar", reqSkill: null, expSkill: "botanikal", basePay: 5.5 },
{ title: "Pencari Madu Hutan", reqSkill: null, expSkill: "navigasi", basePay: 6 },
{ title: "Pedagang Keliling Rempah Lembah", reqSkill: { berdagang: 3 }, expSkill: "berdagang", basePay: 22 },
{ title: "Asisten Racik Obat Lembah", reqSkill: { botanikal: 7, admin: 5, pangan: 4 }, expSkill: "botanikal", basePay: 75 }
]
},
"Bane A Gare": {
name: "Bane A Gare",
type: "Pesawahan Perbatasan",
desc: "Pasar transit perbatasan antara pesisir dan wilayah pegunungan.",
neighbors: {
"Che A Miss": { dist: 6.2, terrain: "dataran" },
"Bag Berg": { dist: 7.5, terrain: "bukit" }
},
innCost: 150, innMealCost: 200, housePrice: 2500000,
jobs: [
{ title: "Buruh Panggul Pasar Perbatasan", reqSkill: null, expSkill: "muatan", basePay: 5 },
{ title: "Penjaga Penampungan Ternak", reqSkill: null, expSkill: "peternakan", basePay: 5 },
{ title: "Pengatur Jadwal Rute Cart", reqSkill: { muatan: 4 }, expSkill: "muatan", basePay: 19 },
{ title: "Mandor Transit Perbatasan", reqSkill: { muatan: 6, agraria: 5, admin: 4 }, expSkill: "muatan", basePay: 64 }
]
},
"Bag Berg": {
name: "Bag Berg",
type: "Pegunungan Tambang",
desc: "Wilayah berbatu terjal, dingin, tempat para penebang kayu dan penambang batu/besi.",
neighbors: {
"Bane A Gare": { dist: 7.5, terrain: "bukit" },
"Khaa Wall Ee": { dist: 9.0, terrain: "gunung" }
},
innCost: 350, innMealCost: 430, housePrice: 4800000,
jobs: [
{ title: "Pemecah Batu Kali & Tambang", reqSkill: null, expSkill: "tambang", basePay: 6 },
{ title: "Penebang Kayu Jati Kasar", reqSkill: null, expSkill: "tambang", basePay: 6 },
{ title: "Pedagang Keliling Besi & Kayu", reqSkill: { berdagang: 3 }, expSkill: "berdagang", basePay: 25 },
{ title: "Kepala Pengawas Tambang Kerajaan", reqSkill: { tambang: 7, muatan: 5, navigasi: 4 }, expSkill: "tambang", basePay: 80 }
]
},
"Khaa Wall Ee": {
name: "Khaa Wall Ee",
type: "Bukit Peternakan",
desc: "Padang rumput perbukitan yang luas, tempat peternakan sapi/domba milik warga desa.",
neighbors: {
"Bag Berg": { dist: 9.0, terrain: "gunung" },
"Kerajaan Kota Galuh": { dist: 10.2, terrain: "bukit" }
},
innCost: 750, innMealCost: 880, housePrice: 8500000,
jobs: [
{ title: "Gembala Sapi & Domba", reqSkill: null, expSkill: "peternakan", basePay: 6.5 },
{ title: "Pemerah Susu Murni", reqSkill: null, expSkill: "peternakan", basePay: 7 },
{ title: "Pengolah Kulit & Bulu Domba", reqSkill: { peternakan: 4 }, expSkill: "peternakan", basePay: 28 },
{ title: "Penunggang & Pelatih Kuda Cart", reqSkill: { peternakan: 6, muatan: 5, navigasi: 5 }, expSkill: "peternakan", basePay: 92 }
]
},
"Kerajaan Kota Galuh": {
name: "Kerajaan Kota Galuh",
type: "Ibu Kota Kerajaan",
desc: "Pusat peradaban, benteng megah, Perpustakaan Agung Kerajaan, dan pusat perdagangan elit.",
neighbors: {
"Sadhayana": { dist: 8.5, terrain: "gunung" },
"Khaa Wall Ee": { dist: 10.2, terrain: "bukit" }
},
innCost: 1800, innMealCost: 2100, housePrice: 25000000,
jobs: [
{ title: "Pembersih Pelataran Benteng", reqSkill: null, expSkill: "navigasi", basePay: 8 },
{ title: "Pelayan Kedai Bangsawan", reqSkill: null, expSkill: "admin", basePay: 9 },
{ title: "Kuli Panggul Gerobak Kerajaan", reqSkill: null, expSkill: "muatan", basePay: 10 },
{ title: "Juru Ketik & Pengarsip Perpus", reqSkill: { admin: 4 }, expSkill: "admin", basePay: 35 },
{ title: "Penjaga Gudang Bahan Pokok", reqSkill: { muatan: 4, agraria: 3 }, expSkill: "muatan", basePay: 38 },
{ title: "Pengolah Sutra & Busana Istana", reqSkill: { peternakan: 4, konstruksi: 3 }, expSkill: "konstruksi", basePay: 42 },
{ title: "Pengawas Kereta Kuda Utama", reqSkill: { peternakan: 4, navigasi: 3 }, expSkill: "navigasi", basePay: 45 },
{ title: "Penatap Pasar & Cukai Dagang", reqSkill: { admin: 4, muatan: 3 }, expSkill: "admin", basePay: 48 },
{ title: "Arsitek Irigasi & Benteng", reqSkill: { tambang: 6, agraria: 4 }, expSkill: "tambang", basePay: 110 },
{ title: "Tabib Racik Obat Istana", reqSkill: { botanikal: 6, pangan: 5 }, expSkill: "botanikal", basePay: 120 },
{ title: "Nakhoda Armada Kerajaan", reqSkill: { navigasi: 6, muatan: 5 }, expSkill: "navigasi", basePay: 130 },
{ title: "Mandor Logistik Agung", reqSkill: { muatan: 6, navigasi: 5, admin: 4 }, expSkill: "muatan", basePay: 140 },
{ title: "Juru Tulis Diplomatik Kerajaan", reqSkill: { admin: 6, navigasi: 4 }, expSkill: "admin", basePay: 150 },
{ title: "Koki Utama Jamuan Istana", reqSkill: { pangan: 6, botanikal: 5 }, expSkill: "pangan", basePay: 160 },
{ title: "Menteri Keuangan & Perdagangan", reqSkill: { admin: 8, muatan: 7, navigasi: 6, agraria: 5, tambang: 5 }, reqExp: 200, expSkill: "admin", basePay: 600 },
{ title: "Kepala Logistik & Pasokan Pangan", reqSkill: { muatan: 8, navigasi: 7, agraria: 7, peternakan: 6, admin: 5 }, reqExp: 180, expSkill: "muatan", basePay: 550 },
{ title: "Kepala Tabib & Herbalis Agung", reqSkill: { botanikal: 8, pangan: 7, admin: 7, agraria: 6 }, reqExp: 150, expSkill: "botanikal", basePay: 500 },
{ title: "Panglima Pertambangan & Benteng", reqSkill: { tambang: 8, muatan: 7, navigasi: 6, peternakan: 5 }, reqExp: 160, expSkill: "tambang", basePay: 530 }
]
}
};

// 54 Trade Goods Items
const ITEMS = {
"garam_kasar": { name: "Garam Kasar Tambak", weight: 0.5, basePrice: 12, origin: "Che A Miss" },
"ikan_asin": { name: "Ikan Asin Pengeringan", weight: 0.8, basePrice: 18, origin: "Che A Miss" },
"terasi_udang": { name: "Terasi Udang Pesisir", weight: 0.4, basePrice: 22, origin: "Che A Miss" },
"kerang_mutiara": { name: "Kerang Mutiara Mentah", weight: 0.3, basePrice: 75, origin: "Che A Miss" },
"minyak_ikan": { name: "Minyak Hati Ikan Hiu", weight: 0.7, basePrice: 55, origin: "Che A Miss" },
"rumput_laut": { name: "Rumput Laut Kering", weight: 0.6, basePrice: 25, origin: "Che A Miss" },

"ikan_segar": { name: "Ikan Laut Segar", weight: 1.0, basePrice: 25, origin: "Male Bear" },
"kerang_hitam": { name: "Kerang Hitam Rawa", weight: 1.2, basePrice: 30, origin: "Male Bear" },
"minyak_bakau": { name: "Minyak Rempah Bakau", weight: 0.6, basePrice: 45, origin: "Male Bear" },
"kepiting_bakau": { name: "Kepiting Bakau Besar", weight: 1.5, basePrice: 68, origin: "Male Bear" },
"lumpur_terapi": { name: "Lumpur Mineral Rawa", weight: 2.0, basePrice: 35, origin: "Male Bear" },
"serat_bakau": { name: "Serat Batang Bakau", weight: 1.1, basePrice: 28, origin: "Male Bear" },

"beras_putih": { name: "Beras Putih Super", weight: 2.0, basePrice: 40, origin: "Bun She Riie" },
"gabah_kering": { name: "Gabah Kering Giling", weight: 2.5, basePrice: 28, origin: "Bun She Riie" },
"dedak_halus": { name: "Dedak Padi Halus", weight: 1.5, basePrice: 15, origin: "Bun She Riie" },
"tepung_beras": { name: "Tepung Beras Putih", weight: 1.8, basePrice: 48, origin: "Bun She Riie" },
"bibit_padi": { name: "Karung Bibit Unggul", weight: 3.0, basePrice: 85, origin: "Bun She Riie" },
"jerami_kering": { name: "Ikat Jerami Pakan", weight: 1.2, basePrice: 12, origin: "Bun She Riie" },

"telur_asin": { name: "Telur Asin Desa", weight: 0.5, basePrice: 20, origin: "Bho Junk" },
"anyaman_bambu": { name: "Anyaman Bambu Wadah", weight: 1.5, basePrice: 65, origin: "Bho Junk" },
"minyak_kelapa": { name: "Minyak Kelapa Murni", weight: 1.0, basePrice: 50, origin: "Bho Junk" },
"keranjang_tampah": { name: "Tampah Bambu Besar", weight: 1.8, basePrice: 58, origin: "Bho Junk" },
"gula_kelapa": { name: "Gula Semut Kelapa", weight: 0.9, basePrice: 42, origin: "Bho Junk" },
"bibit_bambu": { name: "Tunas Bambu Pilihan", weight: 2.2, basePrice: 33, origin: "Bho Junk" },

"cengkeh_kering": { name: "Cengkeh Kering", weight: 0.2, basePrice: 85, origin: "Sadhayana" },
"kapulaga": { name: "Kapulaga Lembah", weight: 0.2, basePrice: 90, origin: "Sadhayana" },
"madu_hutan": { name: "Madu Hutan Murni", weight: 0.8, basePrice: 120, origin: "Sadhayana" },
"kayu_manis": { name: "Batang Kayu Manis", weight: 0.4, basePrice: 70, origin: "Sadhayana" },
"ekstrak_ginseng": { name: "Ekstrak Akar Ginseng", weight: 0.3, basePrice: 160, origin: "Sadhayana" },
"bunga_herbal": { name: "Bunga Obat Kering", weight: 0.2, basePrice: 65, origin: "Sadhayana" },

"gula_aren": { name: "Gula Aren Cetak", weight: 1.0, basePrice: 38, origin: "Bane A Gare" },
"dendeng_sapi": { name: "Dendeng Sapi Transit", weight: 0.7, basePrice: 110, origin: "Bane A Gare" },
"tali_tambang": { name: "Tali Tambang Serat", weight: 1.2, basePrice: 42, origin: "Bane A Gare" },
"kopi_perbatasan": { name: "Biji Kopi Perbatasan", weight: 0.8, basePrice: 78, origin: "Bane A Gare" },
"tembakau_lokal": { name: "Daun Tembakau Kering", weight: 0.5, basePrice: 95, origin: "Bane A Gare" },
"minyak_lampu": { name: "Minyak Penerangan", weight: 1.0, basePrice: 45, origin: "Bane A Gare" },

"biji_besi": { name: "Biji Besi Mentah", weight: 5.0, basePrice: 150, origin: "Bag Berg" },
"kayu_jati": { name: "Kayu Jati Gelondong", weight: 8.0, basePrice: 280, origin: "Bag Berg" },
"batu_pondasi": { name: "Batu Kali Pondasi", weight: 6.0, basePrice: 95, origin: "Bag Berg" },
"batu_asah": { name: "Batu Asah Halus", weight: 2.0, basePrice: 60, origin: "Bag Berg" },
"batang_arang": { name: "Arang Kayu Tungku", weight: 3.0, basePrice: 50, origin: "Bag Berg" },
"baja_mentah": { name: "Batangan Baja Tempa", weight: 4.5, basePrice: 220, origin: "Bag Berg" },

"susu_murni": { name: "Susu Sapi Murni", weight: 1.0, basePrice: 35, origin: "Khaa Wall Ee" },
"kulit_olah": { name: "Kulit Sapi Olahan", weight: 3.0, basePrice: 210, origin: "Khaa Wall Ee" },
"keju_bukit": { name: "Keju Olahan Bukit", weight: 0.6, basePrice: 135, origin: "Khaa Wall Ee" },
"wol_domba": { name: "Gulungan Wol Domba", weight: 1.5, basePrice: 90, origin: "Khaa Wall Ee" },
"mentega_segar": { name: "Mentega Susu Murni", weight: 0.7, basePrice: 80, origin: "Khaa Wall Ee" },
"tulang_hewan": { name: "Tulang Ternak Ukir", weight: 2.0, basePrice: 55, origin: "Khaa Wall Ee" },

"kain_sutra": { name: "Kain Sutra Tempa", weight: 0.5, basePrice: 450, origin: "Kerajaan Kota Galuh" },
"perhiasan_perak": { name: "Perhiasan Perak Istana", weight: 0.3, basePrice: 680, origin: "Kerajaan Kota Galuh" },
"parfum_kerajaan": { name: "Minyak Wangi Bangsawan", weight: 0.2, basePrice: 520, origin: "Kerajaan Kota Galuh" },
"kertas_perkamen": { name: "Kertas Perkamen Kuno", weight: 0.2, basePrice: 180, origin: "Kerajaan Kota Galuh" },
"porselen_cina": { name: "Porselen Hias Istana", weight: 2.5, basePrice: 750, origin: "Kerajaan Kota Galuh" },
"senjata_tempa": { name: "Pedang Kehormatan Istana", weight: 4.0, basePrice: 1100, origin: "Kerajaan Kota Galuh" }


};

// Equipment items
const EQUIPMENT = {
"tas_kecil": { name: "Tas Punggung Kecil", type: "backpack", cap: 5.0, price: 1850 },
"tas_besar": { name: "Tas Punggung Besar", type: "backpack", cap: 10.0, price: 5500 },
"cart_10": { name: "Cart 10kg (Gerobak Kecil)", type: "cart", cap: 10.0, price: 12500 },
"cart_25": { name: "Cart 25kg (Gerobak Sedang)", type: "cart", cap: 25.0, price: 32000 },
"cart_50": { name: "Cart 50kg (Gerobak Besar)", type: "cart", cap: 50.0, price: 85000 },
"cart_100": { name: "Cart 100kg (Gerobak Ekstra)", type: "cart", cap: 100.0, price: 220000 },
"cart_kuda_1": { name: "Cart Kuda Tunggal (50kg)", type: "cart", cap: 50.0, price: 650000 },
"cart_kuda_2": { name: "Cart Kuda Ganda (100kg)", type: "cart", cap: 100.0, price: 1800000 }
};

// Simple Skill Names
const SKILL_NAMES = {
navigasi: "Navigasi",
pangan: "Pangan",
agraria: "Agraria",
konstruksi: "Konstruksi",
botanikal: "Botanikal",
muatan: "Muatan",
tambang: "Tambang",
admin: "Admin",
peternakan: "Peternakan",
berdagang: "Berdagang"
};

/* ==========================================================================
40 MENU KEDAI KHAS PER WILAYAH (+1 s.d +6 Stamina, Multiplier 1.4)
========================================================================== */
const TAVERN_MENUS = {
"Che A Miss": [
{ id: "cm_1", name: "Sup Kepala Ikan Pesisir", stamina: 1, price: 175 },
{ id: "cm_2", name: "Nasi Goreng Garam Laut", stamina: 1, price: 175 },
{ id: "cm_3", name: "Pepes Ikan Asin Bakar", stamina: 2, price: 245 },
{ id: "cm_4", name: "Sate Kerang Bumbu Kelapa", stamina: 2, price: 245 },
{ id: "cm_5", name: "Bubur Ikan Kuah Hangat", stamina: 3, price: 343 },
{ id: "cm_6", name: "Udang Bakar Madu Pesisir", stamina: 4, price: 480 },
{ id: "cm_7", name: "Gulai Tenggiri Istimewa", stamina: 5, price: 672 },
{ id: "cm_8", name: "Prasmanan Raja Pesisir", stamina: 6, price: 941 }
],
"Male Bear": [
{ id: "mb_1", name: "Sup Kerang Hitam Rawa", stamina: 1, price: 175 },
{ id: "mb_2", name: "Ikan Rawa Bakar Mentega", stamina: 2, price: 245 },
{ id: "mb_3", name: "Kepiting Saus Bakau", stamina: 3, price: 343 },
{ id: "mb_4", name: "Gulai Kepala Ikan Rawa", stamina: 4, price: 480 },
{ id: "mb_5", name: "Paket Perjamuan Nelayan", stamina: 5, price: 672 },
{ id: "mb_6", name: "Jamuan Mewah Dermaga", stamina: 6, price: 941 }
],
"Bun She Riie": [
{ id: "bs_1", name: "Nasi Timbel Sawah", stamina: 1, price: 175 },
{ id: "bs_2", name: "Pecel Lele Daun Pisang", stamina: 2, price: 245 },
{ id: "bs_3", name: "Ayam Goreng Lengkuas", stamina: 3, price: 343 },
{ id: "bs_4", name: "Nasi Liwet Komplit Padi", stamina: 4, price: 480 },
{ id: "bs_5", name: "Bebek Betutu Sawah", stamina: 5, price: 672 },
{ id: "bs_6", name: "Pesta Lumbung Desa", stamina: 6, price: 941 }
],
"Bho Junk": [
{ id: "bj_1", name: "Telur Asin Bakar Rempah", stamina: 1, price: 175 },
{ id: "bj_2", name: "Sayur Lodeh Bambu Muda", stamina: 2, price: 245 },
{ id: "bj_3", name: "Ayam Kampung Kukus", stamina: 3, price: 343 },
{ id: "bj_4", name: "Nasi Bakar Ayam Suwir", stamina: 4, price: 480 },
{ id: "bj_5", name: "Sate Ayam Bambu Pelosok", stamina: 5, price: 672 },
{ id: "bj_6", name: "Jamuan Agung Dusun Bambu", stamina: 6, price: 941 }
],
"Sadhayana": [
{ id: "sd_1", name: "Teh Rempah Hangat Lembah", stamina: 1, price: 175 },
{ id: "sd_2", name: "Sup Ayam Jahe Merah", stamina: 2, price: 245 },
{ id: "sd_3", name: "Daging Sapi Rempah Cengkeh", stamina: 3, price: 343 },
{ id: "sd_4", name: "Nasi Kuning Wangi Rempah", stamina: 4, price: 480 },
{ id: "sd_5", name: "Sup Ginseng Madu Hutan", stamina: 5, price: 672 },
{ id: "sd_6", name: "Jamuan Kaisar Herbal", stamina: 6, price: 941 }
],
"Bane A Gare": [
{ id: "bg_1", name: "Kopi Hitam Perbatasan", stamina: 1, price: 175 },
{ id: "bg_2", name: "Roti Panggang Gula Aren", stamina: 2, price: 245 },
{ id: "bg_3", name: "Sup Dendeng Sapi Transit", stamina: 3, price: 343 },
{ id: "bg_4", name: "Nasi Uduk Perbatasan", stamina: 4, price: 480 },
{ id: "bg_5", name: "Sate Sapi Rempah Transit", stamina: 5, price: 672 },
{ id: "bg_6", name: "Perjamuan Akbar Perbatasan", stamina: 6, price: 941 }
],
"Bag Berg": [
{ id: "bb_1", name: "Sup Tulang Sapi Gunung", stamina: 1, price: 175 },
{ id: "bb_2", name: "Daging Panggang Batu Arang", stamina: 2, price: 245 },
{ id: "bb_3", name: "Stew Daging Hangat Salju", stamina: 3, price: 343 },
{ id: "bb_4", name: "Nasi Goreng Merah Tambang", stamina: 4, price: 480 },
{ id: "bb_5", name: "Sapi Guling Hangat Gunung", stamina: 5, price: 672 },
{ id: "bb_6", name: "Perjamuan Para Kuli Besi", stamina: 6, price: 941 }
],
"Khaa Wall Ee": [
{ id: "kw_1", name: "Susu Sapi Murni Hangat", stamina: 1, price: 175 },
{ id: "kw_2", name: "Roti Keju Bukit", stamina: 2, price: 245 },
{ id: "kw_3", name: "Sup Krim Susu & Daging", stamina: 3, price: 343 },
{ id: "kw_4", name: "Steak Sapi Padang Rumput", stamina: 4, price: 480 },
{ id: "kw_5", name: "Domba Guling Mentega Bukit", stamina: 5, price: 672 },
{ id: "kw_6", name: "Pesta Raya Padang Bukit", stamina: 6, price: 941 }
],
"Kerajaan Kota Galuh": [
{ id: "kg_1", name: "Teh Wangi Istana", stamina: 1, price: 175 },
{ id: "kg_2", name: "Kue Kehormatan Bangsawan", stamina: 2, price: 245 },
{ id: "kg_3", name: "Sup Ayam Rempah Istana", stamina: 3, price: 343 },
{ id: "kg_4", name: "Nasi Kuning Kerajaan Mewah", stamina: 4, price: 480 },
{ id: "kg_5", name: "Bebek Panggang Saus Madu Emas", stamina: 5, price: 672 },
{ id: "kg_6", name: "Jamuan Agung Singgasana Raja", stamina: 6, price: 941 }
]
};

// LIBRARY BOOKS (Perpustakaan per wilayah dengan batasan level 3)
const LIBRARY_BOOKS = {
"kitab_navigasi": { name: "Kitab Navigasi & Geografi", targetSkill: "navigasi", maxLvl: 3, desc: "Panduan membaca peta arus dan rasi bintang." },
"kitab_pangan": { name: "Ensiklopedia Pangan", targetSkill: "pangan", maxLvl: 3, desc: "Metode pengawetan bahan makanan." },
"kitab_agraria": { name: "Risalah Agraria Sawah", targetSkill: "agraria", maxLvl: 3, desc: "Teknik irigasi dan siklus musim." },
"kitab_konstruksi": { name: "Panduan Konstruksi Bambu", targetSkill: "konstruksi", maxLvl: 3, desc: "Struktur bangunan dan anyaman." },
"kitab_botanikal": { name: "Kompendium Botanikal", targetSkill: "botanikal", maxLvl: 3, desc: "Khasiat tanaman obat dan rempah." },
"kitab_muatan": { name: "Manual Manajemen Logistik", targetSkill: "muatan", maxLvl: 3, desc: "Strategi penataan gerobak muatan." },
"kitab_tambang": { name: "Teks Pertambangan", targetSkill: "tambang", maxLvl: 3, desc: "Pemecahan bijih besi dan tempa." },
"kitab_administrasi": { name: "Arsip Administrasi", targetSkill: "admin", maxLvl: 3, desc: "Pembukuan keuangan dan cukai." },
"kitab_peternakan": { name: "Buku Panduan Peternakan", targetSkill: "peternakan", maxLvl: 3, desc: "Pemeliharaan ternak dan kulit." },
"kitab_berdagang": { name: "Risalah Niaga & Negosiasi", targetSkill: "berdagang", maxLvl: 3, desc: "Fluktuasi harga dan tawar menawar." }
};

// Pemetaan Kitab untuk Setiap Wilayah (Maksimal 1 atau 2 kitab per wilayah, Kota Galuh komplit)
const REGION_LIBRARIES = {
"Che A Miss": ["kitab_navigasi", "kitab_pangan"],
"Male Bear": ["kitab_navigasi", "kitab_tambang"],
"Bun She Riie": ["kitab_agraria", "kitab_muatan"],
"Bho Junk": ["kitab_konstruksi", "kitab_pangan"],
"Sadhayana": ["kitab_botanikal", "kitab_berdagang"],
"Bane A Gare": ["kitab_muatan", "kitab_admin"],
"Bag Berg": ["kitab_tambang", "kitab_konstruksi"],
"Khaa Wall Ee": ["kitab_peternakan", "kitab_muatan"],
"Kerajaan Kota Galuh": ["kitab_navigasi", "kitab_pangan", "kitab_agraria", "kitab_konstruksi", "kitab_botanikal", "kitab_muatan", "kitab_tambang", "kitab_administrasi", "kitab_peternakan", "kitab_berdagang"]
};

function calculateStudyCost(currentLevel, hours) {
let baseRatePerHour = 600;
let totalCost = 0;
for (let i = 0; i < hours; i++) {
let targetLevel = currentLevel + i;
let multiplier = Math.pow(1.8, targetLevel);
totalCost += Math.round(baseRatePerHour * multiplier);
}
return totalCost;
}

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
