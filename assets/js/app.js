(function () {
  'use strict';

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => root.querySelectorAll(sel);

  const esc = (s) => String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');


  /* renderers */

  function renderStats() {
    const grid = $('#statsGrid');
    if (!grid) return;
    grid.innerHTML = STATS.map(s => `
      <article class="stat-card">
        <div class="stat-number">${esc(s.number)}</div>
        <div class="stat-label">${esc(s.label)}</div>
        <div class="stat-context">${esc(s.context)}</div>
      </article>
    `).join('');
  }

  function renderCases() {
    const grid = $('#casesGrid');
    if (!grid) return;
    grid.innerHTML = CASES.map(c => `
      <article class="case-card">
        <span class="case-tag">${esc(c.tag)}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.body)}</p>
        <div class="case-result">${esc(c.result)}</div>
      </article>
    `).join('');
  }

  function renderEmployerLogos() {
    const container = $('#employerLogos');
    if (!container) return;
    const logos = TIMELINE.flatMap(t => t.logos || []);
    if (!logos.length) return;

    container.innerHTML = logos.map(({ src, url, alt = '' }) => {
      const webp    = src.replace(/\.(jpe?g|png)$/i, '.webp');
      const safeUrl = url && /^https:\/\//i.test(url) ? url : null;

      const picture = `
        <picture>
          <source srcset="assets/images/${esc(webp)}" type="image/webp">
          <img src="assets/images/${esc(src)}" alt="${esc(alt)}"
               width="115" height="30"
               loading="lazy" decoding="async">
        </picture>`;

      return safeUrl
        ? `<a href="${esc(safeUrl)}" target="_blank" rel="noopener noreferrer" class="employer-logo-card" aria-label="${esc(alt)}">${picture}</a>`
        : `<div class="employer-logo-card" title="${esc(alt)}">${picture}</div>`;
    }).join('');
  }

  function renderTimeline() {
    const root = $('#timeline');
    if (!root) return;
    root.innerHTML = TIMELINE.map((t, i) => `
      <article class="timeline-item">
        <div class="timeline-period">
          ${esc(t.period)}
          <div class="timeline-org">${esc(t.org)}</div>
        </div>
        <div class="timeline-content">
          <div class="timeline-header" role="button" tabindex="0" aria-expanded="false" aria-controls="timeline-body-${i}">
            <div>
              <h3>${esc(t.title)}</h3>
              <div class="timeline-company">${esc(t.company)}</div>
            </div>
            <span class="timeline-toggle" aria-hidden="true"></span>
          </div>
          <div class="timeline-body" id="timeline-body-${i}">
            <div class="timeline-body-inner">
              <ul>${t.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
              ${t.highlight ? `<div class="timeline-highlight">${esc(t.highlight)}</div>` : ''}
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderSkills() {
    const layout = $('#skillsLayout');
    if (layout) {
      layout.innerHTML = `
        <div class="skills-groups">
          ${SKILLS.groups.map(g => `
            <div class="skill-group">
              <div class="skill-group-header">
                <h3>${esc(g.category)}</h3>
                <div class="skill-group-proof">${esc(g.proof)}</div>
              </div>
              <div class="skill-tags">
                ${g.skills.map(s => `<span class="skill-tag">${esc(s)}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    const langRow = $('#langRow');
    if (langRow) {
      langRow.innerHTML = LANGUAGES.map(l => `
        <div class="lang-card">
          <div class="lang-name">${esc(l.name)}</div>
          <div class="lang-level">${esc(l.level)}</div>
        </div>
      `).join('');
    }
  }

  function renderReferrals() {
    const grid = $('#referralsGrid');
    if (!grid) return;
    grid.innerHTML = REFERRALS.map(r => `
      <article class="referral-card">
        <div class="referral-role">${esc(r.role)}</div>
        <div class="referral-name">${esc(r.name)}</div>
        <div class="referral-company">${esc(r.company)}</div>
      </article>
    `).join('');
  }

  renderStats();
  renderCases();
  renderEmployerLogos();
  renderTimeline();
  renderSkills();
  renderReferrals();


  /* nav drawer (full-screen, focus-trapped, esc to close) */

  const focusableSel = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const drawer    = $('#navDrawer');
  const navToggle = $('#navToggle');
  const drawerClose = $('#navDrawerClose');
  let lastFocus = null;

  const drawerIsOpen = () => drawer?.classList.contains('open');

  function openDrawer() {
    if (!drawer) return;
    lastFocus = document.activeElement;
    drawer.classList.add('open');
    navToggle.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => drawerClose?.focus());
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    navToggle.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
    lastFocus?.focus?.();
  }

  function onDrawerKey(e) {
    if (!drawerIsOpen()) return;
    if (e.key === 'Escape') { e.preventDefault(); closeDrawer(); return; }
    if (e.key !== 'Tab') return;

    const items = [...drawer.querySelectorAll(focusableSel)].filter(el => !el.hasAttribute('disabled'));
    if (!items.length) return;
    const first = items[0];
    const last  = items[items.length - 1];

    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  if (drawer && navToggle) {
    navToggle.addEventListener('click', () => drawerIsOpen() ? closeDrawer() : openDrawer());
    drawerClose?.addEventListener('click', closeDrawer);
    drawer.addEventListener('click', e => { if (e.target.closest('a')) closeDrawer(); });
    document.addEventListener('keydown', onDrawerKey);
  }

  window.closeNav = closeDrawer;


  /* mobile-only timeline accordion (above 700px everything stays expanded) */

  $$('.timeline-header').forEach(header => {
    const toggle = () => {
      if (window.innerWidth > 700) return;
      const open = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!open));
    };
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  let wasMobile = window.innerWidth <= 700;
  window.addEventListener('resize', () => {
    const nowMobile = window.innerWidth <= 700;
    if (wasMobile && !nowMobile) {
      $$('.timeline-header[aria-expanded="true"]').forEach(h => h.setAttribute('aria-expanded', 'false'));
    }
    wasMobile = nowMobile;
  }, { passive: true });
})();
