import { ParticipationWay } from '@/modules/participation-way/participation-way.entity';
import { Repository } from 'typeorm';
export declare class ParticipationWayService {
    private readonly participationWayRepository;
    constructor(participationWayRepository: Repository<ParticipationWay>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: Promise<ParticipationWay[]>;
    }>;
    findAll(): Promise<ParticipationWay[]>;
}
