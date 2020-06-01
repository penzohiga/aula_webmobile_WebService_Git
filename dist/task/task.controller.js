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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const task_entity_1 = require("./task.entity");
const create_task_dto_1 = require("./dto/create-task.dto");
const swagger_1 = require("@nestjs/swagger");
let TaskController = (() => {
    let TaskController = class TaskController {
        constructor(taskService) {
            this.taskService = taskService;
        }
        async getTasks() {
            return await this.taskService.getTasks();
        }
        async getTaskById(id) {
            return await this.taskService.getById(id);
        }
        async createTask(createTaskDto) {
            return await this.taskService.createTask(createTaskDto);
        }
        async getCompleted(id) {
            return await this.taskService.getCompleted(id);
        }
        async updateTask(createTaskDto, id) {
            return await this.taskService.putTask(id, createTaskDto);
        }
        async deleteTask(id) {
            return await this.taskService.deleteTask(id);
        }
    };
    __decorate([
        common_1.Get(),
        swagger_1.ApiOperation({ summary: 'Get all Tasks', description: 'buscas todas as tarefas cadastradas no banco de dados' }),
        swagger_1.ApiResponse({ status: 200, description: 'ok', type: task_entity_1.Task, isArray: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "getTasks", null);
    __decorate([
        common_1.Get('/:id'),
        swagger_1.ApiOperation({ summary: 'Get specific Task', description: 'buscas uma tarefas cujo ID seja igual ao informado na requisição' }),
        swagger_1.ApiResponse({ status: 200, description: 'ok', type: task_entity_1.Task, isArray: false }),
        swagger_1.ApiResponse({ status: 404, description: 'Not Found' }),
        __param(0, common_1.Param('id', common_1.ParseIntPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "getTaskById", null);
    __decorate([
        common_1.Post(),
        common_1.UsePipes(common_1.ValidationPipe),
        swagger_1.ApiOperation({ summary: 'Create a Task', description: 'cria uma nova tarefa e registra no banco de dados' }),
        swagger_1.ApiResponse({ status: 200, description: 'ok', type: task_entity_1.Task, isArray: false }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "createTask", null);
    __decorate([
        common_1.Get('/tasks?completed=:true'),
        swagger_1.ApiOperation({ summary: 'Get specific Task', description: 'busca tarefas completas' }),
        swagger_1.ApiResponse({ status: 200, description: 'ok', type: task_entity_1.Task, isArray: false }),
        swagger_1.ApiResponse({ status: 404, description: 'Not Found' }),
        __param(0, common_1.Param('id', common_1.ParseIntPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "getCompleted", null);
    __decorate([
        common_1.Put('/:id'),
        common_1.UsePipes(common_1.ValidationPipe),
        __param(0, common_1.Body()),
        __param(1, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto, Number]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "updateTask", null);
    __decorate([
        common_1.Delete('/:id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "deleteTask", null);
    TaskController = __decorate([
        common_1.Controller('tasks'),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], TaskController);
    return TaskController;
})();
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map