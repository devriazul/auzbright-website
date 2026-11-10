/* Auzbright homepage — interactions (no dependencies) */
(function () {
  'use strict';
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Form endpoint ----------
     Set this to your CRM / form handler URL (it receives a JSON POST).
     While it is empty, enquiries are NOT sent anywhere. */
  var FORM_ENDPOINT = '';

  /* ---------- Sticky glass nav: compact state once the page scrolls ---------- */
  var siteNav = $('#site-nav');
  if (siteNav) {
    var navTicking = false;
    var updateNav = function () {
      navTicking = false;
      siteNav.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', function () {
      if (!navTicking) { navTicking = true; requestAnimationFrame(updateNav); }
    }, { passive: true });
    updateNav();
  }

  /* ---------- Desktop dropdowns ---------- */
  var ddButtons = $$('[data-onclick^="dd."]');
  function closeDropdowns(except) {
    ddButtons.forEach(function (b) {
      if (b === except) return;
      b.setAttribute('aria-expanded', 'false');
      var m = document.getElementById(b.getAttribute('aria-controls'));
      if (m) m.hidden = true;
    });
  }
  ddButtons.forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var m = document.getElementById(b.getAttribute('aria-controls'));
      var open = b.getAttribute('aria-expanded') === 'true';
      closeDropdowns(b);
      b.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (m) m.hidden = open;
    });
  });
  /* Dropdowns whose label is a link open on mouse hover; the caret button covers keyboard and touch */
  var hoverTimer = null;
  $$('.dd-hover').forEach(function (wrap) {
    var b = $('[data-onclick^="dd."]', wrap);
    var m = b && document.getElementById(b.getAttribute('aria-controls'));
    if (!m) return;
    wrap.addEventListener('pointerenter', function (e) {
      if (e.pointerType !== 'mouse') return;
      clearTimeout(hoverTimer);
      closeDropdowns(b);
      b.setAttribute('aria-expanded', 'true');
      m.hidden = false;
    });
    wrap.addEventListener('pointerleave', function (e) {
      if (e.pointerType !== 'mouse') return;
      hoverTimer = setTimeout(function () {
        b.setAttribute('aria-expanded', 'false');
        m.hidden = true;
      }, 150);
    });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.dd-wrap')) closeDropdowns(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var openBtn = ddButtons.filter(function (b) { return b.getAttribute('aria-expanded') === 'true'; })[0];
      closeDropdowns();
      if (openBtn) openBtn.focus();
    }
  });

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('[data-onclick="toggleMenu"]');
  var mnav = $('#mnav');
  if (menuBtn && mnav) {
    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
      mnav.hidden = open;
    });
  }
  $$('[data-onclick^="mg."]').forEach(function (b) {
    var key = b.getAttribute('data-onclick').split('.')[1];
    var sub = $('[data-mg="' + key + '"]');
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (sub) sub.hidden = open;
    });
  });

  /* ---------- Hero slider ---------- */
  var slides = $$('[data-slide]');
  var dots = $$('.dotbtn');
  var countEl = $('#slide-count');
  var pauseBtn = $('[data-onclick="togglePause"]');
  var current = 0, paused = reduceMotion, timer = null;
  // Slides 2+ ship without a real src so they don't compete with the first image.
  function loadSlideImg(s) {
    var img = s && s.querySelector('img[data-src]');
    if (!img) return;
    if (img.getAttribute('data-srcset')) img.srcset = img.getAttribute('data-srcset');
    img.src = img.getAttribute('data-src');
    img.removeAttribute('data-src');
    img.removeAttribute('data-srcset');
  }
  function show(i) {
    current = (i + slides.length) % slides.length;
    loadSlideImg(slides[current]);
    slides.forEach(function (s, n) { s.hidden = n !== current; });
    var cur = slides[current];
    cur.classList.remove('enter');
    void cur.offsetWidth; // restart the entrance animation
    cur.classList.add('enter');
    dots.forEach(function (d, n) { d.classList.toggle('on', n === current); d.setAttribute('aria-current', n === current ? 'true' : 'false'); });
    if (countEl) countEl.textContent = '0' + (current + 1) + ' / 0' + slides.length;
  }
  function setPaused(p) {
    paused = p;
    if (pauseBtn) {
      pauseBtn.setAttribute('aria-label', p ? 'Play slideshow' : 'Pause slideshow');
      var play = $('.i-play', pauseBtn), pause = $('.i-pause', pauseBtn);
      if (play) play.toggleAttribute('hidden', !p);
      if (pause) pause.toggleAttribute('hidden', p);
    }
    var live = slides.length ? slides[0].parentElement : null;
    if (live) live.setAttribute('aria-live', p ? 'polite' : 'off');
  }
  if (slides.length) {
    dots.forEach(function (d, n) { d.addEventListener('click', function () { show(n); setPaused(true); }); });
    var prevBtn = $('[data-onclick="prev"]'), nextBtn = $('[data-onclick="next"]');
    if (prevBtn) prevBtn.addEventListener('click', function () { show(current - 1); setPaused(true); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(current + 1); setPaused(true); });
    if (pauseBtn) pauseBtn.addEventListener('click', function () { setPaused(!paused); });
    setPaused(paused);
    // Hold rotation while the pointer is over the hero or focus is inside it.
    var sliderEl = slides[0].closest('.slider'), hoverHold = false, focusHold = false;
    if (sliderEl) {
      sliderEl.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') hoverHold = true; });
      sliderEl.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') hoverHold = false; });
      sliderEl.addEventListener('focusin', function () { focusHold = true; });
      sliderEl.addEventListener('focusout', function (e) { if (!sliderEl.contains(e.relatedTarget)) focusHold = false; });
    }
    timer = setInterval(function () { if (!paused && !hoverHold && !focusHold && !document.hidden) show(current + 1); }, 7000);
    // Fetch the other slides' images once the page has finished loading.
    var warm = function () { (window.requestIdleCallback || function (f) { setTimeout(f, 1200); })(function () { slides.forEach(loadSlideImg); }); };
    if (document.readyState === 'complete') warm(); else window.addEventListener('load', warm);
  }

  /* ---------- Deferred thumbnails ----------
     Images marked data-lazy-src wait until the hero image has loaded, then load as they
     come within 300px of the screen. Native lazy loading starts much earlier on slow
     connections, which delayed the hero image on phones. */
  var deferImgs = $$('img[data-lazy-src]');
  function loadDeferred(img) {
    if (!img.hasAttribute('data-lazy-src')) return;
    img.src = img.getAttribute('data-lazy-src');
    img.removeAttribute('data-lazy-src');
  }
  var deferStarted = false;
  function startDeferred() {
    if (deferStarted) return;
    deferStarted = true;
    if (!('IntersectionObserver' in window)) { deferImgs.forEach(loadDeferred); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { io.unobserve(en.target); loadDeferred(en.target); } });
    }, { rootMargin: '300px 0px' });
    deferImgs.forEach(function (i) { io.observe(i); });
  }
  if (deferImgs.length) {
    var heroImg = $('.slide img[fetchpriority="high"]');
    if (heroImg && !heroImg.complete) {
      heroImg.addEventListener('load', startDeferred, { once: true });
      heroImg.addEventListener('error', startDeferred, { once: true });
      setTimeout(startDeferred, 4000); // safety net
    } else startDeferred();
  }

  /* ---------- Service selector ---------- */
  var svcNames = { hw: 'Residential Heat Pump', ac: 'Air Conditioner', bat: 'Solar & Battery', ev: 'EV Charger', wf: 'Water Filter', led: 'LED Lighting' };
  var svcOrder = ['hw', 'ac', 'wf', 'bat', 'ev', 'led'];
  var selected = { hw: true };
  function updateSummary() {
    var names = svcOrder.filter(function (k) { return selected[k]; }).map(function (k) { return svcNames[k]; });
    var c = $('#sel-count'), n = $('#sel-names');
    if (c) c.textContent = names.length === 0 ? 'No upgrades selected yet' : names.length === 1 ? '1 upgrade selected' : names.length + ' upgrades selected';
    if (n) n.textContent = names.length ? names.join(' · ') : 'Pick one or more above — you can change this later';
  }
  $$('[data-onclick^="svc."]').forEach(function (b) {
    var key = b.getAttribute('data-onclick').split('.')[1];
    b.addEventListener('click', function () {
      selected[key] = !selected[key];
      var on = !!selected[key];
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      var tick = $('.tick path', b); if (tick) tick.setAttribute('stroke', on ? '#0E193F' : 'transparent');
      var st = $('.state', b); if (st) st.textContent = on ? '✓ Selected' : 'Select this upgrade';
      updateSummary();
    });
  });

  /* ---------- Eligibility form ---------- */
  var steps = $$('.step[data-step]');
  var stepNames = ['Property', 'Location', 'Upgrade & contact', 'Done'];
  var step = 1;
  function goStep(n) {
    step = n;
    steps.forEach(function (s) { s.hidden = Number(s.getAttribute('data-step')) !== n; });
    $$('[data-bar]').forEach(function (bar) { bar.classList.toggle('on', Number(bar.getAttribute('data-bar')) <= n); });
    var l = $('#step-label'), nm = $('#step-name');
    if (l) l.textContent = n < 4 ? 'Step ' + n + ' of 3' : 'Complete';
    if (nm) nm.textContent = stepNames[n - 1];
    var first = steps.filter(function (s) { return !s.hidden; })[0];
    var focusable = first && first.querySelector('input, select, button, h3');
    if (focusable && n > 1) { if (focusable.tagName === 'H3') focusable.setAttribute('tabindex', '-1'); focusable.focus({ preventScroll: true }); }
  }
  $$('input[name="ptype"]').forEach(function (r) {
    r.addEventListener('change', function () {
      $$('input[name="ptype"]').forEach(function (o) { o.closest('.opt').classList.toggle('on', o.checked); });
    });
  });
  var pc = $('#pc'), pcErr = $('#pc-err'), pcHelp = $('#pc-help'), pcWrap = pc ? pc.closest('.fld') : null;
  function setPcError(bad) {
    if (!pc) return;
    pc.setAttribute('aria-invalid', bad ? 'true' : 'false');
    pc.setAttribute('aria-describedby', bad ? 'pc-err' : 'pc-help');
    if (pcErr) pcErr.hidden = !bad;
    if (pcHelp) pcHelp.hidden = bad;
    if (pcWrap) pcWrap.classList.toggle('err', bad);
  }
  if (pc) pc.addEventListener('input', function () { pc.value = pc.value.replace(/\D/g, '').slice(0, 4); if (/^\d{4}$/.test(pc.value)) setPcError(false); });
  function on(act, fn) { $$('[data-onclick="' + act + '"]').forEach(function (b) { b.addEventListener('click', fn); }); }
  on('next1', function () { goStep(2); });
  on('next2', function () { if (pc && /^\d{4}$/.test(pc.value)) { setPcError(false); goStep(3); } else { setPcError(true); if (pc) pc.focus(); } });
  on('back', function () { goStep(Math.max(1, step - 1)); });
  on('submit', function () {
    var payload = {
      propertyType: (($('input[name="ptype"]:checked') || {}).parentElement || { textContent: '' }).textContent.trim(),
      postcode: pc ? pc.value : '',
      upgrade: ($('#up') || {}).value || '',
      selectedServices: svcOrder.filter(function (k) { return selected[k]; }).map(function (k) { return svcNames[k]; }),
      firstName: ($('#fn') || {}).value || '',
      mobile: ($('#mb') || {}).value || '',
      source: 'Homepage eligibility check'
    };
    if (FORM_ENDPOINT) {
      fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(function () {});
    }
    var dn = $('#done-name'), du = $('#done-upgrade');
    if (dn) dn.textContent = payload.firstName ? ', ' + payload.firstName : '';
    if (du) du.textContent = payload.upgrade ? payload.upgrade.toLowerCase() : 'upgrade';
    goStep(4);
  });
  on('restart', function () {
    ['#pc', '#fn', '#mb'].forEach(function (s) { var el = $(s); if (el) el.value = ''; });
    var up = $('#up'); if (up) up.value = '';
    setPcError(false); goStep(1);
  });

  /* ---------- Savings explainer: selectable cards (tabs) ---------- */
  var savTabs = $$('.sav-tab[role="tab"]');
  function selectSav(tab, focus) {
    savTabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  }
  savTabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      selectSav(t);
      // In the stacked layout the details sit below the cards; bring them into view.
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel && panel.getBoundingClientRect().top > window.innerHeight * 0.75) {
        panel.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
    t.addEventListener('keydown', function (e) {
      var n = savTabs.length, j = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') j = (i + 1) % n;
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') j = (i - 1 + n) % n;
      else if (e.key === 'Home') j = 0;
      else if (e.key === 'End') j = n - 1;
      if (j !== null) { e.preventDefault(); selectSav(savTabs[j], true); }
    });
  });

  /* ---------- Google reviews ---------- */
  $$('[data-onclick="r.toggle"]').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.parentElement.querySelector('.rv-text');
      var open = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', open ? 'false' : 'true');
      b.textContent = open ? 'Read more' : 'Show less';
      if (text) text.classList.toggle('full', !open);
    });
  });
  var track = $('.rv-track');
  function scrollReviews(dir) {
    if (!track) return;
    var card = $('.rv', track);
    var stepW = card ? card.getBoundingClientRect().width + 20 : track.clientWidth;
    track.scrollBy({ left: dir * stepW, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  on('rvPrev', function () { scrollReviews(-1); });
  on('rvNext', function () { scrollReviews(1); });

  /* ---------- FAQs ---------- */
  var faqBtns = $$('[data-onclick="f.toggle"]');
  faqBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var willOpen = b.getAttribute('aria-expanded') !== 'true';
      faqBtns.forEach(function (o) {
        var open = o === b && willOpen;
        o.setAttribute('aria-expanded', open ? 'true' : 'false');
        var ans = o.closest('div').querySelector('.faq-a'); if (ans) ans.hidden = !open;
        var i = $('.faq-i', o); if (i) i.classList.toggle('on', open);
        var p = $('.faq-i path', o);
        if (p) { p.setAttribute('d', open ? 'M4 10h12' : 'M10 4v12M4 10h12'); p.setAttribute('stroke', open ? '#FFFFFF' : '#0E193F'); }
      });
    });
  });

  /* ---------- Partner logos ---------- */
  var mq = $('.marquee-inner');
  var parBtn = $('[data-onclick="toggleParPause"]');
  function setParPaused(p) {
    if (mq) mq.classList.toggle('paused', p);
    if (parBtn) {
      parBtn.setAttribute('aria-label', p ? 'Play partner logos' : 'Pause partner logos');
      var play = $('.i-play', parBtn), pause = $('.i-pause', parBtn);
      if (play) play.toggleAttribute('hidden', !p);
      if (pause) pause.toggleAttribute('hidden', p);
    }
  }
  if (parBtn) parBtn.addEventListener('click', function () { setParPaused(!mq.classList.contains('paused')); });
  setParPaused(reduceMotion);

  /* ---------- Top bar: dismiss and remember for 14 days ---------- */
  var topbar = $('#topbar');
  on('dismissTopbar', function () {
    if (!topbar) return;
    try { localStorage.setItem('auzbright-topbar-dismissed', String(Date.now())); } catch (e) {}
    var logo = $('#site-nav a');
    if (reduceMotion) { topbar.hidden = true; if (logo) logo.focus(); return; }
    topbar.style.maxHeight = topbar.offsetHeight + 'px';
    void topbar.offsetHeight;
    topbar.classList.add('closing');
    topbar.style.maxHeight = '0px';
    setTimeout(function () { topbar.hidden = true; if (logo) logo.focus({ preventScroll: true }); }, 320);
  });

  /* ---------- Scroll reveal ----------
     Blocks below the fold fade up as they enter the screen; cards in a grid stagger.
     Content already on screen at load is left alone (no flash), nothing is hidden
     without JS, and "reduce motion" turns it off. Classes are removed once the
     animation ends so each element's own hover transitions come back. */
  (function () {
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    var GRID = '.g-2,.g-3,.g-4,.g-sav,.g-split,.g-half,.ev-grid,.g-foot';
    var groups = [];
    function kids(el) { return Array.prototype.slice.call(el.children); }
    function sameTagList(el) {
      var c = kids(el);
      return c.length >= 4 && c.every(function (x) { return x.tagName === c[0].tagName; });
    }
    function addBlock(el) {
      if (el.matches('script,style')) return;
      if (el.matches(GRID)) {
        // grid cells reveal as one staggered group; a column holding a list
        // of like items (e.g. the FAQ questions) staggers those items instead
        var cells = [];
        kids(el).forEach(function (c) { if (sameTagList(c)) groups.push(kids(c)); else cells.push(c); });
        if (cells.length) groups.push(cells);
      } else if (el.children.length === 1 && el.firstElementChild.matches(GRID)) {
        groups.push(kids(el.firstElementChild));
      } else {
        groups.push([el]);
      }
    }
    $$('main > section, footer').forEach(function (root) {
      var wrap = root.querySelector(':scope > .wrap');
      if (!wrap) { addBlock(root); return; }
      if (wrap.matches(GRID)) addBlock(wrap); else kids(wrap).forEach(addBlock);
      kids(root).forEach(function (c) { if (c !== wrap) addBlock(c); }); // e.g. the partner marquee
    });

    var fold = window.innerHeight * 0.92;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        io.unobserve(el);
        el.classList.add('in');
        var delay = parseFloat(el.style.transitionDelay) || 0;
        setTimeout(function () {
          el.classList.remove('reveal', 'in');
          el.style.transitionDelay = '';
        }, delay * 1000 + 900);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    groups.forEach(function (g) {
      g.forEach(function (el, i) {
        if (el.getBoundingClientRect().top < fold) return; // already visible: leave it
        el.classList.add('reveal');
        if (el.matches('.photo') || el.querySelector(':scope > img')) el.classList.add('reveal-img');
        if (i) el.style.transitionDelay = Math.min(i * 0.08, 0.48) + 's';
        io.observe(el);
      });
    });
    // Anything jumped past (anchor links, fast scrolling) appears at once, so
    // scrolling back up never shows blank space.
    var passTicking = false;
    window.addEventListener('scroll', function () {
      if (passTicking) return;
      passTicking = true;
      requestAnimationFrame(function () {
        passTicking = false;
        $$('.reveal:not(.in)').forEach(function (el) {
          if (el.getBoundingClientRect().bottom < 0) {
            io.unobserve(el);
            el.style.transition = 'none';
            el.classList.remove('reveal');
            el.style.transitionDelay = '';
            requestAnimationFrame(function () { el.style.transition = ''; });
          }
        });
      });
    }, { passive: true });
    window.addEventListener('beforeprint', function () {
      $$('.reveal').forEach(function (el) { el.classList.add('in'); });
    });
  })();

  /* ---------- Footer year ---------- */
  $$('footer span').forEach(function (s) { if (/^© \d{4} Auzbright/.test(s.textContent)) s.textContent = s.textContent.replace(/\d{4}/, String(new Date().getFullYear())); });
})();
