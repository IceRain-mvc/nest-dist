import { CourseSection } from './course-section.entity';
import { CourseSectionService } from './course-section.service';
interface ICorseUploadCreate {
    msg: string;
    code: boolean;
}
interface ICorseDeleteData {
    id?: number;
    chapterId?: string;
}
export declare class CourseSectionController {
    private readonly CourseSectionService;
    constructor(CourseSectionService: CourseSectionService);
    createCourseSection(body: any): Promise<ICorseUploadCreate>;
    getChapter(data: any): Promise<CourseSection[]>;
    deChapterData(data: ICorseDeleteData): Promise<void>;
    redactChapter(data: any): Promise<void>;
    getCourseSections(data: any): Promise<CourseSection>;
}
export {};
