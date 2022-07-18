console.log("Hola mundo!");

//Sigue hasta el infinito pero con un error y esto hay que saber controlarlo
let i = 0;
setInterval(()=>{
    console.log(i);    
    i++;
    if (i===5){
        console.log("forzamos error");
        let a = 3 + z;
    }
},1000);