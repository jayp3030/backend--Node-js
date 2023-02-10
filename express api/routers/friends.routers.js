const express = require('express');

const friendController = require('../controllers/friends.controllers');

const friendsRouter = express.Router();

// we can make middleware using friendsRouter
friendsRouter.use((req,res,next)=>{
    console.log(`ip address ${req.ip}`);
    next();
})

// give all friends info
friendsRouter.get('/' , friendController.getFriends );
// for individual friend info using id
friendsRouter.get('/:friendId' , friendController.getFriend)
// to add new friend to friends
friendsRouter.post('/' , friendController.addFriend)

module.exports = friendsRouter;