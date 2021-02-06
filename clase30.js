const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = {crossDomain: true}


function obtenerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    if (callback) {
        callback()
    }


    $.get(url, OPTS, function (persona) {
        console.log(`Hola. Yo soy ${persona.name}`)
    })
}

/*for (var i = 1; i < 83; i++){
    obtenerPersonaje(i)
    //No necesariamente se imprimira en orden de los personajes ya quede depende del servidor y cuanto dura cada requeste, por lo que puede aparecer luke al principio como al final.
}*/

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function() {
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})
//obtenerPersonaje(2)
