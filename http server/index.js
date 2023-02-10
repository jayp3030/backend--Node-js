const http = require("http");
const port = 5000;

const server = http.createServer();

const friends = [
    {
        id : 0,
        name : "dhruwang",
        role : "fullstack developer",
        age : "20"
    },
    {
        id: 1,
        name : "jay",
        role : "blockchain developer",
        age : "20"
    },
    {
        id: 2,
        name : "jaydip",
        role : " app developer",
        age : "20"
    }
];

server.on('request' , (req,res) =>{

    const items = req.url.split('/');                               // ex.- /friends/2 => [' ' , friends , 2]

    if(req.method === 'POST' && items[1] === 'friends'){

        req.on('data' , (data) => {
            const friend = data.toString();
            console.log('request :' + friend);                      // output : request :{"id":3,"name":"sanket","role":"react dev","age":22}
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    }
    else if(req.method === 'GET' && items[1] === 'friends'){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'application/json')

        if(items.length === 3){
            const itemIndex = Number(items[2]);
            res.end(JSON.stringify(friends[itemIndex]));
        }
        else{
            res.end(JSON.stringify(friends)); 
        }

    }
    else if(req.method === 'GET' && items[1] === 'message'){
        res.setHeader('Content-Type' , 'text/html');

        res.write('<html>')
        res.write('<body>')
        res.write('<h1>hi iam jay</h1>')
        res.write('</body>')
        res.write('</html>')

        res.end();
    }
    else{                                                           // if our url not match 
        res.statusCode = 404;
        res.end();
    }
    
})

server.listen(port , () =>{
    console.log(`listening on ${port} ...`)
});