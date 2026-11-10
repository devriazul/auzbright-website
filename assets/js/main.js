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
  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, n) { s.hidden = n !== current; });
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
    timer = setInterval(function () { if (!paused && !document.hidden) show(current + 1); }, 7000);
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

  /* ---------- Footer year ---------- */
  $$('footer span').forEach(function (s) { if (/^© \d{4} Auzbright/.test(s.textContent)) s.textContent = s.textContent.replace(/\d{4}/, String(new Date().getFullYear())); });
})();
