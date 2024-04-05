import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from './entities/task.entity';
import { CreateTaskDto } from './dtos/CreateTaskDto';
import { UpdateTaskDto } from './dtos/UpdateTaskDto';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Tasks) private tasksRepository: Repository<Tasks>) {
    }

    async create (createTaskDto: CreateTaskDto) {
        const task = this.tasksRepository.create(createTaskDto);
        return this.tasksRepository.save(task);
    }

    async findAll() {
        return this.tasksRepository.find();
    }

    async findById(id: string) {
        const task = this.tasksRepository.findOne({where: {id: id}});
        if (task === undefined) {
            throw new Error('Task not found');
        }

        return task;
    }

    async update(id: string, updateTaskDto: UpdateTaskDto) {
        const task = await this.findById(id);
        return this.tasksRepository.update(task, updateTaskDto)
    }

    async delete(id: string) {
        const task = await this.findById(id);
        return this.tasksRepository.delete(task);
    }
}
