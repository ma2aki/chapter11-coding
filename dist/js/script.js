jQuery(function ($) {
  // ページトップボタン
  var topBtn = $(".js-pagetop");
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  if (window.matchMedia("(max-width: 768px)").matches) {
    //画面横幅が768px以下のときの処理
    $(document).on("click", 'a[href*="#"]', function () {
      let time = 1000;
      let header = $("header").innerHeight();
      let target = $(this.hash);
      if (!target.length) return;
      let targetY = target.offset().top - header;
      $("html,body").animate({ scrollTop: targetY }, time, "swing");
      return false;
    });
  } else {
    //画面横幅が769px以上のときの処理
    $(document).on("click", 'a[href*="#"]', function () {
      let time = 300;
      let header = $("header").innerHeight();
      let target = $(this.hash);
      if (!target.length) return;
      let targetY = target.offset().top - header;
      $("html,body").animate({ scrollTop: targetY }, time, "swing");
      return false;
    });
  }
});

/////////////////////
// スワイパー
/////////////////////

new Swiper(".swiper", {
  speed: 500,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  spaceBetween: 13,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: -16,
      centeredSlidesBounds: true,
      slidesPerView: 3.5,
    },
  },
});

window.addEventListener("load", () => {
  swiper.update(); // Swiperの再計算
});
// ---------------
// fadeIn-left
// ---------------

$(window).on("load scroll", function () {
  var box = $(".c-fadeIn-left");
  var animated = "animated";

  box.each(function () {
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > boxOffset - wh + 100) {
      $(this).addClass(animated);
    }
  });
});

// ---------------
// fadeIn-right
// ---------------

$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("animated");
    }
  });
});

// ---------------
// fadeIn-bottom
// ---------------

$(window).on("load scroll", function () {
  var box = $(".c-fadeIn-bottom");
  var animated = "animated";

  box.each(function () {
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > boxOffset - wh + 100) {
      $(this).addClass(animated);
    }
  });
});

("use strict");

//-------------------------
// hamburger-menu///////////
//---------------------------

$(function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    //画面横幅が768px以下のときの処理
    $(
      "#js-hamburger-menu, .p-header__dd-list-link,.p-header__navigation__link,.p-header__hamburger-bg"
    ).on("click", function () {
      $(
        ".p-header__hamburger ,body, .p-header__hamburger-bg, .p-header__nav, .p-header__tel, .p-header__reserve"
      ).toggleClass("p-header__hamburger-menu--open");
    });
  } else {
    //画面横幅が769px以上のときの処理
    // 何も実行しない
  }
});

//---------------------
// contact-form//////
//--------------------

const options = document.querySelectorAll(".c-form-buttons");

// 各選択肢にクリックイベントを追加
options.forEach((option) => {
  option.addEventListener("click", () => {
    // すべての選択肢の選択状態をリセット
    // options.forEach((opt) => opt.classList.remove("selected"));

    // クリックされた選択肢に色を付ける
    option.classList.toggle("selected");
  });
});

// -----------------------
// sp dropdown menu///////////////
// -----------------------

$(function () {
  const cardLink = $(".last-link");
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function setupDropdown(e) {
    if (e.matches) {
      // スマホ：アコーディオン
      cardLink.off("click").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).siblings(".p-header__ddmenu").stop(true, true).slideToggle(500);
      });
    } else {
      // PC：ドロップダウン
      cardLink.off("click");
      $(".p-header__ddmenu").removeAttr("style").removeClass("show");
      cardLink.removeClass("active");
    }
  }

  setupDropdown(mediaQuery);
  mediaQuery.addEventListener("change", setupDropdown);
});

// 追従バナー

$(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".p-fixed-btn").addClass("is-show");
    } else {
    }
  });
  var footer = $(".p-footer").innerHeight(); // footerの高さを取得

  window.onscroll = function () {
    var point = window.scrollY; // 現在のスクロール地点
    var docHeight = $(document).height(); // ドキュメントの高さ
    var dispHeight = $(window).height(); // 表示領域の高さ

    if (point > docHeight - dispHeight - footer) {
      // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
      $(".p-fixed-btn").removeClass("is-show");
    } else {
      $(".p-fixed-btn").addClass("is-show"); //footerより上にスクロールしたらis-hiddenを削除
    }
  };
});
