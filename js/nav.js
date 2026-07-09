// Hamburger menu functionality
const hamburgerBtn = document.getElementById('hamburgerBtn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', hamburgerBtn.classList.contains('active'));
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        nav.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        if (window.innerWidth <= 1024) {
            hamburgerBtn.classList.remove('active');
            nav.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
    }
});

// Smooth scroll for anchor nav links (no active-state tracking — just navigate)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href.startsWith('#')) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
