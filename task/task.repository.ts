import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";
import { GetTasksFilterDto } from "./dto/get-task-filter.dto";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    async getTask(): Promise<Task[]> {
        
        const query = this.createQueryBuilder('task');
        const tasks = await query.getMany();
        return tasks;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const task = new Task();
        task.title = createTaskDto.title;
        task.description = createTaskDto.description;
        task.status = TaskStatus.OPEN;
        await task.save();
        
        return task;
    }

}