import { TreePerson } from '../tree-person/tree-person.entity';
import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
import { StudentsCourse } from '../students-course/students-course.entity';
export declare class Students {
    id: string;
    studentName: string;
    password?: string;
    studentNumber: string;
    avatar?: string;
    studentPhone?: string;
    eMail?: string;
    studentId?: string;
    studentSex?: number;
    studentState?: string;
    remark?: string;
    createTime: Date;
    updateAt: Date;
    treePerson: TreePerson;
    exams: Exam[];
    exercises: Exercise[];
    studentsCourse: StudentsCourse[];
}
