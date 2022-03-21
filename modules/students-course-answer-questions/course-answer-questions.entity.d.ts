export declare class AnswerQuestions {
    static comparePassword(password0: any, password1: any): Promise<any>;
    static encryptPassword(password: any): any;
    id: string;
    studentsId: string;
    ASMessage: string;
    ASState?: string;
    courseId?: string;
    createTime: Date;
}
