var victor = {
    nombre: 'Victor',
    apellido: 'Rolack',
    edad: 21
};

var Claudia = {
    nombre: 'Claudia',
    apellido: 'Rolack',
    edad: 29
}


function imprimirNombreMayus(persona) {
    //var nombre = persona.nombre es lo mismo
    var {nombre} = persona;
       console.log(persona.nombre.toUpperCase());
}

/*function imprimirNombreMayus({ nombre }) {
    console.log(nombre.toUpperCase());
}*/

imprimirNombreMayus(victor);
imprimirNombreMayus(Claudia);

//reto

function imprimirNombreEdad(persona) {
    console.log(`Hola. soy ${persona.nombre} y tengo ${persona.edad} anos`)
}

imprimirNombreEdad(victor);
imprimirNombreEdad(Claudia);