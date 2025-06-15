const database = require('../config/database');

const OrderProduct = database.db.define('order_products', {
  id: {
    type: database.db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: database.db.Sequelize.INTEGER,
  product_id: database.db.Sequelize.INTEGER,
  quantity: database.db.Sequelize.INTEGER,
  price_at_time: database.db.Sequelize.DECIMAL(10, 2)
}, {
  timestamps: true
});

module.exports = OrderProduct;
