const http = require("http");
const port = 5000;

const server = http.createServer((req,res) =>{
    res.writeHead(200 , {

        'Content-Type' : 'application/json'
    });
    res.end(JSON.stringify({
        name : "dhruwang",
        role : "fullstack developer",
        age : "20"
    }));
});

server.listen(port , () =>{
    console.log(`listening on ${port} ...`)
});