const database = require('../config/database');

const Order = database.db.define('orders', {
  id: {
    type: database.db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

Order.associate = (models) => {
  Order.belongsTo(models.User, { foreignKey: 'user_id' });
  Order.belongsToMany(models.Product, {
    through: models.OrderProduct,
    foreignKey: 'order_id',
    otherKey: 'product_id'
  });
};

module.exports = Order;
