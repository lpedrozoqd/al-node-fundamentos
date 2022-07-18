function fncAsync(miCallback) {
    setTimeout(()=>{
        console.log("...asincronía!!");
        miCallback();
    },2000);
  
};

console.log("Iniciando...");
fncAsync(()=>{
    console.log("..proceso asincrónico terminado!");
});
