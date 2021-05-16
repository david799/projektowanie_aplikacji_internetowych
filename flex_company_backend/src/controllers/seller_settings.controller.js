const SellerSettingsModel = require('../models/seller_settings.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

class SellerSettingsController {
    getAllSellerSettings = async (req, res, next) => {
        let result = await SellerSettingsModel.find();
        if (!result.length) {
            throw new HttpException(404, 'Sellers settings not found');
        }

        res.send(result);
    };

    getSellerSettingById = async (req, res, next) => {
        const result = await SellerSettingsModel.findOne({ id: req.params.id });
        if (!result) {
            throw new HttpException(404, 'Seller settings not found');
        }

        res.send(result);
    };

    createSellerSetting = async (req, res, next) => {
        this.checkValidation(req);

        const result = await SellerSettingsModel.create(req.body);

        if (!result) {
            throw new HttpException(500, 'Seller settings went wrong');
        }

        res.status(201).send('Seller settings was created!');
    };

    updateSellerSetting = async (req, res, next) => {
        this.checkValidation(req);

        const result = await SellerSettingsModel.update(req.body, req.params.id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'Seller settings not found' :
            affectedRows && changedRows ? 'Seller settings updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    deleteSellerSetting = async (req, res, next) => {
        const result = await SellerSettingsModel.delete(req.params.id);
        if (!result) {
            throw new HttpException(404, 'Seller settings not found');
        }
        res.send('Seller settings has been deleted');
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}


module.exports = new SellerSettingsController;