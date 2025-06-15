const express = require('express');
const router = express.Router();
const LoginMiddleware = require('../middlewares/loginMiddleware');

/**
 * @swagger
 * tags:
 *   - name: Autenticação
 *     description: Operações de login de usuários
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso, retorna o token JWT
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: E-mail ou senha inválidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/", LoginMiddleware.login);

module.exports = router;
