import { Course } from '@/modules/course/course.entity';
import { Repository } from 'typeorm';
interface CreateBodyInterface {
    courseObj: object;
    courseFree: object | Array<any>;
}
export declare class CourseService {
    private readonly courseRepository;
    constructor(courseRepository: Repository<Course>);
    create(body: CreateBodyInterface): Promise<Course>;
    getAll(params: any): Promise<[Course[], number]>;
    editStar(id: any): Promise<{
        message: string;
    }>;
    addStar(id: any): Promise<{
        message: string;
    }>;
    deleteRecycle(id: any): Promise<{
        message: string;
    }>;
    recoverCourse(id: any): Promise<{
        message: string;
    }>;
    deleteColumn(id: any): Promise<{
        message: string;
    }>;
    getCourseItem(query: any): Promise<Course>;
    compileCourse({ courseId, data }: {
        courseId: any;
        data: any;
    }): Promise<import("typeorm").UpdateResult>;
    getBatchStudent(query: any): Promise<{
        succeedArr: any[];
        failArr: any[];
    }>;
    getStudentItem(query: any): Promise<any[]>;
    changeCourseType(body: any): Promise<import("typeorm").UpdateResult>;
    countList(): Promise<{
        now: number;
        will: number;
        finish: number;
    }>;
    autoDelete(): Promise<{
        message: string;
    }>;
}
export {};
