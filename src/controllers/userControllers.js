const User = require('../models/user');

class UserController {

    async listUsers(req, res) {
        try {
            const users = await User.findAll();
            return res.status(200).send( users );
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async findById(req, res) {
        const id = req.params.id;

        try {
            const user = await User.findByPk(Number(id));
            return res.status(200).send( user );
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async updateUser(req, res) {
        const id = req.params;
        const {name, email, password} = req.body;

        try {
            const user = await User.update(
                { name, email, password },
                {
                    where: {
                        id: Number(id)
                    }
                }
            );
            return res.status(200).send( user );
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        const id = req.params;

        try {
            await User.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).send({ success: true, message: 'Usuario Deletado' });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}

module.exports = new UserController();