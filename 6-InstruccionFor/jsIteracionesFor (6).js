function Mostrar()
{

  var dato = parseInt(prompt("Ingrese un num"));

  var cantidadNumeroPares = 0;

  for(i = 0; i <= dato; i++){

    if(i > 1){

      if(i%2 == 0){

        console.log("Numero par :" + i);

        cantidadNumeroPares++;

        console.log("Cantidad de numeros Pares : " + cantidadNumeroPares);
      }

    }

  }

}//FIN DE LA FUNCIÓN
