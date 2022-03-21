import { ParticipationWayService } from '@/modules/participation-way/participation-way.service';
import { ParticipationWay } from '@/modules/participation-way/participation-way.entity';
export declare class ParticipationWayController {
    private readonly participationWayService;
    constructor(participationWayService: ParticipationWayService);
    create(body: any): Promise<{
        msg: string;
        result: Promise<ParticipationWay[]>;
    }>;
    findAll(): Promise<ParticipationWay[]>;
}
