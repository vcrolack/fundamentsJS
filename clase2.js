var nombre = 'Victor', apellido = 'Rolack';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length();

var nombreCompleto = nombre + ' ' + apellido;
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase}`;

var str = nombre.charAt(1) + nombre.charAt(2);
var str2 = nombre.substr(1, 2); //selecciona caracteres

var ultimaLetraNombre = nombre.substr(-1);