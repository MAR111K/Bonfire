
  $(window).resize(function () {
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = $(this).width();

    if (widthWind < 700) {$(document).ready(function() {
    
      $( document ).ready(function(){
        $( ".bord__image" ).hover(function(){ // задаем функцию при наведении курсора на элемент	
            $(this).removeClass('link__image1').addClass('link__image2');
    
          }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
            $(this).removeClass('link__image2').addClass('link__image1');
        });
      });
    
    
    });
       /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
    }
}
);