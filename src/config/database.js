const Sequelize = require("sequelize");

const sequelize = new Sequelize("heroku_8df4693d7f68671","b055003a601a17","ad7c24f9",{
    dialect:"mysql",
    raw:true,
    define:{
        timestamps:false
    }
})

module.exports = sequelize;