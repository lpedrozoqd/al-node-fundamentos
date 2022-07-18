 function hola(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("(async-1) Hola ! " + nombre);
            resolve(nombre);
        },1500);
    });
}


function hablar(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("bla bla bla bla ! ");
            resolve(nombre);
        },1000);
    });
}

function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("(async-1.2) Adios ! " + nombre);
            resolve(nombre);
        },1000);
    });
}

console.log("Iniciando el proceso...");
hola("Leonel")
    .then(hablar) //aquí se invoca así dado que tiene los mismos parms. de "hola"
    .then(hablar) 
    .then(hablar) 
    .then(hablar) 
    .then(hablar) 
    .then(adios)  //aquí se invoca así dado que tiene los mismos parms. de "hola"
    .then(response => console.log(response))
    .catch(error=>{
        console.log("Ha ocurrido un error");
        console.log(error);
    });