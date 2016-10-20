/*** JQUERY UI SCRIPTS ***/
$(document).ready(function () {
    
/**********************/
/*** Website Header ***/
/**********************/    
$('#header-middle').stickMe();
    $.scrolltop();
});





/************************/
/*** WEBSITE CONTENTS ***/
/************************/
/*
    Primary Menu toggle feature for tablets and mobile resolutions
*/
    $('.fa-bars').on('click tap', function (e) {
        $('body').toggleClass('animate');
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

    $(window).on('scroll', function() {
        if( $("#header-middle").hasClass('sticking')) { 
            $('#page-header').find('#header-base').addClass('transform');   
        } else {
            $('#page-header').find('#header-base').removeClass('transform');
        }
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



$('#simple-carousel').slick({
    dots: true,
    arrows: false
});

/*
    Product Rating
*/
$(".product-rating-view").starRating({
    starSize: 15,
    activeColor: 'red',
    readOnly: true,
    starGradient: {
      start: '#ffbd00',
      end: '#ffbd00'
  }
});


/*  
    Primary Sidebar Widget Toggle
*/
    $('#primary-sidebar .sidebar-title').on('click', function(e) {
        e.preventDefault();
        var width = $('#page-content').width();
        
        if (width <= 991) {
            $('#primary-sidebar').toggleClass('active');
            /*$('#primary-sidebar .widget-section').slideToggle();*/
            $(this).find('.fa.fa-chevron-left').toggleClass('fa-chevron-down');
        }
    });

    $('#primary-sidebar header > a').on('click', function(e) {
        e.preventDefault();
        
        var width = $('#page-content').width();
        
        if (width <= 991) {
            $(this).parent('header').parent('.widget-section').toggleClass('active');
            /*$(this).parent('header').siblings('.widget').slideToggle();*/
            $(this).find('.fa.fa-chevron-left').toggleClass('fa-chevron-down');
        } 
    });


/*
    Primary Sidebar Widget Toggle Function
*/

$('#primary-sidebar ul.filter-color').readmore({
    speed: 500,
    collapsedHeight: 20,
    heightMargin: 16,
    moreLink: '<footer><a href="#" class="toggle-link">Show More</a></footer>',
    lessLink: '<footer><a href="#" class="toggle-link">Show Less</a></footer>'
});

$('#primary-sidebar form.filter-brand').readmore({
    speed: 500,
    collapsedHeight: 125,
    heightMargin: 16,
    moreLink: '<footer><a href="#" class="toggle-link">Show More</a></footer>',
    lessLink: '<footer><a href="#" class="toggle-link">Show Less</a></footer>'
});

/*
    Primary Sidebar - Range Slider
*/
$("#filter-price").slider({});

$('#primary-sidebar .tooltip.tooltip-main.top .tooltip-inner').appendTo('#primary-sidebar .price-range .range-current');

$('img.lazyloaded').lazyload();

/*** END JQUERY UI SCRIPTS ***/

