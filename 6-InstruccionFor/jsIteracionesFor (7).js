function Mostrar()
{

  var entrada = parseInt(prompt("Ingrese su dato"));

  var cantidad = 0;

  for(i = 0; i <= entrada; i++){

    if(entrada%i==0){

      cantidad++;

      console.log(i + " es divisor de " + entrada);
      console.log("la cantidad de divisores de " + entrada + " es " + cantidad);
    }
  }

}//FIN DE LA FUNCIÓN
