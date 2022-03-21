import { Artifical } from './analyse-artifical.entity';
import { Repository } from 'typeorm';
export declare class ArtificalService {
    private readonly artificalRepository;
    constructor(artificalRepository: Repository<Artifical>);
    create(artBoby: Partial<Artifical>): Promise<{
        code: string;
        msg: string;
        list: Artifical;
    }>;
    getAll(query: any): Promise<{
        msg: string;
        data?: Partial<[Artifical[], number]>;
    }>;
}
