// /** Condicionales, operadores y Arrays */

// // Array vacio
// let grupo = [];
// // Array strings
// let mascotas = ["gato" , "perro" , "conejo"];
// //Array numeros
// let numeros = [ 1, 2, 3, 7];
// //Array boolean
// let verdades = [true, false, true];

// let persona = [1548465, "belen", true, "perro"];

// let resultados = [
//     ["gato", "miau"],
//     ["perro", "guau"],
//     ["ardilla", "whee"]
// ];

// console.log(resultados.length);

// let datos = ["dato1", "dato2", "dato3"];

// console.log(datos[0]);

//Actividad 1

// let nombres =[
// "juan", "marcos", "julian", "maria", "ana"
// ];

// console.log(nombres);
// console.log(nombres.length);
// console.log(nombres[0]);

//Condicionales
// let a = 4;
// if (a > 5) {
// 	console.log("El número es mayor a 5");
// }
// else if(a < 5) {
// console.log("El número es menor a 5");
// }
// else {
// console.log("El número es igual a 5");
// }
//
// let edad = 15;
// let esMayorEdad;

// if (edad > 18){
//     esMayorEdad = true;
//     console.log("Es mayor de edad");
// }
// else{
//     esMayorEdad = false;
//     console.log("Es menor de edad");
// }

//Practica//

// crear lista
// let lista = ["harina", "frutas", "chococolate", "jugos"];

// //prompt
// let articulo = prompt("¿Qué articulo desea agregar a la lista?");

// // condicional

// if (lista.includes(articulo)){
//     alert (articulo + "ya está en la lista")
// } else {
//     lista.push(articulo)
//     alert("la lista es:" +lista)
// }

//SWITCH//
// let fruta = "kiwi";
// switch (fruta) {
//     case "manzana":
//         color = "Rojo";
//         break;
//     case "kiwi":
//         color = "Verde";
//         break;
//     default:
//         color = "Blanco";
// }
// console.log("El color es" + color);

// let color = prompt("Ingrese un color")
// ;
// switch(color) {
//     case "rosa" :
//         alert("es maria")
//         break;
//     case "rojo" :
//         alert("es juan")
//         break;
//     case "amarillo" :
//         alert("es lucas")
//         break;
//     case "azul" :
//         alert("es ana")
//         break;
//         default:
//             alert("no es parte de la lista")
// }



// console.log(new Date().getDay());

// let numeroDia = new Date().getDay();

// switch (numeroDia) {
//     case 0:
//         dia ="domingo";
//         break;
//     case 1:
//         dia = "lunes";
//         break;
//     case 2:
//         dia = "martes";
//         break;
//     case 3:
//         dia = "miercoles";
//         break;
//         case 4:
//             dia = "jueves";
//             break;
//         case 5:
//             dia = "viernes";
//             break;
//         case 6:
//             dia = "sábado";
//             break;
//     default:
//     dia = "Domingo"
// }
// console.log("Hoy es"+ dia);



//Practica clase 11

// let numero = parseFloat(prompt("Ingrese un numero"));

// let esMayorADiez = numero > 10 //puede ser true o false
// let esMenorOIgualADiez = numero <= 10
// if(esMayorADiez){
//     document.write("El numero es mayor a 10")
// }else if(esMenorOIgualADiez){
//     document.write("El numero es menor o igual a 10")
// }else{
//     document.write("El dato ingresado no es un numero")
// }


// let numero = parseFloat(prompt("Ingrese un numero"))

// if (numeroMayorAMil) {
//     alert("Es mayor a 1000")
// } else {
//     alert("Es menor a 1000")
// }

// numero > 1000 ? alert("es mayor a mil") : alert("es menor a mil");

// let mensaje = prompt("Ingrese su mensaje")

//OR ||
// true true =true
// true false/false true=true
// false false =false

// AND &&
// true true =true
// true false/false true=false
// false false =false

// if(mensaje === "hola" || mensaje === "Hola")
//     console.log("Hola...buenos días")

// switch (no puedo usar or and)
// puedo hacer 
// switch(mensaje){
//     case "hola":
//     case "Hola":
//         alert("Hola... buenos días")
//         break;
// }

let numero = parseFloat(prompt("Ingrese un numero"))

//AND
if(numero >= 10 && numero <=50){
    alert("El numero esta entre 10 y 50")
//OR
}else if(numero < 10 || numero > 50){
    alert("El numero es menor a 10 o mayor a 50")
}else{
    alert("El dato no es un numero")
}




