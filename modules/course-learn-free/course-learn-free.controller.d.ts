import { CourseLearnFree } from './course-learn-free.entity';
import { CourseLearnFreeService } from './course-learn-free.service';
export declare class CourseLearnFreeController {
    private readonly courseLearnFreeService;
    constructor(courseLearnFreeService: CourseLearnFreeService);
    create(body: any): Promise<CourseLearnFree[]>;
    updataFree(data: any): Promise<CourseLearnFree[]>;
}
