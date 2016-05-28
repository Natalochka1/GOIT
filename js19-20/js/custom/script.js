 
$(document).ready(function(){ 
	$('.fade').slick({
	  dots: true,
      arrows: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
});





 
$(document).ready(function(){
    $(".accordion .plus:first").addClass("active").next("p").slideToggle("slow") .siblings("p:visible").slideUp("slow");
   // $(".accordion .plus:first").addClass("active");
    $(".accordion p:not(:first)").hide();
 
    $(".accordion .plus").click(function(){
 
        $(this).next("p").slideToggle("slow")
        .siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings(".plus").removeClass("active");
     });
  
 });
 
