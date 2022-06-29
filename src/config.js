export const config = {
  mongoDB: process.env.MONGO_DB,
  sendinblue: {
    key: process.env.SENDINBLUE_KEY,
    fromEmail: process.env.SENDINBLUE_FROM_EMAIL,
    fromName: process.env.SENDINBLUE_FROM_NAME,
  },
  gcloud: {
    emailNotificationServiceWorkerTopic:
      process.env.EMAIL_NOTIFICATION_SERVICE_WORKER_TOPIC,
  },
};
