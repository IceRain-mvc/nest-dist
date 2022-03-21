import { MailerService } from '@nestjs-modules/mailer';
export declare class SendEmailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendEmailCode(students: any, textBefore: any, coder: any, textAfter: any): Promise<string>;
    sendEmail(user: any, textBefore: any, coder: any, textAfter: any): void;
    sendFindBackPwd(params: any): Promise<string>;
}
