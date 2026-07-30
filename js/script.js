/* ==========================================================================
   CV INTERACTIF - KHALIFA SECK
   Script JavaScript (Vanilla JS uniquement)
   ========================================================================== */

/* On attend que tout le HTML soit chargé avant d'exécuter le script */
document.addEventListener("DOMContentLoaded", function () {

    /* ======================================================================
       1. MODE SOMBRE / CLAIR (avec sauvegarde dans localStorage)
       ====================================================================== */

    // Récupération des éléments concernés
    const themeToggleBtn = document.querySelector("#theme-toggle");
    const themeIcon = document.querySelector("#theme-icon");
    const body = document.body;

    // Fonction qui applique visuellement le thème (icône + classe CSS)
    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-theme");
            themeIcon.textContent = "☀️"; // Icône soleil quand on est en mode sombre
        } else {
            body.classList.remove("dark-theme");
            themeIcon.textContent = "🌙"; // Icône lune quand on est en mode clair
        }
    }

    // Au chargement de la page : on regarde si un thème est déjà enregistré
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Au clic sur le bouton : on inverse le thème actuel
    themeToggleBtn.addEventListener("click", function () {
        const isDark = body.classList.contains("dark-theme");
        const newTheme = isDark ? "light" : "dark";

        applyTheme(newTheme);

        // Sauvegarde du choix de l'utilisateur dans le localStorage
        localStorage.setItem("theme", newTheme);
    });


    /* ======================================================================
       2. MENU HAMBURGER (navigation mobile)
       ====================================================================== */

    const hamburgerBtn = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav");
    const navLinks = document.querySelectorAll(".nav-link");

    // Ouverture / fermeture du menu au clic sur le bouton hamburger
    hamburgerBtn.addEventListener("click", function () {
        nav.classList.toggle("open");
        hamburgerBtn.classList.toggle("active");
    });

    // Fermeture automatique du menu après avoir cliqué sur un lien (mobile)
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
        });
    });


    /* ======================================================================
       3. ANIMATION DES BARRES DE COMPÉTENCES AU DÉFILEMENT
       ====================================================================== */

    // On sélectionne toutes les barres de progression de la page
    const skillBars = document.querySelectorAll(".skill-progress");

    // IntersectionObserver : détecte quand un élément devient visible à l'écran
    const skillObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // La barre devient visible : on lit son niveau et on anime la largeur
                const bar = entry.target;
                const level = bar.getAttribute("data-level");
                bar.style.width = level + "%";

                // On arrête d'observer cette barre une fois animée (une seule fois)
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.3 // La barre doit être visible à 30% pour se déclencher
    });

    // On demande à l'observer de surveiller chaque barre de compétence
    skillBars.forEach(function (bar) {
        skillObserver.observe(bar);
    });


    /* ======================================================================
       4. FORMULAIRE DE CONTACT (validation JavaScript)
       ====================================================================== */

    const contactForm = document.querySelector("#contact-form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const formSuccess = document.querySelector("#form-success");

    // Expression régulière simple pour vérifier le format d'un e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Fonction qui affiche un message d'erreur sous un champ donné
    function showError(input, errorId, message) {
        const errorSpan = document.querySelector("#" + errorId);
        errorSpan.textContent = message;
        input.classList.add("invalid");
    }

    // Fonction qui efface le message d'erreur d'un champ donné
    function clearError(input, errorId) {
        const errorSpan = document.querySelector("#" + errorId);
        errorSpan.textContent = "";
        input.classList.remove("invalid");
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // On empêche l'envoi réel du formulaire

        let isValid = true; // Variable qui reste vraie tant qu'aucune erreur n'est trouvée

        // Vérification du champ Nom (ne doit pas être vide)
        if (nameInput.value.trim() === "") {
            showError(nameInput, "name-error", "Veuillez indiquer votre nom.");
            isValid = false;
        } else {
            clearError(nameInput, "name-error");
        }

        // Vérification du champ E-mail (non vide + format valide)
        if (emailInput.value.trim() === "") {
            showError(emailInput, "email-error", "Veuillez indiquer votre e-mail.");
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "email-error", "Format d'e-mail invalide.");
            isValid = false;
        } else {
            clearError(emailInput, "email-error");
        }

        // Vérification du champ Message (ne doit pas être vide)
        if (messageInput.value.trim() === "") {
            showError(messageInput, "message-error", "Veuillez écrire un message.");
            isValid = false;
        } else {
            clearError(messageInput, "message-error");
        }

        // Si tous les champs sont valides : on affiche un message de succès
        if (isValid) {
            formSuccess.textContent = "Votre message a bien été envoyé, merci !";
            contactForm.reset();

            // Le message de succès disparaît après quelques secondes
            setTimeout(function () {
                formSuccess.textContent = "";
            }, 4000);
        }
    });


    /* ======================================================================
       5. BOUTON RETOUR EN HAUT
       ====================================================================== */

    const backToTopBtn = document.querySelector("#back-to-top");

    // Affiche ou masque le bouton selon la position du défilement
    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    // Au clic : on remonte tout en haut de la page en douceur
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
