var nombre = 'Victor'; //variable global.

function imprimirNombreMayus() {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreMayus();

function imprimirNombreMayus2(n) {
    n = n.toUpperCase();
    console.log(n);
}

imprimirNombreMayus2(nombre);