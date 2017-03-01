/*Además de lo anterior, ahora
se agregara un temporizador que
 a los cinco segundos dará por terminado
 el juego  de no ser ingresado el resultado
 correcto en ese lapso de tiempo. */
 var respuesta;
 var resultado;
 function comenzar()
 {
	setTimeout(repetidora, 4000);

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
	 repetidora();

	 comenzar();
 }//FIN DE LA FUNCIÓN

function repetidora(){

	respuesta = parseInt(document.getElementById("Respuesta").value);

	if(respuesta == resultado){

		alert("Su respuesta es correcta");
	}
	else{

		alert("Tiempo terminado");
	}
}
