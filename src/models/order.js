const database = require('../config/database');
const User = require('./user');
const Product = require('./product');

class Order {
    constructor() {
        this.model = database.db.define('orders', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }
        });
        this.model.belongsTo(User, { foreignKey: 'user_id' });
        this.model.belongsTo(Product, { foreignKey: 'product_id' });
    }
}

module.exports = (new Order).model;