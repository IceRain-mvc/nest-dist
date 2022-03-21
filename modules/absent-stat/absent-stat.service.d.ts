import { Repository } from 'typeorm';
import { AbsentStat } from './absent-stat.entity';
import { ExamService } from '@/modules/exam/exam.service';
export declare class AbsentStatService {
    private readonly absentStatRepository;
    private readonly examService;
    constructor(absentStatRepository: Repository<AbsentStat>, examService: ExamService);
    create(achBody: Partial<AbsentStat>): Promise<AbsentStat>;
    getAll(params: any): Promise<[import("../exam/exam.entity").Exam[], number]>;
    getAbsentee(id: any): Promise<AbsentStat>;
}
