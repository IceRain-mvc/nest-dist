import { ExamConfigRequireService } from '@/modules/exam-config-require/exam-config-require.service';
import { ExamConfigRequire } from '@/modules/exam-config-require/exam-config-require.entity';
export declare class ExamConfigRequireController {
    private readonly examConfigRequireService;
    constructor(examConfigRequireService: ExamConfigRequireService);
    getAll(): Promise<ExamConfigRequire[]>;
    create(body: any): Promise<{
        msg: string;
        result: ExamConfigRequire;
    }>;
}
