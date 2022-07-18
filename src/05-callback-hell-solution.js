/**
 * Solución al Callback hell!
 */

 function hola(nombre, miCallback) {
    setTimeout(()=>{
        console.log("(async-1) Hola ! " + nombre);
        miCallback(nombre);
    },2000);
  
};


function hablar(callbackHablar) {
    setTimeout(()=>{
        console.log("bla bla bla bla ! ");
        callbackHablar();
    },1000);
}

function adios(nombre, miCallback) {
    setTimeout(()=>{
        console.log("(async-1.2) Adios ! " + nombre);
        miCallback();
    },1000);
    
}

//Encapsulamos la fn hablar aquí:
function conversacion(nombre,veces,callback) {
    //Nos apoyamos con recursividad
    if (veces >= 0){
        hablar(()=>{
            conversacion(nombre,--veces,callback);
        });
    }else{
        adios(nombre,callback);
    }
}

console.log("Iniciando...");
hola("Leonel",(nombre)=>{
   conversacion(nombre,3,()=>{
        console.log("Proceso terminado!");
   });
}); 