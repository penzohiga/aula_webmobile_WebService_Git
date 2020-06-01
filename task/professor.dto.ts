import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProfessorDTO {
    @ApiProperty()
    id: number;

    @ApiProperty({
        description: 'Professor name: ',
    })
    @IsNotEmpty()
    name: string;


    @ApiProperty({
        description: 'University: ',
    })
    @IsNotEmpty()
    university: string;
} 