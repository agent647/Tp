function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo != "m"){

  sexo = prompt("ingrese bien el dato 'f' o 'm'");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
