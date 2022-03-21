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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const bcrypt = require("bcryptjs");
let User = class User {
    static async comparePassword(password0, password1) {
        return bcrypt.compareSync(password0, password1);
    }
    static encryptPassword(password) {
        return bcrypt.hashSync(password, 10);
    }
    encrypt() {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, password: { required: true, type: () => String }, avatar: { required: true, type: () => String }, email: { required: true, type: () => String }, role: { required: true, type: () => String }, status: { required: true, type: () => String }, createAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, phoneNum: { required: true, type: () => String }, isDelete: { required: true, type: () => Boolean }, loginTime: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'teacher_1' }),
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'abc123456' }),
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', name: 'email', example: '156462423@qq.com' }),
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-enum', { enum: ['admin', 'teacher'], default: 'teacher' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', name: 'status', example: 'active' }),
    (0, typeorm_1.Column)('simple-enum', { enum: ['locked', 'active'], default: 'active' }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], User.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], User.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], User.prototype, "phoneNum", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], User.prototype, "loginTime", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "encrypt", null);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map