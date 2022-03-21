import { Repository } from 'typeorm';
import { StudentsCourse } from './students-course.entity';
export declare class StudentsCourseService {
    private readonly studentsCourseRepository;
    constructor(studentsCourseRepository: Repository<StudentsCourse>);
    create(body: any): Promise<StudentsCourse[]>;
    getAll(): Promise<StudentsCourse[]>;
    getById(query: any): Promise<StudentsCourse>;
    updateById(query: any): Promise<import("typeorm").UpdateResult>;
    getChapter(parmes: any): Promise<any>;
}
