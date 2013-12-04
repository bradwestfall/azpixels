$(document).ready(function(){

	$('.background').parallax("50%", 0.1);
	
	$('.tile-1 div').parallax("0%", 0.9); 	// Small
	$('.tile-2 div').parallax("0%", 1.5); 	// Normal
	$('.tile-3 div').parallax("0%", 0.6);	// X-Small
	$('.tile-4 div').parallax("0%", 1.5); 	// Normal

	$('.tile-6 div').parallax("0%", 1.5);	// Normal
	$('.tile-7 div').parallax("0%", 0.9);	// Small
	$('.tile-8 div').parallax("0%", 0.6);	// X-Small
	$('.tile-9 div').parallax("0%", 0.3);	// XX-Small

	$('#about > div .featured-logo').parallax("0%", 0.5);

	// Navigation Local Scroll
	$.localScroll({
		target: 'body',
		easing: 'easeInOutQuart',
		duration:1000
	});

	$('header nav a').on('click', function() {
		$(this).parent().find('a').removeClass('selected');
		$(this).addClass('selected');
	 	return false;
	});

});