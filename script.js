const target_bg = document.querySelector(".target_bg");

let mouseX = 0, mouseY = 0;  
let bgX = 0, bgY = 0;        
const easeFactor = 0.03;      

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