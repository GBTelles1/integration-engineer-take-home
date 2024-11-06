import { container } from "tsyringe";
import { ITasksRepository } from "../../modules/tasks/repositories/ITasksRepository";
import { TasksRepository } from "../../modules/tasks/repositories/implementations/TasksRepository";

container.registerSingleton<ITasksRepository>(
  "TasksRepository",
  TasksRepository
);
