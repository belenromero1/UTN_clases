/**fetch("https://swapi.dev/api/vehicles/"
)
.then(response => response.json())
.then(json => console.log(json))*/

const urlSwapi = "https://swapi.dev/api/vehicles/"
// USAR IMAGENES DE OTRA API EJ:HARRY POTTER
const urlHPAPI = "https://hp-api.herokuapp.com/api/characters"
// array vacio para guardar las respuestas que pedi por consola
const vehiculos= []
const contenedorHTML =document.getElementById("contenedor")
//creamos un array para las imagenes que se van a pusheear
const imagenes = []



const crearPlantilla = (vehiculo) =>{
    return `<div class="carta">
                <h2>${vehiculo.name}</h2>
                <p>Modelo: ${vehiculo.modelo}</p>
                <p>Precio Republica: ${vehiculo.cost_in_credits}</p>
                <img src =${vehiculo.image}>
            </div>` 
}



const renderizarVehiculos = (listaVehiculos) =>{
    if(listaVehiculos.length !== 0){
        contenedorHTML.innerHTML = ""
        for( let vehiculo of listaVehiculos ){
            contenedorHTML.innerHTML += crearPlantilla(vehiculo)
        }
    }else{
        contenedorHTML.innerHTML = `<h1>No existen productos con esas especificaciones</h1>`
    }
}


fetch(urlHPAPI)
        .then(respuesta => respuesta.json())
        //HAGO UN BUCLE .LENGTH POR QUE NO QUIERO QUE SE EJECUTE POR DEMAS DE LOS VEHICULOS QUE TENGO
        .then(data =>{
            console.log(data[1].image)
            for(let i=0; i < vehiculos.length; i++){
                //por que se pushee cada imagen
                imagenes.push(data[i].image)
            }
            //hasta que i sean menor a vehiculos.length quiero que se vaya metiendo una imagen, si busco en la consola vehiculos deberia salirme un atribulo por cada elemento llamado image
            for(let i=0; i< vehiculos.length; ++i)
            vehiculos[0].image = imagenes[i]
            //despues de todo renderizar va a hacer que se ejecute
            renderizarVehiculos(vehiculos)
        })

fetch(urlSwapi)
//Una vez que se resuelva fetch then = entonces va a suceder tal cosa
            .then(respuesta => respuesta.json())
            //DE NUESTRO ARRAY DE RESULTADOS, QUEREMOS QUE LO RECORRA Y POR CADA VEHICULO QUE APARECE EN NUESTRO ARRAY QUE LO PUSHEE A MI ARRAY VACIO
            .then(respuestaJson => {
                respuestaJson.results.forEach((vehiculo) => vehiculos.push(vehiculo))

            })

