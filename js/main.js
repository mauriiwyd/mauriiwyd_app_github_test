// main.js - Lógica comercial interactiva y animación de UI para DirectFactory

document.addEventListener('DOMContentLoaded', () => {
  console.log('✨ DirectFactory - Panel Comercial de Fábrica inicializado.');

  // Efecto de iluminación interactivo en tarjetas de productos
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // Animación del simulador de terminal de Git
  const terminalBody = document.querySelector('.terminal-body');
  if (terminalBody) {
    terminalBody.addEventListener('mouseenter', () => {
      terminalBody.style.boxShadow = '0 0 25px rgba(59, 130, 246, 0.2)';
    });
    terminalBody.addEventListener('mouseleave', () => {
      terminalBody.style.boxShadow = 'none';
    });
  }

  // Interacción suave con enlaces del Nav
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
