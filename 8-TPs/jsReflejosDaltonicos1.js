/*En la pantalla se mostrarán 6 botones de
distintos colores,  al comenzar el juego se
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
function comenzar()
{
 setTimeout(function () {
	 tiempoInicio = new Date();
	 tiempoInicio = tiempoInicio.getTime();
	 var numeroRan = Math.floor(Math.random()*(7-1)+1);

	 console.log(numeroRan);

	 switch (numeroRan) {
	 case 1:
		 document.getElementById("ColorElejido").value = "azul";
		 break;
	 case 2:
		 document.getElementById("ColorElejido").value = "amarillo";
		 break;
	 case 3:
		 document.getElementById("ColorElejido").value = "marron";
		 break;
	 case 4:
		 document.getElementById("ColorElejido").value = "verde";
			 break;
	 case 5:
		 document.getElementById("ColorElejido").value = "celeste";
			 break;
	 case 6:
		 document.getElementById("ColorElejido").value = "rojo";
			 break;
	 default:
 }
 }, 5000);

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	if(document.getElementById("ColorElejido").value == colorParametro){

		var tiempoFinal = new Date();

		tiempoFinal = tiempoFinal.getTime();

		var resultado = tiempoFinal-tiempoInicio;

		alert("Su tiempo fue de : " + resultado);

		comenzar();
	}

}//FIN DE LA FUNCIÓN
