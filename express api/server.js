
const friendsRouter = require('./routers/friends.routers');
const messageRouter = require('./routers/messages.routers')

const express = require('express');
const { route } = require('./routers/friends.routers');
const app = express();
const PORT = 3000;

// middelware
app.use((req ,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method}${req.baseUrl}${req.url} ${delta} ms`);
})
app.use(express.json());

app.use('/friends' , friendsRouter)
app.use('/messages' , messageRouter)


app.listen(PORT , ()=>{
    console.log(`listening on port : ${PORT}...`);
})