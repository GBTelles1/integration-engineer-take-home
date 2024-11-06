import { Task } from "@prisma/client";
import { ICreateTaskDTO } from "../dtos";

export interface ITasksRepository {
  create({ title, description }: ICreateTaskDTO): Promise<Task>;
  getAll(): Promise<Task[]>;
  getById(taskId: string): Promise<Task>;
  update(taskToUpdate: Task): Promise<Task>;
  delete(taskId: string): Promise<Task>;
}
