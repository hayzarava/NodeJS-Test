//console.log("Hello World");

var http = require("http");
var hitungan = require("./belajar");

const server = http.createServer();

server.on("request", (req, res) => { 
    let hasil = hitungan.kali(30, 25);
    console.log("Request masuk");
    res.writeHead(200, {"Content-type": "html"});
    res.write(hasil.toString());
    res.end();
});

server.on("error", err =>{
    console.log(err.message)
});

server.on("listening", () =>{
    console.log("Server ON");
});
server.listen(9001);