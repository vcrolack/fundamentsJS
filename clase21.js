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



var victor = new Persona('Victor', 'Rolack', 1.85);
var john = new Persona('John', 'Wick', 1.75);

victor.saludar();
john.saludar();