import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, ParseIntPipe, Query, NotFoundException } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    @ApiOperation({ summary: 'Get all Tasks', description: 'buscas todas as tarefas cadastradas no banco de dados'})
    @ApiResponse({ status: 200, description: 'ok', type: Task, isArray: true })
    async getTasks(): Promise<Task[]> {
        return await this.taskService.getTasks();
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Get specific Task', description: 'buscas uma tarefas cujo ID seja igual ao informado na requisição' })
    @ApiResponse({ status: 200, description: 'ok', type: Task, isArray: false })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return await this.taskService.getById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Create a Task', description: 'cria uma nova tarefa e registra no banco de dados' })
    @ApiResponse({ status: 200, description: 'ok', type: Task, isArray: false })
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return await this.taskService.createTask(createTaskDto);
    }

    @Get('/tasks?completed=:true')
    @ApiOperation({ summary: 'Get specific Task', description: 'busca tarefas completas' })
    @ApiResponse({ status: 200, description: 'ok', type: Task, isArray: false })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async getCompleted(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return await this.taskService.getCompleted(id);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    async updateTask(
        @Body() createTaskDto: CreateTaskDto,
        @Param('id') id: number
    ): Promise<Task> {
        return await this.taskService.putTask(id, createTaskDto);
    }

    @Delete('/:id')
    async deleteTask(@Param('id') id: number): Promise<Task> {
        return await this.taskService.deleteTask(id);
    }
}
