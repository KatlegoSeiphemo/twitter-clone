// ===== DATA =====
const colors = [
  'linear-gradient(135deg, #1d9bf0, #0d47a1)',
  'linear-gradient(135deg, #9333ea, #6b21a8)',
  'linear-gradient(135deg, #f4212e, #b91c1c)',
  'linear-gradient(135deg, #00ba7c, #065f46)',
  'linear-gradient(135deg, #ff7a00, #c2410c)',
  'linear-gradient(135deg, #1d9bf0, #9333ea)',
  'linear-gradient(135deg, #f59e0b, #b45309)',
  'linear-gradient(135deg, #ec4899, #9d174d)',
];

const users = [
  { name: 'Cyril Ramaphosa', handle: 'CyrilRamaphosa', verified: true, color: colors[3], initial: 'C', badge: 'gold' },
  { name: 'Sho Madjozi', handle: 'ShoMadjozi', verified: true, color: colors[7], initial: 'S', badge: 'blue' },
  { name: 'SABC News', handle: 'SABCNews', verified: true, color: colors[0], initial: 'S', badge: 'blue' },
  { name: 'Trevor Noah', handle: 'TrevorNoah', verified: true, color: colors[1], initial: 'T', badge: 'blue' },
  { name: 'Bonang Matheba', handle: 'bonang_m', verified: true, color: colors[4], initial: 'B', badge: 'blue' },
  { name: 'Cassper Nyovest', handle: 'casspernyovest', verified: true, color: colors[2], initial: 'C', badge: 'blue' },
  { name: 'Eusebius McKaiser', handle: 'Eusebius', verified: true, color: colors[5], initial: 'E', badge: 'blue' },
  { name: 'Nandi Madida', handle: 'NandiMadida', verified: true, color: colors[6], initial: 'N', badge: 'blue' },
];

const tweetsData = [
  {
    id: 1, user: users[3],
    text: 'South Africa has so much talent it\'s unreal. 🇿🇦\n\nWe just need the systems, the funding, and the belief to match it. The potential here is world-class.',
    time: '2h', likes: 48200, retweets: 6100, replies: 892, views: 2400000,
    liked: false, retweeted: false, bookmarked: false
  },
  {
    id: 2, user: users[2],
    text: '🚨 BREAKING: Eskom confirms Stage 2 loadshedding will be implemented from 5pm today until further notice.\n\nResidents are advised to check the EskomSePush app for their schedules.',
    time: '4h', likes: 12400, retweets: 8900, replies: 3420, views: 4900000,
    liked: false, retweeted: false, bookmarked: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1200px-All_Gizah_Pyramids.jpg'
  },
  {
    id: 3, user: users[4],
    text: 'Can we normalise women owning businesses, sitting on boards, AND being glamorous? You don\'t have to choose between ambition and femininity. 💅🏽\n\n#WomenInBusiness #SouthAfrica',
    time: '5h', likes: 29800, retweets: 5200, replies: 4100, views: 1800000,
    liked: false, retweeted: false, bookmarked: false
  },
  {
    id: 4, user: users[1],
    text: 'New music dropping this Friday 🎵🇿🇦 This one is for the villages, the townships, and everyone who told us African music couldn\'t go global.\n\nWe proved them wrong. Repeatedly. 🔥 #AfroBeats #Gqom',
    time: '6h', likes: 89200, retweets: 24000, replies: 8200, views: 12000000,
    liked: false, retweeted: false, bookmarked: false
  },
  {
    id: 5, user: users[0],
    text: 'South Africa remains committed to building a capable, ethical, and developmental state.\n\nWe will not rest until every citizen has access to water, electricity, and dignity. 🇿🇦',
    time: '8h', likes: 21200, retweets: 4800, replies: 12400, views: 3200000,
    liked: false, retweeted: false, bookmarked: false
  },
  {
    id: 6, user: users[6],
    text: 'The DA\'s proposal makes no logical sense when you actually read the policy document.\n\nI\'ve broken it down point by point in this thread. Buckle up. 🧵👇\n\n#SouthAfricanPolitics',
    time: '10h', likes: 18700, retweets: 9200, replies: 6900, views: 2500000,
    liked: false, retweeted: false, bookmarked: false
  },
  {
    id: 7, user: users[5],
    text: 'Joburg to Cape Town road trip hits different in winter ❄️🚗\n\nThe N1 through the Karoo at sunset is one of the most beautiful things you\'ll ever see in your life. No cap.\n\n#SouthAfrica #Travel',
    time: '12h', likes: 32100, retweets: 7800, replies: 2400, views: 4200000,
    liked: false, retweeted: false, bookmarked: false
  },
  {
    id: 8, user: users[7],
    text: 'Representation matters SO much. 🙏🏽\n\nSeeing Black South African women on international stages, in boardrooms, on screens — it changes what little girls believe is possible for themselves.\n\n#ProudlySouthAfrican',
    time: '14h', likes: 54800, retweets: 18000, replies: 3200, views: 8800000,
    liked: false, retweeted: false, bookmarked: false
  },
];

const trendsData = [
  { category: 'Trending in South Africa', name: '#Loadshedding', count: '124K posts' },
  { category: 'Trending in South Africa', name: '#Bafana', count: '89.2K posts' },
  { category: 'Politics · Trending', name: '#SONA2026', count: '76.4K posts' },
  { category: 'Entertainment · Trending', name: 'Sho Madjozi', count: '54K posts' },
  { category: 'Trending in South Africa', name: '#EskomSePush', count: '41.6K posts' },
  { category: 'Trending', name: '#WomenInTech', count: '38K posts' },
  { category: 'Trending in South Africa', name: '#MzansiMagic', count: '29K posts' },
  { category: 'Sports · Trending', name: 'Springboks', count: '212K posts' },
];

const followData = [
  { ...users[3], followers: '892K' },
  { ...users[2], followers: '44.2M' },
  { ...users[4], followers: '2.1M' },
];

const notifData = [
  {
    type: 'like', icon: '❤️', iconColor: '#f4212e',
    text: '<strong>@bonang_m</strong> and 38 others liked your post',
    preview: 'Women in tech are building the future of South Africa 🇿🇦💻',
    avatars: [users[4], users[1], users[7]]
  },
  {
    type: 'retweet', icon: '🔁', iconColor: '#00ba7c',
    text: '<strong>@TrevorNoah</strong> reposted your post',
    preview: 'Mzansi deserves better infrastructure and faster WiFi 😤',
    avatars: [users[3]]
  },
  {
    type: 'follow', icon: '👤', iconColor: '#1d9bf0',
    text: '<strong>@ShoMadjozi</strong> and 12 others followed you',
    preview: null,
    avatars: [users[1], users[7], users[4]]
  },
  {
    type: 'mention', icon: '💬', iconColor: '#1d9bf0',
    text: '<strong>@casspernyovest</strong> mentioned you in a post',
    preview: 'Shout out to all the women in tech doing big things! 🙌🏽',
    avatars: [users[5]]
  },
];

const msgData = [
  { user: users[3], preview: "Sisi! Loved your thread on women in tech 🔥", time: "2m", unread: true },
  { user: users[4], preview: "We should collab on that WiT event in Joburg!", time: "1h", unread: false },
  { user: users[1], preview: "Yoh the loadshedding last night was hectic 😩", time: "3h", unread: true },
  { user: users[7], preview: "Thank you for the support sisi 🙏🏽", time: "1d", unread: false },
];

// ===== STATE =====
let isDark = false;
let tweetsList = [...tweetsData];

// ===== UTILS =====
function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace('.0','') + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0','') + 'K';
  return n.toString();
}

function verifiedBadge(user) {
  if (!user.verified) return '';
  const color = user.badge === 'gold' ? '#FFD700' : user.badge === 'gray' ? '#71767b' : '#1d9bf0';
  return `<svg viewBox="0 0 24 24" width="18" height="18"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.9-2.19-3.34-2.19s-2.68.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.9 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" fill="${color}"/></svg>`;
}

function highlightText(text) {
  return text
    .replace(/(#\w+)/g, '<span class="hashtag">$1</span>')
    .replace(/(@\w+)/g, '<span class="mention">$1</span>');
}

// ===== RENDER TWEETS =====
function renderTweet(tweet) {
  const u = tweet.user;
  return `
    <div class="tweet" id="tweet-${tweet.id}">
      <div class="tweet-avatar" style="background: ${u.color};">${u.initial}</div>
      <div class="tweet-body">
        <div class="tweet-header">
          <span class="tweet-name">${u.name} ${verifiedBadge(u)}</span>
          <span class="tweet-handle">@${u.handle}</span>
          <span class="tweet-dot">·</span>
          <span class="tweet-time">${tweet.time}</span>
          <div class="tweet-menu-btn" onclick="event.stopPropagation()">
            <svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
          </div>
        </div>
        <div class="tweet-text">${highlightText(tweet.text)}</div>
        ${tweet.image ? `<div class="tweet-media"><img src="${tweet.image}" alt="tweet media" loading="lazy" onerror="this.parentElement.style.display='none'"></div>` : ''}
        <div class="tweet-actions">
          <button class="action-btn reply" onclick="event.stopPropagation(); showToast('💬 Replied!')">
            <svg viewBox="0 0 24 24"><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/></svg>
            <span>${formatNumber(tweet.replies)}</span>
          </button>
          <button class="action-btn retweet ${tweet.retweeted ? 'retweeted' : ''}" onclick="event.stopPropagation(); toggleRetweet(${tweet.id})">
            <svg viewBox="0 0 24 24"><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/></svg>
            <span id="rt-${tweet.id}">${formatNumber(tweet.retweets)}</span>
          </button>
          <button class="action-btn like ${tweet.liked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLike(${tweet.id})">
            <svg viewBox="0 0 24 24" id="like-icon-${tweet.id}"><path d="${tweet.liked ? 'M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z' : 'M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'}"/></svg>
            <span id="like-${tweet.id}">${formatNumber(tweet.likes)}</span>
          </button>
          <button class="action-btn views" onclick="event.stopPropagation()">
            <svg viewBox="0 0 24 24"><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/></svg>
            <span>${formatNumber(tweet.views)}</span>
          </button>
          <button class="action-btn share" onclick="event.stopPropagation(); toggleBookmark(${tweet.id})">
            <svg viewBox="0 0 24 24"><path d="${tweet.bookmarked ? 'M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z' : 'M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z'}"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderFeed() {
  const feed = document.getElementById('tweetFeed');
  if (feed) feed.innerHTML = tweetsList.map(renderTweet).join('');
  
  const profileFeed = document.getElementById('profileFeed');
  if (profileFeed) {
    const myTweets = tweetsList.slice(0, 3);
    profileFeed.innerHTML = myTweets.map(renderTweet).join('');
  }

  const bookmarksFeed = document.getElementById('bookmarksFeed');
  if (bookmarksFeed) {
    const bookmarked = tweetsList.filter(t => t.bookmarked);
    bookmarksFeed.innerHTML = bookmarked.length 
      ? bookmarked.map(renderTweet).join('')
      : '<div style="padding:32px 16px; text-align:center; color:var(--text-secondary);">No bookmarks yet</div>';
  }
}

// ===== INTERACTIONS =====
function toggleLike(id) {
  const tweet = tweetsList.find(t => t.id === id);
  if (!tweet) return;
  tweet.liked = !tweet.liked;
  tweet.likes += tweet.liked ? 1 : -1;
  
  const likeBtn = document.querySelector(`#tweet-${id} .like`);
  if (likeBtn) {
    likeBtn.className = `action-btn like ${tweet.liked ? 'liked' : ''}`;
    likeBtn.querySelector('svg').className = tweet.liked ? 'like-pop' : '';
    setTimeout(() => { if (likeBtn.querySelector('svg')) likeBtn.querySelector('svg').className = ''; }, 400);
    likeBtn.querySelector('span').textContent = formatNumber(tweet.likes);
    likeBtn.querySelector('path').setAttribute('d', tweet.liked
      ? 'M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'
      : 'M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'
    );
  }
}

function toggleRetweet(id) {
  const tweet = tweetsList.find(t => t.id === id);
  if (!tweet) return;
  tweet.retweeted = !tweet.retweeted;
  tweet.retweets += tweet.retweeted ? 1 : -1;
  
  const rtBtn = document.querySelector(`#tweet-${id} .retweet`);
  if (rtBtn) {
    rtBtn.className = `action-btn retweet ${tweet.retweeted ? 'retweeted' : ''}`;
    document.getElementById(`rt-${id}`).textContent = formatNumber(tweet.retweets);
  }
  if (tweet.retweeted) showToast('🔁 Reposted!');
}

function toggleBookmark(id) {
  const tweet = tweetsList.find(t => t.id === id);
  if (!tweet) return;
  tweet.bookmarked = !tweet.bookmarked;
  renderFeed();
  showToast(tweet.bookmarked ? '🔖 Added to Bookmarks' : 'Removed from Bookmarks');
}

// ===== COMPOSE =====
function expandCompose() {
  document.getElementById('composeExtras').style.display = 'block';
}

function updateCounter(textarea) {
  const len = textarea.value.length;
  const remaining = 280 - len;
  const pct = len / 280;
  
  const ringFill = document.getElementById('ringFill');
  const offset = 69.1 * (1 - pct);
  ringFill.style.strokeDashoffset = offset;
  
  const counterEl = document.getElementById('charCounter');
  const postBtn = document.getElementById('postBtn');
  
  if (len > 0) {
    postBtn.classList.add('enabled');
    expandCompose();
    if (remaining <= 20) {
      counterEl.style.display = 'block';
      counterEl.textContent = remaining;
      counterEl.className = 'char-count-num ' + (remaining <= 0 ? 'char-danger' : 'char-warning');
    } else {
      counterEl.style.display = 'none';
    }
    ringFill.style.stroke = remaining <= 0 ? 'var(--red)' : remaining <= 20 ? '#ffd400' : 'var(--accent)';
  } else {
    postBtn.classList.remove('enabled');
    counterEl.style.display = 'none';
    ringFill.style.stroke = 'var(--accent)';
  }
}

function updateModalCounter(textarea) {
  const len = textarea.value.length;
  const remaining = 280 - len;
  const pct = len / 280;
  
  const fill = document.getElementById('modalFill');
  fill.style.strokeDashoffset = 69.1 * (1 - pct);
  
  const counter = document.getElementById('modalCounter');
  const postBtn = document.getElementById('modalPostBtn');
  
  postBtn.className = len > 0 && len <= 280 ? 'post-btn enabled' : 'post-btn';
  
  if (remaining <= 20 && len > 0) {
    counter.style.display = 'block';
    counter.textContent = remaining;
    counter.className = 'char-count-num ' + (remaining <= 0 ? 'char-danger' : 'char-warning');
  } else {
    counter.style.display = 'none';
  }
  fill.style.stroke = remaining <= 0 ? 'var(--red)' : remaining <= 20 ? '#ffd400' : 'var(--accent)';
}

function postTweet() {
  const textarea = document.getElementById('composeTextarea');
  const text = textarea.value.trim();
  if (!text) return;
  
  const newTweet = {
    id: Date.now(),
    user: { name: 'Katlego Seiphemo', handle: 'katlego_s', verified: true, color: colors[5], initial: 'K', badge: 'blue' },
    text: text,
    time: 'now',
    likes: 0, retweets: 0, replies: 0, views: 1,
    liked: false, retweeted: false, bookmarked: false
  };
  
  tweetsList.unshift(newTweet);
  textarea.value = '';
  updateCounter(textarea);
  document.getElementById('composeExtras').style.display = 'none';
  renderFeed();
  showToast('✅ Your post was sent!');
}

function postFromModal() {
  const textarea = document.getElementById('modalTextarea');
  const text = textarea.value.trim();
  if (!text) return;
  
  const newTweet = {
    id: Date.now(),
    user: { name: 'Katlego Seiphemo', handle: 'katlego_s', verified: true, color: colors[5], initial: 'K', badge: 'blue' },
    text: text,
    time: 'now',
    likes: 0, retweets: 0, replies: 0, views: 1,
    liked: false, retweeted: false, bookmarked: false
  };
  
  tweetsList.unshift(newTweet);
  textarea.value = '';
  updateModalCounter(textarea);
  closeModal();
  renderFeed();
  showToast('✅ Your post was sent!');
}

// ===== MODAL =====
function openModal() {
  const modal = document.getElementById('tweetModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('modalTextarea').focus(), 100);
}

function closeModal() {
  document.getElementById('tweetModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('tweetModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ===== DARK MODE =====
function toggleDarkMode() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  
  const toggle = document.getElementById('darkToggleSwitch');
  const emoji = document.getElementById('toggleEmoji');
  const label = document.getElementById('toggleText');
  
  if (toggle) toggle.className = 'toggle-switch' + (isDark ? ' on' : '');
  if (emoji) emoji.textContent = isDark ? '☀️' : '🌙';
  if (label) label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  
  const navLabel = document.getElementById('darkModeLabel');
  if (navLabel) navLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

// ===== NAVIGATION =====
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  
  window.scrollTo(0, 0);
  
  if (page === 'explore') renderExploreTrends();
  if (page === 'notifications') renderNotifications();
  if (page === 'messages') renderMessages();
  if (page === 'profile' || page === 'bookmarks') renderFeed();
}

// ===== TAB SWITCHING =====
function switchTab(tab) {
  document.querySelectorAll('.feed-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  
  if (tab === 'following') {
    const filtered = tweetsList.filter((_, i) => i % 2 === 0);
    document.getElementById('tweetFeed').innerHTML = filtered.map(renderTweet).join('');
  } else {
    renderFeed();
  }
}

// ===== TRENDING =====
function renderTrends() {
  const list = document.getElementById('trendsList');
  if (!list) return;
  list.innerHTML = trendsData.slice(0, 5).map(t => `
    <div class="trend-item">
      <div class="trend-category">${t.category}</div>
      <div class="trend-name">${t.name}</div>
      <div class="trend-count">${t.count}</div>
      <div class="trend-menu"><svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg></div>
    </div>
  `).join('');
}

function renderExploreTrends() {
  const container = document.getElementById('exploreTrends');
  if (!container) return;
  container.innerHTML = trendsData.map((t, i) => `
    <div class="trend-item" style="border-bottom: 1px solid var(--border); padding: 16px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div class="trend-category">${i + 1} · ${t.category}</div>
          <div class="trend-name" style="font-size:1.05rem;">${t.name}</div>
          <div class="trend-count">${t.count}</div>
        </div>
        <div class="trend-menu" style="position:static; opacity:1;"><svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg></div>
      </div>
    </div>
  `).join('');
}

// ===== WHO TO FOLLOW =====
function renderFollowList() {
  const list = document.getElementById('followList');
  if (!list) return;
  list.innerHTML = followData.map((u, i) => `
    <div class="follow-item">
      <div class="follow-avatar" style="background: ${u.color};">${u.initial}</div>
      <div class="follow-info">
        <div class="follow-name">${u.name} ${u.verified ? verifiedBadge(u) : ''}</div>
        <div class="follow-handle">@${u.handle}</div>
      </div>
      <button class="follow-btn" id="follow-btn-${i}" onclick="toggleFollow(${i}, this)">Follow</button>
    </div>
  `).join('');
}

function toggleFollow(i, btn) {
  const isFollowing = btn.classList.contains('following');
  btn.classList.toggle('following');
  btn.textContent = isFollowing ? 'Follow' : 'Following';
  showToast(isFollowing ? `Unfollowed @${followData[i].handle}` : `Following @${followData[i].handle} ✅`);
}

// ===== NOTIFICATIONS =====
function renderNotifications() {
  const feed = document.getElementById('notifFeed');
  if (!feed) return;
  feed.innerHTML = notifData.map(n => `
    <div class="notif-item">
      <div class="notif-icon">
        <span style="font-size:1.6rem;">${n.icon}</span>
      </div>
      <div class="notif-content">
        <div class="notif-avatars">
          ${n.avatars.map(u => `<div class="notif-avatar" style="background:${u.color};">${u.initial}</div>`).join('')}
        </div>
        <div class="notif-text">${n.text}</div>
        ${n.preview ? `<div class="notif-tweet-preview">${n.preview}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// ===== MESSAGES =====
function renderMessages() {
  const feed = document.getElementById('msgFeed');
  if (!feed) return;
  feed.innerHTML = msgData.map(m => `
    <div class="msg-item ${m.unread ? 'unread' : ''}">
      <div class="follow-avatar" style="background:${m.user.color}; width:48px; height:48px; flex-shrink:0; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; border-radius:50%;">${m.user.initial}</div>
      <div class="msg-info">
        <div class="msg-name-row">
          <span class="msg-name">${m.user.name} ${verifiedBadge(m.user)}</span>
          <span class="msg-time">${m.time}</span>
        </div>
        <div class="msg-preview">@${m.user.handle} · ${m.preview}</div>
      </div>
      ${m.unread ? '<div class="unread-dot"></div>' : ''}
    </div>
  `).join('');
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== TOGGLE AUDIENCE =====
function toggleAudience(el) {
  const options = ['Everyone', 'Circle', 'Mentioned only'];
  const current = options.indexOf(el.textContent.trim());
  const next = options[(current + 1) % options.length];
  el.querySelector('svg + span, span:last-child') || (el.innerHTML = el.innerHTML);
  el.innerHTML = el.innerHTML.replace(/>(Everyone|Circle|Mentioned only)</, `>${next}<`);
}

// ===== INIT =====
renderFeed();
renderTrends();
renderFollowList();

// Close compose on outside click
document.addEventListener('click', function(e) {
  const compose = document.querySelector('.compose-box');
  if (compose && !compose.contains(e.target)) {
    const textarea = document.getElementById('composeTextarea');
    if (textarea && !textarea.value.trim()) {
      document.getElementById('composeExtras').style.display = 'none';
    }
  }
});

// ESC to close modal
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
