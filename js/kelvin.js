function _onClick(){
    var celsius = 0;
    var Fahrenheit = 0;
    var kelvin = document.getElementById("kel").value;
  
    if(kelvin == ""|| kelvin < 0){
    alert("Essa temperatura Não existe");
    }
    else{
        kelvin = parseInt(kelvin);
    celsius = kelvin - 273.15;
    Fahrenheit = 1.8 * (kelvin - 273 ) + 32;
    var arredondacel = parseFloat(celsius.toFixed(2));
    var arredondafar = parseFloat(Fahrenheit.toFixed(2));
    alert("A temperatura em graus kelvin digitada, foi: " + kelvin + "°. \n Essa temperatura em graus Fahrenheit é aproximadamente: "+arredondafar+ "°.\n E em celsius é aproximadamente: "+arredondacel+ "°.");
    }
    }