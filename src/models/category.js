const database = require('../database');

class Category {
    constructor() {
        this.model = database.db.define('categories', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING,
            }
        });
    }
}

module.exports = (new Category).model;