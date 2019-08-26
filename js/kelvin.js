function _onClick(){
var celsius = 0;
var Fahrenheit = 0;
var kelvin = document.getElementById("kel").value;
kelvin = parseInt(kelvin);
if(kelvin == "" || kelvin < 0){
    alert("Essa temperatura Não existe");
    }
    else{

celsius = kelvin - 273.15;
Fahrenheit = 1.8 * (kelvin - 273.15 ) + 32;
var arredondafar = parseFloat(Fahrenheit.toFixed(2));
var arredondacel = parseFloat(celsius.toFixed(2));

document.write("A temperatura em graus kelvin digitada, foi: " + kelvin + "°.<br> Essa temperatura em graus Fahrenheit é aproximadamente: "+arredondafar+ "°.<br> E em celsius é aproximadamente: "+arredondacel + "°.");

}
}