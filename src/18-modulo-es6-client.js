import modulo from './modulos/18-modulos-es6.mjs'

//Opción 1: en el archivo de módulos se exportaba sólo: export default saludar;
//modulo()

//Opción 2: en el archivo de módulos se exportaba con un json
console.log(modulo.props1);
modulo.saludar();
