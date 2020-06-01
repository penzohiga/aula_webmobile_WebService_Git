import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({
        description: 'Título da tarefa',
        required: true
    })
    @IsNotEmpty()
    title: string;


    @ApiProperty({
        description: 'Descrição da tarefa',
        required: true
    })
    @IsNotEmpty()
    description: string;
}