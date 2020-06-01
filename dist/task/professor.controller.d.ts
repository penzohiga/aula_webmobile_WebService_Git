import { ProfessorService } from "./professor.service";
import { Professor } from "./professor.entity";
import { ProfessorDTO } from './professor.dto';
export declare class ProfessorController {
    private readonly professorService;
    constructor(professorService: ProfessorService);
    getProfessor(): Promise<Professor[]>;
    addProfessor(professor: ProfessorDTO): Promise<Professor>;
}
