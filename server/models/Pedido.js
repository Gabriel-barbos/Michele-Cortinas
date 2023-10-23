const { sequelize, Sequelize } = require("../config/db");
const Cliente = require("./Cliente");
const Produto = require("./Produto");

module.exports = () => {
    const Pedido= sequelize.define('pedidos',{
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

    Pedido.belongsTo(Cliente,{
        constraint: true,
        foreignKey: 'idCliente',
        onDelete: 'CASCADE'
    });

    Cliente.hasMany(Pedido,{
        foreignKey: 'idCliente'
    })
    return Pedido
}