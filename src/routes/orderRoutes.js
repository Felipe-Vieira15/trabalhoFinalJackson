const OrderController = require('../controllers/orderController');

app.post('/api/orders', OrderController.createOrder);
app.get('/api/orders', OrderController.listOrders);
app.get('/api/orders/:id', OrderController.findById);
app.put('/api/orders/:id', OrderController.updateOrder);
app.delete('/api/orders/:id', OrderController.deleteOrder);