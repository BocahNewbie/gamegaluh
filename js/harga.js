/* ==========================================================================
MARKET & PRICING SYSTEM LOGIC (54 ITEMS SUPPORT)
========================================================================== */

function getRegionStock(regionName, itemId) {
if (!gameState.regionStocks) {
gameState.regionStocks = {};
}
if (!gameState.regionStocks[regionName]) {
gameState.regionStocks[regionName] = {};
Object.keys(ITEMS).forEach(id => {
gameState.regionStocks[regionName][id] = Math.floor(Math.random() * 50) + 10;
});
}
if (gameState.regionStocks[regionName][itemId] === undefined) {
gameState.regionStocks[regionName][itemId] = 25;
}
return gameState.regionStocks[regionName][itemId];
}

function decreaseRegionStock(regionName, itemId, amount) {
if (!gameState.regionStocks) gameState.regionStocks = {};
if (!gameState.regionStocks[regionName]) getRegionStock(regionName, itemId);
gameState.regionStocks[regionName][itemId] = Math.max(0, (gameState.regionStocks[regionName][itemId] || 0) - amount);
}

function getCalculatedPrice(itemId, currentRegion) {
const item = ITEMS[itemId];
if (!item) return 0;
if (item.origin === currentRegion) {
return item.basePrice;
}
const originRegionData = REGIONS[item.origin];
if (originRegionData && originRegionData.neighbors && originRegionData.neighbors[currentRegion]) {
return Math.round(item.basePrice * 1.35);
}
return Math.round(item.basePrice * 1.85);
}

function renderMarketTab(container) {
const curReg = gameState.player.location;
const tradeSkillLevel = gameState.skills.berdagang ? gameState.skills.berdagang.level : 0;

let localItemsHtml = '';
let importItemsHtml = '';

Object.keys(ITEMS).forEach(itemId => {
    const item = ITEMS[itemId];
    const price = getCalculatedPrice(itemId, curReg);
    const isOrigin = item.origin === curReg;
    const pItem = gameState.inventory.pocket.find(i => i.id === itemId);
    const holdQty = pItem ? pItem.qty : 0;
    const stockLeft = getRegionStock(curReg, itemId);

    const cardContent = `
        <div class="bg-galuhBg p-3 rounded-lg border ${isOrigin ? 'border-galuhAccent/60 bg-galuhAccent/5' : 'border-galuhBorder'} flex items-center justify-between gap-3 text-xs">
            <div>
                <div class="font-bold text-gray-200 text-sm flex items-center gap-1.5">
                    ${item.name}
                    ${isOrigin ? `<span class="bg-galuhGold/20 text-galuhGold text-[9px] px-1.5 py-0.2 rounded border border-galuhGold/40 font-semibold">Produksi Lokal</span>` : ''}
                </div>
                <div class="text-gray-400 text-[11px]">Berat: ${item.weight} kg | Asal: <span class="text-gray-300 font-medium">${item.origin}</span></div>
                <div class="text-gray-400 text-[11px]">Stok Wilayah: <span class="font-bold ${stockLeft > 0 ? 'text-emerald-400' : 'text-red-400'}">${stockLeft} unit</span></div>
                <div class="text-gray-400 text-[11px]">Dimiliki: <span class="text-galuhGold font-bold">${holdQty} unit</span></div>
            </div>
            <div class="text-right space-y-1.5">
                <div class="font-bold text-galuhGold text-sm">${price.toLocaleString()} KG</div>
                <div class="flex gap-1 justify-end">
                    <button onclick="buyItem('${itemId}', ${price})" class="bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 border border-emerald-700 px-2.5 py-1 rounded font-bold text-xs transition">Beli</button>
                    <button onclick="sellItem('${itemId}', ${price})" class="bg-amber-900/60 hover:bg-amber-800 text-amber-300 border border-amber-700 px-2.5 py-1 rounded font-bold text-xs transition">Jual</button>
                </div>
            </div>
        </div>
    `;

    if (isOrigin) localItemsHtml += cardContent;
    else importItemsHtml += cardContent;
});

container.innerHTML = `
    <div class="space-y-4">
        <div class="border-b border-galuhBorder pb-2">
            <h3 class="font-bold text-sm text-gray-200"><i class="fa-solid fa-store text-galuhGold mr-1"></i> Pasar Komoditas Wilayah ${curReg}</h3>
            <p class="text-xs text-gray-400">Total 54 komoditas unik tersebar di 9 wilayah. Skill Berdagang Anda: Lv.${tradeSkillLevel}</p>
        </div>

        <div class="space-y-2">
            <h4 class="font-bold text-xs text-galuhGold uppercase tracking-wider flex items-center gap-1">
                <i class="fa-solid fa-boxes-packing"></i> 6 Produk Khas Asli ${curReg} (Kulakan Termurah)
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${localItemsHtml}
            </div>
        </div>

        <div class="space-y-2 pt-2">
            <h4 class="font-bold text-xs text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <i class="fa-solid fa-truck-ramp-box"></i> Komoditas Impor Dari Wilayah Lain
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
                ${importItemsHtml}
            </div>
        </div>
    </div>
`;


}

function buyItem(itemId, price) {
const curReg = gameState.player.location;
const stockAvailable = getRegionStock(curReg, itemId);

if (stockAvailable <= 0) {
    showAlertModal("Stok Habis", "Maaf, stok komoditas ini di wilayah tersebut sedang kosong!");
    return;
}

if (gameState.player.kg < price) {
    showAlertModal("Koin Tidak Cukup", "Koin Galuh Anda tidak cukup untuk membeli komoditas ini!");
    return;
}

const itemData = ITEMS[itemId];
const curWeight = getInventoryWeight(gameState.inventory.pocket);

if (curWeight + itemData.weight > getPocketCapacity()) {
    showAlertModal("Saku Penuh", "Kapasitas saku/tas Anda tidak cukup untuk membawa komoditas ini!");
    return;
}

gameState.player.kg -= price;
animateCoinChange(-price);
decreaseRegionStock(curReg, itemId, 1);

let pItem = gameState.inventory.pocket.find(i => i.id === itemId);
if (pItem) pItem.qty += 1;
else gameState.inventory.pocket.push({ id: itemId, qty: 1 });

addSkillExp("muatan", 1);
addLog(`Membeli <span class="text-gray-200 font-bold">1x ${itemData.name}</span> (-${price} KG).`);
autoSave();
renderTabContent();


}

function sellItem(itemId, price) {
let pItem = gameState.inventory.pocket.find(i => i.id === itemId);
if (!pItem || pItem.qty <= 0) {
showAlertModal("Barang Tidak Ada", "Anda tidak memiliki barang ini di saku!");
return;
}

pItem.qty -= 1;
if (pItem.qty <= 0) {
    gameState.inventory.pocket = gameState.inventory.pocket.filter(i => i.id !== itemId);
}

gameState.player.kg += price;
animateCoinChange(price);

const curReg = gameState.player.location;
if (!gameState.regionStocks) gameState.regionStocks = {};
if (!gameState.regionStocks[curReg]) getRegionStock(curReg, itemId);
gameState.regionStocks[curReg][itemId] = (gameState.regionStocks[curReg][itemId] || 0) + 1;

const itemData = ITEMS[itemId];
addLog(`Menjual <span class="text-gray-200 font-bold">${itemData ? itemData.name : itemId}</span> (+${price} KG).`);
autoSave();
renderTabContent();


}
