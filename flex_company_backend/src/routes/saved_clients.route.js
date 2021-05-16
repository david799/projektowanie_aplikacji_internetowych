const express = require('express');
const router = express.Router();
const savedClientsController = require('../controllers/saved_clients.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware')


router.get('/', awaitHandlerFactory(savedClientsController.getAllSavedClients)); 
router.get('/id/:id', awaitHandlerFactory(savedClientsController.getSavedClientById)); 
router.post('/', awaitHandlerFactory(savedClientsController.createSavedClient)); 
router.patch('/id/:id', awaitHandlerFactory(savedClientsController.updateSavedClient)); 
router.delete('/id/:id',  awaitHandlerFactory(savedClientsController.deleteSavedClient));


module.exports = router;