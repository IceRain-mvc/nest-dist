import { StudentsCourseChapter } from '@/modules/students-course-chapter/students-course-chapter.entity';
import { StudentsCourseMessage } from '@/modules/students-course-message/students-course-message.entity';
import { Students } from '@/modules/students/students.entity';
import { Course } from '@/modules/course/course.entity';
export declare class StudentsCourse {
    id: string;
    studentsId: string;
    treePerson: string;
    courseId: number;
    learnNumber: number;
    learnTime: number;
    learnResult: number;
    learnProgress: number;
    learnFacility: number;
    learnState: number;
    studentsCourse_createTime: Date;
    studentsCourse_updateAt: Date;
    studentsCourseChapter: StudentsCourseChapter[];
    studentsCourseMessage: StudentsCourseMessage[];
    students: Students;
    course: Course;
}
