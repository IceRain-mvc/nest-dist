import { GetScoreConfig } from '@/modules/get-score-config/get-score-config.entity';
import { Repository } from 'typeorm';
export declare class GetScoreConfigService {
    private readonly getScoreConfigRepository;
    constructor(getScoreConfigRepository: Repository<GetScoreConfig>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: GetScoreConfig[];
    }>;
}
