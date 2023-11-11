import { kafka } from './utility.js';

/*
/// Consumer \\\

Here we define a consumer and set it to subscribe to the same topic that the producer sends messages to.

When operating the demo: 
  - run node server/demo/producer first, then 
  - run node server/demo/consumer
  - after a few moments, the console should log the messages sent by the producer to the test-topic
  - the consumer remains connected and subscribed
    - to stream more data: run node/server/producer.js
    - to close out, type control-c to send SIGINT
*/

const consumer = kafka.consumer({ groupId: 'Demo-App_Group-01' });
await consumer.connect();

/*
Consumer groups fetch messages from the latest commited offset
If the offset is invalid or not defined:
  - fromBeginning set to true, the group will use the earliest offset. 
  - fromBeggining set to false (default) they use the latest offset.
*/

await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    await console.log({
      value: message.value.toString(),
    });
  },
});

export default consumer;
