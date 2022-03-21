import { StudentsCourseChapterService } from './students-course-chapter.service';
import { StudentsCourseChapter } from './students-course-chapter.entity';
export declare class StudentsCourseChapterController {
    private readonly studentsCourseChapterService;
    constructor(studentsCourseChapterService: StudentsCourseChapterService);
    creatDate(createCatDto: any): Promise<{
        res: string;
    }>;
    getByStudentsCourseId(query: any): Promise<StudentsCourseChapter[]>;
    getById(query: any): Promise<StudentsCourseChapter[]>;
    updateById(data: any): Promise<import("typeorm").UpdateResult>;
}
