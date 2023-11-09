const metricsController = {};

metricsController.getDefaultMetrics = async (req, res, next) => {
  const defaultMetrics = {};
  const { promAddress } = req.query;
  // console.log(req.query);
  const getMetric = async (promQuery) => {
    let response = await fetch(
      `${promAddress}/api/v1/query?query=${promQuery}`
    );
    response = await response.json();
    return response.data.result[0].value;
  };

  try {
    defaultMetrics.bytesIn = await getMetric('sum(rate(kafka_server_brokertopicmetrics_bytesin_total[1m]))');
    defaultMetrics.bytesOut = await getMetric('sum(rate(kafka_server_brokertopicmetrics_bytesout_total[1m]))');
    defaultMetrics.cpuUsage = await getMetric('sum(rate(process_cpu_seconds_total[1m])) * 100');
    defaultMetrics.brokerCount = await getMetric(
      'kafka_controller_kafkacontroller_activebrokercount'
    );
    console.log(defaultMetrics);

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
