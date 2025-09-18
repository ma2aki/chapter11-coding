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

const swiper = new Swiper(".swiper", {
  centeredSlides: true, // 1枚目のスライドを中央にする
  loop: true, // ループさせる
  speed: 500, // 少しゆっくり(デフォルトは300)
  slidesPerView: "auto", // スライドの表示枚数
  autoplay: {
    // 自動再生
    delay: 3000, // 3秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

  function dropdownMenu() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      cardLink.off("click").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).siblings(".p-header__ddmenu").slideToggle();
        $(".p-header__ddmenu-list").toggleClass("active");
        $(".p-header__header-ddmenu").toggleClass("show");
      });
    } else {
      cardLink.off("click"); // PCサイズではクリックイベントを解除！
      $(".p-header__header-ddmenu").removeAttr("style"); // スマホ時のslideToggleでついたstyleをリセット
      cardLink.removeClass("active"); // アクティブクラスもリセット
    }
  }

  // ページロード時に実行
  dropdownMenu();

  // 画面サイズ変更にも対応
  $(window).resize(function () {
    dropdownMenu();
  });
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
