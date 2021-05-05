const Sequelize = require("sequelize");

const sequelize = new Sequelize("bdpdb","root","55425610a",{
    dialect:"mysql",
    raw:true,
    define:{
        timestamps:false
    }
})

module.exports = sequelize;