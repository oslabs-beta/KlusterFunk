import express from 'express';
import metricsController from '../controllers/metricsController.js';
const router = express.Router();

router.get('/default', metricsController.getDefaultMetrics, (req, res) => {
  return res.status(200).json(res.locals.defaultMetrics);
});

export { router as metricsRouter };
