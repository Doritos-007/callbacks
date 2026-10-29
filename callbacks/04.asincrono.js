//setTimeOut()

function notificarDescarga(nombreArchivo)
{
    console.log('notificación: El archivo ' + nombreArchivo + "se ha descargado correctamente");
}

function descargarArchivo(archivo, callBackAlTerminar)
{
    console.log("01, iniciando descarga de: " + archivo + "...");

    //simulamos una demora de 3 segundos (3000 milisegundos)
    setTimeout(function(){
        callBackAlTerminar(archivo);
    }, 3000);
}

descargarArchivo('manual_callbacks.pdf', notificarDescarga);
console.log("03.El usuario puede seguir navegando mientras se descarga el archivo...");