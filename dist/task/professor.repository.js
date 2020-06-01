"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorRepository = void 0;
const typeorm_1 = require("typeorm");
const professor_entity_1 = require("./professor.entity");
let ProfessorRepository = (() => {
    let ProfessorRepository = class ProfessorRepository extends typeorm_1.Repository {
        async getProfessor() {
            const query = this.createQueryBuilder('professor');
            const professors = await query.getMany();
            return professors;
        }
        async createProfessor(createProfessorDto) {
            const professors = new professor_entity_1.Professor();
            professors.name = createProfessorDto.name;
            professors.university = createProfessorDto.university;
            await professors.save();
            return professors;
        }
    };
    ProfessorRepository = __decorate([
        typeorm_1.EntityRepository(professor_entity_1.Professor)
    ], ProfessorRepository);
    return ProfessorRepository;
})();
exports.ProfessorRepository = ProfessorRepository;
//# sourceMappingURL=professor.repository.js.map