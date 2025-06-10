const database = require('./config/database');
const UserRoutes = require('./routes/userRoutes');
const CategoryRoutes = require('./routes/categoryRoutes');
const ProductRoutes = require('./routes/productRoutes');
const OrderRoutes = require('./routes/orderRoutes');
const MiddlewaresRoutes = require('./routes/middlewaresRoutes');
const express = require('express');
const router = express();

console.log('Starting server....')

router.get('/', (req, res) => {
    res.send({ response: 'Starting page!' });
})

router.use('/api/users', UserRoutes, MiddlewaresRoutes);
router.use('/api/categories', CategoryRoutes);
router.use('/api/products', ProductRoutes);
router.use('/api/orders', OrderRoutes);

database.db.sync({ force: false })
    .then(() => {
        router.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });