const sharp = require('sharp');
sharp('js.png')
    .resize(80)
    .toFile('js80Porc.png');


sharp('js.png')
    .resize(80)
    .grayscale()
    .toFile('js80PorcGS.png');

