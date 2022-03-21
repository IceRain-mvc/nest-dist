import { GradeConfigRequire } from '@/modules/grade-config-require/grade-config-require.entity';
import { Repository } from 'typeorm';
export declare class GradeConfigRequireService {
    private readonly gradeConfigRequireRepository;
    constructor(gradeConfigRequireRepository: Repository<GradeConfigRequire>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: GradeConfigRequire;
    }>;
}
