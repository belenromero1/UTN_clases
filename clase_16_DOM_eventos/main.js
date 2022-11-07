/**Clase 16 : Eventos */

//Buscamos que pase algo cuando se precione el boton 

//1.Seleccionar elementos del DOM
let miBoton = document.getElementById("boton");
console.log(miBoton);

//2.Determinar el evento a escuchar sobre el elemento
miBoton.addEventListener("click", respuestaClick)

//3.Respuesta al evento

function respuestaClick(){
    console.log("Respuesta a evento")
}

miBoton.addEventListener("click" , respuestaClick2)
function respuestaClick2() {
console.log("Hola desde manejador onclick")
}

// 2da forma de usar eventos 
//emplear la propiedad ON 
miBoton.onclick = () => {
    console.log("hola desde manejador onclick")
}


//3era opcion para usar eventos 
// el onclick se llama en el html

//DECLARACION DE CLASE PRODUCTO 
class Producto{
    constructor(id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}
//INSTANCIAR OBEJETOS Y ASOCIAR ARRAYS
const productos = []
productos.push(new Producto (1, "dona", 80))
productos.push(new Producto (2, "pan", 450))
productos.push(new Producto (3, "torta", 560))
productos.push(new Producto (4, "leche", 760))

//RECORRO EL ARRAY  PARA CREAR UN NODO POR VALOR EN EL ARRAY 
for(const producto of productos){
    let divProducto = document.createElement("div");
    divProducto.innerHTML = 
    `<h3> Nombre: ${producto.nombre}</h3>
    <h4>Precio: ${producto.precio}</h4>
    <button id = "${producto.id}" class = "btnCompra" > Comprar </button>`

    document.body.appendChild(divProducto);//para agreagar un nuevo hijo al body en html
}

//Seleccionar botones generados por clases 

let botones = document.getElementsByClassName ("btnCompra");
console.log(botones)

// recorrer botones y mostrar por consola cual es el producto que el usuario selecciono
for(const boton of botones){
    boton.addEventListener("click" , function(){
        let seleccion = productos.find (producto => producto.id == this.id)
        console.log("El producto seleccionado es "+ seleccion.nombre)
    }
    )
}

//Obtener el formulario 
let miFormulario = document.getElementById("registroProducto")

miFormulario.onsubmit = (e) =>{
    e.preventDefault()// lo usamos para que lo que le estamos pidiendo lo haga sin resetearse y mandar la info en 1 seg al backend( e = event)
    console.log(this)// si usamos THIS obtenemos el contecto global del objeto --> windows por ende no puedo acceder a los elementos especificos del formulario 
    console.log(e.target)// me permite obtener el objeto que esta asociado al evento en este caso nos devuelven el formulario, corregimos el problema del alcance que ocurria con this
    console.log(e.target.id)// dentro del formulario accedo al evento id(equivalente a this.id ) que en este caso es regitroProducto

//OBTENER LOS HIJOS DEL FORMULARIO
    const inputs = miFormulario.children

    //INSTRANCIAMOS LOS INPUTS Y VALUES DE CADA UNO, PARA AGRAGARLOS AL FORMULARIO  
    productos.push(new Producto(0, inputs[0].value,inputs[1].value ))
    console.log(productos)
}









