const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
  value: {
    type: String,
    enum: ['PENDING', 'PREPARING', 'DONE'],
    required: true,
  },
  name: {
    type: String,
    enum: ['Pendente', 'Preparando', 'Finalizado'],
    require: true,
  },
});

module.exports = mongoose.model('Status', StatusSchema);
