document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    function checkVisibility() {
        const triggerBottom = window.innerHeight / 1.2; // Ajuste o valor conforme necessário

        fadeInElements.forEach(element => {
            const boxTop = element.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifique imediatamente em caso de carregamento inicial
});