import { AnswerEquipmentRequire } from '@/modules/answer-equipment-require/answer-equipment-require.entity';
import { Repository } from 'typeorm';
export declare class AnswerEquipmentRequireService {
    private readonly answerEquipmentRequireRepository;
    constructor(answerEquipmentRequireRepository: Repository<AnswerEquipmentRequire>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: AnswerEquipmentRequire;
    }>;
}
