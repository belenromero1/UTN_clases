// //Manipulación del DOM

// console.log(document);
// //EL DIR ME DEVUELVE UNA INFO MAS DETALLADA DE TODOS LOS ELEMENTOS
// console.dir(document);
// //PARA UNA SECCIÓN ESPECIFICA
// console.log(document.head);
// console.dir(document.head);

//METODOS PARA OBTENER UN NODO DEL DOM A TRAVES DE ID
// let titulo = document.getElementById ("titulo");
// console.log(titulo)
// console.log(titulo.innerHTML); //vemos el html interno

// let nombre = "Cosme Fulanito";
// titulo.innerHTML = "Hola " + nombre; //modifico eL html interno con el innerhtml(MODIFICO EL TITULO)

// //OBTENER INFO A TRAVES DE UNA CLASE
// let parrafos = document.getElementsByClassName("parrafos")
// console.log(parrafos);

// //TAG todas las mismas etiquetas
// let parrafosTag = document.getElementsByTagName("p")
// console.log(parrafosTag)


// //..................Ejemplo de modificacion SELECT DINAMICO//

// const categorias = [];

// /**SOLICITAR UNA ENTRADA AL USUARIO */
// let entrada = prompt ("ingrese categoria \n(Escribir 'ESC' para salir)")

// //SI LA ENTRADA ES DISTINTA A ESC EN CADA REPETICION CARGAR UNA CATEGORIA (!= significa distinto)

// while(entrada.toUpperCase() != "ESC"){
//     categorias.push(entrada.toUpperCase());
//     entrada = prompt ("Ingresar categoria \n (Escribir 'ESC' para salir)")
// }
// console.log(categorias)

// //MODIFICAR EL SELECT DE MANERA DINAMICA PARA QUE NO APAREZCA SOLO EN LA CONSOLA

// /**Obtenemos el elementos */
// let miSelect = document.getElementById("select");

// console.log(miSelect)

// //RECORRER EL ARRAY CON FOR OFF
// for (const categoria of categorias){
// miSelect.innerHTML += "<option>" + categoria + "<\option";
// }

//CREAR UN NUEVO NODO

// let titulo1 = document.createElement("h2");//creo el nodo
// titulo1.innerHTML = "Hola desde js"; //defino su contenido

// document.body.appendChild(titulo1)

// Ejemplo de creacion dinamica de nodos

// class Producto{
//     constructor(id, nombre, precio) {
//         this.id = parseInt(id)
//         this.nombre = nombre
//         this.precio = parseFloat(precio);
//     }
// }
// const productos =[];
// productos.push(new Producto(1, "PAN", 110));
// productos.push(new Producto(2, "LECHE", 130));
// productos.push(new Producto(3, "TORTA", 650));
// productos.push(new Producto(4, "VERDURAS", 800));

//RECORRO EL ARRAY PARA CREAR UN NODO POR EL VALOR DE LE ARRAY

// for (const producto of productos){
//     let divProducto = document.createElement("div");

//     // las plantillas de texto son importantes para que se muestre lo que pido (``)
//     divProducto.innerHTML =
//     `<h3> Nombre: ${producto.nombre} </h3>;
//     <h4> Precio: ${producto.precio} </h4>;`

// document.body.appendChild(divProducto); //Agrego un nuevo hijo a body para que lo muestre en el html
// }

//PRACTICA CLASE 15//
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
    {
        name:"I6",
        modelo:"12000Gen",
        precio: 55000,
        thumbnail:"https://www.venex.com.ar/products_images/1619036418_concepto-4219213.jpeg"
    },
]
//LLAMO A ELEMENTOS DE HTML POR JS, MEDIANTE EL DOM (ONJETO DOCUMENT)
const contenedorDeProductosHTML = document.getElementById("contenedorDeProductos")

//para obtener los datos del formulario
const formulario = document.getElementById("formulario") // puedo buscar en la consola formulario.modelo.value (puedo hacerlo con cada uno de los items del formulario y me devuelve lo que ingreso el usuario)

// ESCUCHA UN EVENTO Y EJECUTA UNA ACCION, la e representa el evento para no perder datos cuando la pagina se recarga
formulario.addEventListener("submit", (e) =>{
    e.preventDefault//prevenir el comportamiento por defecto de formulario 
    console.log(formulario.name.value)
    const newProduct = {
        name: formulario.name.value,
        modelo:formulario.modelo.value,
        precio:parseFloat(formulario.precio.value),
        thumbnail:formulario.thumbnail.value,
    }
    //AGREGAR UN NUEVO PRODUCTO AL ARRAY
    productos.push(newProduct)
    renderizarCartas()
})

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
let plantilla4 =`<div class="carta">
                <h2>${productos[3].name}</h2>
                    <p>Modelo:${productos[3].modelo}</p>
                    <p>Precio:${productos[3].precio} </p>
                </div>`
/**RENDERIZAR */

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
const renderizarCartas = () =>{
    for(let producto of productos){
        contenedorDeProductosHTML.innerHTML += crearPlantilla(producto)
    }
}
// filtrar productos ej por precio
const productosFiltrados = productos.filter((producto) => producto.precio < 6000)
renderizarCartas()