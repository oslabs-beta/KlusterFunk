import { producer } from "./utility.js";

console.log("producer connected");

function randomVal() {
  return `${Math.floor(Math.random() * 1017)}`;
}
async function action() {
  await producer.send({
    topic: "test-topic",
    messages: [{ value: randomVal() }],
  });
}
const dataStream = setInterval(async () => {
  await action();
}, 1000);

setTimeout(async () => {
  clearInterval(dataStream);
  await producer.disconnect();
  console.log("producer disconnected");
}, 10000);

export default producer;
