(function($){

$.fn.myslider = function(option) {
	var _default = {
		autoSlide: false,
		dots: false,
		arrow:false
	}
	console.log(option);
	console.log(_default);
	console.log(_setting);
	var _setting = $.expend(_default, option);
	var _this = $(this);
	var currentSlide = $('.slide').attr('data-current');
	var slideWidth = $('.slider').width();
	function nextSlider(){
		currentSlide++;
		var positionLeft = slideWidth*currentSlide;
		$('.slider-track').css({'left': -positionLeft});
	}
	$('.next').on('click', function(){
		nextSlider();
	})
}
  
})(jQuery);


    
    
