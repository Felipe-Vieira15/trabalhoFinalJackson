const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/config');

class AuthMiddleware {

    static validateToken(req, res, next) {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send({ error: 'Token não fornecido' });
        }

        try {
            const verify = jwt.verify(token, JWT_SECRET_KEY);
            req.user = verify;
            next();
        } catch (error) {
            return res.status(403).send({ error: 'Token inválido' });
        };
    }

}

module.exports = AuthMiddleware;