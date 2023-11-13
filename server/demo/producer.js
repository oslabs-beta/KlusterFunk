import { kafka } from './utility.js';

/*
/// Producer \\\

Here we define a producer and set up some basic functionality to imitate a data stream:
  - a random number generator
  - a setInterval that sends a random number every second
  - a setTimeout that clears that interval after 10 seconds

When operating the demo: 
  - run node server/demo/producer
  - this connects the producer, emits 10 messages, then disconnects
  - run the node command again to send more data, or
*/

// Define and connect a Kafka producer
const producer = kafka.producer();
await producer.connect();
console.log('producer connected');

// Function that returns random number
function randomNums() {
  return `${Math.floor(Math.random() * 1017)}`;
}

// Send method designates on which topic to send data (in this case, 'test-topic')
// Message payload sets the invocation of randomNums as the value
async function sendMessages() {
  await producer.send({
    topic: 'test-topic',
    messages: [{ value: randomNums() }],
  });
}

const dataStream = setInterval(async () => {
  await sendMessages();
}, 1000);

setTimeout(async () => {
  clearInterval(dataStream);
  await producer.disconnect();
  console.log('producer disconnected');
}, 10000);

export default producer;
