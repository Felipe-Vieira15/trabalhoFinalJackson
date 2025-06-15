const router = require('./app')
const database = require('./config/database');
const express = require('express');

router.use(express.json());

console.log('Starting server...')

router.get('/', (req, res) => {
    res.send({ response: 'Starting page!' });
})

const PORT = process.env.PORT || 3000;

database.db.sync({ force: false })
    .then(() => {
        router.listen(PORT, () => {
            console.log(`Server is running in http://localhost:${PORT}/`);
            console.log(`Swagger documentation running in http://localhost:${PORT}/api/docs`);
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });