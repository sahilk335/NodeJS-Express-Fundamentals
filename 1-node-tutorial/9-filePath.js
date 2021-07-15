const path = require('path')

console.log(path.sep);

const filePath = path.join('/content/','subfolder','test2.txt');
console.log(filePath);


const basePath = path.basename(filePath);
console.log(basePath);

const absolutePath = path.resolve(__dirname,'content','subfolder','test2.txt');
console.log(absolutePath);

