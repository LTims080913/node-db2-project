const express = require('express')
const router = express.Router()
 
const knex = require('knex')
const db = require('../data/dbConnect')

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to retrieve cars'})
    })
})

router.post('/', (req, res) => {
    const addCar = req.body
    db('cars')
    .insert(addCar)
    .then(ids => {
        db('cars')
        .where({id: ids[0]})
        .then(newCar => {
            res.status(201).json(newCar)
        })
    })
    .catch(err => {
        console.log('POST error', err)
        res.status(500).json({message: 'Failed to store car'})
    })

})

module.exports = router