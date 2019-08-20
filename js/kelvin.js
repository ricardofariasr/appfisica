var kelvin = 0;
var celsius = 0;
var Fahrenheit = 0;
kelvin = prompt("digite a temperatura em graus kelvin que você quer que converta:")
kelvin = parseInt(kelvin)
celsius = kelvin - 273;
Fahrenheit = 1.8 * (kelvin - 273 ) + 32;

document.write("A temperatura em graus kelvin digitada, foi: " + kelvin + "°.<br> Essa temperatura em graus Fahrenheit é aproximadamente: "+Fahrenheit+ "°.<br> E em celsius é aproximadamente: "+celsius + "°.");