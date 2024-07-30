const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const OrdersSchema = new Schema({
    OrdersId: Number,
    userId: Number,
    deliveredTo: String,
    phoneNumber: Number,
    deliverAddress: String,
    OrderDate: { type: Date, default: Date.now },
    OrderStatus: String,
    TotalPrice: Number,
    payMethod: String,
    });
    

const Orders = mongoose.model('Orders',OrdersSchema);
module.exports = Orders