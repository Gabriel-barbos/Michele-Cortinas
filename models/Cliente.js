const { sequelize } = require("../config/db");

module.exports = (sequelize) =>{

    const Cliente = sequelize.define("clientes",{
        nome:{
            type:DataTypes.STRING,
            allowNull: true
        },
        sobrenome:{
            type:DataTypes.STRING,
            allowNull: true
        },
        email:{
            type:DataTypes.STRING,
            allowNull: true
        },
        senha:{
            type:DataTypes.STRING,
            allowNull: true
        }
    })

    return Cliente

}