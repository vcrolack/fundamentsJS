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
    .then( personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .then(personaje => {
        console.log(`El personaje 5 es ${personaje.name}`)
        return obtenerPersonaje(6)
    })
    .then(personaje => {
        console.log(`El personaje 6 es ${personaje.name}`)
        return obtenerPersonaje(7)
    })
    .then(personaje => {
        console.log(`El personaje 7 es ${personaje.name}`)
    })
    .catch(onError)


obtenerPersonaje(1, function (personaje) {
    console.log(`Hola. Yo soy ${personaje.name}`) 
})

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