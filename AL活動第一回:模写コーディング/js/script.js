
$(function() {
  const ham = $('#ham-botton'); 
  const nav = $('#js-nav'); 
  ham.on('click', function () { 
    ham.toggleClass('active');
    nav.toggleClass('active');
  });
  
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1, 
    responsive:[{
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
      }
    }]
  });


  AOS.init({
    offset: 200,
    duration: 300,
    easing: 'ease-in',
    once: true,
  });
});

