import { Repository, EntityRepository } from "typeorm";
import { Professor } from "./professor.entity";
import { CreateProfessorDto } from "./dto/create-professor.dto";

@EntityRepository(Professor)
export class ProfessorRepository extends Repository<Professor> {

    async getProfessor(): Promise<Professor[]> {
        
        const query = this.createQueryBuilder('professor');
        const professors = await query.getMany();
        return professors;
    }

    async createProfessor(createProfessorDto: CreateProfessorDto): Promise<Professor> {
        const professors = new Professor();
        professors.name = createProfessorDto.name;
        professors.university = createProfessorDto.university;
        await professors.save();
        
        return professors;
    }

}