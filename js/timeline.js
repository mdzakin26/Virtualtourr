/**
 * Gunung Padang Virtual Heritage
 * Timeline & Scientific Publications Module
 */

(function() {
    function initTimeline() {
        const navPoints = document.querySelectorAll('.nav-point');
        const timelineCards = document.querySelectorAll('.timeline-card');
        const progressFill = document.querySelector('.timeline-progress-fill');
        const downloadBtns = document.querySelectorAll('.pub-download-btn');
        const galleryTabs = document.querySelectorAll('.gallery-tab');
        const galleryItems = document.querySelectorAll('.gallery-item');

        // 1. Timeline Navigation
        navPoints.forEach(point => {
            point.addEventListener('click', () => {
                const index = parseInt(point.getAttribute('data-index'), 10);
                setActiveTimelineIndex(index);
            });
        });

        function setActiveTimelineIndex(index) {
            // Update nav point classes
            navPoints.forEach(p => {
                const pIndex = parseInt(p.getAttribute('data-index'), 10);
                if (pIndex <= index) {
                    p.classList.add('active');
                } else {
                    p.classList.remove('active');
                }
            });

            // Calculate progress fill percentage
            const percentage = (index / (navPoints.length - 1)) * 100;
            if (progressFill) {
                // Determine orientation based on desktop vs mobile (vertical vs horizontal)
                const isMobile = window.innerWidth <= 768;
                if (isMobile) {
                    progressFill.style.width = '100%';
                    progressFill.style.height = `${percentage}%`;
                } else {
                    progressFill.style.height = '100%';
                    progressFill.style.width = `${percentage}%`;
                }
            }

            // Show active card
            timelineCards.forEach(card => {
                const cardIndex = parseInt(card.getAttribute('data-index'), 10);
                if (cardIndex === index) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        }

        // Handle window resizing to adjust progress line orientation
        window.addEventListener('resize', () => {
            const activePoint = document.querySelector('.nav-point.active:last-of-type');
            if (activePoint) {
                const activeIndex = parseInt(activePoint.getAttribute('data-index'), 10);
                setActiveTimelineIndex(activeIndex);
            }
        });

        // 2. Publication PDF Download Simulator
        downloadBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('downloading')) return;

                btn.classList.add('downloading');
                const originalText = btn.innerHTML;
                const docType = btn.getAttribute('data-doc');
                let progress = 0;

                const downloadInterval = setInterval(() => {
                    progress += 10;
                    btn.innerHTML = `<i data-lucide="loader" class="spin"></i> Mengunduh ${progress}%`;
                    if (typeof lucide !== 'undefined') lucide.createIcons();

                    if (progress >= 100) {
                        clearInterval(downloadInterval);
                        btn.innerHTML = `<i data-lucide="check"></i> Selesai!`;
                        btn.style.backgroundColor = '#2e7559';
                        btn.style.borderColor = '#4ade80';
                        if (typeof lucide !== 'undefined') lucide.createIcons();

                        setTimeout(() => {
                            btn.innerHTML = originalText;
                            btn.classList.remove('downloading');
                            btn.style.backgroundColor = '';
                            btn.style.borderColor = '';
                            if (typeof lucide !== 'undefined') lucide.createIcons();
                            
                            // Simulate alert reader opening
                            showMockDocReader(docType);
                        }, 1500);
                    }
                }, 200);
            });
        });

        function showMockDocReader(docType) {
            const docTitles = {
                'carbon_dating': 'Analisis Penanggalan Karbon Lapisan Teras II - Dr. Danny Hilman',
                'reconstruction': 'Rekonstruksi Arsitektur Struktur Megalithikum - Ali Akbar'
            };

            const title = docTitles[docType] || 'Dokumen Penelitian';
            
            // Create a temporary mock reader window overlay
            const readerOverlay = document.createElement('div');
            readerOverlay.className = 'modal-overlay active';
            readerOverlay.style.zIndex = '2100';

            readerOverlay.innerHTML = `
                <div class="modal-content bg-glass border-gold p-8 max-w-2xl text-center" style="margin: auto;">
                    <h3 class="font-serif text-gold text-lg mb-4">${title}</h3>
                    <div class="mock-document-body" style="background-color:#000; border:1px solid #1f1f23; border-radius:4px; height:250px; overflow-y:auto; padding:20px; font-family:monospace; text-align:left; font-size:0.75rem; color:#8ab4f8; line-height:1.4;">
                        [MOCK PDF READER INSTANTIATED]<br>
                        -----------------------------------------<br>
                        DOKUMEN PENELITIAN CAGAR BUDAYA CIANJUR<br>
                        METODE: ACCELERATOR MASS SPECTROMETRY (AMS)<br>
                        SAMPEL: KEDALAMAN TANAH TERAS II - CORE GP2A<br>
                        -----------------------------------------<br><br>
                        HASIL PENELITIAN RADIOMETRIK KADAR SILIKA:<br>
                        1. Lapisan 1 (0-3 meter): ~500 SM - 100 M<br>
                        2. Lapisan 2 (3-7 meter): ~4700 SM - 5200 SM<br>
                        3. Lapisan 3 (7-15 meter): ~9500 SM - 11000 SM<br><br>
                        KESIMPULAN RISET:<br>
                        Rangkaian pengujian radiokarbon sedimen tanah di bawah balok kekar columnar jointing membuktikan adanya pengerjaan berkala multitahap di Gunung Padang. Lapisan kedua mengonfirmasi struktur bebatuan didirikan jauh sebelum sejarah megalitik tertua yang tercatat di nusantara...
                    </div>
                    <button class="btn btn-primary mt-6 btn-close-reader">Tutup Pembaca Jurnal</button>
                </div>
            `;

            document.body.appendChild(readerOverlay);

            readerOverlay.querySelector('.btn-close-reader').addEventListener('click', () => {
                readerOverlay.style.opacity = '0';
                setTimeout(() => readerOverlay.remove(), 300);
            });
        }

        // 3. Multimedia Gallery Tab Switcher
        galleryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                galleryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const filter = tab.getAttribute('data-gallery');

                galleryItems.forEach(item => {
                    const itemType = item.getAttribute('data-type');
                    if (filter === 'all' || itemType === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Export
    window.initTimeline = initTimeline;
})();
