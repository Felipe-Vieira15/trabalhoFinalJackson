const database = require('./config/database');
const User = require('./models/user');
const Category = require('./models/category');
const Product = require('./models/product');
const Order = require('./models/order');
const express = require('express');

console.log('Starting server....')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Starting page!' });
})

database.db.sync({ force: false })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });