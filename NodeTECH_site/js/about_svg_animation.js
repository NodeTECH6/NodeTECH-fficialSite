var animation1 = $(".animation1");
var animation2 = $(".animation2");
var animation3 = $(".animation3");
var animation4 = $(".animation4");
var animation5 = $(".animation5");
var animation6 = $(".animation6");
var animation7 = $(".animation7");
var animation8 = $(".animation8");
var animation9 = $(".animation9");
var animation10 = $(".animation10");
var animation11 = $(".animation11");
var animation12 = $(".animation12");
var animation13 = $(".animation13");
var animation14 = $(".animation14");
var animation15 = $(".animation15");
var animation16 = $(".animation16");
var animation17 = $(".animation17");
var animation18 = $(".animation18");

var svg_text1 = $(".svg_text1");
var svg_text2 = $(".svg_text2");
var svg_text3 = $(".svg_text3");
var svg_text4 = $(".svg_text4");
var svg_text5 = $(".svg_text5");
var svg_text6 = $(".svg_text6");
var svg_text7 = $(".svg_text7");
var svg_text8 = $(".svg_text8");
var svg_text9 = $(".svg_text9");

var svg_content1 = $(".svg_content1");
var svg_content2 = $(".svg_content2");
var svg_content3 = $(".svg_content3");
var svg_content4 = $(".svg_content4");
var svg_content5 = $(".svg_content5");
var svg_content6 = $(".svg_content6");
var svg_content7 = $(".svg_content7");
var svg_content8 = $(".svg_content8");
var svg_content9 = $(".svg_content9");

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

    var svgPos4 = animation7.offset().top;
    if (svgscroll > svgPos4 - svgwindowHeight + svgwindowHeight/5){
      animation7.addClass("animate1");
      animation8.addClass("animate2");
      svg_text4.addClass("animate3");
      svg_text4.css("opacity","1");
      animation7.css("opacity","1");
      animation8.css("opacity","1");
    } else {
        animation7.removeClass("animate1");
        animation8.removeClass("animate2");
        svg_text4.removeClass("animate3");
        svg_text4.css("opacity","0");
        animation7.css("opacity","0");
        animation8.css("opacity","0");
    }

    var svgPos5 = animation9.offset().top;
    if (svgscroll > svgPos5 - svgwindowHeight + svgwindowHeight/5){
      animation9.addClass("animate1");
      animation10.addClass("animate2");
      svg_text5.addClass("animate3");
      svg_text5.css("opacity","1");
      animation9.css("opacity","1");
      animation10.css("opacity","1");
    } else {
        animation9.removeClass("animate1");
        animation10.removeClass("animate2");
        svg_text5.removeClass("animate3");
        svg_text5.css("opacity","0");
        animation9.css("opacity","0");
        animation10.css("opacity","0");
    }

    var svgPos6 = animation11.offset().top;
    if (svgscroll > svgPos6 - svgwindowHeight + svgwindowHeight/5){
      animation11.addClass("animate1");
      animation12.addClass("animate2");
      svg_text6.addClass("animate3");
      svg_text6.css("opacity","1");
      animation11.css("opacity","1");
      animation12.css("opacity","1");
    } else {
        animation11.removeClass("animate1");
        animation12.removeClass("animate2");
        svg_text6.removeClass("animate3");
        svg_text6.css("opacity","0");
        animation11.css("opacity","0");
        animation12.css("opacity","0");
    }

    var svgPos7 = animation13.offset().top;
    if (svgscroll > svgPos7 - svgwindowHeight + svgwindowHeight/5){
      animation13.addClass("animate1");
      animation14.addClass("animate2");
      svg_text7.addClass("animate3");
      svg_text7.css("opacity","1");
      animation13.css("opacity","1");
      animation14.css("opacity","1");
    } else {
        animation13.removeClass("animate1");
        animation14.removeClass("animate2");
        svg_text7.removeClass("animate3");
        svg_text7.css("opacity","0");
        animation13.css("opacity","0");
        animation14.css("opacity","0");
    }

    var svgPos8 = animation15.offset().top;
    if (svgscroll > svgPos8 - svgwindowHeight + svgwindowHeight/5){
      animation15.addClass("animate1");
      animation16.addClass("animate2");
      svg_text8.addClass("animate3");
      svg_text8.css("opacity","1");
      animation15.css("opacity","1");
      animation16.css("opacity","1");
    } else {
        animation15.removeClass("animate1");
        animation16.removeClass("animate2");
        svg_text8.removeClass("animate3");
        svg_text8.css("opacity","0");
        animation15.css("opacity","0");
        animation16.css("opacity","0");
    }

    var svgPos9 = animation17.offset().top;
    if (svgscroll > svgPos9 - svgwindowHeight + svgwindowHeight/5){
      animation17.addClass("animate1");
      animation18.addClass("animate2");
      svg_text9.addClass("animate3");
      svg_text9.css("opacity","1");
      animation17.css("opacity","1");
      animation18.css("opacity","1");
    } else {
        animation17.removeClass("animate1");
        animation18.removeClass("animate2");
        svg_text9.removeClass("animate3");
        svg_text9.css("opacity","0");
        animation17.css("opacity","0");
        animation18.css("opacity","0");
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

    var svgContentPos4 = svg_content4.offset().top;
    if (svgscroll > svgContentPos4 - svgwindowHeight + svgwindowHeight/5){
      svg_content4.addClass("animate1");
      svg_content4.css("opacity","1");
    } else {
      svg_content4.removeClass("animate1");
      svg_content4.css("opacity","0");
    }

    var svgContentPos5 = svg_content5.offset().top;
    if (svgscroll > svgContentPos5 - svgwindowHeight + svgwindowHeight/5){
      svg_content5.addClass("animate1");
      svg_content5.css("opacity","1");
    } else {
      svg_content5.removeClass("animate1");
      svg_content5.css("opacity","0");
    }

    var svgContentPos6 = svg_content6.offset().top;
    if (svgscroll > svgContentPos6 - svgwindowHeight + svgwindowHeight/5){
      svg_content6.addClass("animate1");
      svg_content6.css("opacity","1");
    } else {
      svg_content6.removeClass("animate1");
      svg_content6.css("opacity","0");
    }

    var svgContentPos7 = svg_content7.offset().top;
    if (svgscroll > svgContentPos7 - svgwindowHeight + svgwindowHeight/5){
      svg_content7.addClass("animate1");
      svg_content7.css("opacity","1");
    } else {
      svg_content7.removeClass("animate1");
      svg_content7.css("opacity","0");
    }

    var svgContentPos8 = svg_content8.offset().top;
    if (svgscroll > svgContentPos8 - svgwindowHeight + svgwindowHeight/5){
      svg_content8.addClass("animate1");
      svg_content8.css("opacity","1");
    } else {
      svg_content8.removeClass("animate1");
      svg_content8.css("opacity","0");
    }

    var svgContentPos9 = svg_content9.offset().top;
    if (svgscroll > svgContentPos9 - svgwindowHeight + svgwindowHeight/5){
      svg_content9.addClass("animate1");
      svg_content9.css("opacity","1");
    } else {
      svg_content9.removeClass("animate1");
      svg_content9.css("opacity","0");
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

    var svgPos4 = animation7.offset().top;
    if (svgscroll > svgPos4 - svgwindowHeight + svgwindowHeight/5){
      animation7.addClass("animate1");
      animation8.addClass("animate2");
      svg_text4.addClass("animate3");
      svg_text4.css("opacity","1");
      animation7.css("opacity","1");
      animation8.css("opacity","1");
    } else {
        animation7.removeClass("animate1");
        animation8.removeClass("animate2");
        svg_text4.removeClass("animate3");
        svg_text4.css("opacity","0");
        animation7.css("opacity","0");
        animation8.css("opacity","0");
    }

    var svgPos5 = animation9.offset().top;
    if (svgscroll > svgPos5 - svgwindowHeight + svgwindowHeight/5){
      animation9.addClass("animate1");
      animation10.addClass("animate2");
      svg_text5.addClass("animate3");
      svg_text5.css("opacity","1");
      animation9.css("opacity","1");
      animation10.css("opacity","1");
    } else {
        animation9.removeClass("animate1");
        animation10.removeClass("animate2");
        svg_text5.removeClass("animate3");
        svg_text5.css("opacity","0");
        animation9.css("opacity","0");
        animation10.css("opacity","0");
    }

    var svgPos6 = animation11.offset().top;
    if (svgscroll > svgPos6 - svgwindowHeight + svgwindowHeight/5){
      animation11.addClass("animate1");
      animation12.addClass("animate2");
      svg_text6.addClass("animate3");
      svg_text6.css("opacity","1");
      animation11.css("opacity","1");
      animation12.css("opacity","1");
    } else {
        animation11.removeClass("animate1");
        animation12.removeClass("animate2");
        svg_text6.removeClass("animate3");
        svg_text6.css("opacity","0");
        animation11.css("opacity","0");
        animation12.css("opacity","0");
    }

    var svgPos7 = animation13.offset().top;
    if (svgscroll > svgPos7 - svgwindowHeight + svgwindowHeight/5){
      animation13.addClass("animate1");
      animation14.addClass("animate2");
      svg_text7.addClass("animate3");
      svg_text7.css("opacity","1");
      animation13.css("opacity","1");
      animation14.css("opacity","1");
    } else {
        animation13.removeClass("animate1");
        animation14.removeClass("animate2");
        svg_text7.removeClass("animate3");
        svg_text7.css("opacity","0");
        animation13.css("opacity","0");
        animation14.css("opacity","0");
    }

    var svgPos8 = animation15.offset().top;
    if (svgscroll > svgPos8 - svgwindowHeight + svgwindowHeight/5){
      animation15.addClass("animate1");
      animation16.addClass("animate2");
      svg_text8.addClass("animate3");
      svg_text8.css("opacity","1");
      animation15.css("opacity","1");
      animation16.css("opacity","1");
    } else {
        animation15.removeClass("animate1");
        animation16.removeClass("animate2");
        svg_text8.removeClass("animate3");
        svg_text8.css("opacity","0");
        animation15.css("opacity","0");
        animation16.css("opacity","0");
    }

    var svgPos9 = animation17.offset().top;
    if (svgscroll > svgPos9 - svgwindowHeight + svgwindowHeight/5){
      animation17.addClass("animate1");
      animation18.addClass("animate2");
      svg_text9.addClass("animate3");
      svg_text9.css("opacity","1");
      animation17.css("opacity","1");
      animation18.css("opacity","1");
    } else {
        animation17.removeClass("animate1");
        animation18.removeClass("animate2");
        svg_text9.removeClass("animate3");
        svg_text9.css("opacity","0");
        animation17.css("opacity","0");
        animation18.css("opacity","0");
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

    var svgContentPos4 = svg_content4.offset().top;
    if (svgscroll > svgContentPos4 - svgwindowHeight + svgwindowHeight/5){
      svg_content4.addClass("animate1");
      svg_content4.css("opacity","1");
    } else {
      svg_content4.removeClass("animate1");
      svg_content4.css("opacity","0");
    }

    var svgContentPos5 = svg_content5.offset().top;
    if (svgscroll > svgContentPos5 - svgwindowHeight + svgwindowHeight/5){
      svg_content5.addClass("animate1");
      svg_content5.css("opacity","1");
    } else {
      svg_content5.removeClass("animate1");
      svg_content5.css("opacity","0");
    }

    var svgContentPos6 = svg_content6.offset().top;
    if (svgscroll > svgContentPos6 - svgwindowHeight + svgwindowHeight/5){
      svg_content6.addClass("animate1");
      svg_content6.css("opacity","1");
    } else {
      svg_content6.removeClass("animate1");
      svg_content6.css("opacity","0");
    }

    var svgContentPos7 = svg_content7.offset().top;
    if (svgscroll > svgContentPos7 - svgwindowHeight + svgwindowHeight/5){
      svg_content7.addClass("animate1");
      svg_content7.css("opacity","1");
    } else {
      svg_content7.removeClass("animate1");
      svg_content7.css("opacity","0");
    }

    var svgContentPos8 = svg_content8.offset().top;
    if (svgscroll > svgContentPos8 - svgwindowHeight + svgwindowHeight/5){
      svg_content8.addClass("animate1");
      svg_content8.css("opacity","1");
    } else {
      svg_content8.removeClass("animate1");
      svg_content8.css("opacity","0");
    }

    var svgContentPos9 = svg_content9.offset().top;
    if (svgscroll > svgContentPos9 - svgwindowHeight + svgwindowHeight/5){
      svg_content9.addClass("animate1");
      svg_content9.css("opacity","1");
    } else {
      svg_content9.removeClass("animate1");
      svg_content9.css("opacity","0");
    }
});
