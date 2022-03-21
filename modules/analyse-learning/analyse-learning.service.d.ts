import { Repository } from 'typeorm';
import { Analyselearning } from './analyse-learning.entity';
import { CourseService } from '@/modules/course/course.service';
export declare class AnalyseLearningService {
    private readonly analyselearning;
    private readonly courseService;
    constructor(analyselearning: Repository<Analyselearning>, courseService: CourseService);
    getAll(params: any): Promise<any[]>;
}
