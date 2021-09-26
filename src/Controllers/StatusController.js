const Status = require('../models/Status');

class StatusController {
  async index(request, response) {
    const statuses = await Status.find();

    response.json(statuses);
  }

  async store(request, response) {
    const { value, name } = request.body;

    if (!value || !name) {
      return response.status(400).json({ message: 'Obrigatory fields missing.' });
    }

    const status = await Status.create({
      value, name,
    });

    response.status(201).json(status);
  }
}

module.exports = new StatusController();
