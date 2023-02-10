function getMessages(req ,res){
    res.send('<h1> hi how are you </h1>')
}

function postMessages(req , res){
    console.log('updating massages...')
}

module.exports = {
    getMessages,
    postMessages
};