$(function() {

	var panels = [];

	$('.panel').not('.primary-header').each(function() {
		panels.push({
			'e': $(this),
			'top': $(this)[0].getBoundingClientRect().top
		});
	});

	//console.log(panels[0].top);



	// $(window).scroll(function() {
	// 	scrollPanels();
	// });

	var scrollPanels = function() {

		// var viewPortHeight= document.documentElement.clientHeight|| window.innerHeight;
		// var scrollDistance = window.pageYOffset;

		// for (i in panels) {
		// 	if (!panels[i].e.hasClass('on') && panels[i].top <= (scrollDistance + viewPortHeight - 100)) {
		// 		panels[i].e.addClass('on');
		// 	}
		// }
	};
	scrollPanels();


	$('.projects figure > div').on('click', function() {
		$(this).parent().siblings().removeClass('selected');
		$(this).parent().addClass('selected');
	});

	$('.projects figure figcaption').on('click', function(e) {
		e.stopPropagation();
		//alert('asdf')
		$(this).parents('figure').removeClass('selected');
	});
	



});