import { AnalyseAnswerService } from './analyse-answer.service';
export declare class AnalyseAnswerController {
    private readonly analyseAnswerService;
    constructor(analyseAnswerService: AnalyseAnswerService);
    getExamData(query: any): Promise<[import("./analyse-answer-exam.entity").AnalyseAnswerExam[], number]>;
}
