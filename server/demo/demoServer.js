import express from "express";
import promClient from "prom-client";
import { register } from "./utility.js";

const app = express();
const PORT = 3011;

// const main = async () => {
//   //   const consumerMetrics = await consumerRegister.metrics();

// }
// main();

promClient.collectDefaultMetrics();
app.get("/metrics", async function (req, res) {
  const metrics = await register.metrics();
  // res.set("Content-Type", register.contentType);
  res.send(metrics);
});

app.listen(PORT, () => console.log(`Demo App: listening on PORT: ${PORT}`));
