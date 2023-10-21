const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken");

router.head("/", (req, res) => {
    const token = req.headers['authorization']
  
    if(!token){
      return res.send(400).json({msg: "Token não passado"})
    }
  
    
    const secret = process.env.JWT_SECRET
    
    try {
        jwt.verify(token, secret)
        return res.status(200).json({msg: "Autorizado"})
    } catch (err) {
        return res.status(400).json({msg: "Token inválido"})
    }
    
    
})

module.exports = router;