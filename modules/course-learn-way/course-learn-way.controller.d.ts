import { CourseLearnWay } from './course-learn-way.entity';
import { CourseLearnWayService } from './course-learn-way.service';
export declare class CourseLearnWayController {
    private readonly courseLearnWayService;
    constructor(courseLearnWayService: CourseLearnWayService);
    getAll(): Promise<CourseLearnWay[]>;
}
