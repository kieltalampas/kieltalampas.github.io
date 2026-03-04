document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scroll behavior for action buttons
    document.querySelectorAll(".action-buttons a").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Handle action buttons
    document.querySelectorAll(".action-buttons a").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            
            // Resume download
            if (this.classList.contains("btn-resume")) {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "assets/Talampas_Ezekiel_Resume.pdf"; // UPDATE WITH YOUR RESUME NAME
                link.download = "Talampas_Ezekiel_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                return;
            }
            
            if (href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
            
        });
    });
});