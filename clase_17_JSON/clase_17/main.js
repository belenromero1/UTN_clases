// const personajes ={
// team: "Star Wars Characters",
// "characters": [
// {
// 	name: "Leia Organa",
// 	height: "150",
// 	mass: "49",
// 	hair_color: "brown",
// 	skin_color: "light",
// 	eye_color: "brown",
// 	birth_year: "19BBY",
// 	species: [],
// 		"starships": [],
// }
// ]

// }

// console.log(personajes.team)
// //Si quiero acceder a la altura de un personaje en especifico, en este caso 0 seria el primer y unico personaje
// console.log(personajes.characters[0].height)


/**EJEMPLOS DE APIS */
// fetch("https://hp-api.herokuapp.com/api/characters")
// // para que me lo muestre en formaro json, ej: quiero que me devuelva todos los de gryffindor
// .then(response => response.json())
// .then(json => {
// 	for (let i = 0; i < json.length; i++){
// 		if (json[i].house =="Gryffindor")
// 		console.log(json[i].name + " es de Gryffindor!")
// 	}
// }
// 	);

// // PARA PEDIRLE INFORMACION ESPECIFICA ej:director la pelicula 2
// fetch("https://ghibliapi.herokuapp.com/films")
// .then(response => response.json())
// .then(json => console.log(json[3].director));

//Crear una función htmlPersonaje() que reciba tres parámetros: personaje, foto, casa y devuelva un HTML individual con esos datos concatenados.






// fetch("https://hp-api.herokuapp.com/api/characters")
// .then(response => response.json())
// .then(
// 	json => { 
// 		json.map (function(personaje){
// 			document.write(htmlPersonajes(personaje.name, personaje.image, personaje.house))
// 		})
// 	})

//OTRA FORMA DE OBTENER LA MISMA INFO
const main = document.querySelector('main')
fetch("https://hp-api.herokuapp.com/api/characters")
.then(response => response.json())
// lo que quiero que me devuelva 
.then(
personajes => {
    personajes.forEach(personaje => {
		let infoPersonaje = document.createElement('article')
// los parametros name, image y house lo saco de la api, asi es como los encuentro
    infoPersonaje.innerHTML = htmlPersonajes(personaje.name, personaje.image, personaje.house)
//Creo el hijo
main.appendChild(infoPersonaje);
	})
}
)


function htmlPersonajes(personaje, foto, casa){
	let html = `<h2 class ="nombre"> ${personaje}</h2>
    <h3>${casa}</h3>
	<div class = "imagen">
	<img src = "${foto}" alt = "foto ${personaje}"> </div>`;

	return html;
}










