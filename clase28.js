const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTS = {crossDomain: true}

const ON_PEOPLE_RESPONSE = function (persona) {
    console.log(`Hola. Yo soy ${persona.name}`)
}

function obtenerPersonaje (id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, OPTS, ON_PEOPLE_RESPONSE)
}

obtenerPersonaje(1)
/*El callback es una funcion que se ejecutara en un futuro del cual no sabemos, por medio de la funcion get, cuando se termine el request. Puede o no llamarse */
