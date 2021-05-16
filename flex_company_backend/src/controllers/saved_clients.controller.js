const SavedClientsModel = require('../models/saved_clients.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

class SavedClientsController {
    getAllSavedClients = async (req, res, next) => {
        let result = await SavedClientsModel.find();
        if (!result.length) {
            throw new HttpException(404, 'Saved clients not found');
        }

        res.send(result);
    };

    getSavedClientById = async (req, res, next) => {
        const result = await SavedClientsModel.findOne({ id: req.params.id });
        if (!result) {
            throw new HttpException(404, 'Saved client not found');
        }

        res.send(result);
    };

    createSavedClient = async (req, res, next) => {
        this.checkValidation(req);

        const result = await SavedClientsModel.create(req.body);

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Saved client was created!');
    };

    updateSavedClient = async (req, res, next) => {
        this.checkValidation(req);

        const result = await SavedClientsModel.update(req.body, req.params.id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'Saved client not found' :
            affectedRows && changedRows ? 'Saved client updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    deleteSavedClient = async (req, res, next) => {
        const result = await SavedClientsModel.delete(req.params.id);
        if (!result) {
            throw new HttpException(404, 'Saved client not found');
        }
        res.send('Saved client has been deleted');
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}


module.exports = new SavedClientsController;