const { readFileSync, writeFileSync } = require('fs')

console.log("Starting task")

// reading a file 
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

// writing a file
writeFileSync(
    "./content/result-sync.txt", 
    ` ${first}, ${second}`, 
    {flag: 'a'}
)
console.log("file created successfully")

console.log("Starting next task")