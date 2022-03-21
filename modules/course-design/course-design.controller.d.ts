import { CourseDesignService } from './course-design.service';
import { CourseDesign } from './course-design.entity';
export declare class CourseDesignController {
    private readonly CourseDesignService;
    constructor(CourseDesignService: CourseDesignService);
    getChapter(item: any): Promise<CourseDesign[]>;
    addMessage(item: any): Promise<CourseDesign[]>;
    deleteMessage(item: any): Promise<any>;
    recomposeMessage(item: any): Promise<void>;
    editChapterName(item: any): Promise<any>;
}
