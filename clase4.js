var nombre = 'Victor';
var edad = 28;

//sin parametros
function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} anos`);
}

imprimirEdad();

//con parametros
function imprimirEdad2(nombre, edad) {
    console.log(`${nombre} tiene ${edad} anos`);
}

imprimirEdad2('John', '25');