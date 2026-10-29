var miPromesa = new Promise(
    //Recibe un unico argumento;
    //funcion ejecutura(executor function)
    
    function(resolve, reject) {
//cuerpo de la funcion ejectura
var operacionExitosa = true;
if(operacionExitosa)
{
    //cambia el estado de 'pending' a 'fulfilled' y entrega el valor
    resolve("Los datos se procesaron correctamente");
}
else
{
    //cambia el estado de 'pending' a 'rejected' y entrega el motivo del fallo
    reject("ocurrio un error al procesar los datos");

    }
}
)

//then() se ejecuta cuando la promesa pase al estado fulfielled (cumplida)

//catch() se ejecuta cuando la promesa pase al estado rejected (rechazada)

mipromesa.then(function(mensajeRecibido){
    console.log("Resultado capturado en Then(): " + mensajeRecibido);
}).catch(function(motivoError){
    console.log("Error capturado en Catch(): " + motivoError);
});