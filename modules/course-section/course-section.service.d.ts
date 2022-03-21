import { Repository } from 'typeorm';
import { CourseSection } from './course-section.entity';
interface create {
    msg: string;
    code: boolean;
}
interface ICorseDeleteData {
    id?: number;
    chapterId?: string;
}
export declare class CourseSectionService {
    private readonly CourseSectionRepository;
    constructor(CourseSectionRepository: Repository<CourseSection>);
    create(body: any): Promise<create>;
    getChapter(data: any): Promise<CourseSection[]>;
    deChapterData(data: ICorseDeleteData): Promise<void>;
    redactChapter(data: any): Promise<void>;
    getCourseSections(data: any): Promise<CourseSection>;
}
export {};
