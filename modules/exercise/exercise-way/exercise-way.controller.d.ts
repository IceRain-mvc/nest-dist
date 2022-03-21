import { ExerciseWayService } from './exercise-way.service';
import { ExerciseWay } from './exercise-way.entity';
export declare class ExerciseWayController {
    private readonly participationWayService;
    constructor(participationWayService: ExerciseWayService);
    linked(): Promise<ExerciseWay[]>;
}
