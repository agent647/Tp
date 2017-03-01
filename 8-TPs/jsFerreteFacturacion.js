/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var resultado = 0;
var precioOne = 0;
var precioTwo = 0;
var precioThree = 0;



function Sumar ()
{

	var precioOne = parseInt(document.getElementById("PrecioUno").value);
	var precioTwo = parseInt(document.getElementById("PrecioDos").value);
	var precioThree = parseInt(document.getElementById("PrecioTres").value);

	resultado = precioOne + precioTwo + precioThree;

	console.log("Sumatoria " +resultado);
}
function Promedio ()
{

	var precioOne = parseInt(document.getElementById("PrecioUno").value);
	var precioTwo = parseInt(document.getElementById("PrecioDos").value);
	var precioThree = parseInt(document.getElementById("PrecioTres").value);

	resultado = precioOne * precioTwo * precioThree;

	resultado /= 3;

	console.log("El promedio " + resultado);
}
function PrecioFinal ()
{

	 precioOne = parseInt(document.getElementById("PrecioUno").value);
	 precioTwo = parseInt(document.getElementById("PrecioDos").value);
	 precioThree = parseInt(document.getElementById("PrecioTres").value);

	 resultado = precioOne + precioTwo + precioThree;

		resultado += (resultado*0.21);

		console.log("El precio final: " +resultado);
}
