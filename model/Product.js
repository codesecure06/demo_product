const mongoose = require('../dbconn')

const docSchema = new mongoose.Schema({
    productName: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0.0
    },
}, {
    timestamps: true
})

const product = mongoose.model('product', docSchema);

product.once('index', err => (err ? console.log("Chat Models index error : ", err) : ''));

module.exports = product;
