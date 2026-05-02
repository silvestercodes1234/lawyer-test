/* ================================================
   Avocat Ion Proca — advocatus.md
   script.js
================================================ */

'use strict';

// ================================================
// ANNOUNCEMENT BAR
// ================================================
(function () {
  const bar   = document.getElementById('announcementBar');
  const close = document.getElementById('announcementClose');
  if (!bar || !close) return;

  close.addEventListener('click', () => {
    bar.style.display = 'none';
  });
}());

// ================================================
// HEADER — scroll shadow
// ================================================
(function () {
  const header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 48);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}());

// ================================================
// MOBILE NAV — hamburger toggle
// ================================================
(function () {
  const btn = document.getElementById('burgerBtn');
  const nav = document.getElementById('mainNav');
  if (!btn || !nav) return;

  function closeNav() {
    nav.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    const opening = !nav.classList.contains('is-open');
    if (opening) {
      nav.classList.add('is-open');
      btn.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      closeNav();
    }
  });

  // Close when any nav link is clicked
  nav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav();
  });
}());

// ================================================
// SCROLL REVEAL — Intersection Observer
// ================================================
(function () {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Stagger cards within a grid
      const parent = entry.target.parentElement;
      const isGrid = parent && (
        parent.classList.contains('servicii__grid') ||
        parent.classList.contains('trust-bar__grid')
      );

      if (isGrid) {
        const siblings = Array.from(parent.children).filter(el => el.classList.contains('reveal'));
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (idx * 75) + 'ms';
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  elements.forEach(el => observer.observe(el));
}());

// ================================================
// SMOOTH SCROLL — anchor links (offset for header)
// ================================================
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const headerHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-height')
      ) || 72;

      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}());

// ================================================
// CONTACT FORM — client-side validation + submit
// ================================================
(function () {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;

  // Remove error state when user types
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => input.classList.remove('is-error'));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Validate required fields
    let isValid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('is-error');
        if (isValid) field.focus(); // focus first invalid
        isValid = false;
      }
    });
    if (!isValid) return;

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Se trimite…';

    /*
     * Replace the setTimeout below with a real fetch() to your
     * backend endpoint or email service (e.g. Formspree, EmailJS).
     *
     * Example with Formspree:
     *   fetch('https://formspree.io/f/YOUR_ID', {
     *     method: 'POST',
     *     headers: { 'Accept': 'application/json' },
     *     body: new FormData(form),
     *   })
     *   .then(() => showSuccess())
     *   .catch(() => { submitBtn.disabled = false; submitBtn.textContent = originalText; });
     */
    setTimeout(showSuccess, 1400);

    function showSuccess() {
      success.hidden = false;
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}());
