const express = require('express');
const router = express.Router();
const { CreateProduct,AllProduct,ProductByProductCategoryName, ProductByBrandName, ProductByName, ProductByID, UpdateProduct, DeleteProduct } = require('./Controller');


router.post('/create-product', CreateProduct);
router.get('/get-product-by-name', ProductByName);
router.get('/get-product-by-brandname', ProductByBrandName);
router.get('/get-product-by-categoryname', ProductByProductCategoryName);
router.get('/get-product-by-id', ProductByID);
router.get('/get-all-product', AllProduct);
router.put('/update-product', UpdateProduct);
router.delete('/delete-product', DeleteProduct);

module.exports = router;
