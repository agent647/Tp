function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var contador2 = 1;

	while(contador!=contador2){

		var dato = prompt("Ingrese un digito");

		if(dato == 'si'){

			contador2 = contador;
		}
		else{

			var num = parseInt(dato);

			acumulador += num;

			contador++;

			contador2++;
		}

		console.log(contador);
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
