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

        // Navigation active state
        window.addEventListener('scroll', () => {
            let current = '';
            
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.pageYOffset + window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            
            // Check if we're at the bottom of the page (within 100px)
            if (scrollPosition >= docHeight - 100) {
                current = 'contact';
            } else {
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 200;
                    if (window.pageYOffset >= sectionTop) {
                        current = section.getAttribute('id');
                    }
                });
            }
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Smooth scroll for navigation
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });