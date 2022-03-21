"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLearnWay = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let CourseLearnWay = class CourseLearnWay {
    static _OPENAPI_METADATA_FACTORY() {
        return { wayId: { required: true, type: () => Number }, wayTitle: { required: true, type: () => String }, wayDescription: { required: true, type: () => String }, wayType: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseLearnWay.prototype, "wayId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '免登陆学习',
        description: '学习方式名字',
    }),
    (0, typeorm_1.Column)({ default: '免登陆学习' }),
    __metadata("design:type", String)
], CourseLearnWay.prototype, "wayTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考生填写身份信息（如姓名、电话），就可以参加考试',
        description: '学习方式介绍',
    }),
    (0, typeorm_1.Column)({ default: '考生填写身份信息（如姓名、电话），就可以参加考试' }),
    __metadata("design:type", String)
], CourseLearnWay.prototype, "wayDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '学习方式type(0,1,2,3)',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CourseLearnWay.prototype, "wayType", void 0);
CourseLearnWay = __decorate([
    (0, typeorm_1.Entity)()
], CourseLearnWay);
exports.CourseLearnWay = CourseLearnWay;
//# sourceMappingURL=course-learn-way.entity.js.map