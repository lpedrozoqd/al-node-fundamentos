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

//Si se requiere controlar el paso de ejecución 
//sabiendo cuando puede demorar cada uno
console.log("Iniciando...");
hola("Leonel",()=>{
    adios("Leonel",()=>{
        console.log("(async-2 / callback) Proceso asincrónico terminado!");
    });
});
