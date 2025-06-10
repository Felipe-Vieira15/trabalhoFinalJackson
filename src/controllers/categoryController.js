const Category = require('../models/category');

class CategoryController {
    async createCategory(req, res) {
        const name = req.body.name;

        try {
            const category = await Category.create({ name });
            return res.status(201).send({ success: true, category });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async listCategories(req, res) {
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
            const category = await findById(id);
            return res.status(200).send(category);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async updateCategory(req, res) {
        const id = req.params;
        const { name } = req.body;

        try {
            const category = await Category.update(
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
        const id = req.params;

        try {
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