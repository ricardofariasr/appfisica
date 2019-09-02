function _onClick(){
var Fahrenheit = document.getElementById("far").value;
var celsius = 0;
var kelvin = 0;
if(Fahrenheit == "" || Fahrenheit < -459.67){
alert("Essa temperatura Não existe");
}
else{
Fahrenheit = parseInt(Fahrenheit);
celsius =  (Fahrenheit -32)/1.8 ;
kelvin = celsius + 273.15;
var arredondacel = parseFloat(celsius.toFixed(2));
var arredondakel = parseFloat(kelvin.toFixed(2));

alert("A temperatura em graus Fahrenheit digitada, foi: " + Fahrenheit + "°.\n Essa temperatura em graus celsius é aproximadamente: "+arredondacel+ "°.\n E em Kelvin é aproximadamente: "+arredondakel + "°.");

}
}