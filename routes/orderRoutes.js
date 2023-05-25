const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/order');

orderRouter.get('/', orderController.getAllOrders);
orderRouter.post('/', orderController.createOrder);


module.exports = orderRouter;