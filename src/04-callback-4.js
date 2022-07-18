/**
 * Enviando variables en el callback
 */

function hola(nombre, miCallback) {
    setTimeout(()=>{
        console.log("(async-1) Hola ! " + nombre);
        miCallback(nombre);
    },2000);
  
};


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
    adios(nombre,()=>{
        console.log("(async-2 / callback) Proceso asincrónico terminado!");
    });
});
