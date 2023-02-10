const friends = require('../models/friends.models');

function addFriend (req , res){

    if (!req.body.name) {
        return res.status(400).json({
            error : "Missing Friend Name"
        })    
    }

    const newFriend = {
        id : friends.length,
        name : req.body.name,
        role : req.body.role
    }

    friends.push(newFriend);
    res.json(newFriend);
}

function getFriends(req ,res){
    res.json(friends);
}

function getFriend(req , res){

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
}

module.exports = {
    addFriend,
    getFriend,
    getFriends
}