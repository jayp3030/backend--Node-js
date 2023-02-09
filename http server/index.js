const http = require("http");
const port = 5000;

const server = http.createServer();

server.on('request' , (req,res) =>{

    if(req.url === '/friends'){
        res.statusCode = 200;
    res.setHeader('Content-Type' , 'application/json')

    res.end(JSON.stringify({
        name : "dhruwang",
        role : "fullstack developer",
        age : "20"
    }));
    }
    else if(req.url === '/message'){
        res.setHeader('Content-Type' , 'text/html');

        res.write('<html>')
        res.write('<body>')
        res.write('<h1>hi iam jay</h1>')
        res.write('</body>')
        res.write('</html>')

        res.end();
    }
    
})

server.listen(port , () =>{
    console.log(`listening on ${port} ...`)
});