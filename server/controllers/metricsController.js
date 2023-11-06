const metricsController = {};

metricsController.getDefaultMetrics = async (req, res, next) => {
  const defaultMetrics = {};
  const { promAddress } = req.query;
  const getMetric = async (promQuery) => {
    const response = await fetch(
      `http://${promAddress}/api/v1/query?query=${promQuery}`
    );
    const data = await response.json();
    return data.result[0].value[1];
  };

  try {
    defaultMetrics[bytesIn] = getMetric(
      'sum(rate(kafka_server_brokertopicmetrics_bytesin_total[1m]))'
    );
    defaultMetrics[bytesOut] = getMetric(
      'sum(rate(kafka_server_brokertopicmetrics_bytesout_total[1m]))'
    );
    defaultMetrics[cpuUsage] = getMetric(
      'sum(rate(process_cpu_seconds_total[1m])) * 100'
    );

    res.locals.defaultMetrics = defaultMetrics;
    return next();
  } catch (err) {
    return next({
      log: 'Error in metrics.Controller in getDefaultMetrics',
      message: { err: 'Error when fetching metrics from Prom API' },
    });
  }
};

export default metricsController;
