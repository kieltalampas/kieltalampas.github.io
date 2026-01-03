document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".sidebar-nav li");

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});