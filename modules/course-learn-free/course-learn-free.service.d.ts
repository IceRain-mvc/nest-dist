import { Repository } from 'typeorm';
import { CourseLearnFree } from './course-learn-free.entity';
export declare class CourseLearnFreeService {
    private readonly courseLearnFreeRepository;
    constructor(courseLearnFreeRepository: Repository<CourseLearnFree>);
    create(body: any): Promise<CourseLearnFree[]>;
    getAll(): Promise<CourseLearnFree[]>;
    updataFree({ stillArr, createArr, delArr }: {
        stillArr: any;
        createArr: any;
        delArr: any;
    }): Promise<CourseLearnFree[]>;
}
