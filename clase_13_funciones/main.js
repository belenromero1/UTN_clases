//FUNCIONES//

// function saludar(){
//     let nombre = prompt("Ingrese su nombre")
//     alert (" Hola "+ nombre)
// }
// saludar();
/**puedo llamarlo en cualquier parte de mi programa */

//FUNCION CON PARAMETRO//
// function saludar(nombre, apellido, serieFavorita){
// console.log(" Hola "+ nombre + " " +  apellido + " mi serie favorita es: "+ serieFavorita)

// }
// saludar("Maria", "Romero", "Gray`s Anatomy")
// saludar()
// saludar()

//VALORES DE RETORNO

// function multiplicar(num1, num2){
//     let num3=10
//     return (num1 + num2)
// * 3;
// }

// let resultado = multiplicar (2, 5);
// console.log("El resultado es " + resultado)


//Ejercicio : Crear una función que reciba el parámetro nombre y que devuelva el largo de ese nombre.
// Guardar el valor de retorno en una variable y mostrarlo en consola.
// Por ejemplo: si ingresamos “Ana”. El resultado debería ser 3. 

// function nombreLargo(nombre){
//     return nombre.length;
// }
// let nombreLength = nombreLargo ("Martina");
// console.log("El nombre tiene ", nombreLength, " letras")


//SCOPE 
//scope global/variable global.... declarada por fuera de la funcion
// let num = 1;
// function sumarEdad(edad) {
//     return edad + num;
// }
// console.log(num)

//variable local... variable dentro de un bloque no la puedo llamar por fuera
// function sumarEdad(edad) {
//     let num = 1;	
//     return edad + num;
// }

//FUNCIONES ANÓNIMAS (sin nombre, no declarada)
// const suma = function(a , b){
//     return a + b;
// }
// console.log(suma(18, 20));

//FUNCIONES FLECHA (con menos sintaxis, => es igual a decir function)

// const resta = (a, b) => {return a - b}
// console.log(resta (92, 14))

//Ejemplos
// const suma = (a, b)=> a + b;
// const resta = (a, b)=> a - b;

// //calcular un precio
// const iva = x => x * 0.21;

// let precioProducto = 600;
// let precioDescuento =50;

//Calculamos el precioProducto + IVA - precioDescuento

// let precioFinal = resta(suma(precioProducto, iva (precioProducto)), precioDescuento)

// console.log(precioFinal)

/**DOM */

// let encabezado = document.querySelector("h1");
// console.log(encabezado.innerText);/**me muestra lo que esta dentro del h1 */

// let texto = document.querySelector(".texto")
// console.log(texto.innerHTML)


/**PRACTICA CLASE 13 */
//Pedir dos numeros al usuario y sumarlos

/**let a = parseFloat(prompt("Ingrese un numero"))
let b = parseFloat(prompt("Ingrese un numero"))

let resultado = a + b;

console.log(resultado)*/

// function suma (a, b){
//     return a + b
// } 
/**let esta en el ambito global por ende me ocupa espacio en la memoria */
// let a = parseFloat(prompt("Ingrese un numero"))
// let b = parseFloat(prompt("Ingrese un numero"))

// let resultado = suma(a, b)
// console.log(resultado)

/**LO MISMO PERO COMO VARIABLE LOCAL */
// function suma (a, b){
//     return a + b
// }

// let resultado = suma(parseFloat(prompt("Ingrese un numero")),parseFloat(prompt("Ingrese un numero")) )


// console.log(resultado)

// function devolverMayor (a, b){
// if(a > b){
//     return a
// }else if (a === b) {
//     return "son iguales"
// }else{
//     return b
// }
// }
// let resultado = devolverMayor(parseFloat(prompt("Ingrese un numero")),parseFloat(prompt("Ingrese un numero")) )
// console.log(resultado)

//EJERCICIO 2: Calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados.

const calcularTiempoPromedio = () =>{
    return turnos * tiempoPromedio
}
/**recibe un numero. si es menor a 60 lo devuelve en min y si es mayor a 60 lo devuelve como numero + "hs" */

const darFormatoDeHora = (tiempo) =>{
    if (tiempo < 60){
        return tiempo + "min"
    }else if(tiempo >= 60){
        /**parceInt devuelve numeros enteros */
        return parceInt(tiempo/60) + ":" + (tiempo%60) + "hs"
    }
}

let tiempoPromedio = 15
let turnos = 0


const sacarTurno = () =>{
    let nombre = prompt("Ingrese un nombre")
    let quieroSacarTurno = prompt("¿Desea sacar un turno?")
    if (quieroSacarTurno == "si"|| quieroSacarTurno == "SI" || quieroSacarTurno == "Si"){
        alert(nombre + "tiene turno para dentro de "+ darFormatoDeHora( calcularTiempoPromedio()))
        turnos++
    }else{
        alert ("Que tenga un lindo día!")
    }
}


























