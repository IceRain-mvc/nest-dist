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
exports.OperationLogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const operation_log_entity_1 = require("./operation-log.entity");
const os = require('os');
let OperationLogService = class OperationLogService {
    constructor(operationLogRepository) {
        this.operationLogRepository = operationLogRepository;
        this.getIP = () => {
            const interfaces = os.networkInterfaces();
            for (const devName in interfaces) {
                const iface = interfaces[devName];
                for (let i = 0; i < iface.length; i++) {
                    const alias = iface[i];
                    if (alias.family === 'IPv4' &&
                        alias.address !== '127.0.0.1' &&
                        !alias.internal &&
                        alias.netmask === '255.255.255.0') {
                        return alias.address;
                    }
                }
            }
            return false;
        };
    }
    async create(body) {
        const res = this.operationLogRepository.create(Object.assign({}, body));
        return await this.operationLogRepository.save(res);
    }
    async getAll(query) {
        const { search, date, page = 1, pageSize = 10, field = 'id', order = 'ASC', } = query;
        const start = (page - 1) * pageSize;
        const searchTime = date ? JSON.parse(date) : undefined;
        let res = this.operationLogRepository.createQueryBuilder('operation_log');
        if (search && search !== '') {
            res = res.andWhere('operation_log.operationName like :operationName', {
                operationName: `%${search}%`,
            });
        }
        if (date) {
            if (searchTime.startTime) {
                res = res.andWhere('create_at > :start ', {
                    start: new Date(searchTime.startTime),
                });
            }
            if (searchTime.endTime) {
                res = res.andWhere('create_at < :end  ', {
                    end: new Date(searchTime.endTime),
                });
            }
        }
        if (field && order) {
            res = res.orderBy(`operation_log.${field}`, order);
        }
        res = res.skip(start).take(pageSize);
        const list = await res.getManyAndCount();
        return list;
    }
    async addOpreationLog(body) {
        const res = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .insert()
            .into(operation_log_entity_1.OperationLog)
            .values(Object.assign({}, body))
            .execute();
        return res;
    }
};
OperationLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(operation_log_entity_1.OperationLog)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OperationLogService);
exports.OperationLogService = OperationLogService;
//# sourceMappingURL=operation-log.service.js.map