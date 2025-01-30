import {Router} from "express";
import expressAsyncHandler from "express-async-handler";
import NewTodoDto from "../todo/dto/NewTodoDto";
import TodoController from "../todo/controller/TodoController";
import TodoServiceImpl from "../todo/service/TodoServiceImpl";
import TodoRepository from "../todo/dao/TodoRepository";
import UpdateTodoDto from "../todo/dto/UpdateTodoDto";


const router = Router();

const todoRepository = new TodoRepository();
const todoService = new TodoServiceImpl(todoRepository);
const todoController = new TodoController(todoService);

router.post("", expressAsyncHandler(async (req, res) => {
    const newTodo = req.body as NewTodoDto;
    const createTodo = await todoController.createTodo(newTodo.title, newTodo.message);
    res.status(200).json(createTodo);
}))

router.get("", expressAsyncHandler(async (req, res) => {
    const allTodos = await todoController.getAllTodos();
    res.status(200).json(allTodos);
}))

router.put("/:id", expressAsyncHandler(async (req, res) => {
    const id:string = req.params.id;
    const updateTodo = req.body as UpdateTodoDto;
    const todo = await todoController.updateTodo(id,updateTodo);
    res.status(200).json(todo);
}))

router.delete("/:id", expressAsyncHandler(async (req, res) => {
    const id:string =req.params.id;
    const result:boolean = await todoController.deleteTodo(id);
    res.status(200).json(result);
}))

router.get("/:status", expressAsyncHandler(async (req, res) => {
    const status = req.params.status;
    const todos = await todoController.getAllTodoByStatus(status);
    res.status(200).json(todos);
}))

export default router;