const express = require('express');
const { displayUserDetails,addItemToCart,placeOrder} = require('./user.controller');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.get('/dashboard',authenticate, displayUserDetails);
router.post('/addtocart',authenticate, addItemToCart);
router.post('/placeorder',authenticate, placeOrder);


module.exports = router;