const CategoryController = require('../controllers/categoryController');

app.post('/api/categories', categoryController.createCategory);
app.get('/api/categories', CategoryController.listCategories);
app.get('/api/categories/:id', CategoryController.findById);
app.put('/api/categories/:id', CategoryController.updateCategory);
app.delete('/api/categories/:id', CategoryController.deleteCategory);