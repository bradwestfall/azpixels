$(function() {

	$('.projects figure > div').on('click', function() {
		$(this).parent().siblings().removeClass('selected');
		$(this).parent().addClass('selected');
	});

	$('.projects figure figcaption').on('click', function(e) {
		e.stopPropagation();
		$(this).parents('figure').removeClass('selected');
	});

    // Weak attempt to obscure email from crawlers. You damn crawlers, 
    // leave me alone!
    $('.contact.email').text('brad' + '@' + 'azpixels.com');
	
});