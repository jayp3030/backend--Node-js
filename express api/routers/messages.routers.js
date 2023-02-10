const express = require('express');

const messageController = require('../controllers/messages.controllers');

const messageRouter = express.Router();

// for get message
messageRouter.get('/' , messageController.getMessages);
messageRouter.post('/' , messageController.postMessages )

module.exports = messageRouter;