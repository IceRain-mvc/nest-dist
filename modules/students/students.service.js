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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const students_entity_1 = require("./students.entity");
const tree_person_entity_1 = require("../tree-person/tree-person.entity");
const tree_person_service_1 = require("../tree-person/tree-person.service");
let StudentsService = class StudentsService {
    constructor(studentsRepository, treePersonService) {
        this.studentsRepository = studentsRepository;
        this.treePersonService = treePersonService;
    }
    async create(studentsBody) {
        const { treePersonId = 5 } = studentsBody;
        const manager = (0, typeorm_2.getManager)();
        const tree = await manager
            .getTreeRepository(tree_person_entity_1.TreePerson)
            .findOne({ id: treePersonId });
        studentsBody.treePerson = tree;
        const res = this.studentsRepository.create(studentsBody);
        return await this.studentsRepository.save(res);
    }
    async getAll(query) {
        const { page = 1, pageSize = 10, field = 'createTime', order = 'DESC', keywordSearch, state, time, mobile, email, sexNum, studentStageId, } = query;
        const start = (page - 1) * pageSize;
        const searchTime = time ? JSON.parse(time) : undefined;
        const manager = (0, typeorm_2.getManager)();
        const trees = await manager.getTreeRepository(tree_person_entity_1.TreePerson);
        let sql = this.studentsRepository.createQueryBuilder('students');
        sql = sql.leftJoinAndSelect('students.treePerson', 'tree_person');
        if (studentStageId && studentStageId !== '5') {
            sql = sql.andWhere(new typeorm_2.Brackets((qb) => {
                qb.where('tree_person.id = :id', {
                    id: studentStageId,
                }).orWhere('tree_person.parentId = :id', { id: studentStageId });
            }));
        }
        if (state && state !== '') {
            sql = sql.andWhere('students.studentState = :studentState', {
                studentState: state,
            });
        }
        if (keywordSearch && keywordSearch !== '') {
            sql = sql.andWhere(new typeorm_2.Brackets((qb) => {
                qb.where('students.studentName like :studentName', {
                    studentName: `%${keywordSearch}%`,
                })
                    .orWhere('students.studentNumber like :studentNumber', {
                    studentNumber: `%${keywordSearch}%`,
                })
                    .orWhere('students.studentPhone like :studentPhone', {
                    studentPhone: `%${keywordSearch}%`,
                })
                    .orWhere('students.eMail like :eMail', {
                    eMail: `%${keywordSearch}%`,
                });
            }));
        }
        if (searchTime) {
            if (searchTime.startTime) {
                sql = sql.andWhere('createTime > :start ', {
                    start: new Date(searchTime.startTime),
                });
            }
            if (searchTime.endTime) {
                sql = sql.andWhere('createTime < :end  ', {
                    end: new Date(searchTime.endTime),
                });
            }
        }
        if (!(keywordSearch && keywordSearch !== '')) {
            if (mobile) {
                sql = sql.andWhere('students.studentPhone like :studentPhone', {
                    studentPhone: `%${mobile}%`,
                });
            }
            if (email) {
                sql = sql.andWhere('students.eMail like :eMail', {
                    eMail: `%${email}%`,
                });
            }
        }
        if (sexNum) {
            sql = sql.andWhere('students.studentSex = :studentSex', {
                studentSex: sexNum,
            });
        }
        if (field && order) {
            sql = sql.orderBy(`students.${field}`, order);
        }
        sql = sql.skip(start).take(pageSize);
        const res = await sql.getManyAndCount();
        const result = JSON.parse(JSON.stringify(res));
        for (const item of result[0]) {
            let title = '';
            const parents = await trees.findAncestors(item.treePerson);
            parents.forEach((item) => {
                title += `/${item.title}`;
            });
            item.title = title.slice(1);
        }
        if (result) {
            return {
                msg: '查询成功',
                data: result,
            };
        }
        return {
            msg: '查询失败',
        };
    }
    async getOne(id) {
        return await this.studentsRepository
            .createQueryBuilder('students')
            .where('id=:id', { id })
            .getOne();
    }
    async getFindByStudentNumber(query) {
        const { studentNumber } = query;
        const res = await this.studentsRepository
            .createQueryBuilder('students')
            .where('students.studentNumber = :number', { number: studentNumber })
            .getOne();
        return !!res;
    }
    async update(query) {
        const manager = (0, typeorm_2.getManager)();
        const { id, treePersonId } = query;
        const tree = await manager
            .getTreeRepository(tree_person_entity_1.TreePerson)
            .findOne({ id: treePersonId });
        delete query.treePersonId;
        query.treePerson = tree;
        return await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(students_entity_1.Students)
            .set(Object.assign({}, query))
            .where('id = :id', { id })
            .execute();
    }
    async findTrePersonTitle(query) {
        return (0, typeorm_2.getRepository)(tree_person_entity_1.TreePerson)
            .createQueryBuilder('tree_person')
            .where('tree_person.parentId = :parentId AND tree_person.title = :title', Object.assign({}, query))
            .getOne();
    }
    async getTreePersonTitleToId(body) {
        const { parentId, title } = body;
        const node = await this.findTrePersonTitle(Object.assign({}, body));
        if (node) {
            return node;
        }
        await this.treePersonService.createTest({ parentId, title });
        return this.findTrePersonTitle(Object.assign({}, body));
    }
    async updateNumber(query) {
        try {
            const result = await Promise.all(query.map(async (item) => {
                var e_1, _a;
                const manager = (0, typeorm_2.getManager)();
                let { treePersonId = 5 } = item;
                if (typeof treePersonId === 'string') {
                    const arr = treePersonId.split('/');
                    let Pid = 5;
                    try {
                        for (var arr_1 = __asyncValues(arr), arr_1_1; arr_1_1 = await arr_1.next(), !arr_1_1.done;) {
                            const key = arr_1_1.value;
                            const node = await this.getTreePersonTitleToId({
                                parentId: Pid,
                                title: key,
                            });
                            Pid = node.id;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) await _a.call(arr_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    treePersonId = Pid;
                }
                const tree = await manager
                    .getTreeRepository(tree_person_entity_1.TreePerson)
                    .findOne({ id: treePersonId });
                delete item.treePersonId;
                item.treePerson = tree;
                return (0, typeorm_2.getConnection)()
                    .createQueryBuilder()
                    .update(students_entity_1.Students)
                    .set(Object.assign({}, item))
                    .where('studentNumber = :studentNumber', {
                    studentNumber: item.studentNumber,
                })
                    .execute();
            }))
                .then((res) => {
                return {
                    info: '修改成功',
                };
            })
                .catch(() => {
                return {
                    info: '修改失败',
                };
            });
            return result;
        }
        catch (_a) {
            return {
                info: '修改失败',
            };
        }
    }
    async findReturnImport(query) {
        const data = [];
        const list = [];
        await Promise.all(query.map((item) => {
            return this.studentsRepository.findOne({
                studentNumber: item.studentNumber,
            });
        }))
            .then((res) => {
            res.forEach((item, index) => {
                item ? list.push(index) : data.push(index);
            });
        })
            .catch(() => {
            return {
                info: '查找失败',
            };
        });
        return {
            list,
            data,
        };
    }
    async deleteById(id) {
        return await this.studentsRepository.delete(id);
    }
    async batchDel(query) {
        query.forEach(async (item) => {
            await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .delete()
                .from(students_entity_1.Students)
                .where('id = :id', { item })
                .execute();
        });
    }
    async addImportData(query) {
        var e_2, _a, e_3, _b;
        const manager = (0, typeorm_2.getManager)();
        const tree = await manager.getTreeRepository(tree_person_entity_1.TreePerson);
        let count = 0;
        try {
            try {
                for (var query_1 = __asyncValues(query), query_1_1; query_1_1 = await query_1.next(), !query_1_1.done;) {
                    const item = query_1_1.value;
                    let { treePersonId = 5 } = item;
                    if (typeof treePersonId === 'string') {
                        const arr = treePersonId.split('/');
                        let Pid = 5;
                        try {
                            for (var arr_2 = (e_3 = void 0, __asyncValues(arr)), arr_2_1; arr_2_1 = await arr_2.next(), !arr_2_1.done;) {
                                const key = arr_2_1.value;
                                const node = await this.getTreePersonTitleToId({
                                    parentId: Pid,
                                    title: key,
                                });
                                Pid = node.id;
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (arr_2_1 && !arr_2_1.done && (_b = arr_2.return)) await _b.call(arr_2);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        treePersonId = Pid;
                    }
                    query[count].treePerson = await tree.findOne({ id: treePersonId });
                    delete item.treePersonId;
                    count++;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (query_1_1 && !query_1_1.done && (_a = query_1.return)) await _a.call(query_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .insert()
                .into(students_entity_1.Students)
                .values([...query])
                .execute();
        }
        catch (_c) {
        }
    }
    async batchChange(query) {
        try {
            query.forEach(async (item) => {
                const manager = (0, typeorm_2.getManager)();
                const { id, treePersonId, treePerson, password, studentState, studentSex, } = item;
                const tree = await manager
                    .getTreeRepository(tree_person_entity_1.TreePerson)
                    .findOne({ id: treePersonId });
                delete query.treePersonId;
                query.treePerson = tree;
                return await (0, typeorm_2.getConnection)()
                    .createQueryBuilder()
                    .update(students_entity_1.Students)
                    .set({
                    id,
                    password,
                    studentState,
                    studentSex,
                    treePerson,
                })
                    .where('id = :id', { id })
                    .execute();
            });
            return {
                res: '修改成功',
            };
        }
        catch (_a) {
            return {
                res: '修改失败',
            };
        }
    }
    async getStudentsByPartId(id) {
        const studentList = await this.studentsRepository
            .createQueryBuilder('Students')
            .leftJoinAndSelect('Students.treePerson', 'tree_person')
            .select(['Students.id', 'tree_person.id'])
            .where('tree_person.id = :id', { id })
            .getMany();
        const result = studentList.map((item) => {
            return item.id;
        });
        return result;
    }
    async getDepartmentMessage(id) {
        const res = await this.studentsRepository
            .createQueryBuilder('students')
            .leftJoinAndSelect('students.treePerson', 'tree_person')
            .select(['students.id', 'tree_person.id'])
            .where('students.id = :id', { id })
            .getOne();
        const str = res.treePerson &&
            (await this.treePersonService.getNodeByCurrentId(res.treePerson.id));
        if (res.treePerson) {
            res.treePerson.title = str.fullTitles;
        }
        return res.treePerson || null;
    }
    async selectExamineeExist(query) {
        const { stuStr } = query;
        const users = stuStr.split('\n');
        const resultList = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i] !== '') {
                const result = await this.studentsRepository
                    .createQueryBuilder('Students')
                    .where('Students.studentNumber = :user', { user: users[i] })
                    .getOne();
                if (result) {
                    resultList.push({ msg: result, code: 1 });
                }
                else {
                    resultList.push({ msg: users[i], code: -1 });
                }
            }
        }
        return resultList;
    }
    async getExamineeMessage(query) {
        let { treeType = undefined, keyValue = undefined, liveState = undefined, startTime = undefined, endTime = undefined, } = query;
        if (treeType === '') {
            treeType = undefined;
        }
        if (keyValue === '') {
            keyValue = undefined;
        }
        if (liveState === '') {
            liveState = undefined;
        }
        if (startTime === '') {
            startTime = undefined;
        }
        if (endTime === '') {
            endTime = undefined;
        }
        const universalCondition = `(studentState = 'active' OR studentState = 'locked')`;
        const result = await this.studentsRepository
            .createQueryBuilder('Students')
            .leftJoinAndSelect('Students.treePerson', 'tree_person')
            .where(keyValue
            ? 'Students.studentName LIKE :keyValue OR Students.studentNumber LIKE :keyValue'
            : universalCondition, {
            keyValue: '%' + keyValue + '%',
        })
            .andWhere(liveState ? 'Students.studentState = :liveState' : universalCondition, { liveState })
            .andWhere(startTime ? ':startTime <= Students.createTime' : universalCondition, {
            startTime,
        })
            .andWhere(endTime ? ':endTime >= Students.createTime' : universalCondition, {
            endTime,
        })
            .getMany();
        let list = [...result];
        if (treeType) {
            treeType = treeType.split(',');
            treeType = treeType.map((item) => {
                if (item && !isNaN(Number(item))) {
                    return Number(item);
                }
            });
            list = result.filter((item) => {
                if (item.treePerson && item.treePerson.id) {
                    return treeType.includes(item.treePerson.id);
                }
            });
        }
        for (let i = 0; i < list.length; i++) {
            if (list[i].treePerson && list[i].treePerson.id) {
                const titles = await this.treePersonService.getNodeByCurrentId(list[i].treePerson.id);
                list[i].treePerson.title = titles.fullTitles;
            }
        }
        return list;
    }
    async getstudentdata(studentNumber) {
        return await this.studentsRepository
            .createQueryBuilder('students')
            .where('students.studentNumber = :studentNumber', { studentNumber })
            .getOne();
    }
    async getFindByStudentN(query) {
        const { studentNumber, studentpassword } = query;
        const res = await this.getstudentdata(studentNumber);
        if (query.flag) {
            return {
                numberFlag: true,
                res,
            };
        }
        if (!res) {
            return {
                numberFlag: 1,
                context: '账号或密码不正确',
            };
        }
        if (res.password) {
            if (studentNumber === res.studentNumber &&
                studentpassword !== res.password) {
                return {
                    passFlag: 2,
                    wordcontext: '您输入的密码不正确',
                };
            }
        }
        else {
            if ((studentNumber === res.studentNumber &&
                studentpassword === undefined) ||
                studentpassword === '') {
                if (res.studentState !== 'active') {
                    return {
                        stateFlag: 3,
                        statecontext: '未激活,请进行激活',
                    };
                }
                return {
                    scussFlag: true,
                    context: '登入成功',
                    studentName: res.studentName,
                    eMail: res.eMail,
                    studentNumber: res.studentNumber,
                    studentId: res.id,
                    studentTree: (await this.getDepartmentMessage(res.id)).title,
                };
            }
            return {
                passFlag: 2,
                wordcontext: '您输入的密码不正确',
            };
        }
        if (res.studentState !== 'active') {
            return {
                stateFlag: 3,
                statecontext: '未激活,请进行激活',
            };
        }
        return {
            scussFlag: true,
            context: '登入成功',
            studentName: res.studentName,
            eMail: res.eMail,
            studentNumber: res.studentNumber,
            studentId: res.id,
            studentTree: (await this.getDepartmentMessage(res.id)).title,
        };
    }
    async studentUpdate(query) {
        const { id } = query;
        return await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(students_entity_1.Students)
            .set(Object.assign({}, query))
            .where('id = :id', { id })
            .execute();
    }
    async getAllStudentsData() {
        const res = await this.studentsRepository
            .createQueryBuilder('students')
            .getMany();
        const len = res.length;
        return len;
    }
};
StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(students_entity_1.Students)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        tree_person_service_1.TreePersonService])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map