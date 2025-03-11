const swiper = new Swiper('.swiper-container', {
    // Hacer que el slider sea infinito
    loop: true,
    
    // Configurar efecto fade o cualquier otro efecto que se aproxime al estilo deseado
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    // Activar el autoplay
    autoplay: {
      delay: 5000,
    },

    // Configuración de parallax
    speed: 1000,

    // Botones de navegación
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Paginación (opcional)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Para usar parallax, asegúrate de activarlo:
    parallax: true,
});
