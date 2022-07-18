/**
 * Con nodemon me facilita la forma en
 * que los programas tome los cambios y rei
 * inmediatamente en ejecución por ejemplo.
 * Es básicamente útil para desarrollo.
 * 
 * 
 * Para que funcione esta opción en windows,
 * la variable de entorno debe 
 * declararse en cli en PS así -en dos ejecuciones por ej-:
 * $env:NOMBRE="Leonel"
 * node 02-vars-entorno.js
 */
 let saludo = process.env.NOMBRE;
 console.log("Hola " + saludo); 

console.log("1era: instrucción");

//Sigue hasta el infinito pero esta se ejecuta de manera asíncrona
let i = 0;
setInterval(()=>{
    console.log("2da: instrucción: " + i);    
    i++;
},1000);

console.log("3ra: instrucción");
 
 
 
 
 