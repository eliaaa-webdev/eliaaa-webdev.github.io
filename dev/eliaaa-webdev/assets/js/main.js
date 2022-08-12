// eliaaa-webdev

// using Swiper - swiperjs.com
var swiper = new Swiper(".swiper-home-testimonials", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});