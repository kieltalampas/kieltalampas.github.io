document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".sidebar-nav li");
    const sections = document.querySelectorAll("#about, #experience, #projects");

    // Click handler
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Scroll spy
    function updateActiveNav() {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            const href = link.querySelector("a").getAttribute("href");
            
            if (href === `#${current}`) {
                link.classList.add("active");
            }
        });
    }

    // Listen to scroll event
    window.addEventListener("scroll", updateActiveNav);
    
    // Initial call
    updateActiveNav();
});