import { IsNotEmpty, IsIn, IsOptional } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class GetTasksFilterDto {
    @ApiProperty({
        description: 'Estado da tarefa [DONE, IN_PROGRESS, OPEN]',
        required: false
    })
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
    status: TaskStatus;

    @ApiProperty({
        description: 'informação de busca para o título e/ou descrição',
        required: false
    })
    @IsOptional()
    @IsNotEmpty()
    search: string;
}