/* ==========================================================================
   MARKET & PRICING MECHANICS LOGIC
   ========================================================================== */

function getCalculatedPrice(itemId, currentRegion) {
    const item = ITEMS[itemId];
    if (!item) return 0;
    const isOrigin = item.origin === currentRegion;
    return isOrigin ? item.basePrice : Math.round(item.basePrice * 1.3);
}

function renderMarketTab(container) {
    const curReg = gameState.player.location;
    let itemsHtml = Object.keys(ITEMS).map(itemId => {
        const item = ITEMS[itemId];
        const price = getCalculatedPrice(itemId, curReg);
        const pItem = gameState.inventory.pocket.find(i => i.id === itemId);
        const holdQty = pItem ? pItem.qty : 0;

        return `
            <div class="bg-galuhBg p-3 rounded-lg border border-galuhBorder flex items-center justify-between gap-3 text-xs">
                <div>
                    <div class="font-bold text-gray-200 text-sm">${item.name}</div>
                    <div class="text-gray-400 text-[11px]">Berat: ${item.weight} kg | Asal: ${item.origin}</div>
                    <div class="text-gray-400 text-[11px]">Dimiliki: <span class="text-galuhGold font-bold">${holdQty} unit</span></div>
                </div>
                <div class="text-right space-y-1.5">
                    <div class="font-bold text-galuhGold text-sm">${price} KG / unit</div>
                    <div class="flex gap-1 justify-end">
                        <button onclick="buyItem('${itemId}', ${price})" class="bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 border border-emerald-700 px-2.5 py-1 rounded font-bold text-xs transition">Beli</button>
                        <button onclick="sellItem('${itemId}', ${price})" class="bg-amber-900/60 hover:bg-amber-800 text-amber-300 border border-amber-700 px-2.5 py-1 rounded font-bold text-xs transition">Jual</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="space-y-4">
            <div class="border-b border-galuhBorder pb-2">
                <h3 class="font-bold text-sm text-gray-200"><i class="fa-solid fa-store text-galuhGold mr-1"></i> Pasar & Perdagangan Komoditas</h3>
                <p class="text-xs text-gray-400">Kulakan barang dari daerah asal dan jual ke wilayah tujuan untuk meraup untung Koin Galuh.</p>
            </div>
            <div class="grid grid-cols-1 gap-2.5">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function buyItem(itemId, price) {
    if (gameState.player.kg < price) {
        showAlertModal("Koin Tidak Cukup", "Koin Galuh Anda tidak cukup untuk membeli komoditas ini!");
        return;
    }
    const itemData = ITEMS[itemId];
    const curWeight = getInventoryWeight(gameState.inventory.pocket);
    if (curWeight + itemData.weight > getPocketCapacity()) {
        showAlertModal("Saku Penuh", "Kapasitas saku Anda tidak cukup untuk membawa barang ini!");
        return;
    }

    gameState.player.kg -= price;
    animateCoinChange(-price);

    let pItem = gameState.inventory.pocket.find(i => i.id === itemId);
    if (pItem) pItem.qty += 1;
    else gameState.inventory.pocket.push({ id: itemId, qty: 1 });

    addLog(`Membeli <span class="text-gray-200 font-bold">${itemData.name}</span> (-${price} KG).`);
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

    const itemData = ITEMS[itemId];
    addLog(`Menjual <span class="text-gray-200 font-bold">${itemData ? itemData.name : itemId}</span> (+${price} KG).`);
    autoSave();
    renderTabContent();
}
