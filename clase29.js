const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = {crossDomain: true}

const onPeopleResponse = function (persona) {
    console.log(`Hola. Yo soy ${persona.name}`)
}

function obtenerPersonaje (id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, OPTS, onPeopleResponse)
}

for (var i = 1; i < 83; i++){
    obtenerPersonaje(i)
    //No necesariamente se imprimira en orden de los personajes ya quede depende del servidor y cuanto dura cada requeste, por lo que puede aparecer luke al principio como al final.
}