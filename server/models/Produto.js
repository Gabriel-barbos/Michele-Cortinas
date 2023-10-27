const { sequelize, Sequelize } = require("../config/db");
const Pedido = require("./Pedido").pedido;

const Produto = sequelize.define("produtos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  preco: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Produto;

// module.exports = () => {
//     const Produto = sequelize.define("produtos",{

//         nome:{
//             type: Sequelize.STRING,
//             allowNull: true
//         },
//         preco:{
//             type: Sequelize.FLOAT,
//             allowNull: true
//         },
//         descricao:{
//             type: Sequelize.STRING,
//             allowNull: true
//         },
//         categoria:{
//             type: Sequelize.STRING,
//             allowNull: true
//         }
//     })

//     return Produto
// }
