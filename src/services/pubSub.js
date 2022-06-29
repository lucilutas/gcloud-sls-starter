import { PubSub } from "@google-cloud/pubsub";

const pubSub = new PubSub();

export const publishToTopic = async (message, topic) => {
  const messageBuffer = Buffer.from(JSON.stringify(message), "utf8");

  try {
    await pubSub.topic(topic).publishMessage({ data: messageBuffer });
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};
