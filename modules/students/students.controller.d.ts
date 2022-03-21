import { StudentsService } from './students.service';
import { Students } from './students.entity';
import { TreePerson } from '@/modules/tree-person/tree-person.entity';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    creatDate(createCatDto: any): Promise<Students[]>;
    getAll(query: any): Promise<{
        msg: string;
        data?: [Students[]?, number?];
    }>;
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
    getExamineeMessage(query: any): Promise<Students[]>;
    selectExamineeExist(query: {
        stuStr: string;
    }): Promise<{
        msg: string | Students;
        code: number;
    }[]>;
    findByStudentNumber(query: any): Promise<boolean>;
    getAllStudentsData(): Promise<number>;
    findOne(id: string): Promise<Students>;
    update(updateCatDto: any): Promise<import("typeorm").UpdateResult>;
    updateNumber(updateCatDto: any): Promise<{
        info: string;
    }>;
    findReturnImport(updateCatDto: any): Promise<{
        list: any[];
        data: any[];
    }>;
    remove(id: string): Promise<any>;
    batchDel(id: string): Promise<void>;
    addImportData(updateCatDto: any): Promise<void>;
    getTreePersonTitleToId(updateCatDto: any): Promise<TreePerson>;
    batchChange(query: any): Promise<{
        res: string;
    }>;
    getStudentsByPartId(id: number): Promise<string[]>;
    studentUpdate(updateCatDto: any): Promise<import("typeorm").UpdateResult>;
}
