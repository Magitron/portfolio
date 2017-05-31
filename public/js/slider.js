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

  $('.about .slick-dots li:first-child button').addClass('active');

  const title = $('.about .slick-dots li button');
  $(title).click( function() {
    $(title).not(this).removeClass('active');
    $(this).addClass('active');
  });

  $('.dtnav-list, .mobnav-sub').find('a').click(function(){
    var $href = $(this).attr('href').substr(1);
    var $anchor = $($href).offset();
    $('body').animate({ scrollTop: $anchor.top });
    return false;
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
    autoplay: true,
    autoplaySpeed: 2000,
    touchMove: false,
    nextArrow: $('.slide-generator'),
    prevArrow: $('.slide-generator')
  });

  var angle = 0;

  $('.testimonials').find('.slider-content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    angle+=120;
    $('.slide-generator').children().css ({
      'transform': 'rotate(' + angle + 'deg)',
      '-webkit-transform': 'rotate(' + angle + 'deg)',
      '-moz-transform': 'rotate(' + angle + 'deg)',
      '-o-transform': 'rotate(' + angle + 'deg)',
      '-ms-transform': 'rotate(' + angle + 'deg)'
    });
  });

 
  // $('.slide-generator').click(function() {
  //   var angle = 0;
  //   angle+=120;
  //   $(this).children().css ({
  //     'transform': 'rotate(' + angle + 'deg)',
  //     '-webkit-transform': 'rotate(' + angle + 'deg)',
  //     '-moz-transform': 'rotate(' + angle + 'deg)',
  //     '-o-transform': 'rotate(' + angle + 'deg)',
  //     '-ms-transform': 'rotate(' + angle + 'deg)'
  //   });
  // });

  $('.photo-slide').slick({
    dots: false,
    arrows: false,
    touchMove: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(window).click(function() {
    $('.mobnav-sub-wrapper').removeClass('active');
    $('.ham').removeClass('active');
  });

  $('.js-mobnav-trigger').click( function(event) {
    event.stopPropagation();
    $('.mobnav-sub-wrapper').toggleClass('active');
    $('.ham').toggleClass('active');
  });

  $('.mobnav-sub-wrapper').find('.link').click( function() {
    $('.mobnav-sub-wrapper').removeClass('active');
  });

  $('.js-dtnav, .dtnav-drop').hover( function() {
    $('.dtnav-drop').toggleClass('active');
  });

  $('.blog-post').find('.slider-content').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 1000,
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
          centerPadding: '0px',
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

   $('.blog-post').find('.slider-content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    angle+=120;
    $('.slide-generator').children().css ({
      'transform': 'rotate(' + angle + 'deg)',
      '-webkit-transform': 'rotate(' + angle + 'deg)',
      '-moz-transform': 'rotate(' + angle + 'deg)',
      '-o-transform': 'rotate(' + angle + 'deg)',
      '-ms-transform': 'rotate(' + angle + 'deg)'
    });
  });

   // Find all YouTube videos
var $allVideos = $(".blog-video"),

    // The element that is fluid width
    $fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();


});


