import { CourseLearnChoose } from './course-learn-choose.entity';
import { CourseLearnChooseService } from './course-learn-choose.service';
export declare class CourseLearnChooseController {
    private readonly courseLearnChooseService;
    constructor(courseLearnChooseService: CourseLearnChooseService);
    create(body: any): Promise<CourseLearnChoose[]>;
    updataFree(data: any): Promise<CourseLearnChoose[]>;
}
