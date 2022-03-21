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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreePersonController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const tree_person_service_1 = require("./tree-person.service");
const swagger_1 = require("@nestjs/swagger");
const tree_person_entity_1 = require("./tree-person.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const tree_person_interfaceType_1 = require("./tree-person.interfaceType");
let TreePersonController = class TreePersonController {
    constructor(treePersonService) {
        this.treePersonService = treePersonService;
    }
    postData(body) {
        return this.treePersonService.createTest(body);
    }
    createRoot(body) {
        return this.treePersonService.createTest(body);
    }
    getAll(param) {
        return this.treePersonService.getAll(param);
    }
    deleteChildNode(body) {
        return this.treePersonService.deleteChildNode(body);
    }
    updateNodeTitle(body) {
        return this.treePersonService.updateNodeTitle(body);
    }
    addGroupChild(body) {
        return this.treePersonService.addGroupChild(body);
    }
    getstudentsTree() {
        return this.treePersonService.getstudentsTree();
    }
    getNodeByCurrentId(id) {
        return this.treePersonService.getNodeByCurrentId(id);
    }
    managementClassification(query) {
        return this.treePersonService.managementClassification(query);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: tree_person_entity_1.TreePerson,
    }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TreePersonController.prototype, "postData", null);
__decorate([
    (0, common_1.Post)('root'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreePersonController.prototype, "createRoot", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./tree-person.entity").TreePerson] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TreePersonController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '删除节点请求体',
        type: [tree_person_interfaceType_1.DeleteTreeNode],
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TreePersonController.prototype, "deleteChildNode", null);
__decorate([
    (0, common_1.Put)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TreePersonController.prototype, "updateNodeTitle", null);
__decorate([
    (0, common_1.Post)('groupAdd'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TreePersonController.prototype, "addGroupChild", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.Get)('getstudentsTree'),
    openapi.ApiResponse({ status: 200, type: [require("./tree-person.entity").TreePerson] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TreePersonController.prototype, "getstudentsTree", null);
__decorate([
    (0, common_1.Get)('current/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TreePersonController.prototype, "getNodeByCurrentId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('managementClassify'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreePersonController.prototype, "managementClassification", null);
TreePersonController = __decorate([
    (0, swagger_1.ApiTags)('人员分类'),
    (0, common_1.Controller)('tree-person'),
    __metadata("design:paramtypes", [tree_person_service_1.TreePersonService])
], TreePersonController);
exports.TreePersonController = TreePersonController;
//# sourceMappingURL=tree-person.controller.js.map