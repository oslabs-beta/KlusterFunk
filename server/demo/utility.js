import { Kafka } from 'kafkajs';

/*
Instantiate a KafkaJS client and point it to our demo broker (see DEMO.md for setup instructions)
  KafkaJS allows us to manipulate Kafka with Javascript!
  We have the brokers location set to 'localhost:9092' by default
    - change this value if you set up your Kafka instance on a different port!
*/
const clientId = 'demo-app';
const kafka = new Kafka({
  clientId,
  brokers: ['localhost:9092'],
});


export { kafka };
