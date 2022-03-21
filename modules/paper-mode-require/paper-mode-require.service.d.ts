import { PaperModeRequire } from '@/modules/paper-mode-require/paper-mode-require.entity';
import { Repository } from 'typeorm';
export declare class PaperModeRequireService {
    private readonly paperModeRequireRepository;
    constructor(paperModeRequireRepository: Repository<PaperModeRequire>);
    runRequire(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: PaperModeRequire;
    }>;
}
