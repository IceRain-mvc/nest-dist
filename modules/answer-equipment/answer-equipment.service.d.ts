import { AnswerEquipment } from '@/modules/answer-equipment/answer-equipment.entity';
import { Repository } from 'typeorm';
import { AnswerEquipmentRequireService } from '@/modules/answer-equipment-require/answer-equipment-require.service';
export declare class AnswerEquipmentService {
    private readonly answerEquipmentRepository;
    private readonly answerService;
    constructor(answerEquipmentRepository: Repository<AnswerEquipment>, answerService: AnswerEquipmentRequireService);
    run(): Promise<{
        msg: string;
    }>;
    getAll(): Promise<AnswerEquipment[]>;
    create(body: any): Promise<{
        msg: string;
        result: AnswerEquipment;
    }>;
}
