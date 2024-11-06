import { Router } from "express";
import { CreateTaskController } from "../modules/tasks/controllers/createTask/CreateTaskController";
import { GetTasksController } from "../modules/tasks/controllers/getTasks/GetTasksController";
import { UpdateTaskController } from "../modules/tasks/controllers/updateTask/UpdateTaskController";
import { GetTaskByIdController } from "../modules/tasks/controllers/getTaskById/GetTaskByIdController";
import { DeleteTaskController } from "../modules/tasks/controllers/deleteTask/DeleteTaskController";

const taskRoutes = Router();

const getTasksController = new GetTasksController();
const getTaskByIdController = new GetTaskByIdController();
const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

taskRoutes.get("/", getTasksController.handle);
taskRoutes.get("/:taskId", getTaskByIdController.handle);
taskRoutes.post("/", createTaskController.handle);
taskRoutes.put("/:taskId", updateTaskController.handle);
taskRoutes.delete("/:taskId", deleteTaskController.handle);

export { taskRoutes };
