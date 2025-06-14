const Category = require('../models/category');
const missingValues = require('../middlewares/missing-values');
const NotFound = require('../middlewares/not-found');

class CategoryController {
    async createCategory(req, res) {
        const name = req.body.name;

        try {
            if (!name) {
                throw new missingValues({ name }, 'O campo nome é obrigatório.');
            }

            const category = await Category.create({ name });
            
            return res.status(201).send({ success: true, category });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async listAll(req, res) {
        try {
            const categories = await Category.findAll();

            return res.status(200).send(categories);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async findById(req, res) {
        const id = req.params.id;

        try {
            const category = await findById(Number(id));

            if (!category) {
                throw new NotFound(`Categoria com ID ${id} não encontrada.`);
            }

            return res.status(200).send(category);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async updateCategory(req, res) {
        const id = req.params.id;
        const name = req.body.name;

        try {
            const category = await Category.findByPk(Number(id));

            if (!category) {
                throw new NotFound(`Categoria com ID ${id} não encontrada.`);
            }

            if (!name) {
                throw new missingValues({ name }, 'O campo nome é obrigatório.');
            }

            await Category.update(
                { name },
                {
                    where: {
                        id: Number(id)
                    }
                }
            );
            return res.status(200).send(category);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deleteCategory(req, res) {
        const id = req.params.id;

        try {
            const category = await Category.findByPk(Number(id));

            if (!category) {
                throw new NotFound(`Categoria com ID ${id} não encontrada.`);
            }

            await Category.destroy({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).send({ success: true, message: 'Categoria Deletada' });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}

module.exports = new CategoryController();