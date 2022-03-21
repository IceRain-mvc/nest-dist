import { AnalyseGrade } from './analyse-grade.entity';
import { AnalyseGradeService } from './analyse-grade.service';
export declare class AnalyseGradeController {
    private readonly analyseGradeService;
    constructor(analyseGradeService: AnalyseGradeService);
    create(data: any): Promise<AnalyseGrade[]>;
    findData(parmas: any): Promise<any[]>;
}
