document.addEventListener('DOMContentLoaded', () => {
    // Menu responsivo para dispositivos móveis
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('ativo');
        });
    }

    // Rolagem suave para âncoras internas
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.length > 1) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    navMenu?.classList.remove('ativo');
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});