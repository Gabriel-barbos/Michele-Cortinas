const { sequelize, Sequelize } = require("../config/db");

const models = {};

models.cliente = require("./Cliente.js");
models.pedido = require("./Pedido.js");
models.produto = require("./Produto.js");
models.imagem = require("./Imagem.js");
models.categoria = require("./Categoria.js");
models.endereco = require("./Endereco.js");
models.telefone = require("./Telefone.js");

//* Relacionamento Cliente x Pedido
models.cliente.hasMany(models.pedido); //Um Cliente pode ter vários Pedidos
models.pedido.belongsTo(models.cliente); // Cada Pedido está relacionado a um Cliente

//* Relacionamento Produto x Imagem 1-N
models.produto.hasMany(models.imagem, {
  onDelete: "cascade",
});
models.imagem.belongsTo(models.produto);

//* Relacionamento Cliente x Telefone  1-N
models.cliente.hasMany(models.telefone,{
  onDelete: "cascade"
})
models.telefone.belongsTo(models.cliente);


//* Relacionamento Cliente x Endereco 1-N
models.cliente.hasOne(models.endereco,{
  onDelete: "cascade"
})
models.endereco.belongsTo(models.cliente)




sequelize.sync({ force: true });

module.exports = models;
