import mongoose from "mongoose";
import { config } from "../../config";
import { userSchema } from "./models/user";

export const setupAndGetMongoConnection = async (cachedDb) => {
  if (cachedDb) return Promise.resolve(cachedDb);
  return mongoose.createConnection(config.mongoDB).asPromise();
};

export const getMongoModels = (conn) => {
  const User = conn.model("User", userSchema);

  return { User };
};
