// Attendre que le contenu du document soit chargé
document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------
    // 1. GESTION DU MENU MOBILE (Hamburger)
    // --------------------------------------
    const navLinks = document.querySelector('.nav-links');
    // NOTE: Vous devez ajouter un bouton hamburger dans le HTML pour que ceci fonctionne !
    // Par exemple: <button class="hamburger-btn">☰</button>
    const hamburgerBtn = document.querySelector('.hamburger-btn'); 

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --------------------------------------
    // 2. EFFET 'FADE-IN' DES SECTIONS (Modernité)
    // --------------------------------------
    // Fait apparaître les sections au fur et à mesure que l'utilisateur défile
    const faders = document.querySelectorAll('.hero-section, .values-section, .process-section');

    const appearOptions = {
        threshold: 0.2, // Déclencher quand 20% de l'élément est visible
        rootMargin: "0px 0px -50px 0px" // Déclencher un peu avant d'arriver au bas de l'écran
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        // Appliquer un style initial invisible via CSS ou directement ici
        fader.style.opacity = 0;
        fader.style.transform = 'translateY(20px)';
        fader.style.transition = 'opacity 1s ease-out, transform 0.6s ease-out';
        appearOnScroll.observe(fader);
    });
});
