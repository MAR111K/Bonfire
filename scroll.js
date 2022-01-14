$(window).scroll(function(){
    if ($(window).scrollTop() > 950) {
        $('.border').addClass('animate__animated animate__fadeInLeft');
        $('.image__x').addClass('animate__animated animate__fadeInRight');
    }
    
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 1950) {
        $('.gradient__image').addClass('animate__animated animate__fadeInLeft');
        $('.gradient__text').addClass('animate__animated animate__zoomInRight');
    }
    
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 2950) {
        
        $('.gradient__text').addClass('animate__animated animate__fadeOutRight');
    }
    
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 3100) {
        $('.black__table__text').addClass('animate__animated animate__backInUp');
        $('.black__table1').addClass('animate__animated animate__lightSpeedInLeft');
        $('.black__table2').addClass('animate__animated animate__lightSpeedInRight');
    }
    
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 4500) {
        $('.bord__image').addClass('animate__animated animate__slideInLeft');
        $('.bord__image2').addClass('animate__animated animate__slideInRight');
        $('.bord__image__title').addClass('animate__animated animate__flipInY');
        $('.bord__color__block').addClass('animate__animated animate__flipInX');
    }
    
});
$(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });
   });
