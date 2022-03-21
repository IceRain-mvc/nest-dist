import { StudentsCourse } from './students-course.entity';
import { StudentsCourseService } from './students-course.service';
export declare class StudentsCourseController {
    private readonly studentsCourseService;
    constructor(studentsCourseService: StudentsCourseService);
    create(body: any): Promise<StudentsCourse[]>;
    getAll(): Promise<StudentsCourse[]>;
    getById(query: any): Promise<StudentsCourse>;
    updateById(data: any): Promise<import("typeorm").UpdateResult>;
    getChapter(item: any): Promise<any>;
}
