var contador = 0;
var llueve = () => Math.random() < 0.25;

do {
    contador++
} while (!llueve());

console.log(`Fui a ver si llovia ${contador} veces`);