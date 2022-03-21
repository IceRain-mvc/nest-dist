import { GradeConfigService } from '@/modules/grade-config/grade-config.service';
import { GradeConfig } from '@/modules/grade-config/grade-config.entity';
export declare class GradeConfigController {
    private readonly gradeConfigService;
    constructor(gradeConfigService: GradeConfigService);
    getAllOptions(): Promise<GradeConfig[]>;
    create(body: any): Promise<{
        msg: string;
        result: GradeConfig;
    }>;
}
