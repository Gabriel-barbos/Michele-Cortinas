async function login(req, res) {
    const email = req.body.email
    const password = req.body.password

    if(!email){
        res.status(422).json({msg: "O email é obrigatório"})
    }

    if(!password || password.length < 5){
        res.status(422).json({msg: "Senha inválida"})
    }
}

module.exports = { login }