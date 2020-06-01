import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity'
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {}

    async getTasks(): Promise<Task[]> {
        return this.taskRepository.getTask();
    }

    async getById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    async getCompleted(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }

    async putTask(id: number, createTaskDto: CreateTaskDto): Promise<Task> {
        const property = await this.taskRepository.findOne(id);
        return this.taskRepository.save({
            ...property,
            ...createTaskDto
        });
    }

    async deleteTask(id: number): Promise<Task> {
        this.taskRepository.delete(id);
        return this.getById(id);
    }

}
