function heredaDe(prototipoHijo, prototipoPadre) {
	var foo = function(){}
	foo.prototype = prototipoPadre.prototype
	prototipoHijo.prototype = new foo
	prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura, genero){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
	this.genero = genero
}

Persona.prototype.saludar = function(){
	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAltX = function(){
	var altX = this.genero == 'masculino' ? 'alto' : 'alta'
	var string = this.altura >= 1.8 ? `Soy ${this.nombre} ${this.apellido} y definitivamente soy ${altX}.` 
									: `Soy ${this.nombre} ${this.apellido} y no, no soy ${altX}.`
	console.log(string)
}

function Desarrollador(nombre, apellido){
	this.nombre = nombre
	this.apellido = apellido
}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollader.`)
}
