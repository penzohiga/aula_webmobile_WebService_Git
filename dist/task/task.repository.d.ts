import { Repository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
export declare class TaskRepository extends Repository<Task> {
    getTask(): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
