const Order = require('../models/order');
const Product = require('../models/product');
const User = require('../models/user');

class OrderController {
    async createOrder(req, res) {
        const userId = req.body.userId;
        const productId = req.body.productId;

        try {
            const order = await Order.create({
                userId,
                productId
            });
            return res.status(201).send({ success: true, order });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async listOrders(req, res) {
        try {
            const orders = await Order.findAll();
            return res.status(200).send(orders);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async findById(req, res) {
        const id = req.params.id;

        try {
            const order = await findById(id);
            return res.status(200).send(order);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async updateOrder(req, res) {
        const id = req.params.id;
        const { userId, productId } = req.body;

        try {
            const order = await Order.update(
                { userId, productId },
                {
                    where: {
                        id: Number(id)
                    }
                }
            );
            return res.status(200).send(order);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deleteOrder(req, res) {
        const id = req.params.id;

        try {
            await Order.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).send({ success: true, message: 'Order Deleted' });
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}

module.exports = new OrderController();