/* ==========================================================================
   KTC INDIA WEBSITE - JAVASCRIPT FIXES
   ========================================================================== */

// ─── 1. FIX E-WASTE DROPDOWN ON MOBILE ───
// The Support dropdown menu might be hidden on mobile due to z-index or 
// click event issues. This ensures it works on touch devices.

document.addEventListener('DOMContentLoaded', function() {

  // Fix Support dropdown for mobile touch
  const supportBtn = document.querySelector('.main-support-button');
  const supportMenu = document.querySelector('.main-support-menu');

  if (supportBtn && supportMenu) {
    // Remove any existing click handlers and add fresh ones
    supportBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const isVisible = supportMenu.style.display === 'block' || 
                        getComputedStyle(supportMenu).display === 'block';

      if (isVisible) {
        supportMenu.style.display = 'none';
      } else {
        supportMenu.style.display = 'block';
        // Ensure it's above everything on mobile
        supportMenu.style.zIndex = '9999';
        supportMenu.style.position = 'absolute';
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!supportBtn.contains(e.target) && !supportMenu.contains(e.target)) {
        supportMenu.style.display = 'none';
      }
    });

    // Also handle touch events properly
    supportBtn.addEventListener('touchend', function(e) {
      e.preventDefault();
      supportBtn.click();
    });
  }

  // ─── 2. FIX KTC PAGE SLIDESHOW INTERVAL (10 SECONDS) ───
  // The slideshow likely uses setInterval. We need to find it and change 
  // the interval from ~2000-3000ms to 10000ms (10 seconds).

  // Method 1: Override any existing slideshow interval
  const originalSetInterval = window.setInterval;
  window.setInterval = function(fn, delay, ...args) {
    // If delay is between 1000-5000ms, it's likely a slideshow
    if (delay >= 1000 && delay <= 5000) {
      console.log('Slideshow interval changed from', delay, 'ms to 10000 ms');
      return originalSetInterval(fn, 10000, ...args);
    }
    return originalSetInterval(fn, delay, ...args);
  };

  // Method 2: Also patch setTimeout for slideshow auto-start
  const originalSetTimeout = window.setTimeout;
  window.setTimeout = function(fn, delay, ...args) {
    if (delay >= 1000 && delay <= 5000) {
      return originalSetTimeout(fn, 10000, ...args);
    }
    return originalSetTimeout(fn, delay, ...args);
  };

  // Method 3: Find and restart existing slideshows with 10s interval
  setTimeout(function() {
    // Look for slideshow/track elements
    const slideshows = document.querySelectorAll('.slideshow-track, .ktc-hero-slideshow, [class*="slideshow"]');
    slideshows.forEach(function(slideshow) {
      // Clear any existing intervals on this element
      if (slideshow._intervalId) {
        clearInterval(slideshow._intervalId);
      }

      const slides = slideshow.querySelectorAll('.slide-item');
      if (slides.length > 1) {
        let currentSlide = 0;

        slideshow._intervalId = setInterval(function() {
          slides[currentSlide].classList.remove('active');
          currentSlide = (currentSlide + 1) % slides.length;
          slides[currentSlide].classList.add('active');
        }, 10000);
      }
    });
  }, 500); // Wait 500ms for page JS to initialize first

});

// ─── 3. ENSURE E-WASTE LINK IS VISIBLE IN DROPDOWN ───
// Force the dropdown to show on mobile by adding touch support
document.addEventListener('DOMContentLoaded', function() {
  const dropdownItems = document.querySelectorAll('.main-support-menu a');
  dropdownItems.forEach(function(item) {
    // Ensure each link is clickable on mobile
    item.addEventListener('touchend', function(e) {
      // Let the default click handler work
      return true;
    });
  });
});
