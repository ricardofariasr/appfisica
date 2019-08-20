var celsius = 0;
var kelvin = 0;
var Fahrenheit = 0;
celsius = prompt("digite a temperatura em graus celsius que você quer que converta:")
celsius = parseInt(celsius)
kelvin = celsius + 273;
Fahrenheit = 1.8 * celsius + 32;

document.write("A temperatura em graus celsius digitada, foi: " + celsius + "°.<br> Essa temperatura em graus Fahrenheit é aproximadamente: "+Fahrenheit+ "°.<br> E em Kelvin é aproximadamente: "+kelvin+ "°.")