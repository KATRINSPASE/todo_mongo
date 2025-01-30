import TodoService from "../service/TodoService";
import Todo from "../model/Todo";
import UpdateTodoDto from "../dto/UpdateTodoDto";

export default class TodoController {
    private todoService: TodoService;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    async createTodo(title: string, message: string): Promise<Todo> {
        return await this.todoService.createTodo(title, message);
    }

    async getAllTodos(): Promise<Todo[]> {
        return await this.todoService.getAllTodos();
    }

    async updateTodo(id: string, updateTodo: UpdateTodoDto): Promise<Todo> {
        return await this.todoService.updateTodo(id, updateTodo.title, updateTodo.message, updateTodo.isCompleted);
    }

    async deleteTodo(id: string) :Promise<boolean> {
        return await this.todoService.deleteTodo(id);
    }

    async getAllTodoByStatus(status: string) :Promise<Todo[]>{
        return await this.todoService.getAllTodoByStatus(status);
    }
}