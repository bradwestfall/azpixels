$(function() {

  var loadLaptopGraphic = function(index) {
    var graphic = $('.projects section.project').eq(index + 1).data('graphic')
    $('.laptop .viewport').css({ backgroundImage: 'url(\'' + graphic + '\')' })
  }

  $('.projects .project-slides').on('init', function () {
    loadLaptopGraphic(0)
  })

  $('.projects .project-slides').slick({
    prevArrow: $('.projects .previous'),
    nextArrow: $('.projects .next')
  }).on('beforeChange', function (e, slick, previous, slide) {
    loadLaptopGraphic(slide)
  })

})