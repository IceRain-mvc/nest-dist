import { Repository } from 'typeorm';
import { Payments } from './payments.entity';
export declare class PaymentsService {
    private readonly paymentsRepository;
    constructor(paymentsRepository: Repository<Payments>);
    create(body: Partial<Payments>): Promise<Payments>;
    getOrderId(query: any): Promise<Payments[]>;
}
