const http = require('http')

const server = http.createServer((req, res) => {
    switch(req.url) {
        case "/":   
            res.write("Hello from our little page")
            break
        case "/about":
            res.end("Here is our some background history")
            break
        default:
            console.log(req)
            res.end(`
                <h1>Oops! </h1>
                <p>Sorry. We couldn't find out the page you're looking for.</p>
                <a href="/">Back</a>
            `)
            break
    }
})

server.listen(5000)