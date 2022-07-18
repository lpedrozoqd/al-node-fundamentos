/**
 * Para que funcione esta opción en windows,
 * la variable-de entorno debe 
 * declararse en cli en PS así -en dos ejecuciones por ej-:
 * $env:NOMBRE="Leonel"
 * node 02-vars-entorno.js
 */
let saludo = process.env.NOMBRE;
console.log("Hola " + saludo); 




