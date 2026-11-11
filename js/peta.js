/* ==========================================================================
   MAP & TRAVEL NAVIGATION LOGIC
   ========================================================================== */

function renderMapTab(container) {
    const cur = gameState.player.location;
    
    let regionCards = Object.keys(REGIONS).map(rKey => {
        const r = REGIONS[rKey];
        const isHere = rKey === cur;
        const isNeighbor = REGIONS[cur].neighbors.includes(rKey);
        
        let statusBadge = '';
        if (isHere) {
            statusBadge = `<span class="bg-emerald-900/80 text-emerald-300 text-[10px] px-2 py-0.5 rounded font-bold border border-emerald-600 animate-pulse"><i class="fa-solid fa-location-dot"></i> Posisi Anda</span>`;
        } else if (isNeighbor) {
            statusBadge = `<span class="bg-galuhGold/20 text-galuhGold text-[10px] px-2 py-0.5 rounded font-bold border border-galuhGold/40"><i class="fa-solid fa-route"></i> Jalur Langsung</span>`;
        } else {
            statusBadge = `<span class="bg-gray-800 text-gray-400 text-[10px] px-2 py-0.5 rounded border border-gray-700">Terhalang</span>`;
        }

        return `
            <div class="p-3 rounded-lg border ${isHere ? 'bg-galuhAccent/15 border-galuhGold shadow-lg' : isNeighbor ? 'bg-galuhBg border-galuhBorder/80' : 'bg-galuhBg/50 border-galuhBorder/40 opacity-70'} flex flex-col justify-between space-y-2">
                <div class="flex justify-between items-start">
                    <div>
                        <span class="text-[9px] font-bold uppercase tracking-wider text-gray-400">${r.type}</span>
                        <h4 class="font-bold text-sm ${isHere ? 'text-galuhGold' : 'text-gray-200'}">${r.name}</h4>
                    </div>
                    ${statusBadge}
                </div>
                <p class="text-[11px] text-gray-400 line-clamp-2">${r.desc}</p>
                <div class="text-[10px] text-gray-500 border-t border-galuhBorder/40 pt-1.5 flex justify-between">
                    <span>Akses Tetangga:</span>
                    <span class="text-gray-300 font-medium">${r.neighbors.join(', ')}</span>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="space-y-4">
            <div class="flex justify-between items-center border-b border-galuhBorder pb-2">
                <div>
                    <h3 class="font-bold text-sm text-gray-200 flex items-center gap-1.5">
                        <i class="fa-solid fa-map-marked-alt text-galuhGold"></i> Peta Geografi 9 Wilayah Galuh
                    </h3>
                    <p class="text-xs text-gray-400">Peta visual lokasi 9 wilayah terhubung menuju Kerajaan Kota Galuh.</p>
                </div>
            </div>

            <div class="bg-galuhBg p-3 rounded-lg border border-galuhBorder text-xs space-y-2">
                <div class="font-bold text-gray-300 text-[11px] uppercase tracking-wider border-b border-galuhBorder/60 pb-1">Struktur 2 Jalur Utama Perjalanan</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                    <div class="bg-galuhCard p-2 rounded border border-galuhBorder">
                        <span class="font-bold text-cyan-400 block mb-0.5"><i class="fa-solid fa-water"></i> Jalur 1 - Perairan & Lembah:</span>
                        <p class="text-gray-400 text-[10px]">Che A Miss ➔ Male Bear ➔ Bun She Riie ➔ Bho Junk ➔ Sadhayana ➔ Kota Galuh</p>
                    </div>
                    <div class="bg-galuhCard p-2 rounded border border-galuhBorder">
                        <span class="font-bold text-amber-400 block mb-0.5"><i class="fa-solid fa-mountain"></i> Jalur 2 - Pegunungan & Perbukitan:</span>
                        <p class="text-gray-400 text-[10px]">Che A Miss ➔ Bane A Gare ➔ Bag Berg ➔ Khaa Wall Ee ➔ Kota Galuh</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                ${regionCards}
            </div>
        </div>
    `;
}

function travelTo(destRegion) {
    if (gameState.player.stamina < 15) {
        showAlertModal("Stamina Rendah", "Anda terlalu lelah untuk melakukan perjalanan (Butuh min 15 stamina)!");
        return;
    }

    updateStaminaBar(gameState.player.stamina - 15);
    gameState.player.location = destRegion;
    advanceTime(180);

    generateNews();
    addLog(`Berjalan menuju wilayah <span class="text-galuhGold font-bold">${destRegion}</span>.`);
    autoSave();
    renderTabContent();
}
