
console.error("LOG ERROR");
console.warn("LOG WARN");

let tabla = [
    {a:1, b:'Z'},
    {a:2, b:'Otra'},
];

console.table(tabla);

console.group("Conver 1");
console.log('Hola');
console.log('blabalblablabla');
console.log('Adios');
console.groupEnd("Conver 1");
console.log('');
console.group("Conver 2");
console.log('Hola');
console.group("Detalle");
console.log('blabalblablabla');
console.log('blabaertertela');
console.groupEnd("Detalle");
console.log('Adios');
console.groupEnd("Conver 2");


console.log("Finish!");