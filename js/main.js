
     
/*

        =========================================================================================
          WOW
        =========================================================================================
        */  
jQuery(function($){  
        var wow = new WOW(
          {
            boxClass:     'wow',     
            animateClass: 'animated',
            offset:       0,        
            mobile:       true,     
            live:         true,
            callback:     function(box) {
            },
            scrollContainer: null
          }
        );
        wow.init();

        /*
        =========================================================================================
          new-products-area-left-slider
        =========================================================================================
        */

$('.new-products-area-left-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
  /*
        =========================================================================================
          featured-products-area-bottom-slider
        =========================================================================================
        */

$('.featured-products-area-bottom-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
 /*
        =========================================================================================
          featured-products-area-bottom-left
        =========================================================================================
        */
$('.featured-products-area-bottom-left').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
/*
        =========================================================================================
          products2-area-left
        =========================================================================================
        */
$('.products2-area-left').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

 /*
        =========================================================================================
        4. MEGA MENU
        =========================================================================================
        */
    
       $(".page2 > li >a").on('click', function() {
            $(this).parent().addClass("active");
            $(".page2 > li >a").not(this).parent().removeClass("active");
            var TargetId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(TargetId).offset().top - 50
            }, 2000, 'swing');
            return false;
        });
       (function() {

               $(window).on('scroll', function() {
                       /*
                       =========================================================================================
                       1. NAVBAR 
                       =========================================================================================
                       */

                       if ($(window).scrollTop() > 30) {
                           $(".header-top").addClass("ds_padding");
                       } else {
                           $(".header-top").removeClass("ds_padding");
                       }
                                 
               });

           }());
    });