/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio ()
{

  var cant = parseInt(document.getElementById("Cantidad").value);

  var marca = document.getElementById("Marca").value;

  var descuento = document.getElementById("precioDescuento");

  var precioFinal = 35;

  switch(cant){

    case 5:

      precioFinal *= 5;

      if(marca == "ArgentinaLuz"){

        precioFinal -= (precioFinal * 0.40);
      }
      else {

        precioFinal -= (precioFinal * 0.30);
      }

      descuento.value = precioFinal;

      break;

    case 4:

        precioFinal *= 4;

        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){

          precioFinal -= (precioFinal * 0.25);
        }
        else{

          precioFinal -= (precioFinal * 0.20);
        }

        descuento.value = precioFinal;

      break;

      case 3:

        precioFinal *= 3;

        if(marca == "ArgentinaLuz"){

          precioFinal -= (precioFinal * 0.15);
        }
        else if (marca == "FelipeLamparas") {

          precioFinal -= (precioFinal * 0.10);
        }
        else{

          precioFinal -= (precioFinal * 0.05);
        }

        descuento.value = precioFinal;

        break;

      case 2:

          precioFinal *= 2;

          descuento.value = precioFinal;

          break;

      case 1:

          descuento.value = precioFinal;

          break;

    default:

        if(precioFinal >= 6){

          precioFinal *= cant;

          precioFinal -= (precioFinal * 0.50);
        }

        descuento.value = precioFinal;

        break;
  }

  if(precioFinal > 120){

    var impuesto = precioFinal * 0.10;

    precioFinal += impuesto;

    descuento.value = precioFinal;

    alert("IIBB usted pago " + impuesto + " de impuesto");
  }
}
