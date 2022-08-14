//Tener en cuenta que podría invocar a 'process directamente.
const p = require('process');

p.on('beforeExit',()=>{
    console.log("El proceso va a terminar!");
});


p.on('exit',()=>{
    console.log("El proceso acabó!");
});

//Con esto se permite gestionarlo y avanzar en el proceso
p.on('uncaughtException',(error, origen)=>{
    console.error(`Se nos olvidó capturar la excepción. Error**: ${error}, Origen**: ${origen}`);
    
});

//Este es para poder probar 'uncaughtException'
funcionQueNoExiste();






