/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados ()
{

	var temp = parseInt(document.getElementById("Temperatura").value);

	var ecuacion = ((temp - 32)*(5/9));

	alert(temp + " Fahrenheit son "  + ecuacion + " centigrados");
}

function CentigradosFahrenheit ()
{

	var temp = parseInt(document.getElementById("Temperatura").value);

	var ecuacion = temp * 9/5 + 32;

	alert( temp + " Centigrados son " + ecuacion + " Fahrenheit");
}
