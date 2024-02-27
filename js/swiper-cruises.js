// Инициализируем Swiper с необходимыми параметрами
var swiper = new Swiper(".swiper-container-comand", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  mousewheel: true,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Настройки для мобильных устройств
    768: {
      slidesPerView: 1,
    },
    // Настройки для десктопных устройств
    992: {
      slidesPerView: 3,
    },
  },
});

// Добавляем обработчик события для клика на слайд
swiper.on("click", function () {
  // Проверяем, является ли устройство мобильным
  if (window.innerWidth <= 768) {
    // Останавливаем автоматическую прокрутку
    swiper.autoplay.stop();
  }
});

// Добавляем обработчик события transitionend для возобновления прокрутки после завершения взаимодействия
swiper.on("transitionend", function () {
  // Проверяем, является ли устройство мобильным
  if (window.innerWidth <= 768) {
    // Возобновляем автоматическую прокрутку
    swiper.autoplay.start();
  }
});
