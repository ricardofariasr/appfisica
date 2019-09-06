function _onClick(){
var Fahrenheit = document.getElementById("far").value;
var celsius = 0;
var kelvin = 0;
Fahrenheit = parseInt(Fahrenheit);
celsius =  (Fahrenheit -32)/1.8 ;
kelvin = celsius + 273.15;
if(Fahrenheit == "" || Fahrenheit < -459.67){
alert("Essa temperatura Não existe");
}
else if(kelvin < 0)
{
    var arredondacel = parseFloat(celsius.toFixed(2));
    alert("A temperatura em graus Fahrenheit digitada, foi: " + Fahrenheit + "°. \n Essa temperatura em graus celsius é aproximadamente: " +arredondacel+"°. \n Porém essa temperatura em graus Kelvin não existe")
}
else if(celsius < -273.15){
    var arredondakel = parseFloat(kelvin.toFixed(2));
    alert("A temperatura em graus fahrenheit digitada, foi: "+Fahrenheit+"°. \n Essa temperatura em graus Kelvin é aproximadamente: "+arredondakel+"°. \n Pprém essa temperatura em Celsius não existe");
}
else{
;
var arredondacel = parseFloat(celsius.toFixed(2));
var arredondakel = parseFloat(kelvin.toFixed(2));
alert("A temperatura em graus Fahrenheit digitada, foi: " + Fahrenheit + "°.\n Essa temperatura em graus celsius é aproximadamente: "+arredondacel+ "°.\n E em Kelvin é aproximadamente: "+arredondakel + "°.");
}
}