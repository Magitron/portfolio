$( document ).ready(function() {

  $(".js-toggle-1").click( function(){
    $(".item").first().addClass('active').next().removeClass('active');
    $(".trigger").removeClass('active')
  });
  $(".js-toggle-2").click( function(){
    $(".item").first().removeClass('active').next().addClass('active');
    $(".trigger").addClass('active')
  });

  $('.about').find('.slider-content').slick({
    dots: true,
    appendDots: $('.slider-controls'),
    arrows: false,
    touchMove: false,
    asNavFor: '.photo-slide',
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(slider, i) {      
      return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + 
      $(slider.$slides[i]).attr("slick-title");
      '</button>';
    }
  });

  $('.about .slick-dots').append('<div class="border"></div>');

  $('.about .slick-dots li:first-child').click( function() {
    $('.border').css('left', '0px');
  });
  $('.about .slick-dots li:nth-child(2)').click( function() {
    $('.border').css('left', '100px');
  });
  $('.about .slick-dots li:nth-child(3)').click( function() {
    $('.border').css('left', '200px');
  });

  $('.work').find('.slider-content').slick({
    dots: true,
    appendDots: $('.slider-controls'),
    arrows: false,
    touchMove: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(slider, i) {      
      return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + 
      $(slider.$slides[i]).attr("slick-title");
      '</button>';
    }
  });

  $('.slider-controls.toggle').find('ul:first-child').remove();
  $('.about .slider-controls').find('ul:nth-child(2)').remove();

  $('.testimonials').find('.slider-content').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
    nextArrow: $('.slide-generator'),
    prevArrow: $('.slide-generator')
  });

  var angle = 0;
  $('.slide-generator').click(function() {
     angle+=120;
      $(this).children().css ({
          'transform': 'rotate(' + angle + 'deg)',
          '-webkit-transform': 'rotate(' + angle + 'deg)',
          '-moz-transform': 'rotate(' + angle + 'deg)',
          '-o-transform': 'rotate(' + angle + 'deg)',
          '-ms-transform': 'rotate(' + angle + 'deg)'
      });
  });

   $('.photo-slide').slick({
    dots: false,
    arrows: false,
    touchMove: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

