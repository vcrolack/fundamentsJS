const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = {crossDomain: true}


function obtenerPersonaje (id, callback) {
    return new Promise( (resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, OPTS, function (data) {
                resolve(data)
            })
            .fail ( () => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el pesonaje ${id}`)
}

obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`El personaje es ${persobaje.name}`)
    })
    .catch(onError)

/*for (var i = 1; i < 83; i++){
    obtenerPersonaje(i)
    //No necesariamente se imprimira en orden de los personajes ya quede depende del servidor y cuanto dura cada requeste, por lo que puede aparecer luke al principio como al final.
}*/

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola. Yo soy ${personaje.name}`) 
})
//obtenerPersonaje(2)



/*obtenerPersonaje(2, function (personaje) {
    console.log(`Hola. Yo soy ${personaje.name}`)

    obtenerPersonaje(3, function(personaje) {
        console.log(`Hola. Yo soy ${personaje.name}`)

        obtenerPersonaje(4, function(personaje) {
            console.log(`Hola. Yo soy ${personaje.name}`)

            obtenerPersonaje(5, function (personaje) {
                console.log(`Hola. Yo soy ${personaje.name}`)

                obtenerPersonaje(6, function(personaje) {
                    console.log(`Hola. Yo soy ${personaje.name}`)

                    obtenerPersonaje(7,function (personaje) {
                        console.log(`Hola. Yo soy ${personaje.name}`)
                    })
                })
            })
        })
    })
}) */