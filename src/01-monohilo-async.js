console.log("1era. instrucción");

//Sigue hasta el infinito pero esta se ejecuta de manera asíncrona
let i = 0;
setInterval(()=>{
    console.log("2da. instrucción: " + i);    
    i++;
},1000);

console.log("3ra. instrucción");

