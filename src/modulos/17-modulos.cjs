function saludar() {
    console.log("Hola mundo!");
}

//Opción 1
//module.exports = saludar;

//Opción 2:
module.exports = {
    saludar,
    prop1: 'Hola qué tal!'
};
