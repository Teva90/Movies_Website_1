let header = document.querySelector("header");
let menuBtn = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
//
window.addEventListener("scroll", ()=> {
    header.classList.toggle("shadow", window.scrollY > 0)
})
//
menuBtn.onclick = ()=>{
  menuBtn.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}
menuBtn.onscroll = ()=>{
  menuBtn.classList.remove("bx-x");
  navbar.classList.remove("active");
}
//
// Swiper Home :
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
//   Swiper Coming Soon :
  var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },
    },
  });