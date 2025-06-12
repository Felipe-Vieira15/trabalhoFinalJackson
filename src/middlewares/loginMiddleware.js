require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

class LoginMiddleware {
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
    
            if (!email || !password) {
                return res.status(400).send({ error: 'Email e senha necessários para realizar login' });
            }

            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(404).send({ error: 'Usuario não encontrado' });
            }

            const correctPassword = await bcrypt.compare(password, user.password);
            if (!correctPassword) {
                return res.status(401).send({ error: 'Senha invalida' });
            }

            const token = jwt.sign({ id: user.id }, JWT_SECRET_KEY, { expiresIn: '1h' });

            res.json({message: 'Login realizado com sucesso', token });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Erro ao realizar login', error: error.message });
        }   

    }
}

module.exports = new LoginMiddleware;