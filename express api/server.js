const express = require('express');
const app = express();
const PORT = 3000;

const friends = [
    {
        id : 0,
        name : "dhiraj" ,
        role : "wordpress developer"
    },
    {
        id : 1,
        name : "yash" ,
        role : "AI/ML engineer"
    },
    {
        id : 2,
        name : "varun" ,
        role : "Data Scientist"
    }
];

app.use((req ,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta} ms`);
})

// give all friends info
app.get('/friends' , (req ,res)=>{
    res.json(friends);
});

// for individual friend info using id
app.get('/friends/:friendId' , (req , res) =>{

    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

    if (friend) {
        res.status(200).json(friend);
    }
    else{
        res.status(404).json({
            error : "friend not exist"
        })
    }
})

app.get('/messages' , (req ,res)=>{
    res.send('<h1> hi how are you </h1>')
});

app.post('/messages' , (req , res)=>{
    console.log('updating massages...')
})


app.listen(PORT , ()=>{
    console.log(`listening on port : ${PORT}...`);
})