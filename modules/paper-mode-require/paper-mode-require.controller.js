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
exports.PaperModeRequireController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const paper_mode_require_service_1 = require("./paper-mode-require.service");
let PaperModeRequireController = class PaperModeRequireController {
    constructor(paperModeRequireService) {
        this.paperModeRequireService = paperModeRequireService;
    }
};
PaperModeRequireController = __decorate([
    (0, common_1.Controller)('paper-mode-require'),
    __metadata("design:paramtypes", [paper_mode_require_service_1.PaperModeRequireService])
], PaperModeRequireController);
exports.PaperModeRequireController = PaperModeRequireController;
//# sourceMappingURL=paper-mode-require.controller.js.map