const path = require('path');

function getMessages(req ,res){
    
    res.sendFile(path.join(__dirname ,'..','public','skimountain.jpg'));
    // res.send('<h1> hi how are you </h1>')
}

function postMessages(req , res){
    console.log('updating massages...')
}

module.exports = {
    getMessages,
    postMessages
};