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
exports.ProfessorController = void 0;
const common_1 = require("@nestjs/common");
const professor_service_1 = require("./professor.service");
const swagger_1 = require("@nestjs/swagger");
const professor_dto_1 = require("./professor.dto");
let ProfessorController = (() => {
    let ProfessorController = class ProfessorController {
        constructor(professorService) {
            this.professorService = professorService;
        }
        async getProfessor() {
            return await this.professorService.getProfessors();
        }
        async addProfessor(professor) {
            return await this.professorService.addProfessor(professor);
        }
    };
    __decorate([
        common_1.Get(),
        swagger_1.ApiOperation({ summary: 'get professors', description: 'busca professores' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ProfessorController.prototype, "getProfessor", null);
    __decorate([
        common_1.Post(),
        swagger_1.ApiOperation({ summary: 'post professor', description: 'cria um perfil de professor' }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [professor_dto_1.ProfessorDTO]),
        __metadata("design:returntype", Promise)
    ], ProfessorController.prototype, "addProfessor", null);
    ProfessorController = __decorate([
        common_1.Controller('professors'),
        __metadata("design:paramtypes", [professor_service_1.ProfessorService])
    ], ProfessorController);
    return ProfessorController;
})();
exports.ProfessorController = ProfessorController;
//# sourceMappingURL=professor.controller.js.map