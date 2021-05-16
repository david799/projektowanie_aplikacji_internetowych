const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware')


router.get('/', awaitHandlerFactory(productsController.getAllProducts)); 
router.get('/id/:id', awaitHandlerFactory(productsController.getProductById)); 
router.post('/', awaitHandlerFactory(productsController.createProduct)); 
router.patch('/id/:id', awaitHandlerFactory(productsController.updateProduct)); 
router.delete('/id/:id',  awaitHandlerFactory(productsController.deleteProduct));


module.exports = router;