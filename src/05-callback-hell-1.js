/**
 * Callback hell!
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

//Si se requiere controlar el paso de ejecución 
//sabiendo cuando puede demorar cada uno
console.log("Iniciando...");
hola("Leonel",(nombre)=>{
    hablar(()=>{
        hablar(()=>{
                hablar(()=>{
                    adios(nombre,()=>{
                        console.log("(async-2 / callback) Proceso asincrónico terminado!");
                    });
                });
        });
    });
});
