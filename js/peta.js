/* ==========================================================================
   MAP & TRAVEL NAVIGATION LOGIC (VISUAL MAP - VIEW ONLY)
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
            statusBadge = `<span class="bg-galuhGold/20 text-galuhGold text-[10px] px-2 py-0.5 rounded font-bold border border-galuhGold/40"><i class="fa-solid fa-route"></i> Jalur Terhubung</span>`;
        } else {
            statusBadge = `<span class="bg-gray-800 text-gray-400 text-[10px] px-2 py-0.5 rounded border border-gray-700">Jauh</span>`;
        }

        return `
            <div class="p-2.5 rounded-lg border ${isHere ? 'bg-galuhAccent/20 border-galuhGold shadow-md' : 'bg-galuhBg border-galuhBorder'} flex items-center justify-between text-xs">
                <div>
                    <span class="text-[9px] font-bold uppercase tracking-wider text-gray-400">${r.type}</span>
                    <h5 class="font-bold ${isHere ? 'text-galuhGold text-sm' : 'text-gray-200'}">${r.name}</h5>
                </div>
                <div>${statusBadge}</div>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="space-y-4">
            <div class="flex justify-between items-center border-b border-galuhBorder pb-2">
                <div>
                    <h3 class="font-bold text-sm text-gray-200 flex items-center gap-1.5">
                        <i class="fa-solid fa-map-marked-alt text-galuhGold"></i> Peta Visual Realm Galuh
                    </h3>
                    <p class="text-xs text-gray-400">Posisi Anda saat ini berada di <span class="text-galuhGold font-bold">${cur}</span>. (Gunakan menu <b>Pos Transit & Bepergian</b> untuk berpindah wilayah).</p>
                </div>
            </div>

            <!-- VISUAL MAP CONTAINER (MENGGUNAKAN FILE JPG - VIEW ONLY) -->
            <div class="relative bg-galuhBg rounded-xl border-2 border-galuhAccent overflow-hidden shadow-2xl group">
                <div class="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-galuhBorder text-[11px] text-gray-200 flex items-center gap-1.5 shadow">
                    <i class="fa-solid fa-location-dot text-galuhGold"></i> Lokasi Aktif: <span class="font-bold text-galuhGold">${cur}</span>
                </div>
                
                <!-- Gambar Peta JPG -->
                <img src="peta-galuh.jpg" alt="Peta Wilayah Galuh" class="w-full h-auto object-cover max-h-[440px] transition-transform duration-500 group-hover:scale-102">
                
                <!-- Footer Informasi Peta -->
                <div class="p-2.5 bg-galuhCard/90 backdrop-blur border-t border-galuhBorder text-center text-xs text-gray-400">
                    <i class="fa-solid fa-circle-info text-galuhGold"></i> Peta navigasi visual murni untuk memantau jalur terhubung antar wilayah.
                </div>
            </div>

            <!-- List Ringkas 9 Wilayah -->
            <div class="space-y-2">
                <h4 class="font-bold text-xs text-gray-300 uppercase tracking-wider">Status Hubungan Antar Wilayah</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    ${regionCards}
                </div>
            </div>
        </div>
    `;
}
