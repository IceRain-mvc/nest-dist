import { TestGapFillingService } from './test-gap-filling.service';
import { TestGapFilling } from './test-gap-filling.entity';
export declare class TestGapFillingController {
    private readonly testGapFillingService;
    constructor(testGapFillingService: TestGapFillingService);
    create(body: any): Promise<TestGapFilling[]>;
    getAll(): Promise<TestGapFilling[]>;
}
