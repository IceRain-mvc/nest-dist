"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const tree_person_module_1 = require("./modules/tree-person/tree-person.module");
const tree_person_entity_1 = require("./modules/tree-person/tree-person.entity");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const user_entity_1 = require("./modules/user/user.entity");
const text_set_module_1 = require("./modules/text-set/text-set.module");
const course_entity_1 = require("./modules/course/course.entity");
const course_learn_choose_entity_1 = require("./modules/course-learn-choose/course-learn-choose.entity");
const course_learn_free_entity_1 = require("./modules/course-learn-free/course-learn-free.entity");
const course_design_entity_1 = require("./modules/course-design/course-design.entity");
const course_section_entity_1 = require("./modules/course-section/course-section.entity");
const course_learn_way_entity_1 = require("./modules/course-learn-way/course-learn-way.entity");
const course_module_1 = require("./modules/course/course.module");
const course_learn_choose_module_1 = require("./modules/course-learn-choose/course-learn-choose.module");
const course_learn_free_module_1 = require("./modules/course-learn-free/course-learn-free.module");
const course_design_module_1 = require("./modules/course-design/course-design.module");
const course_section_module_1 = require("./modules/course-section/course-section.module");
const course_learn_way_module_1 = require("./modules/course-learn-way/course-learn-way.module");
const course_stats_entity_1 = require("./modules/course-stats/course-stats.entity");
const course_stats_module_1 = require("./modules/course-stats/course-stats.module");
const testBank_entity_1 = require("./modules/testBank/testBank.entity");
const test_options_entity_1 = require("./modules/test-options/test-options.entity");
const test_questions_entity_1 = require("./modules/test-questions/test-questions.entity");
const test_gap_filling_entity_1 = require("./modules/test-gap-filling/test-gap-filling.entity");
const testBank_module_1 = require("./modules/testBank/testBank.module");
const test_options_module_1 = require("./modules/test-options/test-options.module");
const test_questions_module_1 = require("./modules/test-questions/test-questions.module");
const test_gap_filling_module_1 = require("./modules/test-gap-filling/test-gap-filling.module");
const operation_log_module_1 = require("./modules/operation-log/operation-log.module");
const operation_log_entity_1 = require("./modules/operation-log/operation-log.entity");
const examinee_side_information_entity_1 = require("./modules/examinee-side-information/examinee-side-information.entity");
const examinee_side_information_module_1 = require("./modules/examinee-side-information/examinee-side-information.module");
const students_entity_1 = require("./modules/students/students.entity");
const students_module_1 = require("./modules/students/students.module");
const student_mark_entity_1 = require("./modules/student-mark/student-mark.entity");
const student_mark_module_1 = require("./modules/student-mark/student-mark.module");
const students_exam_result_entity_1 = require("./modules/students-exam-result/students-exam-result.entity");
const students_exam_result_module_1 = require("./modules/students-exam-result/students-exam-result.module");
const students_course_entity_1 = require("./modules/students-course/students-course.entity");
const students_course_module_1 = require("./modules/students-course/students-course.module");
const students_course_message_entity_1 = require("./modules/students-course-message/students-course-message.entity");
const students_course_message_module_1 = require("./modules/students-course-message/students-course-message.module");
const students_course_chapter_entity_1 = require("./modules/students-course-chapter/students-course-chapter.entity");
const students_course_chapter_module_1 = require("./modules/students-course-chapter/students-course-chapter.module");
const exam_entity_1 = require("./modules/exam/exam.entity");
const paper_mode_entity_1 = require("./modules/paper-mode/paper-mode.entity");
const paper_mode_require_entity_1 = require("./modules/paper-mode-require/paper-mode-require.entity");
const exam_config_require_entity_1 = require("./modules/exam-config-require/exam-config-require.entity");
const question_config_entity_1 = require("./modules/question-config/question-config.entity");
const anti_cheating_config_entity_1 = require("./modules/anti-cheating-config/anti-cheating-config.entity");
const answer_equipment_entity_1 = require("./modules/answer-equipment/answer-equipment.entity");
const answer_equipment_require_entity_1 = require("./modules/answer-equipment-require/answer-equipment-require.entity");
const grade_config_entity_1 = require("./modules/grade-config/grade-config.entity");
const exam_config_entity_1 = require("./modules/exam-config/exam-config.entity");
const exam_time_entity_1 = require("./modules/exam-time/exam-time.entity");
const answer_time_entity_1 = require("./modules/answer-time/answer-time.entity");
const grade_config_require_entity_1 = require("./modules/grade-config-require/grade-config-require.entity");
const get_score_config_entity_1 = require("./modules/get-score-config/get-score-config.entity");
const test_times_entity_1 = require("./modules/test-times/test-times.entity");
const participation_way_entity_1 = require("./modules/participation-way/participation-way.entity");
const examinee_fill_message_entity_1 = require("./modules/examinee-fill-message/examinee-fill-message.entity");
const exam_module_1 = require("./modules/exam/exam.module");
const paper_mode_module_1 = require("./modules/paper-mode/paper-mode.module");
const paper_mode_require_module_1 = require("./modules/paper-mode-require/paper-mode-require.module");
const exam_list_module_1 = require("./modules/exam-list/exam-list.module");
const exam_config_require_module_1 = require("./modules/exam-config-require/exam-config-require.module");
const question_config_module_1 = require("./modules/question-config/question-config.module");
const anti_cheating_config_module_1 = require("./modules/anti-cheating-config/anti-cheating-config.module");
const answer_equipment_module_1 = require("./modules/answer-equipment/answer-equipment.module");
const answer_equipment_require_module_1 = require("./modules/answer-equipment-require/answer-equipment-require.module");
const grade_config_module_1 = require("./modules/grade-config/grade-config.module");
const grade_config_require_module_1 = require("./modules/grade-config-require/grade-config-require.module");
const exam_config_module_1 = require("./modules/exam-config/exam-config.module");
const exam_time_module_1 = require("./modules/exam-time/exam-time.module");
const answer_time_module_1 = require("./modules/answer-time/answer-time.module");
const test_times_module_1 = require("./modules/test-times/test-times.module");
const get_score_config_module_1 = require("./modules/get-score-config/get-score-config.module");
const participation_way_module_1 = require("./modules/participation-way/participation-way.module");
const examinee_fill_message_module_1 = require("./modules/examinee-fill-message/examinee-fill-message.module");
const send_email_module_1 = require("./modules/send-email/send-email.module");
const paper_big_question_module_1 = require("./modules/paper-big-question/paper-big-question.module");
const paper_big_question_entity_1 = require("./modules/paper-big-question/paper-big-question.entity");
const paper_exam_module_1 = require("./modules/paper-exam/paper-exam.module");
const paper_exam_entity_1 = require("./modules/paper-exam/paper-exam.entity");
const question_selection_strategy_module_1 = require("./modules/question-selection-strategy/question-selection-strategy.module");
const question_selection_strategy_entity_1 = require("./modules/question-selection-strategy/question-selection-strategy.entity");
const smoke_strategy_module_1 = require("./modules/smoke-strategy/smoke-strategy.module");
const smoke_strategy_entity_1 = require("./modules/smoke-strategy/smoke-strategy.entity");
const test_analysis_module_1 = require("./modules/test-analysis/test-analysis.module");
const test_analysis_entity_1 = require("./modules/test-analysis/test-analysis.entity");
const examination_entity_1 = require("./modules/analyse_examine/examination.entity");
const examination_module_1 = require("./modules/analyse_examine/examination.module");
const analyse_bounced_examinee_entity_1 = require("./modules/analyse-bounced-examinee/analyse-bounced-examinee.entity");
const analyse_bounced_examinee_module_1 = require("./modules/analyse-bounced-examinee/analyse-bounced-examinee.module");
const analyse_statistical_entity_1 = require("./modules/analyse-statistical/analyse-statistical.entity");
const analyse_statistical_module_1 = require("./modules/analyse-statistical/analyse-statistical.module");
const analyse_bounced_practice_entity_1 = require("./modules/analyse-bounced-practice/analyse-bounced-practice.entity");
const analyse_bounced_practice_module_1 = require("./modules/analyse-bounced-practice/analyse-bounced-practice.module");
const analyse_student_analyse_entity_1 = require("./modules/analyse-student-analyse/analyse-student-analyse.entity");
const analyse_student_analyse_module_1 = require("./modules/analyse-student-analyse/analyse-student-analyse.module");
const absent_stat_module_1 = require("./modules/absent-stat/absent-stat.module");
const absent_stat_entity_1 = require("./modules/absent-stat/absent-stat.entity");
const analyse_integral_entity_1 = require("./modules/analyse-integral/analyse-integral.entity");
const analyse_integral_module_1 = require("./modules/analyse-integral/analyse-integral.module");
const analyse_grade_module_1 = require("./modules/analyse-grade/analyse-grade.module");
const analyse_grade_entity_1 = require("./modules/analyse-grade/analyse-grade.entity");
const analyse_answer_entity_1 = require("./modules/analyse-answer/analyse-answer.entity");
const analyse_answer_exam_entity_1 = require("./modules/analyse-answer/analyse-answer-exam.entity");
const analyse_answer_module_1 = require("./modules/analyse-answer/analyse-answer.module");
const artificalnve_entity_1 = require("./modules/analyse_artifical_nve/artificalnve.entity");
const artificalnve_module_1 = require("./modules/analyse_artifical_nve/artificalnve.module");
const analyse_learning_module_1 = require("./modules/analyse-learning/analyse-learning.module");
const analyse_learning_entity_1 = require("./modules/analyse-learning/analyse-learning.entity");
const analyse_artifical_entity_1 = require("./modules/analyse-artifical/analyse-artifical.entity");
const analyse_artifical_module_1 = require("./modules/analyse-artifical/analyse-artifical.module");
const exercise_way_module_1 = require("./modules/exercise/exercise-way/exercise-way.module");
const exercise_way_entity_1 = require("./modules/exercise/exercise-way/exercise-way.entity");
const exercise_entity_1 = require("./modules/exercise/exercises/exercise.entity");
const exercise_module_1 = require("./modules/exercise/exercises/exercise.module");
const exer_question_config_module_1 = require("./modules/exercise/exer_question-config/exer_question-config.module");
const exercise_big_chapter_module_1 = require("./modules/exercise/exercise-big-chapter/exercise-big-chapter.module");
const exercise_big_chapter_entity_1 = require("./modules/exercise/exercise-big-chapter/exercise-big-chapter.entity");
const exercise_each_chapter_module_1 = require("./modules/exercise/exercise-each-chapter/exercise-each-chapter.module");
const exercise_each_chapter_entity_1 = require("./modules/exercise/exercise-each-chapter/exercise-each-chapter.entity");
const payments_entity_1 = require("./modules/payments/payments.entity");
const payments_module_1 = require("./modules/payments/payments.module");
const { file: envFilePath } = require('../../../config/env');
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: [envFilePath] }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    return {
                        type: 'mysql',
                        host: configService.get('DB_HOST', '110.40.139.133'),
                        username: configService.get('DB_USER', 'root'),
                        password: configService.get('DB_PASSWORD', 'rootroot'),
                        port: configService.get('DB_PORT', 3306),
                        database: configService.get('DB_DATABASE', 'exam_release'),
                        charset: 'utf8mb4',
                        timezone: '+08:00',
                        synchronize: true,
                        entities: [
                            course_entity_1.Course,
                            course_learn_choose_entity_1.CourseLearnChoose,
                            course_learn_free_entity_1.CourseLearnFree,
                            course_design_entity_1.CourseDesign,
                            course_section_entity_1.CourseSection,
                            course_learn_way_entity_1.CourseLearnWay,
                            course_stats_entity_1.CourseStats,
                            testBank_entity_1.TestBank,
                            test_options_entity_1.TestOptions,
                            test_questions_entity_1.TestQuestions,
                            test_gap_filling_entity_1.TestGapFilling,
                            operation_log_entity_1.OperationLog,
                            examinee_side_information_entity_1.ExamineeSideInformation,
                            test_questions_module_1.TestQuestionsModule,
                            anti_cheating_config_entity_1.AntiCheatingConfig,
                            exam_entity_1.Exam,
                            exam_config_require_entity_1.ExamConfigRequire,
                            question_config_entity_1.QuestionConfig,
                            exer_question_config_module_1.QuestionConfigModules,
                            answer_equipment_entity_1.AnswerEquipment,
                            answer_equipment_require_entity_1.AnswerEquipmentRequire,
                            grade_config_entity_1.GradeConfig,
                            grade_config_require_entity_1.GradeConfigRequire,
                            exam_config_entity_1.ExamConfig,
                            exam_time_entity_1.ExamTime,
                            answer_time_entity_1.AnswerTime,
                            test_times_entity_1.TestTimes,
                            get_score_config_entity_1.GetScoreConfig,
                            participation_way_entity_1.ParticipationWay,
                            examinee_fill_message_entity_1.ExamineeFillMessage,
                            paper_mode_entity_1.PaperMode,
                            paper_mode_require_entity_1.PaperModeRequire,
                            question_selection_strategy_entity_1.QuestionSelectionStrategy,
                            paper_big_question_entity_1.PaperBigQuestion,
                            paper_exam_entity_1.PaperExam,
                            smoke_strategy_entity_1.SmokeStrategy,
                            exercise_way_entity_1.ExerciseWay,
                            exercise_entity_1.Exercise,
                            exercise_big_chapter_entity_1.ExerBigChapter,
                            exercise_each_chapter_entity_1.EachChapter,
                            analyse_student_analyse_entity_1.Analysestudentanalyse,
                            analyse_integral_entity_1.AnalyseIntegral,
                            analyse_answer_entity_1.AnalyseAnswer,
                            analyse_answer_exam_entity_1.AnalyseAnswerExam,
                            analyse_artifical_entity_1.Artifical,
                            artificalnve_entity_1.ArtificalNve,
                            absent_stat_entity_1.AbsentStat,
                            test_analysis_entity_1.TestAnalysis,
                            examination_entity_1.Examine,
                            analyse_grade_entity_1.AnalyseGrade,
                            analyse_bounced_examinee_entity_1.analyseBouncedExaminees,
                            analyse_statistical_entity_1.analyseStatistical,
                            analyse_bounced_practice_entity_1.analyseBouncedPractice,
                            analyse_learning_entity_1.Analyselearning,
                            students_entity_1.Students,
                            student_mark_entity_1.StudentsMark,
                            students_exam_result_entity_1.StudentsExamResult,
                            students_course_entity_1.StudentsCourse,
                            students_course_message_entity_1.StudentsCourseMessage,
                            students_course_chapter_entity_1.StudentsCourseChapter,
                            tree_person_entity_1.TreePerson,
                            user_entity_1.User,
                            payments_entity_1.Payments,
                        ],
                    };
                },
            }),
            course_module_1.CourseModule,
            course_learn_choose_module_1.CourseLearnChooseModule,
            course_learn_free_module_1.CourseLearnFreeModule,
            course_design_module_1.CourseDesignModule,
            course_section_module_1.CourseSectionModule,
            course_learn_way_module_1.CourseLearnWayModule,
            course_stats_module_1.CourseStatsModule,
            testBank_module_1.TestBankModule,
            test_options_module_1.TestOptionsModule,
            test_gap_filling_module_1.TestGapFillingModule,
            test_questions_module_1.TestQuestionsModule,
            operation_log_module_1.OperationLogModule,
            anti_cheating_config_module_1.AntiCheatingConfigModule,
            exam_module_1.ExamModule,
            exam_config_require_module_1.ExamConfigRequireModule,
            question_config_module_1.QuestionConfigModule,
            answer_equipment_module_1.AnswerEquipmentModule,
            answer_equipment_require_module_1.AnswerEquipmentRequireModule,
            grade_config_module_1.GradeConfigModule,
            grade_config_require_module_1.GradeConfigRequireModule,
            exam_config_module_1.ExamConfigModule,
            exam_time_module_1.ExamTimeModule,
            answer_time_module_1.AnswerTimeModule,
            test_times_module_1.TestTimesModule,
            get_score_config_module_1.GetScoreConfigModule,
            participation_way_module_1.ParticipationWayModule,
            examinee_fill_message_module_1.ExamineeFillMessageModule,
            paper_mode_module_1.PaperModeModule,
            paper_mode_require_module_1.PaperModeRequireModule,
            exam_list_module_1.ExamListModule,
            question_selection_strategy_module_1.QuestionSelectionStrategyModule,
            paper_big_question_module_1.PaperBigQuestionModule,
            paper_exam_module_1.PaperExamModule,
            smoke_strategy_module_1.SmokeStrategyModule,
            exercise_module_1.ExerciseModule,
            analyse_student_analyse_module_1.AnalyseStudentAnalyseModule,
            analyse_bounced_examinee_module_1.AnalyseBouncedExamineesModule,
            examination_module_1.ExaminationModule,
            analyse_statistical_module_1.AnalyseStatisticalModule,
            analyse_bounced_practice_module_1.AnalyseBouncedPracticeModule,
            absent_stat_module_1.AbsentStatModule,
            analyse_integral_module_1.AnalyseIntegralModule,
            analyse_answer_module_1.AnalyseAnswerModule,
            analyse_artifical_module_1.ArtificalModule,
            artificalnve_module_1.AnalyseArtificalModule,
            analyse_grade_module_1.AnalyseGradeModule,
            analyse_learning_module_1.AnalyseLearningModule,
            test_analysis_module_1.TestAnalysisModule,
            students_module_1.StudentsModule,
            student_mark_module_1.StudentsMarkModule,
            students_exam_result_module_1.StudentsExamResultModule,
            students_course_module_1.StudentsCourseModule,
            students_course_message_module_1.StudentsCourseMessageModule,
            students_course_chapter_module_1.StudentsCourseChapterModule,
            tree_person_module_1.TreePersonModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            text_set_module_1.TextSetModule,
            send_email_module_1.SendEmailModule,
            exercise_way_module_1.ExerciseWayModule,
            examinee_side_information_module_1.ExamineeSideInformationModule,
            exercise_big_chapter_module_1.ExerciseBigChapterModule,
            exercise_each_chapter_module_1.ExerciseEachChapterModule,
            payments_module_1.PaymentsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map