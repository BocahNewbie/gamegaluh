/* ==========================================================================
GAME ENGINE MAIN CONTROLLER - LIVIN IN GALUH (UPDATED)
========================================================================== */

let gameState = {
version: "1.5.0",
lastSaved: Date.now(),
player: {
name: "Kang Aa",
kg: 50,
stamina: 100,
maxStamina: 100,
location: "Che A Miss",
totalWorkHours: 0,
equippedBackpack: [],
equippedCart: null

},
time: {
day: 1,
hour: 6,
minute: 0,
weather: "Cerah"
},
skills: {
navigasi: { level: 0, exp: 0 },
pangan: { level: 0, exp: 0 },
agraria: { level: 0, exp: 0 },
konstruksi: { level: 0, exp: 0 },
botanikal: { level: 0, exp: 0 },
muatan: { level: 0, exp: 0 },
tambang: { level: 0, exp: 0 },
admin: { level: 0, exp: 0 },
peternakan: { level: 0, exp: 0 },
berdagang: { level: 0, exp: 0 }
},
inventory: {
pocket: [],
cart: []
},
regionStocks: {},
properties: {
houses: {},
rentedWarehouses: {}
},
news: [],
logs: []
};

let currentTab = "profile";
let realTimeInterval = null;

function getPocketCapacity() {
let base = 5.0;
if (gameState.player.equippedBackpack) {
let activeBps = Array.isArray(gameState.player.equippedBackpack)
? gameState.player.equippedBackpack
: [gameState.player.equippedBackpack];
activeBps.forEach(bpId => {
if (EQUIPMENT[bpId]) base += EQUIPMENT[bpId].cap;
});
}
if (gameState.player.equippedCart && EQUIPMENT[gameState.player.equippedCart]) {
base += EQUIPMENT[gameState.player.equippedCart].cap;
}
return base;
}

function getInventoryWeight(itemsList) {
let total = 0;
itemsList.forEach(item => {
if (ITEMS[item.id]) total += ITEMS[item.id].weight * item.qty;
});
return total;
}

function addLog(msg) {
    const timeStr = `${String(gameState.time.hour).padStart(2,'0')}:${String(gameState.time.minute).padStart(2,'0')}`;
    const logItem = `[H${gameState.time.day} ${timeStr}] ${msg}`;
    gameState.logs.unshift(logItem);
    if (gameState.logs.length > 30) gameState.logs.pop();
    renderLogs();
}

function renderLogs() {
    const container = document.getElementById("log-container");
    if (!container) return;
    if (gameState.logs.length === 0) {
        container.innerHTML = `<div class="text-gray-500 italic">Belum ada aktivitas...</div>`;
        return;
    }
    container.innerHTML = gameState.logs.map(log => `<div class="text-gray-300 border-b border-galuhBorder/40 pb-1">${log}</div>`).join("");
}

function generateNews() {
const region = gameState.player.location;
const currentRegionData = REGIONS[region];
const neighbors = currentRegionData ? Object.keys(currentRegionData.neighbors) : [];
const currentWeather = gameState.time.weather;

const relevantNews = NEWS_POOL.filter(n => {
    const isLocallyRelevant = n.isGlobal || n.reg === region || neighbors.includes(n.reg);
    const isWeatherMatched = !n.weather || n.weather === currentWeather;
    return isLocallyRelevant && isWeatherMatched;
});

const shuffled = [...relevantNews].sort(() => 0.5 - Math.random());
gameState.news = shuffled.slice(0, 5);
renderNews();


}

function renderNews() {
    const container = document.getElementById("news-container");
    if (!container) return;
    if (gameState.news.length === 0) {
        container.innerHTML = `<div class="text-gray-500 italic text-center py-2">Tidak ada berita lokal saat ini...</div>`;
        return;
    }
    container.innerHTML = gameState.news.map(n => `
        <div class="bg-galuhBg/80 p-2 rounded border border-galuhBorder/60">
            <div class="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                <span class="font-bold ${n.isGlobal ? 'text-amber-400' : 'text-galuhGold'}">${n.reg}</span>
                <span>${n.isGlobal ? 'Warta Agung' : 'Lokal'}</span>
            </div>
            <p class="text-[11px] text-gray-300 leading-snug">${n.text}</p>
        </div>
    `).join("");
}

function getReqExp(level) {
let req = 235;
for (let i = 0; i < level; i++) {
req = Math.round(req * 2.3);
}
return req;
}

function addSkillExp(skillKey, amount) {
if (!gameState.skills[skillKey]) {
gameState.skills[skillKey] = { level: 0, exp: 0 };
}
let s = gameState.skills[skillKey];
s.exp += amount;
let reqExp = getReqExp(s.level);

while (s.exp >= reqExp && s.level < 8) {
    s.exp -= reqExp;
    s.level += 1;
    addLog(`<span class="text-emerald-400 font-bold">Level Skill Naik!</span> ${SKILL_NAMES[skillKey] || skillKey} mencapai Level ${s.level}!`);
    reqExp = getReqExp(s.level);
}


}

function updateStaminaBar(newStamina) {
    gameState.player.stamina = Math.max(0, Math.min(gameState.player.maxStamina, newStamina));
    const bar = document.getElementById("header-stamina-bar");
    const text = document.getElementById("header-stamina-text");
    if (bar && text) {
        const pct = (gameState.player.stamina / gameState.player.maxStamina) * 100;
        bar.style.width = `${pct}%`;
        text.innerText = `${Math.round(gameState.player.stamina)} / ${gameState.player.maxStamina}`;

        if (pct <= 25) {
            bar.className = "stamina-bar-fill bg-red-500 h-full rounded-full";
            text.className = "font-bold text-red-400";
        } else if (pct <= 50) {
            bar.className = "stamina-bar-fill bg-amber-500 h-full rounded-full";
            text.className = "font-bold text-amber-400";
        } else {
            bar.className = "stamina-bar-fill bg-emerald-500 h-full rounded-full";
            text.className = "font-bold text-emerald-400";
        }
    }
}

function updateHeaderUI() {
    document.getElementById("header-location").innerText = gameState.player.location;
    document.getElementById("header-time").innerText = `${String(gameState.time.hour).padStart(2,'0')}:${String(gameState.time.minute).padStart(2,'0')}`;
    document.getElementById("header-day").innerText = `Hari ${gameState.time.day}`;
    document.getElementById("header-kg").innerText = gameState.player.kg.toLocaleString();
    document.getElementById("header-weather").innerText = gameState.time.weather;
    
    updateStaminaBar(gameState.player.stamina);

    const regData = REGIONS[gameState.player.location];
    if (regData) {
        document.getElementById("region-title").innerText = regData.name;
        document.getElementById("region-type-badge").innerText = regData.type;
        document.getElementById("region-desc").innerText = regData.desc;
        
        const curW = getInventoryWeight(gameState.inventory.pocket);
        const maxW = getPocketCapacity();
        document.getElementById("region-carry-capacity").innerText = `${curW.toFixed(1)} / ${maxW.toFixed(1)} kg`;
    }
}

function advanceTime(minutes) {
gameState.time.minute += minutes;
while (gameState.time.minute >= 60) {
gameState.time.minute -= 60;
gameState.time.hour += 1;
if (gameState.time.hour >= 24) {
gameState.time.hour -= 24;
gameState.time.day += 1;
generateNews();
}
}
updateHeaderUI();
}

function switchTab(tabName) {
currentTab = tabName;
document.querySelectorAll(".nav-btn").forEach(btn => {
btn.classList.remove("active", "text-galuhGold", "bg-galuhAccent/15", "border", "border-galuhAccent/30");
btn.classList.add("text-gray-300");
});
const activeBtn = document.getElementById(`nav-${tabName}`);
if (activeBtn) {
    activeBtn.classList.add("active", "text-galuhGold", "bg-galuhAccent/15", "border", "border-galuhAccent/30");
    activeBtn.classList.remove("text-gray-300");
}
renderTabContent();
}

function animateCoinChange(amount) {
const kgEl = document.getElementById("header-kg");
const floatBadge = document.getElementById("coin-float-badge");
if (!kgEl || !floatBadge) return;

const isPositive = amount > 0;
floatBadge.innerText = (isPositive ? '+' : '') + amount.toLocaleString() + ' KG';
floatBadge.className = `absolute -bottom-6 right-0 font-bold text-xs transition-all duration-500 pointer-events-none px-2 py-0.5 rounded shadow ${
    isPositive ? 'bg-emerald-900/90 text-emerald-300 border border-emerald-600' : 'bg-red-900/90 text-red-300 border border-red-600'
} opacity-100 translate-y-0`;

const startVal = gameState.player.kg - amount;
const endVal = gameState.player.kg;
const duration = 500;
const startTime = performance.now();

function step(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentVal = Math.round(startVal + (endVal - startVal) * progress);
    kgEl.innerText = currentVal.toLocaleString();
    
    if (progress < 1) {
        requestAnimationFrame(step);
    } else {
        kgEl.innerText = endVal.toLocaleString();
        setTimeout(() => {
            floatBadge.classList.add('opacity-0', 'translate-y-2');
        }, 800);
    }
}
requestAnimationFrame(step);


}

function renderTabContent() {
const container = document.getElementById("tab-content");
if (!container) return;

if (currentTab === "profile") {
    let skillsHtml = Object.keys(gameState.skills).map(skKey => {
        const sk = gameState.skills[skKey];
        const reqExp = getReqExp(sk.level);
        const pct = Math.min(100, Math.round((sk.exp / reqExp) * 100));
        return `
            <div class="bg-galuhBg p-3 rounded-lg border border-galuhBorder space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-gray-200">${SKILL_NAMES[skKey] || skKey}</span>
                    <span class="font-bold text-galuhGold bg-galuhGold/10 px-2 py-0.5 rounded border border-galuhGold/30">Lv. ${sk.level}</span>
                </div>
                <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden border border-gray-700">
                    <div class="bg-galuhAccent h-full rounded-full transition-all duration-300" style="width: ${pct}%"></div>
                </div>
                <div class="flex justify-between items-center text-[10px] text-gray-400">
                    <span>Kemajuan Level</span>
                    <span class="font-mono text-gray-300">${sk.exp} / ${reqExp} XP (${pct}%)</span>
                </div>
            </div>
        `;
    }).join("");

    let activeBps = Array.isArray(gameState.player.equippedBackpack) ? gameState.player.equippedBackpack : (gameState.player.equippedBackpack ? [gameState.player.equippedBackpack] : []);
    let equippedBpNames = activeBps.length > 0 ? activeBps.map(id => EQUIPMENT[id] ? EQUIPMENT[id].name : id).join(", ") : "Tidak Ada";
    const equippedCt = gameState.player.equippedCart && EQUIPMENT[gameState.player.equippedCart] ? EQUIPMENT[gameState.player.equippedCart].name : "Tidak Ada";

    container.innerHTML = `
        <div class="space-y-4">
            <div class="bg-galuhBg p-4 rounded-xl border border-galuhBorder flex flex-wrap justify-between items-center gap-3">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-galuhAccent/20 rounded-xl border border-galuhAccent/40 flex items-center justify-center text-galuhGold text-xl">
                        <i class="fa-solid fa-user-shield"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-base text-white">${gameState.player.name}</h3>
                        <p class="text-xs text-gray-400">Status: <span class="text-emerald-400 font-medium">Pengembara Galuh</span></p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 text-xs">
                    <div class="bg-galuhCard px-3 py-1.5 rounded border border-galuhBorder">
                        <span class="text-gray-400 block text-[10px]">Pengalaman Kerja</span>
                        <span class="font-bold text-galuhGold">${gameState.player.totalWorkHours} Jam</span>
                    </div>
                    <div class="bg-galuhCard px-3 py-1.5 rounded border border-galuhBorder">
                        <span class="text-gray-400 block text-[10px]">Kapasitas Saku</span>
                        <span class="font-bold text-gray-200">${getPocketCapacity().toFixed(1)} kg</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div class="bg-galuhBg p-2.5 rounded-lg border border-galuhBorder flex justify-between items-center">
                    <span class="text-gray-400">Tas Punggung (Kumulatif):</span>
                    <span class="font-bold text-gray-200">${equippedBpNames}</span>
                </div>
                <div class="bg-galuhBg p-2.5 rounded-lg border border-galuhBorder flex justify-between items-center">
                    <span class="text-gray-400">Cart Logistik (Eksklusif):</span>
                    <span class="font-bold text-gray-200">${equippedCt}</span>
                </div>
            </div>

            <div class="space-y-2">
                <div class="flex justify-between items-center pb-1 border-b border-galuhBorder">
                    <h4 class="font-bold text-xs text-gray-300 uppercase tracking-wider"><i class="fa-solid fa-graduation-cap text-galuhGold mr-1"></i> Tingkat Keahlian (Skills)</h4>
                    <span class="text-[10px] text-gray-500">Total 10 Cabang Skill</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    ${skillsHtml}
                </div>
            </div>
        </div>
    `;
} else if (currentTab === "map") {
    renderMapTab(container);
} else if (currentTab === "jobs") {
    const regData = REGIONS[gameState.player.location];
    
    // Cek Batasan Waktu Pekerjaan (Disable jika jam >= 23:00 atau kurang dari 1 jam sebelum 23:00 yakni jam 22:00 ke atas)
    const isTooLateForWork = gameState.time.hour >= 22;

    let jobsHtml = regData.jobs.map((job, idx) => {
        let reqPass = true;
        let reqBadges = [];

        if (job.reqSkill) {
            Object.keys(job.reqSkill).forEach(skKey => {
                const reqLvl = job.reqSkill[skKey];
                const curLvl = gameState.skills[skKey] ? gameState.skills[skKey].level : 0;
                const pass = curLvl >= reqLvl;
                if (!pass) reqPass = false;
                reqBadges.push(`<span class="${pass ? 'text-emerald-400' : 'text-red-400'} bg-gray-900/80 px-1.5 py-0.5 rounded text-[10px] border ${pass ? 'border-emerald-800' : 'border-red-900'}">${SKILL_NAMES[skKey] || skKey} Lv.${reqLvl}</span>`);
            });
        }

        if (job.reqExp) {
            const passExp = gameState.player.totalWorkHours >= job.reqExp;
            if (!passExp) reqPass = false;
            reqBadges.push(`<span class="${passExp ? 'text-emerald-400' : 'text-red-400'} bg-gray-900/80 px-1.5 py-0.5 rounded text-[10px] border ${passExp ? 'border-emerald-800' : 'border-red-900'}">Min ${job.reqExp} Jam Kerja</span>`);
        }

        const canWork = reqPass && !isTooLateForWork;

        return `
            <div class="bg-galuhBg p-3 rounded-lg border border-galuhBorder flex flex-col justify-between space-y-2">
                <div>
                    <div class="flex justify-between items-start mb-1">
                        <h4 class="font-bold text-sm text-gray-100">${job.title}</h4>
                        <span class="font-bold text-xs text-galuhGold bg-galuhGold/10 px-2 py-0.5 rounded border border-galuhGold/30">Base ${job.basePay} KG/jam</span>
                    </div>
                    <div class="text-[11px] text-gray-400 space-y-1">
                        <div><i class="fa-regular fa-clock text-galuhAccent"></i> Konsumsi Stamina: <span class="text-gray-300">3 Stamina / Jam</span></div>
                        <div><i class="fa-solid fa-graduation-cap text-galuhGold"></i> Melatih: <span class="text-gray-300 font-medium">${SKILL_NAMES[job.expSkill] || job.expSkill}</span></div>
                    </div>
                </div>

                ${reqBadges.length > 0 ? `<div class="flex flex-wrap gap-1 pt-1 border-t border-galuhBorder/40">${reqBadges.join('')}</div>` : ''}

                <div class="pt-2 space-y-1.5 border-t border-galuhBorder">
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-gray-400">Durasi Kerja (Jam):</span>
                        <select id="work-hours-${idx}" class="bg-galuhCard border border-galuhBorder text-gray-200 rounded px-2 py-1 text-xs">
                            <option value="1">1 Jam</option>
                            <option value="2">2 Jam</option>
                            <option value="4">4 Jam</option>
                            <option value="8">8 Jam</option>
                            <option value="12">12 Jam</option>
                        </select>
                    </div>
                    <button onclick="doWork(${idx})" class="w-full py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${canWork ? 'bg-galuhAccent hover:bg-galuhAccentHover text-white shadow' : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'}">
                        <i class="fa-solid fa-briefcase"></i> ${isTooLateForWork ? 'Pekerjaan Tutup (Waktu Malam)' : 'Mulai Bekerja'}
                    </button>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="space-y-4">
            <div class="border-b border-galuhBorder pb-2">
                <h3 class="font-bold text-sm text-gray-200"><i class="fa-solid fa-briefcase text-galuhGold mr-1"></i> Lowongan Kerja Wilayah ${gameState.player.location}</h3>
                <p class="text-xs text-gray-400">Pilih durasi jam kerja. Bekerja memakan 3 stamina per jam dan penghasilan dihitung per jam. (Tutup pukul 22:00 ke atas).</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${jobsHtml}
            </div>
        </div>
    `;
} else if (currentTab === "market") {
    renderMarketTab(container);
} else if (currentTab === "inn") {
    const regData = REGIONS[gameState.player.location];
    const tavernMenus = TAVERN_MENUS[gameState.player.location] || [];

    let menusHtml = tavernMenus.map(m => `
        <div class="bg-galuhCard p-2.5 rounded border border-galuhBorder flex justify-between items-center text-xs">
            <div>
                <div class="font-bold text-gray-200">${m.name}</div>
                <div class="text-emerald-400 text-[10px]"><i class="fa-solid fa-bolt"></i> +${m.stamina} Stamina</div>
            </div>
            <div class="text-right">
                <span class="font-bold text-galuhGold block text-xs">${m.price.toLocaleString()} KG</span>
                <button onclick="buyTavernMeal('${m.id}', ${m.price}, ${m.stamina})" class="mt-1 bg-galuhAccent hover:bg-galuhAccentHover text-white px-2.5 py-1 rounded font-bold text-[10px]">Pesan</button>
            </div>
        </div>
    `).join("");

    container.innerHTML = `
        <div class="space-y-4">
            <div class="border-b border-galuhBorder pb-2">
                <h3 class="font-bold text-sm text-gray-200"><i class="fa-solid fa-bed text-galuhGold mr-1"></i> Penginapan & Kedai Khas ${gameState.player.location}</h3>
                <p class="text-xs text-gray-400">Tidur malam hanya dapat dilakukan mulai pukul 16:00 sore hingga pagi berikutnya.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="bg-galuhBg p-4 rounded-xl border border-galuhBorder space-y-3">
                    <h4 class="font-bold text-sm text-gray-200 border-b border-galuhBorder pb-1">Sewa Kamar Penginapan</h4>
                    <div class="text-xs text-gray-400 space-y-2">
                        <div class="flex justify-between">
                            <span>Kamar Saja (+50% Stamina):</span>
                            <span class="font-bold text-galuhGold">${regData.innCost} KG</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Kamar + Makan Harian (+100% Stamina):</span>
                            <span class="font-bold text-galuhGold">${regData.innMealCost} KG</span>
                        </div>
                    </div>
                    <div class="pt-2 space-y-2">
                        <button onclick="restAtInn(false)" class="w-full bg-galuhAccent hover:bg-galuhAccentHover text-white py-2 rounded-lg text-xs font-bold transition">
                            Sewa Kamar Saja (${regData.innCost} KG)
                        </button>
                        <button onclick="restAtInn(true)" class="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-2 rounded-lg text-xs font-bold transition">
                            Sewa + Makan Harian (${regData.innMealCost} KG)
                        </button>
                    </div>
                </div>

                <div class="bg-galuhBg p-4 rounded-xl border border-galuhBorder space-y-3 flex flex-col justify-between">
                    <div>
                        <h4 class="font-bold text-sm text-amber-400 border-b border-galuhBorder pb-1"><i class="fa-solid fa-house-user"></i> Tidur di Teras Warga (20 KG)</h4>
                        <p class="text-xs text-gray-400 mt-2">
                            Istirahat 3 jam (+15 Stamina, 20 KG). Syarat: Waktu harus sudah menunjukkan pukul 16:00 sore ke atas!
                        </p>
                    </div>
                    <button onclick="sleepOnPorch()" class="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-300 py-2 rounded-lg text-xs font-bold transition">
                        Tidur di Teras Warga (Min. Jam 16:00)
                    </button>
                </div>
            </div>

            <div class="bg-galuhBg p-4 rounded-xl border border-galuhBorder space-y-3">
                <h4 class="font-bold text-sm text-gray-200 border-b border-galuhBorder pb-1">Kedai Menu Khas Wilayah (${gameState.player.location})</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${menusHtml}
                </div>
            </div>
        </div>
    `;
} else if (currentTab === "inventory") {
    let pItems = gameState.inventory.pocket.map(i => {
        const itemData = ITEMS[i.id];
        return `
            <div class="bg-galuhBg p-2.5 rounded-lg border border-galuhBorder flex justify-between items-center text-xs">
                <div>
                    <span class="font-bold text-gray-200">${itemData ? itemData.name : i.id}</span>
                    <span class="text-gray-400 block text-[10px]">${itemData ? itemData.weight : 0} kg/unit</span>
                </div>
                <span class="font-bold text-galuhGold bg-galuhGold/10 px-2 py-0.5 rounded border border-galuhGold/30">${i.qty} unit</span>
            </div>
        `;
    }).join("");

    let activeBps = Array.isArray(gameState.player.equippedBackpack) ? gameState.player.equippedBackpack : (gameState.player.equippedBackpack ? [gameState.player.equippedBackpack] : []);

    let eqHtml = Object.keys(EQUIPMENT).map(eqId => {
        const eq = EQUIPMENT[eqId];
        let isEq = false;
        if (eq.type === "backpack") {
            isEq = activeBps.includes(eqId);
        } else if (eq.type === "cart") {
            isEq = (gameState.player.equippedCart === eqId);
        }

        return `
            <div class="bg-galuhBg p-3 rounded-lg border border-galuhBorder flex justify-between items-center text-xs">
                <div>
                    <div class="font-bold text-gray-200">${eq.name} <span class="text-[10px] text-galuhGold uppercase">(${eq.type})</span></div>
                    <div class="text-gray-400 text-[10px]">Kapasitas: +${eq.cap} kg</div>
                </div>
                <div>
                    ${isEq ? `<span class="text-emerald-400 font-bold bg-emerald-900/50 px-2 py-1 rounded border border-emerald-700">Terpasang</span>` : `<button onclick="buyEquipment('${eqId}')" class="bg-galuhAccent hover:bg-galuhAccentHover text-white px-3 py-1 rounded font-bold transition">${eq.price} KG</button>`}
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="space-y-4">
            <div class="border-b border-galuhBorder pb-2">
                <h3 class="font-bold text-sm text-gray-200"><i class="fa-solid fa-box-open text-galuhGold mr-1"></i> Management Inventori & Peralatan</h3>
                <p class="text-xs text-gray-400">Tas punggung dapat dipakai secara kumulatif bersamaan, namun Cart hanya dapat memilih 1 yang aktif.</p>
            </div>
            <div class="space-y-2">
                <h4 class="font-bold text-xs text-gray-300 uppercase tracking-wider">Isi Saku Personal</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${pItems.length > 0 ? pItems : `<div class="text-gray-500 italic text-xs">Saku kosong...</div>`}
                </div>
            </div>
            <div class="space-y-2">
                <h4 class="font-bold text-xs text-gray-300 uppercase tracking-wider">Peralatan Logistik (Tas & Cart)</h4>
                <div class="grid grid-cols-1 gap-2">
                    ${eqHtml}
                </div>
            </div>
        </div>
    `;
} else if (currentTab === "property") {
    const curReg = gameState.player.location;
    const regData = REGIONS[curReg];
    const ownsHouse = gameState.properties.houses[curReg];

    container.innerHTML = `
        <div class="space-y-4">
            <div class="border-b border-galuhBorder pb-2">
                <h3 class="font-bold text-sm text-gray-200"><i class="fa-solid fa-house-chimney text-galuhGold mr-1"></i> Properti & Gudang ${curReg}</h3>
            </div>

            <div class="bg-galuhBg p-4 rounded-xl border border-galuhBorder space-y-3">
                <h4 class="font-bold text-sm text-gray-200">Rumah Permanen Wilayah</h4>
                ${ownsHouse ? `
                    <div class="bg-emerald-900/40 border border-emerald-700 text-emerald-300 p-3 rounded-lg text-xs font-bold">
                        <i class="fa-solid fa-check-circle"></i> Anda memiliki Rumah Permanen di ${curReg}! (Gudang Rumah Base 20kg Bawaan)
                    </div>
                ` : `
                    <div class="flex justify-between items-center text-xs">
                        <div>
                            <div class="font-bold text-gray-200">Beli Rumah Permanen ${curReg}</div>
                            <div class="text-gray-400">Bebas sewa kamar selamanya + Gudang pribadi 20kg.</div>
                        </div>
                        <button onclick="buyHouse('${curReg}',${regData.housePrice})" class="bg-galuhGold hover:bg-galuhGoldHover text-gray-900 font-bold px-4 py-2 rounded-lg text-xs transition">
                            ${regData.housePrice.toLocaleString()} KG
                        </button>
                    </div>
                `}
            </div>
        </div>
    `;
} else if (currentTab === "travel") {
    const curReg = gameState.player.location;
    const regData = REGIONS[curReg];
    const weather = gameState.time.weather;

    let travelOptions = Object.keys(regData.neighbors).map(nKey => {
        const nData = regData.neighbors[nKey];
        const distKm = nData.dist;
        const distMeters = distKm * 1000;
        // Stamina cost: 1 stamina per 70 meter
        let baseStaminaCost = Math.round(distMeters / 70);
        if (weather === "Hujan") baseStaminaCost = Math.round(baseStaminaCost * 1.35);

        // Perkiraan waktu tempuh (misal 1 km = 25 menit)
        const travelMinutes = Math.round(distKm * 25);

        return `
            <div class="bg-galuhBg p-3 rounded-lg border border-galuhBorder flex justify-between items-center text-xs">
                <div>
                    <div class="font-bold text-gray-100 text-sm">${nKey}</div>
                    <div class="text-gray-400 text-[11px]">Jarak: <span class="text-galuhGold font-bold">${distKm} km</span> (${nData.terrain}) | Estimasi Stamina: <span class="text-emerald-400 font-bold">${baseStaminaCost}</span></div>
                </div>
                <button onclick="travelTo('${nKey}', ${baseStaminaCost}, ${travelMinutes})" class="bg-galuhAccent hover:bg-galuhAccentHover text-white px-4 py-2 rounded-lg font-bold text-xs transition shadow">
                    Berpergian Kesana
                </button>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="space-y-4">
            <div class="border-b border-galuhBorder pb-2">
                <h3 class="font-bold text-sm text-gray-200"><i class="fa-solid fa-map-location-dot text-galuhGold mr-1"></i> Berpergian & Karavan Kargo</h3>
                <p class="text-xs text-gray-400">Pilih rute wilayah tetangga. Penggunaan stamina dihitung berdasarkan jarak nyata (1 per 70 meter) dan kondisi cuaca.</p>
            </div>
            <div class="space-y-2">
                <h4 class="font-bold text-xs text-gray-300 uppercase tracking-wider">Wilayah Tetangga Terhubung</h4>
                <div class="grid grid-cols-1 gap-2">
                    ${travelOptions}
                </div>
            </div>
        </div>
    `;
} else if (currentTab === "library") {
    const curReg = gameState.player.location;
    const allowedBooks = REGION_LIBRARIES[curReg] || [];

    let libraryHtml = allowedBooks.map(bookKey => {
        const book = LIBRARY_BOOKS[bookKey];
        const skillObj = gameState.skills[book.targetSkill] || { level: 0, exp: 0 };
        const currentLevel = skillObj.level;

        if (currentLevel >= book.maxLvl) {
            return `
                <div class="bg-galuhBg p-3.5 rounded-lg border border-galuhBorder space-y-2 flex flex-col justify-between opacity-75">
                    <div>
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold text-sm text-gray-100">${book.name}</h4>
                            <span class="font-bold text-xs text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded border border-emerald-700">Maksimal Lv.${book.maxLvl}</span>
                        </div>
                        <p class="text-[11px] text-gray-400 mt-1">${book.desc}</p>
                    </div>
                    <div class="text-center text-xs text-emerald-300 font-bold py-1 bg-emerald-950/40 rounded border border-emerald-800">
                        Kitab Telah Dikuasai Penuh di Wilayah Ini
                    </div>
                </div>
            `;
        }

        const cost1Hour = calculateStudyCost(currentLevel, 1);
        const cost3Hours = calculateStudyCost(currentLevel, 3);

        return `
            <div class="bg-galuhBg p-3.5 rounded-lg border border-galuhBorder space-y-3 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start">
                        <h4 class="font-bold text-sm text-gray-100">${book.name}</h4>
                        <span class="font-bold text-xs text-galuhGold bg-galuhGold/10 px-2 py-0.5 rounded border border-galuhGold/30">Lv. ${currentLevel} / Max Lv.${book.maxLvl}</span>
                    </div>
                    <p class="text-[11px] text-gray-400 mt-1">${book.desc}</p>
                    <div class="text-[10px] text-emerald-400 mt-1">
                        <i class="fa-solid fa-bolt"></i> Gain: 8 - 13 XP per jam
                    </div>
                </div>

                <div class="space-y-2 pt-2 border-t border-galuhBorder/50">
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-gray-400">Durasi Belajar:</span>
                        <select id="hours-${bookKey}" class="bg-galuhCard border border-galuhBorder text-gray-200 rounded px-2 py-1 text-xs">
                            <option value="1">1 Jam (${cost1Hour.toLocaleString()} KG)</option>
                            <option value="2">2 Jam</option>
                            <option value="3">3 Jam (${cost3Hours.toLocaleString()} KG)</option>
                        </select>
                    </div>
                    <button onclick="processStudyBook('${bookKey}', ${book.maxLvl})" class="w-full bg-galuhAccent hover:bg-galuhAccentHover text-white py-2 rounded-lg font-bold text-xs transition shadow flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-book-open-reader"></i> Pelajari Kitab
                    </button>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="space-y-4">
            <div class="border-b border-galuhBorder pb-2">
                <h3 class="font-bold text-sm text-gray-200"><i class="fa-solid fa-book-bookmark text-galuhGold mr-1"></i> Perpustakaan Wilayah ${curReg}</h3>
                <p class="text-xs text-gray-400">Setiap wilayah menyediakan koleksi kitab terbatas hingga Level 3. (Koleksi lengkap hanya ada di Kerajaan Kota Galuh).</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${libraryHtml}
            </div>
        </div>
    `;
}


}

function showAlertModal(title, msg) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-body").innerHTML = `<p class="text-gray-300">${msg}</p>`;
    document.getElementById("game-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("game-modal").classList.add("hidden");
}

function buyEquipment(eqId) {
const eq = EQUIPMENT[eqId];
if (!eq) return;

if (gameState.player.kg < eq.price) {
    showAlertModal("Koin Tidak Cukup", "Koin Galuh Anda tidak cukup untuk membeli perlengkapan ini!");
    return;
}

if (eq.type === "backpack") {
    if (!gameState.player.equippedBackpack) gameState.player.equippedBackpack = [];
    else if (!Array.isArray(gameState.player.equippedBackpack)) gameState.player.equippedBackpack = [gameState.player.equippedBackpack];

    if (gameState.player.equippedBackpack.includes(eqId)) {
        showAlertModal("Informasi", "Anda sudah mengenakan tas punggung jenis ini.");
        return;
    }

    gameState.player.kg -= eq.price;
    animateCoinChange(-eq.price);
    gameState.player.equippedBackpack.push(eqId);
    addLog(`Mengenakan tas punggung tambahan <span class="text-gray-200 font-bold">${eq.name}</span> (+${eq.cap} kg).`);

} else if (eq.type === "cart") {
    if (gameState.player.equippedCart === eqId) {
        showAlertModal("Informasi", "Cart ini sudah sedang Anda gunakan.");
        return;
    }

    gameState.player.kg -= eq.price;
    animateCoinChange(-eq.price);
    gameState.player.equippedCart = eqId;
    addLog(`Mengganti Cart kargo aktif menjadi <span class="text-gray-200 font-bold">${eq.name}</span> (+${eq.cap} kg).`);
}

autoSave();
renderTabContent();


}

function travelTo(destRegion, staminaCost, travelMinutes) {
    if (gameState.player.stamina < staminaCost) {
        showAlertModal("Stamina Rendah", `Anda terlalu lelah untuk berpergian (Butuh ${staminaCost} stamina)!`);
        return;
    }

updateStaminaBar(gameState.player.stamina - staminaCost);
gameState.player.location = destRegion;
advanceTime(travelMinutes);

generateNews();
addLog(`Berpergian menuju wilayah <span class="text-galuhGold font-bold">${destRegion}</span> (-${staminaCost} Stamina).`);
autoSave();
renderTabContent();


}

function doWork(jobIdx) {
const regData = REGIONS[gameState.player.location];
const job = regData.jobs[jobIdx];
if (!job) return;

const hoursSelect = document.getElementById(`work-hours-${jobIdx}`);
const hours = hoursSelect ? parseInt(hoursSelect.value) : 1;
const totalStaminaNeeded = hours * 3;

if (gameState.player.stamina < totalStaminaNeeded) {
    showAlertModal("Stamina Rendah", `Stamina Anda tidak cukup untuk bekerja selama ${hours} jam (Butuh ${totalStaminaNeeded} stamina).`);
    return;
}

// Hitung Penghasilan berbasis jam & skill
let skillBonusMultiplier = 1.0;
if (job.expSkill && gameState.skills[job.expSkill]) {
    skillBonusMultiplier += (gameState.skills[job.expSkill].level * 0.15);
}
const totalPay = Math.round(job.basePay * hours * skillBonusMultiplier);

updateStaminaBar(gameState.player.stamina - totalStaminaNeeded);
gameState.player.kg += totalPay;
animateCoinChange(totalPay);
gameState.player.totalWorkHours += hours;

const expGained = Math.floor(Math.random() * 3) + hours;
if (job.expSkill) addSkillExp(job.expSkill, expGained);

advanceTime(hours * 60);
addLog(`Bekerja ${hours} Jam sebagai <span class="text-gray-200 font-bold">${job.title}</span> (+${totalPay} KG, +${expGained} XP).`);

autoSave();
renderTabContent();


}

function restAtInn(withMeal) {
const regData = REGIONS[gameState.player.location];
const cost = withMeal ? regData.innMealCost : regData.innCost;

if (gameState.player.kg < cost) {
    showAlertModal("Koin Tidak Cukup", "Koin Galuh Anda tidak cukup untuk menyewa kamar!");
    return;
}

gameState.player.kg -= cost;
animateCoinChange(-cost);

const restorePct = withMeal ? 1.0 : 0.5;
updateStaminaBar(gameState.player.stamina + (gameState.player.maxStamina * restorePct));

let hoursTo6 = (30 - gameState.time.hour) % 24;
if (hoursTo6 === 0) hoursTo6 = 24;
advanceTime(hoursTo6 * 60);

addLog(`Tidur di penginapan ${withMeal ? '+ makan' : ''} (-${cost} KG).`);
autoSave();
renderTabContent();


}

function sleepOnPorch() {
if (gameState.time.hour < 16) {
showAlertModal("Belum Waktunya Tidur", "Tidur di teras warga atau beristirahat malam hanya bisa dilakukan mulai pukul 16:00 sore ke atas!");
return;
}

const cost = 20;
if (gameState.player.kg < cost) {
    showAlertModal("Tidak Cukup Koin", "Anda butuh 20 KG untuk membayar kompensasi tidur di teras warga!");
    return;
}

gameState.player.kg -= cost;
animateCoinChange(-cost);

updateStaminaBar(gameState.player.stamina + 15);
advanceTime(180);
addSkillExp("berdagang", 2);

addLog(`Tidur di teras warga selama 3 jam (-20 KG, +15 Stamina).`);
autoSave();
renderTabContent();


}

function buyTavernMeal(menuId, cost, staminaAdd) {
if (gameState.player.kg < cost) {
showAlertModal("Koin Tidak Cukup", "Koin Galuh Anda tidak cukup!");
return;
}
gameState.player.kg -= cost;
    animateCoinChange(-cost);
    updateStaminaBar(gameState.player.stamina + (staminaAdd * 10));
    addLog(`Memesan hidangan kedai khas (-${cost} KG, +${staminaAdd * 10} Stamina).`);
    autoSave();
    renderTabContent();
}

function buyHouse(regName, price) {
if (gameState.player.kg < price) {
showAlertModal("Koin Tidak Cukup", "Koin Galuh Anda tidak cukup!");
return;
}
gameState.player.kg -= price;
    animateCoinChange(-price);
    gameState.properties.houses[regName] = { warehouseLevel: 0 };
    addLog(`<span class="text-emerald-400 font-bold">Membeli Rumah Permanen!</span> di ${regName}.`);
    autoSave();
    renderTabContent();
}

function processStudyBook(bookKey, maxLvl) {
const book = LIBRARY_BOOKS[bookKey];
if (!book) return;

const hoursSelect = document.getElementById(`hours-${bookKey}`);
const durationHours = hoursSelect ? parseInt(hoursSelect.value) : 1;

const skillObj = gameState.skills[book.targetSkill] || { level: 0, exp: 0 };
const currentLevel = skillObj.level;

if (currentLevel >= maxLvl) {
    showAlertModal("Batas Level Tercapai", `Kitab di perpustakaan wilayah ini hanya dapat menaikkan skill hingga Level ${maxLvl}.`);
    return;
}

const totalCost = calculateStudyCost(currentLevel, durationHours);

if (gameState.player.kg < totalCost) {
    showAlertModal("Koin Tidak Cukup", `Koin Galuh Anda tidak cukup! Total biaya ${durationHours} jam adalah ${totalCost.toLocaleString()} KG.`);
    return;
}
if (gameState.player.stamina < (durationHours * 10)) {
    showAlertModal("Stamina Rendah", "Anda terlalu lelah untuk membaca kitab dalam durasi tersebut!");
    return;
}

gameState.player.kg -= totalCost;
animateCoinChange(-totalCost);
updateStaminaBar(gameState.player.stamina - (durationHours * 10));

let totalExpGained = 0;
for (let h = 0; h < durationHours; h++) {
    totalExpGained += Math.floor(Math.random() * 6) + 8;
}

addSkillExp(book.targetSkill, totalExpGained);
advanceTime(durationHours * 60);

addLog(`Mempelajari <span class="text-gray-200 font-bold">${book.name}</span> selama ${durationHours} jam (-${totalCost.toLocaleString()} KG, +${totalExpGained} XP).`);
autoSave();
renderTabContent();


}

const SAVE_KEY = "LIVIN_IN_GALUH_SAVE_V2";

function autoSave() {
gameState.lastSaved = Date.now();
try {
localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
} catch (e) {
console.error("AutoSave failed:", e);
}
}

function manualSave() {
autoSave();
showAlertModal("Simpan Permainan", "Progress permainan Anda berhasil disimpan secara aman!");
}

function loadSaveData() {
try {
const savedStr = localStorage.getItem(SAVE_KEY);
if (savedStr) {
const loaded = JSON.parse(savedStr);
if (loaded && loaded.version) {
gameState = Object.assign({}, gameState, loaded);
if (gameState.player.equippedBackpack && !Array.isArray(gameState.player.equippedBackpack)) {
gameState.player.equippedBackpack = [gameState.player.equippedBackpack];
}
}
}
} catch (e) {
console.error("Load save data failed:", e);
}
}

function exportSaveData() {
    const jsonStr = JSON.stringify(gameState);
    const b64 = btoa(jsonStr);
    showAlertModal("Ekspor Save Data", `
        <p class="text-xs text-gray-400 mb-2">Salin kode di bawah ini untuk mem-backup simpanan Anda:</p>
        <textarea class="w-full h-24 bg-galuhBg border border-galuhBorder text-xs text-gray-300 p-2 rounded font-mono select-all">${b64}</textarea>
    `);
}

function openImportModal() {
    showAlertModal("Impor Save Data", `
        <p class="text-xs text-gray-400 mb-2">Tempelkan kode save data Anda di bawah ini:</p>
        <textarea id="import-text-input" class="w-full h-24 bg-galuhBg border border-galuhBorder text-xs text-gray-300 p-2 rounded font-mono" placeholder="Paste kode save data di sini..."></textarea>
        <button onclick="processImportData()" class="mt-2 w-full bg-galuhAccent hover:bg-galuhAccentHover text-white py-1.5 rounded font-bold text-xs">Impor & Muat Game</button>
    `);
}

function processImportData() {
const input = document.getElementById("import-text-input");
if (!input || !input.value.trim()) return;

try {
    const jsonStr = atob(input.value.trim());
    const loaded = JSON.parse(jsonStr);
    if (loaded && loaded.player) {
        gameState = loaded;
        autoSave();
        location.reload();
    } else {
        alert("Kode save data tidak valid!");
    }
} catch (e) {
    alert("Gagal memproses kode save data!");
}


}

function confirmResetData() {
if (confirm("Apakah Anda yakin ingin menghapus seluruh simpanan dan mengulang dari nol?")) {
localStorage.removeItem(SAVE_KEY);
location.reload();
}
}

function clearActivityLog() {
gameState.logs = [];
renderLogs();
}

window.onload = function() {
loadSaveData();
updateHeaderUI();
generateNews();
renderLogs();
switchTab("profile");

// 1 menit in-game selama 8 detik real time -> 1 detik real time = 7.5 detik in-game (atau setiap 8 detik in-game maju 1 menit)
realTimeInterval = setInterval(function() {
    advanceTime(1);
}, 8000);


};
