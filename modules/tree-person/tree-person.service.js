"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreePersonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tree_person_entity_1 = require("./tree-person.entity");
var Types;
(function (Types) {
    Types[Types["exam"] = 1] = "exam";
    Types[Types["practice"] = 2] = "practice";
    Types[Types["course"] = 3] = "course";
    Types[Types["question"] = 4] = "question";
    Types[Types["department"] = 5] = "department";
})(Types || (Types = {}));
const rootTrees = ['考试分类', '练习分类', '课程分类', '试题分类', '所属阶段'];
let TreePersonService = class TreePersonService {
    constructor(treePersonRepository) {
        this.treePersonRepository = treePersonRepository;
        Promise.all(rootTrees.map((item) => {
            return this.createRoot({ title: item });
        }))
            .then(() => {
            console.log('节点创建成功');
            this.deleteSomeNode().then((r) => { });
        })
            .catch(() => {
            console.log('节点创建失败');
        });
    }
    async createRoot(body) {
        const { title } = body;
        const root = await this.treePersonRepository
            .createQueryBuilder('TreePerson')
            .select('TreePerson')
            .where('TreePerson.title = :title', { title })
            .getOne();
        if (root) {
        }
        const res = await this.treePersonRepository.create({ title });
        const result = await this.treePersonRepository.save(res);
        return { msg: '创建成功', result };
    }
    async deleteSomeNode() {
        const manager = await (0, typeorm_2.getManager)();
        const nodes = await manager.getTreeRepository(tree_person_entity_1.TreePerson).findRoots();
        for (let i = 0; i < nodes.length; i++) {
            if (i < 5) {
                await manager
                    .getTreeRepository(tree_person_entity_1.TreePerson)
                    .update(nodes[i].id, { title: rootTrees[i] });
            }
            if (i >= 5) {
                await manager.getTreeRepository(tree_person_entity_1.TreePerson).delete(nodes[i].id);
            }
        }
    }
    async createTest(body) {
        const { parentId, title } = body;
        const manager = (0, typeorm_2.getManager)();
        const parentNode = await manager.findOne(tree_person_entity_1.TreePerson, parentId);
        const currentNode = new tree_person_entity_1.TreePerson(title);
        if (parentNode instanceof tree_person_entity_1.TreePerson) {
            currentNode.parent = parentNode;
            const result = await manager.save(currentNode);
            return {
                msg: 'create success',
                data: { title: result.title, id: result.id },
            };
        }
        return { msg: null };
    }
    async getAll(param) {
        if (!param.type) {
            throw new common_1.HttpException('请求参数不存在，应为type字段', common_1.HttpStatus.BAD_REQUEST);
        }
        if (param.type !== 'exam' &&
            param.type !== 'practice' &&
            param.type !== 'course' &&
            param.type !== 'question' &&
            param.type !== 'department') {
            throw new common_1.HttpException('请求参数值错误，可选exam，practice，course，question，department', common_1.HttpStatus.BAD_REQUEST);
        }
        const id = Number(Types[param.type]);
        const manager = (0, typeorm_2.getManager)();
        const res = await manager.getTreeRepository(tree_person_entity_1.TreePerson).findRoots();
        const obj = res.find((item) => {
            return item.id === id;
        });
        if (!obj) {
            throw new common_1.HttpException('请求的资源已经不存在', common_1.HttpStatus.GONE);
        }
        const treeCategories = await manager
            .getTreeRepository(tree_person_entity_1.TreePerson)
            .findDescendantsTree(obj);
        return [treeCategories];
    }
    async deleteChildNode(bodyList) {
        let examFlag = false;
        let studentFlag = false;
        let testBankFlag = false;
        let exerFlag = false;
        for (let i = 0; i < bodyList.length; i++) {
            if (!bodyList[i].parentId) {
                throw new common_1.HttpException('根节点不允许删除', common_1.HttpStatus.BAD_REQUEST);
            }
            const res = await this.treePersonRepository
                .createQueryBuilder('tree')
                .leftJoin('tree.exams', 'exam')
                .leftJoin('tree.students', 'students')
                .leftJoin('tree.testBank', 'test_bank')
                .leftJoin('tree.exercises', 'exercise')
                .select(['tree', 'exam', 'students', 'test_bank', 'exercise'])
                .where('tree.id = :id', { id: bodyList[i].id })
                .getOne();
            if (res.exams.length > 0) {
                examFlag = true;
            }
            if (res.students.length > 0) {
                studentFlag = true;
            }
            if (res.testBank.length > 0) {
                testBankFlag = true;
            }
            if (res.exercises.length > 0) {
                exerFlag = true;
            }
        }
        if (examFlag) {
            throw new common_1.HttpException('当前节点下存在考试，不允许删除，请先移除节点下的考试', common_1.HttpStatus.BAD_REQUEST);
        }
        if (studentFlag) {
            throw new common_1.HttpException('当前节点下存在考生，不允许删除，请先移除节点下的考生', common_1.HttpStatus.BAD_REQUEST);
        }
        if (testBankFlag) {
            throw new common_1.HttpException('当前节点下存在试题，不允许删除，请先移除节点下的试题', common_1.HttpStatus.BAD_REQUEST);
        }
        if (exerFlag) {
            throw new common_1.HttpException('当前节点下存在练习，不允许删除，请先移除节点下的练习', common_1.HttpStatus.BAD_REQUEST);
        }
        for (let i = 0; i < bodyList.length; i++) {
            const manager = (0, typeorm_2.getManager)();
            await manager
                .getTreeRepository(tree_person_entity_1.TreePerson)
                .createQueryBuilder()
                .delete()
                .from(tree_person_entity_1.TreePerson)
                .where('id = :id', { id: bodyList[i].id })
                .andWhere('parentId = :parentId', { parentId: bodyList[i].parentId })
                .execute();
        }
        return { msg: 'delete success' };
    }
    async updateNodeTitle(body) {
        const manager = (0, typeorm_2.getManager)();
        await manager
            .getTreeRepository(tree_person_entity_1.TreePerson)
            .createQueryBuilder()
            .update(tree_person_entity_1.TreePerson)
            .set({ title: body.title })
            .where('id = :id', { id: body.id })
            .execute();
        return { msg: 'update success' };
    }
    async addGroupChild(body) {
        for (let i = 0; i < body.length; i++) {
            const { parentId, title } = body[i];
            const manager = (0, typeorm_2.getManager)();
            const parentNode = await manager.findOne(tree_person_entity_1.TreePerson, parentId);
            const currentNode = new tree_person_entity_1.TreePerson(title);
            if (parentNode instanceof tree_person_entity_1.TreePerson) {
                currentNode.parent = parentNode;
                await manager.save(currentNode);
            }
        }
        return { msg: 'create success' };
    }
    async getstudentsTree() {
        return await this.treePersonRepository
            .createQueryBuilder('tree-person')
            .leftJoinAndSelect('tree-person.students', 'students')
            .getMany();
    }
    async getCurrentChildren(lists) {
        const manager = await (0, typeorm_2.getManager)();
        let idList = [];
        for (let i = 0; i < lists.length; i++) {
            const node = await this.treePersonRepository.findOne(lists[i]);
            const list = await manager
                .getTreeRepository(tree_person_entity_1.TreePerson)
                .findDescendants(node);
            idList = [...idList, ...list];
        }
        return [...new Set(idList)];
    }
    async getNodeByCurrentId(id) {
        const manager = await (0, typeorm_2.getManager)();
        const node = await this.treePersonRepository.findOne(id);
        let treeNode = await manager
            .getTreeRepository(tree_person_entity_1.TreePerson)
            .findAncestorsTree(node);
        let str = treeNode.title;
        while (treeNode.parent) {
            treeNode = treeNode.parent;
            str = treeNode.title + '/' + str;
        }
        return { msg: '节点查询成功', fullTitles: str };
    }
    async getIdByTitles(query) {
        const { titles } = query;
        if (!titles || titles === '') {
            throw new common_1.HttpException('节点名称不存在', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async managementClassification(query) {
        const { page = 1, pageSize = 10, type } = query;
        const start = (page - 1) * pageSize;
        const manager = await (0, typeorm_2.getManager)();
        let res = await manager.getTreeRepository(tree_person_entity_1.TreePerson).findRoots();
        const len = res.length;
        if (type) {
            let arr = [];
            let len = 0;
            res.forEach((item) => {
                if (item.title.indexOf(type) >= 0) {
                    arr.push(item);
                }
            });
            len = arr.length;
            arr = arr.splice(start, pageSize);
            return {
                data: arr,
                len,
            };
        }
        res = res.splice(start, pageSize);
        return {
            data: res,
            len,
        };
    }
};
TreePersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tree_person_entity_1.TreePerson)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TreePersonService);
exports.TreePersonService = TreePersonService;
//# sourceMappingURL=tree-person.service.js.map