import { Repository } from 'typeorm';
import { Students } from './students.entity';
import { TreePerson } from '@/modules/tree-person/tree-person.entity';
import { TreePersonService } from '@/modules/tree-person/tree-person.service';
export declare class StudentsService {
    private studentsRepository;
    private treePersonService;
    constructor(studentsRepository: Repository<Students>, treePersonService: TreePersonService);
    create(studentsBody: any): Promise<Students[]>;
    getAll(query: any): Promise<{
        msg: string;
        data?: Partial<[Students[], number]>;
    }>;
    getOne(id: any): Promise<Students | undefined>;
    getFindByStudentNumber(query: any): Promise<boolean>;
    update(query: any): Promise<import("typeorm").UpdateResult>;
    findTrePersonTitle(query: any): Promise<TreePerson>;
    getTreePersonTitleToId(body: any): Promise<TreePerson>;
    updateNumber(query: any): Promise<{
        info: string;
    }>;
    findReturnImport(query: any): Promise<{
        list: any[];
        data: any[];
    }>;
    deleteById(id: string): Promise<any>;
    batchDel(query: any): Promise<void>;
    addImportData(query: any): Promise<void>;
    batchChange(query: any): Promise<{
        res: string;
    }>;
    getStudentsByPartId(id: any): Promise<string[]>;
    getDepartmentMessage(id: any): Promise<TreePerson>;
    selectExamineeExist(query: {
        stuStr: string;
    }): Promise<{
        msg: string | Students;
        code: number;
    }[]>;
    getExamineeMessage(query: any): Promise<Students[]>;
    getstudentdata(studentNumber: any): Promise<Students>;
    getFindByStudentN(query: any): Promise<{
        numberFlag: boolean;
        res: Students;
        context?: undefined;
        passFlag?: undefined;
        wordcontext?: undefined;
        stateFlag?: undefined;
        statecontext?: undefined;
        scussFlag?: undefined;
        studentName?: undefined;
        eMail?: undefined;
        studentNumber?: undefined;
        studentId?: undefined;
        studentTree?: undefined;
    } | {
        numberFlag: number;
        context: string;
        res?: undefined;
        passFlag?: undefined;
        wordcontext?: undefined;
        stateFlag?: undefined;
        statecontext?: undefined;
        scussFlag?: undefined;
        studentName?: undefined;
        eMail?: undefined;
        studentNumber?: undefined;
        studentId?: undefined;
        studentTree?: undefined;
    } | {
        passFlag: number;
        wordcontext: string;
        numberFlag?: undefined;
        res?: undefined;
        context?: undefined;
        stateFlag?: undefined;
        statecontext?: undefined;
        scussFlag?: undefined;
        studentName?: undefined;
        eMail?: undefined;
        studentNumber?: undefined;
        studentId?: undefined;
        studentTree?: undefined;
    } | {
        stateFlag: number;
        statecontext: string;
        numberFlag?: undefined;
        res?: undefined;
        context?: undefined;
        passFlag?: undefined;
        wordcontext?: undefined;
        scussFlag?: undefined;
        studentName?: undefined;
        eMail?: undefined;
        studentNumber?: undefined;
        studentId?: undefined;
        studentTree?: undefined;
    } | {
        scussFlag: boolean;
        context: string;
        studentName: string;
        eMail: string;
        studentNumber: string;
        studentId: string;
        studentTree: string;
        numberFlag?: undefined;
        res?: undefined;
        passFlag?: undefined;
        wordcontext?: undefined;
        stateFlag?: undefined;
        statecontext?: undefined;
    }>;
    studentUpdate(query: any): Promise<import("typeorm").UpdateResult>;
    getAllStudentsData(): Promise<number>;
}
