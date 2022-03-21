import { AntiCheatingConfig } from '@/modules/anti-cheating-config/anti-cheating-config.entity';
import { Repository } from 'typeorm';
export declare class AntiCheatingConfigService {
    private readonly AntiCheatingConfigRepository;
    constructor(AntiCheatingConfigRepository: Repository<AntiCheatingConfig>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: AntiCheatingConfig[];
    }>;
    getAllList(): Promise<AntiCheatingConfig[]>;
}
