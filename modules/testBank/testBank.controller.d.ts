import { TestBank } from './testBank.entity';
import { TestBankService } from './testBank.service';
export declare class TestBankController {
    private readonly testBankService;
    constructor(testBankService: TestBankService);
    create(testBankBody: any): Promise<TestBank>;
    getPage(query: any): Promise<{
        msg: string;
        data: [TestBank[], number];
    } | {
        msg: string;
        data: (number | any[])[];
    }>;
    ImportExcelGetTestBank(params: any): Promise<{
        arr: any[];
        indexArr: any[];
    }>;
    getExportTest(params: any): Promise<any[]>;
    ImportExcelAdd(body: any): Promise<{
        code: number;
        num: number;
        backArr: any[];
    }>;
    batchDelete(testBody: any): Promise<boolean>;
    deleteStoreTestGroup(body: any): Promise<{
        msg: string;
        code: number;
    }>;
    removeOneData(id: string): Promise<boolean>;
    searchRepetitionData(testData: any): Promise<any[]>;
    BatchAddData(testBody: any): Promise<any[]>;
    deleteRepetition(testBody: any): Promise<{
        code: number;
        errorData: any[];
        correctData: any[];
        msg: string;
    }>;
    batchUpdate(testBody: any): Promise<boolean>;
    upDateOne(upDataBody: any): Promise<TestBank>;
    getOneDate(dataId: any): Promise<TestBank>;
    getQuestionsInStore(query: any): Promise<TestBank[]>;
    getQuestionList(query: any): Promise<TestBank[]>;
    getQuestionTypes(query: any): Promise<{
        noDifficulty: number;
        easy: number;
        medium: number;
        difficulty: number;
    }>;
    deleteStoreTest(id: any): Promise<{
        code: number;
        msg: string;
    }>;
}
