// A very basic HTTP request handler example
const { createServer } = require('http')
const process = require('process')
const server = createServer((req, resp)=> {
    console.log("some Client Called from address: " + req.connection.remoteAddress);
    resp.end("Hello, from Shagun Bandi. My Server time is " + new Date().toString());
});

const port = process.env.PORT || 4000;
server.listen(port, ()=> {
    console.log(`Server Started at 10.150.220.59:${port}`)
})

console.log(port)