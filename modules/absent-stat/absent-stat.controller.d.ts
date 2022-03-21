import { AbsentStatService } from './absent-stat.service';
import { AbsentStat } from './absent-stat.entity';
export declare class AbsentStatController {
    private readonly absentStatService;
    constructor(absentStatService: AbsentStatService);
    create(body: any): Promise<AbsentStat>;
    getAll(params: any): Promise<[import("../exam/exam.entity").Exam[], number]>;
}
