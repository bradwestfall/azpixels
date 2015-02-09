$(function() {

	$('.projects figure > div').on('click', function() {
		$(this).parent().siblings().removeClass('selected');
		$(this).parent().addClass('selected');
	});

	$('.projects figure figcaption').on('click', function(e) {
		e.stopPropagation();
		$(this).parents('figure').removeClass('selected');
	});
	
});