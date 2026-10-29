function duplicarNumero(numero)
{
    console.log('resultado duplicado: ' + (numero * 2))
}

function procesarLista(listaNumeros, accionCallBack)
{
    console.log('--- Inicio del procesamineto de la lista ---')
    for (var i = 0; i< listaNumeros.length; i++)
    {
        accionCallBack(listaNumeros[i]);
    }
    console.log("--- Fin del procesamiento de la lista ---");
}

var listaNumeros = [5, 10, 15, 20, 25, 30, 35, 40];
procesarLista(listaNumeros, duplicarNumero);
console.log("Siguiente instrucción del programa");