function _onClick(){
    var celsius = 0;
    var Fahrenheit = 0;
    var kelvin = document.getElementById("kel").value;
      kelvin = parseInt(kelvin);
    celsius = kelvin - 273.15;
    Fahrenheit = 1.8 * (kelvin - 273 ) + 32 ;
    
    if(kelvin == ""|| kelvin < 0){
    alert("Essa temperatura Não existe");
    }
    else if(celsius < -273.15)
    {
        var arredondafar = parseFloat(Fahrenheit.toFixed(2));
        alert("A temperatura em graus Kelvin digitada, foi: " + Kelvin+"°. \n Essa temperatura em graus fahrenheit é aproximadamente: "+Fahrenheit+"°. \n Porém essa temperatura não existe em graus celsius");
    }
    else if(Fahrenheit < -459.67)
   {
   var arredondacel = parseFloat(celsius.toFixed(2));
   alert("a temperatura em kelvin digitada, foi: " +kelvin+"°. \n Essa temperatura em graus celsius é aproximadamente: "+celsius+"°. \n Porém essa temperatura não existe em graus Kelvin"); 
   }
    else{
    var arredondacel = parseFloat(celsius.toFixed(2));
    var arredondafar = parseFloat(Fahrenheit.toFixed(2));
    alert("A temperatura em graus kelvin digitada, foi: " + kelvin + "°. \n Essa temperatura em graus Fahrenheit é aproximadamente: "+arredondafar+ "°.\n E em celsius é aproximadamente: "+arredondacel+ "°.");
    }
    }