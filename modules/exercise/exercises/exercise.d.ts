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
export declare class UpdateExercise {
    exerciseId: string;
    exerciseTitle: string;
    treeId: number;
    joinWay: number;
    exerciseInstructions: string;
    exercisePassword?: string;
    openSignature: number;
    exerciseineeFillMessage?: [ExamineeFillMessages];
    exerciseineesAndDepartments?: [Stu | Dep];
}
export declare class CreateExercise {
    exerciseTitle: string;
    treeId: number;
    joinWay: number;
    exerciseInstructions: string;
    exercisePassword?: string;
    openSignature: number;
    exerciseineeFillMessage?: [ExamineeFillMessages];
    exerciseineesAndDepartments?: [Stu | Dep];
}
export declare class ChangeExamTreeType {
    exerciseId: string;
    id: number;
}
export declare class StarConfig {
    exerciseId: string;
}
export declare class TimeConfig {
    exerciseId: string;
    examTimeIdList: number[];
}
export declare class AnswerTimeConfig {
    exerciseId: string;
    answerTimeIdList: number[];
}
export declare class TestTimes {
    exerciseId: string;
    testTimesList: number[];
}
export declare class ExamConfigRequire {
    exerciseId: string;
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
declare class ExerciseConfigSelect {
    paperMode: idObj;
    paperModeRequires: number[];
    gradeConfig: idObj;
    gradeConfigRequires: number[];
    exerciseConfigRequires: number[];
    answerEquipment: idObj;
    answerEquipmentRequires: number[];
    antiCheatingConfigs: number[];
    questionConfigs: number[];
}
export declare class SaveExerciseConfig {
    exerciseId: string;
    id: number;
    gap: BaseSet;
    select: ExerciseConfigSelect;
}
export {};
