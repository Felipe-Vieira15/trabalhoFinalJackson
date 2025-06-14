const User = require('../models/user')
const bcrypt = require('bcrypt');

const saltRounds = 10;

class RegisterUser{
    async register(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const hash = await bcrypt.hash(password, saltRounds);
        try {
            const newUser = await User.create({
                name,
                email,
                password: hash,
            });

            res.status(201).send({message: "Usuario cadastrado com sucesso", newUser});
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Erro ao cadastrar usuário', error: error.message });
        }
    }
}

module.exports = new RegisterUser;