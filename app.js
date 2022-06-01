const express = require('express');
const server = express()
const morgan = require('morgan')
const productRoute = require('./routes/product')

server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use(morgan('dev'));

server.use('/api/', productRoute)

server.listen(3000, () => {
    console.log("server running")
})