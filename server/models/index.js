const { sequelize, Sequelize } = require("../config/db");

const models = {};

models.cliente = require("./Cliente.js");
models.pedido = require("./Pedido.js");
models.produto = require("./Produto.js");
models.imagem = require("./Imagem.js");
models.categoria = require("./Categoria.js");

//* Relacionamento Cliente x Pedido
models.cliente.hasMany(models.pedido); //Um Cliente pode ter vários Pedidos
models.pedido.belongsTo(models.cliente); // Cada Pedido está relacionado a um Cliente

//* Relacionamento Imagem x Produto
models.produto.hasMany(models.imagem, {
  onDelete: "cascade",
});
models.imagem.belongsTo(models.produto);

sequelize.sync({ force: true });

module.exports = models;
