import { StudentsCourse } from '../students-course/students-course.entity';
export declare class StudentsCourseMessage {
    id: number;
    studentsCourseId: string;
    courseFieldName: string;
    courseFieldFormat: number;
    courseFieldContent: string;
    studentsCourse: StudentsCourse;
    createAt: Date;
    updateAt: Date;
}
