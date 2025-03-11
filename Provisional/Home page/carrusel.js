// Inicializar Swiper
var swiper = new Swiper('#newsliderid', {
    slidesPerView: 3,       // Mostrar 3 diapositivas a la vez
    spaceBetween: 10,        // Espacio entre las diapositivas (ajústalo si es necesario)
    loop: true,              // Habilitar el bucle
    centeredSlides: true,    // Asegurarnos de que la diapositiva activa esté siempre en el centro
    navigation: {            // Botones de navegación
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,    // En pantallas grandes mostrar 3 diapositivas
      },
      480: {
        slidesPerView: 1,    // En pantallas pequeñas mostrar 1 diapositiva
      }
    }
  });
  