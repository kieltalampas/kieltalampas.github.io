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

    target_bg.style.background = `radial-gradient(circle at ${bgX}px ${bgY}px, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 35%, rgba(0, 0, 0, 0) 85%)`;
    requestAnimationFrame(updateBackground);
};

document.addEventListener("mousemove", moveRadialBGColor, { passive: true });
requestAnimationFrame(updateBackground);

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".sidebar-nav li");

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {

            navLinks.forEach((item) => item.classList.remove("active"));


            this.classList.add("active");
        });
    });
});
