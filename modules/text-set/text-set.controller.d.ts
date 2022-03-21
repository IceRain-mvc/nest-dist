import { TextSetService } from './text-set.service';
export declare class TextSetController {
    private readonly testsetService;
    constructor(testsetService: TextSetService);
    getAll(): string;
}
