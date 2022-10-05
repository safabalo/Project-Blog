const dbConfig = require('../config/database');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});

sequelize.authenticate()
.then(()=>console.log('connected'))
.catch((err)=>console.log(err))

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.articles = require('./articles')(sequelize, DataTypes);
db.categories = require('./categories')(sequelize, DataTypes);
db.comments = require('./comments')(sequelize, DataTypes);
db.avis = require('./avis')(sequelize, DataTypes);

db.categories.hasMany(db.articles);
db.articles.belongsTo(db.categories);
db.articles.hasMany(db.comments);
db.comments.belongsTo(db.articles);
db.articles.hasMany(db.avis);
db.avis.belongsTo(db.articles);


db.sequelize.sync({force: false})
.then(()=>console.log('connected'))
.catch((err)=>console.log(err))

module.exports = db;
