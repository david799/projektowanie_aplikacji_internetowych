const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoice.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware')


router.get('/', awaitHandlerFactory(invoiceController.getAllInvoices)); 
router.get('/id/:id', awaitHandlerFactory(invoiceController.getInvoiceById)); 
router.post('/', awaitHandlerFactory(invoiceController.createInvoice)); 
router.patch('/id/:id', awaitHandlerFactory(invoiceController.updateInvoice)); 
router.delete('/id/:id',  awaitHandlerFactory(invoiceController.deleteInvoice));


module.exports = router;