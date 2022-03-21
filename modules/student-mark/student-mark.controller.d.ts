import { StudentsMarkService } from './student-mark.service';
import { StudentsMark } from './student-mark.entity';
export declare class StudentsMarkController {
    private readonly studentsMarkService;
    constructor(studentsMarkService: StudentsMarkService);
    create(body: any): Promise<{
        msg: string;
        state: boolean;
        id: string;
    } | {
        msg: string;
        state: boolean;
        id?: undefined;
    }>;
    getStudentMarkById(query: any): Promise<[StudentsMark[], number]>;
    findOneStudentMarkById(query: any): Promise<StudentsMark>;
}
