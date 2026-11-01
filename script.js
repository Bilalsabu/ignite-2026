/**
 * IGNITE 2026 - Main Interactive Scripts
 * TKM Institute of Technology | Dept. of Applied Science & Engineering
 */

const GOOGLE_FORM_REGISTRATION_URL = 'https://forms.gle/A7SG6154X9wK2URp9';

// Event Data Store for Modal details
const EVENT_DETAILS = {
  quiz: {
    title: 'QUIZ WHIZ V2.0',
    type: 'State-Level Science & Tech Quiz Competition',
    icon: '🧠',
    colorClass: 'quiz',
    tagline: 'A Quiz Challenge for the Brightest Young Science Minds!',
    eligibility: 'Open to High School and Higher Secondary students. No registration fee.',
    teamStructure: 'Strictly 2 members per team.',
    rounds: [
      {
        name: 'Round 1: Screening Prelims',
        desc: 'Challenging multiple-choice & teaser questions covering General Science, Physics, Chemistry, Mathematics, Tech, and Global Innovations.'
      },
      {
        name: 'Round 2: Grand Stage Finale',
        desc: 'Top qualifying teams will battle on stage with Buzzer Rounds, Visual Connect, Rapid Fire, and Science mysteries.'
      }
    ],
    rules: [
      'No electronic gadgets, mobile phones, or smartwatches are permitted in the competition hall.',
      'Quizmaster\'s decision is final and binding on all matters.',
      'Last date for registration: 22/11/2026. Event Date: November 24, 2026.'
    ],
    prizes: [
      '🥇 Attractive Cash Prizes, Championship Trophies & Medals',
      '🎖️ Certificates of Excellence for winners & Certificates of Participation for all delegates.'
    ]
  },
  expo: {
    title: 'PROJECT EXPO (EXPLORA 26)',
    type: 'State-Level School Science & Engineering Project Expo',
    icon: '🚀',
    colorClass: 'expo',
    tagline: 'Innovate • Create • Collaborate • Showcase Ideas Today, Solutions Tomorrow.',
    eligibility: 'High School and Higher Secondary students. Teams can present working hardware models, prototypes, or science demonstrators.',
    teamStructure: '2 to 4 members per team.',
    rounds: [
      {
        name: 'Stall Setup & Prototype Inspection',
        desc: 'Each team is allocated a dedicated display stall with power connection for stall setup and preliminary inspection.'
      },
      {
        name: 'Jury Evaluation & Live Demonstration',
        desc: 'Senior university professors and innovators inspect each stall. Teams present a 5-minute live demonstration followed by Q&A.'
      }
    ],
    rules: [
      'Working models must be safe and comply with lab guidelines. Hazardous chemicals or open flames are prohibited.',
      'Participants requiring continuous 230V AC power must specify during registration.',
      'Last date for registration: 22/11/2026. Event Date: November 24, 2026.'
    ],
    prizes: [
      '🥇 Grand Cash Prizes, Championship Trophy & Medals',
      '⭐ Special 4th Prize Category for Expo Innovation (₹ 5,000)',
      '🎖️ Certificates of Merit for all exhibitors.'
    ]
  },
  reel: {
    title: 'REEL MAKING CONTEST',
    type: 'Creative Short Video & Reel Competition',
    icon: '🎬',
    colorClass: 'reel',
    tagline: 'Capture the Science Spark! Tell a visually stunning science or innovation story.',
    eligibility: 'High School and Higher Secondary school students. Individuals or teams of up to 2 members.',
    teamStructure: '1 to 2 members per team.',
    rounds: [
      {
        name: 'Reel Submission & Campus Showcase',
        desc: 'Produce a 30 to 60-second vertical video (9:16 aspect ratio) themed around Science Wonders, Tech Inventions, or Campus Innovation.'
      },
      {
        name: 'Creative Screening & Jury Review',
        desc: 'Evaluation based on visual storytelling, editing creativity, scientific accuracy, and audience engagement.'
      }
    ],
    rules: [
      'Duration strictly between 30 and 60 seconds. Must be original content created by the registered students.',
      'High-definition vertical format (1080x1920) recommended.',
      'Last date for registration: 22/11/2026. Event Date: November 24, 2026.'
    ],
    prizes: [
      '🏆 Exciting Cash Prizes & Mementos for Top Creative Reels',
      '🎖️ Official Certificates of Honor for all shortlisted creators.'
    ]
  }
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initNavSmoothScroll();
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
    const scrollPosition = window.scrollY + 120;

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
  });
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

// ==========================================
// EVENT DETAILS MODAL ("Know More")
// ==========================================
function openEventDetailsModal(eventType) {
  const data = EVENT_DETAILS[eventType];
  if (!data) return;

  const bodyEl = document.getElementById('eventDetailsBody');
  bodyEl.innerHTML = `
    <div class="modal-details-container">
      <div class="modal-details-header">
        <div class="modal-details-icon ${data.colorClass}">
          ${data.icon}
        </div>
        <div class="modal-details-title-box">
          <span>${data.type}</span>
          <h3>${data.title}</h3>
        </div>
      </div>

      <div class="details-section-block">
        <p class="lead-quote" style="font-style: italic; color: #475569; margin-bottom: 16px;">
          "${data.tagline}"
        </p>
      </div>

      <div class="details-section-block">
        <h4>Eligibility & Team Composition</h4>
        <p><strong>Eligibility:</strong> ${data.eligibility}</p>
        <p style="margin-top: 6px;"><strong>Team Size:</strong> ${data.teamStructure}</p>
      </div>

      <div class="details-section-block">
        <h4>Competition Format</h4>
        <ul>
          ${data.rounds.map(r => `<li><strong>${r.name}:</strong> ${r.desc}</li>`).join('')}
        </ul>
      </div>

      <div class="details-section-block">
        <h4>Official Guidelines & Rules</h4>
        <ul>
          ${data.rules.map(rule => `<li>${rule}</li>`).join('')}
        </ul>
      </div>

      <div class="details-section-block">
        <h4>Prizes & Accolades</h4>
        <ul>
          ${data.prizes.map(pz => `<li><strong>${pz}</strong></li>`).join('')}
        </ul>
      </div>

      <div class="details-action-bar">
        <button class="btn btn-navy-card" onclick="closeModal('eventDetailsModal')">Close</button>
        <a href="${GOOGLE_FORM_REGISTRATION_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-orange-card">
          Register on Google Form &rarr;
        </a>
      </div>
    </div>
  `;

  const modal = document.getElementById('eventDetailsModal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}
