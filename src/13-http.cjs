const http = require('http');

//===>Opción 1 de implementación:
/*
http.createServer(function(request, response){
    console.log("Nueva petición!");
    console.log(request.url);
    response.writeHead(201,{'Content-Type':'text/plain'});
    response.write("Hola! ya se usar http nodejs");
    response.end();
}).listen(8889);
console.log("Escuchando en el puerto 8889");
*/

//===>Opción 2 de implementación:
http.createServer(router).listen(8889);
function router (request, response){
    console.log("Nueva petición!");
    console.log(request.url);
    switch (request.url) {
        case '/hola':
            response.writeHead(201,{'Content-Type':'text/plain;charset=utf-8'});
            response.write("Hola!, qué tal!");
            response.end();
            break;
        default:
            response.writeHead(404,{'Content-Type':'text/plain'});
            response.write("Error 404: no se que lo es que quieres!");
            response.end();
    }
}