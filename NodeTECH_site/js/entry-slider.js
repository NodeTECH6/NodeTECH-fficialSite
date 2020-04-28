(function($){

  $(document).on("ready", function () {
    //中央寄せ両サイド表示（レスポンシブ）
    $(".entry_slider").slick({
      infinite: true, //スライドのループ有効化
      dots: false, //ドットのナビゲーションを表示
      slidesToShow: 1, //表示するスライドの数
      centerMode: true, //要素を中央寄せ
      centerPadding: "10%", //両サイドの見えている部分のサイズ
      autoplay: true, //自動再生
      arrows: false, // スライドの左右の矢印ボタン
      focusOnSelect: true, // クリックでのスライド切り替えを有効にするか
      //    prevArrow: '<img src="../images/left.png" class="slide-arrow prev-arrow">',
      //    nextArrow: '<img src="../images/right.png" class="slide-arrow next-arrow">',
      //    fade: true,
      asNavFor: ".thumb", // スライダを他のスライダのナビゲーションに設定する（class名またはID名）
      responsive: [
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
          },
        },
      ],
    });
    $(".thumb").slick({
      slidesToShow: 8, // 表示するスライド数を設定
      slidesToScroll: 1, // スクロールするスライド数を設定
      asNavFor: ".entry_slider", // スライダを他のスライダのナビゲーションに設定する（class名またはID名）
      pauseOnFocus: false,
      pauseOnHover: false,
      focusOnSelect: true, // クリックでのスライド切り替えを有効にするか
      //    centerMode: true, //要素を中央寄せ
      centerPadding: 0,
    });
    $(".entry_slider").on("afterChange", function (
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      switch (currentSlide) {
        case 0:
          // 1枚目のスライド
          $(this).slick("slickSetOption", "autoplaySpeed", 10000);
          break;
        default:
          // その他のスライド
          $(this).slick("slickSetOption", "autoplaySpeed", 3500);
          break;
      }
    });
    $(".entry_slider").on("beforeChange", function (
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      if (($(".thumb .thumb_item").length = 1)) {
        $(".thumb").slick("slickSetOption", "centerMode", true, true);
      }
    });
  });

  // プラグイン本体のjavascript
})($183);
