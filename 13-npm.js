// npm --version

// local dependecy - use it only in this particular project
//npm i <packageName>

// Global dependecy - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>

//package.json -> manifest file (stores important info about project/package)'
// manual project (create package.json in the root, create properties etc)
// npm init (step by step,press enter to skip)
// npm init -y (everything default)



const _ = require('lodash');
const { version } = require('os');

const items = [1., [2, [3, [4]]]];


const newItems = _.flattenDeep(items);

console.log(newItems);

console.log("hello world");