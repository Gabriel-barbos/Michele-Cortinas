const { sequelize, Sequelize } = require("../config/db");
const Admin = require("./Admin.js");

const models = {};

models.cliente = require("./Cliente.js");
models.admin = require("./Admin.js");
models.pedido = require("./Pedido.js");
models.variacao = require("./Variacao.js");
models.produto = require("./Produto.js");
models.imagem = require("./Imagem.js");
models.categoria = require("./Categoria.js");
models.variacao = require("./Variacao.js");
models.endereco = require("./Endereco.js");
models.telefone = require("./Telefone.js");
models.relatorio = require("./Relatorio.js");

//* Relacionamento Cliente x Pedido
models.cliente.hasMany(models.pedido); //Um Cliente pode ter vários Pedidos
models.pedido.belongsTo(models.cliente); // Cada Pedido está relacionado a um Cliente

//* Relacionamento Produto x Imagem 1-N
models.produto.hasMany(models.imagem, {
  onDelete: "cascade",
});
models.imagem.belongsTo(models.produto);


//* Relacionamento Variação de produto x Produto
models.produto.hasMany(models.variacao, {
  onDelete: "cascade",
});
models.variacao.belongsTo(models.produto)

// //* Relacionamento Imagem x Variação de produto
// models.variacao.hasMany(models.imagem, {
//   onDelete: "cascade",
// });
// models.imagem.belongsTo(models.variacao);

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


//* Relacionamento produto x Pedido 1 - N
models.produto.hasMany(models.pedido); 
models.pedido.belongsTo(models.produto);


//* Relacionamento Categoria x Produto 1 - N
models.categoria.hasMany(models.produto); 
models.produto.belongsTo(models.categoria);

//* Relacionamento Admin x Relatório 1 -N
models.admin.hasMany(models.relatorio); 
models.relatorio.belongsTo(models.admin);


// sequelize.sync({ force: true });

module.exports = models;
