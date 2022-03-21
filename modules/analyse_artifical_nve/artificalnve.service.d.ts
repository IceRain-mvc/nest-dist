import { Repository } from 'typeorm';
import { ArtificalNve } from './artificalnve.entity';
export declare class AnalyseArtificalService {
    private readonly bouncedRepository;
    constructor(bouncedRepository: Repository<ArtificalNve>);
    create(examBody: Partial<ArtificalNve>): Promise<{
        code: string;
        msg: string;
        list: ArtificalNve;
    }>;
    getAll(query: any): Promise<[ArtificalNve[], number]>;
    Update(amend: any): Promise<any>;
}
