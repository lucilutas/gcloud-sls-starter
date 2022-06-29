import { Promise } from "bluebird";
import { config } from "../../config";
import { publishToTopic } from "../../services/pubSub";

export const decompositionServiceWorker = async (data, dbModels) => {
  const { notificationType, targetAggregation } = data;

  const targetedUsers = await dbModels[targetAggregation.targetModel]
    .aggregate(targetAggregation.steps)
    .allowDiskUse(true)
    .exec();

  await Promise.map(
    targetedUsers,
    async (targetedUser) => {
      const topic = config.gcloud.emailNotificationServiceWorkerTopic;
      await publishToTopic({ notificationType, user: targetedUser }, topic);
    },
    { concurrency: 10 }
  );
};
