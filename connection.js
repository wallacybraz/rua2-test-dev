const Sequelize = require('sequelize');

const DB_PASS = process.env.DB_PASS;

module.exports =  new Sequelize('testingdb', 'acquauser', DB_PASS, {
  dialect: 'postgres',
  host: 'acquadb.cfqegsb0tnmo.sa-east-1.rds.amazonaws.com',
  port: '5432'
});









