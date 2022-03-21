import { ExamineeFillMessageService } from '@/modules/examinee-fill-message/examinee-fill-message.service';
export declare class ExamineeFillMessageController {
    private readonly examineeFillMessageService;
    constructor(examineeFillMessageService: ExamineeFillMessageService);
    create(body: any, examId: any): Promise<string>;
}
