import { PaperMode } from '@/modules/paper-mode/paper-mode.entity';
import { Repository } from 'typeorm';
import { PaperModeRequireService } from '@/modules/paper-mode-require/paper-mode-require.service';
export declare class PaperModeService {
    private readonly paperModeRepository;
    private readonly paperModeRequireService;
    constructor(paperModeRepository: Repository<PaperMode>, paperModeRequireService: PaperModeRequireService);
    run(): Promise<{
        msg: string;
    }>;
    getAll(): Promise<PaperMode[]>;
    create(body: any): Promise<{
        msg: string;
        result: PaperMode[];
    }>;
}
