function Mostrar()
{

	var minimo = Math.floor((Math.random()*100 )+1);

	var maximo = 1;

	do{

		var dato = prompt("Ingrese el dato");

		if(dato != 'si'){

			var num = parseInt(dato);

			if(num < minimo){

				minimo = num;
			}
			else if(num > maximo){

				maximo = num;
			}
		}

	}while(dato !=  'si');

	document.getElementById("minimo").value = minimo;
	document.getElementById("maximo").value = maximo;
	
}//FIN DE LA FUNCIÓN
