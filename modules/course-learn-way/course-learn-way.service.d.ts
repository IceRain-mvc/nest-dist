import { Repository } from 'typeorm';
import { CourseLearnWay } from './course-learn-way.entity';
export declare class CourseLearnWayService {
    private readonly courseLearnWayRepository;
    constructor(courseLearnWayRepository: Repository<CourseLearnWay>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<"" | {
        msg: string;
        result: Promise<CourseLearnWay[]>;
    }>;
    getAll(): Promise<CourseLearnWay[]>;
}
