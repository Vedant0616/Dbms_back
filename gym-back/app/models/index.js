const dbConfig = require('../config/db.config.js');
const { Sequelize } = require('sequelize');
console.log(dbConfig);
const sequelize = new Sequelize('sql12610090', 'sql12610090', dbConfig.PASSWORD, {
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// // we have used users instead of tutorials
db.branch_manager = require('./branch_manager.model.js')(sequelize, Sequelize);
db.workout = require('./workout.model.js')(sequelize, Sequelize);
db.member = require('./member.model.js')(sequelize, Sequelize);
db.equipment = require('./equipment.model.js')(sequelize, Sequelize);
db.payment = require('./payment.model.js')(sequelize, Sequelize);
db.trainer = require('./trainer.model.js')(sequelize, Sequelize);
db.trains = require('./trains.model.js')(sequelize, Sequelize);
db.has = require('./has.model.js')(sequelize, Sequelize);

module.exports = db;