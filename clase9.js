var x = 4, y = '4';

x == y //true, a pesar de que el tipo de dato es distinto

x === y //false porque son de distinto tipo de dato. Recomendado para usar siempre

var victor = {
    nombre: 'Victor'
}

var otraPersona = {
    nombre = 'Victor'
}

victor == otraPersona // false. Cuando comparamos objetos es preguntar por la referencia a la variable
//que usamos

var otraPersona = victor; //true. Ahi apunta a la misma direccion de memoria.

var otraPersona = {
    ...victor
}

var otraPersona == Victor //false porque es otro objeto en memoria ram.