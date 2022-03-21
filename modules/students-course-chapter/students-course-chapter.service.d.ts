import { Repository } from 'typeorm';
import { StudentsCourseService } from '../students-course/students-course.service';
import { StudentsCourseChapter } from './students-course-chapter.entity';
export declare class StudentsCourseChapterService {
    private studentsCourseChapterRepository;
    private readonly studentsCourseService;
    constructor(studentsCourseChapterRepository: Repository<StudentsCourseChapter>, studentsCourseService: StudentsCourseService);
    create(body: any): Promise<{
        res: string;
    }>;
    getByStudentsCourseId(query: any): Promise<StudentsCourseChapter[]>;
    getById(query: any): Promise<StudentsCourseChapter[]>;
    updateById(query: any): Promise<import("typeorm").UpdateResult>;
}
