'use strict';

const INTERNSHIPS = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'Razorpay',
    logo: '💳',
    location: 'Hyderabad',
    duration: '3 Months',
    stipend: '₹15,000/mo',
    skills: ['React', 'CSS3', 'JavaScript', 'REST APIs'],
    deadline: '15 Jun 2025',
    posted: '2 days ago',
    description: 'Join Razorpay\'s frontend team to build delightful payment interfaces used by millions of businesses. You\'ll work with React, TypeScript, and modern tooling in an agile environment.',
    cardAccent: '#2563eb',
    category: ['frontend', 'hyderabad'],
  },
  {
    id: 2,
    title: 'MERN Stack Intern',
    company: 'Swiggy',
    logo: '🛵',
    location: 'Remote',
    duration: '6 Months',
    stipend: '₹20,000/mo',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redis'],
    deadline: '20 Jun 2025',
    posted: '1 day ago',
    description: 'Swiggy\'s engineering team is looking for a motivated MERN Stack intern to help build and scale our ordering and delivery platform. You will get exposure to large-scale distributed systems.',
    cardAccent: '#f97316',
    category: ['mern', 'remote', 'fullstack'],
  },
  {
    id: 3,
    title: 'Full Stack Developer Intern',
    company: 'Zoho Corp',
    logo: '🔷',
    location: 'Hyderabad',
    duration: '4 Months',
    stipend: '₹12,000/mo',
    skills: ['React', 'Node.js', 'MySQL', 'Docker', 'AWS'],
    deadline: '25 Jun 2025',
    posted: '3 days ago',
    description: 'Be part of Zoho\'s product engineering team and work on cloud-based SaaS applications that serve over 80 million users globally.',
    cardAccent: '#7c3aed',
    category: ['fullstack', 'hyderabad'],
  },
  {
    id: 4,
    title: 'React Developer Intern',
    company: 'Freshworks',
    logo: '🌿',
    location: 'Remote',
    duration: '3 Months',
    stipend: '₹18,000/mo',
    skills: ['React', 'Redux', 'TypeScript', 'Jest', 'Figma'],
    deadline: '30 Jun 2025',
    posted: '5 days ago',
    description: 'Freshworks is building the next generation of CRM tools. As a React intern you\'ll join a cross-functional pod to implement UI features and write unit tests.',
    cardAccent: '#059669',
    category: ['frontend', 'remote'],
  },
  {
    id: 5,
    title: 'Web Developer Intern',
    company: 'Ola Electric',
    logo: '⚡',
    location: 'Hyderabad',
    duration: '2 Months',
    stipend: '₹10,000/mo',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP'],
    deadline: '10 Jun 2025',
    posted: '1 week ago',
    description: 'Join Ola Electric\'s digital team to build and maintain web properties for India\'s fastest-growing EV brand. Excellent opportunity for freshers.',
    cardAccent: '#0891b2',
    category: ['frontend', 'hyderabad'],
  },
  {
    id: 6,
    title: 'MERN Stack Developer Intern',
    company: 'Meesho',
    logo: '🛍️',
    location: 'Remote',
    duration: '5 Months',
    stipend: '₹22,000/mo',
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL'],
    deadline: '18 Jun 2025',
    posted: '2 days ago',
    description: 'Meesho\'s tech team powers India\'s largest social commerce platform. Work on real features used by 130M+ users in a fast-paced, high-ownership environment.',
    cardAccent: '#db2777',
    category: ['mern', 'remote', 'fullstack'],
  },
  {
    id: 7,
    title: 'Frontend Engineering Intern',
    company: 'CRED',
    logo: '🏦',
    location: 'Remote',
    duration: '3 Months',
    stipend: '₹25,000/mo',
    skills: ['React Native', 'TypeScript', 'GraphQL', 'Storybook'],
    deadline: '5 Jul 2025',
    posted: 'Today',
    description: 'CRED is India\'s most design-forward fintech. We\'re looking for frontend interns with an eye for detail and passion for great UX.',
    cardAccent: '#111111',
    category: ['frontend', 'remote'],
  },
  {
    id: 8,
    title: 'Full Stack Intern (Node + React)',
    company: 'Juspay',
    logo: '💡',
    location: 'Hyderabad',
    duration: '6 Months',
    stipend: '₹17,000/mo',
    skills: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'Kubernetes'],
    deadline: '28 Jun 2025',
    posted: '4 days ago',
    description: 'Juspay powers payments for Amazon and Flipkart. You\'ll get real production experience with mission-critical systems from day one.',
    cardAccent: '#f59e0b',
    category: ['fullstack', 'hyderabad', 'mern'],
  },
  {
    id: 9,
    title: 'Web Developer Intern',
    company: 'UpGrad',
    logo: '📚',
    location: 'Remote',
    duration: '3 Months',
    stipend: '₹14,000/mo',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Prisma'],
    deadline: '22 Jun 2025',
    posted: '6 days ago',
    description: 'UpGrad is India\'s leading online higher education platform. Build learner-facing features on our Next.js web app with a fully remote team.',
    cardAccent: '#8b5cf6',
    category: ['frontend', 'remote'],
  },
  {
    id: 10,
    title: 'React.js Developer Intern',
    company: 'Navi Technologies',
    logo: '🧭',
    location: 'Hyderabad',
    duration: '4 Months',
    stipend: '₹16,000/mo',
    skills: ['React', 'JavaScript', 'REST APIs', 'Webpack', 'Git'],
    deadline: '12 Jul 2025',
    posted: '3 days ago',
    description: 'Navi is revolutionizing financial services for India. Work in a startup environment with quick iteration cycles and full ownership of features.',
    cardAccent: '#10b981',
    category: ['frontend', 'hyderabad', 'mern'],
  },
  {
    id: 11,
    title: 'MERN Stack Intern',
    company: 'PhonePe',
    logo: '📱',
    location: 'Remote',
    duration: '6 Months',
    stipend: '₹28,000/mo',
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'Kafka'],
    deadline: '1 Jul 2025',
    posted: 'Today',
    description: 'PhonePe is India\'s largest payments app with 500M+ users. Work on real-time transaction systems, analytics dashboards, and merchant-facing tools.',
    cardAccent: '#6d28d9',
    category: ['mern', 'remote', 'fullstack'],
  },
  {
    id: 12,
    title: 'Full Stack Developer Intern',
    company: 'BrowserStack',
    logo: '🌐',
    location: 'Remote',
    duration: '4 Months',
    stipend: '₹20,000/mo',
    skills: ['React', 'Ruby on Rails', 'PostgreSQL', 'Docker', 'Jest'],
    deadline: '15 Jul 2025',
    posted: '2 days ago',
    description: 'BrowserStack is the world\'s leading software testing platform. Build features for test management and CI/CD integration products. Ship production code from week two.',
    cardAccent: '#ef4444',
    category: ['fullstack', 'remote'],
  },
];

let activeFilter = 'all';
let searchQuery = '';
let savedIds = JSON.parse(localStorage.getItem('internhub_saved') || '[]');

const cardsGrid       = document.getElementById('cardsGrid');
const noResults       = document.getElementById('noResults');
const resultsCount    = document.getElementById('resultsCount');
const searchInput     = document.getElementById('searchInput');
const searchBtn       = document.getElementById('searchBtn');
const filterChips     = document.getElementById('filterChips');
const themeToggle     = document.getElementById('themeToggle');
const themeIcon       = document.getElementById('themeIcon');
const hamburger       = document.getElementById('hamburger');
const navLinks        = document.getElementById('navLinks');
const modalOverlay    = document.getElementById('modalOverlay');
const modalClose      = document.getElementById('modalClose');
const modalBody       = document.getElementById('modalBody');
const savedGrid       = document.getElementById('savedGrid');
const savedEmpty      = document.getElementById('savedEmpty');
const savedCountLabel = document.getElementById('savedCountLabel');
const navSavedCount   = document.getElementById('navSavedCount');
const clearSavedBtn   = document.getElementById('clearSavedBtn');
const resetBtn        = document.getElementById('resetBtn');
const toast           = document.getElementById('toast');
const navbar          = document.getElementById('navbar');

/* THEME */
function initTheme() {
  const saved = localStorage.getItem('internhub_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  themeIcon.textContent = saved === 'dark' ? '☀️' : '🌙';
}
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('internhub_theme', next);
  themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
  themeIcon.style.transform = 'scale(1.4)';
  setTimeout(() => { themeIcon.style.transform = ''; }, 200);
});

/* NAVBAR */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* FILTER */
function getFiltered() {
  return INTERNSHIPS.filter(i => {
    const matchesFilter = activeFilter === 'all' || i.category.includes(activeFilter);
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q ||
      i.title.toLowerCase().includes(q) ||
      i.company.toLowerCase().includes(q) ||
      i.skills.some(s => s.toLowerCase().includes(q)) ||
      i.location.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });
}

/* RENDER CARDS */
function renderCards() {
  const filtered = getFiltered();
  cardsGrid.innerHTML = '';
  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
    resultsCount.innerHTML = 'Showing <strong>0</strong> internships';
    return;
  }
  noResults.classList.add('hidden');
  resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> internship${filtered.length !== 1 ? 's' : ''}`;
  filtered.forEach((item, idx) => {
    const isSaved = savedIds.includes(item.id);
    const card = document.createElement('div');
    card.className = 'intern-card';
    card.style.cssText = `--card-accent:${item.cardAccent};animation-delay:${idx * 0.05}s`;
    card.innerHTML = `
      <div class="card-header">
        <div class="company-logo">${item.logo}</div>
        <button class="card-save-btn ${isSaved ? 'saved' : ''}" data-id="${item.id}" title="${isSaved ? 'Unsave' : 'Save'}">🔖</button>
      </div>
      <div class="card-company">${item.company}</div>
      <div class="card-title">${item.title}</div>
      <div class="card-meta">
        <span class="meta-pill location">📍 ${item.location}</span>
        <span class="meta-pill duration">⏱ ${item.duration}</span>
        <span class="meta-pill stipend">💰 ${item.stipend}</span>
      </div>
      <div class="card-tags">${item.skills.slice(0, 4).map(s => `<span class="tag">${s}</span>`).join('')}</div>
      <div class="card-footer">
        <div class="card-deadline">Deadline: <span>${item.deadline}</span></div>
        <button class="btn-details" data-id="${item.id}">View Details →</button>
      </div>
    `;
    card.querySelector('.card-save-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSave(item.id);
    });
    card.querySelector('.btn-details').addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(item.id);
    });
    card.addEventListener('click', () => openModal(item.id));
    cardsGrid.appendChild(card);
  });
}

/* FILTER CHIPS */
filterChips.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  activeFilter = chip.dataset.filter;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  renderCards();
});

/* SEARCH */
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim();
  renderCards();
});
searchBtn.addEventListener('click', () => {
  searchQuery = searchInput.value.trim();
  renderCards();
  document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
});
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchBtn.click();
});

/* RESET */
resetBtn.addEventListener('click', () => {
  activeFilter = 'all';
  searchQuery = '';
  searchInput.value = '';
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.chip[data-filter="all"]').classList.add('active');
  renderCards();
});

/* SAVE TOGGLE */
function toggleSave(id) {
  const idx = savedIds.indexOf(id);
  if (idx === -1) {
    savedIds.push(id);
    showToast('Internship saved! 🔖');
  } else {
    savedIds.splice(idx, 1);
    showToast('Removed from saved.');
  }
  localStorage.setItem('internhub_saved', JSON.stringify(savedIds));
  updateSavedUI();
  renderCards();
  renderSaved();
  const badge = document.getElementById('navSavedCount');
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

function updateSavedUI() {
  navSavedCount.textContent = savedIds.length;
  savedCountLabel.textContent = savedIds.length;
}

/* RENDER SAVED */
function renderSaved() {
  const items = INTERNSHIPS.filter(i => savedIds.includes(i.id));
  savedGrid.innerHTML = '';
  if (items.length === 0) {
    savedGrid.appendChild(savedEmpty);
    return;
  }
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'saved-mini-card';
    card.innerHTML = `
      <div class="saved-card-info">
        <div class="saved-card-title">${item.title}</div>
        <div class="saved-card-company">${item.company} · ${item.location}</div>
      </div>
      <button class="saved-unsave" data-id="${item.id}" title="Remove">✕</button>
    `;
    card.querySelector('.saved-unsave').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSave(item.id);
    });
    card.addEventListener('click', () => openModal(item.id));
    savedGrid.appendChild(card);
  });
}

clearSavedBtn.addEventListener('click', () => {
  if (savedIds.length === 0) return;
  savedIds = [];
  localStorage.setItem('internhub_saved', JSON.stringify(savedIds));
  updateSavedUI();
  renderCards();
  renderSaved();
  showToast('All saved internships cleared.');
});

/* MODAL */
function openModal(id) {
  const item = INTERNSHIPS.find(i => i.id === id);
  if (!item) return;
  const isSaved = savedIds.includes(id);
  modalBody.innerHTML = `
    <div class="modal-header">
      <div class="modal-logo-row">
        <div class="modal-logo">${item.logo}</div>
        <div>
          <div class="modal-company-name">${item.company}</div>
          <div class="modal-posted">Posted ${item.posted}</div>
        </div>
      </div>
      <div class="modal-title">${item.title}</div>
    </div>
    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <div class="modal-meta-label">📍 Location</div>
        <div class="modal-meta-value">${item.location}</div>
      </div>
      <div class="modal-meta-item">
        <div class="modal-meta-label">⏱ Duration</div>
        <div class="modal-meta-value">${item.duration}</div>
      </div>
      <div class="modal-meta-item">
        <div class="modal-meta-label">💰 Stipend</div>
        <div class="modal-meta-value">${item.stipend}</div>
      </div>
      <div class="modal-meta-item">
        <div class="modal-meta-label">📅 Deadline</div>
        <div class="modal-meta-value">${item.deadline}</div>
      </div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">About this role</div>
      <p class="modal-desc">${item.description}</p>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Skills required</div>
      <div class="modal-skills">${item.skills.map(s => `<span class="modal-skill">${s}</span>`).join('')}</div>
    </div>
    <div class="modal-actions">
      <button class="btn-apply">Apply Now →</button>
      <button class="btn-save-modal ${isSaved ? 'saved' : ''}" id="modalSaveBtn">${isSaved ? '🔖 Saved' : '🔖 Save'}</button>
    </div>
  `;
  modalBody.querySelector('.btn-apply').addEventListener('click', () => {
    showToast('Redirecting to application... 🚀');
    setTimeout(closeModal, 500);
  });
  modalBody.querySelector('#modalSaveBtn').addEventListener('click', () => {
    toggleSave(id);
    const btn = modalBody.querySelector('#modalSaveBtn');
    const nowSaved = savedIds.includes(id);
    btn.textContent = nowSaved ? '🔖 Saved' : '🔖 Save';
    btn.classList.toggle('saved', nowSaved);
  });
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* TOAST */
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* INIT */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCards();
  renderSaved();
  updateSavedUI();
});
