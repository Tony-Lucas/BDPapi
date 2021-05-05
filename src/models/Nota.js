const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Nota = sequelize.define("notas", {
    subtotal: { type: Sequelize.FLOAT, allowNull: false },
    data: { type: Sequelize.DATEONLY, default: Sequelize.NOW },
    admin: {type:Sequelize.STRING,allowNull:false}
})

module.exports = Nota;