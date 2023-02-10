const messageController = require('./controllers/messages.controllers');
const friendController = require('./controllers/friends.controllers');

const express = require('express');
const app = express();
const PORT = 3000;

// middelware
app.use((req ,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta} ms`);
})
app.use(express.json());

// give all friends info
app.get('/friends' , friendController.getFriends );
// for individual friend info using id
app.get('/friends/:friendId' , friendController.getFriend)
// to add new friend to friends
app.post('/friends' , friendController.addFriend)

// for get message
app.get('/messages' , messageController.getMessages);
app.post('/messages' , messageController.postMessages )


app.listen(PORT , ()=>{
    console.log(`listening on port : ${PORT}...`);
})