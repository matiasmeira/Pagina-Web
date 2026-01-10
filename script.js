document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.5 // Se dispara cuando la sección está al 50% en pantalla
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade una clase para animar los hijos de la sección
                const elements = entry.target.querySelectorAll('.fade-in, .project-card, .skill-icon-box, .education-card');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    }, index * 100); // Efecto cascada
                });
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.snap-section');
    sections.forEach(section => {
        // Inicializar estados
        const elements = section.querySelectorAll('.fade-in, .project-card, .skill-icon-box, .education-card');
        elements.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        });
        observer.observe(section);
    });
});