import { ExerciseWay } from './exercise-way.entity';
import { Repository } from 'typeorm';
export declare class ExerciseWayService {
    private readonly participationWayRepository;
    constructor(participationWayRepository: Repository<ExerciseWay>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: Promise<ExerciseWay[]>;
    }>;
    findAll(): Promise<ExerciseWay[]>;
}
