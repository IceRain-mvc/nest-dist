import { AntiCheatingConfigService } from '@/modules/anti-cheating-config/anti-cheating-config.service';
import { AntiCheatingConfig } from '@/modules/anti-cheating-config/anti-cheating-config.entity';
export declare class AntiCheatingConfigController {
    private readonly antiCheatingConfigService;
    constructor(antiCheatingConfigService: AntiCheatingConfigService);
    getAllList(): Promise<AntiCheatingConfig[]>;
    create(body: any): Promise<{
        msg: string;
        result: AntiCheatingConfig[];
    }>;
}
