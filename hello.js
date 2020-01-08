//console.log("Hello World");

var http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    console.log("Request masuk");
    res.writeHead(200, {"Content-type": "json"});
    res.write('{ nama : "gusty" }');
    res.end();
});

server.on("error", err =>{
    console.log(err.message)
});

server.on("listening", () =>{
    console.log("Server ON");
});
server.listen(9001);