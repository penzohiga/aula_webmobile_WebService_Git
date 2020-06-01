import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TaskStatus } from "./task-status.enum";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Task extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    status: TaskStatus;
} 