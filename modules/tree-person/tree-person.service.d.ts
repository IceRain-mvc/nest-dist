import { Repository } from 'typeorm';
import { TreePerson } from '@/modules/tree-person/tree-person.entity';
export declare class TreePersonService {
    private readonly treePersonRepository;
    constructor(treePersonRepository: Repository<TreePerson>);
    createRoot(body: any): Promise<{
        msg: string;
        result: TreePerson;
    }>;
    deleteSomeNode(): Promise<void>;
    createTest(body: any): Promise<object>;
    getAll(param: any): Promise<TreePerson[]>;
    deleteChildNode(bodyList: any): Promise<object>;
    updateNodeTitle(body: any): Promise<object>;
    addGroupChild(body: any): Promise<object>;
    getstudentsTree(): Promise<TreePerson[]>;
    getCurrentChildren(lists: any): Promise<any[]>;
    getNodeByCurrentId(id: any): Promise<{
        msg: string;
        fullTitles: string;
    }>;
    getIdByTitles(query: any): Promise<void>;
    managementClassification(query: any): Promise<{
        data: any[];
        len: number;
    }>;
}
