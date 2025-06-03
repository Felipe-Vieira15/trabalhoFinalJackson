const database = require('./config/database');
const Category = require('./Category');

class Product {
    constructor() {
        this.model = database.db.define('products', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING,
            },
            price: {
                type: database.Sequelize.NUMBER,
            }
        });
        this.model.belongsTo(Category, { foreignKey: 'category_id' });
    }
}

module.exports = (new Product).model;