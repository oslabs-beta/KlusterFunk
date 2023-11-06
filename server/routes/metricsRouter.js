import express from 'express';
import metricController from '../controllers/metricsController.js';
const router = express.Router();

router.get('/metrics', metricController.getDefaultMetrics, (req, res) => {
  return res.status(200).json(res.locals.defaultMetrics)
})

export {router as metricsRouter};