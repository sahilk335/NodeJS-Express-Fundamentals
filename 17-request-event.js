const http = require('http');

/* const server = http.createServer((req, res) => {
    console.log("hi");
    res.end("welcome");
});
 */

//Commenting above block because we are replacing above with EventEmitter API

//Using Event Emitter API

const server = http.createServer();


//Emits request event
//Subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end("Welcome to EventEmitters api");
});

server.listen(5000);