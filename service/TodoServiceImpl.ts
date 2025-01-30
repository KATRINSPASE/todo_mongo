import TodoService from "./TodoService";
import TodoRepository from "../dao/TodoRepository";
import Todo from "../model/Todo";
import {ObjectId} from "mongodb";

export default class TodoServiceImpl implements TodoService {
    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        this.todoRepository = todoRepository;
    }

    async createTodo(title: string, message: string): Promise<Todo> {
        return await this.todoRepository.createTodo(title, message);
    }

    async getAllTodos(): Promise<Todo[]> {
        return await this.todoRepository.getAllTodos();
    }

    async updateTodo(id: string, title: string, message: string, isCompleted: boolean): Promise<Todo> {
        const todoForSearch = new Todo();
        todoForSearch.id = new ObjectId(id);
        console.log(todoForSearch.id);
        const todo = await this.todoRepository.findById(id);
        if(!todo){
            throw new Error(`Task with id=${id} not found`);
        }
        todo.title = title;
        todo.message = message;
        todo.isCompleted = isCompleted;
        return await this.todoRepository.updateTodo(todo);
    }

    async deleteTodo(id: string): Promise<boolean> {
        const todo = await this.todoRepository.findById(id);
        if(!todo){
            throw new Error(`Task with id=${id} not found`);
        }
        return !!(await this.todoRepository.deleteTodo(id)).affected;
    }

    async getAllTodoByStatus(status: string): Promise<Todo[]> {
        return await this.todoRepository.getAllTodoByStatus(status !== 'inProcess');
    }

}