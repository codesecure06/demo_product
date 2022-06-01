const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/demo_pro')
    .then(() => {
        console.log('✔ | db connected...!')
    })
    .catch(() => {
        console.log('✗ | could not connect with DB')
    })

module.exports = mongoose
