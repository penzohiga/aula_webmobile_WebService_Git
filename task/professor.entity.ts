import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Professor extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    university: string;
} 