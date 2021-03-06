const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        userId:{type: Number, required: true, unique:true},
        products:[
            {
                productId:{type:Number},
                quantity:{type:Number, default:1}
            },
        ],
    },
    {timestamps: true}
);

module.exports = mongoose.model('Cart', CartSchema)