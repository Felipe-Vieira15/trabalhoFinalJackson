const { Product, Category } = require('../models');

class ProductController {
    async createProduct(req, res) {
        const name = req.body.name;
        const price = req.body.price;
        const categoryId = req.body.categoryId;

        try {
            const product = await createProduct(name, price, categoryId);
            return res.status(201).send({ success: true, product });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async listProducts(req, res) {
        try {
            const products = await listProducts();
            return res.status(200).send(products);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async findById(req, res) {
        const id = req.params;

        try {
            const product = await findById(id);
            return res.status(200).send(product);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async updateProduct(req, res) {
        const id = req.params;
        const { name, price, categoryId } = req.body;

        try {
            const product = await updateProduct(Number(id), name, price, categoryId);
            return res.status(200).send(product);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deleteProduct(req, res) {
        const id = req.params;

        try {
            await deleteProduct(Number(id));
            return res.status(200).send({ success: true, message: 'Produto Deletado' });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}

module.exports = new ProductController();