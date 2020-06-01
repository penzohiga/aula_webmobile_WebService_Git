import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfessorDto {
    @ApiProperty({
        description: 'Professor name: ',
        required: true
    })
    @IsNotEmpty()
    name: string;


    @ApiProperty({
        description: 'universidade: ',
        required: true
    })
    @IsNotEmpty()
    university: string;
}