/*** JQUERY UI SCRIPTS ***/
$(document).ready(function() {
    
/**********************/
/*** Website Header ***/
/**********************/    
    $.scrolltop();
    
/*
    This is the primary floating header which appears in Home, Category/Search, Checkout page.
*/
    $(window).scroll(function() {
        
        if ($('#header-middle').hasClass('primary')) {
            if ($(this).scrollTop() > 900) {  
                $('#header-middle').addClass("floating");
            }
            else if($(this).scrollTop() < 300) {
                $('#header-middle').removeClass("floating");
            }
        } 
    });
    
    
/*  
    This is the secondary floating header which only appears in Product page. 
*/

    $('.trigger-area').on('inview', function(event, isInView) {
      if (isInView) {
           $('#header-middle').addClass('floating');
            $('#header-middle.secondary #header-main, #header-middle.secondary #header-aside').hide();

          $('body').find('#product-overview .process-button-group').clone().appendTo('#header-middle.secondary .main');
          $('#header-middle.secondary .process-button-group').css({'float':'right', 'width':'50%'});
      } else {
         $('#header-middle.secondary #header-main, #header-middle.secondary #header-aside').show();
          $('#header-middle.secondary').find('.process-button-group').remove();
          $('#header-middle.secondary').removeClass('floating');
          $('#header-middle').removeClass("floating");
      }
    });
    
    
    


/*
    Primary Menu toggle feature for tablets and mobile resolutions
*/
    
        var pageBody = document.getElementsByTagName("body"); //or use jQuery's $("#photo")
        var pageMenu = document.getElementById("header-base"); //or use jQuery's $("#photo")
        var headerMiddle = document.getElementById("header-middle");
    
        function toggleLTRMenu() {
            if($('body').hasClass('animate')) {
            
                if ($("#header-middle").hasClass('floating')) {
                    TweenLite.to(pageBody, 0.6, {paddingLeft: "248px"});

                    TweenLite.to(headerMiddle, 0.6, {left: "248px"});

                    TweenLite.to(pageMenu, 0.6, {left: "0"});   
                } else {
                    TweenLite.to(pageBody, 0.6, {paddingLeft: "248px"});

                    TweenLite.to(pageMenu, 0.6, {left: "0"});   
                }
            } else if($('body').not('.animate'))  {

                if ($("#header-middle").hasClass('floating')) {
                     TweenLite.to(pageBody, 0.6, {paddingLeft: "0px"});

                    TweenLite.to(headerMiddle, 0.6, {left: "0px"});

                    TweenLite.to(pageMenu, 0.6, {left: "-248px"});   
                } else {
                    TweenLite.to(pageBody, 0.6, {paddingLeft: "0px"});

                    TweenLite.to(pageMenu, 0.6, {left: "-248px"});   
                }
            }
        } /* End Function LTR ToggleMenu */
    
    
        function toggleRTLMenu() {
            if($('body').hasClass('animate')) {
            
                if ($("#header-middle").hasClass('floating')) {
                    TweenLite.to(pageBody, 0.6, {paddingRight: "248px"});

                    TweenLite.to(headerMiddle, 0.6, {right: "248px"});

                    TweenLite.to(pageMenu, 0.6, {right: "0"});   
                } else {
                    TweenLite.to(pageBody, 0.6, {paddingRight: "248px"});

                    TweenLite.to(pageMenu, 0.6, {right: "0"});   
                }
            } else if($('body').not('.animate'))  {

                if ($("#header-middle").hasClass('floating')) {
                     TweenLite.to(pageBody, 0.6, {paddingRight: "0px"});

                    TweenLite.to(headerMiddle, 0.6, {right: "0px"});

                    TweenLite.to(pageMenu, 0.6, {right: "-248px"});   
                } else {
                    TweenLite.to(pageBody, 0.6, {paddingRight: "0px"});

                    TweenLite.to(pageMenu, 0.6, {right: "-248px"});   
                }
            }

            return false;
        }
    
    
    
    $('html[dir="ltr"] #page-header .fa-bars').on('click tap', function (e) {
        e.preventDefault();
        $('body').toggleClass('animate');
        $('#header-base').toggleClass('menu-visible');
        
        toggleLTRMenu();
        
        return false;
        
    });
    
    
    $('html[dir="rtl"] #page-header .fa-bars').on('click tap', function (e) {
        e.preventDefault();
        $('body').toggleClass('animate');
        $('#header-base').toggleClass('menu-visible');
        
        toggleRTLMenu();
        
        return false;
    });
    
    
    
    $('html[dir="ltr"] .body-overlay').on('click tap swipeleft', function () {
            $('body').removeClass('animate');
        
         toggleLTRMenu();
    });
    
    $('html[dir="rtl"] .body-overlay').on('click tap swipeleft', function () {
            $('body').removeClass('animate');
        
         toggleRTLMenu();
    });
    
    
    $(window).on('scroll', function() {
        if( ($('html[dir="ltr"] #header-base').hasClass('menu-visible')) && ($("#header-middle").hasClass('floating')) ) {
            TweenLite.to(headerMiddle, 0, {left: "248px"});
        } else {
            TweenLite.to(headerMiddle, 0, {left: "0px"});
        }
        
        if( ($('html[dir="rtl"] #header-base').hasClass('menu-visible')) && ($("#header-middle").hasClass('floating')) ) {
            TweenLite.to(headerMiddle, 0, {right: "248px"});
        } else if ( ($('html[dir="rtl"] #header-base').not('.menu-visible')) && ($("#header-middle").not('.floating')) ) {
            TweenLite.to(headerMiddle, 0, {right: "0px"});
        }
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
    
    
/*
    This toggles the Shopping Cart dropdown
*/
    $('#header-shopping-cart > a').click(function(e) {
        e.preventDefault();
        $('#header-shopping-cart .cart-dropdown').fadeToggle();
    });
    
/*
    This is to remove products added to the shopping cart dropdown
*/
    
    $('#header-shopping-cart ul.item-list .fa-close').on('click', function() {
        $(this).parents('.table-row').remove(); 
    });

    

/************************/
/*** WEBSITE CONTENTS ***/
/************************/
/*
    Product Overview Slider
*/
$('html[dir="ltr"] .product-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.product-gallery-nav',
    responsive: [
    {
      breakpoint: 991,
      settings: {
          fade: false
      }
    }
  ]
});
    
$('html[dir="ltr"] .product-gallery-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-gallery',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
  draggable: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
$('html[dir="rtl"] .product-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.product-gallery-nav',
  rtl: true
});
    
$('html[dir="rtl"] .product-gallery-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-gallery',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
  draggable: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
    $(window).on('load resize', function() {
        if($('#header-auction').is(':visible')) {
            $('html[dir="ltr"] .product-gallery .img-zoom').elevateZoom({cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'});

            $('html[dir="rtl"] .product-gallery .img-zoom').elevateZoom({cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif', zoomWindowOffetx: -800});
        } else {
            $.removeData($('.product-gallery .img-zoom'), 'elevateZoom');
            $('.zoomContainer').remove();
        }
    });
    
 
    
/*
    Banner Tabs Slider
*/
    
    $('html[dir="ltr"] #banner-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
        prevArrow: false,
      arrows: false,
      fade: false,
        autoplay: true,
      asNavFor: '#banner-nav',
        lazyLoad: 'ondemand',
        responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true
      }
    }]
    });
    
    $('html[dir="ltr"] #banner-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '#banner-carousel',
      centerMode: false,
      focusOnSelect: true
    });
    
    
    $('html[dir="rtl"] #banner-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
        prevArrow: false,
      arrows: false,
      fade: false,
        autoplay: true,
      asNavFor: '#banner-nav',
        rtl: true,
        lazyLoad: 'ondemand',
        responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true
      }
      }]
    });
    
    $('html[dir="rtl"] #banner-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '#banner-carousel',
      centerMode: false,
      focusOnSelect: true,
        rtl: true
    });
    
    $('#banner-nav a').on('click', function(e) {
        if ($(this).parent('.slick-slide').hasClass('slick-current')) {
            return true;
        } else {
            e.preventDefault();
        }
    });
    
    
/*
    Featured Slider
*/
    $('html[dir="ltr"] .featured-carousel').slick({
  dots: false,
  accessibility: true,
arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
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

    
    /*
    Featured Slider
*/
    $('html[dir="rtl"] .featured-carousel').slick({
  dots: false,
  accessibility: true,
arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    rtl: true,
    lazyload: 'ondemand',
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



$('html[dir="ltr"] #simple-carousel').slick({
    dots: true,
    arrows: false,
    lazyLoad: 'ondemand'
});
    
$('html[dir="rtl"] #simple-carousel').slick({
    dots: true,
    arrows: false,
    rtl: true,
    lazyLoad: 'ondemand'
});
/*
    Product Rating
*/
$(".product-rating-view").starRating({
    starSize: 15,
    activeColor: 'red',
    readOnly: true,
    emptyColor: '#ffffff',
    starGradient: {
      start: '#ffbd00',
      end: '#ffbd00'
  }
});
    

$(".product-rating-edit").starRating({
    initialRating: 0,
    useFullStars: true,
    emptyColor: 'white',
    disableAfterRate: false,
    onHover: function(currentIndex, currentRating, $el){
        if (currentIndex == 1) {
            $('.live-rating').text("Not good. Not recommended");   
        } else if (currentIndex == 2) {
            $('.live-rating').text("There's something missing");   
        } else if (currentIndex == 3) {
            $('.live-rating').text("Average. Ordinary");   
        } else if (currentIndex == 4) {
            $('.live-rating').text("Good. Recommended");   
        } else if (currentIndex == 5) {
            $('.live-rating').text("Great! Highly recommended");
        } else {
            $('.live-rating').text("Click the stars to rate this product");
        }
    },
    onLeave: function(currentIndex, currentRating, $el){
       if (currentRating == 1) {
            $('.live-rating').text("Not good. Not recommended");   
        } else if (currentRating == 2) {
            $('.live-rating').text("There's something missing");   
        } else if (currentRating == 3) {
            $('.live-rating').text("Average. Ordinary");   
        } else if (currentRating == 4) {
            $('.live-rating').text("Good. Recommended");   
        } else if (currentRating == 5) {
            $('.live-rating').text("Great! Highly recommended");
        } else {
            $('.live-rating').text("Click the stars to rate this product");
        }
    }
  });
    
    
/*
    Tooltip
*/
    
$('.fa-question-circle-o').popover({
        html: true,
        trigger: 'manual',
        container: $(this).attr('id'),
        placement: 'top',
        content: function () {
            $return = '<div class="hover-hovercard"></div>';
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
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
    
$('#product-specifications').readmore({
    speed: 1000,
    collapsedHeight: 0,
    moreLink: '<a href="#" id="product-details-link" class="primary-link basic-link txt-sm base-xs-buffer"><i class="fa fa-arrow-circle-right"></i> View Full Specs</a>',
    lessLink: '<a href="#" id="product-details-link" class="primary-link basic-link txt-sm base-xs-buffer"><i class="fa fa-arrow-circle-right"></i> View Less Specs</a>'
});
    
$(document).on( 'shown.bs.tab', 'a[data-toggle=\'tab\']', function (e) {
$('#review-tabs .guidelines').readmore({
    speed: 1000,
    collapsedHeight: 0,
    moreLink: '<a href="#" id="product-details-link" class="primary-link basic-link txt-sm base-xs-buffer"><i class="fa fa-arrow-circle-right"></i> Show help and guidelines</a>',
    lessLink: '<a href="#" id="product-details-link" class="primary-link basic-link txt-sm base-xs-buffer"><i class="fa fa-arrow-circle-right"></i> Hide help and guidelines</a>'
});
});
    

    

    
    
var outerHeight = 0;
$('#expert-reviews .review-list > .row.visible').each(function() {
  outerHeight += $(this).outerHeight();
});

var customHeight = outerHeight
    
$('#expert-reviews .review-list').readmore({
    speed: 1000,
    collapsedHeight: customHeight,
    moreLink: '<a href="#" id="product-details-link" class="primary-link basic-link txt-sm txt-center top-xs-buffer"><i class="fa fa-arrow-circle-right"></i> Read More Reviews</a>',
    lessLink: '<a href="#" id="product-details-link" class="primary-link basic-link txt-sm txt-center top-xs-buffer"><i class="fa fa-arrow-circle-right"></i> Read Less Reviews</a>'
});



/*
    Button Options Group Toggle Function
*/
$('.btn-options-group button').on('click', function() {
    $(this).toggleClass('active'); 
});



/* 
    Input Number Field
*/
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
    
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
});


$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
});
    
    

    
/*
    Primary Sidebar - Range Slider
*/
$('#filter-price').slider();
    
$('html[dir="rtl"] #filter-price').slider({
    reversed: true
});

$('#primary-sidebar .tooltip.tooltip-main.top .tooltip-inner').appendTo('#primary-sidebar .price-range .range-current');



$('img.lazyloaded').lazyload();

    
    
$('#tab-content-payment .panel-title > span').on('click', function() {
    $(this).find('input[type="radio"]').prop('checked', true);
});
    

    
/*
    Note: This is for trigger Form Validator when user clicks on a Select dropdown but doesn't select any option and clicks outside the Select field to remove the dropdown
*/
$('.select-wrapper').on('click', function() {
    $('body').click(function() {
       $(this).find('select').change();   
    });
});

/*
    Note: The Form Validator adds a red border on the Input/Select element when it's invalid but the customized Select field's border is hidden so the red border doesn't appear on Select fields. The following code implements the red border on Select field's parent div (.select-wrapper) when the Select field is invalid.
*/
$('.select-wrapper select').on('change', function() {
    if($(this).hasClass('valid')) {
        $(this).parent('.select-wrapper').removeClass('error').addClass('valid');
    } else if($(this).hasClass('error')) {
        $(this).parent('.select-wrapper').removeClass('valid').addClass('error');
    }
});
    

/*
    This is for the Checkout page tabs (Your Details/Payment). Clicking on the Proceed button switches to the next tab (Payment).
*/
$("#btn-proceed").click(function(e) {
    e.preventDefault();
    $('#checkout-tabs a[href="#tab-content-payment"]').tab('show');
    $('html, body').animate({
        scrollTop: $("#page-header").offset().top
    }, 1000);
});
    
$("#btn-back").click(function(e) {
    e.preventDefault();
  $('#checkout-tabs a[href="#tab-content-details"]').tab('show');
});

/*
    Note: This disables the Checkout Tab buttons, so user can't proceed to the next tab without completing the forms and clicking the "Proceed" button. 
*/
$('#checkout-tabs li a').prop('disabled', true);
    
    
/*
    Dashboard Pages
*/
/*
    Dashboard Primary Content
*/
    $('.form-group-parent .form-group-child-toggle').on('click', function(e) {
        $(this).siblings('.form-group-child').slideToggle('slow'); 
        return false;
    });
/*
    Dashboard Primary Sidebar
*/
    $('#dashboard-primary-sidebar .fa-bars').on('click', function(e) {
        e.preventDefault();
       $('#dashboard-primary-sidebar').toggleClass('active');
    })
    
    $('#dashboard-primary-sidebar ul.order-list').readmore({
        speed: 500,
        collapsedHeight: 54,
        heightMargin: 16,
        moreLink: '<footer><a href="#" class="toggle-link link txt-sm">View All</a></footer>',
        lessLink: '<footer><a href="#" class="toggle-link link txt-sm">View Less</a></footer>'
    });
    
    $('.panel-toggle .panel-body').hide();
    
    $('.panel-toggle.visible .panel-body').show();
    
    $('.panel-toggle a.btn-toggle').on('click', function(e) {
        e.preventDefault();
       $(this).parent('.panel-heading').siblings('.panel-body').slideToggle(); 
    });

    
    
}); /* End jQuery */

        
