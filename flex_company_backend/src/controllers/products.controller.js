const ProductsModel = require('../models/products.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

class ProductsController {
    getAllProducts = async (req, res, next) => {
        let result = await ProductsModel.find();
        if (!result.length) {
            throw new HttpException(404, 'Products not found');
        }

        res.send(result);
    };

    getProductById = async (req, res, next) => {
        const result = await ProductsModel.findOne({ id: req.params.id });
        if (!result) {
            throw new HttpException(404, 'Product not found');
        }

        res.send(result);
    };

    createProduct = async (req, res, next) => {
        this.checkValidation(req);
        
        const result = await ProductsModel.create(req.body);

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Product was created!');
    };

    updateProduct = async (req, res, next) => {
        this.checkValidation(req);

        const result = await ProductsModel.update(req.body, req.params.id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'Product not found' :
            affectedRows && changedRows ? 'Product updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    deleteProduct = async (req, res, next) => {
        const result = await ProductsModel.delete(req.params.id);
        if (!result) {
            throw new HttpException(404, 'Product not found');
        }
        res.send('Product has been deleted');
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}


module.exports = new ProductsController;