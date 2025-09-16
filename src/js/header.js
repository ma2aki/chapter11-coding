// header2

$(function () {
  $("#js-hamburger-menu").on("click", function () {
    $(".header-container").slideToggle(500);
    $(".header__hamburger").toggleClass("hamburger-menu--open");
  });
});

$(function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".last-link").click(function () {
      $(".ddmenu-list").slideToggle();
    });
  } else {
    // 何も実行しない
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cardLink = document.querySelector(".last-link");

  cardLink.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
