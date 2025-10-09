// Attendre que le contenu du document soit chargé
document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------
    // 1. GESTION DU MENU MOBILE (Hamburger)
    // --------------------------------------
    const navLinks = document.querySelector('.nav-links');
    const hamburgerBtn = document.querySelector('.hamburger-btn');

    if (navLinks) {
        // Retirer la classe 'no-js' si présente (progressive enhancement)
        navLinks.classList.remove('no-js');
    }

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Accessibilité : focus sur le premier lien du menu si ouverture
            if (navLinks.classList.contains('active')) {
                const firstLink = navLinks.querySelector('a');
                if (firstLink) firstLink.focus();
            }
        });

        // Accessibilité : fermer le menu avec la touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerBtn.focus();
            }
        });
    }

    // --------------------------------------
    // 2. EFFET 'FADE-IN' DES SECTIONS (Modernité)
    // --------------------------------------
    const faders = document.querySelectorAll('.hero-section, .values-section, .process-section');

    if ('IntersectionObserver' in window && faders.length > 0) {
        const appearOptions = {
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px"
        };

        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            // Appliquer un style initial invisible si non déjà fait
            if (!fader.style.opacity) {
                fader.style.opacity = 0;
                fader.style.transform = 'translateY(20px)';
                fader.style.transition = 'opacity 1s ease-out, transform 0.6s ease-out';
            }
            appearOnScroll.observe(fader);
        });
    } else {
        // Fallback si IntersectionObserver non supporté
        faders.forEach(fader => {
            fader.style.opacity = 1;
            fader.style.transform = 'translateY(0)';
        });
    }
});
