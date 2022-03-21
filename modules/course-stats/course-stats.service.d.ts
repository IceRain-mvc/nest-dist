import { Repository } from 'typeorm';
import { StudentsCourse } from '../students-course/students-course.entity';
import { CourseStats } from './course-stats.entity';
export declare class CourseStatsService {
    private readonly courseStatsRepository;
    constructor(courseStatsRepository: Repository<CourseStats>);
    create(examBody: Partial<CourseStats>): Promise<CourseStats>;
    getStudyStats(params: any): Promise<[StudentsCourse[], number]>;
    getComment(params: any): Promise<string>;
    getAbsentAll(params: any): Promise<any[]>;
    getAbsent(params: any): Promise<(number | any[])[]>;
    getStatsAll(params: any): Promise<StudentsCourse[]>;
    getExportAbsent(params: any): Promise<any[]>;
    getStatistics(params: {
        courseId: string;
    }): Promise<{
        stats_already: number;
        stats_complete: number;
    }[]>;
}
