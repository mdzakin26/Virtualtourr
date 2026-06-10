/**
 * Gunung Padang Virtual Heritage
 * Digital Archive & Collection Module
 */

(function() {
    // Database of Megalithic Artifacts & Structures
    const artifactDatabase = {
        'GP-001': {
            reg: 'GP-001',
            title: 'Columnar Jointing (Kekar Lembar)',
            category: 'andesit',
            categoryName: 'Batu Andesit',
            img: 'assets/images/columnar_joint.png',
            location: 'Teras 1 & Sisi Tebing',
            era: 'Megalitikum (~5000 SM)',
            material: 'Batuan Beku Basaltik / Andesit',
            desc: 'Struktur batuan beku alami dengan potongan penampang berbentuk poligonal (segi lima/enam) yang terbentuk akibat kontraksi pendinginan lava gunung berapi purba. Di Gunung Padang, batuan ini didirikan tegak atau ditumpuk mendatar oleh peradaban purba untuk menahan erosi tanah bukit dan menyusun susunan dinding punden berundak.',
            svgBlueprint: `
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                    <rect x="0" y="0" width="200" height="200" fill="#0c1624" />
                    <!-- Grid Lines -->
                    <line x1="0" y1="50" x2="200" y2="50" stroke="#1c304d" stroke-dasharray="2,2"/>
                    <line x1="0" y1="100" x2="200" y2="100" stroke="#1c304d" stroke-dasharray="2,2"/>
                    <line x1="0" y1="150" x2="200" y2="150" stroke="#1c304d" stroke-dasharray="2,2"/>
                    <line x1="50" y1="0" x2="50" y2="200" stroke="#1c304d" stroke-dasharray="2,2"/>
                    <line x1="100" y1="0" x2="100" y2="200" stroke="#1c304d" stroke-dasharray="2,2"/>
                    <line x1="150" y1="0" x2="150" y2="200" stroke="#1c304d" stroke-dasharray="2,2"/>
                    
                    <!-- Columnar shape drawings -->
                    <polygon points="100,30 140,50 140,140 100,165 60,140 60,50" fill="none" stroke="#d4af37" stroke-width="2"/>
                    <line x1="100" y1="30" x2="100" y2="165" stroke="#d4af37" stroke-dasharray="4,2" />
                    
                    <!-- Dimensions annotations -->
                    <line x1="50" y1="180" x2="150" y2="180" stroke="#00bcd4" stroke-width="1"/>
                    <polygon points="50,180 55,177 55,183" fill="#00bcd4"/>
                    <polygon points="150,180 145,177 145,183" fill="#00bcd4"/>
                    <text x="100" y="195" fill="#00bcd4" font-size="8" text-anchor="middle">LEBAR: ~40-60 cm</text>
                    
                    <line x1="30" y1="50" x2="30" y2="140" stroke="#00bcd4" stroke-width="1"/>
                    <polygon points="30,50 27,55 33,55" fill="#00bcd4"/>
                    <polygon points="30,140 27,135 33,135" fill="#00bcd4"/>
                    <text x="20" y="100" fill="#00bcd4" font-size="8" text-anchor="middle" transform="rotate(-90 20 100)">PANJANG: ~1.5 - 2.5 m</text>
                    
                    <text x="100" y="20" fill="#FFF" font-size="10" text-anchor="middle">PROYEKSI STRUKTUR SEGILIMA</text>
                </svg>
            `
        },
        'GP-502': {
            reg: 'GP-502',
            title: 'Struktur Teras II (Area Ritual)',
            category: 'struktur',
            categoryName: 'Struktur Teras',
            img: 'assets/images/tour_bg.png',
            location: 'Teras Utama Tingkat 2',
            era: 'Megalitikum (Koreksi Karbon)',
            material: 'Formasi Andesit Poligonal',
            desc: 'Situs teras kedua merupakan area yang paling menonjol karena memiliki formasi pilar batu berdiri (menhir) terbanyak. Terdapat sisa reruntuhan batu mahkota altar utama yang diposisikan menghadap lurus ke arah Puncak Gunung Gede. Para arkeolog menduga area ini digunakan sebagai ritual astronomi penentuan musim.',
            svgBlueprint: `
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                    <rect x="0" y="0" width="200" height="200" fill="#0c1624" />
                    <!-- Grid -->
                    <line x1="0" y1="100" x2="200" y2="100" stroke="#1c304d" stroke-dasharray="2,2"/>
                    <line x1="100" y1="0" x2="100" y2="200" stroke="#1c304d" stroke-dasharray="2,2"/>
                    
                    <!-- Top view diagram of terrace layers -->
                    <rect x="30" y="40" width="140" height="120" fill="none" stroke="#d4af37" stroke-width="1.5"/>
                    <rect x="50" y="60" width="100" height="80" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3"/>
                    
                    <!-- Menhirs locations -->
                    <circle cx="60" cy="70" r="4" fill="#00bcd4" />
                    <circle cx="140" cy="70" r="4" fill="#00bcd4" />
                    <circle cx="100" cy="100" r="6" fill="#d4af37" />
                    
                    <text x="100" y="125" fill="#d4af37" font-size="8" text-anchor="middle">MAHKOTA ALTAR</text>
                    <text x="60" y="55" fill="#00bcd4" font-size="6" text-anchor="middle">MENHIR 1</text>
                    <text x="140" y="55" fill="#00bcd4" font-size="6" text-anchor="middle">MENHIR 2</text>
                    
                    <!-- Angle lines pointing to Gunung Gede -->
                    <line x1="100" y1="100" x2="100" y2="10" stroke="#ff5722" stroke-width="1.5" stroke-dasharray="4,2"/>
                    <polygon points="100,10 96,18 104,18" fill="#ff5722"/>
                    <text x="110" y="25" fill="#ff5722" font-size="7">ARAH GUNUNG GEDE (UTARA)</text>
                </svg>
            `
        },
        'GP-003': {
            reg: 'GP-003',
            title: 'Batu Kujang (Pre-Weapon Stone)',
            category: 'artefak',
            categoryName: 'Artefak',
            img: 'assets/images/batu_kujang.png',
            location: 'Kemiringan Bukit Teras 3',
            era: 'Perkiraan ~3000 SM',
            material: 'Batu Andesit Terkikis Alami',
            desc: 'Temuan batu lepas bermaterial andesit dengan relief bentuk melengkung menyerupai pisau/kujang pusaka Jawa Barat. Ada perdebatan di kalangan peneliti apakah batu ini dipahat secara sengaja oleh manusia purba sebagai ornamen ritual atau sekadar pelapukan alamiah batuan columnar jointing.',
            svgBlueprint: `
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                    <rect x="0" y="0" width="200" height="200" fill="#0c1624" />
                    <!-- Outline shape of Batu Kujang -->
                    <path d="M 120 40 C 110 50, 70 80, 80 120 C 85 140, 110 160, 120 160 C 130 160, 140 140, 135 110 C 130 80, 125 50, 120 40" fill="none" stroke="#d4af37" stroke-width="2"/>
                    <path d="M 80 120 Q 95 105 130 110" fill="none" stroke="#d4af37" stroke-dasharray="2,2"/>
                    
                    <!-- Measurements -->
                    <line x1="60" y1="40" x2="60" y2="160" stroke="#00bcd4" stroke-width="1"/>
                    <text x="50" y="100" fill="#00bcd4" font-size="8" text-anchor="middle" transform="rotate(-90 50 100)">PANJANG: 95 cm</text>
                    
                    <text x="100" y="185" fill="#FFF" font-size="9" text-anchor="middle">RELIEF SIMETRI KELENGKUNGAN</text>
                </svg>
            `
        },
        'GP-010': {
            reg: 'GP-010',
            title: 'Peta Topografi Georadar 3D',
            category: 'dokumentasi',
            categoryName: 'Dokumentasi',
            img: 'assets/images/topography.png',
            location: 'Arsip Riset Mandiri',
            era: 'Riset Modern (2014)',
            material: 'Data Pemindaian Digital',
            desc: 'Hasil pemetaan geofisika menggunakan radar penembus tanah (GPR), seismik tomografi, dan geolistrik. Gambar ini mendeteksi keberadaan lapisan batu columnar jointing yang tersusun rapi hingga kedalaman 15 meter, menyiratkan bahwa bukit ini dibangun di atas struktur kolosal buatan manusia.',
            svgBlueprint: `
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                    <rect x="0" y="0" width="200" height="200" fill="#0c1624" />
                    <!-- Waves representations -->
                    <path d="M 20 60 Q 60 40 100 60 T 180 60" fill="none" stroke="#00bcd4" stroke-width="1.5"/>
                    <path d="M 20 90 Q 60 70 100 90 T 180 90" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,3"/>
                    <path d="M 20 120 Q 60 100 100 120 T 180 120" fill="none" stroke="#e0e0e0" stroke-width="1"/>
                    
                    <!-- Under chamber -->
                    <ellipse cx="100" cy="150" rx="30" ry="12" fill="none" stroke="#ff5722" stroke-width="2"/>
                    <text x="100" y="153" fill="#ff5722" font-size="8" text-anchor="middle">RONGGA BAWAH TANAH</text>
                    
                    <text x="100" y="25" fill="#FFF" font-size="8" text-anchor="middle">REFLEKSI TOMOGRAFI SEISMIK</text>
                </svg>
            `
        },
        'GP-009': {
            reg: 'GP-009',
            title: 'Panorama Puncak Megalitik',
            category: 'udara',
            categoryName: 'Foto Udara',
            img: 'assets/images/hero_bg.png',
            location: 'Ketinggian 885 Mdpl',
            era: 'Pendokumentasian Udara',
            material: 'Foto Udara Orto-Fotogrametri',
            desc: 'Dokumentasi udara bersudut pandang ortografi yang memperlihatkan denah spasial punden berundak Gunung Padang secara penuh. Layout spasial ini menunjukkan sumbu aksial lurus utara-selatan mengarah langsung ke Gunung Gede sebagai poros spiritual kosmis.',
            svgBlueprint: `
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                    <rect x="0" y="0" width="200" height="200" fill="#0c1624" />
                    <!-- Schematic mapping representation -->
                    <polygon points="100,20 170,180 30,180" fill="none" stroke="#d4af37" stroke-width="2"/>
                    <line x1="100" y1="20" x2="100" y2="180" stroke="#ff5722" stroke-width="1"/>
                    
                    <!-- Highlight terraces -->
                    <line x1="75" y1="80" x2="125" y2="80" stroke="#00bcd4" stroke-width="1"/>
                    <line x1="60" y1="120" x2="140" y2="120" stroke="#00bcd4" stroke-width="1"/>
                    <line x1="45" y1="150" x2="155" y2="150" stroke="#00bcd4" stroke-width="1"/>
                    
                    <text x="100" y="192" fill="#FFF" font-size="7" text-anchor="middle">LAYOUT AKSIAL ORIENTASI UTARA-SELATAN</text>
                </svg>
            `
        },
        'GP-042': {
            reg: 'GP-042',
            title: 'Andesit Berukir Kuno',
            category: 'andesit',
            categoryName: 'Batu Andesit',
            img: 'assets/images/andesit_berukir.png',
            location: 'Sudut Teras 2',
            era: 'Megalitikum Purba',
            material: 'Batuan Andesit Gunung',
            desc: 'Sebuah balok batu andesit bertekstur kasar dengan pahatan guratan melingkar spiral di salah satu sisinya. Pahatan ini sangat langka dan membuktikan adanya pengerjaan manual batuan menggunakan perkakas tajam besi/batu pada era megalitik.',
            svgBlueprint: `
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                    <rect x="0" y="0" width="200" height="200" fill="#0c1624" />
                    <!-- Spiral path drawing -->
                    <path d="M 100 100 A 10 10 0 0 0 110 100 A 20 20 0 0 0 90 100 A 30 30 0 0 0 130 100 A 40 40 0 0 0 70 100 A 50 50 0 0 0 150 100" fill="none" stroke="#d4af37" stroke-width="3"/>
                    
                    <text x="100" y="25" fill="#FFF" font-size="9" text-anchor="middle">GORESAN HELIKS SPIRAL DETEKSI</text>
                </svg>
            `
        }
    };

    function initKoleksi() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const searchInput = document.getElementById('archive-search');
        const loadMoreBtn = document.getElementById('btn-load-more');
        const diagramPins = document.querySelectorAll('.diagram-pin');

        // 1. Filter Tabs Clicking
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const filterValue = tab.getAttribute('data-filter');
                filterArchiveCards(filterValue, searchInput ? searchInput.value : '');
            });
        });

        // 2. Text Search Input
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const activeTab = document.querySelector('.filter-tab.active');
                const filterValue = activeTab ? activeTab.getAttribute('data-filter') : 'all';
                filterArchiveCards(filterValue, searchInput.value);
            });
        }

        // Filter Function
        function filterArchiveCards(category, searchQuery) {
            const cards = document.querySelectorAll('.archive-card');
            const query = searchQuery.toLowerCase().trim();

            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const text = card.querySelector('.card-text').textContent.toLowerCase();
                const reg = card.querySelector('.card-reg').textContent.toLowerCase();

                const matchesCategory = (category === 'all' || cardCategory === category);
                const matchesSearch = (title.includes(query) || text.includes(query) || reg.includes(query));

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // 3. Diagram Pins Switcher (Home map-like sync)
        diagramPins.forEach(pin => {
            pin.addEventListener('click', () => {
                diagramPins.forEach(p => p.classList.remove('active'));
                pin.classList.add('active');

                const terraceId = parseInt(pin.getAttribute('data-terrace'), 10);
                
                // Let's filter the archive to show matching terrace items!
                // Since this is a visual showcase, we can map terrace pins to specific categories
                const categoriesMap = {
                    0: 'all',          // Gerbang
                    1: 'dokumentasi',  // Tangga
                    2: 'andesit',      // Teras 1
                    3: 'struktur',     // Teras 2
                    4: 'artefak'       // Teras 3/4
                };
                
                const targetCategory = categoriesMap[terraceId] || 'all';
                
                // Set active tab
                filterTabs.forEach(t => {
                    t.classList.remove('active');
                    if (t.getAttribute('data-filter') === targetCategory) {
                        t.classList.add('active');
                    }
                });
                
                filterArchiveCards(targetCategory, '');
            });
        });

        // 4. Simulated Load More Cards
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                loadMoreBtn.textContent = 'Memuat arsip...';
                loadMoreBtn.disabled = true;

                setTimeout(() => {
                    appendExtraCards();
                    loadMoreBtn.style.display = 'none'; // hide after loading more once
                }, 1200);
            });
        }

        function appendExtraCards() {
            const grid = document.getElementById('archive-grid');
            if (!grid) return;

            // Extra cards to mock database addition
            const extraData = [
                {
                    reg: 'GP-012',
                    title: 'Koin Logam Perunggu Purba',
                    category: 'artefak',
                    categoryName: 'Artefak',
                    img: 'assets/images/batu_kujang.png',
                    desc: 'Fragmen piringan logam mirip koin perunggu yang ditemukan di bawah kedalaman 3 meter di teras kelima, memicu diskusi penanggalan peradaban logam.'
                },
                {
                    reg: 'GP-005',
                    title: 'Batu Lumpang Penumbuk',
                    category: 'artefak',
                    categoryName: 'Artefak',
                    img: 'assets/images/columnar_joint.png',
                    desc: 'Balok andesit berlubang mangkok silinder di bagian atasnya, diduga dipakai oleh hunian pra sejarah untuk menumbuk biji-bijian pangan.'
                },
                {
                    reg: 'GP-080',
                    title: 'Semen Purba Pengikat Batuan',
                    category: 'dokumentasi',
                    categoryName: 'Dokumentasi',
                    img: 'assets/images/topography.png',
                    desc: 'Material perekat setebal 2 cm yang menyatukan celah balok columnar jointing. Komposisi zat silika menunjukkan semen buatan pembuat kuno.'
                }
            ];

            extraData.forEach(item => {
                // Register in the database dynamically
                artifactDatabase[item.reg] = {
                    reg: item.reg,
                    title: item.title,
                    category: item.category,
                    categoryName: item.categoryName,
                    img: item.img,
                    location: 'Teras 5 (Mahkota Puncak)',
                    era: 'Perunggu / Neolitikum',
                    material: 'Basalt / Logam Campuran',
                    desc: item.desc,
                    svgBlueprint: `
                        <svg viewBox="0 0 200 200" width="100%" height="100%">
                            <rect x="0" y="0" width="200" height="200" fill="#0c1624" />
                            <circle cx="100" cy="100" r="50" fill="none" stroke="#d4af37" stroke-width="2"/>
                            <text x="100" y="105" fill="#d4af37" font-size="10" text-anchor="middle">REG: ${item.reg}</text>
                        </svg>
                    `
                };

                const cardEl = document.createElement('div');
                cardEl.className = 'archive-card';
                cardEl.setAttribute('data-category', item.category);
                
                cardEl.innerHTML = `
                    <div class="card-badge">${item.categoryName}</div>
                    <div class="card-img-container">
                        <img src="${item.img}" alt="${item.title}">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <p class="card-text text-muted">${item.desc}</p>
                        <div class="card-footer-info">
                            <span class="card-reg">REG: ${item.reg}</span>
                            <button class="btn-link-detail" data-target="${item.reg}">Lihat Detail <i data-lucide="arrow-up-right"></i></button>
                        </div>
                    </div>
                `;

                grid.appendChild(cardEl);
            });

            // Re-bind click events for newly created cards
            bindCardDetailTriggers();

            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    }

    // 5. Modal Controllers
    const modal = document.getElementById('collection-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
    const modalTabPanes = document.querySelectorAll('.modal-tab-pane');

    function openCollectionModal(regId) {
        const data = artifactDatabase[regId];
        if (!data || !modal) return;

        // Populate Modal Fields
        document.getElementById('modal-artifact-img').src = data.img;
        document.getElementById('modal-artifact-img').alt = data.title;
        document.getElementById('modal-blueprint-svg').innerHTML = data.svgBlueprint;
        document.getElementById('modal-category').textContent = data.categoryName;
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-reg-code').textContent = data.reg;
        document.getElementById('modal-location').textContent = data.location;
        document.getElementById('modal-era').textContent = data.era;
        document.getElementById('modal-material').textContent = data.material;
        document.getElementById('modal-desc').textContent = data.desc;

        // Reset default tabs active
        modalTabBtns.forEach(b => b.classList.remove('active'));
        modalTabPanes.forEach(p => p.classList.remove('active'));
        document.querySelector('[data-tab="real"]').classList.add('active');
        document.getElementById('pane-real').classList.add('active');

        // Open modal
        modal.classList.add('active');
    }

    function closeCollectionModal() {
        if (modal) modal.classList.remove('active');
    }

    // Bind card triggers globally helper
    function bindCardDetailTriggers() {
        document.querySelectorAll('.btn-link-detail, .btn-hotspot-detail').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const regId = btn.getAttribute('data-target');
                openCollectionModal(regId);
            });
        });
    }

    // Initialize Event Listeners for existing cards
    document.addEventListener('DOMContentLoaded', () => {
        bindCardDetailTriggers();

        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', closeCollectionModal);
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeCollectionModal();
            });
        }

        // Modal visual tab toggle
        modalTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modalTabBtns.forEach(b => b.classList.remove('active'));
                modalTabPanes.forEach(p => p.classList.remove('active'));
                
                btn.classList.add('active');
                const paneId = btn.getAttribute('data-tab');
                document.getElementById(`pane-${paneId}`).classList.add('active');
            });
        });

        // Tanyakan ke Nalar Padang AI integration
        const btnAskAi = document.getElementById('btn-modal-ask-ai');
        if (btnAskAi) {
            btnAskAi.addEventListener('click', () => {
                const title = document.getElementById('modal-title').textContent;
                closeCollectionModal();

                // Open chatbot floating widget and trigger a simulated question
                if (window.triggerChatbotInquiry) {
                    window.triggerChatbotInquiry(`Jelaskan sejarah dan hasil penelitian terbaru mengenai ${title}.`);
                }
            });
        }
    });

    // Exports
    window.initKoleksi = initKoleksi;
    window.openCollectionModal = openCollectionModal;
})();
