const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
    amount: String,
    customer_id: mongoose.SchemaTypes.ObjectId,
    products:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'products'
    }]
})

const orderModel=mongoose.model('orders',orderSchema);
module.exports= orderModel;