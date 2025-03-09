let lastScrollY = 0;
        let headerVisible = true;
        let scrollThreshold = 0;

        function handleScroll() {
            const currentScrollY = window.scrollY;
            const header = document.querySelector("header");

            if (currentScrollY > scrollThreshold) {
                if (currentScrollY > lastScrollY) {
                    header.classList.add("hidden"); // Cache le header
                } else {
                    header.classList.remove("hidden"); // Montre le header
                }
            } else {
                header.classList.remove("hidden"); // Toujours visible en haut de la page
            }

            lastScrollY = currentScrollY;
        }

        document.addEventListener("DOMContentLoaded", () => {
            scrollThreshold = window.innerHeight * 0.05;
            window.addEventListener("scroll", handleScroll);
        });