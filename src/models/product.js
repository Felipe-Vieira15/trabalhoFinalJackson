const database = require('../config/database');
const Category = require('./category');

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
                type: database.db.Sequelize.DECIMAL,
            }
        });
        this.model.belongsTo(Category, { foreignKey: 'category_id' });
    }
}

module.exports = (new Product).model;