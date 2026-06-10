/**
 * Gunung Padang Virtual Heritage
 * Virtual Tour Controller Module
 */

(function() {
    let currentZoom = 1;
    let isMuted = true;
    let audioContext = null;
    let ambientOscillators = [];
    let ambientGain = null;

    // Define hotspot locations per terrace
    const terraceHotspots = {
        0: [ // Gerbang Masuk
            { id: 'pos-1', label: 'Gerbang Masuk Utama', text: 'Pintu gerbang dasar menuju pendakian situs punden berundak Gunung Padang.', top: '65%', left: '48%', reg: 'GP-009' }
        ],
        1: [ // Tangga Utama
            { id: 'pos-2', label: 'Tangga Purba', text: 'Tanjakan terjal setinggi 110 meter dengan kemiringan hingga 45 derajat berbahan batu andesit purbakala.', top: '55%', left: '50%', reg: 'GP-010' }
        ],
        2: [ // Teras 1
            { id: 'pos-3', label: 'Columnar Jointing', text: 'Penyusunan balok-balok andesit secara horizontal sebagai fondasi tebing teras pertama.', top: '48%', left: '35%', reg: 'GP-001' }
        ],
        3: [ // Teras 2
            { id: 'pos-4', label: 'Teras II (Pusat)', text: 'Pusat area upacara pemujaan megalitik kuno dengan densitas struktur batu tertinggi.', top: '40%', left: '74%', reg: 'GP-502' },
            { id: 'pos-5', label: 'Andesit Berukir', text: 'Balok andesit berornamen goresan melingkar yang ditemukan di sudut teras kedua.', top: '42%', left: '25%', reg: 'GP-042' }
        ],
        4: [ // Teras 3
            { id: 'pos-6', label: 'Batu Kujang', text: 'Batuan andesit berukir yang mirip senjata kujang, berada di teras ketiga.', top: '46%', left: '50%', reg: 'GP-003' }
        ],
        5: [ // Teras 4
            { id: 'pos-7', label: 'Teras IV', text: 'Teras tinggi teratas yang mengarah ke mahkota puncak punden berundak Gunung Padang.', top: '38%', left: '60%', reg: 'GP-010' }
        ]
    };

    function initVirtualTour() {
        const viewport = document.getElementById('tour-viewport');
        const zoomInBtn = document.getElementById('btn-zoom-in');
        const zoomOutBtn = document.getElementById('btn-zoom-out');
        const fullscreenBtn = document.getElementById('btn-fullscreen');
        const soundBtn = document.getElementById('btn-sound-guide');
        const minimapToggle = document.getElementById('btn-toggle-minimap');
        const minimapContainer = document.querySelector('.minimap-container');
        const minimapDot = document.getElementById('minimap-dot');
        const terraceBtns = document.querySelectorAll('.terrace-nav-btn');

        if (!viewport) return;

        // 1. Zoom Controls
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => {
                if (currentZoom < 1.6) {
                    currentZoom += 0.15;
                    updateViewportTransform();
                }
            });
        }

        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => {
                if (currentZoom > 1.0) {
                    currentZoom -= 0.15;
                    updateViewportTransform();
                }
            });
        }

        function updateViewportTransform() {
            viewport.style.transform = `scale(${currentZoom})`;
            viewport.style.transformOrigin = 'center center';
        }

        // 2. Fullscreen Control
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                const tourSection = document.getElementById('view-tour');
                if (!document.fullscreenElement) {
                    tourSection.requestFullscreen().catch(err => {
                        console.error(`Gagal masuk layar penuh: ${err.message}`);
                    });
                    fullscreenBtn.innerHTML = '<i data-lucide="minimize"></i>';
                } else {
                    document.exitFullscreen();
                    fullscreenBtn.innerHTML = '<i data-lucide="maximize"></i>';
                }
                if (typeof lucide !== 'undefined') lucide.createIcons();
            });
        }

        // 3. Sound Guide Ambient Generator (Web Audio Synth)
        if (soundBtn) {
            soundBtn.addEventListener('click', () => {
                isMuted = !isMuted;
                if (!isMuted) {
                    startAmbientSound();
                    soundBtn.innerHTML = '<i data-lucide="volume-2"></i>';
                    soundBtn.classList.add('btn-active');
                } else {
                    stopAmbientSound();
                    soundBtn.innerHTML = '<i data-lucide="volume-x"></i>';
                    soundBtn.classList.remove('btn-active');
                }
                if (typeof lucide !== 'undefined') lucide.createIcons();
            });
        }

        function startAmbientSound() {
            try {
                // Initialize audio context
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                }
                
                if (audioContext.state === 'suspended') {
                    audioContext.resume();
                }

                // Master gain
                ambientGain = audioContext.createGain();
                ambientGain.gain.setValueAtTime(0.08, audioContext.currentTime);
                ambientGain.connect(audioContext.destination);

                // 1. Wind synthesis (Low frequency noise + Bandpass sweep)
                const bufferSize = 2 * audioContext.sampleRate;
                const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
                const output = noiseBuffer.getChannelData(0);
                
                for (let i = 0; i < bufferSize; i++) {
                    output[i] = Math.random() * 2 - 1;
                }

                const whiteNoise = audioContext.createBufferSource();
                whiteNoise.buffer = noiseBuffer;
                whiteNoise.loop = true;

                const filter = audioContext.createBiquadFilter();
                filter.type = 'bandpass';
                filter.Q.value = 3.0;
                filter.frequency.value = 350;

                whiteNoise.connect(filter);
                filter.connect(ambientGain);
                whiteNoise.start();

                // LFO to sweep wind frequency slowly
                const lfo = audioContext.createOscillator();
                lfo.frequency.value = 0.05; // 20 seconds loop
                const lfoGain = audioContext.createGain();
                lfoGain.gain.value = 150;
                
                lfo.connect(lfoGain);
                lfoGain.connect(filter.frequency);
                lfo.start();

                // 2. Cricket pitch synth
                const cricketInterval = setInterval(() => {
                    if (isMuted || !audioContext) {
                        clearInterval(cricketInterval);
                        return;
                    }
                    playCricketChirp();
                }, 4000);

                ambientOscillators.push(whiteNoise, lfo);
            } catch (e) {
                console.error("Web Audio API not supported or failed to initialize", e);
            }
        }

        function playCricketChirp() {
            if (!audioContext) return;
            const now = audioContext.currentTime;
            
            // Generate multiple small high pitch bursts
            for (let pulse = 0; pulse < 3; pulse++) {
                const startTime = now + (pulse * 0.1);
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(4200, startTime);
                osc.frequency.exponentialRampToValueAtTime(4000, startTime + 0.06);
                
                gain.gain.setValueAtTime(0, startTime);
                gain.gain.linearRampToValueAtTime(0.02, startTime + 0.01);
                gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.06);
                
                osc.connect(gain);
                gain.connect(audioContext.destination);
                
                osc.start(startTime);
                osc.stop(startTime + 0.07);
            }
        }

        function stopAmbientSound() {
            ambientOscillators.forEach(osc => {
                try { osc.stop(); } catch (e) {}
            });
            ambientOscillators = [];
            if (ambientGain) {
                ambientGain.disconnect();
                ambientGain = null;
            }
        }

        // 4. Minimap Toggle Collapse
        if (minimapToggle && minimapContainer) {
            if (window.innerWidth <= 768) {
                minimapContainer.classList.add('collapsed');
            }
            minimapToggle.addEventListener('click', () => {
                minimapContainer.classList.toggle('collapsed');
            });
        }

        // 5. Terrace Navigation Switcher
        terraceBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active classes
                terraceBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const terraceId = parseInt(btn.getAttribute('data-terrace'), 10);
                const mapX = btn.getAttribute('data-x');
                const mapY = btn.getAttribute('data-y');

                // Update Background visual environment
                switchTerraceEnvironment(terraceId, mapX, mapY);
            });
        });

        function switchTerraceEnvironment(terraceId, x, y) {
            // Update minimap indicator position
            if (minimapDot) {
                minimapDot.style.left = x;
                minimapDot.style.top = y;
            }

            // Transition viewport image
            if (viewport) {
                viewport.style.opacity = '0.5';
                setTimeout(() => {
                    // Update image source based on terrace ID (simulated panorama levels)
                    if (terraceId === 0 || terraceId === 1) {
                        viewport.style.backgroundImage = "url('assets/images/hero_bg.png')";
                    } else if (terraceId === 2) {
                        viewport.style.backgroundImage = "url('assets/images/topography.png')";
                    } else {
                        viewport.style.backgroundImage = "url('assets/images/tour_bg.png')";
                    }
                    viewport.style.opacity = '1';
                    
                    // Render relevant hotspots
                    renderHotspotsForTerrace(terraceId);
                }, 300);
            }
        }

        // 6. Dynamically render hotspots
        function renderHotspotsForTerrace(terraceId) {
            // Remove existing hotspots
            const existingHotspots = viewport.querySelectorAll('.hotspot');
            existingHotspots.forEach(h => h.remove());

            const list = terraceHotspots[terraceId] || [];
            list.forEach(item => {
                const hotspotEl = document.createElement('div');
                hotspotEl.className = 'hotspot pulse-animation';
                hotspotEl.style.top = item.top;
                hotspotEl.style.left = item.left;
                hotspotEl.setAttribute('data-hotspot', item.id);
                hotspotEl.setAttribute('title', item.label);

                hotspotEl.innerHTML = `
                    <div class="hotspot-trigger">
                        <i data-lucide="plus"></i>
                    </div>
                    <div class="hotspot-card">
                        <h4>${item.label}</h4>
                        <p>${item.text}</p>
                        <button class="btn-hotspot-detail" data-target="${item.reg}">Lihat Detail</button>
                    </div>
                `;

                viewport.appendChild(hotspotEl);
            });

            // Bind click listeners on the newly added detail buttons
            viewport.querySelectorAll('.btn-hotspot-detail').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const regId = btn.getAttribute('data-target');
                    if (window.openCollectionModal) {
                        window.openCollectionModal(regId);
                    }
                });
            });

            if (typeof lucide !== 'undefined') lucide.createIcons();
        }

        // Initial setup for default terrace (0: Gerbang)
        renderHotspotsForTerrace(0);
    }

    // Export module functions globally
    window.initVirtualTour = initVirtualTour;
    window.ambientStopGlobal = stopAmbientSound;
})();
