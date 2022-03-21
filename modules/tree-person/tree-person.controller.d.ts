import { TreePersonService } from '@/modules/tree-person/tree-person.service';
import { TreePerson } from './tree-person.entity';
export declare class TreePersonController {
    private readonly treePersonService;
    constructor(treePersonService: TreePersonService);
    postData(body: any): Promise<object>;
    createRoot(body: any): Promise<object>;
    getAll(param: any): Promise<TreePerson[]>;
    deleteChildNode(body: any): Promise<object>;
    updateNodeTitle(body: any): Promise<object>;
    addGroupChild(body: any): Promise<object>;
    getstudentsTree(): Promise<TreePerson[]>;
    getNodeByCurrentId(id: any): Promise<{
        msg: string;
        fullTitles: string;
    }>;
    managementClassification(query: any): Promise<{
        data: any[];
        len: number;
    }>;
}
