export declare class TestBatchAddSwargger {
    questionTypes: '我是题型';
    examContent: '试题内容';
    examTypes: '试题分类';
    okanswer: '我是正确答案';
    difficultyLevel: '我是难易度';
    gradeNum: 0;
    testOptions: Array<{
        options: '选择题选项';
        optionsContent: '选择题选项内容';
    }>;
    testGapFilling: Array<{
        gapFillingAnswer: '填空题答案';
    }>;
}
export declare class TestDeleteRepetitionSwargger {
    examContent: '试题内容';
    index: string;
}
export declare class TestBatchDeleteSwargger {
    id: string;
}
