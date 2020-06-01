import { Repository } from "typeorm";
import { Professor } from "./professor.entity";
import { CreateProfessorDto } from "./dto/create-professor.dto";
export declare class ProfessorRepository extends Repository<Professor> {
    getProfessor(): Promise<Professor[]>;
    createProfessor(createProfessorDto: CreateProfessorDto): Promise<Professor>;
}
