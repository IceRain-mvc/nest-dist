declare class Dep {
    departId: number;
    title: string;
}
declare class Stu {
    id: string;
    studentName: string;
    password: string;
    studentNumber: string;
    avatar?: string;
    studentPhone: string;
    eMail: string;
    studentId: string;
    studentSex: number;
    studentState: string;
    remark: string;
    createTime: string;
    updateAt: string;
    treePerson: {
        title: string;
        id: number;
    };
}
declare class ExamineeFillMessages {
    titleName: string;
    formatRequire: string;
    mandatory: number;
    optionsValue?: string[];
}
export declare class UpdateExam {
    examId: string;
    examTitle: string;
    treeId: number;
    joinWay: number;
    examInstructions: string;
    examPassword?: string;
    openSignature: number;
    examineeFillMessage?: [ExamineeFillMessages];
    examineesAndDepartments?: [Stu | Dep];
}
export declare class CreateExam {
    examTitle: string;
    treeId: number;
    joinWay: number;
    examInstructions: string;
    examPassword?: string;
    openSignature: number;
    examineeFillMessage?: [ExamineeFillMessages];
    examineesAndDepartments?: [Stu | Dep];
}
export declare class ChangeExamTreeType {
    examId: string;
    id: number;
}
export declare class StarConfig {
    examId: string;
}
export declare class TimeConfig {
    examId: string;
    examTimeIdList: number[];
}
export declare class AnswerTimeConfig {
    examId: string;
    answerTimeIdList: number[];
}
export declare class TestTimes {
    examId: string;
    testTimesList: number[];
}
export declare class ExamConfigRequire {
    examId: string;
    anexamconfiRequire: number[];
}
declare class BaseSet {
    passingGrade: number;
    startDateTime: string;
    endDateTime: string;
    answerTime: number;
    answerTimes: number;
    limitAnswerSeconds: number | null;
    errorAnswers: number;
    publishResultTime: string | null;
    beforeFaceCertification: number;
    faceTimes: number;
    headPhone: string | null;
    tapOutTime: number;
    tapTimes: number;
    noOperationTime: number | null;
    limitAnswerTimes: number | null;
    allowSubmitTime: number;
    lateEntryTime: number;
    regressionGetResultAccount: number;
    passingMessage: string;
    noPassingMessage: string;
    passingHref: string;
    noPassingHref: string;
    fullMarks: number;
    integral: number;
}
declare class idObj {
    id: number;
}
declare class ExamConfigSelect {
    paperMode: idObj;
    paperModeRequires: number[];
    gradeConfig: idObj;
    gradeConfigRequires: number[];
    examConfigRequires: number[];
    answerEquipment: idObj;
    answerEquipmentRequires: number[];
    antiCheatingConfigs: number[];
    questionConfigs: number[];
}
export declare class SaveExamConfig {
    examId: string;
    id: number;
    gap: BaseSet;
    select: ExamConfigSelect;
}
export declare class ExamQrCode {
    examId: string;
    coder: string;
}
export declare class ExamCopy {
    examId: string;
    type: number;
}
export declare class ScoreConfig {
    examId: string;
    id: number;
    percentage: number;
}
export {};
