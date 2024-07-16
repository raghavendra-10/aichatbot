const express = require('express');
const router = express.Router();
const HealthData = require('../models/HealthData');
const { askQuestion } = require('../services/gptService');

router.post('/train', async (req, res) => {
  const { patientId, data } = req.body;
  const newData = new HealthData({ patientId, data });
  await newData.save();
  res.send({ message: 'Data saved.' });
});

router.post('/ask', async (req, res) => {
  const { question } = req.body;
  const answer = await askQuestion(question);
  res.send({ answer });
});

module.exports = router;
