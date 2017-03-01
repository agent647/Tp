/*Al comenzar el juego generamos un número
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número
  ingresado es el mismo que el número secreto se dará
  por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto = 0;
var contadorIntentos = 0;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random()*(100-1)+1);

	console.log(numeroSecreto);
}

function verificar()
{

	var validacion = parseInt(document.getElementById("numero").value);

	var intentosCampo = document.getElementById("intentos");

	if(validacion < numeroSecreto){

		alert("El numero que ingreso es menor que numero secreto");

		contadorIntentos++;
	}
	else if(validacion > numeroSecreto){

		alert("El numero que ingreso es mayor que numero secreto");

		contadorIntentos++;
	}
	else{

		contadorIntentos++;

		alert("Es un ganador en solo " + contadorIntentos + " intentos");
	}

	intentosCampo.value = contadorIntentos;
}
