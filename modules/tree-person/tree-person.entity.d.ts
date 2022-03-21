import { Exam } from '@/modules/exam/exam.entity';
import { Students } from '@/modules/students/students.entity';
import { TestBank } from '@/modules/testBank/testBank.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class TreePerson {
    constructor(title?: string);
    id: number;
    title: string;
    children: TreePerson[];
    parentId?: number;
    parent: TreePerson;
    exams: Exam[];
    students: Students[];
    testBank: TestBank[];
    exercises: Exercise[];
}
