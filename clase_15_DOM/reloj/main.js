/**Ejemplo de setInterval - creamos una funcion para que nos muestre la hora y que el cronometro se actualice por esa funcion */

function mostrarHora(){
    let reloj = document.getElementById("reloj");
    let hora = new Date();
    reloj.innerHTML = hora.toLocaleTimeString()
}
//para que la hora se actualice cada 1 segundo (1000)
let cronometro = setInterval(mostrarHora, 1000)








