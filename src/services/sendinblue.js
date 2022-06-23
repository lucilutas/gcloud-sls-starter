import SibApiV3Sdk from 'sib-api-v3-sdk';
import { config } from '../config';

export const sendMail = ({to, subject, content}) => {
    try {
        const defaultClient = SibApiV3Sdk.ApiClient.instance;
        const apiKey = defaultClient.authentications['api-key'];
        apiKey.apiKey = config.sendinblue.key;

        const api = new SibApiV3Sdk.TransactionalEmailsApi();
        const smtpEmail = new SibApiV3Sdk.SendSmtpEmail();
        smtpEmail.subject = subject;
        smtpEmail.htmlContent = content.toString();
        smtpEmail.sender = {
            name: config.sendinblue.fromName,
            email: config.sendinblue.fromEmail,
        };
        smtpEmail.to = [{ name: to.name, email: to.email }];

        return api.sendTransacEmail(smtpEmail).then(
            () => ({
                code: 'success',
            }),
            (error) => {
                console.error(error);
                return {
                    code: 'failed',
                };
            },
        );
    } catch (error) {
        return {
            code: 'failed',
            error,
        };
    }
};
