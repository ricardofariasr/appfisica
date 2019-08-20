function _onClick(){
var Fahrenheit = document.getElementById("far").value;
var celsius = 0;
var kelvin = 0;
Fahrenheit = parseInt(Fahrenheit);
if(Fahrenheit == "" || Fahrenheit < -459.67){
alert("Essa temperatura Não existe");
}
else{

celsius =  (Fahrenheit -32)/1.8;
kelvin = celsius + 273.15;
var arredondacel = parseFloat(celsius.toFixed(2));
var arredondakel = parseFloat(kelvin.toFixed(2));

document.write("A temperatura em graus Fahrenheit digitada, foi: " + Fahrenheit + "°.<br> Essa temperatura em graus celsius é aproximadamente: "+arredondacel+ "°.<br> E em Kelvin é aproximadamente: "+arredondakel + "°.");

}
}