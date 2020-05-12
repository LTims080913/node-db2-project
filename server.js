const express = require('express')
const server = express()
const carsRouter = require('./cars/carsRouter')

server.use(express.json())
server.use('/api/car-dealer', carsRouter)

module.exports = server