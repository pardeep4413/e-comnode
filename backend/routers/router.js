const express = require('express');
const router = express.Router();
const { register,
    logout,
    product,
    getproducts,
    delproducts, 
    singleproducts,
    updateproduct,
    searchproduct, } = require('../controller/conroller');

router.post('/register', register);
router.post('/logout', logout);
router.post('/products', product);
router.get('/getproducts', getproducts);
router.delete('/delproducts/:id', delproducts);
router.get('/delproducts/:id', singleproducts);
router.put('/delproducts/:id',updateproduct);
router.get('/search/:key',searchproduct);


module.exports = router;
