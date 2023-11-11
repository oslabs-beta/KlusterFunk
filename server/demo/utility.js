import { Kafka } from "kafkajs";
import promClient from "prom-client";
import kafkaExporter from "@christiangalsterer/kafkajs-prometheus-exporter";

// set up the KafkaJS client
const clientId = "demo-app";
const kafka = new Kafka({
  clientId,
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();
//demo group?
const consumer = kafka.consumer({ groupId: "Group-01" });
const admin = kafka.admin();

// set up the prometheus client --- CHOP
const collectDefaultMetrics = promClient.collectDefaultMetrics;
const Registry = promClient.Registry;
const register = new Registry();
collectDefaultMetrics({ register });

//monitor KafkaJS admin //// CHOP CHOP CHOP
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
await admin.connect(); // CHOP

// How to list topics
// await console.log("TOPICS TOPICS", await admin.listTopics());

export { kafka, kafkaExporter, clientId, register, producer, consumer };
