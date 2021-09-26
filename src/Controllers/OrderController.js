const Order = require('../models/Order');

class OrderController {
  async index(request, response) {
    const orders = await Order.find();

    response.json(orders);
  }

  async store(request, response) {
    const { table, description } = request.body;

    if (!table || !description) {
      return response.status(400).send({ message: 'Obrigatory fields missing.' });
    }

    const order = await Order.create({
      table, description,
    });

    request.io.emit('newOrder', order);
    response.status(201).json(order);
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { status } = request.body;

      if (!status) {
        response.status(400).send({ message: 'new status is obrigatory.' });
      }

      const order = await Order.findByIdAndUpdate(
        { _id: id },
        { status },
        { new: true, runValidators: true },
      );

      request.io.emit('statusChange', order);
      response.json(order);
    } catch {
      response.sendStatus(500);
    }
  }
}

module.exports = new OrderController();
