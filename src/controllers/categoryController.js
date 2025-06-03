const Category = require('../models/Category');

class CategoryController {
    async createCategory(req, res) {
        const name = req.body.name;

        try {
            const category = await createCategory(name);
            return res.status(201).send({ success: true, category });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async listCategories(req, res) {
        try {
            const categories = await listCategories();
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
            const category = await updateCategory(Number(id), name);
            return res.status(200).send(category);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deleteCategory(req, res) {
        const id = req.params;

        try {
            await deleteCategory(Number(id));
            return res.status(200).send({ success: true, message: 'Categoria Deletada' });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}

module.exports = new CategoryController();