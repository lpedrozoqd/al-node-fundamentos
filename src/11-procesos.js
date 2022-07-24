const {exec, spawn} = require('child_process');
//Equivalente a:
//const exec = require('child_process').exec;

/*
exec('dir', (err,stdout,sterr) =>{
    if (err){
        console.error(err)
        return false;
    }
    console.log(stdout);
});
*/


let proceso = spawn('cmd.exe',['/c','dir']);  
console.log('>>>>proceso:',proceso.pid); 
proceso.stdout.on('data', function(dato){
    console.log(dato.toString());
});



