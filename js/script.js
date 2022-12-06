const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

var swiper = new Swiper(".slide-content", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        breakpoints: {
         0: {
          slidesPerView: 1,
         },
         520: {
          slidesPerView: 2,
         },
         950: {
          slidesPerView: 3,
         },
        },
      });