function Mostrar()
{

	var contador=0;
	var acumulador=0;

	while(contador < 5){

		var aux = parseInt(prompt("Ingrese un numero"));

		var acumulador = acumulador + aux;

		contador++;
	}

	document.getElementById('suma').value=acumulador;

	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
