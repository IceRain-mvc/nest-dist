import { CourseStats } from './course-stats.entity';
import { CourseStatsService } from './course-stats.service';
export declare class CourseStatsController {
    private readonly courseStatsService;
    constructor(courseStatsService: CourseStatsService);
    create(examBody: any): Promise<CourseStats>;
    getStudyStats(params: any): Promise<[import("../students-course/students-course.entity").StudentsCourse[], number]>;
    getComment(params: any): Promise<string>;
    getAbsent(params: any): Promise<(number | any[])[]>;
    getStatsAll(params: any): Promise<import("../students-course/students-course.entity").StudentsCourse[]>;
    getExportAbsent(params: any): Promise<any[]>;
    getStatistics(params: any): Promise<{
        stats_already: number;
        stats_complete: number;
    }[]>;
}
