function _onClick(){
var kelvin = 0;
var Fahrenheit = 0;
var celsius = document.getElementById("cel").value;
celsius = parseInt(celsius);
if(celsius == "" || celsius < - 273.15){
    alert("Essa temperatura Não existe");
    }
    else{
kelvin = celsius + 273;
Fahrenheit = 1.8 * celsius + 32;
var arredondakel = parseFloat(kelvin.toFixed(2));
var arredondafar = parseFloat(Fahrenheit.toFixed(2));
document.write("A temperatura em graus celsius digitada, foi: " + celsius + "°.<br> Essa temperatura em graus Fahrenheit é aproximadamente: "+arredondafar+ "°.<br> E em Kelvin é aproximadamente: "+arredondakel+ "°.");
}
}