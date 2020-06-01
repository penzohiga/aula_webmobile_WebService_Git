import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { ProfessorService } from "./professor.service";
import { ApiOperation } from "@nestjs/swagger";
import { Professor } from "./professor.entity"
import {ProfessorDTO} from './professor.dto';

@Controller('professors')
export class ProfessorController {
    constructor(private readonly professorService: ProfessorService){}

    @Get()
    @ApiOperation({ summary: 'get professors', description: 'busca professores' })
    async getProfessor(){
        return await this.professorService.getProfessors();
    }

    @Post()
    @ApiOperation({summary: 'post professor', description: 'cria um perfil de professor'})
    async addProfessor(@Body() professor: ProfessorDTO) {
        return await this.professorService.addProfessor(professor);
    }

} 