var miTemporizador ;
var contador=0;
var tiempoInicio;
var tiempoFinal;


function inicio()
{
	document.getElementById("secreto").style.visibility="hidden";
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);

}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {


	document.getElementById("secreto").style.visibility="visible";
 	tiempoInicio=  new Date();
 	tiempoInicio= tiempoInicio.getTime() * 0.1000;
 	alert(tiempoInicio);

}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	tiempoFinal= new Date();
	tiempoFinal= tiempoFinal.getTime() * 0.1000;
	alert(tiempoFinal-tiempoInicio);
}//FIN DE LA FUNCIÓN fin
