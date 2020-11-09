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
       console.log(persona.nombre.toUpperCase());
}

/*function imprimirNombreMayus({ nombre }) {
    console.log(nombre.toUpperCase());
}*/

imprimirNombreMayus(victor);
imprimirNombreMayus(Claudia);
