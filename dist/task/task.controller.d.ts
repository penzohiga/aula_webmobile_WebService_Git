import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getTasks(): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getCompleted(id: number): Promise<Task>;
    updateTask(createTaskDto: CreateTaskDto, id: number): Promise<Task>;
    deleteTask(id: number): Promise<Task>;
}
