var cantidadNega = 0;
var sumaNega = 0;
var promedioNega = 0;
var sumaPosi = 0;
var cantidadPosi = 0;
var promedioPosi = 0;
var cantidadCeros = 0;
var cantidadPares = 0;
var diferencia;

function sumaPositivos(dato){

	sumaPosi += dato;
}

function promedioPositivo(){

	promedioPosi = sumaPosi/cantidadPosi;
}


function promedioNegativos(){

	promedioNega = sumaNega/cantidadNega;

}

function sumaNegativos(dato){

	sumaNega += dato;
}

function Mostrar()
{
	//var pares, positivos, sumaPosi, cantidadPosi, cantidadCeros, cantidadPares, promedioPosi, promedioNega;

	do{

		var dato = prompt("Ingrese un dato");

		if(dato  != 'si'){

			var aux = parseInt(dato);

			if(aux < 0){

				cantidadNega++;
				sumaNegativos(aux);
				promedioNegativos();

			}
			else if(aux > 0){

				cantidadPosi++;
				sumaPositivos(aux);
				promedioPositivo();

			}
			else if( aux == 0){

				cantidadCeros++;
			}
			
			if(aux % 2 == 0){

				cantidadPares++;
			}

			diferencia = sumaPosi - sumaNega;
		}

	}while(dato != 'si');

}//FIN DE LA FUNCIÓN

function resultado(){

		document.write("<h1>Suma Negativos = " + sumaNega + " </h1>");
		document.write("<h1>Cantidad de negativos " + cantidadNega + " </h1>");
		document.write("<h1>Promedio de los negativos " + promedioNega + " </h1>");
		document.write("<h1>Suma Positivos = " + sumaPosi + " </h1>");
		document.write("<h1>Cantidad de positivos " + cantidadPosi + " </h1>");
		document.write("<h1>Promedio de los positivos " + promedioPosi + " </h1>");
		document.write("<h1>Cantidad de ceros " + cantidadCeros + " </h1>");
		document.write("<h1>Cantidad pares " + cantidadPares + " </h1>");
		document.write("<h1>Diferencia " + diferencia + "</h1>");

}
