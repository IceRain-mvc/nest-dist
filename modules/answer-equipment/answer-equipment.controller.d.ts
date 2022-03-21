import { AnswerEquipmentService } from '@/modules/answer-equipment/answer-equipment.service';
import { AnswerEquipment } from '@/modules/answer-equipment/answer-equipment.entity';
export declare class AnswerEquipmentController {
    private readonly answerEquipmentService;
    constructor(answerEquipmentService: AnswerEquipmentService);
    getAll(): Promise<AnswerEquipment[]>;
    create(body: any): Promise<{
        msg: string;
        result: AnswerEquipment;
    }>;
}
