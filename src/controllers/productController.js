const Product = require('../models/product');
const MissingValues = require('../middlewares/missing-values');
const NotFound = require('../middlewares/not-found');

class ProductController {
    async createProduct(req, res) {
        const name = req.body.name;
        const price = req.body.price;
        const categoryId = req.body.categoryId;

        try {
            if (!name || !price || !categoryId) {
                throw new MissingValues({ name, price, categoryId }, 'Todos os campos são obrigatórios.');
            }

            const product = await Product.create({
                name, price, categoryId
            });

            return res.status(201).send({ success: true, product });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async listAll(req, res) {
        try {
            const products = await Product.findAll();

            return res.status(200).send(products);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async findById(req, res) {
        const id = req.params.id;

        try {
            const product = await Product.findByPk(Number(id));

            if (!product) {
                throw new NotFound(`Produto com ID ${id} não encontrado.`);
            }

            return res.status(200).send(product);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async updateProduct(req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const price = req.body.price;
        const categoryId = req.body.categoryId;

        try {
            const product = await Product.findByPk(Number(id));

            if (!name || !price || !categoryId) {
                throw new MissingValues({ name, price, categoryId }, 'Todos os campos são obrigatórios.');
            }

            if (!product) {
                throw new NotFound(`Produto com ID ${id} não encontrado.`);
            }

            await Product.update(
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
        const id = req.params.id;

        try {
            const product = await Product.findByPk(Number(id));

            if (!product) {
                throw new NotFound(`Produto com ID ${id} não encontrado.`);
            }

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