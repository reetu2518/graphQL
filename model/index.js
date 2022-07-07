const sequelize = require("../db/db")
const {Sequelize, DataTypes} = require("sequelize");

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force:false })

.then(()=>{
    console.log("yes re-sync");
})
.catch((e)=>{
    console.log("error" + e);
});

db.users = require('./Users')(sequelize, DataTypes);
module.exports = db;