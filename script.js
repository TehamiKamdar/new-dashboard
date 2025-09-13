// Simple script to handle active state for nav links
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.querySelector('.menu-toggle');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.sidebar-overlay');
  const dropdownParents = document.querySelectorAll('.has-dropdown');

  dropdownParents.forEach(parent => {
    const trigger = parent.querySelector('.nav-link');

    trigger.addEventListener('click', function (e) {
      e.preventDefault();

      // accordion behavior: close others
      dropdownParents.forEach(item => {
        if (item !== parent) item.classList.remove('open');
      });

      parent.classList.toggle('open');
    });
  });
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Mobile menu toggle
  menuToggle.addEventListener('click', function () {
    body.classList.toggle('sidebar-open');
  });

  // Close sidebar when overlay is clicked
  overlay.addEventListener('click', function () {
    body.classList.remove('sidebar-open');
  });


});