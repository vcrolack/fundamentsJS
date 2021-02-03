const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTS = {crossDomain: true}
$.get(LUKE_URL, OPTS, function (luke) {
    console.log(`Hola, yo soy ${luke.name}`)
})


/*El callback es una funcion que se ejecutara en un futuro del cual no sabemos, por medio de la funcion get, cuando se termine el request. Puede o no llamarse */
