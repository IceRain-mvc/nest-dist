import { PaperModeService } from '@/modules/paper-mode/paper-mode.service';
import { PaperMode } from '@/modules/paper-mode/paper-mode.entity';
export declare class PaperModeController {
    private readonly paperModeService;
    constructor(paperModeService: PaperModeService);
    getAll(): Promise<PaperMode[]>;
    create(body: any): Promise<{
        msg: string;
        result: PaperMode[];
    }>;
}
