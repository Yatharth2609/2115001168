const express = require('express');
const productController = require('../controllers/product.controller');
const validateParams = require('../middlewares/validateParams');

const router = express.Router();

router.get('/:categoryname/products', validateParams, productController.getProducts);
router.get('/:categoryname/products/:productid', validateParams, productController.getProductDetails);

module.exports = router;