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
exports.UploadingController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer = require('multer');
const fs = require('fs');
const fsExtra = require('fs-extra');
let UploadingController = class UploadingController {
    uploadPic(file) {
        const { path } = file;
        return { path: 'http://localhost:4001/' + path };
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: multer.diskStorage({
            destination: async (cb) => {
                const path = `./public/images`;
                await fsExtra.ensureDir(path);
                if (!fs.existsSync(path)) {
                    fs.mkdirSync(path);
                }
                cb(null, path);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        }),
    })),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadingController.prototype, "uploadPic", null);
UploadingController = __decorate([
    (0, swagger_1.ApiTags)('图片上传'),
    (0, common_1.Controller)('uploading')
], UploadingController);
exports.UploadingController = UploadingController;
//# sourceMappingURL=uploading.controller.js.map