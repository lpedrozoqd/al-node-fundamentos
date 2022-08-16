//Es necesario repasar/practiar bien los conceptoos de esta clase.
const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';
let readableStream = fs.createReadStream(__dirname + '/23-stream-file-sample.txt');
readableStream.setEncoding('UTF-8');
readableStream.on('data',function(chunk){
    //console.log(chunk);
    //console.log(chunk.toString());
    data += chunk;
});

readableStream.on('end',function() {
    console.log(data);
});

/*
process.stdout.write('======');
process.stdout.write('Fin de archivo');
*/

//
const transform = stream.Transform;

function mayuscula(params) {
    transform.call(this);
}

util.inherits(mayuscula, transform);

mayuscula.prototype._transform = function(chunk, codif, cb){
    chunkMayuscula = chunk.toString().toUpperCase();
    this.push(chunkMayuscula);
    cb();
}

let mayuscula = new chunkMayuscula();
readableStream
    .pipe(mayus)
    .pipe(process.stdout);

