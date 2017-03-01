function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	var respuesta='si';



	do{

		var dato = prompt("Ingrese el dato");

		if(dato != respuesta){

			var num = parseInt(dato);

			if(dato < 0){

				negativo *= num;

				console.log(negativo);
			}
			else{

				positivo += num;

				console.log(positivo);
			}

		}

	}while(dato != respuesta);



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
