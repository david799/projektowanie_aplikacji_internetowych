const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const HttpException = require('./utils/HttpException.utils');
const errorMiddleware = require('./middleware/error.middleware');
const productsRouter = require('./routes/products.route');
const invoiceProductsRouter = require('./routes/invoice_products.route')
const invoiceRoute = require('./routes/invoice.route')
const savedClientsRoute = require('./routes/saved_clients.route')
const sellerSettingsRoute = require('./routes/seller_settings.route')

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.options("*", cors());

const port = Number(process.env.PORT || 3000);

app.use(`/products`, productsRouter);
app.use(`/invoice_products`, invoiceProductsRouter);
app.use(`/invoice`, invoiceRoute);
app.use(`/saved_clients`, savedClientsRoute);
app.use(`/seller_settings`, sellerSettingsRoute);

app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

app.use(errorMiddleware);

app.listen(port, () =>
    console.log(`🚀 Server running on port ${port}!`));

module.exports = app;