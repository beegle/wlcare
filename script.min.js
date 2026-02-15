/**
 * West Linn Care - Main JavaScript
 * Vanilla JS only - no libraries
 */

(function() {
  'use strict';

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', function() {
      const isOpen = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isOpen);
      nav.classList.toggle('is-open');

      // Prevent body scroll when menu is open
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a nav link
    const navLinks = nav.querySelectorAll('.nav-link, .nav-cta');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // ========================================
  // Smooth Scroll (only for same-page hash links)
  // ========================================
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      // Only handle if the target element exists on the current page
      var target;
      try { target = document.querySelector(href); } catch(err) { return; }
      if (target) {
        e.preventDefault();

        // Get header height for offset
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, href);
      }
    });
  });

  // ========================================
  // Tour Date Minimum (set to tomorrow)
  // ========================================
  const tourDateInput = document.getElementById('tour-date');

  if (tourDateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Format as YYYY-MM-DD
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');

    tourDateInput.setAttribute('min', `${year}-${month}-${day}`);
  }

  // ========================================
  // Form Validation & Submission
  // ========================================
  const tourForm = document.getElementById('tour-form');
  const formSuccess = document.getElementById('form-success');

  if (tourForm && formSuccess) {
    tourForm.addEventListener('submit', function(e) {
      // Clear previous error states
      const inputs = tourForm.querySelectorAll('input, textarea');
      inputs.forEach(function(input) {
        input.classList.remove('error');
      });

      // Check validity
      if (!tourForm.checkValidity()) {
        e.preventDefault();

        // Highlight invalid fields
        inputs.forEach(function(input) {
          if (!input.validity.valid) {
            input.classList.add('error');
          }
        });

        // Focus first invalid field
        const firstInvalid = tourForm.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }

        return;
      }

      // If using Formspree, let the form submit naturally
      // But handle the response for a better UX

      // Check if form action contains a placeholder
      const formAction = tourForm.getAttribute('action');
      if (formAction && formAction.includes('[YOUR_FORM_ID]')) {
        e.preventDefault();
        // Show success message anyway for demo purposes
        showFormSuccess();
        return;
      }

      // For Formspree with AJAX
      e.preventDefault();

      const formData = new FormData(tourForm);

      fetch(tourForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(function(response) {
        if (response.ok) {
          showFormSuccess();
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
        alert('There was a problem submitting the form. Please try calling us directly.');
      });
    });

    function showFormSuccess() {
      tourForm.style.display = 'none';
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // ========================================
  // Header Shadow on Scroll
  // ========================================
  const header = document.querySelector('.header');

  if (header) {
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    });
  }

  // ========================================
  // Scroll Fade-In Animations
  // ========================================
  var fadeInSections = document.querySelectorAll('.fade-in-section');

  if (fadeInSections.length > 0) {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      // If reduced motion or no IO support, show all immediately
      fadeInSections.forEach(function(section) {
        section.classList.add('is-visible');
      });
    } else {
      var fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      fadeInSections.forEach(function(section) {
        fadeObserver.observe(section);
      });
    }
  }

})();
