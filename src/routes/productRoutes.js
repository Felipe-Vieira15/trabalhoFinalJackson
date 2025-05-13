const ProductController = require('../controllers/productController');

app.post('/api/products', ProductController.createProduct);
app.get('/api/products', ProductController.listProducts);
app.get('/api/products/:id', ProductController.findById);
app.put('/api/products/:id', ProductController.updateProduct);
app.delete('/api/products/:id', ProductController.deleteProduct);