const Product = require('../models/product');

class ProductController {
    async createProduct(req, res) {
        const name = req.body.name;
        const price = req.body.price;
        const categoryId = req.body.categoryId;

        try {
            const product = await Product.create({
                name, price, categoryId
            });
            return res.status(201).send({ success: true, product });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async listProducts(req, res) {
        try {
            const products = await Product.findAll();
            return res.status(200).send(products);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async findById(req, res) {
        const id = req.params;

        try {
            const product = await Product.findByPk(Number(id));
            return res.status(200).send(product);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async updateProduct(req, res) {
        const id = req.params;
        const { name, price, categoryId } = req.body;

        try {
            const product = await Product.update(
                { name, price, categoryId },
                {
                    where: {
                        id: Number(id)
                    }
                }
            );
            return res.status(200).send(product);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deleteProduct(req, res) {
        const id = req.params;

        try {
            await Product.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).send({ success: true, message: 'Produto Deletado' });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}

module.exports = new ProductController();