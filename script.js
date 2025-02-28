const target_bg = document.querySelector(".target_bg");

let mouseX = 0, mouseY = 0;  
let bgX = 0, bgY = 0;        
const easeFactor = 0.02;      

const moveRadialBGColor = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
};


const updateBackground = () => {
    bgX += (mouseX - bgX) * easeFactor;
    bgY += (mouseY - bgY) * easeFactor;

    target_bg.style.background = `radial-gradient(circle at ${bgX}px ${bgY}px, var(--accent), transparent 90%)`;
    
    requestAnimationFrame(updateBackground);
};

document.addEventListener("mousemove", moveRadialBGColor, { passive: true });
requestAnimationFrame(updateBackground);

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main .wrapper > div");
    const navLinks = document.querySelectorAll(".sidebar-nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.parentElement.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.parentElement.classList.add("active");
            }
        });
    });
});