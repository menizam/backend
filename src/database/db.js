const { Sequelize } = require('sequelize');

const db = new Sequelize('ccftv1', 'admin', 'K8iEMLQd6P4WgHC4cCHV', {
	host: 'management.cdxztkmmdnbt.ap-south-1.rds.amazonaws.com',
	dialect: 'mysql',
	port: '3306',
});

module.exports = db;
