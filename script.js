// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
});

// Hamburger menu functionality
const hamburgerBtn = document.getElementById('hamburgerBtn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu on hamburger click
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

// Experience section: Work / Education tab toggle (only present on index.html)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');

        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        tabPanels.forEach(panel => {
            panel.classList.toggle('active', panel.id === `tab-${target}`);
        });
    });
});
