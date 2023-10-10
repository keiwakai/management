

// するするスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



// ページトップ
$(function() {
	var topBtn = $('.btn_scroll');	
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 100
		}, 500);
		return false;
    });
});



	// メニュー
(function($) {
    $(function () {
      $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
      });
    });
})(jQuery);
$('nav a').on('click', function(){
        if (window.innerWidth <= 5000) {
            $('#nav-toggle').click();
        }
    });	



// animate
$(window).scroll(function (){
	$(".title").each(function(){
	  var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
	  var scroll = $(window).scrollTop(); //スクロールの位置を取得
	  var windowHeight = $(window).height(); //ウインドウの高さを取得
	  if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
	    $(this).addClass('show'); //クラス「active」を与える
	  }
	});
});

$(window).scroll(function (){
	$(".title:after").each(function(){
	  var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
	  var scroll = $(window).scrollTop(); //スクロールの位置を取得
	  var windowHeight = $(window).height(); //ウインドウの高さを取得
	  if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
	    $(this).addClass('delay'); //クラス「active」を与える
	  }
	});
});

$(window).on('load scroll', function(){

  var elem = $('.animated');

  elem.each(function () {

    var isAnimate = $(this).data('animate');
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 2)){
      $(this).addClass(isAnimate);
    }
  });

});

// animate 再度表示ver
//$(window).on('load scroll', function(){

//  var elem = $('.animated');

//  elem.each(function () {

//    var isAnimate = $(this).data('animate');
//    var elemOffset = $(this).offset().top;
//    var scrollPos = $(window).scrollTop();
//    var wh = $(window).height();

//    if(scrollPos > elemOffset - wh + (wh / 2)){
//      $(this).addClass(isAnimate);
//    }else{
//      $(this).removeClass(isAnimate);
//    }
//  });

//});



