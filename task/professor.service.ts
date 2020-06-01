import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfessorRepository } from './professor.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from './professor.entity'
import { CreateProfessorDto } from './dto/create-professor.dto';
import { ProfessorDTO } from './professor.dto'

@Injectable()
export class ProfessorService {
    constructor(
        @InjectRepository(ProfessorRepository)
        private professorRepository: ProfessorRepository
    ) {}

    async getProfessors(): Promise<Professor[]> {
        return this.professorRepository.getProfessor();
    }

    async addProfessor(createProfessorDto: CreateProfessorDto): Promise<Professor> {
        return this.professorRepository.createProfessor(createProfessorDto);
    }


}
