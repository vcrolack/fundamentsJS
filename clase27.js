console.log('a')
setTimeout( () => console.log('b'), 2000) //se ejecuta luego de ejecutar el programa principal
console.log('c')

setTimeout(() => console.log('d'), 2000)
for (var i = 0; i < 10000000000; i++)
{
    //algun dia se ejecutara el console log de d. Se demora debido a que el programa principal (el for) se sigue ejecutando a pesar de que el resultado del setTiemout esta lista.
    //Bloqueamos el eventloop
}