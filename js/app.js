document.addEventListener("DOMContentLoaded", () => {
    const {
        profilUtama,
        keahlianKategori,
        projectWeb,
        contohAdministrasi,
        sertifikatUtama,
        sertifikatGaleri
    } = portfolioData;

    // 1. BAGIAN 1: PROFIL UTAMA & KONTAK
    const heroFoto = document.getElementById("heroFoto");
    if (heroFoto && profilUtama.fotoProfil) heroFoto.src = profilUtama.fotoProfil;

    document.getElementById("heroNama").textContent = profilUtama.namaLengkap;
    document.getElementById("heroPendidikan").textContent = profilUtama.pendidikanSingkat;
    document.getElementById("heroRingkasan").textContent = profilUtama.ringkasan;

    const btnCV = document.getElementById("btnDownloadCV");
    if (btnCV) btnCV.href = profilUtama.fileCV;

    // Elemen Kontak: Simbol 3D Mengambang Tanpa Tombol Kotak
    const { kontak } = profilUtama;
    document.getElementById("kontakGrid").innerHTML = `
        <div class="sym-item flex items-center gap-3 text-xs font-medium text-rose-950 leading-normal">
            <a href="${kontak.waLink}" target="_blank" rel="noopener noreferrer" title="Chat WhatsApp"
               class="sym-3d w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 text-white flex items-center justify-center text-base shrink-0">
                <i class="fab fa-whatsapp"></i>
            </a>
            <div class="flex flex-wrap items-center gap-1.5">
                <a href="${kontak.waLink}" target="_blank" rel="noopener noreferrer" class="hover:text-pink-600 font-semibold transition">
                    ${kontak.waTampil}
                </a>
                <span class="text-rose-300">•</span>
                <a href="${kontak.telLink}" title="Telepon langsung" class="text-[11px] text-pink-700 hover:text-rose-950 underline underline-offset-2 transition">
                    <i class="fas fa-phone text-[10px] mr-0.5"></i>Telepon
                </a>
            </div>
        </div>

        <div class="sym-item flex items-center gap-3 text-xs font-medium text-rose-950 leading-normal">
            <button type="button" onclick="salinEmail('${kontak.email}', this)" title="Klik simbol untuk menyalin email"
                    class="sym-3d w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 text-white flex items-center justify-center text-sm shrink-0 cursor-pointer">
                <i class="fas fa-envelope"></i>
            </button>
            <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                <a href="mailto:${kontak.email}" class="hover:text-pink-600 font-semibold transition truncate">
                    ${kontak.email}
                </a>
                <span class="text-rose-300">•</span>
                <button type="button" onclick="salinEmail('${kontak.email}', this)"
                        class="text-[11px] text-pink-700 hover:text-rose-950 underline underline-offset-2 transition cursor-pointer">
                    <span>Salin</span>
                </button>
            </div>
        </div>

        <a href="${kontak.linkedinUrl}" target="_blank" rel="noopener noreferrer"
           class="sym-item flex items-center gap-3 text-xs font-medium text-rose-950 hover:text-pink-600 transition leading-normal">
            <span class="sym-3d w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 text-white flex items-center justify-center text-sm shrink-0">
                <i class="fab fa-linkedin-in"></i>
            </span>
            <span class="font-semibold truncate">${kontak.linkedinLabel}</span>
        </a>

        <div class="sym-item flex items-center gap-3 text-xs font-medium text-rose-900/90 leading-normal">
            <span class="sym-3d w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 text-white flex items-center justify-center text-sm shrink-0">
                <i class="fas fa-location-dot"></i>
            </span>
            <span class="font-semibold truncate">${kontak.alamatLabel}</span>
        </div>
    `;

    // 2. BAGIAN 2: KEAHLIAN & APLIKASI (SKILLS & TOOLS MATRIX)
    // 2. BAGIAN 2: KEAHLIAN & APLIKASI (SKILLS & TOOLS MATRIX + LOGO APLIKASI)
    const ikonAplikasi = {
        "administrasi umum": { icon: "fa-file-lines", color: "text-pink-600" },
        "pencatatan transaksi harian": { icon: "fa-receipt", color: "text-rose-600" },
        "invoicing": { icon: "fa-file-invoice-dollar", color: "text-pink-600" },
        "pembuatan purchase order (po)": { icon: "fa-cart-shopping", color: "text-rose-600" },
        "laporan keuangan berkala": { icon: "fa-chart-line", color: "text-pink-600" },

        "accurate (basic)": { icon: "fa-calculator", color: "text-emerald-600", logo: "assets/logos/accurate.png" },
        "accurate": { icon: "fa-calculator", color: "text-emerald-600", logo: "assets/logos/accurate.png" },
        "microsoft word": { icon: "fa-file-word", color: "text-blue-600", logo: "assets/logos/word.png" },
        "microsoft excel": { icon: "fa-file-excel", color: "text-green-600", logo: "assets/logos/excel.png" },
        "microsoft powerpoint": { icon: "fa-file-powerpoint", color: "text-orange-600", logo: "assets/logos/powerpoint.png" },

        "basic web development": { icon: "fa-code", color: "text-pink-600" },
        "laragon": { icon: "fa-server", color: "text-sky-600", logo: "assets/logos/laragon.png" },
        "visual studio code (vs code)": { icon: "fa-laptop-code", color: "text-blue-500", logo: "assets/logos/vscode.png" },
        "visual studio code": { icon: "fa-laptop-code", color: "text-blue-500", logo: "assets/logos/vscode.png" },
        "adobe lightroom": { icon: "fa-sliders", color: "text-sky-500", logo: "assets/logos/lightroom.png" }
    };

    const renderBadgeSkill = (item) => {
        const key = String(item).trim().toLowerCase();
        const cfg = ikonAplikasi[key] || { icon: "fa-check", color: "text-pink-600" };

        if (cfg.logo) {
            return `
                <span class="inline-flex items-center gap-2 bg-pink-50/90 text-rose-900 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xs">
                    <img src="${cfg.logo}" alt="${item}"
                         onerror="this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');"
                         class="w-4 h-4 object-contain shrink-0">
                    <i class="fas ${cfg.icon} ${cfg.color} text-xs hidden"></i>
                    <span>${item}</span>
                </span>
            `;
        }

        return `
            <span class="inline-flex items-center gap-2 bg-pink-50/90 text-rose-900 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xs">
                <i class="fas ${cfg.icon} ${cfg.color} text-xs"></i>
                <span>${item}</span>
            </span>
        `;
    };

    document.getElementById("gridSkillsMatrix").innerHTML = keahlianKategori.map(kat => `
        <div class="tilt-card float-3d bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] relative overflow-hidden">
            <div class="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"></div>
            <div class="icon-3d w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 text-white flex items-center justify-center mb-4">
                <i class="fas ${kat.ikon} text-base"></i>
            </div>
            <div class="layer-pop transition-transform duration-300">
                <h3 class="font-bold text-rose-950 text-base mb-3.5">${kat.judul}</h3>
                <div class="flex flex-wrap gap-2">
                    ${kat.items.map(item => renderBadgeSkill(item)).join("")}
                </div>
            </div>
        </div>
    `).join("");

   // BAGIAN 3: CONTOH PROJECT (3 BINGKAI KACA 3D KIRI - TENGAH - KANAN)
    const posisiBingkai = ["bingkai-pos-kiri", "bingkai-pos-tengah", "bingkai-pos-kanan"];

    document.getElementById("gridProjectWeb").innerHTML = projectWeb.map((proj, idx) => {
        const kelasPosisi = posisiBingkai[idx % 3];
        return `
            <div class="bingkai-kaca-3d ${kelasPosisi} rounded-[2rem] p-4 sm:p-5 relative flex flex-col justify-between">
                <div>
                    <div class="bingkai-dalam-kaca w-full h-48 sm:h-52 rounded-[1.35rem] overflow-hidden mb-4 p-2 flex items-center justify-center relative">
                        <img src="${proj.gambar}" alt="${proj.judul}"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                             class="w-full h-full object-contain rounded-xl select-none">
                        <div style="display:none;" class="w-full h-full rounded-xl bg-white/60 flex-col items-center justify-center p-4 text-center">
                            <span class="text-xs font-bold uppercase tracking-wider text-pink-600 mb-1">Preview Project</span>
                            <span class="text-sm font-bold text-rose-950">${proj.judul}</span>
                        </div>
                    </div>

                    <div class="px-1 relative z-10">
                        <h4 class="font-bold text-rose-950 text-base leading-snug mb-1.5">
                            ${proj.judul}
                        </h4>
                        <p class="text-xs text-rose-950/80 leading-relaxed">
                            ${proj.deskripsi}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // 3B. BAGIAN 3B: CONTOH PEKERJAAN ADMINISTRASI
    // 3B. BAGIAN 3B: PENGALAMAN PEKERJAAN (RAPI & TANPA TOMBOL LIHAT CONTOH FORMAT)
    document.getElementById("gridContohAdmin").innerHTML = contohAdministrasi.map(adm => `
        <div class="tilt-card float-3d bg-white/85 backdrop-blur-xl rounded-[2rem] p-6 md:p-7 relative overflow-hidden flex flex-col justify-between">
            <div class="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"></div>
            <div class="layer-pop transition-transform duration-300 space-y-4">
                <div class="flex items-center gap-3.5 pb-3 border-b border-pink-100">
                    <div class="icon-3d w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 text-white flex items-center justify-center shrink-0">
                        <i class="fas ${adm.ikon} text-sm"></i>
                    </div>
                    <div class="min-w-0">
                        <h4 class="font-bold text-rose-950 text-sm md:text-base leading-snug">${adm.peran} — ${adm.perusahaan}</h4>
                        <p class="text-xs font-semibold text-pink-600 mt-0.5">${adm.periode}</p>
                    </div>
                </div>

                <p class="text-xs text-rose-900/80 leading-relaxed">${adm.ringkasan}</p>

                <ul class="space-y-2 pt-1">
                    ${adm.poin.map(pt => `
                        <li class="flex items-start gap-2.5 text-xs text-rose-950/90 leading-relaxed">
                            <span class="w-4 h-4 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[9px] shrink-0 mt-0.5">
                                <i class="fas fa-check"></i>
                            </span>
                            <span>${pt}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>
        </div>
    `).join("");

    // 4A. BAGIAN 4A: SERTIFIKAT UTAMA (HIGHLIGHT CARD BNSP — VERSI PDF)
    const filePdfBnsp = sertifikatUtama.filePdf || sertifikatUtama.file || sertifikatUtama.gambar;

    document.getElementById("cardSertifikatUtama").innerHTML = `
        <div class="tilt-card float-3d bg-gradient-to-r from-white/90 via-pink-50/85 to-rose-50/85 backdrop-blur-xl rounded-[2rem] p-6 md:p-7 relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div class="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"></div>
            <div class="md:col-span-4 aspect-[16/10] rounded-2xl overflow-hidden bg-pink-100 shadow-sm cursor-pointer"
                 onclick="bukaModalDokumen('${filePdfBnsp}', '${sertifikatUtama.judul}', '${sertifikatUtama.penerbit} • ${sertifikatUtama.masaBerlaku}')">
                <img src="${sertifikatUtama.gambar}" alt="${sertifikatUtama.judul}"
                     onerror="this.src='https://placehold.co/640x400/fbcfe8/831843?text=Sertifikat+BNSP'"
                     class="w-full h-full object-cover hover:scale-105 transition duration-500">
            </div>
            <div class="md:col-span-8 space-y-2.5 layer-pop transition-transform duration-300">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="bg-gradient-to-r from-pink-600 to-rose-500 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-xs">
                        ${sertifikatUtama.badge}
                    </span>
                    <span class="bg-white/90 text-rose-900 text-[11px] font-bold px-3 py-1 rounded-full">
                        ${sertifikatUtama.masaBerlaku}
                    </span>
                </div>
                <h3 class="font-display text-xl md:text-2xl font-extrabold text-rose-950">${sertifikatUtama.judul}</h3>
                <p class="text-xs text-rose-900/75 leading-relaxed">${sertifikatUtama.deskripsi}</p>
                <div class="pt-2">
                    <button type="button" onclick="bukaModalDokumen('${filePdfBnsp}', '${sertifikatUtama.judul}', '${sertifikatUtama.penerbit} • ${sertifikatUtama.masaBerlaku}')"
                            class="bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition shadow-sm cursor-pointer">
                        <i class="far fa-file-pdf mr-1.5"></i> Lihat Dokumen Sertifikat (PDF)
                    </button>
                </div>
            </div>
        </div>
    `;

  

    renderGaleriSertifikat("");
    aktifkanTilt3D();
});

function pilihTabSertifikat(tab, btnEl) {
    document.querySelectorAll(".cert-tab").forEach(b => {
        b.className = "cert-tab px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer bg-white/80 text-rose-900/75 hover:bg-white";
    });
    btnEl.className = "cert-tab px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md shadow-pink-500/30";
    renderGaleriSertifikat(tab);
}

function renderGaleriSertifikat(tab) {
    const daftar = tab === "Semua (15)"
        ? portfolioData.sertifikatGaleri
        : portfolioData.sertifikatGaleri.filter(s => s.kategori === tab);

    document.getElementById("gridGaleriSertifikat").innerHTML = daftar.map(s => `
        <div class="tilt-card float-3d bg-white/80 backdrop-blur-xl rounded-[2rem] overflow-hidden relative flex flex-col justify-between">
            <div class="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 z-10"></div>
            <div>
                <div class="relative aspect-[16/10] overflow-hidden bg-pink-100/60 cursor-pointer"
                     onclick="bukaModalDokumen('${s.gambar}', '${s.judul}', '${s.penerbit} • ${s.tahun}')">
                    <img src="${s.gambar}" alt="${s.judul}"
                         onerror="this.src='https://placehold.co/600x380/fce7f3/9d174d?text=Sertifikat+${s.nomor}'"
                         class="w-full h-full object-cover hover:scale-105 transition duration-500">
                    <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-rose-900 text-[10px] font-bold px-2.5 py-1 rounded-full">
                        ${s.kategori}
                    </span>
                </div>
                <div class="p-4 pb-2">
                    <h4 class="font-bold text-rose-950 text-sm leading-snug line-clamp-2">${s.judul}</h4>
                    <p class="text-[11px] text-rose-900/65 mt-1">${s.penerbit} • ${s.tahun}</p>
                </div>
            </div>
            <div class="px-4 pb-4 pt-2">
                <button type="button" onclick="bukaModalDokumen('${s.gambar}', '${s.judul}', '${s.penerbit} • ${s.tahun}')"
                        class="w-full bg-pink-100/85 hover:bg-pink-200/80 text-rose-900 text-[11px] font-semibold py-2 rounded-full transition cursor-pointer">
                    Lihat Dokumen
                </button>
            </div>
        </div>
    `).join("");

    aktifkanTilt3D();
}

function salinEmail(emailText, btnEl) {
    navigator.clipboard.writeText(emailText).then(() => {
        const label = btnEl.querySelector("span");
        const teksAsli = label.textContent;
        label.textContent = "Tersalin";
        setTimeout(() => { label.textContent = teksAsli; }, 1600);
    });
}

// =========================================================================
// MESIN 3D TILT INTERAKTIF + GERAK OTOMATIS FOTO PROFIL
// =========================================================================
function aktifkanTilt3D() {
    const cards = document.querySelectorAll(".tilt-card, .photo-3d");

    cards.forEach(card => {
        if (card.dataset.tiltReady) return;
        card.dataset.tiltReady = "true";

        const isPhoto = card.classList.contains("photo-3d");
        const maxTilt = isPhoto ? 14 : 8;

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -maxTilt;
            const rotateY = ((x - centerX) / centerX) * maxTilt;

            card.style.animation = "none";
            card.style.transition = "transform 0.08s ease-out, box-shadow 0.2s ease";
            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

            const glare = card.querySelector(".glare");
            if (glare) {
                const percentX = (x / rect.width) * 100;
                const percentY = (y / rect.height) * 100;
                glare.style.opacity = "1";
                glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.42), transparent 65%)`;
            }
        });

        card.addEventListener("mouseleave", () => {
            card.style.transition = "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s ease";
            if (isPhoto) {
                card.style.transform = "";
                card.style.animation = "autoFoto3D 6s ease-in-out infinite";
            } else {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
            }

            const glare = card.querySelector(".glare");
            if (glare) {
                glare.style.opacity = "0";
            }
        });
    });
}

function bukaModalDokumen(src, judul, sub) {
    const modal = document.getElementById("lightbox");
    const lbPdf = document.getElementById("lbPdf");
    const lbImg = document.getElementById("lbImg");
    const lbOpenTab = document.getElementById("lbOpenTab");

    document.getElementById("lbTitle").textContent = judul;
    document.getElementById("lbSub").textContent = sub;

    const cleanSrc = (src || "").trim();
    const isPdf = cleanSrc.toLowerCase().endsWith(".pdf");

    if (lbOpenTab) {
        if (isPdf && cleanSrc) {
            lbOpenTab.href = cleanSrc;
            lbOpenTab.classList.remove("hidden");
        } else {
            lbOpenTab.href = "#";
            lbOpenTab.classList.add("hidden");
        }
    }

    if (isPdf && lbPdf && lbImg) {
        lbImg.classList.add("hidden");
        lbImg.removeAttribute("src");
        lbPdf.classList.remove("hidden");
        lbPdf.src = cleanSrc;
    } else if (lbImg) {
        if (lbPdf) {
            lbPdf.classList.add("hidden");
            lbPdf.removeAttribute("src");
        }
        lbImg.classList.remove("hidden");
        lbImg.src = cleanSrc;
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function tutupLightbox() {
    const modal = document.getElementById("lightbox");
    const lbPdf = document.getElementById("lbPdf");
    if (lbPdf) lbPdf.removeAttribute("src");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}