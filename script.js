// ── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: '#accomplishments', label: 'Results' },
  { href: '#work',            label: 'Work' },
  { href: '#experience',      label: 'Experience' },
  { href: '#skills',          label: 'Skills' },
  { href: '#referrals',       label: 'References' },
  { href: '#contact',         label: 'Contact' },
  { href: 'https://fi.linkedin.com/in/nikopalovaara', label: 'LinkedIn', isLinkedIn: true, external: true },
];

const STATS = [
  [
    { number: '€15M+', label: 'Revenue generated across career',        context: 'Specialized in information technology. Spanning retail, telecom and B2B sales' },
    { number: '400+',  label: 'SME accounts managed simultaneously',    context: 'Elisa Oyj - Bookers Group, 2022–2023' },
    { number: '#1',    label: 'Best salesperson in Finland',            context: 'Gigantti Oy, Vantaa Tammisto' },
    { number: 'Top',   label: 'Customer satisfaction - SME portfolio',  context: 'Highest rated among peer portfolios at Elisa' },
  ],
  [
    { number: 'Global', label: 'Executive reach',                          context: 'Worked with C-level and senior decision-makers across Nordics, Germany, UK, Switzerland, Baltics, North America and more' },
    { number: '42',    label: 'Network - Hive Helsinki',                context: 'Ranked 3rd globally · Highly selective and competitive selection process' },
    { number: '3–5',   label: 'Teams led on construction projects',     context: 'Tehotytyt Rakennusapu - full P&L responsibility' },
    { number: '15+',   label: 'Years of customer-facing experience',    context: 'From frontline retail to enterprise account management' },
    { number: '3',     label: 'Languages spoken',                       context: 'Finnish · English · Swedish' },
  ],
];

const CASES = [
  {
    tag:    'Ownership',
    title:  'Client and prospect Account Management during sales team reconstruction',
    body:   'Responsible for company portfolio that normally would take 3-4 employees to handle. Generating sales including project management and consulting from planning to aftersales with SMB and some Enterprise companies over 1 year time period.',
    result: 'This taught me well to schedule my priorities instead of prioritizing my schedule.',
  },
  {
    tag:    'Ongoing',
    title:  'Building a startup as a founder around a ERP SaaS system from scratch',
    body:   'Translated an idea into a product and business by working with domain experts to find product-market fit, assembling the right team, and successfully communicating the vision to investors to raise initial funding.',
    result: 'From idea to funded product - with paying customers in the pipeline.',
  },

];

const TIMELINE = [
  {
    period: '2024 - 2025',
    org:    'Helsinki',
    title:  'Student - Software Development',
    company: 'Hive Helsinki (42 Network)',
    bullets: [
      'Selected through a highly competitive admission process into one of the world\'s top-ranked peer-learning coding schools',
      'Project-based curriculum in C, Unix, algorithms, memory management and peer code review',
      'Developed problem-solving discipline and technical rigour working under pressure in a collaborative environment',
    ],
    highlight: '42 Network ranked 3rd globally among higher education institions in computer science',
  },
  {
    period: '2022 - 2023',
    org:    'Helsinki',
    title:  'Account Manager',
    company: 'Elisa Oyj / Bookers Group Oy',
    bullets: [
      'Managed a portfolio of ~400+ SME accounts with full ownership of each customer relationship',
      'Identified growth opportunities through data and business environment analysis, driving solution sales across operator and IT service packages',
      'Collaborated cross-functionally with delivery and technical teams to ensure service quality',
    ],
    highlight: 'Top-ranked customer satisfaction across SME portfolios at Elisa',
  },
  {
    period: '2018 - 2021',
    org:    'Helsinki',
    title:  'Sales Associate',
    company: 'Kauppiasosuuskunta Veikon Kone',
    bullets: [
      'Responsible to CEO for day-to-day operations of the Helsinki store',
      'Consultative sales across a wide product range including complete solutions and services',
      'Actively monitored orders, campaign performance and inventory levels',
    ],
  },
  {
    period: '2016 - 2018',
    org:    'Helsinki',
    title:  'Site Supervisor',
    company: 'Tehotytyt Rakennusapu Ky',
    bullets: [
      'Led teams of 3–5 people on construction contracts, accountable for delivery and quality',
      'Handled full small-business operations: invoicing, procurement, resourcing, recruitment and on/offboarding',
      'Built the company\'s reputation as a reliable contractor in new project relationships',
    ],
    highlight: 'Built a new company\'s reputation as a trusted contractor from the ground up',
  },
  {
    period: '2010 - 2016',
    org:    'Vantaa',
    title:  'Sales Associate',
    company: 'Gigantti Oy - Vantaa Tammisto',
    bullets: [
      'Revenue-accountable sales and store operations across a large consumer electronics floor',
      'Ranked #1 salesperson in Finland within the Gigantti',
    ],
    highlight: 'Finland\'s best-performing salesperson - Gigantti',
  },
];

const SKILLS = {
  groups: [
    {
      category: 'Sales & Revenue',
      proof: 'Elisa · Gigantti · Veikon Kone · €15M+ career revenue',
      skills: ['B2B & SME solution sales', 'Account management', 'Pipeline management', 'Consultative selling', 'Contract negotiation', 'Upsell & cross-sell', 'New business development', 'Sales forecasting'],
    },
    {
      category: 'Customer & Relationships',
      proof: 'Top-rated SME portfolio at Elisa · 400+ accounts managed',
      skills: ['Client relationship management', 'RFP/RFQ responses, SOWs, and contract documentation', 'Stakeholder management', 'Executive presentations', 'Retention & churn reduction', 'NPS management'],
    },
    {
      category: 'Leadership & Operations',
      proof: 'Startup founder · Site supervisor · Full P&L responsibility',
      skills: ['Team leadership', 'Project coordination', 'Recruitment & on/offboarding', 'Budget & P&L management', 'Invoicing & procurement', 'Cross-functional collaboration', 'Market & competitor analysis'],
    },
    {
      category: 'CRM & Business Tools',
      proof: 'Elisa · Veikon Kone · Gigantti · Google Certified',
      skills: ['Salesforce CRM', 'Google Workspace', 'MS Office Suite', 'VoIP systems', 'Windows AD & Server', 'macOS · iOS · Android'],
    },
    {
      category: 'Technical & Development',
      proof: 'Hive Helsinki (42 Network) · Personal projects · GitHub',
      skills: ['C programming', 'Unix / Bash', 'SQL', 'Git & version control', 'Algorithms & data structures', 'Memory management', 'React', 'Node.js', 'Python'],
    },
  ],
};

const LANGUAGES = [
  { name: 'Finnish', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Swedish', level: 'Conversational' },
];

const REFERRALS = [
  { role: 'Team Lead · Direct Manager', name: 'Elisa Oyj / Bookers Group',       company: 'Account management & B2B sales, 2022–2023' },
  { role: 'CEO',                        name: 'Kauppiasosuuskunta Veikon Kone',   company: 'Retail sales & store operations, 2018–2021' },
  { role: 'Partner',                    name: 'Tehotytyt Rakennusapu Ky',         company: 'Site supervision & small business ops, 2016–2018' },
  { role: 'Store Manager',              name: 'Gigantti Oy - Vantaa Tammisto',    company: 'Consumer electronics sales, 2010–2016' },
  { role: 'Colleagues',                 name: 'Multiple roles & companies',       company: 'Peer references available across all positions' },
];


// ── RENDERERS ────────────────────────────────────────────────────────────────

const LI_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

function renderNav() {
  const linksHtml = NAV_LINKS.map(l => {
    if (l.isLinkedIn) {
      return `<li><a href="${l.href}" target="_blank" rel="noopener" class="nav-li-btn" aria-label="LinkedIn profile">${LI_SVG}</a></li>`;
    }
    return `<li><a href="${l.href}">${l.label}</a></li>`;
  }).join('');
  document.getElementById('navLinks').innerHTML = linksHtml;

  const drawerHtml = NAV_LINKS.map(l => {
    if (l.isLinkedIn) {
      return `<a href="${l.href}" target="_blank" rel="noopener" class="nav-drawer-li" onclick="closeNav()">${LI_SVG} LinkedIn</a>`;
    }
    return `<a href="${l.href}" onclick="closeNav()">${l.label}</a>`;
  }).join('');
  document.getElementById('navDrawerLinks').innerHTML = drawerHtml;
}

function renderStats() {
  STATS.forEach((group, i) => {
    const html = group.map(s => `
      <div class="stat-card">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-context">${s.context}</div>
      </div>`).join('');
    document.getElementById(`statsGrid${i + 1}`).innerHTML = html;
  });
}

function renderCases() {
  const html = CASES.map(c => `
    <div class="case-card${c.modifier ? ' ' + c.modifier : ''}">
      <span class="case-tag">${c.tag}</span>
      <h3>${c.title}</h3>
      <p>${c.body}</p>
      <div class="case-result">${c.result}</div>
    </div>`).join('');
  document.getElementById('casesGrid').innerHTML = html;
  document.getElementById('casesGrid').insertAdjacentHTML('afterend', '<p class="cases-coming-soon">More projects coming soon.</p>');
}

function renderTimeline() {
  const html = TIMELINE.map(t => `
    <div class="timeline-item">
      <div class="timeline-period">
        ${t.period}
        <div class="timeline-org">${t.org}</div>
      </div>
      <div class="timeline-content">
        <div class="timeline-header" role="button" tabindex="0" aria-expanded="false">
          <div>
            <h3>${t.title}</h3>
            <div class="timeline-company">${t.company}</div>
          </div>
          <span class="timeline-toggle" aria-hidden="true"></span>
        </div>
        <div class="timeline-body">
          <div class="timeline-body-inner">
            <ul>${t.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
            ${t.highlight ? `<div class="timeline-highlight">${t.highlight}</div>` : ''}
          </div>
        </div>
      </div>
    </div>`).join('');
  document.getElementById('timeline').innerHTML = html;

  // Accordion behaviour - only active on mobile
  document.querySelectorAll('.timeline-header').forEach(header => {
    function toggle() {
      if (window.innerWidth > 700) return; // desktop: always open
      const isOpen = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!isOpen));
    }
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
}

function renderSkills() {
  const groupsHtml = SKILLS.groups.map(g => `
    <div class="skill-group">
      <div class="skill-group-header">
        <h3>${g.category}</h3>
        <div class="skill-group-proof">${g.proof}</div>
      </div>
      <div class="skill-tags">${g.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
    </div>`).join('');

  document.getElementById('skillsLayout').innerHTML = `<div class="skills-groups">${groupsHtml}</div>`;

  const langHtml = LANGUAGES.map(l => `
    <div class="lang-card">
      <div class="lang-name">${l.name}</div>
      <div class="lang-level">${l.level}</div>
    </div>`).join('');
  document.getElementById('langRow').innerHTML = langHtml;
}

function renderReferrals() {
  const html = REFERRALS.map(r => `
    <div class="referral-card">
      <div class="referral-role">${r.role}</div>
      <div class="referral-name">${r.name}</div>
      <div class="referral-company">${r.company}</div>
    </div>`).join('');
  document.getElementById('referralsGrid').innerHTML = html;
}

// Run all renderers immediately
renderNav();
renderStats();
renderCases();
renderTimeline();
renderSkills();
renderReferrals();


// ── NAVIGATION BEHAVIOUR ─────────────────────────────────────────────────────

function toggleNav() {
  const drawer = document.getElementById('navDrawer');
  const btn = document.querySelector('.nav-toggle');
  drawer.classList.toggle('open');
  btn.classList.toggle('open');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function closeNav() {
  document.getElementById('navDrawer').classList.remove('open');
  document.querySelector('.nav-toggle').classList.remove('open');
  document.body.style.overflow = '';
}


// ── SMOOTH INERTIA SCROLL (lerp) ─────────────────────────────────────────────
// Wraps the page in a fixed container and lerps a transform on the scroller,
// giving a weighted, momentum feel without any library dependency.

(function () {
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Skip on touch-primary devices - native momentum is already great there
  if (window.matchMedia('(hover: none)').matches) return;

  const LERP = 0.14; // snappier feel, less lag on trackpad

  // Build the scroller wrapper
  const scroller = document.createElement('div');
  scroller.id = 'smooth-scroller';
  scroller.style.cssText = 'position:fixed;top:0;left:0;width:100%;will-change:transform;';

  // Move all body children into scroller
  while (document.body.firstChild) scroller.appendChild(document.body.firstChild);
  document.body.appendChild(scroller);

  // Body becomes the scroll container
  document.body.style.cssText = 'overflow-y:scroll;height:100%;';

  let currentY = 0;
  let targetY  = 0;
  let rafId    = null;

  function setHeight() {
    document.body.style.minHeight = scroller.scrollHeight + 'px';
  }
  setHeight();
  new ResizeObserver(setHeight).observe(scroller);

  function tick() {
    targetY = window.scrollY;
    currentY += (targetY - currentY) * LERP;

    // Stop the RAF when close enough to avoid unnecessary frames
    const diff = Math.abs(targetY - currentY);
    if (diff < 0.05) {
      currentY = targetY;
      scroller.style.transform = `translateY(${-currentY}px)`;
      rafId = null;
      return;
    }

    scroller.style.transform = `translateY(${-currentY}px)`;
    rafId = requestAnimationFrame(tick);
  }

  window.addEventListener('scroll', () => {
    if (!rafId) rafId = requestAnimationFrame(tick);
  }, { passive: true });

  // Anchor clicks: scroll window (not scroller) to section
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    // Account for fixed nav height
    const navH = document.querySelector('nav')?.offsetHeight || 0;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
    // closeNav if open
    if (document.getElementById('navDrawer').classList.contains('open')) closeNav();
  });
})();


// ── PARALLAX ─────────────────────────────────────────────────────────────────

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(hover: none)').matches) return;

  // Elements and their parallax speeds (fraction of scroll offset)
  // Positive = moves up slower than page (feels deeper / behind)
  // Negative = moves down (feels in front)
  const layers = [
    { selector: '.hero h1',        speed: 0.18 },
    { selector: '.hero-label',     speed: 0.22 },
    { selector: '.hero-sub',       speed: 0.14 },
    { selector: '.hero-cta-row',   speed: 0.10 },
    { selector: '.hero-bg-text',   speed: -0.08 }, // drifts opposite - feels like a background plate
  ];

  const nodes = layers.map(l => ({
    el: document.querySelector(l.selector),
    speed: l.speed,
  })).filter(n => n.el);

  // Section labels get a very gentle depth shift as their section enters view
  const sectionLabels = [...document.querySelectorAll('.section-label')];

  let ticking = false;

  function applyParallax() {
    const sy = window.scrollY;

    // Hero layers - only active while hero is visible
    const heroH = document.querySelector('.hero')?.offsetHeight || window.innerHeight;
    if (sy < heroH * 1.2) {
      nodes.forEach(({ el, speed }) => {
        el.style.transform = `translateY(${sy * speed}px)`;
        el.style.willChange = 'transform';
      });
    }

    // Section labels: subtle upward drift relative to their section's scroll progress
    sectionLabels.forEach(label => {
      const section = label.closest('section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh   = window.innerHeight;
      // Only when section is in view
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = Math.max(0, -rect.top) / section.offsetHeight;
      label.style.transform = `translateY(${-progress * 18}px)`;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }, { passive: true });

  applyParallax(); // initial paint
})();


// ── RICH SCROLL REVEALS ───────────────────────────────────────────────────────
// Replaces the basic .fade-in observer with per-element staggered reveals
// that use translateY + slight rotateX + blur for a layered feel.

(function () {
  // Reduced-motion: fall back to instant visibility
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Elements we want to reveal with custom animations
  // Each entry: selector, the animation class to add, stagger delay per child (ms)
  const REVEAL_GROUPS = [
    { parent: '#statsGrid1',     child: '.stat-card',      delay: 80  },
    { parent: '#statsGrid2',     child: '.stat-card',      delay: 80  },
    { parent: '#casesGrid',      child: '.case-card',      delay: 100 },
    { parent: '#timeline',       child: '.timeline-item',  delay: 90  },
    { parent: '#referralsGrid',  child: '.referral-card',  delay: 70  },
    { parent: '#skillsLayout',   child: '.skill-group',    delay: 120 },
    { parent: '#langRow',        child: '.lang-card',      delay: 80  },
  ];

  // Prepare children: assign CSS custom property for stagger delay
  REVEAL_GROUPS.forEach(({ parent, child, delay }) => {
    const p = document.querySelector(parent);
    if (!p) return;
    const children = [...p.querySelectorAll(child)];
    children.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${i * delay}ms`);
      if (!reduced) el.classList.add('will-reveal');
    });
  });

  // Hero elements get their own entrance
  ['.hero-label', '.hero h1', '.hero-sub', '.hero-cta-row'].forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el || reduced) return;
    el.style.setProperty('--reveal-delay', `${i * 120 + 100}ms`);
    el.classList.add('will-reveal', 'hero-reveal');
  });

  // Observe .fade-in containers - when they enter view, trigger children
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      // Reveal children inside this container
      e.target.querySelectorAll('.will-reveal').forEach(child => {
        child.classList.add('revealed');
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  // Hero fires immediately on load
  if (!reduced) {
    requestAnimationFrame(() => {
      document.querySelectorAll('.hero-reveal').forEach(el => el.classList.add('revealed'));
    });
  }

  // Section in-view for title underline
  const sectionIO = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('section').forEach(s => sectionIO.observe(s));

  // Active nav link
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const navIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelector(`.nav-links a[href="#${e.target.id}"]`)?.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => navIO.observe(s));

  // Skill bars - trigger when skills section visible
  const skillsLayout = document.getElementById('skillsLayout');
  if (skillsLayout) {
    const skillIO = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        skillsLayout.classList.add('visible');
        skillIO.disconnect();
      }
    }, { threshold: 0.1 });
    skillIO.observe(skillsLayout);
  }
})();


// ── CONTACT REVEAL ───────────────────────────────────────────────────────────

(function() {
  if (!document.getElementById('emailLink')) return;

  let humanInteracted = false;
  let revealed = false;

  ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'].forEach(evt => {
    window.addEventListener(evt, () => { humanInteracted = true; }, { once: true });
  });

  const decode = arr => arr.map(c => String.fromCharCode(c)).join('');

  const eParts = [
    [110,105,107,111],
    [46,112,97,108,111,118,97,97,114,97],
    [64],
    [111,117,116,108,111,111,107],
    [46,99,111,109]
  ];

  const pParts = [
    [43,51,53,56],
    [52,48,55,50],
    [50,51,49,51,51]
  ];

  const buildEmail    = () => eParts.map(decode).join('');
  const buildPhoneRaw = () => pParts.map(decode).join('');

  function formatPhoneDisplay(raw) {
    return raw.replace('+358', '0').replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3');
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(() => {});
  }

  function revealReal() {
    if (revealed || !humanInteracted) return;
    const email    = buildEmail();
    const phoneRaw = buildPhoneRaw();
    document.getElementById('emailLink').href = 'mailto:' + email;
    document.getElementById('phoneLink').href = 'tel:' + phoneRaw;
    document.getElementById('emailVal').textContent = email;
    document.getElementById('phoneVal').textContent = formatPhoneDisplay(phoneRaw);
    document.getElementById('footerEmail')?.setAttribute('href', 'mailto:' + email);
    revealed = true;
  }

  function handleClick(e, type) {
    e.preventDefault();
    revealReal();
    const valueToCopy  = type === 'email' ? buildEmail() : buildPhoneRaw();
    const displayValue = type === 'email' ? buildEmail() : formatPhoneDisplay(buildPhoneRaw());
    copyToClipboard(valueToCopy);

    // Remove hint styling from BOTH fields - once either is clicked, both are revealed
    document.getElementById('emailVal').classList.remove('contact-hidden');
    document.getElementById('phoneVal').classList.remove('contact-hidden');

    const el = document.getElementById(type === 'email' ? 'emailVal' : 'phoneVal');
    el.classList.add('contact-revealed', 'contact-copied-feedback');
    el.textContent = 'Copied! ✓';
    clearTimeout(el._copyTimer);
    el._copyTimer = setTimeout(() => {
      el.textContent = displayValue;
      el.classList.remove('contact-copied-feedback');
    }, 450);
  }

  // Honeypot values are already present in the hidden .hp-field links in the HTML.
  // We do NOT overwrite the visible "Click to reveal" spans, so first-time
  // visitors always see the placeholder text instead of a fake address.

  setTimeout(() => {
    document.getElementById('emailLink')
      ?.addEventListener('click', (e) => handleClick(e, 'email'));
    document.getElementById('phoneLink')
      ?.addEventListener('click', (e) => handleClick(e, 'phone'));

    const footerEmailEl = document.getElementById('footerEmail');
    if (footerEmailEl) {
      footerEmailEl.addEventListener('click', (e) => {
        e.preventDefault();
        revealReal();
        copyToClipboard(buildEmail());
        const orig = footerEmailEl.textContent;
        footerEmailEl.textContent = 'Copied! ✓';
        clearTimeout(footerEmailEl._copyTimer);
        footerEmailEl._copyTimer = setTimeout(() => {
          footerEmailEl.textContent = orig;
        }, 450);
      });
    }
  }, 800);
})();


// ── MAGNETIC GLOW ON CARDS ───────────────────────────────────────────────────

document.querySelectorAll('.stat-card, .case-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width  * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - rect.top)  / rect.height * 100) + '%');
  });
});


// ── AVATAR ───────────────────────────────────────────────────────────────────

(function() {
  const avatar = document.getElementById('liAvatar');
  if (avatar) avatar.src = 'data:image/png;base64,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';
})();

// ── BACK TO TOP + SCROLL PROGRESS ────────────────────────────────────────────

(function () {
  // Inject elements
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
  document.body.appendChild(btn);

  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.appendChild(bar);

  const skip = document.createElement('a');
  skip.href = '#accomplishments';
  skip.className = 'skip-link';
  skip.textContent = 'Skip to content';
  document.body.prepend(skip);

  // Scroll handler
  const SHOW_AFTER = 500;

  function onScroll() {
    const scrollY   = window.scrollY || window.pageYOffset;
    const docH      = document.documentElement.scrollHeight - window.innerHeight;
    const pct       = docH > 0 ? (scrollY / docH) * 100 : 0;

    bar.style.width = pct.toFixed(1) + '%';

    if (scrollY > SHOW_AFTER) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── HERO WELCOME TYPEWRITER ─────────────────────────────────────────────────

(function () {
  const photoWrap = document.querySelector('.hero-photo-wrap');
  if (!photoWrap) return;

  // Wrap photo + message in a flex row so text sits beside the photo
  const photoCol = photoWrap.parentElement;
  photoCol.classList.add('hero-photo-col--with-welcome');

  const el = document.createElement('div');
  el.className = 'hero-welcome';
  el.innerHTML = '<span class="hero-welcome-text"></span><span class="hero-welcome-cursor"></span>';
  photoCol.appendChild(el);

  const text   = 'Hi, I\'m Niko. Welcome - have a look around, it\'s a 3 minute read.';
  const target = el.querySelector('.hero-welcome-text');
  const cursor = el.querySelector('.hero-welcome-cursor');
  let i = 0;

  setTimeout(() => {
    el.classList.add('visible');
    const interval = setInterval(() => {
      target.textContent += text[i++];
      if (i >= text.length) {
        clearInterval(interval);
        // remove blink animation then fade out
        setTimeout(() => {
          cursor.style.animation = 'none';
          cursor.style.transition = 'opacity 1s';
          cursor.style.opacity = '0';
        }, 2000);
      }
    }, 38);
  }, 800); // slight delay so it doesn't fire before the page settles
})();
})();