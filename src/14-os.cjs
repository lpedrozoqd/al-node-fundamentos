const os = require('os');
//Muestra la arquitectura de mi laptop
console.log(os.arch());
//Muestra que SO estamos
console.log(os.platform());
//Muestra las CPUs
console.log(os.cpus());
//Muestra cuántos CPUs tenemos
console.log(os.cpus().length);
//Constantes del SO
console.log(os.constants);
//Memoria
const SIZE = 1024
function kb(bytes) {return bytes/SIZE; }
function mb(bytes) {return kb(bytes)/SIZE; }
function gb(bytes) {return mb(bytes)/SIZE; }
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());