jQuery('document').ready(function() {
    
    /*jQuery('body').append('<a href="http://google.com">Goo</a>')
    //Ставит ссылку*/

    /*var a;
    a = jQuery('p').clone();
    jQuery('body').append(a);
    //Копирует p*/
    
    jQuery('Button').on('click', function(){        
        var x1, x2, x3, sum;
        
        x1 = jQuery('#x1').val();
        x2 = jQuery('#x2').val();
        x3 = jQuery('#x3').val();
        
        x1 = parseInt(x1);
        x2 = parseInt(x2);
        x3 = parseInt(x3);
        
        sum = x1 + x2 + x3;        
        
        alert(x1 +' + '+ x2 +' + '+ x3 + ' = ' + sum);
    });

});