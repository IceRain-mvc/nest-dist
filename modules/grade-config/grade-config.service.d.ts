import { GradeConfig } from '@/modules/grade-config/grade-config.entity';
import { Repository } from 'typeorm';
import { GradeConfigRequireService } from '@/modules/grade-config-require/grade-config-require.service';
export declare class GradeConfigService {
    private readonly gradeConfigRepository;
    private readonly gradeService;
    constructor(gradeConfigRepository: Repository<GradeConfig>, gradeService: GradeConfigRequireService);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: GradeConfig;
    }>;
    getAllOptions(): Promise<GradeConfig[]>;
}
