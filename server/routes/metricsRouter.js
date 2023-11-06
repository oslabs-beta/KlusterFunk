import express from 'express';
import metricController from '../controllers/metricsController.js';
const router = express.Router();

router.get('/default', metricController.getDefaultMetrics, (req, res) => {
  console.log('in metrics grabbing')
  return res.status(200).json(res.locals.defaultMetrics)
})

export {router as metricsRouter};