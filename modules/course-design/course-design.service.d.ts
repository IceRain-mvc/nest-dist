import { CourseDesign } from './course-design.entity';
import { Repository } from 'typeorm';
export declare class CourseDesignService {
    private readonly courseRepository;
    constructor(courseRepository: Repository<CourseDesign>);
    getChapter(parmes: any): Promise<CourseDesign[]>;
    addMessage(parmes: any): Promise<CourseDesign[]>;
    deleteMessage(parmes: any): Promise<any>;
    recomposeMessage(parmes: any): Promise<void>;
    editChapterName(parmes: any): Promise<any>;
}
