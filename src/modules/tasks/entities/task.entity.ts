import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./TaskStatus";

@Entity()
export class Tasks{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}