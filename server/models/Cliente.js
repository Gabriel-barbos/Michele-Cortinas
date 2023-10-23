const { sequelize, Sequelize } = require("../config/db");
const Pedido = require("./Pedido");

module.exports = () => {
    const Cliente = sequelize.define("clientes",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: true
        },
        sobrenome:{
            type: Sequelize.STRING,
            allowNull: true
        },
        email:{
            type: Sequelize.STRING,
            allowNull: true
        },
        senha:{
            type: Sequelize.STRING,
            allowNull: true
        }
    })


    return Cliente
}