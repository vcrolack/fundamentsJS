function Persona(nombre, apellido, estatura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.estatura = estatura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola. Me llamo ${this.nombre} ${this.apellido}`);
} 

Persona.prototype.eresONoAlto = function() {
    if (this.estatura > 1.8) {
        console.log(`Felicidades, ${this.nombre}, eres alto`);
    } else {
        console.log(`Mala suerte, ${this.nombre}, eres bajo`);
    }
} 

/* Persona.prototype.saludar = () => {
    console.log(`Hola. Me llamo ${this.nombre} ${this.apellido}`);
} */
/* 
Persona.prototype.soyAlto = () => {
    //this en el espacio global es window
    return this.altura > 1.8

    No usar arrows functions para estos metodos
} */



var victor = new Persona('Victor', 'Rolack', 1.85);
var john = new Persona('John', 'Wick', 1.75);

