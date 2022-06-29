import { sendMail } from "../../services/sendinblue";

export const emailNotificationServiceWorker = async (data) => {
  const { user, notificationType } = data;

  try {
    const response = await sendMail({
      to: {
        email: user.email,
        name: user.name,
      },
      subject: notificationType,
      content: `Welcome to my <strong>Hi5</strong> page`,
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
