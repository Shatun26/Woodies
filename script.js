var mySwiper = new Swiper(".swiper-container.slider", {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  navigation: {
    nextEl: ".my-button-next",
    prevEl: ".my-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

window.onscroll = function scrolFunction() {
  // обработка события - появление кнопки при скролле
  if (document.documentElement.scrollTop > 280) {
    btntop.style.opacity = "10";
  } else {
    btntop.style.opacity = "0";
  }
};
var btntop = document.querySelector(".btnScrollTop");
btntop.addEventListener("click", function () {
  document
    .querySelector(".hiddenbox")
    .scrollIntoView({ block: "center", behavior: "smooth" });
});
document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector(".burgerMenu").classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
});
document.querySelector(".burgerMenu").addEventListener("click", () => {
  document.querySelector(".burger").classList.remove("active");
  document.querySelector(".burgerMenu").classList.remove("active");
  document.querySelector("body").classList.remove("lock");
});

window.addEventListener("scroll", function () {
  var leftgear = document.querySelectorAll(".imgLogo");
  leftgear.forEach((el) => {
    el.style.transform = "rotate(" + window.pageYOffset + "deg)";
  });
});


