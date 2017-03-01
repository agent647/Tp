/*Debemos mostrar dos números Random  del 1 al 10
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var resultado;
function comenzar()
{

	var primerNumero = Math.floor(Math.random()* (11 - 1) + 1);
	var segundoNumero = Math.floor(Math.random()* (11 - 1) + 1);
	var operadorRandom = Math.floor(Math.random()* (5 - 1) + 1);

	document.getElementById("PrimerNumero").value = primerNumero;
	document.getElementById("SegundoNumero").value = segundoNumero;

	switch (operadorRandom) {
		case 1:
			document.getElementById("Operador").value = "+";
			resultado =  primerNumero + segundoNumero;
			break;
		case 2:
			document.getElementById("Operador").value = "-";
			resultado = primerNumero - segundoNumero;
			break;
		case 3:
			document.getElementById("Operador").value = "/";
			resultado = primerNumero / segundoNumero;
			break;
		case 4:
			document.getElementById("Operador").value = "*";
			resultado = primerNumero * segundoNumero;
		default:

	}

}//FIN DE LA FUNCIÓN
function Responder()
{

	respuesta = parseInt(document.getElementById("Respuesta").value);

	if(respuesta == resultado){

		alert("Su respuesta es correcta");
	}
	else{

		alert("Su respuesta es incorrecta");
	}

	comenzar();
}//FIN DE LA FUNCIÓN
