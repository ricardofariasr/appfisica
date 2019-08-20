var Fahrenheit = 0;
var celsius = 0;
var kelvin = 0;

Fahrenheit = prompt("digite a temperatura em graus Fahrenheit que você quer que converta:");
Fahrenheit = parseInt(Fahrenheit);

celsius =  (Fahrenheit -32)/1.8;
kelvin = celsius + 273;


document.write("A temperatura em graus Fahrenheit digitada, foi: " + Fahrenheit + "°.<br> Essa temperatura em graus celsius é aproximadamente: "+celsius+ "°.<br> E em Kelvin é aproximadamente: "+kelvin + "°.")