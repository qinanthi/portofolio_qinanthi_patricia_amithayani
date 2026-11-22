const portfolioData = {
    // =========================================================================
    // BAGIAN 1: HALAMAN PERTAMA — PROFIL UTAMA & KONTAK
    // =========================================================================
    profilUtama: {
        namaLengkap: "Qinanthi Patricia Amithayani.",
       pendidikanSingkat: "Lulusan S1 Teknik Informatika, Universitas Pamulang (Lulus 2026)",
        ringkasan: "Lulusan S1 Teknik Informatika Universitas Pamulang (Lulus 2026 | IPK 3,60) bersertifikasi kompetensi pemrograman BNSP dengan pengalaman kerja di bidang finance, purchasing, dan administrasi. Terbiasa mengelola transaksi keuangan, pembuatan Purchase Order (PO), invoicing, serta pengembangan web dasar.",
        fileCV: "CV_Qinanthi Patricia_26.pdf",
        fileTranskrip: "assets/cv/Transkrip_Nilai_Qinanthi.pdf", // Ganti sesuai nama file transkrip kamu
        kontak: {
            waTampil: "+62 822-5068-4201",
            waLink: "https://wa.me/6282250684201",
            telLink: "tel:+6282250684201",
            email: "qinanthi66@gmail.com",
            linkedinLabel: "LinkedIn: Qinanthi Patricia Amithayani",
linkedinUrl: "https://www.linkedin.com/in/qinanthi-patricia-amithayani-b75a5b253",
            alamatLabel: "Alamat: Tangerang Selatan, Banten" // Misal: Tangerang Selatan
        }
    },

    // =========================================================================
    // BAGIAN 2: KEAHLIAN & APLIKASI YANG DIGUNAKAN (SKILLS & TOOLS MATRIX)
    // =========================================================================
    keahlianKategori: [
        {
            judul: "Administrasi & Keuangan",
            ikon: "fa-file-invoice-dollar",
            items: [
                "Administrasi Umum",
                "Pencatatan Transaksi Harian",
                "Invoicing",
                "Pembuatan Purchase Order (PO)",
                "Laporan Keuangan Berkala"
            ]
        },
        {
            judul: "Perangkat Lunak Perkantoran",
            ikon: "fa-table-cells",
            items: [
                "Accurate (Basic)",
                "Microsoft Word",
                "Microsoft Excel",
                "Microsoft PowerPoint"
            ]
        },
        {
            judul: "IT, Web & Kreatif",
            ikon: "fa-code",
            items: [
                "Basic Web Development",
                "Laragon",
                "Visual Studio Code (VS Code)",
                "Adobe Lightroom"
            ]
        }
    ],

    // =========================================================================
    // BAGIAN 3A: PROJECT PENGEMBANGAN WEB / IT (GRID KARTU VISUAL)
    // =========================================================================
    projectWeb: [
        {
            judul: "Home Construction, Interior & Finishing Catalog Website",
            teknologi: "PHP / HTML-CSS / Laragon",
            deskripsi: "PHP / HTML-CSS / Laragon",
            gambar: "assets/cert/project 1.png",
            demoLink: "#lightbox-project1", // Ganti dengan link demo / GitHub jika ada
            detailCatatan: ""
        },
        {
            judul: "Personal Asset Management Web Application",
            teknologi: "Laravel / Laragon",
            deskripsi: "Laravel / Laragon",
            gambar: "assets/cert/project 2.png",
            demoLink: "",
            detailCatatan: ""
        },
        {
            judul: "website-based student registration",
            teknologi: "HTML-CSS / MySql",
            deskripsi: "HTML-CSS / MySQL",
            gambar: "assets/cert/project 3.jpg",
            demoLink: "",
            detailCatatan: ""
        }
    ],


    // =========================================================================
    // BAGIAN 3B: CONTOH PEKERJAAN ADMINISTRASI (2023 - SEKARANG)
    // =========================================================================
    contohAdministrasi: [
        {
            peran: "Purchasing",
            perusahaan: "PT Jakarta Allum Foil",
            periode: "2026 - Sekarang",
            ikon: "fa-cart-shopping",
           // Opsional: screenshot contoh format (data sensitif disamarkan)
            poin: [
                "Format penyusunan Purchase Order (PO)",
                "Rekap koordinasi supplier",
                "Alur verifikasi tagihan"
            ]
        },
        {
            peran: "Finance & Administrasi",
            perusahaan: "CV Zelins Indonesia",
            periode: "2023 - Sekarang",
            ikon: "fa-calculator",
             // Opsional: screenshot template (data sensitif disamarkan)
            poin: [
                "Template pencatatan transaksi harian",
                "Invoicing",
                "Ringkasan laporan keuangan berkala (data sensitif disamarkan)"
            ]
        }
    ],

    // =========================================================================
    // BAGIAN 4: SERTIFIKASI (HIGHLIGHT BNSP + GALERI 15 SERTIFIKAT)
    // =========================================================================
   sertifikatUtama: {
        badge: "Sertifikat Utama • Highlight",
        judul: "Sertifikasi Kompetensi BNSP Bidang Pemrogram",
        penerbit: "Badan Nasional Sertifikasi Profesi (BNSP)",
        masaBerlaku: "Masa Berlaku: 2025 - 2028",
        filePdf: "assets/cert/BNSP.pdf",
        gambar: "assets/cert/bnsp.jpg",
        deskripsi: "Sertifikasi kompetensi resmi bidang pemrograman dengan masa berlaku 2025 - 2028."
    },

    // Kategori tab: "Pemrograman / IT", "Administrasi & Keuangan", "Umum"
    sertifikatGaleri: [
        { nomor: 1, judul: "Certificate Of Achievement", penerbit: "01", tahun: "2025",kategori: "Toefl", gambar: "assets/cert/sertifikat toefl.jpg" },
        { nomor: 2, judul: "Sertifikat Pengabdian Kepada Masyarakat", penerbit: " 02", tahun: "2024", kategori: "PKM", gambar: "assets/cert/sertifikat pkm.jpg" },
        { nomor: 3, judul: "Sertifikat Masa Depan Development", penerbit: "03", tahun: "2025", kategori: "", gambar: "assets/cert/sertifikat 1.jpg" },
        { nomor: 4, judul: "Sertifikat AI as Smart Solution For Indonesia's Future", penerbit: "04", tahun: "2024", kategori: "", gambar: "assets/cert/sertifikat 4.png" },
        { nomor: 5, judul: "Sertifikat Digital Enterpeneurship Innovation", penerbit: "05", tahun: "2024", kategori: "", gambar: "assets/cert/sertifikat 5.png" },

        { nomor: 6, judul: "Sertifikat Persuasive Technology and Gamification To Sustain Positive Change", penerbit: "06", tahun: "2023", kategori: "Administrasi & Keuangan", gambar: "assets/cert/sertifikat 6.png" },
        { nomor: 7, judul: "Sertifikat The Power of AI Systems For Brings Indonesia To The Industry 5.0", penerbit: "07", tahun: "2023", kategori: "", gambar: "assets/cert/sertifikat 7.png" },
        { nomor: 8, judul: "Sertifikat Webinar Series 139 - Code To Career Global", penerbit: "08", tahun: "2026", kategori: "", gambar: "assets/cert/sertifikat 8.jpg" },
        { nomor: 9, judul: "Sertifikat Beyond Technical Skills", penerbit: "09", tahun: "2025", kategori: "", gambar: "assets/cert/sertifikat 9.png" },

    ]
};  