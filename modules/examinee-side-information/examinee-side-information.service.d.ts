import { Repository } from 'typeorm';
import { ExamineeSideInformation } from './examinee-side-information.entity';
export declare class ExamineeSideInformationService {
    private readonly examineeSideInformationRepository;
    constructor(examineeSideInformationRepository: Repository<ExamineeSideInformation>);
    createAppMessage(body: any): Promise<Partial<ExamineeSideInformation[]>>;
    updataAppMessage(params: any): Promise<import("typeorm").UpdateResult>;
    getAppMessage(): Promise<ExamineeSideInformation[]>;
}
