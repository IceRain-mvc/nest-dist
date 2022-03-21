import { TestTimesService } from '@/modules/test-times/test-times.service';
export declare class TestTimesController {
    private readonly testTimesService;
    constructor(testTimesService: TestTimesService);
    create(body: any): Promise<{
        msg: string;
        result: import("./test-times.entity").TestTimes;
    }>;
    getAll(): Promise<any[]>;
}
