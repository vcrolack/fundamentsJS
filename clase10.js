var victor = {
    nombre: "Victor",
    apellido: "Rolack",
    edad: 21,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    fotografo: true
};

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `);
    
    if (persona.ingeniero) {
        console.log('Ingeniero');
    }

    if (persona.cocinero) {
        console.log('Cocinero');
    }

    if (persona.cantante) {
        console.log('Cantante');
    }
    if (persona.dj) {
        console.log('DJ');
    }

    if (persona.fotografo) {
        console.log('Fotografo')
    }

}

imprimirProfesiones(victor);


function imprimirMayor();