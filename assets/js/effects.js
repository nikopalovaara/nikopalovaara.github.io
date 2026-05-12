(function () {
  'use strict';

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => root.querySelectorAll(sel);

  const motionMQ = matchMedia('(prefers-reduced-motion: reduce)');
  const touchMQ  = matchMedia('(hover: none)');
  let reduceMotion = motionMQ.matches;
  let isTouch      = touchMQ.matches;
  motionMQ.addEventListener('change', e => { reduceMotion = e.matches; });
  touchMQ.addEventListener('change',  e => { isTouch = e.matches; });

  function rafThrottle(fn) {
    let queued = false;
    return function (...args) {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        fn.apply(this, args);
        queued = false;
      });
    };
  }


  /* glass sweep on hover. Class-driven (not :hover) because backdrop-filter
     breaks :hover-triggered animations on descendants in some Chromium versions. */
  function initGlassSweep() {
    if (isTouch) return;

    const targets = [
      '.stat-card', '.case-card', '.referral-card', '.lang-card',
      '.contact-link:not(.contact-link--badge):not(.contact-link--static)',
    ];

    targets.forEach(sel => $$(sel).forEach(card => {
      if (card.classList.contains('glass-shine')) return;
      card.classList.add('glass-shine');
      const sweep = document.createElement('div');
      sweep.className = 'glass-shine-sweep';
      card.appendChild(sweep);

      card.addEventListener('mouseenter', () => {
        card.classList.remove('is-sweeping');
        // double-rAF forces a recalc so re-adding the class restarts the animation
        requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('is-sweeping')));
      });
      card.addEventListener('animationend', e => {
        if (e.animationName === 'glass-shine-sweep') card.classList.remove('is-sweeping');
      });
    }));
  }


  /* back-to-top button + scroll progress bar */
  function initScrollUI() {
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    btn.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
    document.body.appendChild(btn);

    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);

    const footer = $('footer');
    const SHOW_BTN_AFTER = 500;

    const onScroll = rafThrottle(() => {
      const y    = scrollY;
      const docH = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (docH > 0 ? (y / docH) * 100 : 0).toFixed(1) + '%';
      const footerInView = footer && footer.getBoundingClientRect().top < innerHeight;
      btn.classList.toggle('visible', y > SHOW_BTN_AFTER && !footerInView);
    });

    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* smooth-scroll in-page anchors with offset for the fixed nav */
  function initAnchorScroll() {
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navH = $('nav')?.offsetHeight || 0;
      const top  = target.getBoundingClientRect().top + scrollY - navH - 12;
      scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });

      if (typeof window.closeNav === 'function' && $('#navDrawer')?.classList.contains('open')) {
        window.closeNav();
      }
    });
  }


  /* scroll parallax on hero layers + section labels */
  function initParallax() {
    if (reduceMotion || isTouch) return;

    const layerSpec = [
      { sel: '.hero h1',      speed:  0.18 },
      { sel: '.hero-sub',     speed:  0.14 },
      { sel: '.hero-cta-row', speed:  0.10 },
      { sel: '.hero-bg-text', speed: -0.08 },
    ];
    const layers = layerSpec
      .map(({ sel, speed }) => ({ el: $(sel), speed }))
      .filter(l => l.el);

    const labels = [...$$('.section-label')]
      .map(el => {
        const section = el.closest('section');
        return section ? { el, section, height: section.offsetHeight } : null;
      })
      .filter(Boolean);

    let heroH = $('.hero')?.offsetHeight || innerHeight;
    let inHero = false;

    function clearHero() {
      layers.forEach(({ el }) => { el.style.transform = ''; });
    }

    const update = rafThrottle(() => {
      if (reduceMotion || isTouch) {
        if (inHero) { clearHero(); inHero = false; }
        return;
      }
      const y = scrollY;
      if (y < heroH * 1.4) {
        layers.forEach(({ el, speed }) => {
          el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
        });
        inHero = true;
      } else if (inHero) {
        clearHero();
        inHero = false;
      }

      labels.forEach(l => {
        const r = l.section.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        const p = Math.min(1, Math.max(0, -r.top) / l.height);
        l.el.style.transform = `translate3d(0, ${-p * 18}px, 0)`;
      });
    });

    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', () => {
      heroH = $('.hero')?.offsetHeight || innerHeight;
      labels.forEach(l => { l.height = l.section.offsetHeight; });
    }, { passive: true });

    update();
  }


  /* scroll reveals + active nav highlight */
  function initReveals() {
    // [parent, child, ms stagger between siblings]
    const groups = [
      ['#employerLogos', '.employer-logo-card',  75],
      ['#statsGrid',     '.stat-card',           65],
      ['#casesGrid',     '.case-card',          100],
      ['#timeline',      '.timeline-item',       90],
      ['#referralsGrid', '.referral-card',       70],
      ['#skillsLayout',  '.skill-group',        120],
      ['#langRow',       '.lang-card',           80],
    ];

    if (!reduceMotion) {
      groups.forEach(([parent, child, stagger]) => {
        const p = $(parent);
        if (!p) return;
        p.querySelectorAll(child).forEach((el, i) => {
          el.style.setProperty('--reveal-delay', `${i * stagger}ms`);
          el.classList.add('will-reveal');
        });
      });

      ['.hero h1', '.hero-sub', '.hero-cta-row'].forEach((sel, i) => {
        const el = $(sel);
        if (!el) return;
        el.style.setProperty('--reveal-delay', `${i * 130 + 100}ms`);
        el.classList.add('will-reveal', 'hero-reveal');
      });
    }

    const fadeIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visible');
        e.target.querySelectorAll('.will-reveal').forEach(c => c.classList.add('revealed'));
        fadeIO.unobserve(e.target);
      });
    }, { threshold: 0.08 });
    $$('.js-reveal').forEach(el => fadeIO.observe(el));

    const sectionIO = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
    }, { threshold: 0.12 });
    $$('section').forEach(s => sectionIO.observe(s));

    const navIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        $$('.nav-links a').forEach(l => l.classList.remove('active'));
        $(`.nav-links a[href="#${e.target.id}"]`)?.classList.add('active');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    $$('section[id]').forEach(s => navIO.observe(s));

    if (!reduceMotion) {
      requestAnimationFrame(() => {
        $$('.hero-reveal').forEach(el => el.classList.add('revealed'));
      });
    }
  }


  /* pause infinite CSS animations while their elements are off-screen */
  function initAnimPause() {
    if (reduceMotion) return;
    ['.hero', 'nav'].forEach(sel => {
      const el = $(sel);
      if (!el) return;
      new IntersectionObserver(([entry]) => {
        el.classList.toggle('anim-paused', !entry.isIntersecting);
      }, { threshold: 0 }).observe(el);
    });
  }


  /* hero typewriter — the wrapper is in the HTML so layout is reserved from
     first paint; this only fills in the text. */
  function initHeroTypewriter() {
    const el = $('.hero-welcome');
    if (!el) return;
    const target = el.querySelector('.hero-welcome-text');
    const cursor = el.querySelector('.hero-welcome-cursor');
    if (!target || !cursor) return;

    const text = "Hi, I'm Niko.\nWelcome - have a look around.\nIt's a 3-minute read.";

    if (reduceMotion) {
      target.textContent = text;
      el.classList.add('visible');
      cursor.style.display = 'none';
      return;
    }

    const typeMs    = 38;
    const startMs   = 800;
    const fadeAfter = 2000;

    setTimeout(() => {
      el.classList.add('visible');
      let i = 0;
      const id = setInterval(() => {
        target.textContent += text[i++];
        if (i < text.length) return;
        clearInterval(id);
        setTimeout(() => {
          cursor.style.animation  = 'none';
          cursor.style.transition = 'opacity 1s';
          cursor.style.opacity    = '0';
        }, fadeAfter);
      }, typeMs);
    }, startMs);
  }


  /* contact reveal — fetches email/phone from a Cloudflare Worker once
     Turnstile clears the user. After unlock, click copies to clipboard. */
  function initContact() {
    const WORKER_URL = 'https://portfolio-contact.nikopalovaara.workers.dev';
    const PROD_KEY   = '0x4AAAAAADNVmqVKeiuTqUqT';
    const TEST_KEYS = {
      'pass':         '1x00000000000000000000BB',
      'fail':         '2x00000000000000000000BB',
      'visible-pass': '1x00000000000000000000AA',
      'visible-fail': '2x00000000000000000000AB',
      'interactive':  '3x00000000000000000000FF',
    };
    const urlKey  = new URLSearchParams(location.search).get('turnstile');
    const siteKey = (urlKey && TEST_KEYS[urlKey]) || PROD_KEY;

    const MAX_RETRIES   = 3;
    const RESET_DELAY   = 2500;
    const DEFAULT_LABEL = 'Verify you’re human to see contact details';

    const formatPhone = raw => raw.replace('+358', '0').replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3');

    let email = null;
    let phone = null;
    let revealed   = false;
    let verifying  = false;
    let widgetId   = null;
    let resetTimer = null;
    let retries    = 0;
    const copyTimers = new WeakMap();

    const setStatus = msg => {
      const label = $('#turnstileBox .turnstile-label');
      if (label) label.textContent = msg;
    };
    const markError = on => $('#turnstileBox')?.classList.toggle('turnstile-box--error', on);

    function showRetryButton() {
      if ($('#turnstileBox .turnstile-retry-btn')) return;
      const box = $('#turnstileBox');
      if (!box) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'turnstile-retry-btn';
      btn.textContent = 'Try again';
      btn.addEventListener('click', () => {
        retries = 0;
        btn.remove();
        markError(false);
        setStatus(DEFAULT_LABEL);
        try { window.turnstile.reset(widgetId); }
        catch { setStatus('Verification unavailable. Please refresh.'); }
      });
      box.appendChild(btn);
    }

    function scheduleReset() {
      clearTimeout(resetTimer);
      retries++;
      if (retries > MAX_RETRIES) { showRetryButton(); return; }
      resetTimer = setTimeout(() => {
        if (revealed || widgetId === null) return;
        try { window.turnstile.reset(widgetId); }
        catch { setStatus('Verification unavailable. Please refresh.'); }
      }, RESET_DELAY);
    }

    const copy = text => navigator.clipboard?.writeText(text).catch(() => {});

    function unlock() {
      const emailLink  = $('#emailLink');
      const phoneLink  = $('#phoneLink');
      const emailVal   = $('#emailVal');
      const phoneVal   = $('#phoneVal');
      const footerLink = $('#footerEmail');
      const box        = $('#turnstileBox');

      if (emailLink) {
        emailLink.href = `mailto:${email}`;
        emailLink.classList.add('contact-link--unlocked');
        emailLink.removeAttribute('aria-disabled');
        emailLink.removeAttribute('tabindex');
      }
      if (phoneLink) {
        phoneLink.href = `tel:${phone}`;
        phoneLink.classList.add('contact-link--unlocked');
        phoneLink.removeAttribute('aria-disabled');
        phoneLink.removeAttribute('tabindex');
      }
      if (emailVal) { emailVal.textContent = email; emailVal.classList.remove('contact-hidden'); }
      if (phoneVal) { phoneVal.textContent = formatPhone(phone); phoneVal.classList.remove('contact-hidden'); }
      footerLink?.setAttribute('href', `mailto:${email}`);
      box?.classList.add('verified');
      revealed = true;
    }

    function onError(msg) {
      verifying = false;
      setStatus(msg);
      markError(true);
      scheduleReset();
    }

    async function onTurnstileSuccess(token) {
      if (revealed || verifying) return;
      verifying = true;
      try {
        const res = await fetch(WORKER_URL, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ token }),
        });
        if (!res.ok) throw new Error('Verification failed');
        const data = await res.json();
        if (!data?.email || !data?.phone) throw new Error('Invalid response');
        email = data.email;
        phone = data.phone;
        retries = 0;
        $('#turnstileBox .turnstile-retry-btn')?.remove();
        unlock();
      } catch {
        onError('Verification failed. Retrying…');
      } finally {
        verifying = false;
      }
    }

    function flashCopied(el, restoreText) {
      if (!el) return;
      el.classList.add('contact-copied-feedback');
      el.textContent = 'Copied ✓';
      clearTimeout(copyTimers.get(el));
      copyTimers.set(el, setTimeout(() => {
        el.textContent = restoreText;
        el.classList.remove('contact-copied-feedback');
      }, 600));
    }

    function onContactClick(e, type) {
      if (!revealed) { e.preventDefault(); return; }
      e.preventDefault();
      const value   = type === 'email' ? email : phone;
      const display = type === 'email' ? email : formatPhone(phone);
      copy(value);
      flashCopied($(type === 'email' ? '#emailVal' : '#phoneVal'), display);
    }

    $('#emailLink')?.addEventListener('click', e => onContactClick(e, 'email'));
    $('#phoneLink')?.addEventListener('click', e => onContactClick(e, 'phone'));

    const footerLink = $('#footerEmail');
    if (footerLink) {
      const orig = footerLink.textContent;
      footerLink.addEventListener('click', e => {
        if (!revealed) { e.preventDefault(); return; }
        e.preventDefault();
        copy(email);
        flashCopied(footerLink, orig);
      });
    }

    function renderTurnstile() {
      const container = $('#turnstileWidget');
      if (!container || widgetId !== null) return;
      if (!window.turnstile?.render) {
        setStatus('Verification unavailable');
        return;
      }
      try {
        widgetId = window.turnstile.render(container, {
          sitekey: siteKey,
          callback: onTurnstileSuccess,
          'error-callback':   () => onError('Verification failed. Retrying…'),
          'expired-callback': () => onError('Verification expired. Retrying…'),
          'timeout-callback': () => onError('Verification timed out. Retrying…'),
          theme: 'dark',
        });
      } catch {
        setStatus('Verification unavailable');
      }
    }

    // Cloudflare invokes this when its API script finishes loading. The inline
    // stub in <head> sets _turnstileReady if the async script beat us here.
    window.onTurnstileLoad = renderTurnstile;
    if (window._turnstileReady) renderTurnstile();
  }


  /* critical first, decorative on idle */
  const whenIdle = window.requestIdleCallback || (cb => setTimeout(cb, 200));

  initScrollUI();
  initAnchorScroll();
  initReveals();
  initHeroTypewriter();
  initContact();

  whenIdle(initGlassSweep);
  whenIdle(initParallax);
  whenIdle(initAnimPause);
})();
