"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    getRequest(context) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        return request;
    }
    handleRequest(err, user) {
        if (err || !user) {
            throw new common_1.UnauthorizedException('身份验证失败');
        }
        return user;
    }
}
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map