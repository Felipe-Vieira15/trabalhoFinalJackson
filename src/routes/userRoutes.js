const UserController = require('../controllers/userControllers');

app.post('/api/users', UserController.createUser);
app.get('/api/users', UserController.listUsers);
app.get('/api/users/:id', UserController.findById);
app.put('/api/users/:id', UserController.updateUser);
app.delete('/api/users/:id', UserController.deleteUser);