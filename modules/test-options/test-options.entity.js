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
exports.TestOptions = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const testBank_entity_1 = require("../testBank/testBank.entity");
let TestOptions = class TestOptions {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, testBank: { required: true, type: () => require("../testBank/testBank.entity").TestBank }, options: { required: true, type: () => String }, optionsContent: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], TestOptions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => testBank_entity_1.TestBank, (testBank) => testBank.testOptions, {
        onDelete: 'CASCADE',
    }),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '关联题的id' }),
    __metadata("design:type", testBank_entity_1.TestBank)
], TestOptions.prototype, "testBank", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '选项' }),
    __metadata("design:type", String)
], TestOptions.prototype, "options", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '选项内容' }),
    __metadata("design:type", String)
], TestOptions.prototype, "optionsContent", void 0);
TestOptions = __decorate([
    (0, typeorm_1.Entity)()
], TestOptions);
exports.TestOptions = TestOptions;
//# sourceMappingURL=test-options.entity.js.map