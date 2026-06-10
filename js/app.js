/**
 * Gunung Padang Virtual Heritage
 * Main Application Script (SPA Router & Coordinators)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icon Pack
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Dismiss Loading Screen
    const appLoader = document.getElementById('app-loader');
    if (appLoader) {
        // Allow the loading animation to complete smoothly
        setTimeout(() => {
            appLoader.style.opacity = '0';
            appLoader.style.pointerEvents = 'none';
            setTimeout(() => {
                appLoader.style.display = 'none';
            }, 500);
        }, 1800);
    }

    // 3. SPA Routing & View Toggle System
    const navItems = document.querySelectorAll('.nav-item, .btn-tour-trigger');
    const views = document.querySelectorAll('.app-view');

    function switchView(viewId) {
        // Clean up ID (remove hash if present)
        const cleanId = viewId.replace('#', '');
        const targetView = document.getElementById(`view-${cleanId}`);

        if (targetView) {
            // Remove active classes
            views.forEach(v => v.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-view') === cleanId) {
                    item.classList.add('active');
                }
            });

            // Set target active
            targetView.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Handle Nav Clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const viewAttr = item.getAttribute('data-view') || item.getAttribute('href').replace('#', '');
            if (viewAttr) {
                e.preventDefault();
                switchView(viewAttr);
                // Update Address Bar Hash
                window.location.hash = viewAttr;
                // Close Mobile Nav if open
                const mainNav = document.querySelector('.main-nav');
                if (mainNav) mainNav.classList.remove('active');
            }
        });
    });

    // Handle Browser Back/Forward navigation via Hash
    window.addEventListener('hashchange', () => {
        if (window.location.hash) {
            switchView(window.location.hash);
        } else {
            switchView('beranda');
        }
    });

    // Initial load route checking
    if (window.location.hash) {
        switchView(window.location.hash);
    }

    // 4. Header Scroll Behaviors (Sticky & Transparent states)
    const header = document.querySelector('.app-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 5. Mobile Menu Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileNavToggle.querySelector('i');
            if (icon) {
                if (mainNav.classList.contains('active')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }
        });
    }

    // 6. Search Panel Toggle
    const searchToggle = document.querySelector('.search-toggle');
    const searchDropdown = document.querySelector('.search-dropdown');
    if (searchToggle && searchDropdown) {
        searchToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            searchDropdown.classList.toggle('hidden');
            if (!searchDropdown.classList.contains('hidden')) {
                searchDropdown.querySelector('input').focus();
            }
        });

        // Close search panel on clicking outside
        document.addEventListener('click', (e) => {
            if (!searchDropdown.contains(e.target) && e.target !== searchToggle) {
                searchDropdown.classList.add('hidden');
            }
        });
    }

    // 7. Video presentation play trigger
    const btnPlayVideo = document.getElementById('btn-play-video');
    const videoThumbnail = document.querySelector('.video-thumbnail');
    const videoPlayerWrapper = document.querySelector('.video-player-wrapper');
    if (btnPlayVideo && videoThumbnail && videoPlayerWrapper) {
        btnPlayVideo.addEventListener('click', () => {
            videoThumbnail.classList.add('hidden');
            videoPlayerWrapper.classList.remove('hidden');
            
            // Simulating loading video channel
            const loader = videoPlayerWrapper.querySelector('.player-loader');
            const progress = videoPlayerWrapper.querySelector('.player-progress');
            
            setTimeout(() => {
                if (loader) loader.classList.add('hidden');
                // Simulate playing state
                let playPercent = 0;
                const playInterval = setInterval(() => {
                    playPercent += 0.5;
                    if (progress) progress.style.width = `${playPercent}%`;
                    if (playPercent >= 100) {
                        clearInterval(playInterval);
                    }
                }, 100);
            }, 2000);
        });
    }

    // 8. Language Toggle Simulation
    const langToggleBtn = document.querySelector('.lang-toggle-btn');
    let currentLang = 'ID';
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ID' ? 'EN' : 'ID';
            langToggleBtn.textContent = currentLang === 'ID' ? 'ID/EN' : 'EN/ID';
            
            // Notification or visual state changes
            showToastMessage(currentLang === 'ID' ? 'Bahasa diubah ke Indonesia' : 'Language switched to English');
        });
    }

    // Utility Toast Message
    function showToastMessage(message) {
        const toast = document.createElement('div');
        toast.className = 'bg-glass border-gold';
        toast.style.position = 'fixed';
        toast.style.bottom = '100px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '30px';
        toast.style.fontSize = '0.8rem';
        toast.style.color = '#D4AF37';
        toast.style.zIndex = '999';
        toast.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
        toast.style.transition = 'opacity 0.3s ease';
        toast.textContent = message;

        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    // 9. Initialize all modules once on startup
    if (window.initVirtualTour) window.initVirtualTour();
    if (window.initKoleksi) window.initKoleksi();
    if (window.initTimeline) window.initTimeline();
});
