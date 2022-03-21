import { ArtificalNve } from './artificalnve.entity';
import { AnalyseArtificalService } from './artificalnve.service';
export declare class AnalyseArtificalController {
    private readonly artificalService;
    constructor(artificalService: AnalyseArtificalService);
    create(examBody: any): Promise<{
        code: string;
        msg: string;
        list: ArtificalNve;
    }>;
    getAll(query: any): Promise<[ArtificalNve[], number]>;
    getUpdate(examBody: any): Promise<any>;
}
