/**
 * Shawarma & Middle Eastern Grill - Main JavaScript
 * Version: 1.1.0 (Icon-Only Control Engine)
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const htmlElement = document.documentElement;

  // --- 1. Theme Management (Light / Dark Mode) ---
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');

  // Init Theme from LocalStorage or System Preference
  const savedTheme = localStorage.getItem('sg_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  setTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const currentTheme = htmlElement.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('sg_theme', newTheme);
    });
  });

  function setTheme(theme) {
    htmlElement.setAttribute('data-bs-theme', theme);
    
    // Dynamically update Navbar Logo src according to theme
    const navLogos = document.querySelectorAll('.navbar-brand-logo');
    navLogos.forEach(logo => {
      if (theme === 'dark') {
        logo.src = 'assets/images/logo/logo-light.svg';
      } else {
        logo.src = 'assets/images/logo/logo-dark.svg';
      }
    });

    themeToggleBtns.forEach(btn => {
      if (theme === 'dark') {
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
          </svg>`;
        btn.setAttribute('aria-label', 'Switch to Light Mode');
        btn.setAttribute('title', 'Switch to Light Mode');
      } else {
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
          </svg>`;
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
        btn.setAttribute('title', 'Switch to Dark Mode');
      }
    });
  }

  // --- 2. RTL Layout Toggle (Right-To-Left) ---
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');

  const savedDir = localStorage.getItem('sg_dir') || 'ltr';
  setDirection(savedDir);

  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const currentDir = htmlElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      setDirection(newDir);
      localStorage.setItem('sg_dir', newDir);
    });
  });

  function setDirection(dir) {
    htmlElement.setAttribute('dir', dir);
    rtlToggleBtns.forEach(btn => {
      if (dir === 'rtl') {
        // In RTL mode: Show RTL text direction icon (lines aligned right with left arrow), clicking will switch to LTR
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" class="direction-icon">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5zm0 3.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h8.5a.5.5 0 0 1 .5.5zm0 3.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5zm0 3.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h8.5a.5.5 0 0 1 .5.5zM2.854 5.646a.5.5 0 0 1 0 .708L1.707 7.5H6.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0z"/>
          </svg>`;
        btn.setAttribute('aria-label', 'Switch to Left-to-Right (LTR) layout');
        btn.setAttribute('title', 'Switch to LTR');
      } else {
        // In LTR mode: Show LTR text direction icon (lines aligned left with right arrow), clicking will switch to RTL
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" class="direction-icon">
            <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3.5a.5.5 0 0 1 .5-.5h8.5a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5zm0 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3.5a.5.5 0 0 1 .5-.5h8.5a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5zm11.146-7.854a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H9.5a.5.5 0 0 1 0-1h4.793l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
          </svg>`;
        btn.setAttribute('aria-label', 'Switch to Right-to-Left (RTL) layout');
        btn.setAttribute('title', 'Switch to RTL');
      }
    });
  }

  // --- 3. Sticky Navbar Shadow on Scroll ---
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('is-sticky');
      } else {
        navbar.classList.remove('is-sticky');
      }
    });
  }

  // --- 4. Close Mobile Menu on Nav Item Click ---
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // --- 5. Back to Top Button ---
  let backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTopBtn';
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.setAttribute('title', 'Back to top');
    backToTopBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
      </svg>`;
    document.body.appendChild(backToTopBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

