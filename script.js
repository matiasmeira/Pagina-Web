// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar effect on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(15px)';
    }
});

// Create particles/orbes for entire page
function createParticles() {
    const container = document.createElement('div');
    container.id = 'particles-container';
    document.body.appendChild(container);

    // Create different sizes of particles
    const sizes = ['small', 'medium', 'large', 'xlarge'];
    const particleCount = 25; // Total particles for the entire page

    for (let i = 0; i < particleCount; i++) {
        createParticle(container, sizes[Math.floor(Math.random() * sizes.length)]);
    }
}

function createParticle(container, size) {
    const particle = document.createElement('div');
    particle.className = `particle ${size}`;
    
    // Random position across entire viewport
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;

    // Random animation delay and duration
    const delay = Math.random() * 8;
    const duration = 6 + Math.random() * 6;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    // Random opacity
    const opacity = 0.2 + Math.random() * 0.5;
    particle.style.opacity = opacity;

    container.appendChild(particle);
}

// Add loading animation for sections
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Initialize particles
    createParticles();
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 120);
});

// Handle window resize to maintain particles
window.addEventListener('resize', function() {
    const container = document.getElementById('particles-container');
    if (container) {
        container.remove();
        createParticles();
    }
});

// Animate skill icons on hover
function initSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.transform = 'scale(1.3) rotate(10deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Llamar la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // ... código existente ...
    initSkillAnimations();
});