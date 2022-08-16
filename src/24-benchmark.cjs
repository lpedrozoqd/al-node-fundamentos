let suma = 0;
console.time('bucle-1');
for (let index = 0; index < 1000000; index++) {
    suma += 1;
}
console.timeEnd('bucle-1');

console.time('bucle-2');
console.time('async-2');
console.log("Empieza el proceso async-2");
asincrona()
    .then(console.timeEnd('async-2'));

for (let index = 0; index < 10000000; index++) {
    suma += 1;
}
console.timeEnd('bucle-2');

function asincrona() {
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log("Termina el proceso asíncrono");
            resolve();
        },1000);
    });
}