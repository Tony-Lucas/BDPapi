const sequelize = require("../config/database");
const Admin = require("./Admin");
const Mercadoria = require("./Mercadoria");

sequelize.sync({force:false})
