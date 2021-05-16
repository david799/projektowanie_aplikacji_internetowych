const InvoiceProductsModel = require('../models/invoice_products.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

class InvoiceProductsController {
    getAllInvoiceProducts = async (req, res, next) => {
        let result = await InvoiceProductsModel.find();
        if (!result.length) {
            throw new HttpException(404, 'Invoice products not found');
        }

        res.send(result);
    };

    getInvoiceProductById = async (req, res, next) => {
        const result = await InvoiceProductsModel.findOne({ id: req.params.id });
        if (!result) {
            throw new HttpException(404, 'Invoice product not found');
        }

        res.send(result);
    };

    createInvoiceProduct = async (req, res, next) => {
        this.checkValidation(req);

        const result = await InvoiceProductsModel.create(req.body);

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Invoice product was created!');
    };

    updateInvoiceProduct = async (req, res, next) => {
        this.checkValidation(req);

        const result = await InvoiceProductsModel.update(req.body, req.params.id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'Invoice product not found' :
            affectedRows && changedRows ? 'Invoice product updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    deleteInvoiceProduct = async (req, res, next) => {
        const result = await InvoiceProductsModel.delete(req.params.id);
        if (!result) {
            throw new HttpException(404, 'Invoice product not found');
        }
        res.send('Invoice product has been deleted');
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}


module.exports = new InvoiceProductsController;