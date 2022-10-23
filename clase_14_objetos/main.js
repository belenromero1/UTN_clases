//Declaracion de un objeto literal

// const producto1 ={
//     id:1,
//     nombre: "Tallarines",
//     precio: 60.3
// }
// console.log(producto1);
// console.log(producto1.precio);
// console.log(producto1.nombre)

//Ejemplo cambiar nombre de producto
/**producto1["nombre"] = "Tirabuzon"
console.log(producto1.nombre)*/

// uso la notación punto para imprimir las propiedades
// alert(
//     "El producto id: " + producto1.id + " Nombre "+ producto1.nombre + " Precio $ "+ producto1.precio
// );
//Otra forma de hacer lo mismo con ¨[]
// alert(
//     "El producto id: " + producto1["id"] + " Nombre "+ producto1["nombre"] + " Precio $ "+ producto1["precio"]
// );

//OBJETOS CONSTRUCTORES

//function Producto (parametro1,parametro2,parametro3)
/** 
function Producto(id, nombre, precio){
this.id = parseInt(id)
this.nombre = nombre
this.precio = parseFloat(precio)
//Método
this.descuento = function(valor){
    this.precio -= valor;
}
}
//Instanciar objetos con función const
const producto2 = new Producto(1, "Tallarines", 80.5)
const producto3 = new Producto(2, "Pan", 100)
const producto4 = new Producto(3, "Arroz", 56);

console.log(producto2);
console.log(producto3);
console.log(producto4);

producto4.descuento(10);
console.log(producto4.precio);

//Ejemplo si quisiera que le usuario ingrese valores por promt

const producto5 = new Producto (prompt("Ingresar id"),prompt("Ingresar nombre"), prompt("Ingresar precio") );

console.log(producto5)
producto5.descuento(100);
console.log(producto5.precio);
*/

//DECLARACION DE CLASES
// class productoClass{
//     constructor (id, nombre, precio){
//         this.id = parseInt(id);
//         this.nombre = nombre;
//         this.precio = parseFloat(precio);
//     }
//     descuento (valor){
//         this.precio -= valor;
//     }
// }
//  //Instanciar objetos con clases

// const producto6 = new productoClass(3, "chocolate", 300)
// console.log(producto6)
// producto6.descuento(40)
// console.log(producto6);


//OPERADOR IN Y FOR IN
/** const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}*/

//PRACTICA 2DA PARTE DE LA CLASE
//ARRAY DE OBJETOS
const productos = [
    {
        /**seria el producto 0 */
        name: "Celeron",
        modelo: "J175",
        precio: 5000,
        thumbnail:"https://www.venex.com.ar/products_images/1619036418_concepto-4219213.jpeg"
    },
    {
        /**seria el producto 1 */
        name:"Pentium",
        modelo:"X4",
        precio:10000,
        thumbnail:"https://www.venex.com.ar/products_images/1619036418_concepto-4219213.jpeg"
    },
    {
        name:"I5",
        modelo:"10000Gen",
        precio: 50000,
        thumbnail:"https://www.venex.com.ar/products_images/1619036418_concepto-4219213.jpeg"
    },
]

const contenedorDeProductosHTML = document.getElementById("contenedorDeProductos")

/**TEMPLETE STRING `` PARA MANTENER LA ESTRUCTURA DE HTML */
let plantilla =`<div class="carta">
                <h2>${productos[0].name}</h2>
                    <p>Modelo:${productos[0].modelo}</p>
                    <p>Precio:${productos[0].precio} </p>
                </div>`
let plantilla2 =`<div class="carta">
                <h2>${productos[1].name}</h2>
                    <p>Modelo:${productos[1].modelo}</p>
                    <p>Precio:${productos[1].precio} </p>
                </div>`
let plantilla3 =`<div class="carta">
                <h2>${productos[2].name}</h2>
                    <p>Modelo:${productos[2].modelo}</p>
                    <p>Precio:${productos[2].precio} </p>
                </div>`
/**RENDERIZAR */
// contenedorDeProductosHTML.innerHTML = plantilla
/**+= para que no se tome unicamente la ultima opción */
// contenedorDeProductosHTML.innerHTML += plantilla2
// contenedorDeProductosHTML.innerHTML += plantilla3

/**por cada producto de los productos quiero que hagas algo (ejercutar algo), no importa la cantidad de productos que tenga me va a mostrar el nombre, modelo y precio de cada uno y no seria necesario hacer un let por cada uno como el ejemplo anterior */

const crearPlantilla = (producto) =>{
    return `<div class="carta">
                <h2>${producto.name}</h2>
                <img src= "${producto.thumbnail}" class= "imgCard">
                    <p>Modelo:${producto.modelo}</p>
                    <p>Precio:${producto.precio} </p>
            </div>`
}

for(let producto of productos){
    contenedorDeProductosHTML.innerHTML += crearPlantilla(producto)
}
