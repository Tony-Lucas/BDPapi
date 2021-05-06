const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Nota = sequelize.define("notas", {
    subtotal: { type: Sequelize.FLOAT, allowNull: false },
    data: { type: Sequelize.DATEONLY, default: Sequelize.NOW },
    desconto: {type: Sequelize.FLOAT,allowNull: false}
})

module.exports = Nota;