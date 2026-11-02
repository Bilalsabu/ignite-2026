/**
 * IGNITE 2026 - Main Interactive Scripts & Framer-Style Physics
 * TKM Institute of Technology | Dept. of Applied Science & Engineering
 */

const GOOGLE_FORM_REGISTRATION_URL = 'https://forms.gle/A7SG6154X9wK2URp9';

// Event Data Store with Bento Prizes, Posters, and Official Guidelines
const EVENT_DETAILS = {
  quiz: {
    title: 'QUIZ WHIZ V2.0',
    type: 'State-Level Science & Tech Quiz Competition',
    icon: '🧠',
    colorClass: 'quiz',
    poster: 'assets/poster-quiz.png',
    tagline: 'A Quiz Challenge for the Brightest Young Science Minds!',
    eligibility: 'Open to High School and Higher Secondary students across all schools. Zero registration fee.',
    teamStructure: 'Strictly 2 members per team.',
    bentoPrizes: [
      { rank: '🥇 FIRST PRIZE', amount: '₹ 25,000', perk: 'Cash Award, Championship Trophy & Gold Medals', style: 'gold' },
      { rank: '🥈 SECOND PRIZE', amount: '₹ 15,000', perk: 'Cash Award, Runner-Up Trophy & Silver Medals', style: 'cyan' },
      { rank: '🥉 THIRD PRIZE', amount: '₹ 10,000', perk: 'Cash Award, Medals & State Merit Laurels', style: 'purple' },
      { rank: '🎖️ ALL DELEGATES', amount: 'Certificates', perk: 'Certificates of Excellence & Participation', style: 'emerald' }
    ],
    convenors: [
      { name: 'Dr. Sabeer Sain R', phone: '9400407912' },
      { name: 'Mr. Sreejith B', phone: '9526704357' }
    ],
    rounds: [
      {
        name: 'Round 1: Screening Prelims',
        desc: 'Challenging multiple-choice & teaser questions covering General Science, Physics, Chemistry, Mathematics, Tech Innovations, and Space Exploration.'
      },
      {
        name: 'Round 2: Grand Stage Finale',
        desc: 'Top qualifying teams battle on the auditorium stage with Buzzer Rounds, Visual Connect, Rapid Fire, Audio-Visual clips, and Science mysteries.'
      }
    ],
    rules: [
      'No electronic gadgets, mobile phones, or smartwatches are permitted in the competition hall.',
      'Quizmaster\'s decision is final and binding on all matters.',
      'Last date for registration: 22/11/2026. Event Date: November 24, 2026 at TKMIT Campus.'
    ]
  },
  expo: {
    title: 'PROJECT EXPO (EXPLORA 26)',
    type: 'State-Level School Science & Engineering Project Expo',
    icon: '🚀',
    colorClass: 'expo',
    poster: 'assets/poster-expo.png',
    tagline: 'Innovate • Create • Collaborate • Showcase Ideas Today, Solutions Tomorrow.',
    eligibility: 'High School and Higher Secondary students. Teams present working hardware models, science prototypes, or software demonstrators.',
    teamStructure: '2 to 4 members per team.',
    bentoPrizes: [
      { rank: '🥇 FIRST PRIZE', amount: '₹ 25,000', perk: 'Grand Cash Award, Championship Cup & Gold Medals', style: 'gold' },
      { rank: '🥈 SECOND PRIZE', amount: '₹ 15,000', perk: 'Cash Award, Runner-Up Trophy & Silver Medallions', style: 'cyan' },
      { rank: '🥉 THIRD PRIZE', amount: '₹ 10,000', perk: 'Cash Award, Bronze Trophy & Merit Honors', style: 'purple' },
      { rank: '⭐ 4TH PRIZE (INNOVATION)', amount: '₹ 5,000', perk: 'Special Expo Innovation Prototype Award', style: 'emerald' }
    ],
    convenors: [
      { name: 'Mr. Riyas AN', phone: '9496535483' },
      { name: 'Mr. Sarath Gopal', phone: '7034125964' }
    ],
    rounds: [
      {
        name: 'Stall Setup & Prototype Inspection',
        desc: 'Each team is allocated a dedicated display stall with power connection for stall setup and preliminary inspection.'
      },
      {
        name: 'Jury Evaluation & Live Demonstration',
        desc: 'Senior university professors and innovators inspect each stall. Teams present a 5-minute live demonstration followed by interactive Q&A.'
      }
    ],
    rules: [
      'Working models must be safe and comply with lab guidelines. Hazardous chemicals or open flames are prohibited.',
      'Participants requiring continuous 230V AC power must specify during registration.',
      'All team members must be present during the jury evaluation.',
      'Last date for registration: 22/11/2026. Event Date: November 24, 2026.'
    ]
  },
  reel: {
    title: 'REEL MAKING COMPETITION',
    type: 'Creative Short Video & Reel Contest',
    icon: '🎬',
    colorClass: 'reel',
    poster: 'assets/poster-reel.png',
    tagline: '“ Exciting Cash Prizes Await the Winners ” — Topic: Antidrug Awareness',
    eligibility: 'High School and Higher Secondary students. Open to both individuals and groups.',
    teamStructure: 'Individual or Group.',
    bentoPrizes: [
      { rank: '🥇 FIRST PRIZE', amount: 'Rs 15,000', perk: 'Championship Trophy, Cash Award & Memento', style: 'gold' },
      { rank: '🥈 SECOND PRIZE', amount: 'Rs 10,000', perk: 'Runner-Up Trophy, Cash Award & Memento', style: 'cyan' },
      { rank: '🚫 TOPIC MERIT', amount: 'Antidrug Theme', perk: 'Special Social Impact Recognition', style: 'purple' },
      { rank: '🎖️ ALL CREATORS', amount: 'State Certificate', perk: 'Official TKMIT Certificate of Honor', style: 'emerald' }
    ],
    instructions: [
      'Reels should be based on given theme: "Antidrug Awareness".',
      'Duration strictly 1 minute (60 seconds).',
      'Music, voice over and text can be added creatively.',
      'Reels must be shot in the TKMIT campus on the fest day.',
      'Mention the name of team and school along with reel.',
      'Participation is open to both individuals and groups.'
    ],
    rounds: [
      {
        name: 'On-Campus Reel Shooting & Editing',
        desc: 'Capture aesthetic shots and cinematic clips around TKMIT\'s lush campus based on the theme "Antidrug Awareness".'
      },
      {
        name: 'Jury Screening & Premiere',
        desc: 'Evaluation based on visual storytelling, social impact message, editing mastery, audio design, and audience engagement.'
      }
    ],
    rules: [
      'Content must be 100% original, shot on-site at TKMIT campus.',
      'Standard 9:16 vertical format (1080x1920) recommended.',
      'Last date for registration: 22/11/2026. Event Date: November 24, 2026.'
    ]
  }
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initNavSmoothScroll();
  initScrollProgressBar();
  initScrollRevealAnimations();
  initMagneticCardTilt();
});

// 1. Sticky Navbar & Active Navigation Highlighting
function initNavbarScroll() {
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// 2. Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }
}

// 3. Smooth Anchor Scroll
function initNavSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// 4. Framer-Style Scroll Progress Bar
function initScrollProgressBar() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

// 5. Scroll-driven Reveal Animations (Spring physics)
function initScrollRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// 6. Framer-Style 3D Magnetic Card Hover & Dynamic Glare
function initMagneticCardTilt() {
  const cards = document.querySelectorAll('.event-card, .bento-prize-card, .grand-prize-mega-card, .modal-bento-prize-card');
  
  if (window.matchMedia('(hover: none)').matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ==========================================
// EVENT DETAILS MODAL ("Know More")
// ==========================================
function openEventDetailsModal(eventType) {
  const data = EVENT_DETAILS[eventType];
  if (!data) return;

  const bodyEl = document.getElementById('eventDetailsBody');

  // Build Bento Prize Pool Cards HTML
  const bentoPrizesHtml = data.bentoPrizes.map(p => `
    <div class="modal-bento-prize-card modal-prize-${p.style}">
      <span class="modal-bento-rank">${p.rank}</span>
      <div class="modal-bento-amount">${p.amount}</div>
      <p class="modal-bento-perk">${p.perk}</p>
    </div>
  `).join('');

  // Build Convenors List HTML (if available)
  const convenorsHtml = data.convenors ? `
    <div class="details-section-block modal-convenors-block">
      <h4>Official Faculty Convenors</h4>
      <div class="convenors-grid">
        ${data.convenors.map(c => `
          <div class="convenor-card">
            <span class="convenor-name">${c.name}</span>
            <a href="tel:${c.phone}" class="convenor-phone">
              <span class="phone-icon">📞</span> ${c.phone}
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Build Specific Instructions HTML (for Reel Making etc.)
  const instructionsHtml = data.instructions ? `
    <div class="details-section-block modal-instructions-block">
      <h4>Competition Instructions & Guidelines</h4>
      <ul class="highlight-bullet-list">
        ${data.instructions.map(inst => `<li>${inst}</li>`).join('')}
      </ul>
    </div>
  ` : '';

  bodyEl.innerHTML = `
    <div class="modal-details-container">
      <!-- Modal Header -->
      <div class="modal-details-header">
        <div class="modal-details-icon ${data.colorClass}">
          ${data.icon}
        </div>
        <div class="modal-details-title-box">
          <span class="modal-event-type-badge">${data.type}</span>
          <h3>${data.title}</h3>
          <p class="modal-event-tagline">"${data.tagline}"</p>
        </div>
      </div>

      <!-- 1. Bento Style Prize Pool (FIRST) -->
      <div class="modal-section-box">
        <div class="modal-section-heading">
          <span class="heading-pill">🏆 PRIZE POOL</span>
          <h4>Exciting Cash Awards & Honors</h4>
        </div>
        <div class="modal-bento-prizes-grid">
          ${bentoPrizesHtml}
        </div>
      </div>

      <!-- 2. Official Event Poster Showcase -->
      <div class="modal-section-box modal-poster-showcase-box">
        <div class="modal-section-heading">
          <span class="heading-pill">🎨 OFFICIAL POSTER</span>
          <h4>Event Announcement & Poster</h4>
        </div>
        <div class="modal-poster-wrapper">
          <div class="modal-poster-preview-card" onclick="openPosterLightbox('${data.poster}', '${data.title}')">
            <img src="${data.poster}" alt="${data.title} Official Poster" class="modal-poster-img" loading="lazy">
            <div class="poster-hover-overlay">
              <span class="zoom-pill">🔍 Click to Enlarge Poster</span>
            </div>
          </div>
          <div class="modal-poster-info">
            <h5>${data.title} Official Release</h5>
            <p>Share this poster with your classmates, school clubs, and teachers.</p>
            <div class="poster-action-buttons">
              <a href="${data.poster}" download="${eventType}-poster-ignite26.png" class="btn btn-navy-sm">
                📥 Download Poster
              </a>
              <button class="btn btn-outline-glow-sm" onclick="openPosterLightbox('${data.poster}', '${data.title}')">
                🔍 Fullscreen View
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Eligibility & Team Composition -->
      <div class="details-section-block">
        <h4>Eligibility & Team Composition</h4>
        <div class="meta-pills-row">
          <div class="meta-pill"><strong>Eligibility:</strong> ${data.eligibility}</div>
          <div class="meta-pill"><strong>Team Size:</strong> ${data.teamStructure}</div>
        </div>
      </div>

      <!-- 4. Competition Instructions (if present) -->
      ${instructionsHtml}

      <!-- 5. Competition Format & Rounds -->
      <div class="details-section-block">
        <h4>Competition Format</h4>
        <div class="rounds-timeline">
          ${data.rounds.map((r, i) => `
            <div class="round-step">
              <div class="round-step-number">0${i + 1}</div>
              <div class="round-step-content">
                <strong>${r.name}</strong>
                <p>${r.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 6. Official Rules -->
      <div class="details-section-block">
        <h4>Official Guidelines & Rules</h4>
        <ul class="modal-rules-list">
          ${data.rules.map(rule => `<li>${rule}</li>`).join('')}
        </ul>
      </div>

      <!-- 7. Convenors -->
      ${convenorsHtml}

      <!-- Modal Bottom Actions -->
      <div class="details-action-bar">
        <button class="btn btn-navy-card" onclick="closeModal('eventDetailsModal')">Close</button>
        <a href="${GOOGLE_FORM_REGISTRATION_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-orange-card">
          Register on Google Form (Free) &rarr;
        </a>
      </div>
    </div>
  `;

  const modal = document.getElementById('eventDetailsModal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  initMagneticCardTilt();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ==========================================
// POSTER LIGHTBOX PREVIEW
// ==========================================
function openPosterLightbox(imgSrc, title) {
  const modal = document.getElementById('posterLightboxModal');
  const imgEl = document.getElementById('lightboxPosterImg');
  const titleEl = document.getElementById('lightboxPosterTitle');
  const dlBtn = document.getElementById('lightboxDownloadBtn');

  if (!modal || !imgEl) return;

  imgEl.src = imgSrc;
  if (titleEl) titleEl.textContent = title ? `${title} Official Poster` : 'Official Poster';
  if (dlBtn) {
    dlBtn.href = imgSrc;
    dlBtn.download = `${title || 'ignite26'}-poster.png`;
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closePosterLightbox(e) {
  if (e && e.target && e.target.classList.contains('poster-lightbox-container')) return;
  const modal = document.getElementById('posterLightboxModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

// ==========================================
// ALL PRIZES MODAL (Event-wise Breakdown)
// ==========================================
function openAllPrizesModal() {
  const modal = document.getElementById('allPrizesModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

// Mobile Event Cards Stacking Scroll Effect (Framer smoothness)
function initMobileCardStacking() {
  if (window.innerWidth > 768) return;

  const eventCards = document.querySelectorAll('.event-card');
  if (!eventCards.length) return;

  window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight * 0.25;

    eventCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      // If card has stuck to its top position and next card is overlapping
      if (rect.top <= (96 + index * 18)) {
        card.classList.add('is-stacked');
      } else {
        card.classList.remove('is-stacked');
      }
    });
  }, { passive: true });
}

// Call on load and resize
window.addEventListener('resize', initMobileCardStacking);
document.addEventListener('DOMContentLoaded', initMobileCardStacking);

// Global ESC key listener to close active modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePosterLightbox();
    closeModal('eventDetailsModal');
    closeModal('allPrizesModal');
  }
});

