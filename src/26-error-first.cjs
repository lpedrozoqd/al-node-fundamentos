function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z; 
            callback(null,a);
        } catch (error) {
            callback(error);            
        }
    },1000);
}

//****Opción 1:
// asincrona(function(err,dato){
//     if (err){
//         console.error("Tenemos un error: ");
//         console.error(err);
//         return false;
//     }
//     console.log("Todoe está Ok!");
// });

//****Opción 2:
try {
    asincrona(function(err,dato){
        if (err){
            console.error("Tenemos un error(opción 2): ");
            console.error(err);
            throw err;
        }
        console.log("Todoe está Ok! (opción 2)");
    });
        
} catch (e) {
    console.error("Hemos captura el error (opción 2)");
    console.error(e);
}





