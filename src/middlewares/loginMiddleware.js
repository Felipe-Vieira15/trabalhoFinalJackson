const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class LoginMiddleware {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
    
            if (!email || !password) {
                return res.status(400).send({ error: 'Email e senha necessários para realizar login' });
            }

            const correctPassword = await bcrypt.compare(password, req.user.password);
            if (!correctPassword) {
                return res.status(401).send({ error: 'Senha invalida' });
            }

            const token = jwt.sign({ id: req.user.id }, JWT_SECRET_KEY, { expiresIn: '1h' });

            res.json({message: 'Login realizado com sucesso', token });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Erro ao realizar login', error: error.message });
        }   

    }
}

module.exports = LoginMiddleware;