import { consumer } from "./utility.js";


await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    await console.log({
      value: message.value.toString(),
    });
  },
});

export default consumer;
