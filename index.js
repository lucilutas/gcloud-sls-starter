import "regenerator-runtime/runtime.js";
import {
  decompositionServiceWorker,
  emailNotificationServiceWorker,
} from "./src/functions";
import {
  getMongoModels,
  setupAndGetMongoConnection,
} from "./src/repository/mongo";

let connection = null;
let dbModels = null;

module.exports.decompositionServiceWorker = async (message, context) => {
  connection = await setupAndGetMongoConnection(connection).catch((err) => {
    console.error("<< Mongo connection error >>", err);
  });

  if (!dbModels) {
    dbModels = getMongoModels(connection);
  }

  const data = JSON.parse(Buffer.from(message.data, "base64").toString());

  console.log(JSON.stringify(data));

  await decompositionServiceWorker(data, dbModels);
};

module.exports.emailNotificationServiceWorker = async (message, context) => {
  const data = JSON.parse(Buffer.from(message.data, "base64").toString());

  await emailNotificationServiceWorker(data);
};
