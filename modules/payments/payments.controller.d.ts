import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(paymentsBody: any): Promise<import("./payments.entity").Payments | {
        success: string;
        code: number;
        result: string | import("alipay-sdk").AlipaySdkCommonResult;
    }>;
    getOrderIds(query: any): Promise<import("./payments.entity").Payments[]>;
}
