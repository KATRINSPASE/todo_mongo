import {Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn} from "typeorm";
import {ObjectId} from "mongodb";



@Entity('todos')
export default class Todo {
    @ObjectIdColumn()
    id!: ObjectId;

    @Column()
    title!: string;

    @Column()
    message!: string;

    @Column({default: false})
    isCompleted!: boolean;
}