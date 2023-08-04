// const mongoose = require('mongoose')

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     images: [{
//         type: String,
//         require: true
//     }],
//     public_id: [{
//         type: String
//     }]
// }, {timestamps: true});


// const productModel = mongoose.model('multiple-cloudinary', productSchema)

// module.exports = productModel

const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    priceStandard: 
    {
        type:Number,
        required: true,
        // positive: true
    },
    priceFlex: 
    {
        type:Number,
        required: true,
        // positive: true
    },
    duration: 
    {
        type:String,
        required: true,
        // min: 1
    },
    airlineName: 
    {
        type:String,
        required: true,
        // min: 1
    },
    airlineLogo: 
    [{
        type:String,
        required: true
    }],
    public_id: [{
        type: String
    }]
    
}, {timestamps: true})

const flightModel = mongoose.model("Flight", flightSchema);

module.exports = flightModel;