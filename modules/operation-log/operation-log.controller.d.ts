import { OperationLog } from './operation-log.entity';
import { OperationLogService } from './operation-log.service';
export declare class OperationLogController {
    private readonly operationLogService;
    constructor(operationLogService: OperationLogService);
    create(body: any): Promise<OperationLog>;
    getAll(query: any): Promise<[OperationLog[], number]>;
    addOpreationLog(body: any): Promise<import("typeorm").InsertResult>;
    getIP(): any;
}
