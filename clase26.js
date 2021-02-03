//FUNCIONES COMO PARAMETRO
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var {nombre, apellido} = this
        /*var nombre = this.nombre
        var apellido = this.apellido*/
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollader.`)
        if (fn) {
            fn(nombre, apellido, true)
        }

    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia, ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah, sos desarrollador che`)
    }
}

var victor = new Desarrollador('Victor', 'Rolack', 1.85, true)
var jean = new Persona('Jean', 'Dimter', 1.70)
var tomas = new Persona('Tomas', 'Faundez', 1.65)

victor.saludar(responderSaludo)
jean.saludar(responderSaludo)
tomas.saludar(responderSaludo)