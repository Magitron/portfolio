$( document ).ready(function() {

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

  // $('.work').find('.slider-content').slick({
  //   dots: true,
  //   appendDots: $('.slider-controls'),
  //   arrows: false,
  //   touchMove: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   customPaging: function(slider, i) {      
  //     return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + 
  //     $(slider.$slides[i]).attr("slick-title");
  //     '</button>';
  //   }
  // });

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


  $('.mobile-nav-trigger').click( function() {
    $('.mobile-sub-nav').toggleClass('active')
    $('.ham').toggleClass('active');
  });

  $('.more').hide();

  $('.see-more').click( function() {
    $('.more').slideToggle(1000)
    $('.see-more').slideUp(1000);
  });

  $('.blog-post').find('.slider-content').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    nextArrow: $('.blog-post .slide-generator'),
    prevArrow: $('.blog-post .slide-generator'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
  });
});

