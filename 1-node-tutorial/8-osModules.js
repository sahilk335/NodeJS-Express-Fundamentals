const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()/17280} days`);

//Get OS info on which this script will be running
const currentOS = {
    name : os.type,
    release : os.release(),
    totalMem : os.totalmem(),
    freemem : os.freemem(),
}

console.log(currentOS);