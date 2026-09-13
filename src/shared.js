// Shared JS loaded by every project/guide page.
// Add anything here that should run site-wide (nav highlighting, analytics, etc).

console.log('shared.js loaded on', window.location.pathname);

// Example: highlight the current page's nav link, if a .site-nav exists.
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach((link) => {
    if (link.getAttribute('href') === path) {
      link.classList.add('font-semibold', 'text-slate-900');
    }
  });
});