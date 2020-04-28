var animation1 = $(".animation1");
var animation2 = $(".animation2");
var animation3 = $(".animation3");
var animation4 = $(".animation4");
var animation5 = $(".animation5");
var animation6 = $(".animation6");


var svg_text1 = $(".svg_text1");
var svg_text2 = $(".svg_text2");
var svg_text3 = $(".svg_text3");


var svg_content1 = $(".svg_content1");
var svg_content2 = $(".svg_content2");
var svg_content3 = $(".svg_content3");


if(window.addEventListener) window.addEventListener("load", function() {
  var svgPos1 = animation1.offset().top;
    var svgscroll = $(window).scrollTop();
    var svgwindowHeight = $(window).height();
    if (svgscroll > svgPos1 - svgwindowHeight + svgwindowHeight/5){
      animation1.addClass("animate1");
      animation2.addClass("animate2");
      svg_text1.addClass("animate4");
      svg_text1.css("opacity","1");
      animation1.css("opacity","1");
      animation2.css("opacity","1");
    } else {
        animation1.removeClass("animate1");
        animation2.removeClass("animate2");
        svg_text1.removeClass("animate4");
        svg_text1.css("opacity","0");
        animation1.css("opacity","0");
        animation2.css("opacity","0");
    }

    var svgPos2 = animation3.offset().top;
    if (svgscroll > svgPos2 - svgwindowHeight + svgwindowHeight/5){
      animation3.addClass("animate1");
      animation4.addClass("animate2");
      svg_text2.addClass("animate3");
      svg_text2.css("opacity","1");
      animation3.css("opacity","1");
      animation4.css("opacity","1");
    } else {
      animation3.removeClass("animate1");
      animation4.removeClass("animate2");
      svg_text2.removeClass("animate3");
      svg_text2.css("opacity","0");
      animation3.css("opacity","0");
      animation4.css("opacity","0");
    }

    var svgPos3 = animation5.offset().top;
    if (svgscroll > svgPos3 - svgwindowHeight + svgwindowHeight/5){
      animation5.addClass("animate1");
      animation6.addClass("animate2");
      svg_text3.addClass("animate3");
      svg_text3.css("opacity","1");
      animation5.css("opacity","1");
      animation6.css("opacity","1");
    } else {
      animation5.removeClass("animate1");
      animation6.removeClass("animate2");
      svg_text3.removeClass("animate3");
      svg_text3.css("opacity","0");
      animation5.css("opacity","0");
      animation6.css("opacity","0");
    }

    var svgContentPos1 = svg_content1.offset().top;
    if (svgscroll > svgContentPos1 - svgwindowHeight + svgwindowHeight/5){
      svg_content1.addClass("animate1");
      svg_content1.css("opacity","1");
    } else {
      svg_content1.removeClass("animate1");
      svg_content1.css("opacity","0");
    }

    var svgContentPos2 = svg_content2.offset().top;
    if (svgscroll > svgContentPos2 - svgwindowHeight + svgwindowHeight/5){
      svg_content2.addClass("animate1");
      svg_content2.css("opacity","1");
    } else {
      svg_content2.removeClass("animate1");
      svg_content2.css("opacity","0");
    }

    var svgContentPos3 = svg_content3.offset().top;
    if (svgscroll > svgContentPos3 - svgwindowHeight + svgwindowHeight/5){
      svg_content3.addClass("animate1");
      svg_content3.css("opacity","1");
    } else {
      svg_content3.removeClass("animate1");
      svg_content3.css("opacity","0");
    }
});

  $(window).scroll(function (){
    var svgPos1 = animation1.offset().top;
    var svgscroll = $(window).scrollTop();
    var svgwindowHeight = $(window).height();
    if (svgscroll > svgPos1 - svgwindowHeight + svgwindowHeight/5){
      animation1.addClass("animate1");
      animation2.addClass("animate2");
      svg_text1.addClass("animate4");
      svg_text1.css("opacity","1");
      animation1.css("opacity","1");
      animation2.css("opacity","1");
    } else {
      animation1.removeClass("animate1");
      animation2.removeClass("animate2");
      svg_text1.removeClass("animate4");
      svg_text1.css("opacity","0");
      animation1.css("opacity","0");
      animation2.css("opacity","0");
    }

    var svgPos2 = animation3.offset().top;
    if (svgscroll > svgPos2 - svgwindowHeight + svgwindowHeight/5){
      animation3.addClass("animate1");
      animation4.addClass("animate2");
      svg_text2.addClass("animate3");
      svg_text2.css("opacity","1");
      animation3.css("opacity","1");
      animation4.css("opacity","1");
    } else {
      animation3.removeClass("animate1");
      animation4.removeClass("animate2");
      svg_text2.removeClass("animate3");
      svg_text2.css("opacity","0");
      animation3.css("opacity","0");
      animation4.css("opacity","0");
    }

    var svgPos3 = animation5.offset().top;
    if (svgscroll > svgPos3 - svgwindowHeight + svgwindowHeight/5){
      animation5.addClass("animate1");
      animation6.addClass("animate2");
      svg_text3.addClass("animate3");
      svg_text3.css("opacity","1");
      animation5.css("opacity","1");
      animation6.css("opacity","1");
    } else {
      animation5.removeClass("animate1");
      animation6.removeClass("animate2");
      svg_text3.removeClass("animate3");
      svg_text3.css("opacity","0");
      animation5.css("opacity","0");
      animation6.css("opacity","0");
    }

    var svgContentPos1 = svg_content1.offset().top;
    if (svgscroll > svgContentPos1 - svgwindowHeight + svgwindowHeight/5){
      svg_content1.addClass("animate1");
      svg_content1.css("opacity","1");
    } else {
      svg_content1.removeClass("animate1");
      svg_content1.css("opacity","0");
    }

    var svgContentPos2 = svg_content2.offset().top;
    if (svgscroll > svgContentPos2 - svgwindowHeight + svgwindowHeight/5){
      svg_content2.addClass("animate1");
      svg_content2.css("opacity","1");
    } else {
      svg_content2.removeClass("animate1");
      svg_content2.css("opacity","0");
    }

    var svgContentPos3 = svg_content3.offset().top;
    if (svgscroll > svgContentPos3 - svgwindowHeight + svgwindowHeight/5){
      svg_content3.addClass("animate1");
      svg_content3.css("opacity","1");
    } else {
      svg_content3.removeClass("animate1");
      svg_content3.css("opacity","0");
    }
});
