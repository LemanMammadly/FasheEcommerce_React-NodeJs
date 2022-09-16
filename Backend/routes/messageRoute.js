const express = require('express');
const router = express.Router();

const messageController=require('../controllers/messageController')


router.get('/',messageController.getAllMessagess)
router.post('/',messageController.addMessage);
router.get('/:id',messageController.getById);
router.delete('/:id',messageController.deleteMessage);



module.exports=router;
