const database = require('../config/database');
const Category = require('./category');
const Order = require('./order');
const OrderProduct = require('./orderProduct');

class Product {
    constructor() {
        this.model = database.db.define('products', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING,
            },
            price: {
                type: database.db.Sequelize.DECIMAL(10, 2),
            }
        });

        this.model.belongsTo(Category, { foreignKey: 'category_id' });

        this.model.belongsToMany(Order, {
            through: OrderProduct,
            foreignKey: 'product_id',
            otherKey: 'order_id'
        });
    }
}

module.exports = (new Product).model;