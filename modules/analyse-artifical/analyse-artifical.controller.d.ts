import { ArtificalService } from './analyse-artifical.service';
import { Artifical } from './analyse-artifical.entity';
export declare class ArtificalController {
    private readonly examService;
    constructor(examService: ArtificalService);
    create(artBoby: any): Promise<{
        code: string;
        msg: string;
        list: Artifical;
    }>;
    getAll(query: any): Promise<{
        msg: string;
        data?: [Artifical[]?, number?];
    }>;
}
