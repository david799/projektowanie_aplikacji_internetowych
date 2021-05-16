const InvoiceModel = require('../models/invoice.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

class InvoiceController {
    getAllInvoices = async (req, res, next) => {
        let result = await InvoiceModel.find();
        if (!result.length) {
            throw new HttpException(404, 'Invoices not found');
        }

        res.send(result);
    };

    getInvoiceById = async (req, res, next) => {
        const result = await InvoiceModel.findOne({ id: req.params.id });
        if (!result) {
            throw new HttpException(404, 'Invoice not found');
        }

        res.send(result);
    };

    createInvoice = async (req, res, next) => {
        this.checkValidation(req);

        const result = await InvoiceModel.create(req.body);

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Invoice was created!');
    };

    updateInvoice = async (req, res, next) => {
        this.checkValidation(req);

        const result = await InvoiceModel.update(req.body, req.params.id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'Invoice not found' :
            affectedRows && changedRows ? 'Invoice updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    deleteInvoice = async (req, res, next) => {
        const result = await InvoiceModel.delete(req.params.id);
        if (!result) {
            throw new HttpException(404, 'Invoice not found');
        }
        res.send('Invoice has been deleted');
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}


module.exports = new InvoiceController;