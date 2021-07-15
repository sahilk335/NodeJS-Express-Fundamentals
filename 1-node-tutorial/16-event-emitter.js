const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.emit('response'); // there is nothing in console

customEmitter.on('response', (name, id) => {
    console.log(`data recevied 1 ${name} : ${id}`);
});

customEmitter.on('response', () => {
    console.log(`data recevied 2`);
});
customEmitter.emit('response');   // recieved 1,2
customEmitter.on('response', () => {
    console.log(`data recevied 3`);
});

customEmitter.emit('response', "Sahil", 1);  //recieved 1,2,3

