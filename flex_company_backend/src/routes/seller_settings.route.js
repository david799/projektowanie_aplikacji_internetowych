const express = require('express');
const router = express.Router();
const sellerSettingsController = require('../controllers/seller_settings.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware')


router.get('/', awaitHandlerFactory(sellerSettingsController.getAllSellerSettings)); 
router.get('/id/:id', awaitHandlerFactory(sellerSettingsController.getSellerSettingById)); 
router.post('/', awaitHandlerFactory(sellerSettingsController.createSellerSetting)); 
router.patch('/id/:id', awaitHandlerFactory(sellerSettingsController.updateSellerSetting)); 
router.delete('/id/:id',  awaitHandlerFactory(sellerSettingsController.deleteSellerSetting));


module.exports = router;