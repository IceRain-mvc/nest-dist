import { StudentsCourse } from '../students-course/students-course.entity';
export declare class StudentsCourseChapter {
    id: number;
    studentsCourseId: string;
    sectionId: number;
    chapterName: string;
    sectionName: string;
    learnTime: number;
    learnProgress: number;
    createTime: Date;
    updateAt: Date;
    studentsCourse: StudentsCourse;
}
