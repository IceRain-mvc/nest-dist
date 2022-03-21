import { Repository } from 'typeorm';
import { TestBank } from './testBank.entity';
import { TreePersonService } from '@/modules/tree-person/tree-person.service';
export declare class TestBankService {
    private readonly treePersonService;
    private readonly testBankRepository;
    constructor(treePersonService: TreePersonService, testBankRepository: Repository<TestBank>);
    create(body: Partial<TestBank>): Promise<TestBank>;
    getPage(query: any): Promise<{
        msg: string;
        data: [TestBank[], number];
    } | {
        msg: string;
        data: (number | any[])[];
    }>;
    ImportExcelGetTestBank(exisTopic: any): Promise<{
        arr: any[];
        indexArr: any[];
    }>;
    ImportExcelAdd(body: any): Promise<{
        code: number;
        num: number;
        backArr: any[];
    }>;
    getExportTest(params: any): Promise<any[]>;
    removeOneData(id: string): Promise<boolean>;
    deleteRepetition(examBody: Partial<Array<{
        examContent: string;
        index: string;
    }>>): Promise<{
        code: number;
        errorData: any[];
        correctData: any[];
        msg: string;
    }>;
    batchDelete(testBody: Partial<Array<string>>): Promise<boolean>;
    searchRepetitionData(testData?: any[]): Promise<any[]>;
    batchAdd(examBody: any): Promise<any[]>;
    batchUpdate(testBody: any): Promise<boolean>;
    getOne(ids: any): Promise<TestBank>;
    upDateOne(upDataBody: any): Promise<TestBank>;
    upDateOneEdit(upDataBody: any): Promise<TestBank>;
    getQuestionsInStore(query: any): Promise<TestBank[]>;
    getQuestionList(query: any): Promise<TestBank[]>;
    getQuestionByList(list: any): Promise<any>;
    changeScoreValueList(body: any): Promise<{
        msg: string;
    }>;
    changeScoreValue(body: any): Promise<import("typeorm").UpdateResult>;
    getQuestionTypes(query: any): Promise<{
        noDifficulty: number;
        easy: number;
        medium: number;
        difficulty: number;
    }>;
    updateTestBank(body: any): Promise<void>;
    deleteStoreTest(id: any): Promise<{
        code: number;
        msg: string;
    }>;
    deleteStoreTestGroup(body: any): Promise<{
        msg: string;
        code: number;
    }>;
}
