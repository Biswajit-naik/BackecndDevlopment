const { Sequelize } = require('sequelize');
// require('dotenv').config();

const sequelize = new Sequelize('shopping', 'root', 'Mysql@18', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
