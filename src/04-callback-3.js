function hola(nombre, miCallback) {
    setTimeout(()=>{
        console.log("(async-1) Hola ! " + nombre);
        miCallback();
    },2000);
  
};


function adios(nombre, miCallback) {
    setTimeout(()=>{
        console.log("(async-1.2) Adios ! " + nombre);
        miCallback();
    },1000);
    
}

/**
 * Si no se cuánto se pueda demorar cada uno, pero aún 
 * así requiero ejecutarlo a cada uno
 * como podría ser secuencialmente: (y en este caso)
 * Se ejecutará primero 'adios' y luego 'hola', dado que hola
 * tiene más tiempo de demora para ejecutarse
 * (el parámetro callback en estos casos es opcional como dato curioso)
  */

console.log("Iniciando...");
hola("Leonel",()=>{});
adios("Leonel",()=>{});
