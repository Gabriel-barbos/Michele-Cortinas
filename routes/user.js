const express = require('express');
const router = express.Router();
const  mysql = require('./db.js').pool;
const bcrypt = require('bcrypt');
const { DataTypes } = require("sequelize");
const db = require("../config/bd.js");

router.post('/cadastro', (rerq,res,next) => {
    mysql.getConnection((err,conn) => {
        if (error) { return res.status(500).send({error: error})}
        bcrypt.hash(req.body.senha,10, (errBcrypt, hash) => {
            if (errBcrypt) {
            return res.status(500).send({ error: errBcrypt})}
                conn.query(
                    'INSERT INTO usuarios(email,senha) VALUES (?,?)', 
                [req.body.email,hash],
                (error,results) => {
                    conn.release();
                    if (error) { return res.status(500).send({ error: error})}
                    response = { 
                        mensagem: 'Usuario criado com sucesso',
                        usuarioCriado: {
                            id_usuario: results.Id,
                            email: req.body.email
                        }
                    }
                    return res.status(201).send(response);
                })
                      

              })
     });
})

const User = sequelize.define("User", {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

   email:  {
    type: DataTypes.STRING,
    allowNull: false,
   },
   password:  {
    type: DataTypes.STRING,
    allowNull: false,
   },
});
module.exports = router;