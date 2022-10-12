/**BUCLES */
//WHILE

//Incremento
// let i = 0;

// while (i <= 15){
//     console.log("El valor de i : ", i);
//     i = i + 1;
// }

//Decremento
// let numero = 50;

// while (numero > 0 ){
//     document.write ("Te queda de saldo", numero, "<br>");
//     numero = numero - 5;
// }


//DO WHILE

// let i = 5;

// do{
//     console.log("El valor de i = ", i);
//     i = i + 1;
// } while (i > 5)

/**Ejercicio 1 */

// let numero = 100;

// while(numero >0 ){
//     if(numero == 1){
//         document.write("Solo falta ", numero," paso por caminar.", "<br>");
//     }else{
//         document.write("Solo falta ", numero," pasos por caminar.", "<br>");
//     }
//     numero = numero -1
// }

//conocer el elemento de cada ARRAY

// let frutas = [
//     "Manzana",
//     "Pera",
//     "Frutilla",
//     "Pera",
//     "Mora",
//     "Limón",
//     "Kiwi"
//     ];

// for (let i = 0; i < frutas.length; i++){
//     let fruta = frutas[i];
//     console.log (fruta + " tiene " + fruta.length + " letras");
//fruta.length .... para el numero de letras del elemento/ frutas.length.....para el numero de elementos total de la lista//
// } 

//MULTIPLICACIÓN

// let ingresaNumero = parseFloat(prompt("Ingresa un numero"));

// for (let i = 1; i <= 10; i++){
//     let resultado = ingresaNumero * i;

//     alert (ingresaNumero + "X" + i + " = " + resultado)
// }

/**EJEMPLO TURNO */

// for (let i = 1; i <=20; i++){
//     let ingresarNombre = prompt("Ingrese un nombre");

//     alert(" turno nro "+ i + " Nombre: "+ ingresarNombre);
// }


/**MÉTODO ARRAYS FOREACH*/

// let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];

// objetosMagicos.forEach(function(objetosMagicos) {
//     console.log("objetos con foreach es:", objetosMagicos);
// })

//MAP ARRAYS

// let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];

// objetos.map(objeto => {
//     console.log("Objeto: " + objeto);
// });

// const numeros = [1, 2, 3, 4, 5, 6];
// const porCien = numeros.map((x) => x * 100);

// console.log("por Cien", porCien);

//MÉTODO FIND
// solo muestra el primer elemento que satisface la condición

// const encontrado = numeros.find(elemento => elemento > 3);

// const nombres = ["emma", "ana", "maria"];
// const encontrado2 = nombres.find(elemento => elemento === "emma")

// console.log(encontrado);
// console.log(encontrado2);

//FILTER
// filtra los numeros y deja solo los mayores a 5

// let numeros = [2, 5, 6, 18, 201];
// let numMayoresCinco = numeros.filter((n) => {
//     return n > 5
// });

// console.log(numMayoresCinco);



/**PRACTICA */

// const listaDeNumeros = [2, 6, 9]

// for(let i = 0; i < listaDeNumeros.length; i++){

//     console.log(listaDeNumeros[i])
// }


/**FOR OFF */
// const Result = []

// for (let elemento of listaDeNumeros) {
// //filter sin usar el método filter
// if (elemento < 3) {
//     console.log(" El numero " + elemento + " no es mayor a 3 ")
// }else{
//     Result.push(elemento)
// }
// }
// console.log(Result)


/**FUNCIONES en flecha*/
// const sumar = (a, b) =>{
//     return a + b
/**función anonima */
// }
// console.log(sumar(8, 10))

//ACTIVIDADES

/**1. Recorrer un array de números con el método .map() y crear un nuevo array que indique el número y si el número es par o impar.*/

// const listaDeNumeros = [2, 6, 9, 7, 1];

// const result = listaDeNumeros.map( (numero) => 
// {
// if (numero % 2 === 0){
//     return numero + " Es par"
// }else{
//     return numero + " Es impar"
// }
// });
// console.log(result)
/** los que sean 0 son pares y los que son 1 son impares */

//2. Crea un array de strings con nombres y luego guardá en una variable nombresCortos un nuevo array con los nombres que tengan 5 0  menos letras.

// const listaDeNombres =["luca", "martina", "ana", "julian"]

// console.log(listaDeNombres.filter((nombre) => nombre.length < 6))

// 3. pregunten al usuario 5 nombres y agreguenlo a un  Array

// luego muestren solo los que sean mayores a 7 letras con un alert

const listaDeNombres = prompt("Ingrese un nombre")

















