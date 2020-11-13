var victor = {
    nombre: 'Victor',
    apellido: 'Rolack',
    edad: 21,
    peso: 75
};

console.log(`Al inicio del ano ${victor.nombre} pesa ${victor.peso}kg`);

const INCREMENTO_PESO= 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizDeporte = () => Math.random() < 0.4;

const META = victor.peso - 3;
var dias = 0;

while (victor.peso > META) {
    //debugger
    if (comeMucho()) {
        aumentarDePeso(victor);
    }
    if (realizDeporte) {
        adelgazar(victor);
    }
    dias += 1;
}

console.log(`pasaron ${dias} dias hasta que ${victor.nombre} adelgazo 3kg`);