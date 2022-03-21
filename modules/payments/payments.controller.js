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
exports.PaymentsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const payments_service_1 = require("./payments.service");
const alipayUtils_1 = require("../../db/alipayUtils");
const form_1 = require("alipay-sdk/lib/form");
let PaymentsController = class PaymentsController {
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    async create(paymentsBody) {
        const { inputNum, orderId } = paymentsBody;
        const formData = new form_1.default();
        formData.setMethod('get');
        formData.addField('returnUrl', 'http://localhost:3000/management/accountInformation');
        formData.addField('bizContent', {
            outTradeNo: orderId,
            productCode: 'FAST_INSTANT_TRADE_PAY',
            totalAmount: inputNum,
            subject: '商品',
            body: '商品详情',
        });
        const result = await alipayUtils_1.alipaySdk.exec('alipay.trade.page.pay', {}, { formData: formData });
        console.log(result);
        if (result) {
            return {
                success: 'true',
                code: 200,
                result: result,
            };
        }
        const res = await this.paymentsService.create(paymentsBody);
        return res;
    }
    async getOrderIds(query) {
        const res = await this.paymentsService.getOrderId(query);
        return res;
    }
};
__decorate([
    (0, common_1.Post)('createPayment'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getOrderIds'),
    openapi.ApiResponse({ status: 200, type: [require("./payments.entity").Payments] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "getOrderIds", null);
PaymentsController = __decorate([
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
exports.PaymentsController = PaymentsController;
//# sourceMappingURL=payments.controller.js.map