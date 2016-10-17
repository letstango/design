/*** JQUERY UI SCRIPTS ***/
$(document).ready(function () {

/*
    Primary Menu toggle feature for tablets and mobile resolutions
*/
    $('.fa-bars').on('click tap', function (e) {
        $('body').addClass('animate');
        e.stopPropagation();
    });
    
    $('.body-overlay').on('click tap swipeleft', function () {
            $('body').removeClass('animate');
    });
    
    
/*
    Primary Menu navigation functionality for tablets and mobile resolutions
*/
    $('#primary-menu ul.nav-category > li > .fa-plus-square-o').click(function() {
        $(this).next('.dropdown-wrapper').children('ul.nav-subcategory').slideToggle();
    });
    
    $('#primary-menu ul.nav-subcategory > li > .fa-plus-square-o').click(function() {
        $(this).next('ul.nav-items').slideToggle();
    });
    
    $('#primary-menu .fa-plus-square-o').click(function() {
        $(this).toggleClass('fa-minus-square-o fa-plus-square-o');
    }); 
    
    $('#header-shopping-cart > a').click(function(e) {
        e.preventDefault();
    });
    
    
    
    
/*
    Banner Tabs Slider
*/
    $('#banner-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
        prevArrow: false,
      arrows: false,
      fade: false,
        autoplay: true,
      asNavFor: '#banner-nav'
    });
    
    $('#banner-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '#banner-carousel',
      centerMode: false,
      focusOnSelect: true
    });
    
    
/*
    Featured Slider
*/
    $('#featured-carousel, #primary-carousel, #secondary-carousel').slick({
  dots: false,
  accessibility: true,
arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

    
$('#header-middle').stickMe();
    
    $.scrolltop();
});
/*** END JQUERY UI SCRIPTS ***/



