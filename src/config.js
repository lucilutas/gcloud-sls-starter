export const config = {
    mongoDB: process.env.MONGO_DB,
    sendinblue: {
        key: process.env.SENDINBLUE_KEY,
        fromEmail: process.env.SENDINBLUE_FROM_EMAIL,
        fromName: process.env.SENDINBLUE_FROM_NAME,
    },
};
