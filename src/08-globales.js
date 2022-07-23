/**
 *  Imprimir console.log(global) sólo para propósitos educativos
 * 
 */  

//setInterval y clearInterval por ejemplos
//son funciones globales ej:
//Este caso por ejemplo se usa bastante
//para verificar si está caído un servicio o no
let i = 0;
let intervalor = setInterval(()=>{
    console.log("Hola");
    if (i === 3){
        clearInterval(intervalo);
    }
    i++;
},1000);

setImmediate(()=>{
    console.log("Hola desde setImmdiate");
});

//Esto contiene info de 'process'
//console.log(process);

//creación de una variable global:
//(en lo posible aconsejan no usarlas
//dado que comentan generan problemas)
globalThis.miVariable = 'elvalor';

console.log(miVariable); 







