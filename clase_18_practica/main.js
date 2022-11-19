//REPASO 
//Variables

let numero = 2
let string = "Yo soy un string" + numero
let booleano = true

//bloque de codigo
{
    let numero2 =5
    console.log(numero)
    console.log(numero2)
}
//CONDICONAL Y(&) - O(||)
/** let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}
//BUCLES (cuando se evalua como falsa el bucle se corta)

let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}*/


//FUNCIONES (podemos reutilizarla y llamarla en cualquier parte del codigo) 
//la diferencia entre una funcion normal y una funcion flecha es que esta ultima es una forma mas resumida de hacer la primera, diferencia de sintaxis
const suma  = (a, b) => { return a + b };
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log(suma(15,20));
console.log(resta(20,5));

//OBJETOS
//tiene paramentros 
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();

//ARRAY SON UN TIPO DE OBJETO QUE NOS PERMITE AGRUPAR OTROS OBJETOS
// for, for of, forEach, map

let array = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
]
// los parametros son objeto, indice ej:[0] y array en este caso semana
array.forEach((dia, indice, semana) =>
console.log(dia + " tiene el indice "+ indice + " y los dias de la semana son: "+semana)
    )

//modoficar

let nuevoArray = array.map((dia) =>{
    return "El dia es: " +dia


})
console.log(nuevoArray)

//multiplicar
const numeros = [1, 2, 3, 4]
const porCinco = numeros.map((x) => x*5)
console.log(porCinco)

//Filter
let numero2 = [2, 5, 10, 18, 35]
let numMayorSiete =  numero2.filter((n)=> {
    return n > 7
})
console.log(numMayorSiete)










