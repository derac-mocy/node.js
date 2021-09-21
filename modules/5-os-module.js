// importing OS Module
const os = require('os')

// to show current user info
console.log(os.userInfo())

// to show PC's uptime in seconds
console.log(`This system uptime is ${os.uptime()} seconds`)

// to show OS info
const currentOS = {
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)