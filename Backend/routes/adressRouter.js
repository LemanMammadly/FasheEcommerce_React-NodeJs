const express = require('express');
const router = express.Router();
const adressController=require('../controllers/addressController')


router.get('/',adressController.getAlladress);
router.get('/:id',adressController.getById);
router.put('/:id',adressController.updateAdress);

module.exports=router;