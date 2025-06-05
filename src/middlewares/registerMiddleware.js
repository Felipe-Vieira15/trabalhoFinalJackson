const User = require('../models/user');
const bcrypt = require('bcrypt');

const saltRounds = 10;

class RegisterUser{
    static async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const hash = await bcrypt.hash(password, saltRounds);

            const User = User.create({ name, email, password: hash})

            res.status(201).send({message: "Usuario cadastrado com sucesso", User});
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Erro ao cadastrar usuário', error: error.message });
        }
    }
}

module.exports = RegisterUser;