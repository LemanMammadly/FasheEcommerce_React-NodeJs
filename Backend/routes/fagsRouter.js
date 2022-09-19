const express = require('express');
const router = express.Router();
const fagController=require('../controllers/fagController')



router.get('/',fagController.getAllFags);
router.post('/',fagController.addFags);
router.get('/:id',fagController.getById);
router.put('/:id',fagController.updateFags);
router.delete('/:id',fagController.deleteFag);


module.exports=router;
