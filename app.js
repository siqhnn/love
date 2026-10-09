/* ======================================================
   ROMANTIC BOOK PHOTO ALBUM & ROBLOX DATE MINI APP
   Realistic 3D Book Experience & Smooth Animations
   ====================================================== */

// Telegram WebApp initialization
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  if (tg.setHeaderColor) tg.setHeaderColor('#0f0217');
  if (tg.setBackgroundColor) tg.setBackgroundColor('#0f0217');
}

function triggerHaptic(type = 'light') {
  if (tg?.HapticFeedback) {
    if (type === 'success') tg.HapticFeedback.notificationOccurred('success');
    else if (type === 'medium') tg.HapticFeedback.impactOccurred('medium');
    else tg.HapticFeedback.impactOccurred('light');
  }
}

// Open link reliably inside Telegram WebApp or browser
function openExternalLink(url, e) {
  if (e) e.stopPropagation();
  triggerHaptic('medium');

  if (tg && typeof tg.openLink === 'function') {
    tg.openLink(url);
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Copy link to clipboard
function copyToClipboard(text, btnElement, e) {
  if (e) e.stopPropagation();
  triggerHaptic('light');

  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = `<span>Скопировано! 📋</span>`;
    setTimeout(() => {
      btnElement.innerHTML = originalText;
    }, 2000);
  }).catch(() => {
    prompt('Скопируй ссылку на плейс:', text);
  });
}

// 18 Romantic Captions for 18 Unique Photos
const captions = [
  "Ты — самое прекрасное, что случалось в моей жизни 💖",
  "Каждая твоя улыбка делает мой мир ярче и теплее 🌸",
  "С тобой даже самые обычные дни становятся волшебными ✨",
  "Обожаю твои бездонные глаза и твой звонкий смех 🥰",
  "Ты наполняешь моё сердце уютом и бесконечной любовью ☕💕",
  "Рядом с тобой я чувствую себя по-настоящему дома 🏡",
  "Моё самое любимое место на свете — это твои объятия 🤗",
  "Ты моя радость, моё вдохновение и моё счастье 🌟",
  "С каждым днём я влюбляюсь в тебя всё сильнее и сильнее ♾️",
  "Твоя нежность и забота согревают даже в самые серые дни 🌷",
  "Ты делаешь этот мир вокруг невероятно красивым 🌈",
  "Обожаю наши долгие разговоры обо всём на свете 💬💕",
  "Ты моя единственная, самая Любимая 👑💖",
  "Никакие слова в мире не опишут, как сильно ты мне дорога 💌",
  "С тобой хочется мечтать, смеяться и строить наше будущее 🌌",
  "Ты — моя самая яркая звёздочка на ночном небе 🌠",
  "Хочу держать тебя за руку всегда-всегда 🤝💕",
  "А впереди у нас ещё целая жизнь таких счастливых моментов... 🕊️"
];

// Curated Romantic & Couple Roblox Places with Real Icons & Verified URLs
const robloxPlaces = [
  {
    id: "dress_to_impress",
    title: "Dress To Impress (Модный показ)",
    desc: "Главный хит! Подбираем парные образы, дефилируем по подиуму и голосуем друг за друга 👗✨",
    iconImg: "places_icons/dress_to_impress.png",
    link: "https://www.roblox.com/games/15101393044/Dress-To-Impress"
  },
  {
    id: "royale_high",
    title: "Royale High (Королевский замок)",
    desc: "Волшебное королевство: бальные наряды, фонтан желаний и романтические танцы 🏰💖",
    iconImg: "places_icons/royale_high.png",
    link: "https://www.roblox.com/games/738339342/Royale-High"
  },
  {
    id: "brookhaven",
    title: "Brookhaven RP (Наш уютный город)",
    desc: "Выберем роскошный дом, прокатимся на машине, зайдём в кофейню и погуляем по парку 🏡🚗",
    iconImg: "places_icons/brookhaven.png",
    link: "https://www.roblox.com/games/4924922222/Brookhaven-RP"
  },
  {
    id: "bloxburg",
    title: "Welcome to Bloxburg (Домик мечты)",
    desc: "Построим наш идеальный дом, приготовим вкусный ужин и устроим свидание у камина 🛋️🍰",
    iconImg: "places_icons/bloxburg.png",
    link: "https://www.roblox.com/games/185655149/Welcome-to-Bloxburg"
  },
  {
    id: "restaurant_tycoon",
    title: "Restaurant Tycoon 2 (Свидание)",
    desc: "Наш персональный ресторан: закажем пиццу, пасту, суши и десерты при свечах 🍝🍷",
    iconImg: "places_icons/restaurant_tycoon.png",
    link: "https://www.roblox.com/games/3398014311/Restaurant-Tycoon-2"
  },
  {
    id: "theme_park",
    title: "Theme Park Tycoon 2 (Аттракционы)",
    desc: "Колесо обозрения на закате, сладкая вата и весёлые американские горки для двоих 🎡🎢",
    iconImg: "places_icons/theme_park.png",
    link: "https://www.roblox.com/games/69184822/Theme-Park-Tycoon-2"
  },
  {
    id: "adopt_me",
    title: "Adopt Me! (Пикник и питомцы)",
    desc: "Милые питомцы, прогулки у водопада, обустройство кемпинга и романтический пикник 🧸🌸",
    iconImg: "places_icons/adopt_me.png",
    link: "https://www.roblox.com/games/92898409/Adopt-Me"
  },
  {
    id: "pizza_place",
    title: "Work at a Pizza Place (Пиццерия)",
    desc: "Печём пиццу вместе на кухне, доставляем заказы и покупаем мебель для нашего дома 🍕📦",
    iconImg: "places_icons/pizza_place.png",
    link: "https://www.roblox.com/games/192800/Work-at-a-Pizza-Place"
  },
  {
    id: "altitorture",
    title: "Altitorture (Паркур для двоих)",
    desc: "Весёлый паркур, где мы связаны верёвочкой: поддерживаем друг друга и много смеёмся 👫🧩",
    iconImg: "places_icons/altitorture.png",
    link: "https://www.roblox.com/games/14086581572/Altitorture"
  }
];

// State
let currentPage = 0; // 0 = Cover, 1..18 = Photos, 19 = Invitation
const totalPhotos = 18;
const totalPages = 19;
const selectedPlaces = new Set();

// Elements
const bookStage = document.getElementById('book-stage');
const pageIndicator = document.getElementById('page-indicator');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const startAlbumBtn = document.getElementById('start-album-btn');
const placesGrid = document.getElementById('places-grid');
const selectedCountBadge = document.getElementById('selected-count-badge');
const submitDateBtn = document.getElementById('submit-date-btn');
const dateNote = document.getElementById('date-note');
const successOverlay = document.getElementById('success-overlay');
const successSummary = document.getElementById('success-summary');
const closeSuccessBtn = document.getElementById('close-success-btn');
const gridHeaderTitle = document.getElementById('grid-header-title');

// Grid & Lightbox
const gridToggle = document.getElementById('grid-toggle');
const gridModal = document.getElementById('grid-modal');
const closeGridBtn = document.getElementById('close-grid-btn');
const gridModalBody = document.getElementById('grid-modal-body');

const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightboxBtn = document.getElementById('close-lightbox-btn');

// --- 1. BUILD PHOTO PAGES WITH PHYSICAL BOOK CORNERS ---
function buildPhotoPages() {
  const invitationPage = document.getElementById('page-invitation');
  invitationPage.dataset.page = totalPages;
  invitationPage.id = `page-${totalPages}`;

  if (gridHeaderTitle) {
    gridHeaderTitle.textContent = `Все фотографии (${totalPhotos}) 📸`;
  }

  for (let i = 1; i <= totalPhotos; i++) {
    const pageEl = document.createElement('section');
    pageEl.className = 'page';
    pageEl.id = `page-${i}`;
    pageEl.dataset.page = i;

    const caption = captions[i - 1] || "Наши тёплые воспоминания вместе 💕";

    pageEl.innerHTML = `
      <div class="photo-card">
        <div class="book-page-fold-shadow"></div>

        <div class="photo-header">
          <span class="photo-page-pill">Страница ${i} из ${totalPhotos}</span>
          <span class="photo-memory-badge">✨ С любовью</span>
        </div>
        
        <div class="photo-mount-wrapper">
          <div class="mount-corner tl"></div>
          <div class="mount-corner tr"></div>
          <div class="mount-corner bl"></div>
          <div class="mount-corner br"></div>
          <div class="photo-frame" onclick="openLightbox('photos/${i}.jpg', '${caption.replace(/'/g, "\\'")}')">
            <img src="photos/${i}.jpg" alt="Фото ${i}" loading="lazy">
            <span class="zoom-hint">🔍 Нажми для увеличения</span>
          </div>
        </div>

        <div class="photo-caption-box">
          <p class="photo-caption">${caption}</p>
        </div>
      </div>
    `;

    // Insert before invitation page
    bookStage.insertBefore(pageEl, invitationPage);

    // Populate Grid Modal Thumbnails
    const thumbEl = document.createElement('div');
    thumbEl.className = 'grid-thumb';
    thumbEl.innerHTML = `
      <img src="photos/${i}.jpg" alt="Миниатюра ${i}" loading="lazy">
      <span class="grid-thumb-index">${i}</span>
    `;
    thumbEl.addEventListener('click', () => {
      goToPage(i);
      closeGridModal();
    });
    gridModalBody.appendChild(thumbEl);
  }
}

// --- 2. BUILD ROBLOX PLACES ---
function buildPlacesGrid() {
  placesGrid.innerHTML = '';
  robloxPlaces.forEach(place => {
    const card = document.createElement('div');
    card.className = 'place-card';
    card.id = `place-card-${place.id}`;

    card.innerHTML = `
      <div class="place-top-row">
        <div class="place-info-block">
          <div class="place-avatar">
            <img src="${place.iconImg}" alt="${place.title}">
          </div>
          <div class="place-details">
            <h4>${place.title}</h4>
            <p>${place.desc}</p>
          </div>
        </div>
        <div class="place-checkbox"></div>
      </div>
      <div class="place-bottom-row">
        <button class="btn-copy-link" onclick="copyToClipboard('${place.link}', this, event)">
          📋 Ссылка
        </button>
        <button class="btn-roblox-link" onclick="openExternalLink('${place.link}', event)">
          🎮 В Roblox ↗
        </button>
      </div>
    `;

    card.addEventListener('click', () => {
      togglePlaceSelection(place.id);
    });

    placesGrid.appendChild(card);
  });
}

function togglePlaceSelection(placeId) {
  triggerHaptic('medium');
  const card = document.getElementById(`place-card-${placeId}`);
  if (selectedPlaces.has(placeId)) {
    selectedPlaces.delete(placeId);
    card.classList.remove('selected');
  } else {
    selectedPlaces.add(placeId);
    card.classList.add('selected');
  }
  updateSelectedCount();
}

function updateSelectedCount() {
  const count = selectedPlaces.size;
  selectedCountBadge.textContent = `${count} выбрано`;
  if (count > 0) {
    submitDateBtn.removeAttribute('disabled');
  }
}

// --- 3. PAGE NAVIGATION & REALISTIC BOOK PAGE TURN ---
function updatePageUI() {
  for (let i = 0; i <= totalPages; i++) {
    const pageEl = document.getElementById(`page-${i}`);
    if (!pageEl) continue;

    pageEl.classList.remove('active', 'prev');
    if (i === currentPage) {
      pageEl.classList.add('active');
    } else if (i < currentPage) {
      pageEl.classList.add('prev');
    }
  }

  // Update Indicator & Progress Bar
  if (currentPage === 0) {
    pageIndicator.textContent = "Обложка 📖";
    progressBar.style.width = "0%";
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  } else if (currentPage === totalPages) {
    pageIndicator.textContent = "Приглашение 💌";
    progressBar.style.width = "100%";
    prevBtn.disabled = false;
    nextBtn.disabled = true;
  } else {
    pageIndicator.textContent = `${currentPage} / ${totalPhotos} 📸`;
    const percent = Math.round((currentPage / totalPages) * 100);
    progressBar.style.width = `${percent}%`;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

function goToPage(target) {
  if (target < 0 || target > totalPages || target === currentPage) return;
  triggerHaptic('light');
  playPageTurnSound();
  currentPage = target;
  updatePageUI();
}

function nextPage() {
  if (currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 0) {
    goToPage(currentPage - 1);
  }
}

prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);
startAlbumBtn.addEventListener('click', () => goToPage(1));

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') nextPage();
  if (e.key === 'ArrowLeft') prevPage();
});

// Mobile Swipe Gestures
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

bookStage.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

bookStage.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const dx = touchEndX - touchStartX;
  const dy = touchEndY - touchStartY;
  
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx < 0) {
      nextPage();
    } else {
      prevPage();
    }
  }
}

// Lightbox & Grid Modals
function openLightbox(src, caption) {
  triggerHaptic('medium');
  lightboxImg.src = src;
  lightboxCaption.textContent = caption;
  lightboxModal.classList.add('open');
}

closeLightboxBtn.addEventListener('click', () => {
  lightboxModal.classList.remove('open');
});

lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    lightboxModal.classList.remove('open');
  }
});

gridToggle.addEventListener('click', () => {
  triggerHaptic('light');
  gridModal.classList.add('open');
});

function closeGridModal() {
  gridModal.classList.remove('open');
}
closeGridBtn.addEventListener('click', closeGridModal);

// --- 4. SUBMIT DATE SELECTION ---
submitDateBtn.addEventListener('click', async () => {
  if (selectedPlaces.size === 0) {
    alert("Пожалуйста, выбери хотя бы один режим в Roblox, куда мы отправимся! 💖");
    return;
  }

  triggerHaptic('success');
  fireConfetti();

  const selectedPlaceObjects = Array.from(selectedPlaces).map(id => {
    return robloxPlaces.find(p => p.id === id);
  }).filter(Boolean);

  const noteText = dateNote.value.trim();

  submitDateBtn.disabled = true;
  submitDateBtn.innerHTML = `<span>Отправляем Данилу... 💕</span>`;

  const payload = {
    selectedPlaces: selectedPlaceObjects,
    note: noteText,
    telegramUser: tg?.initDataUnsafe?.user || { first_name: "Любимая" },
    timestamp: new Date().toISOString()
  };

  // 1. Try local server if running
  try {
    await fetch('/api/submit-date', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) {}

  // 2. Direct Telegram Bot API notification (works 24/7 on GitHub Pages without server!)
  try {
    const NOTIFIER_BOT_TOKEN = '8624580033:AAFCH-7QLaZCM6E3popcFZYMAjOTXeJrFtc';
    let msg = `💖✨ <b>ТВОЯ ЛЮБИМАЯ СОГЛАСИЛАСЬ НА СВИДАНИЕ В РОБЛОКСЕ!</b> ✨💖\n\n`;
    msg += `🏰 <b>Выбранные миры (${selectedPlaceObjects.length}):</b>\n`;
    selectedPlaceObjects.forEach((p, idx) => {
      msg += `<b>${idx + 1}. 🎮 ${p.title}</b>\n   👉 Ссылка: ${p.link}\n`;
    });
    if (noteText) {
      msg += `\n💬 <b>Сообщение от Любимой:</b>\n<i>«${escapeHtml(noteText)}»</i>\n`;
    }
    const dt = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
    msg += `\n⏰ <i>Время: ${dt} (МСК)</i>\n🎉 <i>Заходи в Роблокс и готовься к идеальному свиданию! 💕</i>`;

    // Fetch user IDs who started @arya_prostila_bot
    const updRes = await fetch(`https://api.telegram.org/bot${NOTIFIER_BOT_TOKEN}/getUpdates`);
    const updData = await updRes.json();
    if (updData.ok && Array.isArray(updData.result)) {
      const chatIds = new Set();
      updData.result.forEach(u => {
        if (u.message?.chat?.id) chatIds.add(u.message.chat.id);
      });
      for (const cId of chatIds) {
        await fetch(`https://api.telegram.org/bot${NOTIFIER_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: cId, text: msg, parse_mode: 'HTML' })
        });
      }
    }
  } catch (err) {
    console.error('Direct Telegram API error:', err);
  }

  // 3. Telegram WebApp sendData fallback
  if (tg?.sendData) {
    try { tg.sendData(JSON.stringify(payload)); } catch (e) {}
  }

  let summaryHtml = `<strong>Выбранные миры (${selectedPlaceObjects.length}):</strong><ul style="margin: 6px 0 6px 16px;">`;
  selectedPlaceObjects.forEach(p => {
    summaryHtml += `<li><strong>${p.title}</strong></li>`;
  });
  summaryHtml += `</ul>`;
  if (noteText) {
    summaryHtml += `<p style="margin-top: 8px;"><strong>Сообщение:</strong> «${escapeHtml(noteText)}»</p>`;
  }

  successSummary.innerHTML = summaryHtml;
  successOverlay.style.display = 'flex';
});

closeSuccessBtn.addEventListener('click', () => {
  successOverlay.style.display = 'none';
  submitDateBtn.disabled = false;
  submitDateBtn.innerHTML = `
    <span class="btn-icon-heart">💖</span>
    <span class="btn-text">Я согласна! Пойдём на свидание!</span>
    <span class="btn-icon-sparkle">✨</span>
  `;
  goToPage(1);
});

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Confetti Cannon
function fireConfetti() {
  if (typeof confetti === 'function') {
    const defaults = { origin: { y: 0.7 }, zIndex: 999 };
    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(200 * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff4d8d', '#ff7ebb', '#ffffff'] });
    fire(0.2, { spread: 60, colors: ['#9d4edd', '#c084fc', '#ffd166'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#ff4d8d', '#e0aaff', '#ff007f'] });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45, colors: ['#ffd166', '#ff4d8d'] });
  }
}

// --- 5. FLOATING HEARTS BACKGROUND ---
const canvas = document.getElementById('hearts-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class FloatingHeart {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 20;
    this.size = Math.random() * 12 + 8;
    this.speedY = Math.random() * 0.8 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.6 + 0.2;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.02;
    this.color = Math.random() > 0.4 ? 'rgba(255, 105, 180,' : 'rgba(192, 132, 252,';
  }
  update() {
    this.y -= this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotSpeed;
    if (this.y < -30) this.reset();
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.scale(this.size / 20, this.size / 20);
    ctx.fillStyle = `${this.color} ${this.opacity})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-10, -10, -20, 5, 0, 20);
    ctx.bezierCurveTo(20, 5, 10, -10, 0, 0);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 24; i++) {
  particles.push(new FloatingHeart());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// --- 6. REALISTIC BOOK PAGE TURN SOUND ---
function playPageTurnSound() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  try {
    const bufferSize = Math.floor(audioCtx.sampleRate * 0.12);
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.035));
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(650, audioCtx.currentTime);
    filter.Q.setValueAtTime(1.2, audioCtx.currentTime);

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    noise.start();
  } catch (e) {}
}

// --- 7. AMBIENT MUSIC SYNTHESIZER ---
let audioCtx = null;
let isMusicPlaying = false;
let musicInterval = null;
const musicToggle = document.getElementById('music-toggle');

const chords = [
  [349.23, 440.00, 523.25, 659.25],
  [392.00, 493.88, 587.33, 783.99],
  [329.63, 392.00, 493.88, 659.25],
  [440.00, 523.25, 659.25, 880.00]
];

function playNote(freq, delay) {
  if (!audioCtx || audioCtx.state !== 'running') return;
  const now = audioCtx.currentTime + delay;
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.06, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 2.6);
}

function startAmbientMusic() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  let chordIndex = 0;
  function triggerChord() {
    const chord = chords[chordIndex % chords.length];
    chord.forEach((freq, idx) => {
      playNote(freq, idx * 0.35);
    });
    chordIndex++;
  }

  triggerChord();
  musicInterval = setInterval(triggerChord, 2800);
  isMusicPlaying = true;
  musicToggle.classList.add('active');
  musicToggle.innerHTML = `<span>💖</span>`;
}

function stopAmbientMusic() {
  if (musicInterval) {
    clearInterval(musicInterval);
    musicInterval = null;
  }
  isMusicPlaying = false;
  musicToggle.classList.remove('active');
  musicToggle.innerHTML = `<span>🎵</span>`;
}

musicToggle.addEventListener('click', () => {
  triggerHaptic('light');
  if (isMusicPlaying) {
    stopAmbientMusic();
  } else {
    startAmbientMusic();
  }
});

window.addEventListener('click', function initAudioOnce() {
  if (!isMusicPlaying && !audioCtx) {
    startAmbientMusic();
  }
  window.removeEventListener('click', initAudioOnce);
}, { once: true });

// INITIALIZE
buildPhotoPages();
buildPlacesGrid();
updatePageUI();
