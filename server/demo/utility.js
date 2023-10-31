import { Kafka } from "kafkajs";
import promClient from "prom-client";
import kafkaExporter from "@christiangalsterer/kafkajs-prometheus-exporter";

// set up the KafkaJS client
const clientId = "demo-app";
const kafka = new Kafka({
  clientId,
  brokers: ["localhost:9091"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "Group-01" });
const admin = kafka.admin();

// set up the prometheus client
const collectDefaultMetrics = promClient.collectDefaultMetrics;
const Registry = promClient.Registry;
const register = new Registry();
collectDefaultMetrics({ register });

//monitor KafkaJS admin
kafkaExporter.monitorKafkaJSAdmin(admin, register, {
  defaultLabels: { client_id: clientId },
});

// monitor KafkaJS producer
kafkaExporter.monitorKafkaJSProducer(producer, register, {
  defaultLabels: { client_id: clientId },
});

// monitor KafkaJS consumer
kafkaExporter.monitorKafkaJSConsumer(consumer, register, {
  defaultLabels: { client_id: clientId },
});

await producer.connect();
await consumer.connect();
await admin.connect();

// How to list topics
// await console.log("TOPICS TOPICS", await admin.listTopics());

export { kafka, kafkaExporter, clientId, register, producer, consumer };
