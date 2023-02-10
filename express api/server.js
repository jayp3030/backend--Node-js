const express = require('express');
const app = express();
const PORT = 3000;

app.get('/' , (req ,res)=>{
    res.send({
        id : 1,
        name : "dhiraj" ,
        role : "wordpress developer"
    })
});

app.get('/messages' , (req ,res)=>{
    res.send('<h1> hi how are you </h1>')
});

app.post('/messages' , (req , res)=>{
    console.log('updating massages...')
})


app.listen(PORT , ()=>{
    console.log(`listening on port : ${PORT}...`);
})