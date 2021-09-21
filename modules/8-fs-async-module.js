const fs = require('fs')

console.log("Starting task")

// read first.txt & second.txt, if there isn't any error in retrieving, write a new file with nested loop syntax

// read first.txt
fs.readFile("./content/first.txt", "utf-8", (err, result) => {
    if(err) console.log(err);
    
    // if there isn't any error in retrieving first.txt, put that values into var first  
    const first = result
    
    // then read second.txt 
    fs.readFile("./content/second.txt", "utf-8", (err, result) => {
        if(err) console.log(err);
        
        // if there isn't any error in retrieving second.txt, put that values into var second 
        const second = result

        // after that, write result-async.txt, filled with var first & var second 
        fs.writeFile(
            "./content/result-async.txt", 
            `${first}, ${second}`, 
            {flag: 'a'}, 
            (err, result) => {
                if(err) console.log(err);
                console.log("File created successfully");
            })
    })
})

console.log("Starting next task")