const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const JWT_SECRET_KEY = "lipeeesz";

class UserController {
    async createUser(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        try {
            const user = await createUser(name, email, password);
            return res.status(201).send({ success: true, user });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async listUsers(req, res) {
        try {
            const users = await listUsers();
            return res.status(200).send( users );
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async findById(req, res) {
        const id = req.params.id;

        try {
            const user = await findById(id);
            return res.status(200).send( user );
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async updateUser(req, res) {
        const id = req.params;
        const {name, email, password} = req.body;

        try {
            const user = await updateuser(Number(id),name, email, password);
            return res.status(200).send( user );
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        const id = req.params;

        try {
            await deleteUser(Number(id));
            return res.status(200).send({ success: true, message: 'Usuario Deletado' });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}

module.exports = new UserController();