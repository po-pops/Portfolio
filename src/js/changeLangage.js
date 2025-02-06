document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("lang") || "fr";

    // Vérifier que Polyglot est bien chargé
    if (typeof Polyglot === "undefined") {
        console.error("Polyglot.js n'est pas chargé !");
        return;
    }

    let polyglot = new Polyglot({ phrases: translations[savedLang] });

    function changeLanguage(lang) {
        polyglot.replace(translations[lang]);
        document.querySelectorAll("[data-translate]").forEach(el => {
            el.textContent = polyglot.t(el.getAttribute("data-translate"));
        });
        localStorage.setItem("lang", lang);
    }

    // Appliquer la langue sauvegardée au chargement
    changeLanguage(savedLang);

    // Rendre la fonction accessible globalement
    window.changeLanguage = changeLanguage;
});
