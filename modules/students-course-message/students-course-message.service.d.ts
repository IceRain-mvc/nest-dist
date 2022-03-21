import { Repository } from 'typeorm';
import { StudentsCourseMessage } from './students-course-message.entity';
import { StudentsCourseService } from '../students-course/students-course.service';
export declare class StudentsCourseMessageService {
    private readonly studentsCourseMessageRepository;
    private readonly studentsCourseService;
    constructor(studentsCourseMessageRepository: Repository<StudentsCourseMessage>, studentsCourseService: StudentsCourseService);
    create(body: any): Promise<{
        info: string;
        res: string;
    } | {
        info: string;
        res: any;
    }>;
    getByStudentsCourseId(query: any): Promise<StudentsCourseMessage[]>;
    getById(query: any): Promise<StudentsCourseMessage[]>;
    updateById(body: any): Promise<import("typeorm").UpdateResult>;
}
