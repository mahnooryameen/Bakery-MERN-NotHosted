const express=require('express');
const router=express.Router()
const { placeorder, allOrders,trackOrder } = require('./Controller')


router.post('/place-order', placeorder)  //
router.get('/get-all-orders', allOrders)   //all orders
router.get('/track-order/:_id', trackOrder)
module.exports=router
