// --- CONTROL DE LA CARTA ---
const envelopeContainer = document.getElementById('envelopeContainer');

envelopeContainer.addEventListener('click', () => {
  envelopeContainer.classList.toggle('open');
});

// --- CONTROL DEL CARRUSEL DE FOTOS INFINITO ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideDuration = 3500; // Cambia cada 3.5 segundos

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Iniciar el carrusel automático
if (slides.length > 0) {
  setInterval(nextSlide, slideDuration);
}