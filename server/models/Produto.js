const { sequelize, Sequelize } = require("../config/db");
const Pedido = require("./Pedido").Pedido;

module.exports = () => {
    const Produto = sequelize.define("produtos",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: true
        },
        preco:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        descricao:{
            type: Sequelize.STRING,
            allowNull: true
        },
        categoria:{
            type: Sequelize.STRING,
            allowNull: true
        }
    })


    return Produto
}