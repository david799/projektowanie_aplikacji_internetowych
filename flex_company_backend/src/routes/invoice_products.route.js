const express = require('express');
const router = express.Router();
const invoiceProductsController = require('../controllers/invoice_products.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware')


router.get('/', awaitHandlerFactory(invoiceProductsController.getAllInvoiceProducts)); 
router.get('/id/:id', awaitHandlerFactory(invoiceProductsController.getInvoiceProductById)); 
router.post('/', awaitHandlerFactory(invoiceProductsController.createInvoiceProduct)); 
router.patch('/id/:id', awaitHandlerFactory(invoiceProductsController.updateInvoiceProduct)); 
router.delete('/id/:id',  awaitHandlerFactory(invoiceProductsController.deleteInvoiceProduct));


module.exports = router;