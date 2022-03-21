import { ExamineeFillMessage } from '@/modules/examinee-fill-message/examinee-fill-message.entity';
import { Repository } from 'typeorm';
export declare class ExamineeFillMessageService {
    private readonly examineeFillMessageRepository;
    constructor(examineeFillMessageRepository: Repository<ExamineeFillMessage>);
    create(body: any, examId: any): Promise<string>;
    createExercise(body: any, examId: any): Promise<string>;
    deleteById(id: any): Promise<any>;
}
