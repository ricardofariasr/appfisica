function _onClick(){
var kelvin = 0;
var Fahrenheit = 0;
var celsius = document.getElementById("cel").value;
celsius = parseInt(celsius);
kelvin = celsius + 273.15 ;
Fahrenheit = 1.8 * celsius + 32;
v
if(celsius == "" || celsius < -273.15){
alert("Essa temperatura Não existe");
}
else if(Fahrenheit < -459.67){
    var arredondakel = parseFloat(kelvin.toFixed(2));
    alert("A temperatura em graus celsius digitada, foi:" +celsius+ "°. \n Essa temperatura em graus kelvin é aproximadamente: " +arredondakel+ "°. \n Porém essa temperatura não existe e graus fahrenheit");
}
else if(kelvin < 0){
    var arredondafar = parseFloat(Fahrenheit.toFixed(2));
    alert("A temperatura em graus celsius digitada, foi:" +celsius+ "°. \n Essa temperatura em graus fahrenheit é aproximadamente: " +arredondafar+ "°. \n Porém essa temperatura não existe e graus kelvin.");
}
else{
 
var arredondakel = parseFloat(kelvin.toFixed(2));
var arredondafar = parseFloat(Fahrenheit.toFixed(2));
alert("A temperatura em graus celsius digitada, foi: " + celsius + "°. \n Essa temperatura em graus Fahrenheit é aproximadamente: "+arredondafar+ "°.\n E em Kelvin é aproximadamente: "+arredondakel+ "°.");
}
}