
$(window).resize(function () {
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = $(this).width();

    if (widthWind > 600){
        $(document).ready(function() {
    
        $('.button').click(function() {
            $('.submenu').toggleClass('visible');
        });
    
    });
       /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
    }
}
);

$(window).resize(function () {
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = $(this).width();

    if (widthWind > 600) {$(document).ready(function() {
    
        $('.button2').click(function() {
            $('.submenu2').toggleClass('visible');
        });
    
    });
       /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
    }
}
);

$(window).resize(function () {
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = $(this).width();

    if (widthWind > 600) {$(document).ready(function() {
    
        $('.button3').click(function() {
            $('.submenu3').toggleClass('visible');
        });
    
    });
       /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
    }
}
);
$(window).resize(function () {
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = $(this).width();

    if (widthWind > 600) {$(document).ready(function() {
    
        $('.button4').click(function() {
            $('.submenu4').toggleClass('visible');
        });
    
    });
       /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
    }
}
);

$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__navigation').toggleClass('open-menu');
       
     
        
    });
});
