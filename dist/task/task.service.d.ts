import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks(): Promise<Task[]>;
    getById(id: number): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getCompleted(id: number): Promise<Task>;
    putTask(id: number, createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<Task>;
}
