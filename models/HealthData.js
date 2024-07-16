const mongoose = require('mongoose');

const healthDataSchema = new mongoose.Schema({
  patientId: String,
  data: Object,
});

module.exports = mongoose.model('HealthData', healthDataSchema);
