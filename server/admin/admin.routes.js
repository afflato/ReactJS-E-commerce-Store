const express = require('express');
const { adminDashboard, addItem,getOrders,updateStatus,handleDispute} = require('./admin.controller');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.get('/dashboard',authenticate, adminDashboard);
router.post('/add-item',authenticate,addItem)
router.get('/orders',authenticate,getOrders)
router.post('/updatestatus',authenticate,updateStatus)
router.post('/handledispute',authenticate,handleDispute)

module.exports = router;