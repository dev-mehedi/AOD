var scroll = new SmoothScroll('a[href*="#"]');

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: 'true',
  	animateOut: 'flipInY',
    animateIn: 'flipInX',
  	autoplay: 'true',
  	autoplayTimeout: 2000,
  	autoplayHoverPause: 'true',
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
  });
});