import { ProfessorRepository } from './professor.repository';
import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create-professor.dto';
export declare class ProfessorService {
    private professorRepository;
    constructor(professorRepository: ProfessorRepository);
    getProfessors(): Promise<Professor[]>;
    addProfessor(createProfessorDto: CreateProfessorDto): Promise<Professor>;
}
