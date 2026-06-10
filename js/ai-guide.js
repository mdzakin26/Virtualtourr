/**
 * Gunung Padang Virtual Heritage
 * Nalar Padang AI Chatbot Module
 */

(function() {
    // Knowledge Base responses mapping keywords
    const responseKB = {
        'sejarah': 'Situs Gunung Padang dilaporkan pertama kali oleh Nicolaas Johannes Krom (arkeolog Belanda) pada tahun 1914. Berbentuk punden berundak megalitik peninggalan zaman perunggu, situs ini sempat tertutup semak belukar tebal sebelum mulai diteliti serius sejak tahun 1979 oleh Pusat Penelitian Arkeologi Nasional.',
        'usia': 'Penelitian radiokarbon (carbon dating) yang dipimpin oleh Tim Terpadu Riset Mandiri (TTRM) menunjukkan sampel kedalaman tanah di bawah batuan situs ini memiliki umur berkisar antara 5.000 hingga 20.000 tahun SM. Jika terverifikasi secara penuh oleh komunitas sains global, ini bisa menjadikannya salah satu struktur bangunan tertua di dunia, melampaui Piramida Giza.',
        'kontroversi': 'Kontroversi utama terletak pada perbedaan pendapat antara Tim Terpadu Riset Mandiri (yang menduga situs ini buatan manusia berlapis-lapis hingga kedalaman 15 meter) dengan arkeolog tradisional (yang meyakini struktur di kedalaman bawah tanah adalah bentukan geologi alami, sedangkan buatan manusia hanyalah punden berundak di permukaan luar).',
        'kunjungan': 'Gunung Padang dapat dikunjungi setiap hari pukul 08.00 - 17.00 WIB. Terletak di Karyamukti, Campaka, Kabupaten Cianjur. Tiket masuk berkisar Rp 5.000 - Rp 10.000. Dari parkir utama, Anda perlu mendaki sekitar 370 anak tangga batu terjal untuk sampai ke pelataran teras pertama.',
        'teras': 'Gunung Padang tersusun atas 5 tingkat teras utama. Teras 1 (terluas) berada di bagian paling bawah. Teras 2 memiliki mahkota altar pusat. Teras 3 dan 4 dipenuhi susunan tiang columnar jointing vertikal. Teras 5 adalah teras puncak tertinggi yang dianggap paling sakral oleh peradaban pembuatnya.',
        'columnar': 'Columnar Jointing (batuan kekar kolom) adalah formasi batuan andesit basaltis bersisi lima atau enam yang terbentuk secara alami akibat pembekuan magma gunung purba. Masyarakat megalitik Gunung Padang memanfaatkan balok-balok batu ini untuk menyusun dinding pembatas teras.',
        'kujang': 'Batu Kujang adalah sebutan untuk balok andesit lepas berukuran 95 cm yang memiliki tonjolan melengkung menyerupai bilah Kujang (senjata tradisional Sunda). Sebagian peneliti menganggap batuan ini sengaja dipahat, sementara sebagian lain menilai bentuknya adalah pelapukan batuan alami.',
        'semen': 'Semen Purba merujuk pada lapisan perekat setebal 1-2 cm di sela-sela columnar jointing. Analisis lab geologi menunjukkan material perekat ini terdiri dari campuran silika, lempung, dan zat besi yang diformulasikan secara sengaja untuk memperkuat struktur dinding teras.',
        'siapa': 'Situs ini dilaporkan pertama kali oleh N.J. Krom pada 1914, namun warga lokal di sekitar bukit Campaka Cianjur telah mengenalnya sejak lama dan mempercayainya sebagai tempat pertapaan Prabu Siliwangi.',
        'rute': 'Untuk menuju ke lokasi dari arah Jakarta/Bandung, Anda dapat berkendara ke kota Cianjur, lalu mengambil rute ke arah Kecamatan Campaka. Waktu tempuh sekitar 1.5 - 2 jam perjalanan dari pusat kota Cianjur.'
    };

    const defaultResponses = [
        "Itu adalah pertanyaan yang sangat menarik mengenai riset Gunung Padang. Dapatkah Anda menjelaskan lebih spesifik bagian mana yang ingin Anda pelajari?",
        "Sebagai Nalar Padang AI, saya menyarankan Anda membaca berkas Publikasi Ilmiah di bagian Timeline untuk melihat data geoelektrik dan carbon-dating orisinal.",
        "Terima kasih atas pertanyaannya. Menilik dari data ekskavasi 2011-2014, aspek tersebut masih didebatkan oleh para arkeolog nasional maupun internasional.",
        "Apakah pertanyaan Anda berhubungan dengan 5 teras utama, perkiraan umur punden, atau columnar jointing basaltik?"
    ];

    // Get response based on user text query
    function getBotResponse(userText) {
        const text = userText.toLowerCase();
        
        if (text.includes('sejarah') || text.includes('asal') || text.includes('penemu') || text.includes('nj krom') || text.includes('krom')) {
            return responseKB.sejarah;
        } else if (text.includes('umur') || text.includes('usia') || text.includes('tahun') || text.includes('carbon') || text.includes('dating')) {
            return responseKB.usia;
        } else if (text.includes('kontroversi') || text.includes('debat') || text.includes('beda') || text.includes('alami')) {
            return responseKB.kontroversi;
        } else if (text.includes('kunjung') || text.includes('lokasi') || text.includes('tiket') || text.includes('buka') || text.includes('jam')) {
            return responseKB.kunjungan;
        } else if (text.includes('teras') || text.includes('tingkat') || text.includes('puncak')) {
            return responseKB.teras;
        } else if (text.includes('columnar') || text.includes('joint') || text.includes('basalt') || text.includes('kekar')) {
            return responseKB.columnar;
        } else if (text.includes('kujang')) {
            return responseKB.kujang;
        } else if (text.includes('semen') || text.includes('perekat') || text.includes('lem')) {
            return responseKB.semen;
        } else if (text.includes('siapa') || text.includes('menemukan')) {
            return responseKB.siapa;
        } else if (text.includes('rute') || text.includes('jalan') || text.includes('kendara') || text.includes('ke sana')) {
            return responseKB.rute;
        }
        
        // Random fallback
        const randIndex = Math.floor(Math.random() * defaultResponses.length);
        return defaultResponses[randIndex];
    }

    // Handles typing indicators and responses rendering
    function simulateBotReply(chatBody, messageText) {
        // 1. Append User Message
        const userMsgEl = document.createElement('div');
        userMsgEl.className = 'chat-message user';
        userMsgEl.innerHTML = `<p>${messageText}</p>`;
        chatBody.appendChild(userMsgEl);
        chatBody.scrollTop = chatBody.scrollHeight;

        // 2. Append Typing Indicator
        const typingEl = document.createElement('div');
        typingEl.className = 'chat-message ai typing-indicator-container';
        typingEl.innerHTML = `<p><span class="dot"></span><span class="dot"></span><span class="dot"></span></p>`;
        
        // Custom stylesheet style for dots
        const style = document.createElement('style');
        style.innerHTML = `
            .typing-indicator-container span { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #D4AF37; margin: 0 2px; animation: bounce 1.2s infinite; }
            .typing-indicator-container span:nth-child(2) { animation-delay: 0.2s; }
            .typing-indicator-container span:nth-child(3) { animation-delay: 0.4s; }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        `;
        document.head.appendChild(style);
        
        chatBody.appendChild(typingEl);
        chatBody.scrollTop = chatBody.scrollHeight;

        // 3. Remove typing and append Bot Response after timeout
        setTimeout(() => {
            typingEl.remove();
            
            const botResponse = getBotResponse(messageText);
            const botMsgEl = document.createElement('div');
            botMsgEl.className = 'chat-message ai';
            botMsgEl.innerHTML = `<p>${botResponse}</p>`;
            chatBody.appendChild(botMsgEl);
            
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1200);
    }

    // Chat Box 1: Dedicated View AI Guide Page
    function initAiGuide() {
        const chatInput = document.getElementById('guide-chat-input');
        const chatSend = document.getElementById('guide-chat-send');
        const chatMessages = document.getElementById('guide-chat-messages');
        const clearChatBtn = document.getElementById('btn-clear-chat');
        const suggestChips = document.querySelectorAll('#guide-chat-suggestions .guide-suggest-chip');
        const topicBtns = document.querySelectorAll('.topic-btn');

        if (!chatMessages) return;

        function sendMessage() {
            const val = chatInput.value.trim();
            if (val) {
                simulateBotReply(chatMessages, val);
                chatInput.value = '';
            }
        }

        if (chatSend && chatInput) {
            chatSend.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendMessage();
            });
        }

        if (clearChatBtn) {
            clearChatBtn.addEventListener('click', () => {
                chatMessages.innerHTML = `
                    <div class="chat-message ai">
                        <p>Halo! Saya Nalar Padang AI. Obrolan telah dibersihkan. Silakan tanyakan hal baru seputar warisan budaya Gunung Padang.</p>
                    </div>
                `;
            });
        }

        // Suggestions
        suggestChips.forEach(chip => {
            chip.addEventListener('click', () => {
                simulateBotReply(chatMessages, chip.textContent);
            });
        });

        // Topic clicks
        topicBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                topicBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const topic = btn.getAttribute('data-topic');
                let prompt = "";
                if (topic === 'sejarah') prompt = "Bagaimana asal-usul sejarah penemuan Gunung Padang?";
                if (topic === 'struktur') prompt = "Bagaimana pembagian dan fungsi susunan 5 tingkat teras?";
                if (topic === 'kontroversi') prompt = "Apa kontroversi utama mengenai perkiraan usia batuan?";
                if (topic === 'kunjungan') prompt = "Apa panduan bagi pengunjung yang ingin ke lokasi?";

                if (prompt) simulateBotReply(chatMessages, prompt);
            });
        });
    }

    // Chat Box 2: Timeline Widget Panel
    function initTimelineWidget() {
        const chatInput = document.getElementById('ai-widget-input');
        const chatSend = document.getElementById('ai-widget-send');
        const chatBody = document.getElementById('ai-widget-chat');
        const suggestChips = document.querySelectorAll('.ai-suggest-chip');

        if (!chatBody) return;

        function sendMessage() {
            const val = chatInput.value.trim();
            if (val) {
                simulateBotReply(chatBody, val);
                chatInput.value = '';
            }
        }

        if (chatSend && chatInput) {
            chatSend.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendMessage();
            });
        }

        suggestChips.forEach(chip => {
            chip.addEventListener('click', () => {
                simulateBotReply(chatBody, chip.textContent);
            });
        });
    }

    // Chat Box 3: Global Floating Widget
    function initFloatingWidget() {
        const toggleBtn = document.getElementById('floating-ai-toggle');
        const chatWindow = document.getElementById('floating-chat-window');
        const chatClose = document.getElementById('floating-chat-close');
        const chatInput = document.getElementById('floating-chat-input');
        const chatSend = document.getElementById('floating-chat-send');
        const chatBody = document.getElementById('floating-chat-messages');

        if (!toggleBtn || !chatWindow) return;

        // Toggle Open/Close Window
        toggleBtn.addEventListener('click', () => {
            chatWindow.classList.toggle('hidden');
            const iconChat = toggleBtn.querySelector('.icon-chat');
            const iconClose = toggleBtn.querySelector('.icon-close');

            if (chatWindow.classList.contains('hidden')) {
                iconChat.classList.remove('hidden');
                iconClose.classList.add('hidden');
            } else {
                iconChat.classList.add('hidden');
                iconClose.classList.remove('hidden');
                if (chatInput) chatInput.focus();
            }
        });

        if (chatClose) {
            chatClose.addEventListener('click', () => {
                chatWindow.classList.add('hidden');
                toggleBtn.querySelector('.icon-chat').classList.remove('hidden');
                toggleBtn.querySelector('.icon-close').classList.add('hidden');
            });
        }

        function sendMessage() {
            const val = chatInput.value.trim();
            if (val) {
                simulateBotReply(chatBody, val);
                chatInput.value = '';
            }
        }

        if (chatSend && chatInput) {
            chatSend.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendMessage();
            });
        }
    }

    // Modal Integration API: Trigger query in guide page
    function triggerChatbotInquiry(inquiryText) {
        // Toggle view routing to AI Guide view
        const aiViewLink = document.querySelector('.nav-item[data-view="ai-guide"]');
        if (aiViewLink) {
            aiViewLink.click();
        }

        // Wait for page route transition
        setTimeout(() => {
            const chatMessages = document.getElementById('guide-chat-messages');
            if (chatMessages) {
                simulateBotReply(chatMessages, inquiryText);
            }
        }, 600);
    }

    // Global Initialization wrapper
    document.addEventListener('DOMContentLoaded', () => {
        initFloatingWidget();
        initTimelineWidget();
        initAiGuide();
    });

    // Exports
    window.initAiGuide = initAiGuide;
    window.triggerChatbotInquiry = triggerChatbotInquiry;
})();
