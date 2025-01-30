import 'reflect-metadata'
import {DataSource} from "typeorm";
import Todo from "../model/Todo";
import dotenv from 'dotenv';


dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mongodb',
    entities:  [Todo],
    synchronize: true,
    useNewUrlParser: true,
    url: process.env.MONGODB_URI,
    //url:'mongodb+srv://katrinspase:h78tL3DASkVSxXCL@todo.u8u3b.mongodb.net/?retryWrites=true&w=majority&appName=todo',
    useUnifiedTopology: true,


});

export async function initDB() {
    try{
        await AppDataSource.initialize();

        console.log('Connected to MongoDB');
    }
    catch (e) {

        console.error('Error connecting to MongoDB', e);
        throw e;
    }
}