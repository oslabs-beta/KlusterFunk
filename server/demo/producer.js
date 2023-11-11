import { producer } from './utility.js';

console.log('producer connected');
//comment dress up
function randomVal() {
  return `${Math.floor(Math.random() * 1017)}`;
}
async function action() {
  await producer.send({
    topic: 'test-topic', /// README DEPENDANT
    messages: [{ value: randomVal() }],
  });
}
const dataStream = setInterval(async () => {
  await action();
}, 1000);

// comment out for presentation

setTimeout(async () => {
  clearInterval(dataStream);
  await producer.disconnect();
  console.log('producer disconnected');
}, 10000);

export default producer;
