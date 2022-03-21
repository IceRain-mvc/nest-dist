import { StudentsCourseMessage } from './students-course-message.entity';
import { StudentsCourseMessageService } from './students-course-message.service';
export declare class StudentsCourseMessageController {
    private readonly studentsCourseMessageService;
    constructor(studentsCourseMessageService: StudentsCourseMessageService);
    create(body: any): Promise<{
        info: string;
        res: string;
    }>;
    getByStudentsCourseId(query: any): Promise<StudentsCourseMessage[]>;
    getById(query: any): Promise<StudentsCourseMessage[]>;
    updateById(body: any): Promise<import("typeorm").UpdateResult>;
}
