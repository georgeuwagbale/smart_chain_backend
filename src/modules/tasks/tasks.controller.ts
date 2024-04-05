import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/CreateTaskDto';
import { UpdateTaskDto } from './dtos/UpdateTaskDto';

@Controller('tasks')
export class TasksController {
    constructor(
        private tasksService: TasksService
    ){}

    @Get()
    async findAll() {
        return this.tasksService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.tasksService.findById(id);
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.create(createTaskDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.tasksService.update(id, updateTaskDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.tasksService.delete(id);
    }
}
