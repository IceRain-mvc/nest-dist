import { CourseService } from '@/modules/course/course.service';
import { Course } from '@/modules/course/course.entity';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    create(body: any): Promise<Course>;
    getAll(params: any): Promise<[Course[], number]>;
    editStar(id: string, updateStarDto: any): Promise<{
        message: string;
    }>;
    addStar(id: string, updateStarDto: any): Promise<{
        message: string;
    }>;
    deleteRecycle(id: string, updateStarDto: any): Promise<{
        message: string;
    }>;
    recoverCourse(id: string, updateStarDto: any): Promise<{
        message: string;
    }>;
    deleteColumn(id: string, updateStarDto: any): Promise<{
        message: string;
    }>;
    getCourseItem(params: any): Promise<Course>;
    compileCourse(fromObj: any): Promise<import("typeorm").UpdateResult>;
    changeCourseType(body: any): Promise<import("typeorm").UpdateResult>;
    getBatchStudent(obj: any): Promise<{
        succeedArr: any[];
        failArr: any[];
    }>;
    getStudentItem(obj: any): Promise<any[]>;
    countList(): Promise<{
        now: number;
        will: number;
        finish: number;
    }>;
    autoDelete(): Promise<{
        message: string;
    }>;
}
