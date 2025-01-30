import Todo from "../model/Todo";

export default interface TodoService {
    createTodo(title: string, message: string): Promise<Todo>;

    getAllTodos(): Promise<Todo[]>;

    updateTodo(id: string, title: string, message: string, isCompleted: boolean): Promise<Todo>;

    deleteTodo(id: string): Promise<boolean>;

    getAllTodoByStatus(status: string): Promise<Todo[]>;


}