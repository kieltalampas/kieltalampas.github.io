const target_bg = document.querySelector(".target_bg"); // Fix class selection

const moveRadialBGColor = (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;

    target_bg.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, var(--accent), transparent 90%)`;
};

document.addEventListener("mousemove", moveRadialBGColor, { passive: true });
