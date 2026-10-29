//Definir la funcion q servira como CallBack
function despedirse(){
    console.log('Adios, hemos terminado la clase');
}

//Declaramos la funcion principal que recibe una funciom como parametro
function iniciarProceso(micallback){
    console.log('iniciamos el proceso principal...');
    //Invocamos la funcion que recibimos como argumento
    micallback();
}

//Llamamos a la funcion principal pasando 'despedirse' SIN parentesis
iniciarProceso(despedirse);
