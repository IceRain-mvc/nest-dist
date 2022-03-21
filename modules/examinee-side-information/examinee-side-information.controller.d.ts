import { ExamineeSideInformationService } from './examinee-side-information.service';
import { ExamineeSideInformation } from './examinee-side-information.entity';
export declare class ExamineeSideInformationController {
    private readonly examineeSideInformationService;
    constructor(examineeSideInformationService: ExamineeSideInformationService);
    createAppMessage(body: any): Promise<ExamineeSideInformation[]>;
    updataAppMessage(body: any): Promise<import("typeorm").UpdateResult>;
    getAppMessage(): Promise<ExamineeSideInformation[]>;
}
