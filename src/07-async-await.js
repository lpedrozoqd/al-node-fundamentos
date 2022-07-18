async function hola(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("(async-1) Hola ! " + nombre);
            resolve(nombre);
        },1500);
    });
}


async function hablar(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("bla bla bla bla ! ");
            resolve(nombre);
        },10);
    });
}

async function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("(async-1.2) Adios ! " + nombre);
            resolve(nombre);
        },5);
    });
}



async function main() {
    await hola("Leonel");
    await hablar();
    await hablar();
    await hablar();
    await adios("Leonel");
    console.log(">>>Finalizando el proceso...");
}


console.log(">>>Iniciando el proceso...");
main();


   