//Creare una griglia 6x6
//ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9

//Tramite jquery attribuisco a ogni quadrato la funzione di reagire ad un click
$(document).ready(function(){
  $('.square').each(function(){
    $(this).click(function(){
      var element = $(this);

      //Tramite ajax elaboro i numeri random che devono generarsi in ogni quadrato
      $.ajax(
        {
          url : "https://flynn.boolean.careers/exercises/api/random/int",
          method : "GET",
          success : function (data, stato){
          element.html(data.response);
          console.log(data);

           //se il numero generato è inferiore a 5 il quadrato acquista la classe yellow

           if(data.response <= 5){
             element.addClass('yellow');
             //$(element).addClass('yellow').removeClass('green');

             //altrimenti acquista la classe green
           }else{
             element.addClass('green');
             //$(element).addClass('green');
           }
         }
        }
      )

    });
  });
});
