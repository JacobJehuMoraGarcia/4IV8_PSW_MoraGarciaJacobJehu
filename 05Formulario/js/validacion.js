/*
javascript es un lenguaje que posee un paradigma orientado a objetos y a funciones,
por tal motivo presenta una particularidad la cual es 
}NO TIPADO

no existe int,float,double, String, etc.

dentro de JS todo es VAR -> variable

VAR
LET Es un tipo de variable protected
CONST
*/
function validar(formulario){

    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 caracteres para el nombre");
        formulario.nombre.focus();
        return false;
    }
        
   var checkOK ="qwertyuiopasdfghjklñzxcvbnm"+"QWERTYUIOPASDFGHJKLÑZXCVBNM";

   var checkStr =formulario.nombre.value;

   var allValido = true;

   for(var i=0; i<checkStr.length; i++){
        var ch = checkStr.chartAt(i);
        for(var j=0; j< checkOK.length;j++){
            if (ch ==checkOK.charAt(j));
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
   }

   if (allValido){
       alert("Escriba letras en el campo de nombre");
       formulario.nombre.focus();
       return false;


   }
   var checkOK ="1234567890";

   var checkStr =formulario.edad.value;

   var allValido = true;

   for(var i=0; i<checkStr.length; i++){
        var ch = checkStr.chartAt(i);
        for(var j=0; j< checkOK.length;j++){
            if (ch ==checkOK.charAt(j));
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
   }

   if (allValido){
       alert("Escriba numeros en el campo de nombre");
       formulario.edad.focus();
       return false;


   }

   var txt = formulario.email.valor;
   //crear expresion

   var b =/^[^@\s]+[^@\.\s]+(\.[^@\s]+)+$/;

alert("Email" +(b.test(txt)?"":"no")+ "valido");
return b.test;

}

/*
Es necesario que busquen como crear expresiones regulares para poder validar la entrada de datos

expresiones regulares java scriipt mozilla

*/ 


