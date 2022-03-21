import { SendEmailService } from './send-email.service';
export declare class SendEmailController {
    private sendEmailService;
    constructor(sendEmailService: SendEmailService);
    sendEmailCode(data: any): Promise<string>;
    sendFindBackPwd(params: any): Promise<string>;
}
