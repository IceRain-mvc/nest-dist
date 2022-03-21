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
exports.SendEmailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
let SendEmailService = class SendEmailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    sendEmailCode(students, textBefore, coder, textAfter) {
        if (students === '' || students.length === 0) {
            return Promise.resolve('发送失败，请添加收件人');
        }
        if (!Array.isArray(students)) {
            students.split(',').forEach((user) => {
                this.sendEmail(user, textBefore, coder, textAfter);
            });
        }
        else {
            students.forEach((user) => {
                this.sendEmail(user, textBefore, coder, textAfter);
            });
        }
        return Promise.resolve('发送成功');
    }
    sendEmail(user, textBefore, coder, textAfter) {
        this.mailerService.sendMail({
            to: user,
            subject: '测试',
            html: '<div>' +
                textBefore +
                '</div><img src="' +
                coder +
                '" alt=""/>' +
                textAfter,
        });
    }
    async sendFindBackPwd(params) {
        this.mailerService.sendMail({
            to: params.email,
            subject: '考试云(http://cuilb.cn:3000)重置登录密码',
            html: '<div>' +
                '<p>尊敬的考试云用户，您好!</p>' +
                '<br>' +
                '<p>您申请重置考试云登录密码，如非本人操作，请忽略此邮件。</p>' +
                '<br>' +
                '<p>立即重置密码，<a href="http://cuilb.cn:3000/resetpwd/4be326">请点击这里</a></p>' +
                '<p>如果上面的链接无法点击，您可以复制下面的地址,并粘帖到浏览器的地址栏中访问。</p>' +
                '<p>http://cuilb.cn:3000/resetpwd/4be326</p>' +
                '<br>' +
                '<p>祝您使用愉快!</p>' +
                '<br>' +
                '<p>考试云</p>' +
                '<p>此邮件为系统自动发送，请物复。</p>' +
                '<p>如果您在使用中遇到问题，可以联系service@zcth.cn 求帮助</p>' +
                '</div>',
        });
        return Promise.resolve('发送成功');
    }
};
SendEmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], SendEmailService);
exports.SendEmailService = SendEmailService;
//# sourceMappingURL=send-email.service.js.map