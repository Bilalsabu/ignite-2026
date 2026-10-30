/**
 * IGNITE 2026 - Main Interactive Scripts
 * TKM Institute of Technology | Dept. of Applied Science & Engineering
 */

// Global State
let currentSelectedEvent = 'quiz'; // 'quiz' or 'expo'
let currentStep = 1;
const LOCAL_STORAGE_KEY = 'ignite2026_registrations';

// Event Data Store for Modal details
const EVENT_DETAILS = {
  quiz: {
    title: 'QUIZ WHIZ V2.0',
    type: 'State-Level Science & Tech Quiz Competition',
    icon: '🧠',
    colorClass: 'quiz',
    tagline: 'A Quiz Challenge for the Brightest Young Science Minds!',
    eligibility: 'Open to students of Classes 8 to 12 (SSLC / CBSE / ICSE / +1 / +2 Science). Maximum 3 teams permitted per institution.',
    teamStructure: 'Strictly 2 members per team.',
    rounds: [
      {
        name: 'Round 1: Written / Digital Screening Prelims (10:30 AM - 11:45 AM)',
        desc: '30 challenging multiple-choice & numerical teaser questions covering Physics, Chemistry, Biology, Mathematics, Space Science, Computing, and Global Inventions.'
      },
      {
        name: 'Round 2: Grand Stage Finale (02:00 PM - 03:45 PM)',
        desc: 'Top 6 qualifying teams will take the stage. Featuring Buzzer Rounds, Visual Connect, Rapid Fire, and Clue-based Engineering mysteries.'
      }
    ],
    rules: [
      'No electronic gadgets, mobile phones, or smartwatches are permitted in the exam hall.',
      'In case of a tie in prelims, predetermined star-marked tiebreaker questions will be considered.',
      'Quizmaster\'s decision is final and binding on all matters.'
    ],
    prizes: [
      '🥇 First Prize: ₹ 20,000 Cash + Rolling Trophy + Mementos',
      '🥈 Second Prize: ₹ 15,000 Cash + Medals + Certificates',
      '🥉 Third Prize: ₹ 10,000 Cash + Medals + Certificates',
      '🎖️ Certificates of Participation for all registered teams.'
    ]
  },
  expo: {
    title: 'EXPLORA 26',
    type: 'State-Level School Science & Engineering Project Expo',
    icon: '🚀',
    colorClass: 'expo',
    tagline: 'Innovate • Create • Collaborate • Showcase Ideas Today, Solutions Tomorrow.',
    eligibility: 'High School (Classes 8-10) and Higher Secondary (+1 & +2) students. Teams can present working hardware models, software prototypes, or research demonstrators.',
    teamStructure: '2 to 4 members per team.',
    rounds: [
      {
        name: 'Stall Setup & Prototype Inspection (10:30 AM - 12:30 PM)',
        desc: 'Each team is allocated a 6x4 ft dedicated display stall with power connection. Teams will set up models and posters for preliminary inspection.'
      },
      {
        name: 'Jury Evaluation & Public Exhibition (02:00 PM - 03:45 PM)',
        desc: 'Senior university professors and industry innovators will visit each stall. Teams must present a 5-minute live demonstration followed by Q&A.'
      }
    ],
    rules: [
      'Working models must be safe and comply with safety guidelines. Hazardous chemicals or open fires are strictly prohibited.',
      'Participants requiring continuous 230V AC or water connections must specify this during registration.',
      'Evaluation criteria: Originality & Innovation (30%), Scientific Depth & Functionality (30%), Social/Environmental Impact (20%), Presentation & Q&A (20%).'
    ],
    prizes: [
      '🥇 First Prize: ₹ 20,000 Cash + Championship Trophy',
      '🥈 Second Prize: ₹ 15,000 Cash + Medals',
      '🥉 Third Prize: ₹ 10,000 Cash + Medals',
      '⭐ Special Fourth Prize (Expo Innovation): ₹ 5,000 Cash',
      '🎖️ Certificates of Merit for all exhibitors.'
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

    // Scroll spy
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

    // Close on link click
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
// MODAL 1: EVENT DETAILS ("Know More")
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
        <h4>Competition Format & Timeline</h4>
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
        <button class="btn btn-outline-gray" onclick="closeModal('eventDetailsModal')">Close</button>
        <button class="btn btn-navy" onclick="closeModal('eventDetailsModal'); openRegistrationModal('${eventType}')">
          Register for this Event &rarr;
        </button>
      </div>
    </div>
  `;

  const modal = document.getElementById('eventDetailsModal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// ==========================================
// MODAL 2: REGISTRATION WIZARD
// ==========================================
function openRegistrationModal(eventType = 'quiz') {
  currentSelectedEvent = eventType;
  currentStep = 1;

  // Update sidebar branding based on event
  const sidebarTitle = document.getElementById('sidebarEventTitle');
  const sidebarType = document.getElementById('sidebarType');
  const sidebarTeamSize = document.getElementById('sidebarTeamSize');
  const sidebarIcon = document.getElementById('sidebarIcon');
  const expoContainer = document.getElementById('expoExtraMembersContainer');
  const quizFields = document.getElementById('quizSpecificFields');
  const expoFields = document.getElementById('expoSpecificFields');
  const teamSub = document.getElementById('teamSizeSubtitle');

  if (eventType === 'quiz') {
    sidebarTitle.innerText = 'QUIZ WHIZ V2.0';
    sidebarType.innerText = 'Science Quiz Competition';
    sidebarTeamSize.innerText = '2 Students per Team';
    sidebarIcon.innerText = '🧠';
    expoContainer.style.display = 'none';
    quizFields.style.display = 'block';
    expoFields.style.display = 'none';
    teamSub.innerText = 'Enter the 2 student delegates who will represent your institution.';
  } else {
    sidebarTitle.innerText = 'EXPLORA 26';
    sidebarType.innerText = 'School Project Expo';
    sidebarTeamSize.innerText = '2 to 4 Students per Team';
    sidebarIcon.innerText = '🚀';
    expoContainer.style.display = 'block';
    quizFields.style.display = 'none';
    expoFields.style.display = 'block';
    teamSub.innerText = 'Enter 2 to 4 students who will exhibit the working project.';
  }

  goToStep(1);

  const modal = document.getElementById('registrationModal');
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

// Wizard Step Navigation with validation
function goToStep(stepNum) {
  if (stepNum > currentStep) {
    if (!validateCurrentStep(currentStep)) return;
  }

  currentStep = stepNum;

  // Toggle step panes
  for (let i = 1; i <= 4; i++) {
    const pane = document.getElementById(`formStep${i}`);
    const indicator = document.getElementById(`stepInd${i}`);
    if (pane) {
      if (i === stepNum) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    }

    if (indicator) {
      indicator.classList.remove('active');
      if (i === stepNum) {
        indicator.classList.add('active');
      } else if (i < stepNum) {
        indicator.classList.add('completed');
      } else {
        indicator.classList.remove('completed');
      }
    }
  }
}

// Validate inputs per step
function validateCurrentStep(step) {
  if (step === 1) {
    const schoolName = document.getElementById('schoolName').value.trim();
    const district = document.getElementById('schoolDistrict').value.trim();
    const board = document.getElementById('schoolBoard').value;
    const teacherName = document.getElementById('teacherName').value.trim();
    const teacherPhone = document.getElementById('teacherPhone').value.trim();

    if (!schoolName) {
      showToast('Please enter your School or Junior College Name');
      return false;
    }
    if (!district) {
      showToast('Please enter the District or City');
      return false;
    }
    if (!board) {
      showToast('Please select your School Board / Curriculum');
      return false;
    }
    if (!teacherName) {
      showToast('Please provide the Accompanying Teacher In-charge name');
      return false;
    }
    if (!teacherPhone || teacherPhone.length < 8) {
      showToast('Please provide a valid Teacher Contact Number');
      return false;
    }
    return true;
  }

  if (step === 2) {
    const m1Name = document.getElementById('m1Name').value.trim();
    const m1Class = document.getElementById('m1Class').value;
    const m1Phone = document.getElementById('m1Phone').value.trim();
    const m2Name = document.getElementById('m2Name').value.trim();
    const m2Class = document.getElementById('m2Class').value;

    if (!m1Name) {
      showToast('Please enter Participant 1 (Team Leader) name');
      return false;
    }
    if (!m1Class) {
      showToast('Please select Participant 1 Class / Grade');
      return false;
    }
    if (!m1Phone) {
      showToast('Please enter Participant 1 Mobile / WhatsApp Number');
      return false;
    }
    if (!m2Name) {
      showToast('Please enter Participant 2 name');
      return false;
    }
    if (!m2Class) {
      showToast('Please select Participant 2 Class / Grade');
      return false;
    }
    return true;
  }

  if (step === 3) {
    if (currentSelectedEvent === 'expo') {
      const projTitle = document.getElementById('projectTitle').value.trim();
      const projCat = document.getElementById('projectCategory').value;
      if (!projTitle) {
        showToast('Please enter your Project or Prototype Title');
        return false;
      }
      if (!projCat) {
        showToast('Please select your Project Domain / Category');
        return false;
      }
    }

    const consent = document.getElementById('rulesConsent').checked;
    if (!consent) {
      showToast('Please agree to the event guidelines and certification checkbox');
      return false;
    }
    return true;
  }

  return true;
}

// Submit and generate pass
function submitRegistration() {
  if (!validateCurrentStep(3)) return;

  const eventName = currentSelectedEvent === 'quiz' ? 'QUIZ WHIZ V2.0' : 'EXPLORA 26';
  const prefix = currentSelectedEvent === 'quiz' ? 'IGN26-QW-' : 'IGN26-EX-';
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const regId = prefix + randomNum;

  const school = document.getElementById('schoolName').value.trim();
  const district = document.getElementById('schoolDistrict').value.trim();
  const teacher = document.getElementById('teacherName').value.trim();
  const teacherPhone = document.getElementById('teacherPhone').value.trim();

  const m1Name = document.getElementById('m1Name').value.trim();
  const m1Class = document.getElementById('m1Class').value;
  const m2Name = document.getElementById('m2Name').value.trim();
  const m2Class = document.getElementById('m2Class').value;

  const m3Name = document.getElementById('m3Name').value.trim();
  const m3Class = document.getElementById('m3Class').value;
  const m4Name = document.getElementById('m4Name').value.trim();
  const m4Class = document.getElementById('m4Class').value;

  const projectTitle = currentSelectedEvent === 'expo' ? document.getElementById('projectTitle').value.trim() : null;

  // Build members list string
  let membersList = `1. ${m1Name} (${m1Class}) • 2. ${m2Name} (${m2Class})`;
  if (m3Name) membersList += ` • 3. ${m3Name} (${m3Class || 'HS'})`;
  if (m4Name) membersList += ` • 4. ${m4Name} (${m4Class || 'HS'})`;

  // Update pass UI
  document.getElementById('ticketIdDisplay').innerText = regId;
  document.getElementById('ticketEventDisplay').innerText = eventName;
  document.getElementById('ticketSchoolDisplay').innerText = school;
  document.getElementById('ticketDistrictDisplay').innerText = `${district} • Teacher: ${teacher} (${teacherPhone})`;
  document.getElementById('ticketMembersDisplay').innerText = membersList;

  // Render QR Canvas
  drawQRCode('ticketQrCanvas', regId, `${school} | ${eventName}`);

  // Save to LocalStorage
  const record = {
    regId,
    event: currentSelectedEvent,
    eventName,
    school,
    district,
    teacher,
    teacherPhone,
    membersList,
    projectTitle,
    timestamp: new Date().toISOString()
  };

  saveRegistration(record);

  // Trigger celebration confetti
  triggerConfetti();

  // Move to Step 4
  goToStep(4);
  showToast(`🎉 Registration Successful! Pass ID: ${regId}`);
}

// Local Storage Helper
function saveRegistration(record) {
  try {
    const list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    list.push(record);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('Storage error', e);
  }
}

// Lookup existing registration
function lookupRegistration() {
  const input = document.getElementById('lookupInput');
  const query = input.value.trim().toUpperCase();

  if (!query) {
    showToast('Please enter a Registration ID to check');
    return;
  }

  try {
    const list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    const match = list.find(r => r.regId.toUpperCase() === query || r.school.toUpperCase().includes(query));

    if (match) {
      // Populate and show in pass
      currentSelectedEvent = match.event;
      document.getElementById('ticketIdDisplay').innerText = match.regId;
      document.getElementById('ticketEventDisplay').innerText = match.eventName;
      document.getElementById('ticketSchoolDisplay').innerText = match.school;
      document.getElementById('ticketDistrictDisplay').innerText = `${match.district} • Teacher: ${match.teacher}`;
      document.getElementById('ticketMembersDisplay').innerText = match.membersList;

      drawQRCode('ticketQrCanvas', match.regId, `${match.school} | ${match.eventName}`);

      openRegistrationModal(match.event);
      goToStep(4);
      showToast(`Found verified pass for ${match.school}!`);
    } else {
      showToast('No record found for this ID. Please register your team.');
    }
  } catch (e) {
    showToast('Lookup failed');
  }
}

// High-fidelity procedural QR Canvas Renderer
function drawQRCode(canvasId, codeText, metaInfo) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  ctx.clearRect(0, 0, size, size);

  // Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);

  const cellSize = 5;
  const cols = Math.floor(size / cellSize);
  const rows = cols;

  ctx.fillStyle = '#0f2647';

  // Seeded pseudo-random matrix based on codeText
  let hash = 0;
  for (let i = 0; i < codeText.length; i++) {
    hash = (hash << 5) - hash + codeText.charCodeAt(i);
    hash |= 0;
  }

  // Draw 3 Corner Position Markers (Classic QR Finder Patterns)
  drawFinderPattern(ctx, 2, 2, cellSize);
  drawFinderPattern(ctx, cols - 9, 2, cellSize);
  drawFinderPattern(ctx, 2, rows - 9, cellSize);

  // Data modules
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Skip finder pattern zones
      if ((r < 10 && c < 10) || (r < 10 && c > cols - 11) || (r > rows - 11 && c < 10)) {
        continue;
      }
      const val = Math.sin((r * 17) + (c * 23) + hash) * 10000;
      if (val - Math.floor(val) > 0.48) {
        ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
      }
    }
  }

  // Center logo accent
  ctx.fillStyle = '#ff6b2b';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, cellSize * 2.2, 0, Math.PI * 2);
  ctx.fill();
}

function drawFinderPattern(ctx, col, row, cellSize) {
  const x = col * cellSize;
  const y = row * cellSize;
  const w = 7 * cellSize;

  // Outer square
  ctx.fillStyle = '#0f2647';
  ctx.fillRect(x, y, w, w);
  // Inner white
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x + cellSize, y + cellSize, w - (2 * cellSize), w - (2 * cellSize));
  // Inner black square
  ctx.fillStyle = '#0f2647';
  ctx.fillRect(x + (2 * cellSize), y + (2 * cellSize), w - (4 * cellSize), w - (4 * cellSize));
}

// Print Pass Function
function printPass() {
  const card = document.getElementById('digitalTicketCard');
  if (!card) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>IGNITE 2026 - Entry Pass</title>
      <style>
        body { font-family: sans-serif; display: flex; justify-content: center; padding: 40px; }
        .digital-ticket-container { border: 2px dashed #0f2647; border-radius: 16px; width: 620px; overflow: hidden; }
        .ticket-header-strip { background: #0f2647; color: #fff; padding: 14px 20px; display: flex; justify-content: space-between; }
        .ticket-id-badge { background: #243b5e; padding: 4px 10px; font-weight: bold; color: #fde047; }
        .ticket-body-grid { display: flex; justify-content: space-between; padding: 20px; gap: 20px; }
        .ticket-event-name { font-size: 20px; font-weight: bold; color: #ff6b2b; }
        .ticket-school-name { font-size: 16px; font-weight: bold; margin: 4px 0; }
        .ticket-footer-strip { background: #f1f5f9; padding: 8px 20px; font-size: 11px; display: flex; justify-content: space-between; }
        @media print { button { display: none; } }
      </style>
    </head>
    <body>
      ${card.outerHTML}
    </body>
    </html>
  `);
  printWindow.document.close();
  setTimeout(() => {
    printWindow.print();
  }, 400);
}

// Download Pass as Image / Text Card
function downloadPass() {
  showToast('💾 Preparing your Pass download...');
  setTimeout(() => {
    printPass();
  }, 500);
}

// Confetti Celebration
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b2b', '#0f2647', '#f59e0b', '#22c55e', '#38bdf8']
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);
  }
}

// Toast Notification System
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span>⚡</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Slider controls for events
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('prevEventBtn');
  const nextBtn = document.getElementById('nextEventBtn');
  const cardQuiz = document.getElementById('card-quiz');
  const cardExpo = document.getElementById('card-expo');

  if (prevBtn && nextBtn && cardQuiz && cardExpo) {
    prevBtn.addEventListener('click', () => {
      prevBtn.classList.add('active');
      nextBtn.classList.remove('active');
      cardQuiz.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    });

    nextBtn.addEventListener('click', () => {
      nextBtn.classList.add('active');
      prevBtn.classList.remove('active');
      cardExpo.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    });
  }
});
