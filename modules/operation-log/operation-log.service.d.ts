import { Repository } from 'typeorm';
import { OperationLog } from './operation-log.entity';
export declare class OperationLogService {
    private readonly operationLogRepository;
    constructor(operationLogRepository: Repository<OperationLog>);
    create(body: Partial<OperationLog>): Promise<OperationLog>;
    getAll(query: any): Promise<[OperationLog[], number]>;
    addOpreationLog(body: Partial<OperationLog>): Promise<import("typeorm").InsertResult>;
    getIP: () => any;
}
