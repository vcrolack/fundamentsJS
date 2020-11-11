var victor = {
    nombre: 'Victor',
    apellido: 'Rolack',
    edad: 21,
    peso: 75
};

console.log(`Al inicio del ano ${victor.nombre} pesa ${victor.peso}kg`);

const INCREMENTO_PESO= 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;





for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random();

    if (random < 0.25) {
        //aumenta de peso
        aumentarDePeso(victor);

    } else if (random < 0.5) {
        //adelgaza
        adelgazar(victor);
    }
}






console.log(`Al final del ano ${victor.nombre} pesa ${victor.peso.toFixed(2)}kg`);
